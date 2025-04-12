// 引用 crypto-js 加密模块
var CryptoJS = require('crypto-js')

function SHA1Encrypt() {
    var text = "1"
    return CryptoJS.SHA512(text).toString();
}

console.log(SHA1Encrypt(),SHA1Encrypt().length)
