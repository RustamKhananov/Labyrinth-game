(this.webpackJsonplabyrinth=this.webpackJsonplabyrinth||[]).push([[0],{14:function(e,t,n){e.exports=n(30)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),s=n.n(r),o=(n(19),n(20),n(21),n(1)),i=n(2),u=n(5),l=n(12),m={goal:[],start:[],moves:[],usersChoice:[],beePositions:[],wrongAnswer:!1,rightAnswer:!1,step:-1,isFlying:!1},b=Object(u.b)((function(e,t){switch(t.type){case"NEW_GAME":return Object(i.a)(Object(i.a)({},m),function(){for(var e=[Math.ceil(3*Math.random()),Math.ceil(3*Math.random())],t=[],n=[],a=[].concat(e),c=0;c<10;c++){var r=[];3!==a[0]&&r.push("down"),1!==a[0]&&r.push("up"),1!==a[1]&&r.push("left"),3!==a[1]&&r.push("right");var s=r[Math.floor(Math.random()*r.length)];switch(t.push(s),s){case"up":a[0]=a[0]-1;break;case"down":a[0]=a[0]+1;break;case"left":a[1]=a[1]-1;break;case"right":a[1]=a[1]+1}n.push(Object(l.a)(a))}return{goal:a,moves:t,start:e,beePositions:n,usersChoice:[]}}());case"SET_USERS_CHOICE":return Object(i.a)(Object(i.a)({},e),{},{usersChoice:t.usersChoice,isFlying:!0});case"WRONG_ANSWER":return Object(i.a)(Object(i.a)({},e),{},{wrongAnswer:!0,isFlying:!1});case"RIGHT_ANSWER":return Object(i.a)(Object(i.a)({},e),{},{rightAnswer:!0,isFlying:!1});case"SET_STEP":return Object(i.a)(Object(i.a)({},e),{},{step:t.step});default:return Object(i.a)({},e)}}),m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=n(13),E=(n(28),function(){Object(o.c)((function(e){return e.moves}));var e=Object(o.c)((function(e){return e.usersChoice})),t=Object(o.c)((function(e){return e.start})),n=Object(a.useState)(t),r=Object(f.a)(n,2),s=r[0],i=r[1],u=Object(o.c)((function(e){return e.beePositions})),l=Object(o.b)();Object(a.useEffect)((function(){i(t)}),[t]),Object(a.useEffect)((function(){e.length>0&&function(){for(var t=function(e){setTimeout((function(){l({type:"SET_STEP",step:e}),i(u[e])}),2e3*e)},n=0;n<10;n++)t(n);setTimeout((function(){s[0]===e[0]&&+s[1]===e[1]?l({type:"RIGHT_ANSWER"}):l({type:"WRONG_ANSWER"})}),21e3)}()}),[e]);var m={top:"".concat(160*(s[0]-1)+30,"px"),left:"".concat(160*(s[1]-1)+30,"px")};return c.a.createElement("span",{className:"Bee",style:m})}),h=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.start})),n=Object(o.c)((function(e){return e.usersChoice})),a=Object(o.c)((function(e){return e.isFlying})),r=[1,2,3],s=function(t){if(!a){var n=[parseInt(t.target.dataset.row),parseInt(t.target.dataset.column)];e(function(e){return{type:"SET_USERS_CHOICE",usersChoice:e}}(n))}};return c.a.createElement("div",{className:"GameField"},c.a.createElement(E,null),c.a.createElement("table",{className:"GameField__table"},c.a.createElement("tbody",{className:"GameField__tbody"},[1,2,3].map((function(e){return c.a.createElement("tr",{key:e,className:"GameField__row"},r.map((function(a){return c.a.createElement("td",{key:e+a,onClick:s,className:"GameField__cell ".concat(n[0]===e&&n[1]===a?"GameField__cell--users-choice":""," ").concat(t[0]===e&&t[1]===a?"GameField__cell--start":""),"data-column":a,"data-row":e})})))})))))},_=(n(29),function(){var e=Object(o.c)((function(e){return e.moves})),t=Object(o.c)((function(e){return e.step}));return c.a.createElement("div",{className:"Moves"},e.map((function(e,n){return c.a.createElement("span",{key:e+n,className:"Moves__move ".concat(n===t?"Moves__move--active":"")},e)})))}),O=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.wrongAnswer})),n=Object(o.c)((function(e){return e.rightAnswer})),r=Object(o.c)((function(e){return e.isFlying}));Object(a.useEffect)((function(){e({type:"NEW_GAME"})}),[e]);return c.a.createElement("div",{className:"Labyrinth"},n?c.a.createElement("span",{className:"Labyrinth__message"},"That`s right!!!"):"",t?c.a.createElement("span",{className:"Labyrinth__message"},"Sorry, that`s wrong :("):"",c.a.createElement(h,null),c.a.createElement(_,null),c.a.createElement("button",{onClick:function(){r||e({type:"NEW_GAME"})},className:"Labyrinth__new-game"},"Start new game"))};var p=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,{store:b},c.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.8aae8035.chunk.js.map