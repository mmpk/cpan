montageDefine("7097e0d","lib/WritableStream",{dependencies:["./Parser.js","stream","readable-stream","util"],factory:function(e,t,n){function r(e,t){var n=this._parser=new i(e,t);a.call(this,{decodeStrings:!1}),this.once("finish",function(){n.end()})}n.exports=r;var i=e("./Parser.js"),a=e("stream").Writable||e("readable-stream").Writable;e("util").inherits(r,a),a.prototype._write=function(e,t,n){this._parser.write(e),n()}}});