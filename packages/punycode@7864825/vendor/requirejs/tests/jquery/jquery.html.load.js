montageDefine("7864825","vendor/requirejs/tests/jquery/jquery.html",{text:'<!DOCTYPE html><html><head>\n        <title>jQuery+RequireJS Sample Page</title>\n        <script src=../../require.js></script>\n        <script src=scripts/jquery-1.4.4.js></script>\n        <script src=../doh/runner.js></script>\n        <script src=../doh/_browserRunner.js></script>\n        <script>require({baseUrl:"./scripts/"},["app"],function(){doh.register("jqueryPlugins",[function(e){e.is("alpha",$().alpha()),e.is("beta",$().beta())}]),doh.run()});</script>\n    </head>\n    <body>\n        <h1>jQuery+RequireJS Test Page</h1>\n        <p>Tests loading of jquery plugins with require.</p>\n    \n\n</body></html>'});