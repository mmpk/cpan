(function(){function e(e,t,n,i,r,a){t[e]&&(n.push(e),(t[e]===!0||1===t[e])&&i.push(r+e+"/"+a))}function t(e,t,n,i,r){var a=i+t+"/"+r;require._fileExists(e.toUrl(a))&&n.push(a)}function n(e,t,n){for(var i in t)i in r||i in e&&!n||(e[i]=t[i])}var i=/(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/,r={};define({version:"1.0.0",load:function(r,a,o,s){s=s||{};var l,c,u,h=i.exec(r),d=h[1],p=h[4],f=h[5],m=p.split("-"),g=[],v={},b="";if(h[5]?(d=h[1],l=d+f):(l=r,f=h[4],p=s.locale||(s.locale="undefined"==typeof navigator?"root":(navigator.language||navigator.userLanguage||"root").toLowerCase()),m=p.split("-")),s.isBuild){for(g.push(l),t(a,"root",g,d,f),c=0;u=m[c];c++)b+=(b?"-":"")+u,t(a,b,g,d,f);a(g,function(){o()})}else a([l],function(t){var i=[];for(e("root",t,i,g,d,f),c=0;u=m[c];c++)b+=(b?"-":"")+u,e(b,t,i,g,d,f);a(g,function(){var e,r;for(e=i.length-1;e>-1&&(u=i[e]);e--)r=t[u],(r===!0||1===r)&&(r=a(d+u+"/"+f)),n(v,r);o(v)})})}})})();