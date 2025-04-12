const CryptoJS = require("crypto-js")
o = CryptoJS
u = (s = null,
        function() {
            return s || (s = function() {
                var e, t, n, r, i = null;
                return i || (t = new RegExp("\\u200c","g"),
                n = new RegExp("\\u200d","g"),
                r = new RegExp(".{8}","g"),
                e = "‍‌‍‍‍‌‌‌‍‍‌‍‍‌‍‍‍‍‌‍‍‌‍‍‍‌‍‌‍‍‍‌‍‌‌‍‍‍‍‌‍‌‌‌‍‌‌‌‍‌‌‍‍‍‌‌‍‌‌‍‌‍‌‌‍‌‍‍‍‌‌‌‍‌‌‍‍‌‌‍‍‌‌‍‍‍‍‌‍‌‍‍‌‌‍‍‍‌‍‍‍‍‌‍‍‍‌‌‌‍‍‌‍‍‌‌‍‌‌‌‍‌‌‌‍‍‌‍".replace(r, (function(e) {
                    return String.fromCharCode(parseInt(e.replace(t, 1).replace(n, 0), 2))
                }
                )),
                i = {
                    key: o.enc.Utf8.parse(e),
                    mode: o.mode.CBC,
                    pad: o.pad.Pkcs7
                }),
                i
            }()),
            s
        }
        )
console.log(u())