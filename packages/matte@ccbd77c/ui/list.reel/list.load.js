montageDefine("ccbd77c","ui/list.reel/list",{dependencies:["montage/ui/component","montage/frb/observers","montage/core/deprecate"],factory:function(e,t){var n=e("montage/ui/component").Component,r=e("montage/frb/observers").observeProperty,i=e("montage/core/deprecate").deprecationWarning;t.List=n.specialize({constructor:{value:function(){this.super(),this.defineBinding("_repetition.content",{"<-":"content"}),this.defineBinding("content.defined() ? null : _repetition.contentController",{"<-":"contentController"})}},templateDidLoad:{value:function(){this._scroller.addOwnPropertyChangeListener("scrollY",this),this._scroller.addOwnPropertyChangeListener("_maxTranslateY",this)}},_repetition:{value:null},_scroller:{value:null},delegate:{value:null},content:{value:null},contentController:{value:null},axis:{value:null},isSelectionEnabled:{value:null},listEndEventThreshold:{value:1},observeProperty:{value:function(e,t,n,a,o){return"objectAtCurrentIteration"!==e&&"currentIteration"!==e?r(this,e,t,n,a,o):(i(e,":iteration.object"),this._repetition?this._repetition.observeProperty(e,t,n,a,o):void 0)}},_fireEndEvent:{value:function(){this.dispatchEventNamed("listEnd")}},handlePropertyChange:{value:function(e,t,n){("scrollY"===t||"_maxTranslateY"===t)&&this._scroller&&n===this._scroller&&this._scroller.scrollY>=this._scroller._maxTranslateY*this.listEndEventThreshold&&this._scroller._maxTranslateY>0&&this._fireEndEvent()}}})}});