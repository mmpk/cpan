montageDefine("7864825","vendor/requirejs/tests/text/text.html",{text:'<!DOCTYPE html><html><head>\n    <title>require.js: Text Test</title>\n    <script src=../../require.js></script>\n    <script src=../doh/runner.js></script>\n    <script src=../doh/_browserRunner.js></script>\n    <script>require({baseUrl:"./",paths:{text:"../../text"}}),require(["require","widget","local","text!resources/sample.html!strip"],function(e,i,t,s){doh.register("text",[function(e){e.is("<span>Hello World!</span>",s),e.is(\'<div data-type="widget"><h1>This is a widget!</h1><p>I am in a widget</p></div>\',i.template),e.is("subwidget",i.subWidgetName),e.is(\'<div data-type="subwidget"><h1>This is a subwidget</h1></div>\',i.subWidgetTemplate),e.is("<span>This! is template2</span>",i.subWidgetTemplate2),e.is("<h1>Local</h1>",t.localHtml)},function(i){var t=e("text");i.is(!0,t.useXhr("./some/thing.html","http","some.domain.com")),i.is(!1,t.useXhr("https://some.domain.com/some/thing.html","http","some.domain.com")),i.is(!1,t.useXhr("http://domain.com/some/thing.html","http","some.domain.com")),i.is(!0,t.useXhr("//some.domain.com/some/thing.html","http","some.domain.com")),i.is(!0,t.useXhr("https://some.domain.com:444/some/thing.html","https","some.domain.com","444")),i.is(!1,t.useXhr("https://some.domain.com/some/thing.html","https","some.domain.com","444")),i.is(!0,t.useXhr("http://localhost/some/thing.html","http","localhost"))}]),doh.run()});</script>\n</head>\n<body>\n    <h1>require.js: Text Test</h1>\n    <p>Test for usage of text! require plugin.\n    </p><p>Check console for messages</p>\n\n\n</body></html>'});