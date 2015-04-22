montageDefine("7864825","vendor/requirejs/tests/layers/layers.html",{text:'<!DOCTYPE html><html><head>\n    <title>require.js: Layers Test</title>\n    <script src=../../require.js></script>\n    <script src=../doh/runner.js></script>\n    <script src=../doh/_browserRunner.js></script>\n    <script>var master=new doh.Deferred;doh.register("layers",[{name:"layers",timeout:5e3,runTest:function(){return master}}]),doh.run(),require({baseUrl:"./"},["require","layer1"],function(e){e(["alpha","beta","gamma","epsilon"],function(e,i,t,a){doh.is("alpha",e.name),doh.is("beta",e.betaName),doh.is("beta",i.name),doh.is("gamma",i.gammaName),doh.is("gamma",t.name),doh.is("epsilon",t.epsilonName),doh.is("epsilon",a.name);for(var s,u=/alpha|beta|gamma/,n=document.getElementsByTagName("script"),s=n.length-1;s>-1;s--)doh.f(u.test(n[s].src));master.callback(!0)})});</script>\n</head>\n<body>\n    <h1>require.js: Layers Test</h1>\n    <p>Check console for messages</p>\n\n\n</body></html>'});