montageDefine("199c172","assign",{dependencies:["./parse","./compile-assigner","./scope"],factory:function(e,t,n){function i(e,t,n,i,o,l){var c;c="string"==typeof t?r(t):t;var u=a(c),h=new s(e);return h.parameters=i,h.document=o,h.components=l,u(n,h)}var r=e("./parse"),a=e("./compile-assigner"),s=e("./scope");n.exports=i}});