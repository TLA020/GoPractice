(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("ce5b"),s=a.n(n),o=(a("bf40"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("Chat")],1),a("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v("GoJackPot")])]),a("v-spacer"),t.user?a("span",[t._v(" "+t._s(t.user.email)+" ")]):t._e(),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-apps")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-bell")])],1),a("v-btn",{attrs:{icon:"",large:""}})],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)}),i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("v-toolbar",{attrs:{color:"grey darken-4",dark:""}},[a("v-icon",{staticClass:"ml-2"},[t._v("mdi-account-group")]),t._v(" 12 online ")],1),a("v-list",[t._l(t.items,(function(e,r){return[a("v-list-item",{key:r},[a("v-list-item-avatar",[a("v-img",{attrs:{src:e.avatar}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:t._s(e.userName)}}),a("p",{staticClass:"text--secondary subtitle-2"},[t._v(t._s(e.message))])],1)],1),a("v-divider",{key:r+10,attrs:{inset:e.inset}})]}))],2)],1),a("v-text-field",{staticClass:"ml-1 mr-1",attrs:{placeholder:"..."}})],1)},l=[],u={name:"Chat",data:function(){return{items:[{avatar:"https://api.adorable.io/avatars/64/",userName:"Darkangel_1337",message:"scared as fuck huh?"},{avatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/48/4830c1e5abc9cc8d8b02ec9679de7346e9514ef4_medium.jpg",userName:"TTV/xBrenni",message:"still wait since 1 year for the dc call pog"},{avatar:"https://api.adorable.io/avatars/64/5",userName:"LIVE|Pret0xX",message:"gogogo start bets"},{avatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/48/4830c1e5abc9cc8d8b02ec9679de7346e9514ef4_medium.jpg",userName:"TTV/xBrenni",message:"lol wtf go all in then pussy"}]}}},d=u,m=a("2877"),p=a("6544"),v=a.n(p),f=a("ce7e"),h=a("132d"),g=a("adda"),_=a("8860"),b=a("da13"),E=a("8270"),S=a("5d23"),T=a("8654"),w=a("71d9"),y=Object(m["a"])(d,c,l,!1,null,null,null),C=y.exports;v()(y,{VDivider:f["a"],VIcon:h["a"],VImg:g["a"],VList:_["a"],VListItem:b["a"],VListItemAvatar:E["a"],VListItemContent:S["a"],VListItemTitle:S["b"],VTextField:T["a"],VToolbar:w["a"]});var V={components:{Chat:C},data:function(){return{dialog:!1,drawer:null,items:[{icon:"mdi-home",text:"Home",url:"/"},{icon:"mdi-cash-usd",text:"Jackpot",url:"/jackpot"},{icon:"mdi-cog",text:"Settings"},{icon:"mdi-help-circle",text:"Help"}],source:{}}},created:function(){this.$vuetify.theme.dark=!0},computed:{user:function(){return this.$store.state.$auth.user}}},O=V,k=a("7496"),x=a("40dc"),$=a("5bc1"),R=a("8336"),B=a("a523"),N=a("f6c4"),A=a("f774"),P=a("2fa4"),L=a("2a7f"),j=Object(m["a"])(O,o,i,!1,null,null,null),I=j.exports;v()(j,{VApp:k["a"],VAppBar:x["a"],VAppBarNavIcon:$["a"],VBtn:R["a"],VContainer:B["a"],VIcon:h["a"],VMain:N["a"],VNavigationDrawer:A["a"],VSpacer:P["a"],VToolbarTitle:L["a"]});a("45fc");var U=a("8c4f"),G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{light:"",color:"primary"}},[a("v-toolbar-title",[t._v("Login / Register")])],1),a("v-card-text",[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-account",name:"email",label:"Email",type:"email",rules:t.emailRules,required:"","data-cy":"signinEmailField"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock-question",name:"password",label:"Password",type:"password","data-cy":"signinPasswordField",rules:t.passwordRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",disabled:!t.valid,loading:t.loading,"data-cy":"signinSubmitBtn"},on:{click:function(e){return t.submit("register")}}},[t._v("Register")]),a("v-btn",{attrs:{color:"secondary",disabled:!t.valid,loading:t.loading,"data-cy":"signinSubmitBtn"},on:{click:function(e){return t.submit("login")}}},[t._v("Login")])],1)],1),a("div",[t.error?a("v-alert",{attrs:{dismissible:"",type:"error"},model:{value:t.error,callback:function(e){t.error=e},expression:"error"}},[t._v(" "+t._s(t.error)+" ")]):t._e()],1)],1)],1)],1)},M=[],D=a("5530"),F=a("2f62"),K={name:"Signin",computed:Object(D["a"])({},Object(F["b"])("$auth",["error","loading"])),data:function(){return{valid:!1,email:"",password:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(t){this.$refs.form.validate()&&this.$store.dispatch("$auth/".concat(t),{email:this.email,password:this.password})}}},q=K,J=a("0798"),H=a("b0af"),W=a("99d9"),z=a("0e8f"),X=a("4bd4"),Q=a("a722"),Y=Object(m["a"])(q,G,M,!1,null,null,null),Z=Y.exports;v()(Y,{VAlert:J["a"],VBtn:R["a"],VCard:H["a"],VCardActions:W["a"],VCardText:W["b"],VContainer:B["a"],VFlex:z["a"],VForm:X["a"],VLayout:Q["a"],VSpacer:P["a"],VTextField:T["a"],VToolbar:w["a"],VToolbarTitle:L["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("GameStatsBar"),a("v-col",{attrs:{cols:"6"}},[a("Game")],1),a("v-col",{attrs:{cols:"6"}},[a("Bet")],1)],1)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"darken-1",attrs:{shaped:""}},[a("p",{staticClass:"text-center pa-4"},[a("v-icon",{staticStyle:{"font-size":"64px"}},[t._v("mdi-av-timer")]),t._v(" %"+t._s(t.share.toFixed(2))+" ")],1)])],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"darken-1",attrs:{shaped:""}},[a("p",{staticClass:"text-center pa-4"},[a("v-icon",{staticStyle:{"font-size":"64px"}},[t._v("mdi-cash-usd-outline ")]),t._v(" $"+t._s(t.totalBet.toFixed(2))+" ")],1)])],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"darken-1",attrs:{shaped:""}},[a("p",{staticClass:"text-center pa-4"},[a("v-icon",{staticClass:"mr-2",staticStyle:{"font-size":"64px"}},[t._v("mdi-gamepad-circle-up ")]),t._v(" "+t._s(t.players)+" players ")],1)])],1)],1)},rt=[],nt=(a("7db0"),a("d81d"),a("13d5"),{name:"GameStatsBar",data:function(){return{}},computed:{userBet:function(){var t=this;return this.$store.state.$game.game.userBets?this.$store.state.$game.game.userBets.find((function(e){return e.player.id===t.$store.state.$auth.user.ID})):{}},share:function(){return this.userBet&&this.userBet.share?this.userBet.share:0},totalBet:function(){return this.userBet&&this.userBet.bets?this.userBet.bets.map((function(t){return t.amount})).reduce((function(t,e){return t+e})):0},players:function(){return this.$store.state.$game.game.userBets?this.$store.state.$game.game.userBets.length:0}}}),st=nt,ot=a("62ad"),it=a("0fd9"),ct=Object(m["a"])(st,at,rt,!1,null,null,null),lt=ct.exports;v()(ct,{VCard:H["a"],VCol:ot["a"],VIcon:h["a"],VRow:it["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"darken-1 pa-4",attrs:{shaped:""}},[a("v-card-title",[t._v("Jackpot "+t._s(t.totalPot))]),"winnerPicked"===t.gameState?a("div",[a("h2",[t._v("WINNER: "+t._s(t.winner.user.email))]),a("h3",[t._v("WON: €"+t._s(t.winner.amount))]),a("p",[t._v("New game starting soon.")])]):t._e(),"idle"===t.gameState?a("div",["idle"===t.gameState?a("v-chip",{attrs:{color:"orange"}},[t._v("Starting when 2 players place bets")]):t._e()],1):t._e(),"inProgress"===t.gameState?a("div",[a("v-row",[a("v-expansion-panels",{attrs:{popout:""}},t._l(t.game.userBets,(function(e,r){return a("v-expansion-panel",{key:r,attrs:{"hide-actions":""}},[a("v-expansion-panel-header",[a("v-row",{staticClass:"spacer",attrs:{align:"center","no-gutters":""}},[a("v-col",{attrs:{cols:"2"}},[a("v-avatar",{attrs:{size:"36px"}},[a("img",{attrs:{alt:"Avatar",src:t.getAvatar(e.player.email)}})])],1),a("v-col",{attrs:{cols:"3"}},[a("strong",{domProps:{innerHTML:t._s(e.player.email)}})]),a("v-col",{staticClass:"text-no-wrap",attrs:{cols:"3"}},[a("v-chip",{staticClass:"ml-0 mr-2 black--text",attrs:{color:"light",label:""}},[a("strong",{staticClass:"mr-1"},[t._v(" €"+t._s(e.bets.map((function(t){return t.amount})).reduce((function(t,e){return t+e})))+",- ")])])],1),a("v-col",{attrs:{cols:"3"}},[t._v(" Chance "+t._s(e.share.toFixed(2))+"% ")]),a("v-col",{attrs:{cols:"1"}},[a("span",{staticClass:"float-right"},[t._v("("+t._s(e.bets.length)+") ")])])],1)],1),a("v-expansion-panel-content",[a("strong",[t._v("Bets placed")]),a("v-divider"),a("v-card-text",t._l(e.bets,(function(e){return a("ul",{key:e.Created},[a("li",[a("span",[t._v("€"+t._s(e.amount)+",-")])])])})),0)],1)],1)})),1)],1)],1):t._e()],1)},dt=[],mt=(a("4160"),a("159b"),{name:"Game",methods:{getAvatar:function(t){return"https://api.adorable.io/avatars/".concat(t)}},computed:{game:function(){return this.$store.state.$game.game},userBets:function(){return this.game.userBets},timeLeft:function(){return this.$store.state.$game.timeLeft},winner:function(){return this.$store.state.$game.winner},gameState:function(){var t=["idle","inProgress","ended","winnerPicked"],e=this.$store.state.$game.game.state||0;return t[e]},totalPot:function(){var t=0;return this.game.userBets?(this.game.userBets.forEach((function(e){t+=e.bets.map((function(t){return t.amount})).reduce((function(t,e){return t+e}))})),"$".concat(t,",-")):""}}}),pt=mt,vt=a("8212"),ft=a("cc20"),ht=a("cd55"),gt=a("49e2"),_t=a("c865"),bt=a("0393"),Et=Object(m["a"])(pt,ut,dt,!1,null,"77db9718",null),St=Et.exports;v()(Et,{VAvatar:vt["a"],VCard:H["a"],VCardText:W["b"],VCardTitle:W["c"],VChip:ft["a"],VCol:ot["a"],VDivider:f["a"],VExpansionPanel:ht["a"],VExpansionPanelContent:gt["a"],VExpansionPanelHeader:_t["a"],VExpansionPanels:bt["a"],VRow:it["a"]});var Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"darken-1",attrs:{shaped:""}},[a("div",{staticClass:"pa-4"},[a("v-card-title",[t._v("Place a bet")]),a("v-form",{ref:"form",staticClass:"mt-4"},[a("v-row",[a("v-slider",{staticClass:"align-center col-12 p-4",attrs:{"append-icon":"mdi-currency-usd","prepend-icon":"mdi-currency-usd-off",max:250,"thumb-label":"always",min:1,"hide-details":""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),a("div",{staticClass:"text-right mr-4"},[a("v-btn",{staticClass:"mr-4",attrs:{color:"red"}},[t._v(" Reset ")]),a("v-btn",{attrs:{disabled:!1,color:"secondary",loading:t.placingBet},on:{click:t.placeBet}},[t._v(" Place bet ")])],1)],1)],1)])},wt=[],yt={name:"Bet",data:function(){return{placingBet:!1,amount:0}},methods:{placeBet:function(){this.placingBet=!0,this.$store.dispatch("sendSocket",{event:"place-bet",data:{amount:this.amount}}),this.placingBet=!1,this.amount=0}}},Ct=yt,Vt=a("ba0d"),Ot=Object(m["a"])(Ct,Tt,wt,!1,null,"f5dfddf8",null),kt=Ot.exports;v()(Ot,{VBtn:R["a"],VCard:H["a"],VCardTitle:W["c"],VForm:X["a"],VRow:it["a"],VSlider:Vt["a"]});var xt={name:"jackpot",components:{GameStatsBar:lt,Game:St,Bet:kt},data:function(){return{bet:{amount:0}}},methods:{},computed:{currentUsers:function(){return this.$store.state.$game.currentUsers}}},$t=xt,Rt=Object(m["a"])($t,tt,et,!1,null,"2e2874ce",null),Bt=Rt.exports;v()(Rt,{VCol:ot["a"],VContainer:B["a"]});var Nt={Authenticated:function(t){return t.authenticated}},At={SET_USER:function(t,e){t.user=e},REMOVE_USER:function(t){t.user=null},SET_AUTHENTICATED:function(t,e){t.authenticated=e},SET_ERROR:function(t,e){t.error=e},SET_LOADING:function(t,e){t.loading=e}},Pt={user:null,authenticated:!1,error:"",loading:!1},Lt=(a("d3b7"),a("bc3a")),jt=a.n(Lt),It=(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_BASE_URL||"/api/v1")+"/accounts",Ut={login:function(t,e){var a=t.commit,r=t.dispatch,n=e.email,s=e.password;a("SET_LOADING",!0),jt.a.post("".concat(It,"/login"),{email:n,password:s}).then((function(t){var e=t.data;a("SET_USER",e),a("SET_ERROR",null),r("sendSocket",{event:"auth",data:e},{root:!0}),localStorage.setItem("user",JSON.stringify(e)),Xt.push("/")})).catch((function(t){a("SET_ERROR","Invalid credentials, try again"),console.log(t)})).finally((function(){a("SET_LOADING",!1)}))},register:function(t,e){var a=t.commit,r=t.dispatch,n=e.email,s=e.password;a("SET_LOADING",!0),jt.a.post("".concat(It,"/register"),{email:n,password:s}).then((function(t){var e=t.data;a("SET_USER",e),a("SET_ERROR",null),r("sendSocket",{event:"auth",data:e},{root:!0}),localStorage.setItem("user",JSON.stringify(e)),Xt.push("/")})).catch((function(t){a("SET_ERROR","email already in use, consider another"),console.log(t)})).finally((function(){a("SET_LOADING",!1)}))}},Gt={namespaced:!0,getters:Nt,mutations:At,state:Pt,actions:Ut},Mt={},Dt={SET_CURRENT_USERS:function(t,e){t.currentUsers=e},SET_GAME:function(t,e){t.game=Object.assign({},e)},SET_TIME_LEFT:function(t,e){t.timeLeft=e},SET_WINNER:function(t,e){t.winner.user=e.player,t.winner.amount=e.amount}},Ft={currentUsers:[],game:{},winner:{user:{},amount:0},timeLeft:null},Kt={doWhat:function(t){var e=t.commit;e("SET_LOADING",!0)}},qt={namespaced:!0,getters:Mt,mutations:Dt,state:Ft,actions:Kt},Jt={};r["default"].prototype.$socketEvent=function(t,e){Jt[t]||(Jt[t]=[]),Jt[t].push(e)};var Ht=function(t){t.subscribe((function(e){if("SOCKET_ONMESSAGE"===e.type){var a=e.payload,r=a.event,n=a.data;switch(Jt[r]&&Jt[r].forEach((function(t){return t(n)})),r){case"current-users":t.commit("$game/SET_CURRENT_USERS",n.users);break;case"current-game":t.commit("$game/SET_GAME",n.game);break;case"new-game":t.commit("$game/SET_TIME_LEFT",null),t.commit("$game/SET_GAME",n.game);break;case"start-game":t.commit("$game/SET_GAME",n.game);break;case"bet-placed":t.commit("$game/SET_GAME",n.game);break;case"shares-updated":t.commit("$game/SET_GAME",n.game);break;case"time-left":t.commit("$game/SET_TIME_LEFT",n.timeLeft);break;case"winner-picked":t.commit("$game/SET_WINNER",n),t.commit("$game/SET_GAME",n.game);break;default:return}}}))};r["default"].use(F["a"]);var Wt=new F["a"].Store({state:{socket:{isConnected:!1,message:{},reconnectError:!1}},mutations:{SOCKET_ONOPEN:function(t,e){r["default"].$socket=e.currentTarget,t.$auth.user&&r["default"].$socket.sendObj({event:"auth",data:t.$auth.user}),t.socket.isConnected=!0},SOCKET_ONCLOSE:function(t){t.socket.isConnected=!1},SOCKET_ONERROR:function(t,e){console.error(t,e)},SOCKET_ONMESSAGE:function(t,e){t.socket.message=e},SOCKET_RECONNECT:function(t,e){console.info(t,e)},SOCKET_RECONNECT_ERROR:function(t){t.socket.reconnectError=!0}},actions:{sendSocket:function(t,e){r["default"].$socket.sendObj(e)}},modules:{$auth:Gt,$game:qt},plugins:[Ht]});r["default"].use(U["a"]);var zt=new U["a"]({routes:[{path:"/auth",name:"Auth",component:Z,meta:{authRequired:!1}},{path:"/",name:"jackpot",component:Bt,meta:{authRequired:!0}}]});zt.beforeEach((function(t,e,a){if(t.matched.some((function(t){return t.meta.authRequired})))if(Wt.state.$auth.user)a();else{var r=JSON.parse(window.localStorage.getItem("user"));if(r)return Wt.commit("$auth/SET_USER",r),a();a({path:"/auth"})}else a()}));var Xt=zt,Qt=(a("99af"),a("caad"),a("2532"),a("b408")),Yt=a.n(Qt),Zt={install:function(t){var e="";e=location.hostname.includes("localhost")?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SOCKET_URL||"ws://".concat(location.hostname,":5001/ws"):Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SOCKET_URL||"wss://".concat(location.hostname,":").concat(location.port,"/ws"),t.use(Yt.a,"".concat(e),{store:Wt,format:"json"})}};r["default"].config.productionTip=!1,r["default"].use(Zt),r["default"].use(s.a),r["default"].prototype.$store=Wt,new r["default"]({render:function(t){return t(I)},store:Wt,router:Xt,vuetify:new s.a({theme:{dark:!0}})}).$mount("#app")}});
//# sourceMappingURL=app.b4921343.js.map