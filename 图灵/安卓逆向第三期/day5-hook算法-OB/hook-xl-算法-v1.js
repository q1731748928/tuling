function _log() {
    console.log("=========================================")
}

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


function main() {

    Java.perform(function () {
        var ByteString = Java.use("com.android.okhttp.okio.ByteString")

        function toUtf8(data) {
            return "[xl]utf8-->", ByteString.of(data).utf8();
        }

        console.log("start hook V1.0")
        var MessageDigest = Java.use('java.security.MessageDigest')
        MessageDigest.getInstance.overload('java.lang.String').implementation = function (str) {
            console.log("[*]算法是--》" + str + "《----")
            // send("[*]算法是--》" + str + "《----")
            return this.getInstance(str)
        }

        MessageDigest.update.overload('byte').implementation = function (arg) {
            console.log("======byte=====")
            return this.update(arg)
        }
        MessageDigest.update.overload('java.nio.ByteBuffer').implementation = function (arg) {
            console.log("======ByteBuffer=====")
            return this.update(arg)
        }
        MessageDigest.update.overload('[B').implementation = function (arg) {
            console.log("======[B=====")
            console.log("update算法传参--》" + toUtf8(arg) + "<----") // 字节转字符串
            return this.update(arg)
        }
        MessageDigest.update.overload('[B', 'int', 'int').implementation = function (arg, a1, a2) {
            console.log("======'[B', 'int', 'int'=====")
            console.log(arg + "|" + a1 + "|" + a2)
            return this.update(arg, a1, a2)
        }
        // hook digest
        MessageDigest.digest.overload().implementation = function () {
            _log()
            var result = this.digest()
            console.log('digest结果（hex）-->' + bytesToHex(result))
            console.log('digest结果（b64）-->' + bytesToBase64(result))
            return result
        }

        MessageDigest.digest.overload('[B').implementation = function (arg) {
            _log()
            console.log('digest 入参（str）-->' + bytesToString(arg))
            var result = this.digest(arg)
            console.log('digest结果（hex）-->' + bytesToHex(result))
            console.log('digest结果（b64）-->' + bytesToBase64(result))
            return result
        }

        // hookDES
        console.log('=======hook DES==============')

        var SecretKeyFactory = Java.use('javax.crypto.SecretKeyFactory')
        SecretKeyFactory.getInstance.overload('java.lang.String').implementation = function (str) {
            console.log("[*]算法是--》" + str + "《----")
            // send("[*]算法是--》" + str + "《----")
            return this.getInstance(str)
        }
        var DESKeySpec = Java.use("javax.crypto.spec.DESKeySpec")
        DESKeySpec.$init.overload('[B').implementation = function (a) {
            console.log('DESKeySpec key（str）-->' + bytesToString(a))
            console.log('DESKeySpec key（hex）-->' + bytesToHex(a))
            return this.$init(a)
        }

        var IvParameterSpec = Java.use("javax.crypto.spec.IvParameterSpec")
        IvParameterSpec.$init.overload('[B').implementation = function (a) {
            console.log('IvParameterSpec IV（str）-->' + bytesToString(a))
            console.log('IvParameterSpec IV（hex）-->' + bytesToHex(a))
            return this.$init(a)
        }

        var Cipher = Java.use('javax.crypto.Cipher');
        Cipher.getInstance.overload('java.lang.String').implementation = function (arg) {
            _log()
            console.log("填充模式--》" + arg)
            return this.getInstance(arg)
        }

        Cipher.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (arg, arg2) {
            _log()
            console.log("填充模式--》" + arg + "|| " + arg2)
            return this.getInstance(arg, arg2)
        }

        Cipher.update.overload('[B').implementation = function (arg) {
            console.log("======[B=====")
            console.log("update算法传参--》" + toUtf8(arg) + "<----") // 字节转字符串
            return this.update(arg)
        }
        Cipher.update.overload('[B', 'int', 'int').implementation = function (arg, a1, a2) {
            console.log("======'[B', 'int', 'int'=====")
            console.log(arg + "|" + a1 + "|" + a2)
            return this.update(arg, a1, a2)
        }

        Cipher.doFinal.overload().implementation = function () {
            _log()
            var result = this.doFinal()
            console.log('digest结果（hex）-->' + bytesToHex(result))
            console.log('digest结果（b64）-->' + bytesToBase64(result))
            return result
        }

        Cipher.doFinal.overload('[B').implementation = function (arg) {
            _log()
            console.log('digest 入参（str）-->' + bytesToString(arg))
            var result = this.doFinal(arg)
            console.log('digest结果（hex）-->' + bytesToHex(result))
            console.log('digest结果（b64）-->' + bytesToBase64(result))
            return result
        }

        var SecretKeySpec = Java.use('javax.crypto.spec.SecretKeySpec')

        SecretKeySpec.$init.overload('[B', 'java.lang.String').implementation = function (a, b) {
            _log()
            console.log('算法key（str）-->' + bytesToString(a))
            console.log('算法是（str）-->' + b)
            return this.$init(a, b)
        }

        var macs = Java.use("javax.crypto.Mac");
        macs.update.overload('[B').implementation = function (arg) {
            _log()
            console.log('update 入参（str）-->' + bytesToString(arg))
            var result = this.update(arg)
            return result
        }
        macs.update.overload('[B', 'int', 'int').implementation = function (arg, a1, a2) {
            console.log("======'[B', 'int', 'int'=====")
            console.log(arg + "|" + a1 + "|" + a2)
            return this.update(arg, a1, a2)
        }

        macs.doFinal.overload().implementation = function () {
            _log()
            var result = this.doFinal()
            console.log('hmac结果（hex）-->' + bytesToHex(result))
            console.log('hmac结果（b64）-->' + bytesToBase64(result))
            return result
        }

        macs.doFinal.overload('[B').implementation = function (arg) {
            _log()
            console.log('doFinal 入参（str）-->' + bytesToString(arg))
            var result = this.doFinal(arg)
            console.log('doFinal结果（hex）-->' + bytesToHex(result))
            console.log('doFinal结果（b64）-->' + bytesToBase64(result))
            return result
        }


        // RSA算法
        var b64 = Java.use("android.util.Base64");
        b64.decode.overload('java.lang.String', 'int').implementation = function (a, b) {
            _log()
            console.log("RSA-KEY==b64入参--" + a)
            return this.decode(a, b)
        }

        var X509EncodedKeySpec = Java.use('java.security.spec.X509EncodedKeySpec')
        X509EncodedKeySpec.$init.overload('[B').implementation = function (a) {
            console.log("RSA-KEY密钥-->" + bytesToBase64(a))
            return this.$init(a)
        }


    })

}


setImmediate(main)

