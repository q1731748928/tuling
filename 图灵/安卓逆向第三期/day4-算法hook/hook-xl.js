Java.perform(function (){

    var ByteString = Java.use("com.android.okhttp.okio.ByteString")
    // var methods = ByteString.class.getDeclaredMethods();
    // for(var j = 0; j < methods.length; j++) {
    //     var methodName = methods[j].getName();
    //     console.log(methodName);
    // }

   function toBase64(data){
        console.log("[xl]base64-->",ByteString.of(data).base64());
    }
    function toHex(data){
        console.log("[xl]hex-->",ByteString.of(data).hex());
    }
    function toUtf8(data){
        console.log("[xl]utf8-->",ByteString.of(data).utf8());
    }

    // 测试样例
    toUtf8([120, 105, 97, 108, 117, 111])
    toHex([120, 105, 97, 108, 117, 111])
    toBase64([120, 105, 97, 108, 117, 111])

})

// frida -UF -l hook-xl.js




