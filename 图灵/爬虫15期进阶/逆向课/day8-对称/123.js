const CryptoJS = require("crypto-js")

desEncrypt = function (e, t) {
    var n = CryptoJS.enc.Utf8.parse(t);
    return CryptoJS.DES.encrypt(e, n, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString()
}
e = '{"username":"fasfjlasfj","password":"fafdasf","captcha":""}'
t = 'ZCafzHpsQgkQ9CKX'

console.log(desEncrypt(e,t))

var _key = 'k1fsa01v';
var _iv = 'k1fsa01v';
function encryptByDES(message) {
    var keyHex = CryptoJS.enc.Utf8.parse(_key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        iv: CryptoJS.enc.Utf8.parse(_iv),
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}