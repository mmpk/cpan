montageDefine("7864825","vendor/requirejs/tests/commonjs/tests/modules/1.0/cyclic/program",{dependencies:["test","a","b"],factory:function(){define(["require","exports","module","test","a","b"],function(e){var i=e("test"),t=e("a"),a=e("b");i.assert(t.a,"a exists"),i.assert(a.b,"b exists"),i.assert(t.a().b===a.b,"a gets b"),i.assert(a.b().a===t.a,"b gets a"),i.print("DONE","info")})}});