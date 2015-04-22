function defineEach(e){for(var t in e)Object.defineProperty(Array.prototype,t,{value:e[t],writable:!0,configurable:!0,enumerable:!1})}require("../shim");var List=require("../list"),PropertyChanges=require("./property-changes"),RangeChanges=require("./range-changes"),MapChanges=require("./map-changes"),array_splice=Array.prototype.splice,array_slice=Array.prototype.slice,array_reverse=Array.prototype.reverse,array_sort=Array.prototype.sort,array_swap=Array.prototype.swap,array_push=Array.prototype.push,protoIsSupported={}.__proto__===Object.prototype,array_makeObservable;array_makeObservable=protoIsSupported?function(){this.__proto__=ChangeDispatchArray}:function(){Object.defineProperties(this,observableArrayProperties)},Object.defineProperty(Array.prototype,"makeObservable",{value:array_makeObservable,writable:!0,configurable:!0,enumerable:!1}),defineEach(PropertyChanges.prototype),Object.defineProperty(Array.prototype,"makePropertyObservable",{value:function(){},writable:!0,configurable:!0,enumerable:!1}),defineEach(RangeChanges.prototype),defineEach(MapChanges.prototype);var observableArrayProperties={isObservable:{value:!0,writable:!0,configurable:!0},makeObservable:{value:Function.noop,writable:!0,configurable:!0},reverse:{value:function(){var e=this.constructClone(this);return e.reverse(),this.swap(0,this.length,e),this},writable:!0,configurable:!0},sort:{value:function(){var e,t;for(this.dispatchBeforeRangeChange(this,this,0),e=0,t=this.length;t>e;e++)PropertyChanges.dispatchBeforeOwnPropertyChange(this,e,this[e]),this.dispatchBeforeMapChange(e,this[e]);for(array_sort.apply(this,arguments),e=0,t=this.length;t>e;e++)PropertyChanges.dispatchOwnPropertyChange(this,e,this[e]),this.dispatchMapChange(e,this[e]);return this.dispatchRangeChange(this,this,0),this},writable:!0,configurable:!0},_dispatchBeforeOwnPropertyChange:{value:function(e,t){for(var n=e,i=e+t;i>n;n++)PropertyChanges.dispatchBeforeOwnPropertyChange(this,n,this[n]),this.dispatchBeforeMapChange(n,this[n])}},_dispatchOwnPropertyChange:{value:function(e,t){for(var n=e,i=e+t;i>n;n++)this.dispatchOwnPropertyChange(n,this[n]),this.dispatchMapChange(n,this[n])}},swap:{value:function(e,t,n){var i,r,a;if(n?Array.isArray(n)||(n=array_slice.call(n)):n=Array.empty,0>e)e=this.length+e;else if(e>this.length){var s=e-this.length,o=Array(s+n.length);for(r=0,a=s;n.length>r;r++,a++)r in n&&(o[a]=n[r]);n=o,e=this.length}var l;if(0===t){if(0===n.length)return[];l=Array.empty}else l=array_slice.call(this,e,e+t);var c=n.length-l.length,u=this.length,h=Math.max(this.length+c,e+n.length),d=Math.max(u,h);c&&PropertyChanges.dispatchBeforeOwnPropertyChange(this,"length",this.length),this.dispatchBeforeRangeChange(n,l,e),0===c?this._dispatchBeforeOwnPropertyChange(e,n.length):(i=PropertyChanges.hasOwnPropertyChangeDescriptor(this))&&this._dispatchBeforeOwnPropertyChange(e,d-e),e>u&&(this.length=e);var p=array_swap.call(this,e,t,n);return 0===c?this._dispatchOwnPropertyChange(e,n.length):i&&this._dispatchOwnPropertyChange(e,d-e),this.dispatchRangeChange(n,l,e),c&&this.dispatchOwnPropertyChange("length",this.length),p},writable:!0,configurable:!0},splice:{value:function(e,t){return e>this.length&&(e=this.length),this.swap.call(this,e,t,array_slice.call(arguments,2))},writable:!0,configurable:!0},set:{value:function(e,t){return this.swap(e,e>=this.length?0:1,[t]),!0},writable:!0,configurable:!0},shift:{value:function(){return this.splice(0,1)[0]},writable:!0,configurable:!0},pop:{value:function(){return this.length?this.splice(this.length-1,1)[0]:void 0},writable:!0,configurable:!0},push:{value:function(){var e,t,n=this.length,i=arguments.length;e=1===i?[arguments[0]]:Array.apply(null,arguments),i>0&&(PropertyChanges.dispatchBeforeOwnPropertyChange(this,"length",n),this.dispatchBeforeRangeChange(e,Array.empty,n),(t=PropertyChanges.hasOwnPropertyChangeDescriptor(this))&&this._dispatchBeforeOwnPropertyChange(n,i)),array_push.apply(this,arguments),i>0&&(t&&this._dispatchOwnPropertyChange(n,i),this.dispatchRangeChange(e,Array.empty,n),this.dispatchOwnPropertyChange("length",this.length))},writable:!0,configurable:!0},unshift:{value:function(e){if(1===arguments.length)return this.splice(0,0,e);var t=array_slice.call(arguments);return this.swap(0,0,t)},writable:!0,configurable:!0},clear:{value:function(){return this.splice(0,this.length)},writable:!0,configurable:!0}},ChangeDispatchArray=Object.create(Array.prototype,observableArrayProperties);exports.observableArrayProperties=observableArrayProperties;