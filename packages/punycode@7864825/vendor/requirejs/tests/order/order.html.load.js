montageDefine("7864825","vendor/requirejs/tests/order/order.html",{text:'<!DOCTYPE html><html><head>\n    <title>require.js: Order Plugin Test</title>\n    <script src=../../require.js></script>\n    <script src=../doh/runner.js></script>\n    <script src=../doh/_browserRunner.js></script>\n    <script>require({baseUrl:"./",paths:{order:"../../order"}},["require","order!one.js","order!two","order!three.js","order!bar.js"],function(){var e=one.name,i=two.name,t=three.name;doh.register("order",[function(a){a.is("one",e),a.is("one",two.oneName),a.is("two",i),a.is("two",three.twoName),a.is("three",t),a.is(1,bar)}]),doh.run()});</script>\n</head>\n<body>\n    <h1>require.js: Order Plugin Test</h1>\n    <p>To properly test, clear cache in the browser.</p>\n    <p>Check console for messages</p>\n\n\n</body></html>'});