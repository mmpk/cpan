montageDefine("7864825","vendor/requirejs/tests/text/textOnly.html",{text:'<!DOCTYPE html><html><head>\n    <title>require.js: Text Test</title>\n    <script src=../../require.js></script>\n    <script src=../doh/runner.js></script>\n    <script src=../doh/_browserRunner.js></script>\n    <script>require({baseUrl:"./",paths:{text:"../../text"}},["text!resources/sample.html!strip"],function(e){doh.register("textOnly",[function(i){i.is("<span>Hello World!</span>",e)}]),doh.run()});</script>\n</head>\n<body>\n    <h1>require.js: Text Test</h1>\n    <p>Test for usage of text! require plugin.\n    </p><p>Check console for messages</p>\n\n\n</body></html>'});