// 引用 crypto-js 加密模块
var CryptoJS = require('crypto-js')

function HMACEncrypt(arg, key) {
    return CryptoJS.HmacSHA512(arg, key).toString();
}

code = {
        "n": 20,
        "codes": {
            "0": "W",
            "1": "l",
            "2": "k",
            "3": "B",
            "4": "Q",
            "5": "g",
            "6": "f",
            "7": "i",
            "8": "i",
            "9": "r",
            "10": "v",
            "11": "6",
            "12": "A",
            "13": "K",
            "14": "N",
            "15": "k",
            "16": "4",
            "17": "L",
            "18": "1",
            "19": "8"
    }
}

_i = function () {
    for (var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase(), t = e + e, n = "", i = 0; i < t.length; ++i) {
        var a = t[i].charCodeAt() % code.n;
        n += code.codes[a]
    }
    return n
}

t = "/api/datalist/touzilist?isnewagg=true&keyno=9cce0780ab7644008b73bc2120479d31&pageindex=3";
n = {};
key1 = HMACEncrypt("1", (_i)(t)).toLowerCase().substr(8, 20)

// console.log(key1);

// console.log(i("/api/datalist/touzilist?isnewagg=true&keyno=9cce0780ab7644008b73bc2120479d31&pageindex=3"));


// l = (0, r.default)(t, e.data, (0, s.default)());

function getValue() {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                  , n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase()
                  , i = JSON.stringify(e).toLowerCase();
                return HMACEncrypt(n + "pathString" + i + t, _i(n))
}

t = '/api/datalist/touzilist?isnewagg=true&keyno=9cce0780ab7644008b73bc2120479d31&pageindex=2'
data = undefined
tid = "c8ad6966b9ee02e98de573197215827a";

console.log(getValue(t, data, tid));