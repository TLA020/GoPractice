(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1a1c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA5LTI4VDE0OjA4OjU0KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOS0yOFQxNToyOTowNyswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wOS0yOFQxNToyOTowNyswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4ODhlMDIxMS1hY2RkLWQxNDEtYjkwOC02ZDcxNzM1NzBjZWQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozZjM4ZDA4OS1jNzc4LTk5NDEtYjYyYy02ZDU2YzA4MjZkMTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMTJlODhkMy01Yjk4LTI1NDgtODYwMC0xNjdjYjYwODVmMzYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYxMmU4OGQzLTViOTgtMjU0OC04NjAwLTE2N2NiNjA4NWYzNiIgc3RFdnQ6d2hlbj0iMjAyMC0wOS0yOFQxNDowODo1NCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjg4OGUwMjExLWFjZGQtZDE0MS1iOTA4LTZkNzE3MzU3MGNlZCIgc3RFdnQ6d2hlbj0iMjAyMC0wOS0yOFQxNToyOTowNyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjFozBEAAAPRSURBVGje1Zo9TBRBFMenwMTq8OBolMrEhlCBoVE7QmIFNCQkdBiqA4E7UdSgnkgk8VS8g/uoUCujCY0YCgtCh40J0YpOo4mGxIKCxEDG9+beuHvr3t7s7gzuFT/mLje78/+9nf2awDjnrJERf1LsVAK4ArwHegAWUXooI2ZN2AWGgI8AB94B7REM307ZOGUdsgukgJ/0o2QRaIpA8CbKYs+GWVN2gTgw7+iE/AJG/mP4EcrgzIVZ43YB5Axw4NIZ2QG6jzF4N43pluWAsjKnAPKoxkaSN0CbweBtNIZXhqzs7yZwDjiqswNkzkD4OfsYk6yZX/133CPKWFMAKSgIID+AQQ3BB2lfYr9TLMbHoZ2B9ob4XjVmwb5tLYFORQHJNtARIHgHbSv2Mw2MU5thcZ5nrbwI3IbvE3A0qF+nigDy0qcE8hyIKQSPUd+q4Dhd5iD4EmvhJZbgK9CWob0L7TgcDcrEVAXOBxBAftM9pVb4FPUR/bGyyC34nIVql4ACkKP2CTBNkpRJWQBZCyiBfAUu2/aFn7/I37HaSQiOc3wRql6k6ZKzURLVj8vqr7llrCdwIYSA5C1BJ2gleBpYgHDLELLkCC6r/wx+n6aTmrL4FkA2NEiI4JUTNMbvQTg8QcvU5lzA6mfENiL8Rq18KgK9YcPLE/QOVPQpBCuLE9Q9uFX9Vnv1e8MIIFtBw09CgFkI/piqWvAIXqP6W17ZVAUGgk4bbHNiuiTqBpfVX4K+Kav6AzoEmP2GowpOG7zK5D3muhMUvW9deT7Uy+VHYMT/9Gnm1+kILCscATn35bYqj/F+BJjH460WAUf1d1Qy+RUYMyXgUv0xEwLIrgmBUnX1d1XzBBGY0i0g7wnysktjGBM4CXzTKeCY+99pDGMCyKwuAZfq3/STJagArmDs6RDA6s9b1d+jfRsXQDJhBWT109a7b8ZvjjACp4H9MAJY/QdW9fdpn8cmwGh5I5AAfs9XVz8bJENYgbPAYRABWf1kpfqHtK9jF0CKfgVW6OEuDQJU/WLQ8XUIdPgVcMx9HnBJRpsAsqoqIKt/zar+apixdQl0qQpUqt9qr35XFASQ114CeQgurzwz9LJD27CoCFz0FqhUf0HM/b99LkVJAFl3e6WUz/uOub+uY0zdAn3VL/UxcaPC4C8AnPtJa+73RVEA2XRK4ILtQ9YiZGilYVPXeCYE+t1WJ+SyebryutgfZYF6SzDbOscyJTDsITDcCALIJ5fwn3WPY1Jg1EVgtJEEnEswuybGMC0wYROYaEQB/B+HV/TMc8KoQMP/v1Aj8wd4XIddvY9KvgAAAABJRU5ErkJggg=="},5617:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("ce5b"),r=a.n(i),s=(a("bf40"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("Chat")],1),a("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v("GoJackPot")])]),a("v-spacer"),t.user?a("span",[t._v(" "+t._s(t.user.email)+" ")]):t._e(),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-apps")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-bell")])],1),a("v-btn",{attrs:{icon:"",large:""}})],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)}),o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("v-toolbar",{attrs:{color:"grey darken-4",dark:""}},[a("v-icon",{staticClass:"ml-2"},[t._v("mdi-account-group")]),t._v(" 12 online ")],1),a("v-list",[t._l(t.items,(function(e,n){return[a("v-list-item",{key:n},[a("v-list-item-avatar",[a("v-img",{attrs:{src:e.avatar}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:t._s(e.userName)}}),a("p",{staticClass:"text--secondary subtitle-2"},[t._v(t._s(e.message))])],1)],1),a("v-divider",{key:n+10,attrs:{inset:e.inset}})]}))],2)],1),a("v-text-field",{staticClass:"ml-1 mr-1",attrs:{placeholder:"..."}})],1)},l=[],u={name:"Chat",data:function(){return{items:[{avatar:"https://api.adorable.io/avatars/64/",userName:"Darkangel_1337",message:"scared as fuck huh?"},{avatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/48/4830c1e5abc9cc8d8b02ec9679de7346e9514ef4_medium.jpg",userName:"TTV/xBrenni",message:"still wait since 1 year for the dc call pog"},{avatar:"https://api.adorable.io/avatars/64/5",userName:"LIVE|Pret0xX",message:"gogogo start bets"},{avatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/48/4830c1e5abc9cc8d8b02ec9679de7346e9514ef4_medium.jpg",userName:"TTV/xBrenni",message:"lol wtf go all in then pussy"}]}}},d=u,m=a("2877"),h=a("6544"),p=a.n(h),f=a("ce7e"),v=a("132d"),g=a("adda"),b=a("8860"),w=a("da13"),E=a("8270"),A=a("5d23"),S=a("8654"),k=a("71d9"),y=Object(m["a"])(d,c,l,!1,null,null,null),T=y.exports;p()(y,{VDivider:f["a"],VIcon:v["a"],VImg:g["a"],VList:b["a"],VListItem:w["a"],VListItemAvatar:E["a"],VListItemContent:A["a"],VListItemTitle:A["b"],VTextField:S["a"],VToolbar:k["a"]});var C={components:{Chat:T},data:function(){return{dialog:!1,drawer:null,items:[{icon:"mdi-home",text:"Home",url:"/"},{icon:"mdi-cash-usd",text:"Jackpot",url:"/jackpot"},{icon:"mdi-cog",text:"Settings"},{icon:"mdi-help-circle",text:"Help"}],source:{}}},created:function(){this.$vuetify.theme.dark=!0},computed:{user:function(){return this.$store.state.$auth.user}}},R=C,I=a("7496"),O=a("40dc"),x=a("5bc1"),_=a("8336"),V=a("a523"),M=a("f6c4"),B=a("f774"),j=a("2fa4"),N=a("2a7f"),L=Object(m["a"])(R,s,o,!1,null,null,null),G=L.exports;p()(L,{VApp:I["a"],VAppBar:O["a"],VAppBarNavIcon:x["a"],VBtn:_["a"],VContainer:V["a"],VIcon:v["a"],VMain:M["a"],VNavigationDrawer:B["a"],VSpacer:j["a"],VToolbarTitle:N["a"]});a("45fc");var P=a("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{light:"",color:"primary"}},[a("v-toolbar-title",[t._v("Login / Register")])],1),a("v-card-text",[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-account",name:"email",label:"Email",type:"email",rules:t.emailRules,required:"","data-cy":"signinEmailField"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock-question",name:"password",label:"Password",type:"password","data-cy":"signinPasswordField",rules:t.passwordRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",disabled:!t.valid,loading:t.loading,"data-cy":"signinSubmitBtn"},on:{click:function(e){return t.submit("register")}}},[t._v("Register")]),a("v-btn",{attrs:{color:"secondary",disabled:!t.valid,loading:t.loading,"data-cy":"signinSubmitBtn"},on:{click:function(e){return t.submit("login")}}},[t._v("Login")])],1)],1),a("div",[t.error?a("v-alert",{attrs:{dismissible:"",type:"error"},model:{value:t.error,callback:function(e){t.error=e},expression:"error"}},[t._v(" "+t._s(t.error)+" ")]):t._e()],1)],1)],1)],1)},U=[],Z=a("5530"),F=a("2f62"),W={name:"Signin",computed:Object(Z["a"])({},Object(F["b"])("$auth",["error","loading"])),data:function(){return{valid:!1,email:"",password:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(t){this.$refs.form.validate()&&this.$store.dispatch("$auth/".concat(t),{email:this.email,password:this.password})}}},Y=W,$=a("0798"),J=a("b0af"),z=a("99d9"),Q=a("0e8f"),H=a("4bd4"),X=a("a722"),K=Object(m["a"])(Y,D,U,!1,null,null,null),q=K.exports;p()(K,{VAlert:$["a"],VBtn:_["a"],VCard:J["a"],VCardActions:z["a"],VCardText:z["b"],VContainer:V["a"],VFlex:Q["a"],VForm:H["a"],VLayout:X["a"],VSpacer:j["a"],VTextField:S["a"],VToolbar:k["a"],VToolbarTitle:N["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-col",[a("GameStatsBar")],1),a("v-col",[a("Game")],1),a("v-col",[a("Bet")],1)],1)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"darken-1",attrs:{shaped:""}},[a("p",{staticClass:"text-center pa-4"},[a("v-icon",{staticStyle:{"font-size":"64px"}},[t._v("mdi-av-timer")]),t._v(" %"+t._s(t.share.toFixed(2))+" ")],1)])],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"darken-1",attrs:{shaped:""}},[a("p",{staticClass:"text-center pa-4"},[a("v-icon",{staticStyle:{"font-size":"64px"}},[t._v("mdi-cash-usd-outline ")]),t._v(" $"+t._s(t.totalBet.toFixed(2))+" ")],1)])],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"darken-1",attrs:{shaped:""}},[a("p",{staticClass:"text-center pa-4"},[a("v-icon",{staticClass:"mr-2",staticStyle:{"font-size":"64px"}},[t._v("mdi-gamepad-circle-up ")]),t._v(" "+t._s(t.players)+" players ")],1)])],1)],1)},nt=[],it=(a("7db0"),a("d81d"),a("13d5"),{name:"GameStatsBar",data:function(){return{}},computed:{userBet:function(){var t=this;return this.$store.state.$game.game.userBets?this.$store.state.$game.game.userBets.find((function(e){return e.player.id===t.$store.state.$auth.user.ID})):{}},share:function(){return this.userBet&&this.userBet.share?this.userBet.share:0},totalBet:function(){return this.userBet&&this.userBet.bets?this.userBet.bets.map((function(t){return t.amount})).reduce((function(t,e){return t+e})):0},players:function(){return this.$store.state.$game.game.userBets?this.$store.state.$game.game.userBets.length:0}}}),rt=it,st=a("62ad"),ot=a("0fd9"),ct=Object(m["a"])(rt,at,nt,!1,null,null,null),lt=ct.exports;p()(ct,{VCard:J["a"],VCol:st["a"],VIcon:v["a"],VRow:ot["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"darken-1 pa-4",attrs:{shaped:""}},[a("v-card-title",[t._v(" Jackpot")]),a("div",[a("div",{attrs:{id:"wheel"}},[a("JackpotWheel",{ref:"wheel",attrs:{pool:t.pool,"offset-degrees":270,"font-color":"white","idle-speed":1,"chart-width":60,"time-left":t.timeLeft,"winner-text":t.winnerText},on:{stopped:t.onStopped}})],1),t.userBets?t._e():a("div",[t._v(" Place bets ")]),a("v-expansion-panels",{attrs:{popout:""}},t._l(t.game.userBets,(function(e,n){return a("v-expansion-panel",{key:n,attrs:{"hide-actions":""}},[a("v-expansion-panel-header",[a("v-row",{staticClass:"spacer",attrs:{align:"center","no-gutters":""}},[a("v-col",{attrs:{cols:"2"}},[a("v-avatar",{attrs:{size:"36px"}},[a("img",{attrs:{alt:"Avatar",src:t.getAvatar(e.player.email)}})])],1),a("v-col",{attrs:{cols:"6"}},[a("strong",{domProps:{innerHTML:t._s(e.player.email)}})]),a("v-col",{staticClass:"text-no-wrap",attrs:{cols:"4"}},[a("v-chip",{staticClass:"ml-0 mr-2 black--text",attrs:{color:"light",label:""}},[a("strong",{staticClass:"mr-1"},[t._v(" €"+t._s(e.bets.map((function(t){return t.amount})).reduce((function(t,e){return t+e})).toFixed(2))+",- ")])])],1)],1)],1),a("v-expansion-panel-content",[a("strong",[t._v("Bets placed")]),a("v-divider"),a("v-card-text",t._l(e.bets,(function(e){return a("ul",{key:e.Created},[a("li",[a("span",[t._v("€"+t._s(e.amount)+",-")])])])})),0)],1)],1)})),1)],1)],1)},dt=[],mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("canvas",{ref:"canvas"}),n("img",{style:t.tickerRotationDegrees,attrs:{src:a("1a1c"),id:"pointer",alt:"Pointer"}})])},ht=[];a("cb29"),a("4160"),a("b680"),a("d3b7"),a("159b");function pt(t){return t*(Math.PI/180)}function ft(t){return 57.2957795*t}function vt(t){return 2*Math.PI/100*t}function gt(t){return 1+--t*t*t*t*t}function bt(t,e){return t*Math.cos(e)}function wt(t,e){return t*Math.sin(e)}function Et(t){return t*(2-t)}function At(t){return new Promise((function(e){var a=document.createElement("canvas"),n=a.getContext("2d"),i=new Image;i.src=t,i.onload=function(){a.width=i.width,a.height=i.height,n.save(),n.beginPath(),n.arc(.5*i.width,.5*i.width,.5*i.width,0,2*Math.PI,!0),n.closePath(),n.clip(),n.drawImage(i,0,0,i.width,i.height),n.beginPath(),n.arc(0,0,2,0,2*Math.PI,!0),n.clip(),n.closePath(),n.restore(),e(a)}}))}a("a9e3");var St={props:{pool:{type:Array,required:!0,default:function(){return[]}},timeLeft:{type:Number,default:function(){return 0}},winnerText:{type:String,default:function(){return null}},offsetDegrees:{type:Number,default:function(){return 0}},idleSpeed:{type:Number,default:function(){return 0}},bgColor:String,font:String,fontColor:String,chartWidth:Number,drawTotal:Object},data:function(){return{width:0,height:0,state:"idle",sliceMiddle:0,canvas:null,radiansOffset:0,radiansExtra:0,tickerRotation:0,tickerHit:0,colors:["#620F17","#5C2056","#2E102C","#F7B000","#E76E35","#CB4856","#BF1E2E","#961823"]}},mounted:function(){this.radiansOffset=pt(this.offsetDegrees)},methods:{getColor:function(t){var e=t%this.colors.length;return e>=this.colors.length?this.getColor(e):this.colors[e]}},computed:{total:function(){return this.pool.reduce((function(t,e){return t+e.amount}),0)},backgroundColor:function(){return this.bgColor},sliceWidth:function(){var t;return null!==(t=this.chartWidth)&&void 0!==t?t:60}},watch:{pool:{immediate:!0,handler:function(t){t.forEach((function(t){t.addedAt||(t.addedAt=Date.now()),t.image||At(t.avatar).then((function(e){t.image=e}))}))}}}},kt={name:"JackpotWheel",mixins:[St],data:function(){return{index:0,ticker:a("1a1c")}},mounted:function(){var t=this;this.canvas=this.$refs.canvas.getContext("2d");var e=this.$el.getClientRects()[0],a=e.width,n=e.height;this.width=a,this.height=n,this.sliceMiddle=a/2-this.sliceWidth/2,this.$refs.canvas.width=a,this.$refs.canvas.height=n;var i=new Image;i.onload=function(){i.width=48,t.ticker=i,t.draw()},i.src=this.ticker},methods:{spin:function(t){var e=this,a=-vt(t)+2*Math.PI*10;this.radiansExtra=this.radiansExtra%(2*Math.PI),this.state="resetting",this.animate(Date.now(),!0,Et,1e3,this.radiansExtra,pt(-120)).then((function(){setTimeout((function(){e.state="spinning",e.animate(Date.now(),!1,gt,1e4,0,a).then((function(){e.$emit("stopped"),e.state="winner-picked"}))}),1e3)}))},reset:function(){this.state="idle"},draw:function(){var t=this;if(this.canvas.clearRect(0,0,this.width,this.height),this.tickerRotation>0){var e=1/350*Math.min(350,Date.now()-this.tickerHit);this.tickerRotation=Math.max(this.tickerRotation-Et(e),0)}this.backgroundColor&&(this.canvas.fillStyle=this.backgroundColor,this.canvas.rect(0,0,this.width,this.height),this.canvas.fill());var a=+(this.radiansOffset+this.radiansExtra).toFixed(4);if(this.pool.forEach((function(e,n){var i=Date.now()-e.addedAt,r=Math.min(1,.002*i),s=+(t.getSliceRadiansOnIndex(n)*r).toFixed(4),o=a+s/2;t.canvas.beginPath(),t.canvas.strokeStyle=t.getColor(n),t.canvas.arc(t.width/2,t.height/2,t.width/2*.8,a,a+s),t.canvas.lineWidth=t.sliceWidth,t.canvas.stroke();var c=a%(2*Math.PI);t.radiansOffset-c>0&&t.radiansOffset-c<.05&&(t.tickerHit=Date.now(),t.tickerRotation=Math.min(60,t.tickerRotation+10)),s>.26&&e.image&&t.canvas.drawImage(e.image,t.width/2+bt(t.sliceMiddle,o)-e.image.width/4,t.height/2+wt(t.sliceMiddle,o)-e.image.height/4,e.image.width/2,e.image.height/2),a+=s})),this.canvas.textAlign="center",this.canvas.textBaseline="middle","function"===typeof this.drawTotal)this.drawTotal(this.canvas,this.width/2,this.height/2,this.total);else{var n,i,r,s;if(this.canvas.fillStyle=null!==(n=this.fontColor)&&void 0!==n?n:"black",this.canvas.font=null!==(i=this.font)&&void 0!==i?i:"bold 24px serif",this.canvas.fillText("$".concat(this.total.toFixed(2)),this.width/2,this.height/2),this.timeLeft&&"winner-picked"!==this.state)this.canvas.font=null!==(r=this.font)&&void 0!==r?r:"bold 36px serif",this.canvas.fillText("".concat(this.timeLeft<=1?"GET READY!":this.timeLeft),this.width/2,this.height/2-40);if("winner-picked"===this.state&&this.winnerText)this.canvas.font=null!==(s=this.font)&&void 0!==s?s:"25px serif",this.canvas.fillText(this.winnerText,this.width/2,this.height/2-40)}this.idleSpeed>0&&"idle"===this.state&&(this.radiansExtra+=pt(this.idleSpeed)),requestAnimationFrame(this.draw)},getSliceRadiansOnIndex:function(t){var e=100/this.total*this.pool[t].amount/100,a=360*e;return pt(a)},getSliceRangeOnIndex:function(t){for(var e=0,a=0;a<t;a++)e+=this.getSliceRadiansOnIndex(a);var n=e+this.getSliceRadiansOnIndex(t);return{startRadians:e,endRadians:n,difference:Math.abs(n-e)}},animate:function(t,e,a,n,i,r,s){var o,c=this;s||(o=new Promise((function(t){return s=t})));var l=Date.now(),u=n>0?(l-t)/n:1,d=Math.abs(i-r);return this.radiansExtra=e?i-d*a(u):i+d*a(u),u>=1?(this.radiansExtra=r,s()):requestAnimationFrame((function(){return c.animate(t,e,a,n,i,r,s)})),o}},computed:{radiansToDegrees:function(){return ft},tickerRotationDegrees:function(){return{transform:"rotate(".concat(-this.tickerRotation,"deg)")}},degreesToRadians:function(){return pt}}},yt=kt,Tt=(a("ae61"),Object(m["a"])(yt,mt,ht,!1,null,"044af4a6",null)),Ct=Tt.exports,Rt={name:"Game",components:{JackpotWheel:Ct},data:function(){return{winnerText:""}},mounted:function(){var t=this;this.$socketEvent("winner-picked",(function(e){t.$refs.wheel.spin(e.percentage),t.winnerText=e.player.email+" wins!"}))},methods:{getAvatar:function(t){return"https://api.adorable.io/avatars/64/".concat(t)},onStopped:function(){var t=this;setTimeout((function(){t.$refs.wheel.reset()}),1e4)},onSliceClicked:function(t){console.log(t)}},computed:{pool:function(){var t=this;return this.game.userBets?this.game.userBets.map((function(e){return{name:e.player.email,amount:e.bets.map((function(t){return t.amount})).reduce((function(t,e){return t+e})),avatar:t.getAvatar(e.player.email||e.player.id)}})):[]},game:function(){return this.$store.state.$game.game},userBets:function(){return this.game.userBets},timeLeft:function(){return this.$store.state.$game.timeLeft},winner:function(){return this.$store.state.$game.winner},gameState:function(){var t=["idle","inProgress","ended","winnerPicked"],e=this.$store.state.$game.game.state||0;return t[e]}}},It=Rt,Ot=(a("bbe3"),a("8212")),xt=a("cc20"),_t=a("cd55"),Vt=a("49e2"),Mt=a("c865"),Bt=a("0393"),jt=Object(m["a"])(It,ut,dt,!1,null,"5349aa2c",null),Nt=jt.exports;p()(jt,{VAvatar:Ot["a"],VCard:J["a"],VCardText:z["b"],VCardTitle:z["c"],VChip:xt["a"],VCol:st["a"],VDivider:f["a"],VExpansionPanel:_t["a"],VExpansionPanelContent:Vt["a"],VExpansionPanelHeader:Mt["a"],VExpansionPanels:Bt["a"],VRow:ot["a"]});var Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"darken-1",attrs:{shaped:""}},[a("div",{staticClass:"pa-4"},[a("v-card-title",[t._v("Place a bet")]),a("v-form",{ref:"form",staticClass:"mt-4"},[a("v-row",[a("v-slider",{staticClass:"align-center col-12 p-4",attrs:{"append-icon":"mdi-currency-usd","prepend-icon":"mdi-currency-usd-off",max:250,"thumb-label":"always",min:1,"hide-details":""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),a("div",{staticClass:"text-right mr-4"},[a("v-btn",{staticClass:"mr-4",attrs:{disabled:!1,color:"secondary",loading:t.placingBet},on:{click:t.placeBet}},[t._v(" Place bet ")]),a("v-btn",{attrs:{color:"red"},on:{click:t.fakeBet}},[t._v(" Fake bets ")])],1)],1)],1)])},Gt=[],Pt={name:"Bet",data:function(){return{placingBet:!1,amount:0}},methods:{placeBet:function(){this.placingBet=!0,this.$store.dispatch("sendSocket",{type:"place-bet",data:{amount:this.amount}}),this.placingBet=!1,this.amount=0},fakeBet:function(){this.$store.dispatch("$game/fakeBets")}}},Dt=Pt,Ut=a("ba0d"),Zt=Object(m["a"])(Dt,Lt,Gt,!1,null,"5c44d5d1",null),Ft=Zt.exports;p()(Zt,{VBtn:_["a"],VCard:J["a"],VCardTitle:z["c"],VForm:H["a"],VRow:ot["a"],VSlider:Ut["a"]});var Wt={name:"jackpot",components:{GameStatsBar:lt,Game:Nt,Bet:Ft},data:function(){return{bet:{amount:0}}},methods:{},computed:{currentUsers:function(){return this.$store.state.$game.currentUsers}}},Yt=Wt,$t=Object(m["a"])(Yt,tt,et,!1,null,"e953b826",null),Jt=$t.exports;p()($t,{VCol:st["a"],VContainer:V["a"]});var zt={Authenticated:function(t){return t.authenticated}},Qt={SET_USER:function(t,e){t.user=e},REMOVE_USER:function(t){t.user=null},SET_AUTHENTICATED:function(t,e){t.authenticated=e},SET_ERROR:function(t,e){t.error=e},SET_LOADING:function(t,e){t.loading=e}},Ht={user:null,authenticated:!1,error:"",loading:!1},Xt=a("bc3a"),Kt=a.n(Xt),qt=(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_BASE_URL||"/api/v1")+"/accounts",te={login:function(t,e){var a=t.commit,n=t.dispatch,i=e.email,r=e.password;a("SET_LOADING",!0),Kt.a.post("".concat(qt,"/login"),{email:i,password:r}).then((function(t){var e=t.data;a("SET_USER",e),a("SET_ERROR",null),n("sendSocket",{type:"auth",data:e},{root:!0}),localStorage.setItem("user",JSON.stringify(e)),me.push("/")})).catch((function(t){a("SET_ERROR","Invalid credentials, try again"),console.log(t)})).finally((function(){a("SET_LOADING",!1)}))},register:function(t,e){var a=t.commit,n=t.dispatch,i=e.email,r=e.password;a("SET_LOADING",!0),Kt.a.post("".concat(qt,"/register"),{email:i,password:r}).then((function(t){var e=t.data;a("SET_USER",e),a("SET_ERROR",null),n("sendSocket",{type:"auth",data:e},{root:!0}),localStorage.setItem("user",JSON.stringify(e)),me.push("/")})).catch((function(t){a("SET_ERROR","email already in use, consider another"),console.log(t)})).finally((function(){a("SET_LOADING",!1)}))}},ee={namespaced:!0,getters:zt,mutations:Qt,state:Ht,actions:te},ae={},ne={SET_CURRENT_USERS:function(t,e){t.currentUsers=e},SET_GAME:function(t,e){t.game=Object.assign({},e)},SET_TIME_LEFT:function(t,e){t.timeLeft=e}},ie={currentUsers:[],game:{},winner:{user:{},percentage:0,ticket:0,amount:0},timeLeft:null},re=(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_BASE_URL||"/api/v1")+"/game",se={fakeBets:function(){Kt.a.post("".concat(re,"/test/bets/random")).then((function(){})).catch((function(t){console.log(t)}))}},oe={namespaced:!0,getters:ae,mutations:ne,state:ie,actions:se},ce={};n["default"].prototype.$socketEvent=function(t,e){ce[t]||(ce[t]=[]),ce[t].push(e)};var le=function(t){t.subscribe((function(e){if("SOCKET_ONMESSAGE"===e.type){var a=e.payload,n=a.type,i=a.data;switch(ce[n]&&ce[n].forEach((function(t){return t(i)})),n){case"current-users":t.commit("$game/SET_CURRENT_USERS",i.users);break;case"current-game":t.commit("$game/SET_GAME",i.game);break;case"new-game":t.commit("$game/SET_TIME_LEFT",null),t.commit("$game/SET_GAME",i.game);break;case"start-game":t.commit("$game/SET_GAME",i.game);break;case"bet-placed":t.commit("$game/SET_GAME",i.game);break;case"shares-updated":t.commit("$game/SET_GAME",i.game);break;case"time-left":t.commit("$game/SET_TIME_LEFT",i.timeLeft);break;default:return}}}))};n["default"].use(F["a"]);var ue=new F["a"].Store({state:{socket:{isConnected:!1,message:{},reconnectError:!1}},mutations:{SOCKET_ONOPEN:function(t,e){n["default"].$socket=e.currentTarget,t.$auth.user&&n["default"].$socket.sendObj({type:"auth",data:t.$auth.user}),t.socket.isConnected=!0},SOCKET_ONCLOSE:function(t){t.socket.isConnected=!1},SOCKET_ONERROR:function(t,e){console.error(t,e)},SOCKET_ONMESSAGE:function(t,e){t.socket.message=e},SOCKET_RECONNECT:function(t,e){console.info(t,e)},SOCKET_RECONNECT_ERROR:function(t){t.socket.reconnectError=!0}},actions:{sendSocket:function(t,e){n["default"].$socket.sendObj(e)}},modules:{$auth:ee,$game:oe},plugins:[le]});n["default"].use(P["a"]);var de=new P["a"]({routes:[{path:"/auth",name:"Auth",component:q,meta:{authRequired:!1}},{path:"/",name:"jackpot",component:Jt,meta:{authRequired:!0}}]});de.beforeEach((function(t,e,a){if(t.matched.some((function(t){return t.meta.authRequired})))if(ue.state.$auth.user)a();else{var n=JSON.parse(window.localStorage.getItem("user"));if(n)return ue.commit("$auth/SET_USER",n),a();a({path:"/auth"})}else a()}));var me=de,he=(a("99af"),a("caad"),a("2532"),a("b408")),pe=a.n(he),fe={install:function(t){var e="";e=location.hostname.includes("localhost")?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SOCKET_URL||"ws://".concat(location.hostname,":5001/ws"):Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SOCKET_URL||"wss://".concat(location.hostname,":").concat(location.port,"/ws"),t.use(pe.a,"".concat(e),{store:ue,format:"json"})}};n["default"].config.productionTip=!1,n["default"].use(fe),n["default"].use(r.a),n["default"].prototype.$store=ue,new n["default"]({render:function(t){return t(G)},store:ue,router:me,vuetify:new r.a({theme:{dark:!0}})}).$mount("#app")},ae61:function(t,e,a){"use strict";var n=a("5617"),i=a.n(n);i.a},bbe3:function(t,e,a){"use strict";var n=a("c713"),i=a.n(n);i.a},c713:function(t,e,a){}});
//# sourceMappingURL=app.98ae20c2.js.map