montageDefine("1f0a740","core/converter/lower-case-converter",{dependencies:["../core","./converter"],factory:function(e,t){e("../core").Montage;var n=e("./converter").Converter;t.LowerCaseConverter=n.specialize({_convert:{value:function(e){return e&&"string"==typeof e?e.toLowerCase?e.toLowerCase():e:e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}})}});