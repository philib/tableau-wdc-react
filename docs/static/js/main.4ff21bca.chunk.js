(this["webpackJsonp@nexys/tableau-wdc-react"]=this["webpackJsonp@nexys/tableau-wdc-react"]||[]).push([[0],{10:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(3),i=t.n(r),c=t(4),u=function(e,n){return" "!==e&&""!==e?e.replace(/[^\w\d_]/g,"_"):"undefined_"+n},l=(t(2),function(e){var n=e.config,t=n.reports,a=tableau.makeConnector();a.getSchema=function(e){e(t.map((function(e){return function(e){return{id:e.id,alias:e.alias,columns:(n=e.columns,n.map((function(e,n){return{id:u(e,n),alias:e,dataType:tableau.dataTypeEnum.string}})))};var n}(e)})))},a.getData=function(e,n){t.map((function(t){if(e.tableInfo.id===t.id){var a={method:t.method};fetch(t.url,a).then((function(a){a.json().then((function(a){var o=function(e,n){var t=Object(c.a)(e,2),a=(t[0],t[1]),o=[];return a.map((function(e){var t={};return n.map((function(n,a){var o=e[a];return t[u(n,a)]=o,!0})),o.push(t),!0})),o}(a,t.columns);e.appendRows(o),n()}))}))}return!0}))},tableau.registerConnector(a);var r=function(){tableau.connectionName=n.name,tableau.submit()};return setTimeout((function(){r()}),1e3),o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"This page should disappear once data is loaded, if (and only if) this does not work click on the button below"),o.a.createElement("button",{id:"submitButton",onClick:r},"Get data and connect"))}),s={name:"My Data Feed",reports:[{id:"dataFeed",alias:"dataFeedAlias",url:"/data.json",method:"GET",columns:["one","two","three","four","five","six","seven"]}]},d=function(){return o.a.createElement(l,{config:s})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},2:function(e,n){},5:function(e,n,t){e.exports=t(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.4ff21bca.chunk.js.map