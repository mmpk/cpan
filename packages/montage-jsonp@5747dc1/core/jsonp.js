var Montage=require("montage/core/core").Montage,Params=require("query-params"),Url=require("url"),Uuid=require("montage/core/uuid"),Promise=require("montage/core/promise").Promise;exports.Jsonp=Montage.specialize({constructor:{value:function(){this.super()}}},{makeRequest:{value:function(e,t,n){var i,r=Promise.defer(),a=this,s=Url.parse(e),o=Params.decode(s.query||""),l=n?n+"ServiceCallback":"serviceCallback",c=l+Uuid.generate().replace(/-/g,"_"),u=document.createElement("script");return window[c]=function(e){document.head.removeChild(u),delete window[c],a._handleResponse(e,r)},o[t?t:"callback"]=c,i=s.protocol+"//"+s.host+s.pathname+"?"+Params.encode(o),u.src=i,document.head.appendChild(u),r.promise}},_handleResponse:{value:function(e,t){e?e.error?t.reject(Error(e.error)):t.resolve(e):t.reject(Error("Unknown API Error"))}}});