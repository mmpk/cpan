montageDefine("1f0a740","core/event/mutable-event",{dependencies:["../core"],factory:function(e,t){var n=e("../core").Montage;if("undefined"!=typeof window){var r={},i=function(e,t){var r="_"+t;n.defineProperty(e,r,{value:void 0}),n.defineProperty(e,t,{get:function(e,t){return function(){return this.hasOwnProperty(t)?this[t]:this._event?this._event[e]:void 0}}(t,r),set:function(e){return function(t){this[e]=t}}(r)})};t.MutableEvent=n.specialize({_initPrototypeWithEvent:{value:function(e){var t;for(t in e)this[t]||i(this,t);return i(this,"replayed"),this}},_initWithEvent:{value:function(e){return this._event=e,this}},preventDefault:{value:function(){this._event.preventDefault()}},getPreventDefault:{value:function(){return this._event.getPreventDefault?this._event.getPreventDefault():this._event.defaultPrevented}},stopImmediatePropagation:{value:function(){this._event.stopImmediatePropagation(),this.propagationStopped=!0,this.immediatePropagationStopped=!0}},propagationStopped:{value:!1},immediatePropagationStopped:{value:!1},mutable:{value:!0},target:{value:null},stopPropagation:{value:function(){this._event.stopPropagation(),this.propagationStopped=!0}},stop:{value:function(){this.preventDefault(),this.stopPropagation()}}},{fromEvent:{value:function(e){var n,i=e.type,a=r[i];return a||(a=function(){},a.prototype=(new t.MutableEvent)._initPrototypeWithEvent(e),r[i]=a),n=new a,n._initWithEvent(e),n}},fromType:{value:function(e,t,n,r){var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t,n,r),this.fromEvent(i)}}})}}});