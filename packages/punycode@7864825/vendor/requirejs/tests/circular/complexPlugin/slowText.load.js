montageDefine("7864825","vendor/requirejs/tests/circular/complexPlugin/slowText",{dependencies:[],factory:function(e){(function(){var i=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],t=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,s="undefined"!=typeof location&&location.href,u=s&&location.protocol&&location.protocol.replace(/\:/,""),n=s&&location.hostname,l=s&&(location.port||void 0),r=[];define(function(){var o,c,m;return"undefined"!=typeof window&&window.navigator&&window.document?c=function(e,i){var t=o.createXhr();t.open("GET",e,!0),t.onreadystatechange=function(){4===t.readyState&&i(t.responseText)},t.send(null)}:"undefined"!=typeof process&&process.versions&&process.versions.node?(m=e.nodeRequire("fs"),c=function(e,i){i(m.readFileSync(e,"utf8"))}):"undefined"!=typeof Packages&&(c=function(e,i){var t,a,s="utf-8",u=new java.io.File(e),n=java.lang.System.getProperty("line.separator"),l=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(u),s)),r="";try{for(t=new java.lang.StringBuffer,a=l.readLine(),a&&a.length()&&65279===a.charAt(0)&&(a=a.substring(1)),t.append(a);null!==(a=l.readLine());)t.append(n),t.append(a);r=""+t+""}finally{l.close()}i(r)}),o={version:"1.0.2",strip:function(e){if(e){e=e.replace(t,"");var i=e.match(a);i&&(e=i[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")},createXhr:function(){var e,t,a;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(t=0;3>t;t++){a=i[t];try{e=new ActiveXObject(a)}catch(s){}if(e){i=[a];break}}if(!e)throw Error("createXhr(): XMLHttpRequest not available");return e},get:c,parseName:function(e){var i=!1,t=e.indexOf("."),a=e.substring(0,t),s=e.substring(t+1,e.length);return t=s.indexOf("!"),-1!==t&&(i=s.substring(t+1,s.length),i="strip"===i,s=s.substring(0,t)),{moduleName:a,ext:s,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,i,t,a){var s,u,n,l=o.xdRegExp.exec(e);return l?(s=l[2],u=l[3],u=u.split(":"),n=u[1],u=u[0],!(s&&s!==i||u&&u!==t||(n||u)&&n!==a)):!0},finishLoad:function(e,i,t,a,s){t=i?o.strip(t):t,s.isBuild&&(r[e]=t),setTimeout(function(){a(t)},500)},load:function(e,i,t,a){if(a.isBuild&&!a.inlineText)return t(),void 0;var r=o.parseName(e),c=r.moduleName+"."+r.ext,m=i.toUrl(c),d=a&&a.text&&a.text.useXhr||o.useXhr;!s||d(m,u,n,l)?o.get(m,function(i){o.finishLoad(e,r.strip,i,t,a)}):i([c],function(e){o.finishLoad(r.moduleName+"."+r.ext,r.strip,e,t,a)})},write:function(e,i,t){if(i in r){var a=o.jsEscape(r[i]);t.asModule(e+"!"+i,"define(function () { return '"+a+"';});\n")}},writeFile:function(e,i,t,a,s){var u=o.parseName(i),n=u.moduleName+"."+u.ext,l=t.toUrl(u.moduleName+"."+u.ext)+".js";o.load(n,t,function(){var i=function(e){return a(l,e)};i.asModule=function(e,i){return a.asModule(e,l,i)},o.write(e,n,i,s)},s)}}})})()}});