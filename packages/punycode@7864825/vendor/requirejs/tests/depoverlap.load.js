montageDefine("7864825","vendor/requirejs/tests/depoverlap",{dependencies:[],factory:function(e){e(["require","uno"],function(e,i){doh.register("depoverlap",[function(e){for(var t,a,s,u=document.getElementsByTagName("script"),n={},t=u.length-1;t>-1;t--)a=u[t].getAttribute("data-requiremodule"),a&&(a in n||(n[a]=0),n[a]+=1);for(prop in n)e.is(1,n[prop]);e.is("uno",i.name),s=i.doSomething(),e.is("dos",s.dosName),e.is("tres",s.tresName)}]),doh.run()})}});