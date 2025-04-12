// frida -U -l 绕过协议.js --no-pause -f com.taobao.taobao
Java.perform(function () {
    var SwitchConfig = Java.use('mtopsdk.mtop.global.SwitchConfig');
    SwitchConfig.isGlobalSpdySwitchOpen.overload().implementation = function () {
        return false;
    }
});