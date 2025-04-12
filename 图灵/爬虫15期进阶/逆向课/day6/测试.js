const crypt = require('crypto-js')

ht = function (t) {
    return typeof t
}

_ts = new Date().getTime()
data = {
    "page": 2,
    "page_len": 20,
    "diploma_id": "7",
    "wenli": "0",
    "app_id": "98357f659cf8fb6001cff80f7c6b85f2",
    "ts": _ts,
    "platform": "desktop",
    "v": 210
}

function Xt(t) {
    // var e = Vt(t);
    var e = crypt.MD5(t).toString();
    return e = e.toUpperCase() // 转大写
}

function Wt(t) {
    var e = Object.prototype.toString.call(t)
        , n = Object.keys(t);
    n.sort((function (a, b) {
            return "[object Array]" === e && (a = +a,
                b = +b),
                a < b ? -1 : a > b ? 1 : 0
        }
    ));
    for (var r, param = [], o = 0, c = n; o < c.length; o++) {
        var l = c[o]
            , data = t[l];
        null == data && (t[l] = data = ""),
        (data || 0 === data) && ("object" === Object(ht)(data) && (data = Wt(data)),
            param.push("".concat(l, "=").concat(data)))
    }
    return "[object Object]" === e ? (r = param.join("&"),
        r = "{".concat(r, "}")) : "[object Array]" === e ? (r = param.join(","),
        r = "[".concat(r, "]")) : r = param.join("&"),
        r
}

U = "146fd1e66513611ac7af69f21f1d7725"
var n = Wt(data);

ss = n += "&key=" + U
sign = Xt(ss)
console.log(sign);
data[['sign']] = sign

console.log(data)

const axios = require("axios")

params = {
    id: 1,
    page: 2
}
headers = {
    "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
}

axios.get('https://www.jizhy.com/open/sch/rank-list',
    {
        params: data,
        headers: headers
    }).then(function (response) {
    console.log(JSON.stringify(response.data));
}).catch(function (error) {
    // console.log(error);
});

