montageDefine("7864825","vendor/requirejs/tests/simple-badbase.html",{text:'<html><head>\n    <title>require.js: Simple Bad Base Test</title>\n    <base href="http://some.example.com/path/">\n    <script src=http://127.0.0.1/requirejs/require.js></script>\n    <script src=http://127.0.0.1/requirejs/tests/doh/runner.js></script>\n    <script src=http://127.0.0.1/requirejs/tests/doh/_browserRunner.js></script>\n    <script>require({baseUrl:"http://127.0.0.1/requirejs/tests/"},["require","simple","dimple","func"],function(e,i,t,s){doh.register("simple",[function(e){e.is("blue",i.color),e.is("dimple-blue",t.color),e.is("You called a function",s())}]),doh.run()});</script>\n    <script>var path=location.href.replace(/simple-badbase\\.html$/,"foo"),index=path.indexOf(":"),noProtocolPath=path.substring(index+1,path.length).replace(/foo/,"bar");require([path,noProtocolPath],function(){doh.register("fooBar",[function(e){e.is("foo",foo.name),e.is("bar",bar.name)}]),doh.run()});</script>\n</head>\n<body>\n    <h1>require.js: Simple Test</h1>\n    <p>You may need to change the IP address used for this test for it to work correctly.</p>\n    <p>Check console for messages</p>\n\n\n</body></html>'});