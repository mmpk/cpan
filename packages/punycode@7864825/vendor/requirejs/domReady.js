define(function(){function e(e){for(var t,n=0;t=e[n];n++)t(s)}function t(){var t=l,n=c;o&&(t.length&&(l=[],e(t)),u.resourcesDone&&n.length&&(c=[],e(n)))}function n(){o||(o=!0,r&&clearInterval(r),t())}function i(e){return o?e(s):l.push(e),i}var r,a="undefined"!=typeof window&&window.document,o=!a,s=a?document:null,l=[],c=[],u=requirejs||require||{},h=u.resourcesReady;return"resourcesReady"in u&&(u.resourcesReady=function(e){h&&h(e),e&&t()}),a&&(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):window.attachEvent&&(window.attachEvent("onload",n),self===self.top&&(r=setInterval(function(){try{document.body&&(document.documentElement.doScroll("left"),n())}catch(e){}},30))),"complete"===document.readyState&&n()),i.withResources=function(e){return o&&u.resourcesDone?e(s):c.push(e),i},i.version="1.0.0",i.load=function(e,t,n,r){r.isBuild?n(null):i(n)},i});