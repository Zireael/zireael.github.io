(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.vuex-pathify"],{"7ffd":function(t,n,e){"use strict";e.d(n,"b",function(){return J});var r=e("cd3f"),i=e.n(r),o={store:{state:null,commit:function(){0},dispatch:function(){0}}};function a(t){return u(t)&&!Array.isArray(t)}function u(t){return!!t&&"object"===typeof t}function c(t,n){return u(t)&&n in t}function s(t){return t?Array.isArray(t)?t.map(function(t){return String(t)}):"object"===typeof t?Object.keys(t):"string"===typeof t&&t.match(/[$\w]+/g)||[]:[]}function p(t,n){var e=t,r=s(n);return r.every(function(t){var n=a(e)&&e.hasOwnProperty(t);return e=n?e[t]:void 0,n}),e}function f(t,n,e,r){void 0===r&&(r=!1);var i=n.split(".");return i.reduce(function(t,n,o){if(!t)return!1;if(o===i.length-1)return t[n]=e,!0;if(!u(t[n])||!(n in t)){if(!r)return!1;t[n]={}}return t[n]},t)}function h(t,n){var e=s(n);if(u(t)){while(e.length){var r=e.shift();if(!c(t,r))return!1;t=t[r]}return!0}return!1}var l,m={mapping:"standard",strict:!0,cache:!0,deep:1},g={camel:function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];return t.shift()+t.map(function(t){return t.replace(/\w/,function(t){return t.toUpperCase()})}).join("")},snake:function(){var t,n=[],e=arguments.length;while(e--)n[e]=arguments[e];return(t=this).camel.apply(t,n).replace(/([a-z])([A-Z])/g,function(t,n,e){return n+"_"+e}).toLowerCase()},const:function(){var t,n=[],e=arguments.length;while(e--)n[e]=arguments[e];return(t=this).snake.apply(t,n).toUpperCase()}},v={state:"state",getters:"getters",actions:"_actions",mutations:"_mutations"},d={standard:function(t,n,e){switch(t){case"mutations":return e.const("set",n);case"actions":return e.camel("set",n)}return n},simple:function(t,n,e){return"actions"===t?e.camel("set",n):n}};function y(t,n){if(n.match(/!$/))return n.substr(0,n.length-1);var e=l;if(!e){if("function"===typeof m.mapping)e=m.mapping;else if(e=d[m.mapping],!e)throw new Error("[Vuex Pathify] Unknown mapping '"+m.mapping+"' in options\n    - Choose one of '"+Object.keys(d).join("', '")+"'\n    - Or, supply a custom function\n");l=e}return l(t,n,g)}function w(t,n){var e,r,i=n.replace(/[\/@!]+/g,"."),o=n.split("@"),a=o[0],u=o[1];if(a.includes("/")){var c=a.split("/");r=c.pop(),e=c.join("/")}else r=a;if(e&&!t._modulesNamespaceMap[e+"/"])throw new Error("[Vuex Pathify] Unknown module '"+e+"' via path '"+n+"'");return{absPath:i,module:e,target:a,name:r.replace("!",""),get:function(n){var i=t[v[n]],o=y(n,r),a=e?e+"/"+o:o;return{exists:"state"===n?h(i,a):a in i,member:i,type:a,name:o,path:u}}}}var b=function(t,n,e){this.expr=t,this.path=n,this.value=e};function x(t,n){var e=w(t,n),r=e.get("actions");if(r.exists)return function(e){return t.dispatch(r.type,r.path?new b(n,r.path,e):e)};var i=e.get("mutations");return i.exists?function(e){return t.commit(i.type,i.path?new b(n,i.path,e):e)}:function(t){}}function j(t,n,e){var r,i=w(t,n);if(!e&&(r=i.get("getters"),r.exists))return function(){var t=r.member[r.type];return r.path?k(n,t,r.path):t};var o=i.get("state");return o.exists?function(){return k(n,t.state,i.absPath)}:function(){}}function k(t,n,e){if(m.deep||!t.includes("@"))return p(n,e);console.error("[Vuex Pathify] Unable to access sub-property for path '"+t+"':\n    - Set option 'deep' to 1 to allow it")}function P(t){t.set=function(n,e){var r=x(t,n);if("undefined"!==typeof r)return r(e)},t.get=function(n){var e=[],r=arguments.length-1;while(r-- >0)e[r]=arguments[r+1];var i=j(t,n);if("undefined"!==typeof i){var o=i();return"function"===typeof o?o.apply(void 0,e):o}},t.copy=function(n){var e=[],r=arguments.length-1;while(r-- >0)e[r]=arguments[r+1];var o=t.get.apply(t,[n].concat(e));return u(o)?i()(o):o}}function O(t){return y(t,"value")}function U(){console.log("\n  [Vuex Pathify] Options:\n\n  Mapping ("+("function"===typeof m.mapping?"custom":m.mapping)+")\n-------------------------------\n  path       : value\n  state      : "+O("state")+"\n  getters    : "+O("getters")+"\n  actions    : "+O("actions")+"\n  mutations  : "+O("mutations")+"\n\n  Settings\n-------------------------------\n  strict     : "+m.strict+"\n  cache      : "+m.cache+"\n  deep       : "+m.deep+"\n\n")}function A(t){o.store=t,P(t)}b.prototype.update=function(t){if(!m.deep)return console.error("[Vuex Pathify] Unable to access sub-property for path '"+this.expr+"':\n    - Set option 'deep' to 1 to allow it"),t;f(t,this.path,this.value,m.deep>1);return Object.assign({},t)};var V={options:m,plugin:A,debug:U};function C(t){return s("function"===typeof t?t():t)}function S(t){return C(t).reduce(function(t,n){var e=y("getters",n);return t[e]=function(t){return t[n]},t},{})}function _(t){return C(t).reduce(function(t,n){var e=y("mutations",n);return t[e]=function(t,e){t[n]=e instanceof b?e.update(t[n]):e},t},{})}function E(t){return C(t).reduce(function(t,n){var e=y("actions",n),r=y("mutations",n);return t[e]=function(t,n){var e=t.commit;e(r,n)},t},{})}var J={getters:S,mutations:_,actions:E};e("65d9").createDecorator;n["a"]=V}}]);
//# sourceMappingURL=npm.vuex-pathify.js.map