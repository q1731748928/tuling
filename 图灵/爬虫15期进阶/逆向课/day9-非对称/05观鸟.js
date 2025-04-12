const JSEncrypt = require("./jsencrypt")
var CryptoJS = require("crypto-js")
const axios = require("axios")

function md5(arg) {
    return CryptoJS.MD5(arg).toString()
}

// 解析响应
decode = function (a) {
    var b = CryptoJS.enc.Utf8.parse('3583ec0257e2f4c8195eec7410ff1619');
    var c = CryptoJS.enc.Utf8.parse('d93c0d5ec6352f20');
    var d = CryptoJS.AES.decrypt(a, b, {
        iv: c,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return d.toString(CryptoJS.enc.Utf8)
}

var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";

function hex2b64(h) {
    var i;
    var c;
    var ret = "";
    for (i = 0; i + 3 <= h.length; i += 3) {
        c = parseInt(h.substring(i, i + 3), 16);
        ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }
    if (i + 1 == h.length) {
        c = parseInt(h.substring(i, i + 1), 16);
        ret += b64map.charAt(c << 2);
    } else if (i + 2 == h.length) {
        c = parseInt(h.substring(i, i + 2), 16);
        ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
    }
    while ((ret.length & 3) > 0) {
        ret += b64pad;
    }
    return ret;
}

function getUuid() {
    var s = [];
    var a = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
        s[i] = a.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = "4";
    s[19] = a.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23];
    var b = s.join("");
    return b
}

JSEncrypt.prototype.encryptUnicodeLong = function (string) {
    var k = this.getKey();
    //根据key所能编码的最大长度来定分段长度。key size - 11：11字节随机padding使每次加密结果都不同。
    var maxLength = ((k.n.bitLength() + 7) >> 3) - 11;
    try {
        var subStr = "", encryptedString = "";
        var subStart = 0, subEnd = 0;
        var bitLen = 0, tmpPoint = 0;
        for (var i = 0, len = string.length; i < len; i++) {
            //js 是使用 Unicode 编码的，每个字符所占用的字节数不同
            var charCode = string.charCodeAt(i);
            if (charCode <= 0x007f) {
                bitLen += 1;
            } else if (charCode <= 0x07ff) {
                bitLen += 2;
            } else if (charCode <= 0xffff) {
                bitLen += 3;
            } else {
                bitLen += 4;
            }
            //字节数到达上限，获取子字符串加密并追加到总字符串后。更新下一个字符串起始位置及字节计算。
            if (bitLen > maxLength) {
                subStr = string.substring(subStart, subEnd)
                encryptedString += k.encrypt(subStr);
                subStart = subEnd;
                bitLen = bitLen - tmpPoint;
            } else {
                subEnd = i;
                tmpPoint = bitLen;
            }
        }
        subStr = string.substring(subStart, len)
        encryptedString += k.encrypt(subStr);
        return hex2b64(encryptedString);
    } catch (ex) {
        console.log(ex);
        return false;
    }
};

function sort_ASCII(a) {
    var b = new Array();
    var c = 0;
    for (var i in a) {
        b[c] = i;
        c++
    }
    var d = b.sort();
    var e = {};
    for (var i in d) {
        e[d[i]] = a[d[i]]
    }
    return e
}

params = JSON.stringify(sort_ASCII({limit: '20', page: '3'}))
var paramPublicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvxXa98E1uWXnBzXkS2yHUfnBM6n3PCwLdfIox03T91joBvjtoDqiQ5x3tTOfpHs3LtiqMMEafls6b0YWtgB1dse1W5m+FpeusVkCOkQxB4SZDH6tuerIknnmB/Hsq5wgEkIvO5Pff9biig6AyoAkdWpSek/1/B7zYIepYY0lxKQIDAQAB";
var encrypt = new JSEncrypt();
encrypt.setPublicKey(paramPublicKey);

data = encrypt.encryptUnicodeLong(params)

var c = Date.parse(new Date()); // c
var d = getUuid(); // requestId
// var f = md5('{"limit":"20","page":"3"}' + "d639b5e36e27d6443469b8163aa4b2f2" + '1720148787000')
var f = md5(params + d + c); // sign


headers = {
    "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "requestId": d,
    "sign": f,
    "timestamp": c
}

axios.post("https://api.birdreport.cn/front/activity/search", data, {
    headers: headers,
}).then(function (res) {
    // 接受响应
    console.log(decode(res.data.data));

}).catch(function (msg) {
    // 请求失败
    console.log(msg)
})



