function makeParserFromTrie(e){var t={};return Object.keys(e.children).forEach(function(n){t[n]=makeParserFromTrie(e.children[n])}),function(n,r){return r=r||identity,function(i,a){return t[i]?t[i](n,function(e){return r(e)(i,a)}):n(e.value,r)(i,a)}}}function identity(e){return e}module.exports=makeParserFromTrie;