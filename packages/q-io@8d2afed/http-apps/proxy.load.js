montageDefine("8d2afed","http-apps/proxy",{dependencies:["../http","url2","q"],factory:function(e,t){var n=e("../http"),r=e("url2"),i=e("q");t.Proxy=function(e){if("string"==typeof e){var t=e;e=function(e){return e.url=t,e}}return function(){return i.when(e.apply(this,arguments),function(e){return n.request(e)})}},t.ProxyTree=function(e){return t.Proxy(function(t){return t.url=r.resolve(e,t.pathInfo.replace(/^\//,"")),t})}}});