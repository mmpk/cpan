montageDefine("6efc682","deserialization/interpreter",{dependencies:["./reviver","./context"],factory:function(e,t){(function(t){function n(){}var r=e("./reviver").Reviver,i=e("./context").Context;Object.defineProperties(n.prototype,{instantiate:{value:function(e,t){var n=new r,a=new i(e,n,t);return a.getObjects()}}}),t.Interpreter=n})(t)}});