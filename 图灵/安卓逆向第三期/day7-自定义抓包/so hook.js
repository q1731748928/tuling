function hookSo1() {
    var modules = Process.enumerateModules();
    for (var i in modules) {
        var module = modules[i];
        // console.log(module.name)
        if (module.name.indexOf("native-lib.so") > -1) {
            console.log(module.name)
            console.log(module.base)
        }
    }
}


function hook_module() {
    var baseAddr = Module.findBaseAddress("libnative-lib.so");
    console.log("baseAddr", baseAddr);
}

function hook_import() {
    var imports = Module.enumerateImports("libnative-lib.so");
    for (var i = 0; i < imports.length; i++) {
        console.log(JSON.stringify(imports[i]));
        console.log(imports[i].address);
    }


}


function hook_export() {
    var exports = Module.enumerateExports("libnative-lib.so");
    for (var i = 0; i < exports.length; i++) {
        if (exports[i].name.includes("Java")) {
            console.log(JSON.stringify(exports[i]));
        }
    }

    var addr = Module.findExportByName("libnative-lib.so", "Java_com_luoge_com_MainActivity_nativeMessage")
    console.log(addr)

}

function hook_res() {
    var addr = Module.findExportByName("libnative-lib.so", "Java_com_luoge_com_MainActivity_nativeMessage")
    Interceptor.attach(addr, {
        onEnter: function (args) {
            // 在函数执行前执行的代码
            console.log("hook start")
        },
        onLeave: function (retval) {
            // 在函数执行后执行的代码
            var strs = Java.cast(retval,Java.use("java.lang.String"))
            console.log("返回值"+ strs)
        }
    });
}

// hook 有参数类型
function hook_res2() {
    var addr = Module.findExportByName("libnative-lib.so", "Java_com_luoge_com_MainActivity_nativeSum")
    Interceptor.attach(addr, {
        onEnter: function (args) {
            // 在函数执行前执行的代码
            console.log("hook start")
            var arg2 = Java.cast(args[2],Java.use("java.lang.String"))
            console.log(arg2)
            var arg3 = Java.cast(args[3],Java.use("java.lang.String"))
            console.log(arg3)
        },
        onLeave: function (retval) {
            // 在函数执行后执行的代码
            var strs = Java.cast(retval,Java.use("java.lang.String"))
            console.log("返回值"+ strs)
        }
    });
}


Java.perform(function () {
    // hookSo1()
    // hook_module()
// hook_import()
//     hook_export()
//     hook_res()
    hook_res2()
})

