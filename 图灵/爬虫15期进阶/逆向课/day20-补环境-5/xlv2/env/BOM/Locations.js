Location = function Location(){
    throw new TypeError("Illegal constructor");
}
h_log(typeof  bodavm.toolsFunc.safeProto)

// var location = {};
//
// location.__proto__= Location.prototype;

location = {}
Object.setPrototypeOf(location,Location.prototype);
bodavm.toolsFunc.defineProperty(location,"valueOf",{configurable:false, enumerable:false, writable:false, value:function(){return bodavm.toolsFunc.dispatch(this,location,"location","valueOf",arguments);}});
bodavm.toolsFunc.defineProperty(location,"ancestorOrigins",{configurable:false, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,location,"location","ancestorOrigins_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(location,"href",{configurable:false, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,location,"location","href_get",arguments);}, set:function(){return bodavm.toolsFunc.dispatch(this,location,"location","href_set",arguments);}});
bodavm.toolsFunc.defineProperty(location,"origin",{configurable:false, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,location,"location","origin_get",arguments);}, set:undefined});
bodavm.toolsFunc.defineProperty(location,"protocol",{configurable:false, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,location,"location","protocol_get",arguments);}, set:function(){return bodavm.toolsFunc.dispatch(this,location,"location","protocol_set",arguments);}});
bodavm.toolsFunc.defineProperty(location,"host",{configurable:false, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,location,"location","host_get",arguments);}, set:function(){return bodavm.toolsFunc.dispatch(this,location,"location","host_set",arguments);}});
bodavm.toolsFunc.defineProperty(location,"hostname",{configurable:false, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,location,"location","hostname_get",arguments);}, set:function(){return bodavm.toolsFunc.dispatch(this,location,"location","hostname_set",arguments);}});
bodavm.toolsFunc.defineProperty(location,"port",{configurable:false, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,location,"location","port_get",arguments);}, set:function(){return bodavm.toolsFunc.dispatch(this,location,"location","port_set",arguments);}});
bodavm.toolsFunc.defineProperty(location,"pathname",{configurable:false, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,location,"location","pathname_get",arguments);}, set:function(){return bodavm.toolsFunc.dispatch(this,location,"location","pathname_set",arguments);}});
bodavm.toolsFunc.defineProperty(location,"search",{configurable:false, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,location,"location","search_get",arguments);}, set:function(){return bodavm.toolsFunc.dispatch(this,location,"location","search_set",arguments);}});
bodavm.toolsFunc.defineProperty(location,"hash",{configurable:false, enumerable:true, get:function(){return bodavm.toolsFunc.dispatch(this,location,"location","hash_get",arguments);}, set:function(){return bodavm.toolsFunc.dispatch(this,location,"location","hash_set",arguments);}});
bodavm.toolsFunc.defineProperty(location,"assign",{configurable:false, enumerable:true, writable:false, value:function(){return bodavm.toolsFunc.dispatch(this,location,"location","assign",arguments);}});
bodavm.toolsFunc.defineProperty(location,"reload",{configurable:false, enumerable:true, writable:false, value:function(){return bodavm.toolsFunc.dispatch(this,location,"location","reload",arguments);}});
bodavm.toolsFunc.defineProperty(location,"replace",{configurable:false, enumerable:true, writable:false, value:function(){return bodavm.toolsFunc.dispatch(this,location,"location","replace",arguments);}});
bodavm.toolsFunc.defineProperty(location,"toString",{configurable:false, enumerable:true, writable:false, value:function(){return bodavm.toolsFunc.dispatch(this,location,"location","toString",arguments);}});



