"use strict";function SortedArray(e,t,n,i){return this instanceof SortedArray?(Array.isArray(e)?(this.array=e,e=e.splice(0,e.length)):this.array=[],this.contentEquals=t||Object.equals,this.contentCompare=n||Object.compare,this.getDefault=i||Function.noop,this.length=0,this.addEach(e),void 0):new SortedArray(e,t,n,i)}function search(e,t,n){for(var i=0,r=e.length-1;r>=i;){var a=i+r>>1,s=n(t,e[a]);if(s>0)i=a+1;else{if(!(0>s))return a;r=a-1}}return-(i+1)}function searchFirst(e,t,n,i){var r=search(e,t,n);if(0>r)return-1;for(;r>0&&i(t,e[r-1]);)r--;return i(t,e[r])?r:-1}function searchLast(e,t,n,i){var r=search(e,t,n);if(0>r)return-1;for(;e.length-1>r&&i(t,e[r+1]);)r++;return i(t,e[r])?r:-1}function searchForInsertionIndex(e,t,n){var i=search(e,t,n);if(0>i)return-i-1;for(var r=e.length-1;r>i&&0===n(t,e[i+1]);)i++;return i}module.exports=SortedArray;var Shim=require("./shim"),GenericCollection=require("./generic-collection"),PropertyChanges=require("./listen/property-changes"),RangeChanges=require("./listen/range-changes");SortedArray.SortedArray=SortedArray,Object.addEach(SortedArray.prototype,GenericCollection.prototype),Object.addEach(SortedArray.prototype,PropertyChanges.prototype),Object.addEach(SortedArray.prototype,RangeChanges.prototype),SortedArray.prototype.isSorted=!0,SortedArray.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare,this.getDefault)},SortedArray.prototype.has=function(e,t){if(t)throw Error("SortedSet#has does not support second argument: equals");var n=search(this.array,e,this.contentCompare);return n>=0&&this.contentEquals(this.array[n],e)},SortedArray.prototype.get=function(e,t){if(t)throw Error("SortedArray#get does not support second argument: equals");var n=searchFirst(this.array,e,this.contentCompare,this.contentEquals);return-1!==n?this.array[n]:this.getDefault(e)},SortedArray.prototype.add=function(e){var t=searchForInsertionIndex(this.array,e,this.contentCompare);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([e],[],t),this.array.splice(t,0,e),this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],t),!0},SortedArray.prototype["delete"]=function(e,t){if(t)throw Error("SortedArray#delete does not support second argument: equals");var n=searchFirst(this.array,e,this.contentCompare,this.contentEquals);return-1!==n?(this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],n),this.array.splice(n,1),this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[e],n),!0):!1},SortedArray.prototype.deleteAll=function(e,t){if(t){var n=this.array.deleteAll(e,t);return this.length-=n,n}var i=searchFirst(this.array,e,this.contentCompare,this.contentEquals);if(-1!==i){for(var r=i;this.contentEquals(e,this.array[r]);)r++;var a=this.slice(i,r);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],a,i),this.array.splice(i,a.length),this.length-=a.length,this.dispatchesRangeChanges&&this.dispatchRangeChange([],a,i),a.length}return 0},SortedArray.prototype.indexOf=function(e){return searchFirst(this.array,e,this.contentCompare,this.contentEquals)},SortedArray.prototype.lastIndexOf=function(e){return searchLast(this.array,e,this.contentCompare,this.contentEquals)},SortedArray.prototype.find=function(e,t,n){if(t)throw Error("SortedArray#find does not support second argument: equals");if(n)throw Error("SortedArray#find does not support third argument: index");return searchFirst(this.array,e,this.contentCompare,this.contentEquals)},SortedArray.prototype.findLast=function(e,t,n){if(t)throw Error("SortedArray#findLast does not support second argument: equals");if(n)throw Error("SortedArray#findLast does not support third argument: index");return searchLast(this.array,e,this.contentCompare,this.contentEquals)},SortedArray.prototype.push=function(){this.addEach(arguments)},SortedArray.prototype.unshift=function(){this.addEach(arguments)},SortedArray.prototype.pop=function(){var e=this.array.pop();return this.length=this.array.length,e},SortedArray.prototype.shift=function(){var e=this.array.shift();return this.length=this.array.length,e},SortedArray.prototype.slice=function(){return this.array.slice.apply(this.array,arguments)},SortedArray.prototype.splice=function(e,t){return this.swap(e,t,Array.prototype.slice.call(arguments,2))},SortedArray.prototype.swap=function(e,t,n){if(void 0===e&&void 0===t)return[];e=e||0,0>e&&(e+=this.length),void 0===t&&(t=1/0);var i=this.slice(e,e+t);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange(n,i,e),this.array.splice(e,t),this.length-=i.length,this.dispatchesRangeChanges&&this.dispatchRangeChange([],i,e),this.addEach(n),i},SortedArray.prototype.reduce=function(e,t){var n=arguments[2];return this.array.reduce(function(t,i,r){return e.call(n,t,i,r,this)},t,this)},SortedArray.prototype.reduceRight=function(){var e=arguments[2];return this.array.reduceRight(function(t,n,i){return callback.call(e,t,n,i,this)},basis,this)},SortedArray.prototype.min=function(){return this.length?this.array[0]:void 0},SortedArray.prototype.max=function(){return this.length?this.array[this.length-1]:void 0},SortedArray.prototype.one=function(){return this.array.one()},SortedArray.prototype.clear=function(){var e;this.dispatchesRangeChanges&&(e=this.array.slice(),this.dispatchBeforeRangeChange([],e,0)),this.length=0,this.array.clear(),this.dispatchesRangeChanges&&this.dispatchRangeChange([],e,0)},SortedArray.prototype.equals=function(e,t){return this.array.equals(e,t)},SortedArray.prototype.compare=function(e,t){return this.array.compare(e,t)},SortedArray.prototype.iterate=function(e,t){return new this.Iterator(this.array,e,t)},SortedArray.prototype.toJSON=function(){return this.toArray()},SortedArray.prototype.Iterator=Array.prototype.Iterator;