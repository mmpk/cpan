montageDefine("7864825","vendor/requirejs/tests/browsertests/scriptload/index.html",{text:'<!DOCTYPE html><html><head>\n    <title>Script Load Test</title>\n    <script src=../common.js></script>\n    <script>var noCache=-1!=location.href.indexOf("nocache");log("noCache: "+noCache);var readyRegExp=/complete|loaded/,onTestScriptLoad=function(e){var t=e.target||e.srcElement;("load"==e.type||readyRegExp.test(t.readyState))&&(log(t.getAttribute("data-name")+" loaded"),t.removeEventListener?t.removeEventListener("load",onTestScriptLoad,!1):t.detachEvent("onreadystatechange",onTestScriptLoad))},attachScript=function(e,t,i){if(noCache&&(e+="?stamp="+(new Date).getTime()),i)document.write(\'<script type="text/javascript" charset="utf-8" data-name="\'+t+\'" src="\'+e+\'" onload="onTestScriptLoad(evt)" onreadytate="onTestScriptLoad(evt)"></script>\');else{var a=document.createElement("script");a.src=e,a.type="text/javascript",a.charset="utf-8",a.setAttribute("data-name",t),a.addEventListener?a.addEventListener("load",onTestScriptLoad,!1):a.attachEvent("onreadystatechange",onTestScriptLoad),document.getElementsByTagName("head")[0].appendChild(a)}},urls=["one.js","two.js","three.js","four.js","five.js","six.js","seven.js","eight.js","nine.js"],loadUrls=function(e){for(var t,i=0;t=urls[i];i++)attachScript(t,t,e)};loadUrls(!1),log("----------------------"),setTimeout(loadUrls,2e3);\n</head>\n<body>\n    <h1>Script Load Test</h1>\n\n    <p>This test checks the order in which script onloads are called. Hopefully\n    only one script onload is fired at a time and it matches the just-evaluated\n    script tag. If this does not work, then it means require.js files *must* specify\n    a module name for a module definition call, instead of letting it be derived\n    from the file path.</p>\n    <p>Check the console for output</p>\n\n\n</body></html>'});