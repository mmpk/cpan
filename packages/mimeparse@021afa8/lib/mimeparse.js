function parseRanges(e){for(var t=[],n=e.split(","),r=0;n.length>r;r++)t.push(exports.parseMediaRange(n[r]));return t}exports.parseMimeType=function(e){for(var t,n,r={},i=e.split(";"),a=0;i.length>a;a++){var o=i[a].split("=");2===o.length&&(r[o[0].trim()]=o[1].trim())}return t=i[0].replace(/^\s+/,"").replace(/\s+$/,""),"*"===t&&(t="*/*"),n=t.split("/"),[n[0],n[1],r]},exports.parseMediaRange=function(e){var t,n=exports.parseMimeType(e);return n[2].q?(t=parseFloat(n[2].q),isNaN(t)?n[2].q="1":(t>1||0>t)&&(n[2].q="1")):n[2].q="1",n},exports.fitnessAndQualityParsed=function(e,t){for(var n=-1,r=0,i=exports.parseMediaRange(e),a=i[0],o=i[1],s=i[2],l=0;t.length>l;l++){var c=t[l],u=c[0],h=c[1],p=c[2];if(!(u!==a&&"*"!==u&&"*"!==a||h!==o&&"*"!==h&&"*"!==o)){var d=0;for(var f in s)"q"!==f&&p[f]&&p[f]===s[f]&&(d+=1);var m=u===a?100:0;m+=h===o?10:0,m+=d,m>n&&(n=m,r=p.q)}}return[n,parseFloat(r)]},exports.qualityParsed=function(e,t){return exports.fitnessAndQualityParsed(e,t)[1]},exports.quality=function(e,t){return exports.qualityParsed(e,parseRanges(t))},exports.bestMatch=function(e,t){for(var n=parseRanges(t),r=[],i=0;e.length>i;i++)r.push([exports.fitnessAndQualityParsed(e[i],n),e[i]]);return r.sort(),r[r.length-1][0][1]?r[r.length-1][1]:""};