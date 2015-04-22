montageDefine("1f0a740","ui/flow.reel/flow-bezier-spline",{dependencies:["../../core/core"],factory:function(e,t){var n=e("../../core/core").Montage,r=t.FlowBezierSpline=n.specialize({constructor:{value:function r(){this._knots=[],this._densities=[]}},knots:{get:function(){return this._knots},set:function(e){this._knots=e}},previousHandlers:{get:function(){return this._previousHandlers||(this._previousHandlers=[]),this._previousHandlers},set:function(e){this._previousHandlers=e}},nextHandlers:{get:function(){return this._nextHandlers||(this._nextHandlers=[]),this._nextHandlers},set:function(e){this._nextHandlers=e}},densities:{get:function(){return this._densities},set:function(e){this._densities=e,this._densitiesLength=this._densities.length,this._maxTime=null}},_parameters:{value:{}},parameters:{get:function(){return this._parameters||(this._parameters={}),this._parameters},set:function(e){this._parameters=e,this._parametersLength=this._parameters.length}},_maxTime:{enumerable:!1,value:null},computeMaxTime:{value:function(){return this._computeDensitySummation(),this._maxTime=this._densitySummation.length?this._densitySummation[this._densitySummation.length-1]:0,this._maxTime}},_densitySummation:{enumerable:!1,value:null},_computeDensitySummation:{enumerable:!1,value:function(){var e,t=this.densities,n=t.length-1,r=0;for(this._densitySummation=[],e=0;n>e;e++)r+=(t[e]+t[e+1])/2,this._densitySummation[e]=r;this._maxTime=null}},_convertSplineTimeToBezierIndexTime:{enumerable:!1,value:function(e){if(0>e)return null;if(null===this._maxTime&&this.computeMaxTime(),e>=this._maxTime)return null;for(var t,n,r,i,a,o=this._densitySummation,s=o.length,l=s-1,u=s>>1;u;)l-u>=0&&o[l-u]>e?l-=u:u>>=1;return t=e-(l?o[l-1]:0),r=this._densities[l],i=this._densities[l+1],a=r-i,n=-1e-10>a||a>1e-10?(r-Math.sqrt(r*r+2*(i-r)*t))/a:t/r,[l,n]}},getPositionAtIndexTime:{value:function(e,t){var n=e[0],r=e[1],i=this._knots[n],a=this._nextHandlers[n],o=this._previousHandlers[n+1],s=this._knots[n+1],l=1-r,u=l*l*l,c=3*l*l*r,h=3*l*r*r,d=r*r*r;return t?[t.x.numerator*(i[0]*u+a[0]*c+o[0]*h+s[0]*d)/t.x.denominator,t.y.numerator*(i[1]*u+a[1]*c+o[1]*h+s[1]*d)/t.y.denominator,t.z.numerator*(i[2]*u+a[2]*c+o[2]*h+s[2]*d)/t.z.denominator]:[i[0]*u+a[0]*c+o[0]*h+s[0]*d,i[1]*u+a[1]*c+o[1]*h+s[1]*d,i[2]*u+a[2]*c+o[2]*h+s[2]*d]}},getRotationAtIndexTime:{value:function(e){var t,n,r,i=e[0],a=e[1],o=1-a,s=this._parameters;return t=s.rotateX!==void 0?s.rotateX.data[i]*o+s.rotateX.data[i+1]*a:0,n=s.rotateY!==void 0?s.rotateY.data[i]*o+s.rotateY.data[i+1]*a:0,r=s.rotateZ!==void 0?s.rotateZ.data[i]*o+s.rotateZ.data[i+1]*a:0,[t,n,r]}},getStyleAtIndexTime:{value:function(e){var t,n,r,i,a,o,s=e[0],l=e[1],u=this._parameters,c=1-l,h="";for(r=Object.keys(u),i=r.length,t=0;i>t;t++)n=r[t],a=u[n],o=a.data,"rotateX"!==n&&"rotateY"!==n&&"rotateZ"!==n&&o[s]!==void 0&&o[s+1]!==void 0&&(h+=n+":"+1e-5*(1e5*(o[s]*c+o[s+1]*l)>>0)+a.units+";");return h}},transformVectorArray:{value:function(e,t){var n,r,i=e.length,a=[];for(r=0;i>r;r++)n=e[r],n&&(a[r]=[n[0]*t[0]+n[1]*t[4]+n[2]*t[8]+t[12],n[0]*t[1]+n[1]*t[5]+n[2]*t[9]+t[13],n[0]*t[2]+n[1]*t[6]+n[2]*t[10]+t[14]]);return a}},transform:{value:function(e){var t=new r;return t._densities=this._densities,t._densitySummation=this._densitySummation,t._knots=this.transformVectorArray(this.knots,e),t._previousHandlers=this.transformVectorArray(this.previousHandlers,e),t._nextHandlers=this.transformVectorArray(this.nextHandlers,e),t}},deCasteljau:{value:function(e,t,n,r,i){var a=1-i,o=a*e[0]+i*t[0],s=a*t[0]+i*n[0],l=a*n[0]+i*r[0],u=a*o+i*s,c=a*s+i*l,h=a*u+i*c,d=a*e[1]+i*t[1],p=a*t[1]+i*n[1],f=a*n[1]+i*r[1],m=a*d+i*p,v=a*p+i*f,g=a*m+i*v,_=a*e[2]+i*t[2],b=a*t[2]+i*n[2],y=a*n[2]+i*r[2],w=a*_+i*b,E=a*b+i*y,P=a*w+i*E;return[[e,[o,d,_],[u,m,w],[h,g,P]],[[h,g,P],[c,v,E],[l,f,y],r]]}},cubic:{enumerable:!1,value:function(e,t,n,r,i){return((e*i+t)*i+n)*i+r}},cubeRoot:{enumerable:!1,value:function(e){return e>0?Math.pow(e,1/3):-Math.pow(-e,1/3)}},cubicRealRoots:{enumerable:!1,value:function(e,t,n,r){var i=1e-10,a=Math;if(-i>e||e>i){var o=1/e,s=t*o,l=n*o,u=(3*l-s*s)*(1/9),c=(4.5*s*l-13.5*r*o-s*s*s)*(1/27),h=u*u*u+c*c;if(h>i){var d=a.sqrt(h);return[this.cubeRoot(c+d)+this.cubeRoot(c-d)+s*(-1/3)]}if(h>-i){if(-i>c||c>i){var p=this.cubeRoot(c),f=2*p+s*(-1/3),m=s*(-1/3)-p;return m>f?[f,m]:[m,f]}return[s*(-1/3)]}var v=a.acos(c/a.sqrt(-u*u*u))*(1/3),g=a.sqrt(-u),_=1.7320508075688772*g*a.sin(v),b=s*(-1/3);return g*=a.cos(v),[b-g-_,b-g+_,b+2*g]}if(-i>t||t>i){var y=n*n-4*t*r;return y>=0?(y=a.sqrt(y),[(-n-y)/(2*t),(y-n)/(2*t)]):[]}return-i>n||n>i?[-r/n]:[]}},_halfPI:{enumerable:!1,value:.5*Math.PI},reflectionMatrix:{enumerable:!1,value:function(e,t,n){var r=Math,i=this._halfPI-r.atan2(t,e),a=r.sin(i),o=r.cos(i),s=this._halfPI-r.atan2(n,e*a+t*o),l=r.sin(s);return[l*a,o*l,r.cos(s)]}},reflectedY:{enumerable:!1,value:function(e,t,n,r){return e*r[0]+t*r[1]+n*r[2]}},getScaledKnots:{value:function(e){var t,n=[];for(t=0;this._knots.length>t;t++)this._knots[t]&&(n[t]=[e.x.numerator*this._knots[t][0]/e.x.denominator,e.y.numerator*this._knots[t][1]/e.y.denominator,e.z.numerator*this._knots[t][2]/e.z.denominator]);return n}},getScaledPreviousHandlers:{value:function(e){var t,n=[];for(t=0;this._previousHandlers.length>t;t++)this._previousHandlers[t]&&(n[t]=[e.x.numerator*this._previousHandlers[t][0]/e.x.denominator,e.y.numerator*this._previousHandlers[t][1]/e.y.denominator,e.z.numerator*this._previousHandlers[t][2]/e.z.denominator]);return n}},getScaledNextHandlers:{value:function(e){var t,n=[];for(t=0;this._nextHandlers.length>t;t++)this._nextHandlers[t]&&(n[t]=[e.x.numerator*this._nextHandlers[t][0]/e.x.denominator,e.y.numerator*this._nextHandlers[t][1]/e.y.denominator,e.z.numerator*this._nextHandlers[t][2]/e.z.denominator]);return n}},directedPlaneBezierIntersection:{enumerable:!1,value:function(e,t,n,r,i,a,o,s){for(var l,u,c=this.reflectionMatrix(r[0],r[1],r[2]),h=this.reflectedY(i[0]-e,i[1]-t,i[2]-n,c),d=this.reflectedY(a[0]-e,a[1]-t,a[2]-n,c),p=this.reflectedY(o[0]-e,o[1]-t,o[2]-n,c),f=this.reflectedY(s[0]-e,s[1]-t,s[2]-n,c),m=3*(d-p)+f-h,v=3*(h+p)-6*d,g=3*(d-h),_=this.cubicRealRoots(m,v,g,h),b=0,y=0,w=[];_.length>y&&0>=_[y];)y++;for(;_.length>y&&1>_[y];)l=b,b=_[y],u=.5*(l+b),this.cubic(m,v,g,h,u)>=0&&w.push([l,b]),y++;return u=.5*(b+1),this.cubic(m,v,g,h,u)>=0&&w.push([b,1]),w}}})}});