(function(e){function i(){if(h.doneTimer&&e.clearTimeout&&(e.clearTimeout(h.doneTimer),h.doneTimer=null),h.queue.length)return h.doneTimer=e.setTimeout(function(){h.queue.length?u(i):i()},13),void 0;h.autorun=!0,h.currentModule&&g.moduleDone(h.currentModule,h.moduleStats.bad,h.moduleStats.all);var t=p("qunit-banner"),s=p("qunit-tests"),a=["Tests completed in ",+new Date-h.started," milliseconds.<br/>",'<span class="passed">',h.stats.all-h.stats.bad,'</span> tests of <span class="total">',h.stats.all,'</span> passed, <span class="failed">',h.stats.bad,"</span> failed."].join("");if(t&&(t.className=h.stats.bad?"qunit-fail":"qunit-pass"),s){var n=p("qunit-testresult");n||(n=document.createElement("p"),n.id="qunit-testresult",n.className="result",s.parentNode.insertBefore(n,s.nextSibling)),n.innerHTML=a}g.done(h.stats.bad,h.stats.all)}function t(e){var i=h.filters.length,t=!1;if(!i)return!0;for(;i--;){var s=h.filters[i],a="!"==s.charAt(0);if(a&&(s=s.slice(1)),-1!==e.indexOf(s))return!a;a&&(t=!0)}return t}function s(e){return e=null===e?"":e+"",e.replace(/[\&"<>\\]/g,function(e){switch(e){case"&":return"&amp;";case"\\":return"\\\\";case'"':return'"';case"<":return"&lt;";case">":return"&gt;";default:return e}})}function a(e,i,t,a){a=s(a)||(e?"okay":"failed"),a='<span class="test-message">'+a+"</span>",t=s(g.jsDump.parse(t)),i=s(g.jsDump.parse(i));var u=a+', expected: <span class="test-expected">'+t+"</span>";i!=t&&(u+=' result: <span class="test-actual">'+i+"</span>, diff: "+g.diff(t,i)),g.log(e,u),h.assertions.push({result:!!e,message:u})}function u(e){h.queue.push(e),h.autorun&&!h.blocking&&n()}function n(){for(var e=(new Date).getTime();h.queue.length&&!h.blocking;){if(!(0>=h.updateRate||(new Date).getTime()-e<h.updateRate)){setTimeout(n,13);break}h.queue.shift()()}}function l(){if(h.pollution=[],h.noglobals)for(var i in e)h.pollution.push(i)}function r(){var e=h.pollution;l();var i=o(e,h.pollution);i.length>0&&(ok(!1,"Introduced global variable(s): "+i.join(", ")),h.expected++);var t=o(h.pollution,e);t.length>0&&(ok(!1,"Deleted global variable(s): "+t.join(", ")),h.expected++)}function o(e,i){for(var t=e.slice(),s=0;t.length>s;s++)for(var a=0;i.length>a;a++)if(t[s]===i[a]){t.splice(s,1),s--;break}return t}function c(i,t,s){"undefined"!=typeof console&&console.error&&console.warn?(console.error(i),console.error(t),console.warn(""+s)):e.opera&&opera.postError&&opera.postError(i,t,s.toString)}function m(e,i){for(var t in i)e[t]=i[t];return e}function d(e,i,t){e.addEventListener?e.addEventListener(i,t,!1):e.attachEvent?e.attachEvent("on"+i,t):t()}function p(e){return!("undefined"==typeof document||!document||!document.getElementById)&&document.getElementById(e)}function v(e){for(var i,t="",s=0;e[s];s++)i=e[s],3===i.nodeType||4===i.nodeType?t+=i.nodeValue:8!==i.nodeType&&(t+=v(i.childNodes));return t}var g={module:function(e,i){h.currentModule=e,u(function(){h.currentModule&&g.moduleDone(h.currentModule,h.moduleStats.bad,h.moduleStats.all),h.currentModule=e,h.moduleTestEnvironment=i,h.moduleStats={all:0,bad:0},g.moduleStart(e,i)})},asyncTest:function(e,i,t){2===arguments.length&&(t=i,i=0),g.test(e,i,t,!0)},test:function(s,a,n,o){var b,f,q='<span class="test-name">'+s+"</span>";2===arguments.length&&(n=a,a=null),a&&"object"==typeof a&&(f=a,a=null),h.currentModule&&(q='<span class="module-name">'+h.currentModule+"</span>: "+q),t(h.currentModule+": "+s)&&(u(function(){b=m({setup:function(){},teardown:function(){}},h.moduleTestEnvironment),f&&m(b,f),g.testStart(s,b),g.current_testEnvironment=b,h.assertions=[],h.expected=a;var e=p("qunit-tests");if(e){var i=document.createElement("strong");i.innerHTML="Running "+q;var t=document.createElement("li");t.appendChild(i),t.id="current-test-output",e.appendChild(t)}try{h.pollution||l(),b.setup.call(b)}catch(u){g.ok(!1,"Setup failed on "+q+": "+u.message)}}),u(function(){o&&g.stop();try{n.call(b)}catch(e){c("Test "+q+" died, exception and test follows",e,n),g.ok(!1,"Died on test #"+(h.assertions.length+1)+": "+e.message),l(),h.blocking&&start()}}),u(function(){try{r(),b.teardown.call(b)}catch(e){g.ok(!1,"Teardown failed on "+q+": "+e.message)}}),u(function(){try{g.reset()}catch(t){c("reset() failed, following Test "+q+", exception and reset fn follows",t,reset)}h.expected&&h.expected!=h.assertions.length&&g.ok(!1,"Expected "+h.expected+" assertions, but "+h.assertions.length+" were run");var a=0,u=0,n=p("qunit-tests");if(h.stats.all+=h.assertions.length,h.moduleStats.all+=h.assertions.length,n){for(var l=document.createElement("ol"),r=0;h.assertions.length>r;r++){var o=h.assertions[r],m=document.createElement("li");m.className=o.result?"pass":"fail",m.innerHTML=o.message||"(no message)",l.appendChild(m),o.result?a++:(u++,h.stats.bad++,h.moduleStats.bad++)}0==u&&(l.style.display="none");var b=document.createElement("strong");b.innerHTML=q+" <b style='color:black;'>(<b class='fail'>"+u+"</b>, <b class='pass'>"+a+"</b>, "+h.assertions.length+")</b>",d(b,"click",function(){var e=b.nextSibling,i=e.style.display;e.style.display="none"===i?"block":"none"}),d(b,"dblclick",function(i){var t=i&&i.target?i.target:e.event.srcElement;("span"==t.nodeName.toLowerCase()||"b"==t.nodeName.toLowerCase())&&(t=t.parentNode),e.location&&"strong"===t.nodeName.toLowerCase()&&(e.location.search="?"+encodeURIComponent(v([t]).replace(/\(.+\)$/,"").replace(/(^\s*|\s*$)/g,"")))});var m=p("current-test-output");if(m.id="",m.className=u?"fail":"pass",m.removeChild(m.firstChild),m.appendChild(b),m.appendChild(l),u){var f=p("qunit-testrunner-toolbar");f&&(f.style.display="block",p("qunit-filter-pass").disabled=null,p("qunit-filter-missing").disabled=null)}}else for(var r=0;h.assertions.length>r;r++)h.assertions[r].result||(u++,h.stats.bad++,h.moduleStats.bad++);g.testDone(s,u,h.assertions.length),e.setTimeout||h.queue.length||i()}),e.setTimeout&&!h.doneTimer&&(h.doneTimer=e.setTimeout(function(){h.queue.length?u(i):i()},13)))},expect:function(e){h.expected=e},ok:function(e,i){i=s(i),g.log(e,i),h.assertions.push({result:!!e,message:i})},equal:function(e,i,t){a(i==e,e,i,t)},notEqual:function(e,i,t){a(i!=e,e,i,t)},deepEqual:function(e,i,t){a(g.equiv(e,i),e,i,t)},notDeepEqual:function(e,i,t){a(!g.equiv(e,i),e,i,t)},strictEqual:function(e,i,t){a(i===e,e,i,t)},notStrictEqual:function(e,i,t){a(i!==e,e,i,t)},raises:function(e,i){try{e(),ok(!1,i)}catch(t){ok(!0,i)}},start:function(){e.setTimeout?e.setTimeout(function(){h.timeout&&clearTimeout(h.timeout),h.blocking=!1,n()},13):(h.blocking=!1,n())},stop:function(i){h.blocking=!0,i&&e.setTimeout&&(h.timeout=e.setTimeout(function(){g.ok(!1,"Test timed out"),g.start()},i))}};g.equals=g.equal,g.same=g.deepEqual;var h={queue:[],blocking:!0};(function(){for(var i=e.location||{search:"",protocol:"file:"},t=i.search.slice(1).split("&"),s=0;t.length>s;s++)t[s]=decodeURIComponent(t[s]),"noglobals"===t[s]?(t.splice(s,1),s--,h.noglobals=!0):t[s].search("=")>-1&&(t.splice(s,1),s--);h.filters=t,g.isLocal=!("file:"!==i.protocol)})(),"undefined"==typeof exports||"undefined"==typeof require?(m(e,g),e.QUnit=g):(m(exports,g),exports.QUnit=g),m(g,{config:h,init:function(){m(h,{stats:{all:0,bad:0},moduleStats:{all:0,bad:0},started:+new Date,updateRate:1e3,blocking:!1,autostart:!0,autorun:!1,assertions:[],filters:[],queue:[]});var e=p("qunit-tests"),i=p("qunit-banner"),t=p("qunit-testresult");e&&(e.innerHTML=""),i&&(i.className=""),t&&t.parentNode.removeChild(t)},reset:function(){e.jQuery&&jQuery("#main, #qunit-fixture").html(h.fixture)},triggerEvent:function(e,i,t){document.createEvent?(t=document.createEvent("MouseEvents"),t.initMouseEvent(i,!0,!0,e.ownerDocument.defaultView,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)):e.fireEvent&&e.fireEvent("on"+i)},is:function(e,i){return g.objectType(i)==e},objectType:function(e){if(e===void 0)return"undefined";if(null===e)return"null";var i=Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]||"";switch(i){case"Number":return isNaN(e)?"nan":"number";case"String":case"Boolean":case"Array":case"Date":case"RegExp":case"Function":return i.toLowerCase()}return"object"==typeof e?"object":void 0},begin:function(){},done:function(){},log:function(){},testStart:function(){},testDone:function(){},moduleStart:function(){},moduleDone:function(){}}),("undefined"==typeof document||"complete"===document.readyState)&&(h.autorun=!0),d(e,"load",function(){g.begin();var e=m({},h);g.init(),m(h,e),h.blocking=!1;var i=p("qunit-userAgent");i&&(i.innerHTML=navigator.userAgent);var t=p("qunit-testrunner-toolbar");if(t){t.style.display="none";var s=document.createElement("input");s.type="checkbox",s.id="qunit-filter-pass",s.disabled=!0,d(s,"click",function(){for(var e=document.getElementsByTagName("li"),i=0;e.length>i;i++)e[i].className.indexOf("pass")>-1&&(e[i].style.display=s.checked?"none":"")}),t.appendChild(s);var a=document.createElement("label");a.setAttribute("for","qunit-filter-pass"),a.innerHTML="Hide passed tests",t.appendChild(a);var u=document.createElement("input");u.type="checkbox",u.id="qunit-filter-missing",u.disabled=!0,d(u,"click",function(){for(var e=document.getElementsByTagName("li"),i=0;e.length>i;i++)e[i].className.indexOf("fail")>-1&&e[i].innerHTML.indexOf("missing test - untested code is broken code")>-1&&(e[i].parentNode.parentNode.style.display=u.checked?"none":"block")}),t.appendChild(u),a=document.createElement("label"),a.setAttribute("for","qunit-filter-missing"),a.innerHTML="Hide missing tests (untested code is broken code)",t.appendChild(a)}var n=p("main")||p("qunit-fixture");n&&(h.fixture=n.innerHTML),h.autostart&&g.start()}),g.equiv=function(){function e(e,i,t){var s=g.objectType(e);return s?"function"===g.objectType(i[s])?i[s].apply(i,t):i[s]:void 0}var i,t=[],s=[],a=function(){function e(e,i){return e instanceof i.constructor||i instanceof e.constructor?i==e:i===e}return{string:e,"boolean":e,number:e,"null":e,undefined:e,nan:function(e){return isNaN(e)},date:function(e,i){return"date"===g.objectType(e)&&i.valueOf()===e.valueOf()},regexp:function(e,i){return"regexp"===g.objectType(e)&&i.source===e.source&&i.global===e.global&&i.ignoreCase===e.ignoreCase&&i.multiline===e.multiline},"function":function(){var e=t[t.length-1];return e!==Object&&e!==void 0},array:function(e,t){var a,u,n,l;if("array"!==g.objectType(e))return!1;if(l=t.length,l!==e.length)return!1;for(s.push(t),a=0;l>a;a++){for(n=!1,u=0;s.length>u;u++)s[u]===t[a]&&(n=!0);if(!n&&!i(t[a],e[a]))return s.pop(),!1}return s.pop(),!0},object:function(e,a){var u,n,l,r=!0,o=[],c=[];if(a.constructor!==e.constructor)return!1;t.push(a.constructor),s.push(a);for(u in a){for(l=!1,n=0;s.length>n;n++)s[n]===a[u]&&(l=!0);if(o.push(u),!l&&!i(a[u],e[u])){r=!1;break}}t.pop(),s.pop();for(u in e)c.push(u);return r&&i(o.sort(),c.sort())}}}();return i=function(){var i=Array.prototype.slice.apply(arguments);return 2>i.length?!0:function(i,t){return i===t?!0:null===i||null===t||i===void 0||t===void 0||g.objectType(i)!==g.objectType(t)?!1:e(i,a,[t,i])}(i[0],i[1])&&arguments.callee.apply(this,i.splice(1,i.length-1))}}(),g.jsDump=function(){function e(e){return'"'+(""+e).replace(/"/g,'\\"')+'"'}function i(e){return e+""}function t(e,i,t){var s=u.separator(),a=u.indent(),n=u.indent(1);return i.join&&(i=i.join(","+s+n)),i?[e,n+i,a+t].join(s):e+t}function s(e){var i=e.length,s=Array(i);for(this.up();i--;)s[i]=this.parse(e[i]);return this.down(),t("[",s,"]")}var a=/^function (\w+)/,u={parse:function(e,i){var t=this.parsers[i||this.typeOf(e)];return i=typeof t,"function"==i?t.call(this,e):"string"==i?t:this.parsers.error},typeOf:function(e){var i;return i=null===e?"null":e===void 0?"undefined":g.is("RegExp",e)?"regexp":g.is("Date",e)?"date":g.is("Function",e)?"function":e.setInterval&&e.document&&!e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":"object"==typeof e&&"number"==typeof e.length&&e.length>=0?"array":typeof e},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&nbsp;":" "},indent:function(e){if(!this.multiline)return"";var i=this.indentChar;return this.HTML&&(i=i.replace(/\t/g,"   ").replace(/ /g,"&nbsp;")),Array(this._depth_+(e||0)).join(i)},up:function(e){this._depth_+=e||1},down:function(e){this._depth_-=e||1},setParser:function(e,i){this.parsers[e]=i},quote:e,literal:i,join:t,_depth_:1,parsers:{window:"[Window]",document:"[Document]",error:"[ERROR]",unknown:"[Unknown]","null":"null",undefined:"undefined","function":function(e){var i="function",s="name"in e?e.name:(a.exec(e)||[])[1];return s&&(i+=" "+s),i+="(",i=[i,this.parse(e,"functionArgs"),"){"].join(""),t(i,this.parse(e,"functionCode"),"}")},array:s,nodelist:s,arguments:s,object:function(e){var i=[];this.up();for(var s in e)i.push(this.parse(s,"key")+": "+this.parse(e[s]));return this.down(),t("{",i,"}")},node:function(e){var i=this.HTML?"&lt;":"<",t=this.HTML?"&gt;":">",s=e.nodeName.toLowerCase(),a=i+s;for(var u in this.DOMAttrs){var n=e[this.DOMAttrs[u]];n&&(a+=" "+u+"="+this.parse(n,"attribute"))}return a+t+i+"/"+s+t},functionArgs:function(e){var i=e.length;if(!i)return"";for(var t=Array(i);i--;)t[i]=String.fromCharCode(97+i);return" "+t.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:i,number:i,"boolean":i},DOMAttrs:{id:"id",name:"name","class":"className"},HTML:!1,indentChar:"   ",multiline:!1};return u}(),g.diff=function(){function e(e,i){for(var t={},s={},a=0;i.length>a;a++)null==t[i[a]]&&(t[i[a]]={rows:[],o:null}),t[i[a]].rows.push(a);for(var a=0;e.length>a;a++)null==s[e[a]]&&(s[e[a]]={rows:[],n:null}),s[e[a]].rows.push(a);for(var a in t)1==t[a].rows.length&&s[a]!==void 0&&1==s[a].rows.length&&(i[t[a].rows[0]]={text:i[t[a].rows[0]],row:s[a].rows[0]},e[s[a].rows[0]]={text:e[s[a].rows[0]],row:t[a].rows[0]});for(var a=0;i.length-1>a;a++)null!=i[a].text&&null==i[a+1].text&&i[a].row+1<e.length&&null==e[i[a].row+1].text&&i[a+1]==e[i[a].row+1]&&(i[a+1]={text:i[a+1],row:i[a].row+1},e[i[a].row+1]={text:e[i[a].row+1],row:a+1});for(var a=i.length-1;a>0;a--)null!=i[a].text&&null==i[a-1].text&&i[a].row>0&&null==e[i[a].row-1].text&&i[a-1]==e[i[a].row-1]&&(i[a-1]={text:i[a-1],row:i[a].row-1},e[i[a].row-1]={text:e[i[a].row-1],row:a-1});return{o:e,n:i}}return function(i,t){i=i.replace(/\s+$/,""),t=t.replace(/\s+$/,"");var s=e(""==i?[]:i.split(/\s+/),""==t?[]:t.split(/\s+/)),a="",u=i.match(/\s+/g);null==u?u=[" "]:u.push(" ");var n=t.match(/\s+/g);if(null==n?n=[" "]:n.push(" "),0==s.n.length)for(var l=0;s.o.length>l;l++)a+="<del>"+s.o[l]+u[l]+"</del>";else{if(null==s.n[0].text)for(t=0;s.o.length>t&&null==s.o[t].text;t++)a+="<del>"+s.o[t]+u[t]+"</del>";for(var l=0;s.n.length>l;l++)if(null==s.n[l].text)a+="<ins>"+s.n[l]+n[l]+"</ins>";else{var r="";for(t=s.n[l].row+1;s.o.length>t&&null==s.o[t].text;t++)r+="<del>"+s.o[t]+u[t]+"</del>";a+=" "+s.n[l].text+n[l]+r}}return a}}()})(this);