montageDefine("3b584b8","multi-map",{dependencies:["./map","multi-map"],factory:function(e,t,n){"use strict";function i(e,t,n,a){return this instanceof i?(this.bucket=t||this.bucket,r.call(this,e,n,a,function(e){var t=this.bucket(e);return r.prototype.set.call(this,e,t),t}),void 0):new i(e,t,n,a)}var r=e("./map");n.exports=i,i.MultiMap=i,i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype.constructClone=function(e){return new this.constructor(e,this.bucket,this.contentEquals,this.contentHash)},i.prototype.set=function(e,t){var n=this.get(e);n.swap(0,n.length,t)},i.prototype.bucket=function(){return[]}}});