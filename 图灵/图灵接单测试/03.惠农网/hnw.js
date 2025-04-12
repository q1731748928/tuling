var xl = require("./res")
var _ts = new Date().getTime()
t = {
    $env: {inApp:false},
    config: {
        "peach": "",
        "monk": "https://gateway.cnhnb.com/monk",
        "banana": "https://gateway.cnhnb.com/banana",
        "qiniu": {
            "privateUrl": "",
            "upLoadUrl": "http://upload-z2.qiniup.com",
            "downLoadUrl": ""
        },
        "env": "pro",
        "truffle": "https://truffle.cnhnb.com/banana",
        "cashier": "https://cashier.cnhnb.com",
        "truffles": "https://truffle.cnhnb.com",
        "news": "http://news.cnhnb.com",
        "img": "http://img.cnhnb.com",
        "m": "https://m.cnhnb.com",
        "pigsy": "https://appapi.cnhnb.com",
        "openapi": "https://openapi.cnhnb.com",
        "bigData": "https://m.cnhnb.com/html/bigdata/#/",
        "$defaultConfig": {
            "httpConfig": {
                "method": "POST",
                "isToastError": true,
                "headers": {
                    "osType": "wap",
                    "content-type": "application/json"
                }
            }
        }
    }
}
// 这个地方也是动态生成
sid = xl(844).default["X-CLIENT-SID"](1,2)
traceid = xl(844).default["X-B3-TRACEID"](1,2)
nonce = xl(844).default["X-CLIENT-NONCE"]()
_ts = xl(844).default["X-CLIENT-TIME"](1,2)
head = {
    "X-CLIENT-APPID": 5,
    "X-B3-TRACEID": traceid,
    "X-CLIENT-TIME": _ts,
    "X-CLIENT-PAGE": "/hangqing/",
    "X-HN-JOB": "If you see these message, I hope you dont hack us, I hope you can join us! Please visit https://www.cnhnkj.com/job.html",
    "X-CLIENT-NONCE": nonce,
    "X-CLIENT-ID": "5600cce-3fb3-4902-9300-12939750a",
    "X-CLIENT-SID": sid
}
var xxl = xl(489).default(t,head)

sign = xxl["X-CLIENT-SIGN"].toString()
head["X-CLIENT-SIGN"] = sign;
console.log(head);
get_header = function () {
    return head
}
