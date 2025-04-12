
function hookPdd(){
    var result = null;
    Java.perform(function (){

            let SecureNative = Java.use("com.xunmeng.pinduoduo.secure.SecureNative");

            let BaseApplication = Java.use("com.xunmeng.pinduoduo.basekit.BaseApplication")
            var context = BaseApplication.getContext()

            let time = Java.use("com.xunmeng.pinduoduo.basekit.util.TimeStamp")
            let _ts = time.getRealLocalTime().longValue();
            let Long = Java.use("java.lang.Long");
            // 上下文、时间戳
            result = SecureNative.deviceInfo2(context, Long.valueOf(_ts));

    })
    return result

}

rpc.exports = {
    xialuo:hookPdd
}