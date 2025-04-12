function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? y(Object(o), !0).forEach((function (t) {
                Object(u["a"])(e, t, o[t])
            }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : y(Object(o)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
            }
        ))
    }
    return e
};
X = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e.replace(/\s+/g, "")
};
s = c.Latin1 = {
                    stringify: function(t) {
                        for (var e = t.words, n = t.sigBytes, r = [], o = 0; o < n; o++) {
                            var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            r.push(String.fromCharCode(i))
                        }
                        return r.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], r = 0; r < e; r++)
                            n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new a.init(n,e)
                    }
                }
parse = function (t) {
    return s.parse(unescape(encodeURIComponent(t)))
}
M = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
        , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        , r = t.enc
        , a = void 0 === r ? "Utf8" : r
        , o = t.mode
        , i = void 0 === o ? "ECB" : o
        , c = t.padding
        , u = void 0 === c ? "Pkcs7" : c
        , d = p.a.enc[a].parse(n)
        , s = {
        mode: p.a.mode[i],
        padding: p.a.pad[u]
    }
        , l = p.a.TripleDES.encrypt(e, d, s);
    return l.toString()
};
_ = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e && "string" === typeof e) {
        var t = n.text || "0"
            , r = n.length || 24;
        if (e.length < r)
            for (var a = e.length; a < r; a++)
                e += t;
        else
            e = e.substring(0, r);
        return e
    }
};
n = k({
    userName: X("18626871885@163.com"),
    password: encodeURI(M("fadsfdasf", _(X('18626871885@163.com'))))
}, a);