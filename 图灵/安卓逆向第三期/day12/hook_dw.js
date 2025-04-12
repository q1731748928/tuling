
function hook(){
    Java.perform(function () {
        // hook掉弹窗
    var AlertDialog = Java.use('androidx.appcompat.app.AlertDialog');
    AlertDialog.show.implementation = function(){
        console.log("执行了");
        //this.show();
    }
});
}

function hook_1(){
    var hashMap = Java.use("java.util.HashMap");
    hashMap.put.implementation = function (a, b) {
    // if(a!=null && a.equals("userName")){
    //     console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()))
    //     console.log("hashMap.put: ", a, b);
    // }
    console.log("hashMap.put: ", a, b);
    return this.put(a, b);
}
}

function hook_2(){
    let k0 = Java.use("je.k0");
    k0["f"].overload('java.lang.String').implementation = function (str) {
    console.log(`is called:  str=${str}`);
    let result = this["f"]( str);
    console.log(` result=${result}`);
    return result;
};

}

function  hook_3(){
let k0 = Java.use("je.k0");
k0["b"].implementation = function (map, j) {
    console.log(`k0.b is called: map=${map}, j=${j}`);
         var results = "";
        var keyset = map.keySet();
        var it = keyset.iterator();
        while (it.hasNext()) {
            var keystr = it.next().toString();
            var valuestr = map.get(keystr).toString();
            console.log(keystr)
            console.log(valuestr)
            results += valuestr;
        }
        console.log(results)

    let result = this["b"](map, j);
    console.log(`k0.b result=${result}`);
    return result;
};

}

function hookddd(){
    let RequestUtils = Java.use("je.k0");
RequestUtils["g"].implementation = function (map) {
    console.log(`RequestUtils.m8444g is called: map=${map}`);
    let result = this["g"](map);
    console.log(`RequestUtils.m8444g result=${result}`);
    return result;
};
}

// cipherParamuserNamecountryCode86loginTokenpassword99329fb06add999bb15ca67728b835a8platformandroidtimestamp1715862957971typepwduserName83c7358c94e3a24e11f0fde1cbf5d559_1uuid04fb352acbdec4a3v5.6.0

// cipherParamuserNamecountryCode86loginTokenpassword9fb40645e7b72d1bf356c0ff8d0c667fplatformandroidtimestamp1715863648444typeuserName83c7358c94e3a24e11f0fde1cbf5d559_1uuid04fb352acbdec4a3v5.6.0
function hook_4() {

    var AESEncrypt = Java.use("com.duapp.aesjni.AESEncrypt");
    AESEncrypt.getByteValues.implementation = function () {
        var res = this.getByteValues();
        // console.log('getByteValues返回值是：', res);
        return res;
    }

     AESEncrypt.encode.overload('java.lang.Object', 'java.lang.String').implementation = function(obj,str){
        console.log('传入参数：',str);
        var res = this.encode(obj,str);
        console.log('返回值是：',res);
        return res;
    }

}

function hook_5(){
    var soAddr = Module.findBaseAddress("libJNIEncrypt.so");
    var funcAddr = soAddr.add(0x182C)  //32位的话记得+1

    Interceptor.attach(funcAddr,{
                onEnter: function(args){
                    console.log('onEnter arg[0]: ',hexdump(args[0]))
                    console.log('onEnter arg[1]: ',hexdump(args[1]))
                    // this.arg0 = args[0]
                },
                onLeave: function(retval){
                    // console.log('onLeave arg[]: ')
                    console.log("返回值:", retval.readUtf8String());
                }
            });
    }

function hook_6(){
     var addr_func = Module.findExportByName("libJNIEncrypt.so", "AES_128_ECB_PKCS5Padding_Encrypt");
    //使用Interceptor.attach调用,
    Interceptor.attach(addr_func, {
        onEnter: function(args){
            console.log("--------------------------执行函数--------------------------");
            console.log("参数1：", args[0].readUtf8String());
            console.log("参数2：", args[1].readUtf8String());
        },
        onLeave: function(retValue){
            console.log("返回值:", retValue.readUtf8String());
        }
    })
    }

// com.shizhuang.duapp


Java.perform(function (){
    // hook_1()
    // hook_2()
    // hook_3()
    // hookddd()
    // hook_4()
    hook_5()
    // hook_6()

})

