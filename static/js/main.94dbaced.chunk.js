(this["webpackJsonpalgorithm-visualizer"]=this["webpackJsonpalgorithm-visualizer"]||[]).push([[0],{39:function(e,t,a){e.exports=a(56)},44:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(7),c=a.n(o),s=(a(44),a(9)),r=(a(45),a(46),a(47),Object(n.createContext)()),l=function(e){var t=e.reducer,a=e.initialState,o=e.children;return i.a.createElement(r.Provider,{value:Object(n.useReducer)(t,a)},o)},u=function(){return Object(n.useContext)(r)},d=a(13),m=a(10),f=[600,50,5],h=["bfs","dfs","dijkstra","a-star"],v=[["TBD","TBD"],["TBD","TBD"],["TBD","TBD"],["TBD","TBD"]],E={speed:f[2],algorithm:"bfs",algoCost:JSON.parse(JSON.stringify(v)),visualizing:!1,buildingWalls:!1},b="SET_ALGO",g="SET_SPEED",p="SET_VISIT_COST",N="SET_PATH_COST",w="RESET_COST",O="WALL_BUILDING",j=function(e,t){switch(t.type){case g:return Object(m.a)(Object(m.a)({},e),{},{speed:t.speed});case b:return Object(m.a)(Object(m.a)({},e),{},{algorithm:t.algorithm});case p:var a=Object(d.a)(e.algoCost);return a[t.idx][0]=t.cost,Object(m.a)(Object(m.a)({},e),{},{algoCost:a});case N:var n=Object(d.a)(e.algoCost);return n[t.idx][1]=t.cost,Object(m.a)(Object(m.a)({},e),{},{algoCost:n});case w:return Object(m.a)(Object(m.a)({},e),{},{algoCost:JSON.parse(JSON.stringify(v))});case O:return Object(m.a)(Object(m.a)({},e),{},{buildingWalls:t.build});default:return e}};a(48);var S=function(e){var t=e.title,a=e.onClick,n=e.isChosen;return i.a.createElement("div",{className:"algorithm header_button"+(n?" chosen_algo":""),onClick:a},i.a.createElement("h3",null,t))};var B=function(){var e=u(),t=Object(s.a)(e,2),a=t[0].algorithm,n=t[1],o=function(e){n({type:b,algorithm:e})};return i.a.createElement("div",{className:"header"},i.a.createElement("a",{className:"title header_button",href:"/"},"Pathfinding Visualizer"),i.a.createElement("div",{className:"pick-algorithm"},i.a.createElement(S,{title:"Breath-First Search",isChosen:"bfs"===a,onClick:function(){return o("bfs")}}),i.a.createElement(S,{title:"Depth-First Search",isChosen:"dfs"===a,onClick:function(){return o("dfs")}}),i.a.createElement(S,{title:"Dijkstra Algorithm",isChosen:"dijkstra"===a,onClick:function(){return o("dijkstra")}}),i.a.createElement(S,{title:"A* Algorithm",isChosen:"a-star"===a,onClick:function(){return o("a-star")}})),i.a.createElement("div",{className:"tools"},i.a.createElement("div",{className:"clear_buttons"},i.a.createElement("div",{className:"header_button clear_button",onClick:function(){return document.getElementById("clear-board").click()}},"Clear Board"),i.a.createElement("div",{className:"header_button clear_button",onClick:function(){return document.getElementById("clear-path").click()}},"Clear Path")),i.a.createElement("div",{id:"run_algorithm",className:"start_button",onClick:function(){return document.getElementById("start-algorithm").click()}},"Visualize")))};a(49),a(50);var D=function(e){var t=e.row,a=e.col,n=e.isFinish,o=e.isStart,c=e.isWall,s=e.onMouseDown,r=e.onMouseEnter,l=e.onMouseUp,u=e.isVisited,d=e.isPath,m=e.isNote,f=e.wallToggle,h=(n?"node-finish":o?"node-start":c?"node-wall":u?"note-visited":d?"note_path":"").concat(m?" node-note":"");return i.a.createElement("td",{id:"node-".concat(t,"-").concat(a),className:"node ".concat(h),onContextMenu:function(e){e.preventDefault(),f(t,a)},onClick:function(e){e.preventDefault(),s(t,a)},onMouseEnter:function(){return r(t,a)},onMouseUp:l,onAnimationStart:function(e){return e.stopPropagation()},onMouseLeave:function(e){return e.preventDefault()},onDragStart:function(e){return e.preventDefault()}})},T=[-1,0,1,0],k=[0,1,0,-1],C=function(e,t,a){return t<0||t===e.length||a<0||a===e[0].length},_=function(e){var t=[];return e.forEach((function(e){return e.forEach((function(e){return t.push(e)}))})),t},y=function(e,t){return Math.abs(e.row-t.row)+Math.abs(e.col-t.col)};var M=function(){var e=Object(n.useState)(10),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(6),r=Object(s.a)(c,2),l=r[0],d=r[1],f=Object(n.useState)(10),v=Object(s.a)(f,2),E=v[0],b=v[1],g=Object(n.useState)(25),j=Object(s.a)(g,2),S=j[0],B=j[1],M=u(),F=Object(s.a)(M,2),W=F[0],V=W.algorithm,I=W.speed,A=(W.algoCost,F[1]),P=Object(n.useState)([]),x=Object(s.a)(P,2),U=x[0],z=x[1],L=Object(n.useState)(!1),J=Object(s.a)(L,2),R=J[0],G=J[1],q=Object(n.useState)(!1),H=Object(s.a)(q,2),$=H[0],K=H[1],Q=Object(n.useState)(!1),X=Object(s.a)(Q,2),Y=X[0],Z=X[1],ee=Object(n.useState)(!1),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],ie={row:-1,col:-1},oe=function(e,t){return{col:e,row:t,isStart:t===a&&e===l,isFinish:t===E&&e===S,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},ce=function(e,t){var a=U[e][t];if(a.isFinish||a.isStart)return U;if(e!==ie.row||t!==ie.col){ie.row=e,ie.col=t,a.isWall=!a.isWall;var n=document.getElementById("node-".concat(e,"-").concat(t));n.className.includes("node-wall")?n.className="node":n.className="node node-wall"}};Object(n.useEffect)((function(){z(function(){for(var e=[],t=0;t<20;t++){for(var a=[],n=0;n<32;n++)a.push(oe(n,t));e.push(a)}return e}())}),[]);var se=function(e,t){var a=h.indexOf(V);A({type:e?p:N,idx:a,cost:t})},re=function(e){for(var t=function(t){if(t==e.length)return setTimeout((function(){se(!1,t),ne(!1),le("start_button")}),4*I*t),{v:void 0};setTimeout((function(){var a=e[t];document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node node-shortest-path".concat(U[a.row][a.col].isStart?" node-start":U[a.row][a.col].isFinish?" node-finish":"")}),4*I*t)},a=0;a<=e.length;a++){var n=t(a);if("object"===typeof n)return n.v}},le=function(e){document.getElementById("run_algorithm").className=e},ue=function(e){if(!ae){for(var t=document.getElementsByClassName("node"),n=0;n<t.length;n++)t[n].className.includes("node-note")||(t[n].className="node ".concat(!e&&t[n].className.includes("node-wall")?"node-wall":""));var i=U.map((function(t){return t.map((function(t){return Object(m.a)(Object(m.a)({},t),{},{isWall:!e&&t.isWall,previousNode:null,isVisited:!1,distance:1/0})}))}));z(i),document.getElementById("node-".concat(a,"-").concat(l)).className="node node-start",document.getElementById("node-".concat(E,"-").concat(S)).className="node node-finish",e&&A({type:w})}};return i.a.createElement("div",null,i.a.createElement("table",{className:"board"},i.a.createElement("tbody",null,U.length?U.map((function(e,t){return i.a.createElement("tr",{className:"row",key:t},e.map((function(e,t){var n=e.row,c=e.col,s=e.isWall,r=e.isStart,u=e.isFinish;return i.a.createElement(D,{key:t,row:n,col:c,isFinish:u,isStart:r,isWall:s,wallToggle:ce,onMouseDown:function(e,t){return function(e,t){U[e][t].isStart?K(!0):U[e][t].isFinish?Z(!0):R?(console.log("not wall"),A({type:O,build:!1}),G(!1)):(A({type:O,build:!0}),ce(e,t),G(!0))}(e,t)},onMouseEnter:function(e,t){return function(e,t){if($){if(U[e][t].isFinish)return;document.getElementById("node-".concat(a,"-").concat(l)).className="node ".concat(U[a][l].isWall?"node-wall":""),document.getElementById("node-".concat(e,"-").concat(t)).className+=" node-start",U[a][l].isStart=!1,U[e][t].isStart=!0,o(e),d(t)}else if(Y){if(U[e][t].isStart)return;document.getElementById("node-".concat(E,"-").concat(S)).className="node ".concat(U[E][S].isWall?"node-wall":""),document.getElementById("node-".concat(e,"-").concat(t)).className="node node-finish",U[E][S].isFinish=!1,U[e][t].isFinish=!0,b(e),B(t)}else{if(!R)return;ce(e,t)}}(e,t)},onMouseUp:function(){return K(!1),void Z(!1)}})})))})):i.a.createElement("div",null,"Nothing here"))),i.a.createElement("button",{id:"start-algorithm",className:"hidden",onClick:function(){ae||(ne(!0),le("blocked_button"),ue(!1),function(e,t){for(var a=function(a){if(a===e.length)return setTimeout((function(){re(t),se(!0,a)}),I*a),{v:void 0};var n=e[a];setTimeout((function(){document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-visiting".concat(U[n.row][n.col].isStart?" node-start":U[n.row][n.col].isFinish?" node-finish":"")}),I*(a-.8)),setTimeout((function(){document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-visited".concat(U[n.row][n.col].isStart?" node-start":U[n.row][n.col].isFinish?" node-finish":"")}),I*a)},n=0;n<=e.length;n++){var i=a(n);if("object"===typeof i)return i.v}}("bfs"===V?function(e,t,a){var n=[],i=[];for(i.push([t,a]),n.push(e[t][a]),e[t][a].isVisited=!0;i.length;)for(var o=i.shift(),c=o[0],s=o[1],r=0;r<4;r++){var l=c+T[r],u=s+k[r];if(!C(e,l,u)&&(!e[l][u].isWall&&!e[l][u].isVisited)){if(e[l][u].isVisited=!0,n.push(e[l][u]),e[l][u].previousNode=e[c][s],e[l][u].isFinish)return n;i.push([l,u])}}return n}(U,a,l):"dfs"===V?function(e,t,a){var n=[],i=[];for(i.push([t,a]);i.length;){var o=i.pop(),c=o[0],s=o[1];if(!e[c][s].isVisited){if(e[c][s].isVisited=!0,n.push(e[c][s]),e[c][s].isFinish)return n;for(var r=3;r>=0;r--){var l=c+T[r],u=s+k[r];C(e,l,u)||(e[l][u].isVisited||e[l][u].isWall||(e[l][u].previousNode=e[c][s],i.push([l,u])))}}}return n}(U,a,l):"dijkstra"===V?function(e,t,a){var n=[];e[t][a].distance=0;for(var i=_(e);i.length;){i.sort((function(e,t){return e.distance-t.distance}));var o=i.shift();if(!o.isWall){if(o.distance===1/0)return n;if(n.push(o),o.isFinish)return n;for(var c=0;c<4;c++){var s=o.row+T[c],r=o.col+k[c];s<0||r<0||s===e.length||r===e[0].length||(e[s][r].isVisited||e[s][r].distance>o.distance+1&&(e[s][r].distance=o.distance+1,e[s][r].previousNode=o))}}}return n}(U,a,l):function(e,t,a,n,i){var o=[];e[t][a].distance=0;for(var c=e[n][i],s=_(e),r=function(e){return e.distance+y(e,c)};s.length;){s.sort((function(e,t){var a=r(e),n=r(t);return a!==n?a-n:y(e,c)-y(t,c)}));var l=s.shift();if(!l.isWall){if(l.distance===1/0)return o;if(o.push(l),l.isFinish)return o;for(var u=0;u<4;u++){var d=l.row+T[u],m=l.col+k[u];d<0||m<0||d===e.length||m===e[0].length||(e[d][m].isVisited||r(e[d][m])>r(l)&&(e[d][m].distance=l.distance+1,e[d][m].previousNode=l))}}}}(U,a,l,E,S),function(e,t,a){for(var n=[],i=e[t][a];null!==i;)n.unshift(i),i=i.previousNode;return n}(U,E,S)))}},"button"),i.a.createElement("button",{id:"clear-board",className:"hidden",onClick:function(){return ue(!0)}},"clear"),i.a.createElement("button",{id:"clear-path",className:"hidden",onClick:function(){return ue(!1)}},"clear"))},F=a(90),W=a(85),V=a(89),I=a(15),A=a.n(I);var P=function(){var e=Object(n.useState)("Fast"),t=Object(s.a)(e,2),a=t[0],o=t[1],c=u(),r=Object(s.a)(c,2),l=r[0],d=l.algoCost,m=l.buildingWalls,h=r[1];return i.a.createElement("div",{className:"App"},i.a.createElement(B,null),i.a.createElement("div",{className:"title_text"},i.a.createElement("h1",null,"Choose an Algorithm and Visualize")),i.a.createElement("div",{className:"visualizer"},i.a.createElement("div",{className:"options"},i.a.createElement("div",{className:"opt"},i.a.createElement("h3",null,"Speed"),i.a.createElement(W.a,{className:"speed"},i.a.createElement(V.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,onChange:function(e){o(e.target.value);var t=0;switch(e.target.value){case"Low":t=f[0];break;case"Average":t=f[1];break;default:t=f[2]}h({type:g,speed:t})}},i.a.createElement(F.a,{value:"Low"},"Slow"),i.a.createElement(F.a,{value:"Average"},"Average"),i.a.createElement(F.a,{value:"Fast"},"Fast")))),i.a.createElement("h2",null,"Statistics:"),i.a.createElement("div",{className:"statistics"},i.a.createElement("div",{className:"stat"},i.a.createElement("div",{className:"algo_title"},i.a.createElement("h3",null,"BFS:")),i.a.createElement("div",{className:"number"},i.a.createElement("span",{className:"visited-number"},"Visited: ","TBD"===d[0][0]?"TBD":i.a.createElement(A.a,{end:d[0][0],duration:4,useEasing:!1})),i.a.createElement("span",{className:"path-number"},"Path: ","TBD"===d[0][1]?"TBD":i.a.createElement(A.a,{end:d[0][1],duration:5})))),i.a.createElement("div",{className:"stat"},i.a.createElement("div",{className:"algo_title"},i.a.createElement("h3",null,"DFS:")),i.a.createElement("div",{className:"number"},i.a.createElement("span",{className:"visited-number"},"Visited: ","TBD"===d[1][0]?"TBD":i.a.createElement(A.a,{end:d[1][0],duration:4,useEasing:!1})),i.a.createElement("span",{className:"path-number"},"Path: ","TBD"===d[1][1]?"TBD":i.a.createElement(A.a,{end:d[1][1],duration:5})))),i.a.createElement("div",{className:"stat"},i.a.createElement("div",{className:"algo_title"},i.a.createElement("h3",null,"Dijkstra:")),i.a.createElement("div",{className:"number"},i.a.createElement("span",{className:"visited-number"},"Visited: ","TBD"===d[2][0]?"TBD":i.a.createElement(A.a,{end:d[2][0],duration:4,useEasing:!1})),i.a.createElement("span",{className:"path-number"},"Path: ","TBD"===d[2][1]?"TBD":i.a.createElement(A.a,{end:d[2][1],duration:5})))),i.a.createElement("div",{className:"stat"},i.a.createElement("div",{className:"algo_title"},i.a.createElement("h3",null,"A-star:")),i.a.createElement("div",{className:"number"},i.a.createElement("span",{className:"visited-number"},"Visited: ","TBD"===d[3][0]?"TBD":i.a.createElement(A.a,{end:d[3][0],duration:4,useEasing:!1})),i.a.createElement("span",{className:"path-number"},"Path: ","TBD"===d[3][1]?"TBD":i.a.createElement(A.a,{end:d[3][1],duration:5})))))),i.a.createElement(M,null),i.a.createElement("div",{className:"note"},i.a.createElement("div",{className:"note_opt"},i.a.createElement(D,{key:"unvisited-note",isNote:!0,onMouseDown:function(){},onMouseEnter:function(){},onMouseUp:function(){}}),i.a.createElement("h3",null,"Unvisited Node")),i.a.createElement("div",{className:"note_opt"},i.a.createElement(D,{key:"visited-note",isNote:!0,isVisited:!0,onMouseDown:function(){},onMouseEnter:function(){},onMouseUp:function(){}}),i.a.createElement("h3",null,"Visited Node")),i.a.createElement("div",{className:"note_opt"},i.a.createElement(D,{key:"wall-note",isNote:!0,isWall:!0,onMouseDown:function(){},onMouseEnter:function(){},onMouseUp:function(){}}),i.a.createElement("h3",null,"Wall")),i.a.createElement("div",{className:"note_opt"},i.a.createElement(D,{key:"path-note",isNote:!0,isPath:!0,onMouseDown:function(){},onMouseEnter:function(){},onMouseUp:function(){}}),i.a.createElement("h3",null,"Path")),i.a.createElement("div",{className:"wall_building"},m?i.a.createElement("h3",{id:"stop_build_walls"},"Re-click to stop building"):i.a.createElement("h3",{id:"go_build_walls"},"Click to build tons of walls"),i.a.createElement("h3",{id:"build_single_wall"},"Right click to switch a single square")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(l,{initialState:E,reducer:j},i.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.94dbaced.chunk.js.map