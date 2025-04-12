var addrRegisterNatives = null;
var symbols = Module.enumerateSymbolsSync("libart.so");
for (var i = 0; i < symbols.length; i++) {
    var symbol = symbols[i];
    if (symbol.name.indexOf("art") >= 0 &&
        symbol.name.indexOf("JNI") >= 0 &&
        symbol.name.indexOf("RegisterNatives") >= 0 &&
        symbol.name.indexOf("CheckJNI") < 0) {

        addrRegisterNatives = symbol.address;
        console.log("RegisterNatives is at ", symbol.address, symbol.name);
        break
    }
}

if (addrRegisterNatives) {
    // RegisterNatives(env, 类型, Java和C的对应关系,个数)
    Interceptor.attach(addrRegisterNatives, {
        onEnter: function (args) {
            var env = args[0];        // jni对象
            var java_class = args[1]; // 类
            var class_name = Java.vm.tryGetEnv().getClassName(java_class);
            // var taget_class = "com.duapp.aesjni.AESEncrypt";   //111 某个类中动态注册的so
            var taget_class = "com.xunmeng.pinduoduo.secure.DeviceNative";   //111 某个类中动态注册的so
            if (class_name === taget_class) {
                //只找我们自己想要类中的动态注册关系
                console.log("\n[RegisterNatives] method_count:", args[3]);
                var methods_ptr = ptr(args[2]);
                var method_count = parseInt(args[3]);
                for (var i = 0; i < method_count; i++) {
                    // Java中函数名字的
                    var name_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3));
                    // 参数和返回值类型
                    var sig_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize));
                    // C中的函数内存地址
                    var fnPtr_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize * 2));
                    var name = Memory.readCString(name_ptr);
                    var sig = Memory.readCString(sig_ptr);
                    var find_module = Process.findModuleByAddress(fnPtr_ptr);
                    // 地址、偏移量、基地址
                    var offset = ptr(fnPtr_ptr).sub(find_module.base);
                    console.log("name:", name, "sig:", sig,'module_name:',find_module.name ,"offset:", offset);
                }
            }
        }
    });
}
// 动态注册函数地址
// frida -U -f com.xunmeng.pinduoduo -l hook_so_register.js  改两个位置 222