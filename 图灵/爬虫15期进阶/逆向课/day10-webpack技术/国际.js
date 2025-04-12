window = global;
var CryptoJS = require("crypto-js")
const axios = require("axios")
function encryptParams(g) {
                        var O = this
                          , X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""
                          , J = window.Object.keys(g).sort()
                          , me = "";
                        J.forEach(function(Rn) {
                            me += Rn + g[Rn] + O.salt
                        });
                        for (var Ce = CryptoJS.MD5(me + X).toString(), Ze = "", Sn = 0, Ke = Ce.length - 1; Sn < Ce.length && !(Sn >= Ke); Sn++,
                        Ke--)
                            Ze += (window.parseInt(Ce[Sn], 16) ^ window.parseInt(Ce[Ke], 16)).toString(16);
                        var dn = Ze + Ce.substring(Sn);
                        return dn
                    }
                    g= {
    "_time": 1720271987,
    "cnonce": 55237874
}
console.log(encryptParams(g));


headers = {
    "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Fm-Sign": encryptParams(g),
}

g = {
    "region": "US",
    "_time": "1720186067",
    "cnonce": "74036831"
}

axios.get("https://www.fastmoss.com/api/item/V2/skuList", {
    headers: headers,
    params: g
}).then(function (res) {
    // 接受响应
    console.log(JSON.stringify(res.data.data));

}).catch(function (msg) {
    // 请求失败
    console.log(msg)
})


