montageDefine("6efc682","deserialization/context",{dependencies:["q"],factory:function(e,t){var n=e("q");(function(e){function t(e,t,n){if(this._reviver=t,this._serialization=e,this._objects=Object.create(null),n){this._userObjects=Object.create(null);for(var r in n)this._userObjects[r]=n[r]}}Object.defineProperties(t.prototype,{_objects:{value:null,writable:!0},_userObjects:{value:null,writable:!0},_serialization:{value:null,writable:!0},_reviver:{value:null,writable:!0},setObjectLabel:{value:function(e,t){this._objects[t]=e}},getObject:{value:function(e){var t,r=this._serialization,i=this._reviver,a=this._objects;return e in a?a[e]:e in r?(t=i.reviveRootObject(r[e],this,e),e in a||(a[e]=t),t):n.reject(Error("Object with label '"+e+"' was not found."))}},getObjects:{value:function(){var e,t=this,r=(this._reviver,this._serialization),i=[];for(var a in r)e=this.getObject(a),n.isPromise(e)&&i.push(e);return 0===i.length?n.resolve(this._invokeDidReviveObjects()):n.all(i).then(function(){return t._invokeDidReviveObjects()})}},hasUserObject:{value:function(e){var t=this._userObjects;return t?e in t:!1}},getUserObject:{value:function(e){var t=this._userObjects;return t?t[e]:void 0}},_invokeDidReviveObjects:{value:function(){var e,t=this,r=this._reviver;return"function"==typeof r.didReviveObjects&&(e=r.didReviveObjects(this._objects,this),n.isPromise(e))?e.then(function(){return t._objects}):this._objects}}}),e.Context=t})(t)}});