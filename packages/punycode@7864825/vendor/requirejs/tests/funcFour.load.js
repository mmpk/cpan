montageDefine("7864825","vendor/requirejs/tests/funcFour",{dependencies:["funcThree"],factory:function(){define("funcFour",["require","funcThree"],function(e){var i=function(e){return"FOUR called with "+e};return i.suffix=function(){return e("funcThree").suffix()},i})}});