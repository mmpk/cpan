montageDefine("7864825","vendor/requirejs/tests/funcThree",{dependencies:["funcFour"],factory:function(e){define("funcThree",["funcFour"],function(){var i=function(i){return i+"-"+e("funcFour").suffix()};return i.suffix=function(){return"THREE_SUFFIX"},i})}});