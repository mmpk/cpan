(function(e){"use strict";var t,n=function(t){function n(){document.removeEventListener("DOMContentLoaded",n,!0),c=!0,l()}function i(e){if(!_[e]&&v[e]){var t=_[e]={};_[e]=v[e](i,t)||t}return _[e]}function o(){h=i("promise"),u=i("require"),d=i("mini-url"),l()}function l(){c&&u&&t(u,h,d)}var c,u,h,d,p=r();/interactive|complete/.test(document.readyState)?n():document.addEventListener("DOMContentLoaded",n,!0);var g={require:"require.js","require/browser":"browser.js",promise:"packages/q/q.js"};if(!e.preload){var f=a(window.location,p.mrLocation);for(var m in g)s(a(f,g[m]))}var v={};e.bootstrap=function(t,n){v[t]=n,delete g[t];for(t in g)return;delete e.bootstrap,o()},e.bootstrap("mini-url",function(e,t){t.resolve=a});var _={}},r=function(){var e,n,r,i,s,o,l;if(!t){t={};var c=document.getElementsByTagName("script");for(e=0;c.length>e;e++)if(i=c[e],i.src&&(r=i.src.match(/^(.*)bootstrap.js(?:[\?\.]|$)/i))&&(s=r[1]),i.hasAttribute("data-mr-location")&&(s=a(window.location,i.getAttribute("data-mr-location"))),s){if(i.dataset)for(l in i.dataset)i.dataset.hasOwnProperty(l)&&(t[l]=i.dataset[l]);else if(i.attributes){var u=/-([a-z])/g,h=function(e,t){return t.toUpperCase()};for(n=0;i.attributes.length>n;n++)o=i.attributes[n],r=o.name.match(/^data-(.*)$/),r&&(t[r[1].replace(u,h)]=o.value)}i.parentNode.removeChild(i),t.mrLocation=s;break}}return t},i=function(){var e=document.querySelector("base"),t=e;t||(e=document.createElement("base"),e.href="");var n=document.querySelector("head"),r=document.createElement("a");return function(i,a){if(t||n.appendChild(e),i+="",!/^[\w\-]+:/.test(i))throw Error("Can't resolve "+JSON.stringify(a)+" relative to "+JSON.stringify(i));var s=e.href;e.href=i,r.href=a;var o=r.href;return e.href=s,t||n.removeChild(e),o}},a=i(),s=function(e){var t=document.createElement("script");t.src=e,t.onload=function(){t.parentNode.removeChild(t)},document.querySelector("head").appendChild(t)};n(function(t,n,i){var a=r(),o={},l=i.resolve(t.getLocation(),a.package||"."),c=a.module||"";if(e.preload){var u={},h=function(e){return u[e]=u[e]||n.defer()};e.bundleLoaded=function(e){h(e).resolve()};var d=n.defer();o.preloaded=d.promise;var p=n.resolve();e.preload.forEach(function(e){p=p.then(function(){return n.all(e.map(function(e){return s(e),h(e).promise}))})}),d.resolve(p.then(function(){delete e.preload,delete e.bundleLoaded}))}t.loadPackage({location:a.mrLocation,hash:a.mrHash},o).then(function(e){return e.inject("mini-url",i),e.inject("promise",n),e.inject("require",t),e.loadPackage({name:"q",location:a.qLocation,hash:a.qHash}).then(function(t){return t.inject("q",n),"autoPackage"in a&&e.injectPackageDescription(l,{}),e.loadPackage({location:l,hash:a.applicationHash}).invoke("async",c)})}).done()})})(this);