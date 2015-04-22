montageDefine("241ccae","ui/video-control.reel/video-control",{dependencies:["montage","montage/ui/component","montage/ui/base/abstract-button"],factory:function(e,t){var n=e("montage").Montage,i=e("montage/ui/component").Component,r=e("montage/ui/base/abstract-button").AbstractButton;t.VideoControl=n.create(i,{constructor:{value:function(){i.constructor.call(this),this.addPathChangeListener("videoController.status",this,"handleControllerStatusChange"),this.defineBinding("_controlTrack.value",{"<->":"videoController.position",source:this}),this.defineBinding("_controlTrack.max",{"<-":"videoController.duration",source:this}),this.defineBinding("_controlTrack.time",{"<-":"videoController.position",source:this})}},handlePlayAction:{value:function(){this.videoController.status===this.videoController.PLAYING?this.videoController.pause():this.videoController.status===this.videoController.PAUSED?this.videoController.unpause():this.videoController.play()}},handleFullScreenAction:{value:function(){this.video.toggleFullScreen()}},videoController:{value:null},handleControllerStatusChange:{value:function(e){this.videoController&&(e===this.videoController.PLAYING?this.classList.add("digit-VideoControl--playing"):this.classList.remove("digit-VideoControl--playing"))}},_controlTrack:{value:null}}),t.Button=n.create(r,{hasTemplate:{value:!1}})}});