function makeParser(e){return function(t){var n,r=0,i=1,a=e.apply(this,[function(e){return n=e,expectEof()}].concat(Array.prototype.slice.call(arguments,1)));try{for(var s=0;t.length>s;s++)a=a(t[s],{index:s,line:i,column:r}),"\n"===t[s]?(i++,r=0):r++;a=a("",{index:s,line:i,column:r})}catch(o){if(o.loc){var l=o.loc;o.message+=t.length>80?" at line "+l.line+", column "+l.column:" in "+JSON.stringify(t)+" at index "+l.index}throw o}return n}}function expectEof(){return function(e,t){if(""!==e){var n=Error("Unexpected "+JSON.stringify(e));throw n.loc=t,n}return function r(){return r}}}function makeExpect(e){return function(t){return function(n,r){return n===e?t(n,r):t(null,r)(n,r)}}}exports.makeParser=makeParser,exports.expectEof=expectEof,exports.makeExpect=makeExpect;