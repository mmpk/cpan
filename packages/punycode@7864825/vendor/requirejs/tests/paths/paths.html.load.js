montageDefine("7864825","vendor/requirejs/tests/paths/paths.html",{text:'<!DOCTYPE html><html><head>\n    <title>require.js: paths Test</title>\n    <script src=../../require.js></script>\n    <script src=../doh/runner.js></script>\n    <script src=../doh/_browserRunner.js></script>\n    <script>var globalCounter=0,scriptCounter=0;require({baseUrl:"./",packages:[{name:"first",location:"first.js",main:"./first"}]},["require","first!whatever"],function(e,i){doh.register("paths",[function(e){for(var t,s,a=document.getElementsByTagName("script"),t=a.length-1;t>-1;t--)s=a[t].getAttribute("data-requiremodule"),(s&&"first"===s||"first/first"===s)&&(scriptCounter+=1);e.is(1,scriptCounter),e.is(2,globalCounter),e.is("first",i.name),e.is("second",i.secondName)}]),doh.run()});</script>\n</head>\n<body>\n    <h1>require.js: paths Test</h1>\n    <p>Check console for messages</p>\n\n\n</body></html>'});