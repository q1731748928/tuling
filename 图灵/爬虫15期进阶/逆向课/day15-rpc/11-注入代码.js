


// 需要注入客户端  会有一个时效问题


!(function (){

    // 注入客户端JS
    function SekiroClient(e){if(this.wsURL=e,this.handlers={},this.socket={},this.base64=!1,!e)throw new Error("wsURL can not be empty!!");this.webSocketFactory=this.resolveWebSocketFactory(),this.connect()}SekiroClient.prototype.resolveWebSocketFactory=function(){if("object"==typeof window){var e=window.WebSocket?window.WebSocket:window.MozWebSocket;return function(t){function o(t){this.mSocket=new e(t)}return o.prototype.close=function(){this.mSocket.close()},o.prototype.onmessage=function(e){this.mSocket.onmessage=e},o.prototype.onopen=function(e){this.mSocket.onopen=e},o.prototype.onclose=function(e){this.mSocket.onclose=e},o.prototype.send=function(e){this.mSocket.send(e)},new o(t)}}if("object"==typeof weex)try{console.log("test webSocket for weex");var t=weex.requireModule("webSocket");return console.log("find webSocket for weex:"+t),function(e){try{t.close()}catch(e){}return t.WebSocket(e,""),t}}catch(e){console.log(e)}if("object"==typeof WebSocket)return function(t){return new e(t)};throw new Error("the js environment do not support websocket")},SekiroClient.prototype.connect=function(){console.log("sekiro: begin of connect to wsURL: "+this.wsURL);var e=this;try{this.socket=this.webSocketFactory(this.wsURL)}catch(t){console.log("sekiro: create connection failed,reconnect after 2s"),setTimeout(function(){e.connect()},2e3)}this.socket.onmessage(function(t){e.handleSekiroRequest(t.data)}),this.socket.onopen(function(e){console.log("sekiro: open a sekiro client connection")}),this.socket.onclose(function(t){console.log("sekiro: disconnected ,reconnection after 2s"),setTimeout(function(){e.connect()},2e3)})},SekiroClient.prototype.handleSekiroRequest=function(e){console.log("receive sekiro request: "+e);var t=JSON.parse(e),o=t.__sekiro_seq__;if(t.action){var n=t.action;if(this.handlers[n]){var s=this.handlers[n],i=this;try{s(t,function(e){try{i.sendSuccess(o,e)}catch(e){i.sendFailed(o,"e:"+e)}},function(e){i.sendFailed(o,e)})}catch(e){console.log("error: "+e),i.sendFailed(o,":"+e)}}else this.sendFailed(o,"no action handler: "+n+" defined")}else this.sendFailed(o,"need request param {action}")},SekiroClient.prototype.sendSuccess=function(e,t){var o;if("string"==typeof t)try{o=JSON.parse(t)}catch(e){(o={}).data=t}else"object"==typeof t?o=t:(o={}).data=t;"string"==typeof t&&((o={}).data=t),Array.isArray(o)&&(o={data:o,code:0}),o.code?o.code=0:(o.status,o.status=0),o.__sekiro_seq__=e;var n=JSON.stringify(o);if(console.log("response :"+n),n.length<6144)this.socket.send(n);else{this.base64&&(n=this.base64Encode(n));for(var s=0,i=Math.floor(n.length/5120)+1;s<i;s++){var r=JSON.stringify({__sekiro_frame_total:i,__sekiro_index:s,__sekiro_seq__:e,__sekiro_base64:this.base64,__sekiro_is_frame:!0,__sekiro_content:n.substring(5120*s,5120*(s+1))});console.log("frame: "+r),this.socket.send(r)}}},SekiroClient.prototype.sendFailed=function(e,t){"string"!=typeof t&&(t=JSON.stringify(t));var o={};o.message=t,o.status=-1,o.__sekiro_seq__=e;var n=JSON.stringify(o);console.log("sekiro: response :"+n),this.socket.send(n)},SekiroClient.prototype.registerAction=function(e,t){if("string"!=typeof e)throw new Error("an action must be string");if("function"!=typeof t)throw new Error("a handler must be function");return console.log("sekiro: register action: "+e),this.handlers[e]=t,this},SekiroClient.prototype.encodeWithBase64=function(){this.base64=arguments&&arguments.length>0&&arguments[0]},SekiroClient.prototype.base64Encode=function(e){if(1!==arguments.length)throw"SyntaxError: exactly one argument required";if(0===(e=String(e)).length)return e;function t(e,t){e<128?t.push(e):e<2048?(t.push(192+(e>>6&31)),t.push(128+(63&e))):(t.push(224+(e>>12&15)),t.push(128+(e>>6&63)),t.push(128+(63&e)))}var o,n,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=[],r=[],c=e.length;for(o=0;o<c;){for(t(e.charCodeAt(o),i);i.length>=3;){n=i.shift()<<16|i.shift()<<8|i.shift(),r.push(s.charAt(n>>18)),r.push(s.charAt(n>>12&63)),r.push(s.charAt(n>>6&63)),r.push(s.charAt(63&n))}o++}switch(i.length){case 1:n=i.shift()<<16,r.push(s.charAt(n>>18)+s.charAt(n>>12&63)+"==");break;case 2:n=i.shift()<<16|i.shift()<<8,r.push(s.charAt(n>>18)+s.charAt(n>>12&63)+s.charAt(n>>6&63)+"=")}return r.join("")};


    function start(){
         var client = new SekiroClient("ws://127.0.0.1:5612/business-demo/register?group=rpc-test&clientId=" + Math.random());

        client.registerAction("qq",function(request, resolve,reject ){
            _data = request['datas']
            resolve(o(_data)); // 挂载JS的加密方法就行了
        })

    }
    setTimeout(start,1000)

})()







