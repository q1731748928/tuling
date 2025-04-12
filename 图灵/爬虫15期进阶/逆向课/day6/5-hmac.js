// 引用 crypto-js 加密模块
var CryptoJS = require('crypto-js')

function HMACEncrypt() {
    var text = "1"
    var key = "secret"   // 密钥文件  前端会出现  逆向的时候碰到hmac算法，需要有一个key
    return CryptoJS.HmacMD5(text, key).toString();
    // return CryptoJS.HmacSHA1(text, key).toString();
    // return CryptoJS.HmacSHA256(text, key).toString();
}
console.log(HMACEncrypt(), HMACEncrypt().length)