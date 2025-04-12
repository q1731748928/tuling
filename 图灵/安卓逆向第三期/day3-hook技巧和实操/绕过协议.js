Java.perform(function () {
    var SwitchConfig = Java.use('mtopsdk.mtop.global.SwitchConfig');
    SwitchConfig.isGlobalSpdySwitchOpen.overload().implementation = function () {
        return false;
    }
});

// frida -U -l xy_hook.js --no-pause -f com.taobao.idlefish