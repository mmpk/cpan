montageDefine("7864825","vendor/requirejs/tests/priority/priorityWithDeps/priorityWithDeps.html",{text:'<!DOCTYPE html><html><head> \n    <title>require.js: Priority With Deps Test</title>\n    <link rel=stylesheet href=style/qunit.css type=text/css media=screen> \n    <script src=script/lib/qunit.js></script>\n\n    <script src=../../doh/runner.js></script>\n    <script src=../../doh/_browserRunner.js></script>\n \n    <script>var master=new doh.Deferred;doh.register("priorityWithDeps",[{name:"priorityWithDeps",timeout:3e3,runTest:function(){return master}}]),doh.run(),require={baseUrl:"script",deps:["req/bootstrap"],priority:["req/bootstrap"],callback:function(){doh.is(ip.begin,"begin"),doh.is(ip.config.state,"alpha"),doh.is(ip.utils.test(),"utils Hello require"),master.callback(!0)}};</script> \n \n    <script src=../../../require.js></script> \n<script></script> \n    \n</head> \n<body>\n    <h1>require.js: Priority With Deps Test</h1>\n    <p>Tests a priority with a callback, and with the priority item needing\n    to still load some modules, not all of the modules are included in the\n    priority build layer.</p>\n    <p>Check console for messages</p>\n\n    <h1 id=qunit-header>QUnit Test Suite</h1> \n    <h2 id=qunit-banner></h2> \n    <div id=qunit-testrunner-toolbar></div> \n    <h2 id=qunit-userAgent></h2> \n    <ol id=qunit-tests></ol> \n    <div id=qunit-fixture>test markup</div> \n\n\n \n</body></html>'});