montageDefine("7864825","vendor/requirejs/tests/browsertests/noload/server",{dependencies:["http"],factory:function(e){var t=e("http"),n="0.0.0.0",i=9320;t.createServer(function(e,t){e.on("end",function(){var e="500 server error";t.writeHead(500,{"Content-Type":"text/plain","Content-Length":e.length}),t.write(e,"utf8"),t.end()})}).listen(i,n),console.log("Server running at http://"+n+":"+i+"/")}});