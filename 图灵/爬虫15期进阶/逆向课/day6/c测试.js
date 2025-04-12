
var CryptoJS = require('crypto-js')

function SHA1Encrypt(arg) {
    var text = arg
    return CryptoJS.SHA256(text).toString();
}


p = {
    "type1": 2,
    "type2": 2,
    "type3": 2,
    "type4": 1,
    "jury": 1
}

d = 1719237218317
h =  "mmvXFWvtwl8FAT4s"
u =  "$d6eb7ff91ee257475%"
e = 4
l = 10
// p["type" + e]

aaa =[d, h, u, e, l, p["type" + e]]
console.log(aaa.sort().join(""))

console.log(SHA1Encrypt(aaa.sort().join("")));

// [d, h, u, e, l, p["type" + e]]  生成明文
 // [d, h, u, e, l, p["type" + e]].sort()  排序
 // [d, h, u, e, l, p["type" + e]].sort().join("")  拼接
 // c([d, h, u, e, l, p["type" + e]].sort().join(""))  加密

