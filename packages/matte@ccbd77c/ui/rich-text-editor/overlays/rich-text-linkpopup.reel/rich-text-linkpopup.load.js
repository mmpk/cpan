montageDefine("ccbd77c","ui/rich-text-editor/overlays/rich-text-linkpopup.reel/rich-text-linkpopup",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.RichTextLinkPopup=n.specialize({_isActive:{enumerable:!1,value:!1},_editor:{enumerable:!1,value:null},target:{enumerable:!1,value:null},_needsReset:{enumerable:!1,value:!1},initWithEditor:{value:function(e){this._editor=e}},editorMouseUp:{value:function(e){var t;if(this._editor.activeOverlay!=this&&"IMG"==e.target.nodeName)for(t=e.target;t&&t!=this._element;){if("A"==t.nodeName)return t!=this.target&&(this.target=t,this._needsReset=!0,this._isActive?this.needsDraw=!0:this._editor.showOverlay(this)),!0;t=t.parentElement}}},editorTouchEnd:{value:function(e){this.editorMouseUp(e)}},editorSelectionDidChange:{value:function(e){var t;if(e&&e.collapsed)for(t=e.commonAncestorContainer;t&&t!=this._element;){if("A"==t.nodeName)return t!=this.target&&(this.target=t,this._needsReset=!0,this._isActive?this.needsDraw=!0:this._editor.showOverlay(this)),!0;t=t.parentElement}return this._editor.activeOverlay==this&&this._editor.hideOverlay(),this.target=null,!1}},didBecomeActive:{value:function(){this._isActive=!0,window.addEventListener("resize",this,!1)}},didBecomeInactive:{value:function(){this._isActive=!1,window.removeEventListener("resize",this,!1),this.target=null,this._needsReset=!1}},enterDocument:{value:function(e){e&&(this._popupExtraWidth=this.element.offsetWidth)}},draw:{enumerable:!1,value:function(){var e=this.element,t=this.target,n=this._editor.innerElement;if(this._needsReset){var r,i,a,o,s,l,c,u,h=n.offsetHeight,p=n.offsetWidth,d=n.scrollTop,f=n.scrollLeft,g=t.offsetWidth,m=t.offsetHeight,v="",y=function(e){for(i=e.offsetTop,r=e.offsetLeft;(e=e.offsetParent)&&e!=n;)i+=e.offsetTop,r+=e.offsetLeft};y(t),a=r,o=i,v=o>60&&o-d+m+50>h?"bottom: "+(h-o+5)+"px;":"top: "+(o+m+5)+"px;",s=f,c=f+p,l=c-a,u=a+g-s,l>u?150>l?(v+=" left: "+(s+5)+"px;",v+=" max-width: "+(p-10-this._popupExtraWidth)+"px;"):(v+=" left: "+(s+a)+"px;",v+=" max-width: "+(l-5-this._popupExtraWidth)+"px;"):150>u?(v+=" right: "+(s+5)+"px;",v+=" max-width: "+(p-10-this._popupExtraWidth)+"px;"):(v+=" right: "+(c-(s+a+g+1))+"px;",v+=" max-width: "+(u-this._popupExtraWidth)+"px;"),e.setAttribute("style",v),this.link.href=t.href,this.link.textContent=t.href,this._needsReset=!1}}},handleResize:{enumerable:!1,value:function(){this._needsReset=!0,this.needsDraw=!0}}})}});