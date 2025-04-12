var dlopen = Module.findExportByName(null, "dlopen");
var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");

Interceptor.attach(dlopen, {
    onEnter: function (args) {
        var path_ptr = args[0];
        var path = ptr(path_ptr).readCString();
        console.log("[dlopen:]", path);
    },
    onLeave: function (retval) {

    }
});
Interceptor.attach(android_dlopen_ext, {
    onEnter: function (args) {
        var path_ptr = args[0];
        var path = ptr(path_ptr).readCString();
        console.log("[dlopen_ext:]", path);
    },
    onLeave: function (retval) {
    }
});


// frida -U -f com.shizhuang.duapp -l load_so.js