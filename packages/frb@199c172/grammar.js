module.exports=function(){function e(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}function t(e,t,n,i,r){function a(e,t){function n(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+t(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+t(e)}).replace(/[\u0180-\u0FFF]/g,function(e){return"\\u0"+t(e)}).replace(/[\u1080-\uFFFF]/g,function(e){return"\\u"+t(e)})}var i,r;switch(e.length){case 0:i="end of input";break;case 1:i=e[0];break;default:i=e.slice(0,-1).join(", ")+" or "+e[e.length-1]}return r=t?'"'+n(t)+'"':"end of input","Expected "+i+" but "+r+" found."}this.expected=e,this.found=t,this.offset=n,this.line=i,this.column=r,this.name="SyntaxError",this.message=a(e,t)}function n(e){function n(t){function n(t,n,i){var r,a;for(r=n;i>r;r++)a=e.charAt(r),"\n"===a?(t.seenCR||t.line++,t.column=1,t.seenCR=!1):"\r"===a||"\u2028"===a||"\u2029"===a?(t.line++,t.column=1,t.seenCR=!0):(t.column++,t.seenCR=!1)}return Yr!==t&&(Yr>t&&(Yr=0,Hr={line:1,column:1,seenCR:!1}),n(Hr,Yr,t),Yr=t),Hr}function i(e){Gr>Ur||(Ur>Gr&&(Gr=Ur,Kr=[]),Kr.push(e))}function r(e){var t=0;for(e.sort();e.length>t;)e[t-1]===e[t]?e.splice(t,1):t++}function a(){var e,t;return Xr++,e=l(),Xr--,null===e&&(t=null,0===Xr&&i(Q)),e}function s(){var t,n,r,s,o,l,c;if(t=Ur,n=a(),null!==n){for(r=[],s=Ur,44===e.charCodeAt(Ur)?(o=tt,Ur++):(o=null,0===Xr&&i(nt)),null!==o?(l=F(),null!==l?(c=a(),null!==c?(o=[o,l,c],s=o):(Ur=s,s=et)):(Ur=s,s=et)):(Ur=s,s=et);null!==s;)r.push(s),s=Ur,44===e.charCodeAt(Ur)?(o=tt,Ur++):(o=null,0===Xr&&i(nt)),null!==o?(l=F(),null!==l?(c=a(),null!==c?(o=[o,l,c],s=o):(Ur=s,s=et)):(Ur=s,s=et)):(Ur=s,s=et);null!==r?(s=F(),null!==s?(Vr=t,n=it(n,r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)}else Ur=t,t=et;return t}function o(){var t,n,r,a;return t=Ur,40===e.charCodeAt(Ur)?(n=rt,Ur++):(n=null,0===Xr&&i(at)),null!==n?(r=F(),null!==r?(41===e.charCodeAt(Ur)?(a=st,Ur++):(a=null,0===Xr&&i(ot)),null!==a?(Vr=t,n=lt(),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,40===e.charCodeAt(Ur)?(n=rt,Ur++):(n=null,0===Xr&&i(at)),null!==n?(r=s(),null!==r?(41===e.charCodeAt(Ur)?(a=st,Ur++):(a=null,0===Xr&&i(ot)),null!==a?(Vr=t,n=ct(r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)),t}function l(){var t,n,r,s,o,l,u,h,d,p,g;return t=Ur,n=c(),null!==n?(r=F(),null!==r?(s=Ur,63===e.charCodeAt(Ur)?(o=ht,Ur++):(o=null,0===Xr&&i(dt)),null!==o?(l=F(),null!==l?(u=a(),null!==u?(h=F(),null!==h?(58===e.charCodeAt(Ur)?(d=pt,Ur++):(d=null,0===Xr&&i(gt)),null!==d?(p=F(),null!==p?(g=a(),null!==g?(o=[o,l,u,h,d,p,g],s=o):(Ur=s,s=et)):(Ur=s,s=et)):(Ur=s,s=et)):(Ur=s,s=et)):(Ur=s,s=et)):(Ur=s,s=et)):(Ur=s,s=et),null===s&&(s=ut),null!==s?(Vr=t,n=mt(n,s),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),t}function c(){var t,n,r,a,s,o,l,c;if(t=Ur,n=u(),null!==n){for(r=[],a=Ur,s=F(),null!==s?(e.substr(Ur,2)===ft?(o=ft,Ur+=2):(o=null,0===Xr&&i(vt)),null!==o?(l=F(),null!==l?(c=u(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==a;)r.push(a),a=Ur,s=F(),null!==s?(e.substr(Ur,2)===ft?(o=ft,Ur+=2):(o=null,0===Xr&&i(vt)),null!==o?(l=F(),null!==l?(c=u(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==r?(Vr=t,n=yt(n,r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)}else Ur=t,t=et;return t}function u(){var t,n,r,a,s,o,l,c;if(t=Ur,n=h(),null!==n){for(r=[],a=Ur,s=F(),null!==s?(e.substr(Ur,2)===_t?(o=_t,Ur+=2):(o=null,0===Xr&&i(bt)),null!==o?(l=F(),null!==l?(c=h(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==a;)r.push(a),a=Ur,s=F(),null!==s?(e.substr(Ur,2)===_t?(o=_t,Ur+=2):(o=null,0===Xr&&i(bt)),null!==o?(l=F(),null!==l?(c=h(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==r?(Vr=t,n=yt(n,r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)}else Ur=t,t=et;return t}function h(){var t,n,r,a,s,o,l,c,u;return t=Ur,n=d(),null!==n?(r=Ur,a=F(),null!==a?(s=Ur,e.substr(Ur,3)===Lt?(o=Lt,Ur+=3):(o=null,0===Xr&&i(Ct)),null===o&&(e.substr(Ur,2)===wt?(o=wt,Ur+=2):(o=null,0===Xr&&i(Mt)),null===o&&(e.substr(Ur,2)===xt?(o=xt,Ur+=2):(o=null,0===Xr&&i(zt)),null===o&&(o=Ur,60===e.charCodeAt(Ur)?(l=St,Ur++):(l=null,0===Xr&&i(Et)),null!==l?(c=Ur,Xr++,45===e.charCodeAt(Ur)?(u=Pt,Ur++):(u=null,0===Xr&&i(Ot)),Xr--,null===u?c=ut:(Ur=c,c=et),null!==c?(l=[l,c],o=l):(Ur=o,o=et)):(Ur=o,o=et),null===o&&(62===e.charCodeAt(Ur)?(o=Tt,Ur++):(o=null,0===Xr&&i(Dt)),null===o&&(e.substr(Ur,2)===At?(o=At,Ur+=2):(o=null,0===Xr&&i(Bt)),null===o&&(e.substr(Ur,2)===kt?(o=kt,Ur+=2):(o=null,0===Xr&&i(jt)))))))),null!==o&&(o=e.substring(s,Ur)),s=o,null!==s?(o=F(),null!==o?(l=d(),null!==l?(a=[a,s,o,l],r=a):(Ur=r,r=et)):(Ur=r,r=et)):(Ur=r,r=et)):(Ur=r,r=et),null===r&&(r=ut),null!==r?(Vr=t,n=It(n,r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et),t}function d(){var t,n,r,a,s,o,l,c;if(t=Ur,n=p(),null!==n){for(r=[],a=Ur,s=F(),null!==s?(o=Ur,43===e.charCodeAt(Ur)?(l=Rt,Ur++):(l=null,0===Xr&&i(Nt)),null===l&&(45===e.charCodeAt(Ur)?(l=Pt,Ur++):(l=null,0===Xr&&i(Ot))),null!==l&&(l=e.substring(o,Ur)),o=l,null!==o?(l=F(),null!==l?(c=p(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==a;)r.push(a),a=Ur,s=F(),null!==s?(o=Ur,43===e.charCodeAt(Ur)?(l=Rt,Ur++):(l=null,0===Xr&&i(Nt)),null===l&&(45===e.charCodeAt(Ur)?(l=Pt,Ur++):(l=null,0===Xr&&i(Ot))),null!==l&&(l=e.substring(o,Ur)),o=l,null!==o?(l=F(),null!==l?(c=p(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==r?(Vr=t,n=yt(n,r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)}else Ur=t,t=et;return t}function p(){var t,n,r,a,s,o,l,c;if(t=Ur,n=g(),null!==n){for(r=[],a=Ur,s=F(),null!==s?(o=Ur,42===e.charCodeAt(Ur)?(l=Ft,Ur++):(l=null,0===Xr&&i(qt)),null===l&&(47===e.charCodeAt(Ur)?(l=Wt,Ur++):(l=null,0===Xr&&i(Ut)),null===l&&(37===e.charCodeAt(Ur)?(l=Vt,Ur++):(l=null,0===Xr&&i(Yt)),null===l&&(e.substr(Ur,3)===Ht?(l=Ht,Ur+=3):(l=null,0===Xr&&i(Gt))))),null!==l&&(l=e.substring(o,Ur)),o=l,null!==o?(l=F(),null!==l?(c=g(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==a;)r.push(a),a=Ur,s=F(),null!==s?(o=Ur,42===e.charCodeAt(Ur)?(l=Ft,Ur++):(l=null,0===Xr&&i(qt)),null===l&&(47===e.charCodeAt(Ur)?(l=Wt,Ur++):(l=null,0===Xr&&i(Ut)),null===l&&(37===e.charCodeAt(Ur)?(l=Vt,Ur++):(l=null,0===Xr&&i(Yt)),null===l&&(e.substr(Ur,3)===Ht?(l=Ht,Ur+=3):(l=null,0===Xr&&i(Gt))))),null!==l&&(l=e.substring(o,Ur)),o=l,null!==o?(l=F(),null!==l?(c=g(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==r?(Vr=t,n=yt(n,r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)}else Ur=t,t=et;return t}function g(){var t,n,r,a,s,o,l,c;if(t=Ur,n=m(),null!==n){for(r=[],a=Ur,s=F(),null!==s?(o=Ur,e.substr(Ur,2)===Kt?(l=Kt,Ur+=2):(l=null,0===Xr&&i(Xt)),null===l&&(e.substr(Ur,2)===Zt?(l=Zt,Ur+=2):(l=null,0===Xr&&i(Jt)),null===l&&(e.substr(Ur,2)===$t?(l=$t,Ur+=2):(l=null,0===Xr&&i(Qt)))),null!==l&&(l=e.substring(o,Ur)),o=l,null!==o?(l=F(),null!==l?(c=m(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==a;)r.push(a),a=Ur,s=F(),null!==s?(o=Ur,e.substr(Ur,2)===Kt?(l=Kt,Ur+=2):(l=null,0===Xr&&i(Xt)),null===l&&(e.substr(Ur,2)===Zt?(l=Zt,Ur+=2):(l=null,0===Xr&&i(Jt)),null===l&&(e.substr(Ur,2)===$t?(l=$t,Ur+=2):(l=null,0===Xr&&i(Qt)))),null!==l&&(l=e.substring(o,Ur)),o=l,null!==o?(l=F(),null!==l?(c=m(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==r?(Vr=t,n=yt(n,r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)}else Ur=t,t=et;return t}function m(){var t,n,r,a,s,o,l,c;if(t=Ur,n=f(),null!==n){for(r=[],a=Ur,s=F(),null!==s?(e.substr(Ur,2)===en?(o=en,Ur+=2):(o=null,0===Xr&&i(tn)),null!==o?(l=F(),null!==l?(c=f(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==a;)r.push(a),a=Ur,s=F(),null!==s?(e.substr(Ur,2)===en?(o=en,Ur+=2):(o=null,0===Xr&&i(tn)),null!==o?(l=F(),null!==l?(c=f(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==r?(Vr=t,n=yt(n,r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)}else Ur=t,t=et;return t}function f(){var t,n,r;return t=Ur,n=Ur,33===e.charCodeAt(Ur)?(r=nn,Ur++):(r=null,0===Xr&&i(rn)),null===r&&(43===e.charCodeAt(Ur)?(r=Rt,Ur++):(r=null,0===Xr&&i(Nt)),null===r&&(45===e.charCodeAt(Ur)?(r=Pt,Ur++):(r=null,0===Xr&&i(Ot)))),null!==r&&(r=e.substring(n,Ur)),n=r,null!==n?(r=f(),null!==r?(Vr=t,n=an(n,r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=v()),t}function v(){var e,t,n,i;if(e=Ur,t=b(),null!==t){for(n=[],i=y();null!==i;)n.push(i),i=y();null!==n?(Vr=e,t=sn(t,n),null===t?(Ur=e,e=t):e=t):(Ur=e,e=et)}else Ur=e,e=et;return e}function y(){var t,n,r,s;return t=Ur,46===e.charCodeAt(Ur)?(n=on,Ur++):(n=null,0===Xr&&i(ln)),null!==n?(r=_(),null!==r?(Vr=t,n=cn(r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,91===e.charCodeAt(Ur)?(n=un,Ur++):(n=null,0===Xr&&i(hn)),null!==n?(r=a(),null!==r?(93===e.charCodeAt(Ur)?(s=dn,Ur++):(s=null,0===Xr&&i(pn)),null!==s?(Vr=t,n=gn(r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)),t}function _(){var t,n,r,s,l,c,u;return t=Ur,n=Ur,r=L(),null!==r&&(r=e.substring(n,Ur)),n=r,null!==n?(123===e.charCodeAt(Ur)?(r=mn,Ur++):(r=null,0===Xr&&i(fn)),null!==r?(s=F(),null!==s?(l=a(),null!==l?(c=F(),null!==c?(125===e.charCodeAt(Ur)?(u=vn,Ur++):(u=null,0===Xr&&i(yn)),null!==u?(Vr=t,n=_n(n,l),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,n=Ur,r=L(),null!==r&&(r=e.substring(n,Ur)),n=r,null!==n?(r=o(),null!==r?(Vr=t,n=bn(n,r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,n=j(),null!==n&&(Vr=t,n=Ln(n)),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,n=Ur,r=L(),null!==r&&(r=e.substring(n,Ur)),n=r,null!==n&&(Vr=t,n=Cn(n)),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,n=S(),null!==n&&(Vr=t,n=wn(n)),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,n=E(),null!==n&&(Vr=t,n=wn(n)),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,40===e.charCodeAt(Ur)?(n=rt,Ur++):(n=null,0===Xr&&i(at)),null!==n?(r=a(),null!==r?(41===e.charCodeAt(Ur)?(s=st,Ur++):(s=null,0===Xr&&i(ot)),null!==s?(Vr=t,n=wn(r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et))))))),t}function b(){var t,n,r,s;return t=S(),null===t&&(t=E(),null===t&&(t=C(),null===t&&(t=T(),null===t&&(t=Ur,e.substr(Ur,4)===Mn?(n=Mn,Ur+=4):(n=null,0===Xr&&i(xn)),null!==n&&(Vr=t,n=zn()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,e.substr(Ur,4)===Sn?(n=Sn,Ur+=4):(n=null,0===Xr&&i(En)),null!==n&&(Vr=t,n=Pn()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,e.substr(Ur,5)===On?(n=On,Ur+=5):(n=null,0===Xr&&i(Tn)),null!==n&&(Vr=t,n=Dn()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,e.substr(Ur,4)===An?(n=An,Ur+=4):(n=null,0===Xr&&i(Bn)),null!==n&&(Vr=t,n=kn()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,64===e.charCodeAt(Ur)?(n=jn,Ur++):(n=null,0===Xr&&i(In)),null!==n?(r=Ur,s=H(),null!==s&&(s=e.substring(r,Ur)),r=s,null!==r?(Vr=t,n=Rn(r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,36===e.charCodeAt(Ur)?(n=Nn,Ur++):(n=null,0===Xr&&i(Fn)),null!==n?(r=Ur,s=L(),null!==s&&(s=e.substring(r,Ur)),r=s,null!==r?(Vr=t,n=qn(r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,36===e.charCodeAt(Ur)?(n=Nn,Ur++):(n=null,0===Xr&&i(Fn)),null!==n&&(Vr=t,n=Wn()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,35===e.charCodeAt(Ur)?(n=Un,Ur++):(n=null,0===Xr&&i(Vn)),null!==n?(r=Ur,s=L(),null!==s&&(s=e.substring(r,Ur)),r=s,null!==r?(Vr=t,n=Yn(r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,38===e.charCodeAt(Ur)?(n=Hn,Ur++):(n=null,0===Xr&&i(Gn)),null!==n?(r=Ur,s=L(),null!==s&&(s=e.substring(r,Ur)),r=s,null!==r?(s=o(),null!==s?(Vr=t,n=Kn(r,s),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,94===e.charCodeAt(Ur)?(n=Xn,Ur++):(n=null,0===Xr&&i(Zn)),null!==n?(r=b(),null!==r?(Vr=t,n=Jn(r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,40===e.charCodeAt(Ur)?(n=rt,Ur++):(n=null,0===Xr&&i(at)),null!==n?(r=a(),null!==r?(41===e.charCodeAt(Ur)?(s=st,Ur++):(s=null,0===Xr&&i(ot)),null!==s?(Vr=t,n=$n(r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,n=_(),null!==n&&(Vr=t,n=Qn(n)),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,n=[],null!==n&&(Vr=t,n=ei()),null===n?(Ur=t,t=n):t=n)))))))))))))))),t}function L(){var t,n;if(Xr++,t=[],ni.test(e.charAt(Ur))?(n=e.charAt(Ur),Ur++):(n=null,0===Xr&&i(ii)),null!==n)for(;null!==n;)t.push(n),ni.test(e.charAt(Ur))?(n=e.charAt(Ur),Ur++):(n=null,0===Xr&&i(ii));else t=et;return Xr--,null===t&&(n=null,0===Xr&&i(ti)),t}function C(){var t,n,r,a;if(Xr++,t=Ur,39===e.charCodeAt(Ur)?(n=ai,Ur++):(n=null,0===Xr&&i(si)),null!==n){for(r=[],a=w();null!==a;)r.push(a),a=w();null!==r?(39===e.charCodeAt(Ur)?(a=ai,Ur++):(a=null,0===Xr&&i(si)),null!==a?(Vr=t,n=oi(r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)}else Ur=t,t=et;if(null===t)if(t=Ur,34===e.charCodeAt(Ur)?(n=li,Ur++):(n=null,0===Xr&&i(ci)),null!==n){for(r=[],a=M();null!==a;)r.push(a),a=M();null!==r?(34===e.charCodeAt(Ur)?(a=li,Ur++):(a=null,0===Xr&&i(ci)),null!==a?(Vr=t,n=oi(r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)}else Ur=t,t=et;return Xr--,null===t&&(n=null,0===Xr&&i(ri)),t}function w(){var t,n;return ui.test(e.charAt(Ur))?(t=e.charAt(Ur),Ur++):(t=null,0===Xr&&i(hi)),null===t&&(t=Ur,e.substr(Ur,2)===di?(n=di,Ur+=2):(n=null,0===Xr&&i(pi)),null!==n&&(Vr=t,n=gi()),null===n?(Ur=t,t=n):t=n,null===t&&(t=x())),t}function M(){var t,n;return mi.test(e.charAt(Ur))?(t=e.charAt(Ur),Ur++):(t=null,0===Xr&&i(fi)),null===t&&(t=Ur,e.substr(Ur,2)===vi?(n=vi,Ur+=2):(n=null,0===Xr&&i(yi)),null!==n&&(Vr=t,n=_i()),null===n?(Ur=t,t=n):t=n,null===t&&(t=x())),t}function x(){var t,n,r,a,s,o,l,c;return t=Ur,e.substr(Ur,2)===bi?(n=bi,Ur+=2):(n=null,0===Xr&&i(Li)),null!==n&&(Vr=t,n=Ci()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,e.substr(Ur,2)===wi?(n=wi,Ur+=2):(n=null,0===Xr&&i(Mi)),null!==n&&(Vr=t,n=xi()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,e.substr(Ur,2)===zi?(n=zi,Ur+=2):(n=null,0===Xr&&i(Si)),null!==n&&(Vr=t,n=Ei()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,e.substr(Ur,2)===Pi?(n=Pi,Ur+=2):(n=null,0===Xr&&i(Oi)),null!==n&&(Vr=t,n=Ti()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,e.substr(Ur,2)===Di?(n=Di,Ur+=2):(n=null,0===Xr&&i(Ai)),null!==n&&(Vr=t,n=Bi()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,e.substr(Ur,2)===ki?(n=ki,Ur+=2):(n=null,0===Xr&&i(ji)),null!==n&&(Vr=t,n=Ii()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,e.substr(Ur,2)===Ri?(n=Ri,Ur+=2):(n=null,0===Xr&&i(Ni)),null!==n&&(Vr=t,n=Fi()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,e.substr(Ur,2)===qi?(n=qi,Ur+=2):(n=null,0===Xr&&i(Wi)),null!==n&&(Vr=t,n=Ui()),null===n?(Ur=t,t=n):t=n,null===t&&(t=Ur,e.substr(Ur,2)===Vi?(n=Vi,Ur+=2):(n=null,0===Xr&&i(Yi)),null!==n?(r=Ur,a=Ur,s=z(),null!==s?(o=z(),null!==o?(l=z(),null!==l?(c=z(),null!==c?(s=[s,o,l,c],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et),null!==a&&(a=e.substring(r,Ur)),r=a,null!==r?(Vr=t,n=Hi(r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et))))))))),t}function z(){var t;return Gi.test(e.charAt(Ur))?(t=e.charAt(Ur),Ur++):(t=null,0===Xr&&i(Ki)),t}function S(){var t,n,r,a,o,l;return t=Ur,91===e.charCodeAt(Ur)?(n=un,Ur++):(n=null,0===Xr&&i(hn)),null!==n?(r=F(),null!==r?(93===e.charCodeAt(Ur)?(a=dn,Ur++):(a=null,0===Xr&&i(pn)),null!==a?(Vr=t,n=Xi(),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,91===e.charCodeAt(Ur)?(n=un,Ur++):(n=null,0===Xr&&i(hn)),null!==n?(r=F(),null!==r?(a=s(),null!==a?(o=F(),null!==o?(93===e.charCodeAt(Ur)?(l=dn,Ur++):(l=null,0===Xr&&i(pn)),null!==l?(Vr=t,n=Zi(a),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)),t}function E(){var t,n,r,a,s,o;return t=Ur,123===e.charCodeAt(Ur)?(n=mn,Ur++):(n=null,0===Xr&&i(fn)),null!==n?(r=F(),null!==r?(125===e.charCodeAt(Ur)?(a=vn,Ur++):(a=null,0===Xr&&i(yn)),null!==a?(s=F(),null!==s?(Vr=t,n=Ji(),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,123===e.charCodeAt(Ur)?(n=mn,Ur++):(n=null,0===Xr&&i(fn)),null!==n?(r=F(),null!==r?(a=P(),null!==a?(125===e.charCodeAt(Ur)?(s=vn,Ur++):(s=null,0===Xr&&i(yn)),null!==s?(o=F(),null!==o?(Vr=t,n=$i(a),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)),t}function P(){var t,n,r,a,s,o,l;if(t=Ur,n=O(),null!==n){for(r=[],a=Ur,44===e.charCodeAt(Ur)?(s=tt,Ur++):(s=null,0===Xr&&i(nt)),null!==s?(o=F(),null!==o?(l=O(),null!==l?(s=[s,o,l],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==a;)r.push(a),a=Ur,44===e.charCodeAt(Ur)?(s=tt,Ur++):(s=null,0===Xr&&i(nt)),null!==s?(o=F(),null!==o?(l=O(),null!==l?(s=[s,o,l],a=s):(Ur=a,a=et)):(Ur=a,a=et)):(Ur=a,a=et);null!==r?(Vr=t,n=Qi(n,r),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)}else Ur=t,t=et;return t}function O(){var t,n,r,s,o;return t=Ur,n=Ur,r=L(),null!==r&&(r=e.substring(n,Ur)),n=r,null!==n?(58===e.charCodeAt(Ur)?(r=pt,Ur++):(r=null,0===Xr&&i(gt)),null!==r?(s=F(),null!==s?(o=a(),null!==o?(Vr=t,n=er(n,o),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),t}function T(){var t,n,r;return Xr++,t=Ur,n=Ur,r=D(),null!==r&&(r=e.substring(n,Ur)),n=r,null!==n&&(Vr=t,n=nr(n)),null===n?(Ur=t,t=n):t=n,Xr--,null===t&&(n=null,0===Xr&&i(tr)),t}function D(){var e,t,n,i;return e=Ur,t=A(),null!==t?(n=B(),null!==n?(i=k(),null!==i?(t=[t,n,i],e=t):(Ur=e,e=et)):(Ur=e,e=et)):(Ur=e,e=et),null===e&&(e=Ur,t=A(),null!==t?(n=B(),null!==n?(t=[t,n],e=t):(Ur=e,e=et)):(Ur=e,e=et),null===e&&(e=Ur,t=A(),null!==t?(n=k(),null!==n?(t=[t,n],e=t):(Ur=e,e=et)):(Ur=e,e=et),null===e&&(e=A()))),e}function A(){var t,n,r,a;return t=Ur,n=N(),null!==n?(r=j(),null!==r?(n=[n,r],t=n):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=R(),null===t&&(t=Ur,45===e.charCodeAt(Ur)?(n=Pt,Ur++):(n=null,0===Xr&&i(Ot)),null!==n?(r=N(),null!==r?(a=j(),null!==a?(n=[n,r,a],t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,45===e.charCodeAt(Ur)?(n=Pt,Ur++):(n=null,0===Xr&&i(Ot)),null!==n?(r=R(),null!==r?(n=[n,r],t=n):(Ur=t,t=et)):(Ur=t,t=et)))),t}function B(){var t,n,r;return t=Ur,46===e.charCodeAt(Ur)?(n=on,Ur++):(n=null,0===Xr&&i(ln)),null!==n?(r=j(),null!==r?(n=[n,r],t=n):(Ur=t,t=et)):(Ur=t,t=et),t}function k(){var e,t,n;return e=Ur,t=I(),null!==t?(n=j(),null!==n?(t=[t,n],e=t):(Ur=e,e=et)):(Ur=e,e=et),e}function j(){var e,t;if(e=[],t=R(),null!==t)for(;null!==t;)e.push(t),t=R();else e=et;return e}function I(){var t,n,r;return t=Ur,ir.test(e.charAt(Ur))?(n=e.charAt(Ur),Ur++):(n=null,0===Xr&&i(rr)),null!==n?(ar.test(e.charAt(Ur))?(r=e.charAt(Ur),Ur++):(r=null,0===Xr&&i(sr)),null===r&&(r=ut),null!==r?(n=[n,r],t=n):(Ur=t,t=et)):(Ur=t,t=et),t}function R(){var t;return or.test(e.charAt(Ur))?(t=e.charAt(Ur),Ur++):(t=null,0===Xr&&i(lr)),t}function N(){var t;return cr.test(e.charAt(Ur))?(t=e.charAt(Ur),Ur++):(t=null,0===Xr&&i(ur)),t}function F(){var e,t;for(e=[],t=q(),null===t&&(t=W());null!==t;)e.push(t),t=q(),null===t&&(t=W());return e}function q(){var t,n;return Xr++,dr.test(e.charAt(Ur))?(t=e.charAt(Ur),Ur++):(t=null,0===Xr&&i(pr)),null===t&&(gr.test(e.charAt(Ur))?(t=e.charAt(Ur),Ur++):(t=null,0===Xr&&i(mr))),Xr--,null===t&&(n=null,0===Xr&&i(hr)),t}function W(){var t,n;return Xr++,vr.test(e.charAt(Ur))?(t=e.charAt(Ur),Ur++):(t=null,0===Xr&&i(yr)),Xr--,null===t&&(n=null,0===Xr&&i(fr)),t}function U(){var e,t,n,i;if(e=Ur,t=F(),null!==t){for(n=[],i=V();null!==i;)n.push(i),i=V();null!==n?(i=F(),null!==i?(Vr=e,t=_r(n),null===t?(Ur=e,e=t):e=t):(Ur=e,e=et)):(Ur=e,e=et)}else Ur=e,e=et;return e}function V(){var t,n,r,a,s,o,l,c,u,h;return t=Ur,64===e.charCodeAt(Ur)?(n=jn,Ur++):(n=null,0===Xr&&i(In)),null!==n?(r=Ur,a=H(),null!==a&&(a=e.substring(r,Ur)),r=a,null!==r?(a=F(),null!==a?(s=Y(),null===s&&(s=ut),null!==s?(123===e.charCodeAt(Ur)?(o=mn,Ur++):(o=null,0===Xr&&i(fn)),null!==o?(l=F(),null!==l?(c=G(),null!==c?(125===e.charCodeAt(Ur)?(u=vn,Ur++):(u=null,0===Xr&&i(yn)),null!==u?(h=F(),null!==h?(Vr=t,n=br(r,s,c),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),t}function Y(){var t,n,r,s,o,l,c,u;return t=Ur,60===e.charCodeAt(Ur)?(n=St,Ur++):(n=null,0===Xr&&i(Et)),null===n&&(58===e.charCodeAt(Ur)?(n=pt,Ur++):(n=null,0===Xr&&i(gt))),null!==n?(r=F(),null!==r?(s=C(),null===s&&(s=ut),null!==s?(o=F(),null!==o?(l=Ur,c=Ur,Xr++,123===e.charCodeAt(Ur)?(u=mn,Ur++):(u=null,0===Xr&&i(fn)),Xr--,null===u?c=ut:(Ur=c,c=et),null!==c?(u=a(),null!==u?(c=[c,u],l=c):(Ur=l,l=et)):(Ur=l,l=et),null===l&&(l=ut),null!==l?(c=F(),null!==c?(Vr=t,n=Lr(n,s,l),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,n=F(),null!==n&&(Vr=t,n=Cr()),null===n?(Ur=t,t=n):t=n),t}function H(){var t,n,r,a,s,o,l;if(t=Ur,n=[],wr.test(e.charAt(Ur))?(r=e.charAt(Ur),Ur++):(r=null,0===Xr&&i(Mr)),null!==r)for(;null!==r;)n.push(r),wr.test(e.charAt(Ur))?(r=e.charAt(Ur),Ur++):(r=null,0===Xr&&i(Mr));else n=et;if(null!==n){if(r=[],a=Ur,58===e.charCodeAt(Ur)?(s=pt,Ur++):(s=null,0===Xr&&i(gt)),null!==s){if(o=[],wr.test(e.charAt(Ur))?(l=e.charAt(Ur),Ur++):(l=null,0===Xr&&i(Mr)),null!==l)for(;null!==l;)o.push(l),wr.test(e.charAt(Ur))?(l=e.charAt(Ur),Ur++):(l=null,0===Xr&&i(Mr));else o=et;null!==o?(s=[s,o],a=s):(Ur=a,a=et)}else Ur=a,a=et;for(;null!==a;)if(r.push(a),a=Ur,58===e.charCodeAt(Ur)?(s=pt,Ur++):(s=null,0===Xr&&i(gt)),null!==s){if(o=[],wr.test(e.charAt(Ur))?(l=e.charAt(Ur),Ur++):(l=null,0===Xr&&i(Mr)),null!==l)for(;null!==l;)o.push(l),wr.test(e.charAt(Ur))?(l=e.charAt(Ur),Ur++):(l=null,0===Xr&&i(Mr));else o=et;null!==o?(s=[s,o],a=s):(Ur=a,a=et)}else Ur=a,a=et;null!==r?(n=[n,r],t=n):(Ur=t,t=et)}else Ur=t,t=et;return t}function G(){var t,n,r,a,s,o,l,c,u;if(t=Ur,n=K(),null!==n)if(r=F(),null!==r){for(a=[],s=Ur,59===e.charCodeAt(Ur)?(o=xr,Ur++):(o=null,0===Xr&&i(zr)),null!==o?(l=F(),null!==l?(c=K(),null!==c?(u=F(),null!==u?(o=[o,l,c,u],s=o):(Ur=s,s=et)):(Ur=s,s=et)):(Ur=s,s=et)):(Ur=s,s=et);null!==s;)a.push(s),s=Ur,59===e.charCodeAt(Ur)?(o=xr,Ur++):(o=null,0===Xr&&i(zr)),null!==o?(l=F(),null!==l?(c=K(),null!==c?(u=F(),null!==u?(o=[o,l,c,u],s=o):(Ur=s,s=et)):(Ur=s,s=et)):(Ur=s,s=et)):(Ur=s,s=et);null!==a?(59===e.charCodeAt(Ur)?(s=xr,Ur++):(s=null,0===Xr&&i(zr)),null===s&&(s=ut),null!==s?(o=F(),null!==o?(Vr=t,n=it(n,a),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)}else Ur=t,t=et;else Ur=t,t=et;return null===t&&(t=Ur,n=K(),null!==n?(r=F(),null!==r?(59===e.charCodeAt(Ur)?(a=xr,Ur++):(a=null,0===Xr&&i(zr)),null===a&&(a=ut),null!==a?(s=F(),null!==s?(Vr=t,n=Sr(n),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),null===t&&(t=Ur,n=F(),null!==n&&(Vr=t,n=lt()),null===n?(Ur=t,t=n):t=n)),t}function K(){var t,n,r,s,o,l,c,u,h,d,p,g,m,f,v,y,_;if(t=Ur,e.substr(Ur,2)===Er?(n=Er,Ur+=2):(n=null,0===Xr&&i(Pr)),null===n&&(e.substr(Ur,6)===Or?(n=Or,Ur+=6):(n=null,0===Xr&&i(Tr))),null!==n?(32===e.charCodeAt(Ur)?(r=Dr,Ur++):(r=null,0===Xr&&i(Ar)),null!==r?(s=F(),null!==s?(o=Ur,l=L(),null!==l&&(l=e.substring(o,Ur)),o=l,null!==o?(l=F(),null!==l?(e.substr(Ur,2)===Br?(c=Br,Ur+=2):(c=null,0===Xr&&i(kr)),null!==c?(u=F(),null!==u?(h=a(),null!==h?(d=F(),null!==d?(Vr=t,n=jr(n,o,h),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et),null===t){if(t=Ur,n=a(),null!==n)if(r=F(),null!==r)if(58===e.charCodeAt(Ur)?(s=pt,Ur++):(s=null,0===Xr&&i(gt)),null===s&&(e.substr(Ur,3)===Ir?(s=Ir,Ur+=3):(s=null,0===Xr&&i(Rr)),null===s&&(e.substr(Ur,2)===Nr?(s=Nr,Ur+=2):(s=null,0===Xr&&i(Fr)))),null!==s)if(o=F(),null!==o)if(l=a(),null!==l)if(c=F(),null!==c){for(u=[],h=Ur,44===e.charCodeAt(Ur)?(d=tt,Ur++):(d=null,0===Xr&&i(nt)),null!==d?(p=F(),null!==p?(g=Ur,m=L(),null!==m&&(m=e.substring(g,Ur)),g=m,null!==g?(m=F(),null!==m?(58===e.charCodeAt(Ur)?(f=pt,Ur++):(f=null,0===Xr&&i(gt)),null!==f?(v=F(),null!==v?(y=a(),null!==y?(_=F(),null!==_?(d=[d,p,g,m,f,v,y,_],h=d):(Ur=h,h=et)):(Ur=h,h=et)):(Ur=h,h=et)):(Ur=h,h=et)):(Ur=h,h=et)):(Ur=h,h=et)):(Ur=h,h=et)):(Ur=h,h=et);null!==h;)u.push(h),h=Ur,44===e.charCodeAt(Ur)?(d=tt,Ur++):(d=null,0===Xr&&i(nt)),null!==d?(p=F(),null!==p?(g=Ur,m=L(),null!==m&&(m=e.substring(g,Ur)),g=m,null!==g?(m=F(),null!==m?(58===e.charCodeAt(Ur)?(f=pt,Ur++):(f=null,0===Xr&&i(gt)),null!==f?(v=F(),null!==v?(y=a(),null!==y?(_=F(),null!==_?(d=[d,p,g,m,f,v,y,_],h=d):(Ur=h,h=et)):(Ur=h,h=et)):(Ur=h,h=et)):(Ur=h,h=et)):(Ur=h,h=et)):(Ur=h,h=et)):(Ur=h,h=et)):(Ur=h,h=et);null!==u?(Vr=t,n=qr(n,s,l,u),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)}else Ur=t,t=et;else Ur=t,t=et;else Ur=t,t=et;else Ur=t,t=et;else Ur=t,t=et;else Ur=t,t=et;null===t&&(t=Ur,n=Ur,r=L(),null!==r&&(r=e.substring(n,Ur)),n=r,null!==n?(r=F(),null!==r?(s=a(),null!==s?(o=F(),null!==o?(Vr=t,n=Wr(n,s),null===n?(Ur=t,t=n):t=n):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et)):(Ur=t,t=et))}return t}var X,Z=arguments.length>1?arguments[1]:{},J={expression:a,sheet:U},$=a,Q="expression",et=null,tt=",",nt='","',it=function(e,t){for(var n=[e],i=0;t.length>i;i++)n.push(t[i][2]);return n},rt="(",at='"("',st=")",ot='")"',lt=function(){return[]},ct=function(e){return e},ut="",ht="?",dt='"?"',pt=":",gt='":"',mt=function(e,t){if(t){var n=t[2],i=t[6];return{type:"if",args:[e,n,i]}}return e},ft="||",vt='"||"',yt=function(e,t){for(var n=0;t.length>n;n++)e={type:Zr[t[n][1]],args:[e,t[n][3]]};return e},_t="&&",bt='"&&"',Lt="<=>",Ct='"<=>"',wt="<=",Mt='"<="',xt=">=",zt='">="',St="<",Et='"<"',Pt="-",Ot='"-"',Tt=">",Dt='">"',At="==",Bt='"=="',kt="!=",jt='"!="',It=function(e,t){if(t){var n=t[1],i=t[3];return"!="===n?{type:"not",args:[{type:"equals",args:[e,i]}]}:{type:Zr[n],args:[e,i]}}return e},Rt="+",Nt='"+"',Ft="*",qt='"*"',Wt="/",Ut='"/"',Vt="%",Yt='"%"',Ht="rem",Gt='"rem"',Kt="**",Xt='"**"',Zt="//",Jt='"//"',$t="%%",Qt='"%%"',en="??",tn='"??"',nn="!",rn='"!"',an=function(e,t){return{type:Jr[e],args:[t]}},sn=function(e,t){for(var n=0;t.length>n;n++)e=t[n](e);return e},on=".",ln='"."',cn=function(e){return e},un="[",hn='"["',dn="]",pn='"]"',gn=function(e){return function(t){return{type:"property",args:[t,e]}}},mn="{",fn='"{"',vn="}",yn='"}"',_n=function(e,t){return $r[e]?function(n){return{type:$r[e],args:[n,t]}}:"value"===t.type?function(t){return{type:e,args:[t]}}:function(n){return{type:e,args:[{type:"mapBlock",args:[n,t]}]}}},bn=function(e,t){return function(n){return{type:e,args:[n].concat(t)}}},Ln=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:+e.join("")}]}}},Cn=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:e}]}}},wn=function(e){return function(t){return{type:"with",args:[t,e]}}},Mn="this",xn='"this"',zn=function(){return{type:"value"}},Sn="true",En='"true"',Pn=function(){return{type:"literal",value:!0}},On="false",Tn='"false"',Dn=function(){return{type:"literal",value:!1}},An="null",Bn='"null"',kn=function(){return{type:"literal",value:null}},jn="@",In='"@"',Rn=function(e){return{type:"component",label:e}},Nn="$",Fn='"$"',qn=function(e){return{type:"property",args:[{type:"parameters"},{type:"literal",value:e}]}},Wn=function(){return{type:"parameters"}},Un="#",Vn='"#"',Yn=function(e){return{type:"element",id:e}},Hn="&",Gn='"&"',Kn=function(e,t){return{type:e,args:t,inline:!0}},Xn="^",Zn='"^"',Jn=function(e){return{type:"parent",args:[e]}},$n=function(e){return e},Qn=function(e){return e({type:"value"})},ei=function(){return{type:"value"}},ti="word",ni=/^[a-zA-Z_0-9\-]/,ii="[a-zA-Z_0-9\\-]",ri="string",ai="'",si='"\'"',oi=function(e){return{type:"literal",value:e.join("")}},li='"',ci='"\\""',ui=/^[^'\\\0-\x1F]/,hi="[^'\\\\\\0-\\x1F]",di="\\'",pi='"\\\\\'"',gi=function(){return"'"},mi=/^[^"\\\0-\x1F]/,fi='[^"\\\\\\0-\\x1F]',vi='\\"',yi='"\\\\\\""',_i=function(){return'"'},bi="\\\\",Li='"\\\\\\\\"',Ci=function(){return"\\"},wi="\\/",Mi='"\\\\/"',xi=function(){return"/"},zi="\\b",Si='"\\\\b"',Ei=function(){return"\b"},Pi="\\f",Oi='"\\\\f"',Ti=function(){return"\f"},Di="\\n",Ai='"\\\\n"',Bi=function(){return"\n"},ki="\\r",ji='"\\\\r"',Ii=function(){return"\r"},Ri="\\t",Ni='"\\\\t"',Fi=function(){return"	"},qi="\\0",Wi='"\\\\0"',Ui=function(){return"\0"},Vi="\\u",Yi='"\\\\u"',Hi=function(e){return String.fromCharCode(parseInt(e,16))},Gi=/^[0-9a-fA-F]/,Ki="[0-9a-fA-F]",Xi=function(){return{type:"tuple",args:[]}},Zi=function(e){return{type:"tuple",args:e}},Ji=function(){return{type:"record",args:[]}},$i=function(e){return{type:"record",args:e}},Qi=function(e,t){var n={};n[e[0]]=e[1];for(var i=0;t.length>i;i++)n[t[i][2][0]]=t[i][2][1];return n},er=function(e,t){return[e,t]},tr="number",nr=function(e){return{type:"literal",value:+e}},ir=/^[eE]/,rr="[eE]",ar=/^[+\-]/,sr="[+\\-]",or=/^[0-9]/,lr="[0-9]",cr=/^[1-9]/,ur="[1-9]",hr="whitespace",dr=/^[\t\x0B\f \xA0\uFEFF]/,pr="[\\t\\x0B\\f \\xA0\\uFEFF]",gr=/^[ \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000]/,mr="[ \\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000]",fr="line terminator",vr=/^[\n\r\u2028\u2029]/,yr="[\\n\\r\\u2028\\u2029]",_r=function(e){return{type:"sheet",blocks:e}},br=function(e,t,n){return{type:"block",connection:t.connection,module:t.module,exports:t.exports,label:e,statements:n}},Lr=function(e,t,n){return{connection:{"<":"prototype",":":"object"}[e],module:t&&t.value,exports:""!==n?n[1]:void 0}},Cr=function(){return{}},wr=/^[a-zA-Z_0-9]/,Mr="[a-zA-Z_0-9]",xr=";",zr='";"',Sr=function(e){return[e]},Er="on",Pr='"on"',Or="before",Tr='"before"',Dr=" ",Ar='" "',Br="->",kr='"->"',jr=function(e,t,n){return{type:"event",when:e,event:t,listener:n}},Ir="<->",Rr='"<->"',Nr="<-",Fr='"<-"',qr=function(e,t,n,i){var r={type:Qr[t],args:[e,n]};if(i.length){for(var a={},s=0;i.length>s;s++)a[i[s][2]]=i[s][6];r.descriptor=a}return r},Wr=function(e,t){return{type:"unit",name:e,value:t}},Ur=0,Vr=0,Yr=0,Hr={line:1,column:1,seenCR:!1},Gr=0,Kr=[],Xr=0;if("startRule"in Z){if(!(Z.startRule in J))throw Error("Can't start parsing from rule \""+Z.startRule+'".');$=J[Z.startRule]}var Zr={"**":"pow","//":"root","%%":"log","*":"mul","/":"div","%":"mod",rem:"rem","+":"add","-":"sub","<":"lt",">":"gt","<=":"le",">=":"ge","==":"equals","<=>":"compare","??":"default","&&":"and","||":"or","<-":"bind","<->":"bind2",":":"assign"},Jr={"+":"toNumber","-":"neg","!":"not","^":"parent"},$r={map:"mapBlock",filter:"filterBlock",some:"someBlock",every:"everyBlock",sorted:"sortedBlock",sortedSet:"sortedSetBlock",group:"groupBlock",groupMap:"groupMapBlock",min:"minBlock",max:"maxBlock"},Qr={":":"assign","<-":"bind","<->":"bind2"};if(X=$(),null!==X&&Ur===e.length)return X;throw r(Kr),Vr=Math.max(Ur,Gr),new t(Kr,e.length>Vr?e.charAt(Vr):null,Vr,n(Vr).line,n(Vr).column)}return e(t,Error),{SyntaxError:t,parse:n}}();