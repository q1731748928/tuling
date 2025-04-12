
function bytesToHex(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        var tmp = arr[i];
        if (tmp < 0) {
            tmp = (255 + tmp + 1).toString(16);
        } else {
            tmp = tmp.toString(16);
        }
        if (tmp.length == 1) {
            tmp = "0" + tmp;
        }
        str += tmp;
    }
    return str;
}

function bytesToBase64(e) {
    var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var r, a, c, h, o, t;
    for (c = e.length, a = 0, r = ''; a < c;) {
        if (h = 255 & e[a++], a == c) {
            r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4),
                r += '==';
            break
        }
        if (o = e[a++], a == c) {
            r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
                r += base64EncodeChars.charAt((15 & o) << 2),
                r += '=';
            break
        }
        t = e[a++],
            r += base64EncodeChars.charAt(h >> 2),
            r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
            r += base64EncodeChars.charAt((15 & o) << 2 | (192 & t) >> 6),
            r += base64EncodeChars.charAt(63 & t)
    }
    return r
}

function bytesToString(arr) {
    if (typeof arr === 'string') {
        return arr;
    }
    var str = '',
        _arr = arr;
    for (var i = 0; i < _arr.length; i++) {
        var one = _arr[i].toString(2),
            v = one.match(/^1+?(?=0)/);
        if (v && one.length == 8) {
            var bytesLength = v[0].length;
            var store = _arr[i].toString(2).slice(7 - bytesLength);
            for (var st = 1; st < bytesLength; st++) {
                store += _arr[st + i].toString(2).slice(2);
            }
            str += String.fromCharCode(parseInt(store, 2));
            i += bytesLength - 1;
        } else {
            str += String.fromCharCode(_arr[i]);
        }
    }
    return str;
}


function demo1(){
    // 这里写业务逻辑
    var buff = Java.use("com.luoge.com.BufferMap")
    buff.show.implementation = function (arf){
        console.log(arf)
            //Java map的遍历
            var key = arf.keySet(); // 这一行获取了Map对象的键集合，这个键集合是一个迭代器
            var it = key.iterator();
            var result = "";
            while(it.hasNext()){
                var keystr = it.next();
                var valuestr = arf.get(keystr);
                console.log("key->" + keystr + "val->" + valuestr);
                result += valuestr;
            }
            console.log(result);

        // 添加数据返回
        arf.put("name", "xialuo");
        arf.put("age", "18");

        var res= this.show(arf)
        return res
    }
}

    // hook请求地址
function hookOkhttpURl() {
    var Builder = Java.use('okhttp3.Request$Builder');
    Builder.url.overload('okhttp3.HttpUrl').implementation = function (a) {
        console.log('a: ' + a)
        var res = this.url(a);
        return res;
    }
}

function hookreqres(){

    var OkHttpClient = Java.use("okhttp3.OkHttpClient");
    OkHttpClient.newCall.overload("okhttp3.Request").implementation = function (request) {
    console.log("HTTP Request -> " + request.url().toString());
    var call = this.newCall(request); // 获取新的 Call 对象
    var response = call.execute(); // 调用新的 Call 对象的 execute 方法
    console.log("HTTP Response -> " + response.body().string());
    return call
}

}


function hookHeader(){

    var Builder = Java.use("okhttp3.Request$Builder");
    Builder["addHeader"].implementation = function (str, str2) {
        console.log("key: " + str)
        console.log("val: " + str2)
        // showStacks()
        var result = this["addHeader"](str, str2);
        return result;
    };
}

function hookafaf(){
    Java.perform(function() {
    // 获取 OkHttpClient 类
    var OkHttpClient = Java.use('okhttp3.OkHttpClient');

    // 拦截 newCall 方法
    OkHttpClient.newCall.overload('okhttp3.Request').implementation = function(request) {
        // 输出请求的 URL
        console.log("Request URL: " + request.url().toString());

        // 获取请求的 Header
        var headers = request.headers();
        console.log("Request Headers:");
        console.log(headers.toString());

        // 获取请求的 Method
        var method = request.method();
        console.log("Request Method: " + method);

        // 获取请求的 Body
        var requestBody = request.body();

        const FormBody = Java.use('okhttp3.FormBody');
        if (requestBody !== null && requestBody.getClass().getName() === 'okhttp3.FormBody') {
            // Java.cast()方法用于将对象转换为另一个类的实例
        var formBody = Java.cast(requestBody, FormBody);
        console.log("Request Body:");
        for (var i = 0; i < formBody.size(); i++) {
            console.log(formBody.name(i) + ": " + formBody.value(i));
        }
    }

        // 返回原始的 Call 对象
        return this.newCall(request);
    };
});
}


function showStacks() {
    Java.perform(function () {
      console.log(Java.use("android.util.Log").getStackTraceString(
        Java.use("java.lang.Throwable").$new()
    ));
})
}

function hashMap(){
        var hashMap = Java.use("java.util.HashMap");
        hashMap.put.implementation = function (a,b){
            if (a == "x-mini-wua"){
                // 查看调用栈
                showStacks()
            }
         console.log('输出--》',a,b)
         return this.put(a,b)
    }
}
function hook_data(){
    // 返回是否密文
   let RequestUtil = Java.use("com.dodonew.online.http.RequestUtil");
RequestUtil["encodeDesMap"].overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (data, desKey, desIV) {
    console.log(`RequestUtil.encodeDesMap is called: data=${data}, desKey=${desKey}, desIV=${desIV}`);
    let result = this["encodeDesMap"](data, desKey, desIV);
    console.log(`RequestUtil.encodeDesMap result=${result}`);
    return result;
};
}

function hoo1s(){
    let RequestUtil = Java.use("com.dodonew.online.http.RequestUtil");
RequestUtil["encodeDesMap"].overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (data, desKey, desIV) {
    console.log(`RequestUtil.encodeDesMap is called: data=${data}, desKey=${desKey}, desIV=${desIV}`);
    let result = this["encodeDesMap"](data, desKey, desIV);
    console.log(`RequestUtil.encodeDesMap result=${result}`);
    return result;
};
}

function hooks1(){

        var DESKeySpec = Java.use("javax.crypto.spec.DESKeySpec")
        DESKeySpec.$init.overload('[B').implementation = function (a){
               console.log("=============================================")
               send("密钥文件是---》" + bytesToString(a) + "《---")
               send("密钥文件是---》" + bytesToHex(a) + "《---")
               send("密钥文件是---》" + bytesToBase64(a) + "《---")
               return  this.$init(a)
        }
}

function hook_sign(){
  let Utils = Java.use("com.dodonew.online.util.Utils");
Utils["md5"].implementation = function (string) {
    console.log(`Utils.md5 is called--> ${string}`);
    let result = this["md5"](string);
    console.log(`Utils.md5 result=${result}`);
    return result;
};

}


function hook_text(){

    var TextUtils = Java.use("android.text.TextUtils");
    TextUtils.isEmpty.implementation = function (aa){
    console.log('TextUtils--》',aa)
        if (aa == "13535353535"){
            showStacks()
        }
    return this.isEmpty(aa)
}
}

function hook_json(){
var JSONObject = Java.use('org.json.JSONObject');
// Hook JSONObject.put() 方法
    JSONObject.put.overload('java.lang.String', 'java.lang.Object').implementation = function(key, value) {
        console.log('Hooked JSONObject.put()');
        console.log('Key: ' + key.toString());
        console.log('Value: ' + value.toString());
    // 可在此处对参数进行修改或记录
    // 调用原始的put()方法
    return this.put(key, value);
};



    // Hook JSONObject.getString() 方法
JSONObject.getString.overload('java.lang.String').implementation = function(key) {
    console.log('Hooked JSONObject.getString()');
    console.log('Key: ' + key.toString());
    // 调用原始的getString()方法
    var result = this.getString(key);
    // 可在此处对返回值进行修改或记录
    return result;
};

}

Java.perform(function (){
    // 启动入口
    // demo1()
    // hookOkhttpURl()
    // hookreqres()
    // hookHeader()
    // hookafaf()
    hashMap()
    // hook_data()
    // hoo1s()
    // hooks1()
    // hook_sign()
    // hook_text()
    // hook_json()
})

