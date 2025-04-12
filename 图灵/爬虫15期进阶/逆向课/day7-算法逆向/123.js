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
function SHA1Encrypt(arg) {
    return CryptoJS.SHA512(arg).toString();
}

h = function (e, t, r) {
    var n = ""
        , i = t
        ,
        a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    e && (i = Math.round(Math.random() * (r - t)) + t);
    for (var o = 0; o < i; o++) {
        n += a[Math.round(Math.random() * (a.length - 1))]
    }
    return n
}(!1, 16)
u = "$d6eb7ff91ee257475%"
l = 10

d = new Date().getTime()


function getSign(page, type) {
    params = [
    u,
    page, // page
    "10", // page_size 写死
    d,
    type, // type // 写活
    h
]
    para = {}
    sign = SHA1Encrypt(params.join(""))
    return para["ts"] = d,
        para['rs'] = h,
        para['signature'] = sign,
        para['page_size'] = "10",
        para['type'] = type,
        para['page'] = page,
        para

}
