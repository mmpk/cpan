montageDefine("ace0375","querystring",{dependencies:[],factory:function(e,t,n){("undefined"==typeof define?function(r){r(e,t,n)}:define)(function(e,t,n,r){"use strict";var i=t;i.unescape=decodeURIComponent,i.escape=encodeURIComponent;var a=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};i.stringify=i.encode=function(e,t,n,s){switch(t=t||"&",n=n||"=",e=null===e?r:e,typeof e){case"object":return Object.keys(e).map(function(r){return Array.isArray(e[r])?e[r].map(function(e){return i.escape(a(r))+n+i.escape(a(e))}).join(t):i.escape(a(r))+n+i.escape(a(e[r]))}).join(t);default:return s?i.escape(a(s))+n+i.escape(a(e)):""}},i.parse=i.decode=function(e,t,n){t=t||"&",n=n||"=";var r={};return"string"!=typeof e||0===e.length?r:(e.split(t).forEach(function(e){var t=e.split(n),a=i.unescape(t[0],!0),s=i.unescape(t.slice(1).join(n),!0);a in r?Array.isArray(r[a])?r[a].push(s):r[a]=[r[a],s]:r[a]=s}),r)}})}});