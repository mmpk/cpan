montageDefine("2f47fab","index",{dependencies:["buffer"],factory:function(e,i){function t(e){if(e&&!l(e))throw Error("Unknown encoding: "+e)}function s(e){return e.toString(this.encoding)}function a(e){this.charReceived=e.length%2,this.charLength=this.charReceived?2:0}function u(e){this.charReceived=e.length%3,this.charLength=this.charReceived?3:0}var n=e("buffer").Buffer,l=n.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},r=i.StringDecoder=function(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),t(e),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=a;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=u;break;default:return this.write=s,void 0}this.charBuffer=new n(6),this.charReceived=0,this.charLength=0};r.prototype.write=function(e){for(var i="";this.charLength;){var t=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length;if(e.copy(this.charBuffer,this.charReceived,0,t),this.charReceived+=t,this.charReceived<this.charLength)return"";e=e.slice(t,e.length),i=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var s=i.charCodeAt(i.length-1);if(!(s>=55296&&56319>=s)){if(this.charReceived=this.charLength=0,0===e.length)return i;break}this.charLength+=this.surrogateSize,i=""}this.detectIncompleteChar(e);var a=e.length;this.charLength&&(e.copy(this.charBuffer,0,e.length-this.charReceived,a),a-=this.charReceived),i+=e.toString(this.encoding,0,a);var a=i.length-1,s=i.charCodeAt(a);if(s>=55296&&56319>=s){var u=this.surrogateSize;return this.charLength+=u,this.charReceived+=u,this.charBuffer.copy(this.charBuffer,u,0,u),e.copy(this.charBuffer,0,0,u),i.substring(0,a)}return i},r.prototype.detectIncompleteChar=function(e){for(var i=e.length>=3?3:e.length;i>0;i--){var t=e[e.length-i];if(1==i&&6==t>>5){this.charLength=2;break}if(2>=i&&14==t>>4){this.charLength=3;break}if(3>=i&&30==t>>3){this.charLength=4;break}}this.charReceived=i},r.prototype.end=function(e){var i="";if(e&&e.length&&(i=this.write(e)),this.charReceived){var t=this.charReceived,s=this.charBuffer,a=this.encoding;i+=s.slice(0,t).toString(a)}return i}}});