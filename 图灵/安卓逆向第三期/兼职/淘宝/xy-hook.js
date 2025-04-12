

Java.perform(function() {
    console.log("hook参数成功")
  var InnerSignImpl = Java.use("mtopsdk.security.InnerSignImpl");
  InnerSignImpl.getUnifiedSign.overload('java.util.HashMap', 'java.util.HashMap', 'java.lang.String', 'java.lang.String', 'boolean', 'java.lang.String').implementation = function(params, ext, appKey, authCode, useWua, requestId) {
    console.log("某鱼x-sign参数1:", params);
    console.log("某鱼x-sign参数2:", ext);
    console.log("某鱼x-sign参数3:", appKey);
    console.log("某鱼x-sign参数4:", authCode);
    console.log("某鱼x-sign参数5:", useWua);
    console.log("某鱼x-sign参数6:", requestId);
     var result = this.getUnifiedSign(params, ext, appKey, authCode, useWua, requestId);
    console.log("某鱼x-sign结果:", result);
    return result;
  }
});

//  frida -U -l hook.js --no-pause -f com.taobao.idlefish
