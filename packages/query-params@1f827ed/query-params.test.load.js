montageDefine("1f827ed","query-params.test",{dependencies:["./index.js"],factory:function(e){var t=e("./index.js");describe("query-params",function(){var e="http://some.domain.com/foo|3.0|123.1|456|7|BAR;foo=bar;a=1;b=+B;&param=test";it("should encode object to url-string",function(){expect(t.encode({a:"a",b:"b",c:"c",d:"d",e:"e"})).toEqual("a=a&b=b&c=c&d=d&e=e"),expect(t.encode({a:"a"})).toEqual("a=a"),expect(t.encode({a:"æ"})).toEqual("a=%C3%A6"),expect(t.encode({a:1})).toEqual("a=1"),expect(t.encode({a:e})).toEqual("a="+encodeURIComponent(e))}),it("should encode with custom separator",function(){expect(t.encode({a:"a",b:"b"},";")).toEqual("a=a;b=b")}),it("should decode url-string to an object",function(){expect(t.decode("a=a&b=b&c=c&amp;d=d;e=e")).toEqual({a:"a",b:"b",c:"c",d:"d",e:"e"}),expect(t.decode("a=æ")).toEqual({a:"æ"}),expect(t.decode("a=%C3%A6")).toEqual({a:"æ"});var n=t.encode({url:e,width:123,height:321});expect(t.decode(n)).toEqual({url:e,width:"123",height:"321"})}),it("should decode with custom separator",function(){expect(t.decode("a=1;b=2",";")).toEqual({a:"1",b:"2"})})})}});