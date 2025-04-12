
function main(){

    Java.perform(function (){
        var ByteString = Java.use("com.android.okhttp.okio.ByteString")

    function toUtf8(data){
       return "[xl]utf8-->",ByteString.of(data).utf8();
    }

        console.log("start hook V1.0")
        var MessageDigest = Java.use('java.security.MessageDigest')
        MessageDigest.getInstance.overload('java.lang.String').implementation = function (str){
            console.log("[*]算法是--》" + str + "《----")
            // send("[*]算法是--》" + str + "《----")
            return this.getInstance(str)
        }

        MessageDigest.update.overload('byte').implementation = function (arg){
            console.log("======byte=====")
            console.log(arg)
            return this.update(arg)
        }

        MessageDigest.update.overload('java.nio.ByteBuffer').implementation = function (arg) {
             console.log("======ByteBuffer=====")
            console.log(arg)
            return this.update(arg)
        }

        MessageDigest.update.overload('[B').implementation = function (arg) {
            console.log("======[B=====")
            console.log("update算法传参--》" + toUtf8(arg) + "<----") // 字节转字符串
            return this.update(arg)
        }
        MessageDigest.update.overload('[B', 'int', 'int').implementation = function (arg, a1, a2) {
             console.log("======'[B', 'int', 'int'=====")
            console.log(arg)
            return this.update(arg,a1,a2)
        }


    })

}


setImmediate(main)

