montageDefine("7864825","vendor/requirejs/tests/plugins/fromText/refine",{dependencies:[],factory:function(e){(function(){function i(){var e,i,t;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(i=0;3>i;i++){t=u[i];try{e=new ActiveXObject(t)}catch(s){}if(e){u=[t];break}}if(!e)throw Error("require.getXhr(): XMLHttpRequest not available");return e}var t,s,a={},u=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];"undefined"!=typeof window&&window.navigator&&window.document?t=function(e,t){var s=i();s.open("GET",e,!0),s.onreadystatechange=function(){4===s.readyState&&t(s.responseText)},s.send(null)}:"undefined"!=typeof process&&process.versions&&process.versions.node?(s=e.nodeRequire("fs"),t=function(e,i){i(s.readFileSync(e,"utf8"))}):"undefined"!=typeof Packages&&(t=function(e,i){var t,s,a="utf-8",u=new java.io.File(e),n=java.lang.System.getProperty("line.separator"),l=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(u),a)),r="";try{for(t=new java.lang.StringBuffer,s=l.readLine(),s&&s.length()&&65279===s.charAt(0)&&(s=s.substring(1)),t.append(s);null!==(s=l.readLine());)t.append(n),t.append(s);r=""+t+""}finally{l.close()}i(r)}),define(function(){return{load:function(e,i,s,u){var n=i.toUrl(e+".refine");t(n,function(t){t=t.replace(/refine/g,"define"),u.isBuild&&(a[e]=t),t+="\r\n//@ sourceURL="+n,s.fromText(e,t),i([e],function(e){s(e)})})},write:function(e,i,t){if(i in a){var s=a[i];t.asModule(e+"!"+i,s)}}}})})()}});