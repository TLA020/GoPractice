package main

import (
	u "goprac/utils"
	"log"
	"math"
	"math/rand"
	"sync"
	"time"
)

const gameDuration = 60

const (
	Idle       = 0
	InProgress = 1
	Ended      = 2
	WinnerPicked = 3
)

type Game struct {
	ID        int64     `json:"id"`
	NewTime   time.Time `json:"new_time,omitempty"`
	StartTime time.Time `json:"start_time,omitempty"`
	EndTime   time.Time `json:"end_time,omitempty"`
	Duration  int       `json:"duration"`
	UserBets  []UserBet `json:"userBets"`
	State     int        `json:"state"`
	BetsMutex *sync.Mutex
	StateMutex *sync.Mutex
}

type GameManager struct {
	mutex       sync.Mutex
	pastGames   map[int64]Game
	currentGame Game
	events      chan interface{}
}

type Player struct {
	Id    int    `json:"id"`
	Email string `json:"email"`
}

func NewPlayer(uid int, email string) *Player {
	return &Player{
		Id:    uid,
		Email: email,
	}
}

type Bet struct {
	Amount  float64 `json:"amount"`
	Created time.Time
}

func NewBet(amount float64) *Bet {
	return &Bet{
		Amount:  amount,
		Created: time.Now(),
	}
}

type UserBet struct {
	Bets   []*Bet  `json:"bets"`
	Player *Player `json:"player"`
	StartTicket int `json:"startTicket"`
	EndTicket int `json:"endTicket"`
	Share  float64 `json:"share"`
}

func NewUserBet(bet *Bet, player *Player) *UserBet {
	return &UserBet{
		Bets:   []*Bet{bet},
		Player: player,
	}
}

func (ub UserBet) GetTotalBet() (total float64) {
	for _, bet := range ub.Bets {
		total = total + bet.Amount
	}
	return
}

func NewGameManager() *GameManager {
	return &GameManager{
		mutex:     sync.Mutex{},
		pastGames: make(map[int64]Game),
		events:    make(chan interface{}),
	}
}

func (gm *GameManager) Events() chan interface{} {
	return gm.events
}

func (gm *GameManager) NewGame() {
	gm.mutex.Lock()
	now := time.Now()
	gameID := now.UnixNano()

	newGame := Game{
		ID:        gameID,
		NewTime:   now,
		Duration:  gameDuration,
		BetsMutex: &sync.Mutex{},
		StateMutex: &sync.Mutex{},
		UserBets:  make([]UserBet, 0),
		State: 		Idle,
	}

	gm.currentGame = newGame

	gm.mutex.Unlock()

	gm.events <- GameEvent{
		Type: "new-game",
		Game: newGame,
	}

	log.Println("[GAME] New game started")
	log.Println("[GAME] Waiting for bets from at least 2 ppl..")
}

func (gm *GameManager) GetCurrentGame() *Game {
	gm.mutex.Lock()
	defer gm.mutex.Unlock()

	return &gm.currentGame
}

func (gm *GameManager) StartGame() {
	gm.mutex.Lock()
	gm.currentGame.StartTime = time.Now()

	gm.currentGame.SetState(InProgress)

	gm.events <- GameEvent{
		Type: "start-game",
		Game: gm.currentGame,
	}

	gm.mutex.Unlock()

	log.Println("[GAME] Game Started")

	defer func() {
		for d := range u.Countdown(u.NewTicker(time.Second), 30*time.Second) {
			gm.events <- CountDownEvent{
				TimeLeft: d.Seconds(),
			}
		}
		gm.EndGame()
	}()
}

func (gm *GameManager) EndGame() {
	gm.mutex.Lock()

	gm.currentGame.EndTime = time.Now()
	gm.pastGames[gm.currentGame.ID] = gm.currentGame

	gm.currentGame.SetState(Ended)

	gm.events <- GameEvent{
		Type: "end-game",
		Game: gm.currentGame,
	}

	gm.mutex.Unlock()

	log.Print("[GAME] Has ended, no more bets!")
	_ = gm.currentGame.GetWinner()

	defer func() {
		log.Println("[GAME] starting new game in 5 seconds...")
		time.Sleep(time.Second * 5)
		gm.NewGame()
	}()
}

func (g *Game) SetState(state int) {
	g.StateMutex.Lock()
	defer g.StateMutex.Unlock()
	g.State = state
}

func (g *Game) PlaceBet(player *Player, amount float64) {
	log.Printf("[GAME] NEW BET:($%.2f) FROM => Id: %d ", amount, player.Id)
	g.BetsMutex.Lock()

	bet := NewBet(amount)
	// lookup current user bet if exist.
	found := false
	for i, userBet := range g.UserBets {
		if userBet.Player.Id == player.Id {
			g.UserBets[i].Bets = append(userBet.Bets, bet)
			found = true
		}
	}

	if !found {
		userBet := NewUserBet(bet, player)
		g.UserBets = append(g.UserBets, *userBet)
	}

	g.BetsMutex.Unlock()

	gameManager.events <- GameEvent{
		Type:   "bet-placed",
		Game:   *gameManager.GetCurrentGame(),
		Player: player,
		Amount: amount,
	}

	log.Printf("[GAME] TOTAL BETS:($%.2f) ", g.GetTotalPrice())

	if g.StartTime.IsZero() && len(g.UserBets) >= 2 {
		log.Print("[GAME] Enough players starting game...")
		go gameManager.StartGame()
	}
}

func (g Game) GetTotalPrice() (totalPrice float64) {
	for _, userBet := range g.UserBets {
		for _, bet := range userBet.Bets {
			totalPrice = totalPrice + bet.Amount
		}
	}
	return
}

func (g Game) GetTotalPriceOfUsers() (pricePerUser map[int]float64) {
	pricePerUser = make(map[int]float64)

	for _, userBet := range g.UserBets {
		for _, bet := range userBet.Bets {
			pricePerUser[userBet.Player.Id] = pricePerUser[userBet.Player.Id] + bet.Amount
		}
	}
	return
}


func (g *Game) CalculateShares() {
	g.BetsMutex.Lock()
	defer func() {
		gameManager.events <- GameEvent{
			Type:   "shares-updated",
			Game:   *g,
		}
		g.BetsMutex.Unlock()
	}()

	// using cents to increase accuracy of 'user-tickets'.
	total := math.Round(g.GetTotalPrice())
	totalCents := total * 100
	startTicket := 0

	log.Printf("[CALC-SHARES] Total pot: $%f", total)

	for _, ub := range g.UserBets {
		betInCents := int(ub.GetTotalBet()) * 100
		ub.StartTicket = startTicket
		ub.EndTicket = startTicket + betInCents
		ub.Share = (100 / totalCents) * float64(betInCents)

		startTicket += betInCents +1
		log.Printf("[CALC-SHARES] User: %d | StartTicket: %d | EndTicket: %d | Share: %f |", ub.Player.Id, ub.StartTicket, ub.EndTicket, ub.Share)
	}
}

func (g *Game) GetWinner()  {
	log.Print("[GAME] picking a winner...")
	g.CalculateShares() // extra safety, might be unnecessary -.-'
	g.BetsMutex.Lock()
	defer g.BetsMutex.Unlock()

	totalTickets := int(math.Round(g.GetTotalPrice()) * 100)
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	winningTicket := r.Intn(totalTickets)

	for _, userBet := range g.UserBets {
		if userBet.StartTicket <= winningTicket && userBet.EndTicket >= winningTicket {
			g.SetState(WinnerPicked)
			gameManager.events <- GameEvent{
				Type:   "winner-picked",
				Game:   *g,
				Player: userBet.Player,
				Amount: g.GetTotalPrice() - userBet.GetTotalBet(),
			}
		}
	}
}
