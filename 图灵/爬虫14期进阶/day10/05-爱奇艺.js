
var bc
navigator = {
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0'
}
setTimeout = function () {

}
!function(n) {
    var i = {};
    function o(e) {
        if (i[e])
            return i[e].exports;
        var t = i[e] = {
            "i": e,
            "l": !1,
            "exports": {}
        };
        return n[e].call(t.exports, t, t.exports, o),
        t.l = !0,
        t.exports
    }
    o.m = n,
    o.c = i,
    o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            "enumerable": !0,
            "get": n
        })
    }
    ,
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            "value": "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            "value": !0
        })
    }
    ,
    o.t = function(t, e) {
        if (1 & e && (t = o(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            "enumerable": !0,
            "value": t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                o.d(n, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return n
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "",
    // o(o.s = 32)
    bc = o
}([function(e, t, o) {
    t = function(e, t, n) {
        o(33);
        var i = {};
        i.Class = o(17),
        i.cookie = {},
        i.cookie.get = o(35),
        i.cookie.set = o(37),
        i.cookie.remove = o(38),
        i.browser = o(21),
        i.floater = o(39),
        i.floaterView = o(40),
        i.logServer = o(43),
        i.qosServer = o(44),
        i.page = {},
        i.page.getViewWidth = o(25),
        i.page.getViewHeight = o(24),
        i.page.getScrollLeft = o(26),
        i.page.getScrollTop = o(27),
        i.page.getWidth = o(45),
        i.page.getHeight = o(46),
        i.md5 = o(47),
        i.extend = o(48),
        i.load = o(49),
        i.rsaUtils = o(50),
        i.compassServer = o(31),
        n.exports = i
    }
    .call(t, o, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var s = function s(e) {
            return String(e).replace(/[#%&+=\/\\\ \u3000\f\r\n\t]/g, function(e) {
                return "%" + (256 + e.charCodeAt()).toString(16).substring(1).toUpperCase()
            })
        }
          , i = function i(e) {
            return String(e).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])","g"), "\\$1")
        }
          , a = function a(e, t) {
            var n, i;
            if ("function" == typeof t)
                for (n in e)
                    if (e.hasOwnProperty(n) && (i = e[n],
                    !1 === t.call(e, i, n)))
                        break;
            return e
        }
          , r = function r(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
          , c = function c(e, t) {
            var n, i = [], o = t || function(e) {
                return s(e)
            }
            ;
            return a(e, function(e, t) {
                if (r(e))
                    for (n = e.length; n--; )
                        i.push(t + "=" + o(e[n], t));
                else
                    i.push(t + "=" + o(e, t))
            }),
            i.join("&")
        }
          , o = {}
          , d = function d(e, t, n) {
            e && (o[t] = o[t] || [],
            o[t].push({
                "type": t,
                "elem": e,
                "eventHandle": n
            }),
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n))
        }
          , l = function l(e, n, i) {
            e && (e.removeEventListener ? e.removeEventListener(n, i, !1) : e.attachEvent && e.detachEvent("on" + n, i),
            o[n].forEach(function(e, t) {
                e.eventHandle == i && o[n].splice(t, 1)
            }))
        }
          , u = function u() {
            for (var e in o)
                o[e].forEach(function(e) {
                    l(e.elem, e.type, e.eventHandle)
                });
            o = {}
        };
        n.exports = {
            "getElementByAttr": function(e, t, n) {
                for (var i = ("undefined" == typeof arguments[3] ? document : arguments[3]).getElementsByTagName(e), o = [], s = 0; s < i.length; s++)
                    i[s].getAttribute(t) == n && o.push(i[s]);
                return o
            },
            "isEmptyObject": function(e) {
                for (var t in e)
                    return !1;
                return !0
            },
            "removeAllChild": function(e) {
                if (e && e.hasChildNodes())
                    for (var t = e.childNodes(), n = t.length - 1; 0 <= n; n--)
                        e.removeChild(t[n])
            },
            "on": function(e, t, n) {
                d(e, t, n)
            },
            "un": function(e, t, n) {
                l(e, t, n)
            },
            "unAll": function(e) {
                u(e)
            },
            "getQueryValue": function(e, t) {
                if (e) {
                    t = new RegExp("(^|&|\\?|#)" + i(t) + "=([^&#]*)(&|$|#)",""),
                    t = e.match(t);
                    return t ? t[2] : ""
                }
                return ""
            },
            "forEach": function(e, t) {
                return a(e, t)
            },
            "isArray": function(e) {
                return r(e)
            },
            "jsonToQuery": function(e, t) {
                return c(e, t)
            },
            "isCors": function() {
                var e = !1;
                return e = window.XMLHttpRequest && "withCredentials"in new window.XMLHttpRequest ? !0 : e
            }
        }
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(t, n, r) {
    (function(a) {
        var e = function(e, t, n) {
            var i = r(15).getDomain()
              , o = {
                "agenttype": "1",
                "ptid": "01010021010000000000",
                "protocolDom": "",
                "logoUrl": "",
                "msg": "请稍后重试",
                "fromSDK": "1",
                "sdk_version": "1.0.0",
                "domain": i = "iqiyi.com" != i && "pps.tv" != i && "beatshome.com" != i ? "iqiyi.com" : i,
                "globalEvent": "login,logout,pcloginsdkshow,pcloginsdkhide",
                "secretKey": "tS7BdPLU2w0JD89dh"
            }
              , s = {};
            n.exports = {
                "initConfig": function(e) {
                    s = a.extend(s, o),
                    s = a.extend(s, e)
                },
                "getConfig": function() {
                    return s
                }
            }
        }
        .call(n, r, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, r(0))
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = function i(e, t) {
            var n;
            e && (t = String(t || "").trim(),
            n = e.className,
            t && !o(e, t) && (n = n + " " + t),
            e.className = n)
        }
          , o = function o(e, t) {
            var n = [];
            return e && e.className && (n = e.className.split(" ")),
            !!((t = String(t || "").trim()) && 0 <= n.indexOf(t))
        }
          , s = function s(e, t) {
            if (e) {
                var n = e.className && e.className.split(" ") || ""
                  , i = n && n.length || 0;
                if (i) {
                    t = String(t).trim();
                    for (var o = 0; o < i; o++)
                        if (t == n[o]) {
                            n.splice(o, 1);
                            break
                        }
                    e.className = n.join(" ")
                }
            }
        };
        n.exports = {
            "hasClass": o,
            "addClass": i,
            "removeClass": s
        }
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var o = window.PCLoginSDK && window.PCLoginSDK.eventList || {}
          , i = function i(e, t) {
            e = (e = e.replace(/^on/i, "")).toLowerCase(),
            o[e] = o[e] || [],
            o[e].push({
                "type": e,
                "listener": t
            }),
            window.PCLoginSDK.eventList = o
        }
          , s = function s(e, n) {
            e = e.replace(/^on/i, "").toLowerCase();
            var t, i = o[e];
            i && (i.length,
            t = !n,
            i && 0 < i.length && (1 == t ? o[e] = [] : i.forEach(function(e, t) {
                e.listener === n && i.splice(t, 1)
            })))
        }
          , a = function a(n) {
            for (var e in o)
                o[e].forEach(function(e) {
                    var t = new RegExp("(^|,)" + e.type + "(,|$)");
                    n.search(t) < 0 && (o[e.type] = [])
                })
        }
          , r = function r(e) {
            var n = e.type.replace(/^on/i, "").toLowerCase()
              , i = e.data
              , e = o[n];
            e && 0 < e.length && e.forEach(function(e) {
                try {
                    e.listener({
                        "type": n,
                        "data": i
                    })
                } catch (t) {}
            })
        };
        n.exports = {
            "on": function(e, t) {
                i(e, t)
            },
            "un": function(e, t) {
                s(e, t)
            },
            "unAll": function(e) {
                a(e)
            },
            "fire": function(e) {
                r(e)
            }
        }
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, o) {
    t = function(e, t, n) {
        var i = o(15).getDomain()
          , i = {
            "logout": "https://passport." + i + "/apis/user/logout.action",
            "optKey": "https://passport." + i + "/apis/user/generate_opt.action",
            "optLogin": "https://passport.iqiyi.com/apis/sso/device_otp_login.action",
            "optLoginAuth": "https://passport.iqiyi.com/apis/profile/info.action",
            "optDev": "https://passport." + i + "/apis/user/del_device_otp.action",
            "thirdLogin": "https://passport." + i + "/apis/thirdparty/nlogin.action",
            "delcookiePPS": "https://passport.pps.tv/apis/user/delcookie.action",
            "delcookieIQIYI": "https://passport.iqiyi.com/apis/user/delcookie.action",
            "ssoTokenPPS": "https://passport.pps.tv/apis/user/sso/cd/token.action",
            "ssoCookieIQIYI": "https://passport.iqiyi.com/apis/user/sso/cd/cookie.action",
            "ssoTokenIQIYI": "https://passport.iqiyi.com/apis/user/sso/cd/token.action",
            "ssoCookiePPS": "https://passport.pps.tv/apis/user/sso/cd/cookie.action",
            "genLoginToken": "https://passport." + i + "/apis/qrcode/gen_login_token.action",
            "isTokenLogin": "https://passport." + i + "/apis/qrcode/is_token_login.action",
            "getAreacode": "https://passport." + i + "/apis/phone/get_support_areacode.action",
            "login": "https://passport." + i + "/apis/reglogin/login.action",
            "secureSendCode": "https://passport." + i + "/apis/phone/secure_send_cellphone_authcode.action",
            "authcodeLogin": "https://passport." + i + "/apis/reglogin/authcode_login.action",
            "upBizInfo": "https://passport." + i + "/apis/phone/up_biz_info.action",
            "upBizStatus": "https://passport." + i + "/apis/phone/up_biz_status.action",
            "validate": "https://passport." + i + "/apis/phone/verify_cellphone_authcode.action",
            "checkAccount": "https://passport." + i + "/apis/user/check_account.action",
            "userRegConfirm": "https://passport." + i + "/apis/reglogin/user_reg_confirm.action",
            "directBindPhone": "https://passport." + i + "/apis/phone/direct_bind_phone.action",
            "verifyAccount": "https://passport." + i + "/apis/phone/verify_account.action",
            "bindLogin": "https://passport." + i + "/apis/reglogin/bind_login.action",
            "getUid": "https://passport.iqiyi.com/apis/user/uid.action",
            "getUserStatus": "https://passport.iqiyi.com/apis/phone/account_status.action",
            "userInfo": "https://passport." + i + "/apis/profile/info.action",
            "getDevice": "https://meshtest.if.iqiyi.com/user/pcw/api/decode-device-id"
        };
        n.exports = i
    }
    .call(t, o, t, e);
    t === undefined || (e.exports = t)
}
, function(t, n, s) {
    (function(f) {
        var e = function(e, t, n) {
            var r = s(57)
              , c = s(58)
              , d = s(1)
              , l = s(2)
              , u = s(18)
              , h = s(13)
              , p = s(14)
              , i = s(9)
              , o = f.Class("RemoteInterface", {
                "construct": function(e) {
                    this._remoteInterfaces = e,
                    this.logger = new i.LoginLogger("QiyiLoginLoader")
                },
                "statics": {
                    "protocol": d.isCors() ? "https:" : window.location.protocol
                },
                "methods": {
                    "send": function(i, o) {
                        var s = this
                          , e = !1 !== i.withCredentials
                          , a = i.ifname
                          , t = s._getIfData(a);
                        d.isCors() ? c.request(t.url, {
                            "data": i.param,
                            "ifname": a,
                            "method": "POST",
                            "withCredentials": e,
                            "onsuccess": function(e) {
                                o && o(e)
                            },
                            "onerror": function(e) {
                                o && o({
                                    "code": "E00000",
                                    "msg": "系统异常，请稍后重试"
                                }),
                                window.MITO && window.MITO.log({
                                    "message": t.url + "接口调用失败(高版本浏览器)",
                                    "data": i.param
                                }),
                                s.logger.error("The post request status is error options:".concat(JSON.stringify(i || ""), " ")),
                                h("KIWI-LOGIN-NETWORK-FAIL")
                            },
                            "onfailure": function(e) {
                                var t = l.getConfig()
                                  , n = t.appVersion;
                                "pca" == t.business && u.isUpgrade(n, "8.9.142.1") ? p.callPca() : o && (o({
                                    "code": "A00101",
                                    "msg": "网络连接失败 ，请检查网络设置"
                                }),
                                "checkTokenLoginIf" !== a && "genLoginTokenIf" !== a && s.logger.warn("The post request status is failure (timeout 5000) options:".concat(JSON.stringify(i || ""), " "))),
                                "checkTokenLoginIf" !== a && "genLoginTokenIf" !== a && h("KIWI-LOGIN-NETWORK-TIMEOUT"),
                                h("KIWI-LOGIN-NETWORK-TIMEOUT")
                            }
                        }) : (e = {
                            "__POST": 1,
                            "cb": 1
                        },
                        e = f.extend(e, i.param),
                        new r({
                            "form": {
                                "action": t.url
                            },
                            "data": e,
                            "callback": o,
                            "needDestroy": !0,
                            "needMd5": i.needMd5
                        }).submit())
                    },
                    "_getIfData": function(e) {
                        return this._remoteInterfaces[e] || this._remoteInterfaces
                    },
                    "_getUrl": function(e, t) {
                        var n, i = [];
                        for (n in t)
                            i.push(n + "=" + t[n]);
                        return e + "?" + i.join("&")
                    }
                }
            });
            n.exports = o
        }
        .call(n, s, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, s(0))
}
, function(t, n, v) {
    (function(m) {
        var e = function(e, t, n) {
            var i = v(2)
              , o = []
              , s = null
              , a = !1
              , r = null
              , c = function c(t) {
                s ? s && s.tryGetFingerPrint ? t(s.tryGetFingerPrint() || "") : s.getFingerPrint ? s.getFingerPrint(function(e) {
                    t(e)
                }, function(e) {
                    t("")
                }) : t("") : t("")
            };
            function d() {
                if (s = window.dfp,
                0 < o.length)
                    for (; 0 < o.length; )
                        try {
                            var e = o.shift();
                            c(e.cb)
                        } catch (t) {}
                else
                    s && (s && s.tryGetFingerPrint ? s.tryGetFingerPrint() : s.getFingerPrint && s.getFingerPrint(function() {}))
            }
            if (window.dfp && (window.dfp.tryGetFingerPrint || window.dfp.getFingerPrint))
                d();
            else {
                var l, u, h, p, f = !1, g = document.getElementsByTagName("script");
                for (l in console.log("scripts", g),
                g)
                    Object.hasOwnProperty.call(g, l) && ("http://security.iqiyi.com/static/cook/v1/cooksdk.js" !== (u = g[l]).src && "https://security.iqiyi.com/static/cook/v1/cooksdk.js" !== u.src || (f = !0));
                f || (p = document.getElementsByTagName("HEAD").item(0),
                (h = document.createElement("script")).type = "text/javascript",
                h.src = "//security.iqiyi.com/static/cook/v1/cooksdk.js",
                m.browser.iPad && (h.src = "//security.iqiyi.com/static/cook/v1/cooksdkpcwpad.js"),
                p.appendChild(h),
                p = navigator.userAgent.toLowerCase(),
                /msie/.test(p) ? h.onreadystatechange = function() {
                    /loaded|complete/.test(h.readyState) && (a = !0,
                    clearTimeout(r),
                    d())
                }
                : h.onload = function() {
                    a = !0,
                    clearTimeout(r),
                    d()
                }
                )
            }
            n.exports = {
                "getDFP": function(e) {
                    var t = i.getConfig();
                    t.dfp ? e(t.dfp) : s ? c(e) : (o.push({
                        "cb": e
                    }),
                    clearTimeout(r),
                    r = setTimeout(function() {
                        a || (clearTimeout(r),
                        d())
                    }, 2e3))
                }
            }
        }
        .call(n, v, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, v(0))
}
, function(t, n, s) {
    (function(o) {
        var e = function(e, t, n) {
            s(2);
            var i = s(7);
            n.exports = {
                "qosSend": function(e) {
                    e = this.getParam(e),
                    o.qosServer(e)
                },
                "qosCommonSend": function(e) {
                    e = this.getCommonParam(e),
                    o.qosServer(e)
                },
                "getParam": function(e) {
                    var t = {
                        "p1": "1_10_101",
                        "pu": o.cookie.get("P00003"),
                        "ct": "pcw_qos_login",
                        "stime": (new Date).getTime(),
                        "v": "",
                        "u": o.cookie.get("QC005") || "",
                        "t": "9",
                        "dfp": ""
                    };
                    return i.getDFP(function(e) {
                        t.dfp = e
                    }),
                    t = o.extend(t, e)
                },
                "getCommonParam": function(e) {
                    var t = {
                        "p1": "1_10_101",
                        "pu": o.cookie.get("P00003"),
                        "ct": "pcw_common",
                        "stime": (new Date).getTime(),
                        "v": "",
                        "u": o.cookie.get("QC005") || "",
                        "t": "9",
                        "dfp": ""
                    };
                    return i.getDFP(function(e) {
                        t.dfp = e
                    }),
                    t = o.extend(t, e)
                }
            }
        }
        .call(n, s, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, s(0))
}
, function(e, t, n) {
    "use strict";
    function a(n, e, i, o) {
        function s(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        return e && function(e, t) {
            for (var n in e)
                if (s(e, n) && t(e[n], n))
                    break
        }(e, function(e, t) {
            !i && s(n, t) || (o && "string" != typeof e && "boolean" != typeof e ? (n[t] || (n[t] = {}),
            a(n[t], e, i, o)) : n[t] = e)
        }),
        n
    }
    n.r(t);
    var i = {}
      , o = {}
      , s = {}
      , r = 0
      , c = {
        "getItem": function(e) {
            return i[e]
        },
        "setItem": function(e, t) {
            i[e] = t
        },
        "removeItem": function(e) {
            delete i[e]
        }
    }
      , d = function() {
        try {
            return window.localStorage.setItem("_Q_test_", 1),
            window.localStorage.removeItem("_Q_test_"),
            window.localStorage
        } catch (e) {}
        return c
    }()
      , l = function l() {
        0 === r && (clearTimeout(r),
        r = setTimeout(function() {
            for (var e in r = 0,
            o)
                d.setItem(e, o[e]),
                delete o[e];
            for (var t in s)
                d.removeItem(t),
                delete s[t]
        }, 1e3))
    }
      , u = {
        "PLAYER_VD_KEY": "QiyiPlayerVD",
        "read": function(e) {
            return i[e] || (i[e] = d.getItem(e)),
            i[e]
        },
        "write": function(e, t) {
            i[e] = t,
            o[e] = t,
            l()
        },
        "remove": function(e) {
            delete i[e],
            s[e] = 0,
            l()
        }
    };
    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    n.d(t, "LoginLogger", function() {
        return T
    });
    var p = !1
      , f = ""
      , g = ""
      , m = "QiyiLoginLogger"
      , v = "QiyiLoginLoggerLevel"
      , y = {
        "OFF": {
            "value": 0,
            "name": "OFF"
        },
        "ERROR": {
            "value": 1,
            "name": "ERROR"
        },
        "WARN": {
            "value": 2,
            "name": "WARN"
        },
        "INFO": {
            "value": 3,
            "name": "INFO"
        },
        "DEBUG": {
            "value": 4,
            "name": "DEBUG"
        }
    }
      , b = parseInt(u.read(v), 10)
      , _ = Array.prototype.slice
      , w = "Unknown"
      , k = ""
      , C = 0
      , S = ""
      , P = function P() {
        var e;
        try {
            e = (new Date).toISOString()
        } catch (t) {
            e = (new Date).toString()
        }
        return e
    }
      , L = function L(e) {
        var t = e.join("");
        S !== t ? (S = t,
        C = 0) : (1 < ++C && (f = (f = f.replace(k, "")).substring(0, f.length - 2)),
        e.push(">>repeat(" + C + ")<<"))
    }
      , x = function x(e, t) {
        var n, i, o = "#FFA500";
        if (e = _.call(e),
        L(e),
        e.unshift("%c"),
        t.name !== w && e.unshift("[" + t.name + "]"),
        e.unshift("%c[" + P() + " " + t.level.name + "]"),
        t.level !== y.DEBUG && (k = e.join("").replace(/%c/gi, ""),
        f = ("" !== (i = f || "") ? i + "\n" : "") + k,
        p = !0),
        "undefined" != typeof console)
            try {
                n = console.log,
                t.level === y.WARN && console.warn ? (n = console.warn,
                o = "#ff6cb7") : t.level === y.ERROR && console.error ? (n = console.error,
                o = "#F30") : t.level === y.INFO && console.info ? n = console.info : t.level === y.DEBUG && console.debug && (n = console.debug,
                o = "#FFA500"),
                t.print && n.apply(console, [e.join(" ") + " ", "background-color:#699f00;color:#fff;", "background-color:" + o + ";color:#fff;"])
            } catch (s) {}
    }
      , q = !0
      , T = function() {
        function n(e) {
            !function(e) {
                if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function")
            }(this),
            this.context = {
                "name": e || w
            }
        }
        var e, t, i;
        return e = n,
        i = [{
            "key": "setLevel",
            "value": function(e) {
                e && "value"in e && (n._filterLevel = e,
                u.write(v, e.value))
            }
        }, {
            "key": "getLevel",
            "value": function() {
                if (!n._filterLevel) {
                    var e, t = y.WARN;
                    for (e in y)
                        y[e].value === b && (t = y[e]);
                    n._filterLevel = t
                }
                return n._filterLevel
            }
        }, {
            "key": "getLog",
            "value": function() {
                return f + "\n\n\n **** ad log ****\n" + g
            }
        }, {
            "key": "saveImmediately",
            "value": function() {
                A()
            }
        }],
        (t = [{
            "key": "enabledFor",
            "value": function(e) {
                return e.value <= n.getLevel().value
            }
        }, {
            "key": "invoke",
            "value": function(e, t) {
                x(t, a({
                    "level": e,
                    "print": this.enabledFor(e)
                }, this.context))
            }
        }, {
            "key": "debug",
            "value": function() {
                this.invoke(y.DEBUG, arguments)
            }
        }, {
            "key": "log",
            "value": function() {
                var e = arguments[1];
                q && this.context.name === w && "string" == typeof e && /^w: overflow NALU found/.test(e) && (q = !1,
                this.emit("needFireLog")),
                this.invoke(y.INFO, arguments)
            }
        }, {
            "key": "info",
            "value": function() {
                this.invoke(y.INFO, arguments)
            }
        }, {
            "key": "adInfo",
            "value": function(e) {
                g = e
            }
        }, {
            "key": "warn",
            "value": function() {
                this.invoke(y.WARN, arguments)
            }
        }, {
            "key": "error",
            "value": function() {
                this.invoke(y.ERROR, arguments)
            }
        }]) && h(e.prototype, t),
        i && h(e, i),
        Object.defineProperty(e, "prototype", {
            "writable": !1
        }),
        n
    }();
    T.Levels = y;
    var I = 3e4
      , E = 524288;
    function A() {
        var e, t, n = f.length;
        E < n && (e = n - E,
        t = n,
        f = (n = f.split("\n").slice(0, 16).join("\n") + "\n~~~~~truncated log~~~~~\n") + f.slice(n.length < e ? e : n.length, t)),
        u.write(m, f + "\n\n\n **** ad log ****\n" + g)
    }
    setTimeout(function O() {
        p && (p = !1,
        A()),
        setTimeout(O, I)
    }, I);
    t["default"] = T
}
, function(t, n, r) {
    (function(a) {
        var e = function(e, t, n) {
            var i = r(12)
              , o = r(3)
              , s = r(11);
            n.exports = a.Class("Adapter", {
                "construct": function(e) {
                    this._options = e || {}
                },
                "methods": {
                    "init": function() {},
                    "render": function() {},
                    "renderHtml": function(e, t) {
                        return i.compile(e)(t)
                    },
                    "bindEvent": function() {},
                    "show": function(e) {
                        o.removeClass(e, "dn"),
                        this.rpage && (e = {
                            "rpage": this.rpage
                        },
                        this.block ? (e.block = this.block,
                        s.block(e)) : s.show(e))
                    },
                    "hide": function(e) {
                        o.addClass(e, "dn")
                    },
                    "destroy": function() {}
                }
            })
        }
        .call(n, r, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, r(0))
}
, function(t, n, i) {
    (function(a) {
        var e = function(e, t, n) {
            var o = i(2)
              , s = i(54);
            n.exports = {
                "show": function(e) {
                    e = this.getParam("22", e),
                    a.logServer(e)
                },
                "block": function(e) {
                    e = this.getParam("21", e),
                    a.logServer(e)
                },
                "click": function(e) {
                    e = this.getParam("20", e),
                    a.logServer(e)
                },
                "getParam": function(e, t) {
                    var n = s.isTablet() || navigator.platform.includes("MacIntel") && 1 < navigator.maxTouchPoints;
                    console.log("isPad", n, s.isTablet()),
                    console.log("navigator", navigator);
                    var i = o.getConfig()
                      , e = {
                        "p1": n ? "2_20_202" : "1_10_101",
                        "pu": a.cookie.get("P00003"),
                        "stime": (new Date).getTime(),
                        "u": i.deviceid || a.cookie.get("QC005") || "",
                        "t": e,
                        "s2": i.s2 || "",
                        "s3": i.s3 || "",
                        "s4": i.s4 || "",
                        "login_src": "0"
                    };
                    return i.pingback && (e = a.extend(e, i.pingback)),
                    e = a.extend(e, t)
                }
            }
        }
        .call(n, i, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, i(0))
}
, function(e, t, n) {
    function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    (t = function(e, t, n) {
        var C, s;
        !function(i) {
            "use strict";
            (C = function(e, t) {
                return C["string" == typeof t ? "compile" : "render"].apply(C, arguments)
            }
            ).version = "2.0.2",
            C.openTag = "<%",
            C.closeTag = "%>",
            C.isEscape = !0,
            C.isCompress = !1,
            C.parser = null,
            C.render = function(e, t) {
                return (C.get(e) || d({
                    "id": e,
                    "name": "Render Error",
                    "message": "No Template"
                }))(t)
            }
            ,
            C.compile = function(t, n) {
                var i, e = arguments, o = e[2], s = "anonymous";
                "string" != typeof n && (o = e[1],
                n = e[0],
                t = s);
                try {
                    i = l(t, n, o)
                } catch (r) {
                    return r.id = t || n,
                    r.name = "Syntax Error",
                    d(r)
                }
                function a(e) {
                    try {
                        return new i(e,t) + ""
                    } catch (r) {
                        return o ? d(r)() : C.compile(t, n, !0)(e)
                    }
                }
                return a.prototype = i.prototype,
                a.toString = function() {
                    return i.toString()
                }
                ,
                t !== s && (c[t] = a),
                a
            }
            ;
            var c = C.cache = {}
              , _ = C.helpers = {
                "$include": C.render,
                "$string": function(e, t) {
                    return "string" != typeof e && ("number" === (t = u(e)) ? e += "" : e = "function" === t ? _.$string(e()) : ""),
                    e
                },
                "$escape": function(e) {
                    var t = {
                        "<": "&#60;",
                        ">": "&#62;",
                        '"': "&#34;",
                        "'": "&#39;",
                        "&": "&#38;"
                    };
                    return _.$string(e).replace(/&(?![\w#]+;)|[<>"']/g, function(e) {
                        return t[e]
                    })
                },
                "$each": function(e, t) {
                    if ((Array.isArray || function(e) {
                        return "[object Array]" === {}.toString.call(e)
                    }
                    )(e))
                        for (var n = 0, i = e.length; n < i; n++)
                            t.call(e, e[n], n, e);
                    else
                        for (var o in e)
                            t.call(e, e[o], o)
                }
            };
            C.helper = function(e, t) {
                _[e] = t
            }
            ,
            C.onerror = function(e) {
                var t, n = "Template Error\n\n";
                for (t in e)
                    n += "<" + t + ">\n" + e[t] + "\n\n";
                try {
                    window.MITO && window.MITO.log({
                        "message": "渲染出错了",
                        "data": {
                            "msg": n
                        }
                    })
                } catch (e) {}
            }
            ,
            C.get = function(e) {
                var t, n;
                return c.hasOwnProperty(e) ? n = c[e] : "document"in i && ((t = document.getElementById(e)) && (t = t.value || t.innerHTML,
                n = C.compile(e, t.replace(/^\s*|\s*$/g, "")))),
                n
            }
            ;
            var w, n, o, s, a, r, k, d = function d(e) {
                return C.onerror(e),
                function() {
                    return "{Template Error}"
                }
            }, l = (w = _.$each,
            n = new RegExp(["\\/\\*[\\w\\W]*?\\*\\/", "\\/\\/[^\\n]*\\n", "\\/\\/[^\\n]*$", '"(?:[^"\\\\]|\\\\[\\w\\W])*"', "'(?:[^'\\\\]|\\\\[\\w\\W])*'", "[\\s\\t\\n]*\\.[\\s\\t\\n]*[$\\w\\.]+"].join("|"),"g"),
            o = /[^\w$]+/g,
            s = new RegExp(["\\b" + "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined".replace(/,/g, "\\b|\\b") + "\\b"].join("|"),"g"),
            a = /^\d[^,]*|,\d[^,]*/g,
            r = /^,+|,+$/g,
            k = function k(e) {
                var e = e.replace(n, "").replace(o, ",").replace(s, "").replace(a, "").replace(r, "").split(",")
                  , t = [];
                return w(e, function(e) {
                    "" != e && t.push(e)
                }),
                t
            }
            ,
            function(e, t, o) {
                var n = C.openTag
                  , s = C.closeTag
                  , a = C.parser
                  , i = t
                  , r = ""
                  , c = 1
                  , d = {
                    "$data": 1,
                    "$id": 1,
                    "$helpers": 1,
                    "$out": 1,
                    "$line": 1
                }
                  , l = {}
                  , u = "var $helpers=this," + (o ? "$line=0," : "")
                  , h = "".trim
                  , p = h ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"]
                  , h = h ? "if(content!==undefined){$out+=content;return content;}" : "$out.push(content);"
                  , f = "function(content){" + h + "}"
                  , g = "function(id,data){data=data||$data;var content=$helpers.$include(id,data,$id);" + h + "}";
                function m(e) {
                    return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
                }
                w(i.split(n), function(e, t) {
                    var n = (e = e.split(s))[0]
                      , i = e[1];
                    1 === e.length ? r += y(n) : (r += function(e) {
                        var t = c;
                        a ? e = a(e) : o && (e = e.replace(/\n/g, function() {
                            return "$line=" + ++c + ";"
                        }));
                        {
                            var n;
                            0 === e.indexOf("=") && (n = 0 !== e.indexOf("=="),
                            e = e.replace(/^=*|[\s;]*$/g, ""),
                            n && C.isEscape ? (n = e.replace(/\s*\([^\)]+\)/, ""),
                            _.hasOwnProperty(n) || /^(include|print)$/.test(n) || (e = "$escape(" + e + ")")) : e = "$string(" + e + ")",
                            e = p[1] + e + p[2])
                        }
                        o && (e = "$line=" + t + ";" + e);
                        return function(e) {
                            e = k(e),
                            w(e, function(e) {
                                var t, n;
                                d.hasOwnProperty(e) || ("print" === (t = e) ? n = f : "include" === t ? (l["$include"] = _["$include"],
                                n = g) : (n = "$data." + t,
                                _.hasOwnProperty(t) && (l[t] = _[t],
                                n = 0 === t.indexOf("$") ? "$helpers." + t : n + "===undefined?$helpers." + t + ":" + n)),
                                u += t + "=" + n + ",",
                                d[e] = !0)
                            })
                        }(e),
                        e + "\n"
                    }(n),
                    i && (r += y(i)))
                }),
                i = r,
                o && (i = "try{" + i + "}catch(e){throw {id:$id,name:'Render Error',message:e.message,line:$line,source:" + m(t) + ".split(/\\n/)[$line-1].replace(/^[\\s\\t]+/,'')};}"),
                i = u + p[0] + i + "return new String(" + p[3] + ");";
                try {
                    var v = new Function("$data","$id",i);
                    return v.prototype = l,
                    v
                } catch (b) {
                    throw b.temp = "function anonymous($data,$id) {" + i + "}",
                    b
                }
                function y(e) {
                    return c += e.split(/\n/).length - 1,
                    e = (e = C.isCompress ? e.replace(/[\n\r\t\s]+/g, " ").replace(/<!--.*?-->/g, "") : e) && p[1] + m(e) + p[2] + "\n"
                }
            }
            )
        }(window),
        (s = C).openTag = "{{",
        s.closeTag = "}}",
        s.parser = function(e) {
            var t = (e = e.replace(/^\s/, "")).split(" ")
              , n = t.shift()
              , i = t.join(" ");
            switch (n) {
            case "if":
                e = "if(" + i + "){";
                break;
            case "else":
                e = "}else" + (t = "if" === t.shift() ? " if(" + t.join(" ") + ")" : "") + "{";
                break;
            case "/if":
                e = "}";
                break;
            case "each":
                var o = t[0] || "$data";
                e = "$each(" + (o = "as" !== (t[1] || "as") ? "[]" : o) + ",function(" + ((t[2] || "$value") + "," + (t[3] || "$index")) + "){";
                break;
            case "/each":
                e = "});";
                break;
            case "echo":
                e = "print(" + i + ");";
                break;
            case "include":
                e = "include(" + t.join(",") + ");";
                break;
            default:
                e = s.helpers.hasOwnProperty(n) ? "==" + n + "(" + t.join(",") + ");" : "=" + (e = e.replace(/[\s;]*$/, ""))
            }
            return e
        }
        ,
        n.exports = C
    }
    .call(t, n, t, e)) === undefined || (e.exports = t)
}
, function(e, t, r) {
    t = function(e, t, n) {
        var i = r(59)
          , o = r(31)
          , s = r(2)
          , a = function a(e, t) {
            s.initConfig(t);
            var n = s.getConfig()
              , t = (e || "").replace(/-/gi, "_")
              , e = [];
            e.push(i.browserName()),
            e.push("CN"),
            e.push("pcwlogin"),
            e.push("agenttype_".concat(n.agenttype)),
            e.push(t),
            o.uploadLogToCompass(e.join("_"))
        };
        n.exports = a
    }
    .call(t, r, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, n) {
        var l = i(12)
          , u = i(3)
          , h = i(1)
          , p = i(61)
          , f = i(4)
          , r = i(11);
        n.exports = {
            "loginSuc": function(e, t) {
                var n = document.querySelector('[data-login-sdk="mask"]')
                  , t = l.compile(p)({
                    "type": "suc",
                    "icon": (null == t ? void 0 : t.icon) || "",
                    "nickname": (null == t ? void 0 : t.nickname) || "",
                    "tip": t.tip || "",
                    "title": t.title || "",
                    "isVip": t.isVip
                });
                e.innerHTML = t,
                u.removeClass(e, "dn"),
                u.removeClass(n, "dn")
            },
            "showTip": function(t, e) {
                e = l.compile(p)({
                    "type": "tip",
                    "tip": e.tip,
                    "btnTip": e.btnTip
                });
                t.innerHTML = e,
                u.removeClass(t, "dn");
                var n = t.querySelector('[data-toast="btn"]')
                  , i = function i(e) {
                    e.stopPropagation && e.stopPropagation(),
                    h.un(n, "click", i),
                    u.addClass(t, "dn")
                };
                h.on(n, "click", i)
            },
            "showMsg": function(e, t) {
                var n = l.compile(p)({
                    "type": "toast",
                    "tip": t.tip
                })
                  , t = t.time || 1800;
                e.innerHTML = n,
                u.removeClass(e, "dn"),
                setTimeout(function() {
                    u.addClass(e, "dn")
                }, t)
            },
            "showAgree": function(s, a) {
                var r = document.querySelector('[data-login-sdk="mask"]')
                  , c = document.querySelector('[data-protocol-btn="agree"]')
                  , e = l.compile(p)({
                    "type": null != a && null !== (e = a.tip) && void 0 !== e && e.type ? null == a || null === (t = a.tip) || void 0 === t ? void 0 : t.type : "agree",
                    "tip": a.tip
                });
                s.innerHTML = e,
                u.removeClass(s, "dn"),
                u.removeClass(r, "dn");
                var t = s.querySelector('[data-toast="btn-agree"]')
                  , e = s.querySelector('[data-toast="btn-cancel"]')
                  , d = function d(e) {
                    var t, n, i, o;
                    e.stopPropagation && e.stopPropagation(),
                    u.addClass(c, "agree-selected"),
                    u.removeClass(c, "iconfont-agree"),
                    u.addClass(s, "dn"),
                    u.addClass(r, "dn"),
                    "smsLogin" == a.tip ? f.fire({
                        "type": "agreeSmsLogin"
                    }) : "baseLogin" == a.tip ? f.fire({
                        "type": "agreeBaseLogin"
                    }) : "thrid" == (null == a || null === (t = a.tip) || void 0 === t ? void 0 : t.type) ? f.fire({
                        "type": "thridLogin",
                        "data": null == a || null === (i = a.tip) || void 0 === i ? void 0 : i.event
                    }) : "optLogin" == (null == a || null === (n = a.tip) || void 0 === n ? void 0 : n.type) && f.fire({
                        "type": "agreeOptLogin",
                        "data": null == a || null === (o = a.tip) || void 0 === o ? void 0 : o.code
                    })
                }
                  , i = function i(e) {
                    var t = document.querySelector('[data-login-sdk="agreementPop"]')
                      , n = document.querySelector('[data-login-sdk="agreementTriangle"]');
                    e.stopPropagation && e.stopPropagation(),
                    u.addClass(s, "dn"),
                    u.addClass(r, "dn"),
                    u.removeClass(t, "dn"),
                    u.removeClass(n, "dn")
                };
                h.on(t, "click", d),
                h.on(e, "click", i)
            },
            "showDel": function(t, e) {
                var n = e.tip || ""
                  , i = document.querySelector('[data-login-sdk="mask"]')
                  , o = l.compile(p)({
                    "type": "delOpt",
                    "tip": e.tip
                });
                t.innerHTML = o,
                r.block({
                    "rpage": "passsdkv2",
                    "block": "psprt_dl"
                }),
                u.removeClass(t, "dn"),
                u.removeClass(i, "dn");
                var e = t.querySelector('[data-toast="btn-sure"]')
                  , o = t.querySelector('[data-toast="btn-cancel"]')
                  , s = function s(e) {
                    e.stopPropagation && e.stopPropagation(),
                    r.click({
                        "rpage": "passsdkv2",
                        "block": "psprt_dl",
                        "rseat": "dl_login"
                    }),
                    u.addClass(t, "dn"),
                    u.addClass(i, "dn"),
                    f.fire({
                        "type": "delOpt",
                        "data": n
                    })
                }
                  , a = function a(e) {
                    e.stopPropagation && e.stopPropagation(),
                    r.click({
                        "rpage": "passsdkv2",
                        "block": "psprt_dl",
                        "rseat": "dl_quit"
                    }),
                    u.addClass(t, "dn"),
                    u.addClass(i, "dn")
                };
                h.on(e, "click", s),
                h.on(o, "click", a)
            },
            "showDeadLine": function(t, e) {
                var n = e.tip || ""
                  , i = document.querySelector('[data-login-sdk="mask"]')
                  , o = l.compile(p)({
                    "type": "deadLine",
                    "tip": e.tip
                });
                t.innerHTML = o,
                u.removeClass(t, "dn"),
                u.removeClass(i, "dn");
                var e = t.querySelector('[data-toast="btn-sure"]')
                  , o = t.querySelector('[data-toast="btn-cancel"]')
                  , s = function s(e) {
                    e.stopPropagation && e.stopPropagation(),
                    u.addClass(t, "dn"),
                    u.addClass(i, "dn"),
                    f.fire({
                        "type": "ddRemove",
                        "data": n
                    })
                }
                  , a = function a(e) {
                    e.stopPropagation && e.stopPropagation(),
                    r.click({
                        "rpage": "passsdkv2",
                        "block": "psprt_dl",
                        "rseat": "dl_quit"
                    }),
                    u.addClass(t, "dn"),
                    u.addClass(i, "dn")
                };
                h.on(e, "click", s),
                h.on(o, "click", a)
            },
            "showLogout": function(t, e) {
                var n = e.tip || ""
                  , i = document.querySelector('[data-login-sdk="mask"]')
                  , o = l.compile(p)({
                    "type": "login-quit",
                    "tip": e.tip
                });
                t.innerHTML = o,
                u.removeClass(t, "dn"),
                u.removeClass(i, "dn");
                var e = t.querySelector('[data-toast="btn-sure"]')
                  , o = t.querySelector('[data-toast="btn-cancel"]')
                  , s = function s(e) {
                    e.stopPropagation && e.stopPropagation(),
                    u.addClass(t, "dn"),
                    u.addClass(i, "dn"),
                    f.fire({
                        "type": "delOpt",
                        "data": n
                    })
                }
                  , a = function a(e) {
                    e.stopPropagation && e.stopPropagation(),
                    u.addClass(t, "dn"),
                    u.addClass(i, "dn")
                };
                h.on(e, "click", s),
                h.on(o, "click", a)
            },
            "callPca": function() {
                var t = document.querySelector('[data-login-sdk="panel"]').querySelector('[data-login-sdk="toast"]')
                  , e = l.compile(p)({
                    "type": "tip",
                    "tip": "非常抱歉，页面加载出错~",
                    "btnTip": "重试"
                });
                t.innerHTML = e,
                u.removeClass(t, "dn");
                var n = t.querySelector('[data-toast="btn"]')
                  , i = function i(e) {
                    e.stopPropagation && e.stopPropagation(),
                    h.un(n, "click", i);
                    window.external.js_app_service('{"call_type":"request", "cmd":"switch_pca_login", "cmd_context":"", "cmd_data":{}}'),
                    setTimeout(function() {
                        u.addClass(t, "dn")
                    }, 100)
                };
                h.on(n, "click", i)
            }
        }
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        n.exports = {
            "SITE_DOMAIN": "iqiyi.com",
            "getDomain": function() {
                if ("file:" == location.protocol)
                    return this.SITE_DOMAIN;
                var e = window.location.hostname.split(".");
                return (e = e.slice(e.length - 2)).join(".")
            },
            "isValidateDomain": function(e) {
                e = (e = e || window.location.hostname || "").split(".");
                return "iqiyi.com" == (e = (e = e.slice(e.length - 2)).join(".")) || "pps.tv" == e
            }
        }
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(t, n, o) {
    (function(i) {
        var e = function(e, t, n) {
            n.exports = {
                "rsaFun": function(e) {
                    var t = i.rsaUtils.getKeyPair("10001", "", "ab86b6371b5318aaa1d3c9e612a9f1264f372323c8c0f19875b5fc3b3fd3afcc1e5bec527aa94bfa85bffc157e4245aebda05389a5357b75115ac94f074aefcd");
                    return i.rsaUtils.encryptedString(t, encodeURIComponent(e)).replace(/\s/g, "-")
                }
            }
        }
        .call(n, o, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, o(0))
}
, function(e, t, i) {
    t = function(e, t, n) {
        var m = i(34)
          , v = function v(e, t, n) {
            var i, o = e.split("."), s = o.length - 1, a = 0;
            if (!n)
                try {
                    if (!new RegExp("^[a-zA-Z_$][a-zA-Z0-9_$]*$").test(o[0]))
                        throw "";
                    n = new Function("return " + o[0])(),
                    a = 1
                } catch (r) {
                    n = window
                }
            for (; a < s; a++)
                n[i = o[a]] || (n[i] = {}),
                n = n[i];
            n[o[s]] || (n[o[s]] = t)
        }
          , y = function y(e, t) {
            var n = t.ns && t.ns + "." + e;
            if (n)
                try {
                    var i = new Function("return " + n)();
                    if (i)
                        return i
                } catch (g) {}
            var o = t.extend || m
              , s = function s() {}
              , a = t.plugins || [];
            s.prototype = o.prototype;
            var r = t.construct || function() {}
              , c = t.properties || {}
              , d = t.methods || {}
              , l = t.statics || {}
              , u = new s;
            for (p in u)
                u.hasOwnProperty(p) && delete u[p];
            for (p in c)
                u[p] = c[p];
            for (p in d)
                u[p] = d[p];
            for (var h = 0; h < a.length; h++) {
                var p, f = a[h];
                for (p in f)
                    u[p] = f[p]
            }
            for (p in u.constructor = r,
            u.superclass = o,
            u.superinstance = new s,
            u.__NAME__ = e,
            r.prototype = u,
            l)
                r[p] = l[p];
            return n && v(n, r),
            r
        };
        n.exports = y
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = {
            "mail": function(e) {
                e = e.replace(/(^\s*)|(\s*$)/g, "");
                return /^([a-zA-Z0-9_\.\-])+@([0-9a-zA-Z][0-9a-zA-Z-]*\.)+[a-zA-Z]{2,4}$/.test(e)
            },
            "mobile": function(e, t) {
                var n = "86" == t && /^(1\d{10})$/.test(e.trim())
                  , i = "886" == t && /^\d{10}$/gi.test(e.trim())
                  , e = "86" != t && "886" != t && 4 < e.trim().length && e.trim().length < 20;
                return n || i || e
            },
            "trimSE": function(e) {
                return e.replace(/(^\s*)|(\s*$)/g, "")
            },
            "number": function(e) {
                return /^\d+(\.\d+)?$/.test(e)
            },
            "trimAllBlank": function(e) {
                return e.replace(/\s/g, "")
            },
            "isUpgrade": function(e, t) {
                if (!e)
                    return !1;
                for (var n = t.split("."), i = e.split("."), o = !0, s = 0; s < n.length; s++) {
                    if (parseInt(n[s]) < parseInt(i[s])) {
                        o = !0;
                        break
                    }
                    if (parseInt(n[s]) !== parseInt(i[s])) {
                        o = !1;
                        break
                    }
                }
                return o
            }
        };
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, s) {
    t = function(e, t, n) {
        var i = s(3)
          , o = s(14);
        n.exports = {
            "isAgree": function(e) {
                var t = document.querySelector('[data-login-sdk="panel"]')
                  , n = t.querySelector('[data-login-sdk="toast"]')
                  , t = t.querySelector('[data-login-sdk="protocol"]').querySelector('[data-protocol-btn="agree"]');
                return !(t && !i.hasClass(t, "agree-selected")) || (o.showAgree(n, {
                    "tip": e || ""
                }),
                !1)
            },
            "isAgreeTip": function(e) {
                var t = document.querySelector('[data-login-sdk="panel"]')
                  , n = t.querySelector('[data-login-sdk="toast"]')
                  , t = t.querySelector('[data-login-sdk="protocol"]').querySelector('[data-protocol-btn="agree"]');
                return !(t && !i.hasClass(t, "agree-selected")) || (o.showMsg(n, {
                    "tip": e || "请阅读并勾选页面底部的协议"
                }),
                !1)
            },
            "isDel": function(e) {
                var t = document.querySelector('[data-login-sdk="panel"]').querySelector('[data-login-sdk="toast"]');
                o.showDel(t, {
                    "tip": e || ""
                })
            },
            "isDeadLine": function(e) {
                var t = document.querySelector('[data-login-sdk="panel"]').querySelector('[data-login-sdk="toast"]');
                o.showDeadLine(t, {
                    "tip": e || ""
                })
            },
            "isQuitOpt": function(e) {
                var t = document.querySelector('[data-login-sdk="panel"]').querySelector('[data-login-sdk="toast"]');
                o.showLogout(t, {
                    "tip": e || ""
                })
            }
        }
    }
    .call(t, s, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, n) {
        var h = i(1)
          , p = i(29)
          , f = function f(e) {
            return RegExp("\\?").test(e) ? "&" : "?"
        }
          , g = function g(e, t) {
            var n = document.createElement("SCRIPT");
            return n.setAttribute("type", "text/javascript"),
            t && n.setAttribute("charset", t),
            n.setAttribute("src", e),
            document.getElementsByTagName("head")[0].appendChild(n),
            n
        }
          , m = function m(e) {
            e.clearAttributes && e.clearAttributes(),
            e && e.parentNode && e.parentNode.removeChild(e),
            e = null
        }
          , v = function v(e, t) {
            var n, i, o, s = t.data, a = t.timeout || 1e4, r = t.onsuccess, c = t.onfailure, d = "cb" + Math.floor(2147483648 * Math.random()).toString(36), l = "window.lib.__callbacks__." + d, u = window.lib.__callbacks__;
            r && (s["callback"] = l,
            t.sign && (s["qd_sc"] = p(s)),
            u[d] = function(e) {
                n && clearTimeout(n),
                r(e),
                delete u[d],
                m(i)
            }
            ,
            o = e + f(e) + h.jsonToQuery(s, window.encodeURIComponent)),
            i = g(o, t.charset),
            n = setTimeout(function() {
                m(i),
                c()
            }, a)
        };
        n.exports = v
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = {}
          , o = navigator.userAgent.toLowerCase()
          , s = (navigator.plugins,
        o.match(/trident/))
          , a = !s && o.match(/(ipad).*os\s([\d_]+)/)
          , r = !s && !a && o.match(/(iphone\sos)\s([\d_]+)/)
          , c = o.match(/(Android)\s+([\d.]+)/);
        i.IE11 = /rv\:11/.test(o),
        i.IE = /msie/.test(o) || i.IE11,
        i.OPERA = /opera/.test(o),
        i.MOZ = /gecko/.test(o),
        i.IE8 = /msie 8/.test(o),
        i.IE9 = /msie 9/.test(o),
        i.IE10 = /msie 10/.test(o),
        i.EDGE = /edge/.test(o),
        i.SAFARI = /safari/.test(o) && !/chrome/.test(o),
        i.mobileSafari = (/iPhone/i.test(navigator.platform) || /iPod/i.test(navigator.platform) || /iPad/i.test(navigator.userAgent)) && !!navigator.appVersion.match(/(?:Version\/)([\w\._]+)/),
        i.WEBKIT = /webkit/.test(o),
        i.CHROME = /chrome/.test(o),
        i.iPhone = /iphone os/.test(o) && !s,
        i.iPod = /iPod/i.test(o) && !s,
        i.android = /android/.test(o),
        i.iPhone4 = /iphone os [45]_/.test(o) && !s,
        i.iPad = /ipad/.test(o) && !s,
        i.WP = /windows phone/.test(o),
        i.baidu = /baidu/.test(o),
        i.mbaidu = /baidu/.test(o),
        i.m360 = /360/.test(o),
        i.muc = /uc/.test(o),
        i.mqq = /qq/.test(o),
        c && (i.version = c[2]),
        r && (i.ios = !0,
        i.version = r[2].replace(/_/g, ".")),
        a && (i.ios = !0,
        i.version = a[2].replace(/_/g, ".")),
        i.iPod && (i.ios = !0),
        i.lePad = /lepad_hls/.test(o),
        i.Mac = /macintosh/.test(o),
        i.TT = /tencenttraveler/.test(o),
        i.$360 = /360se/.test(o),
        i.ff = /firefox/.test(o),
        i.uc = /uc/.test(o),
        i.Maxthon = !1;
        try {
            i.html5Video = !!document.createElement("video").play
        } catch (l) {
            i.html5Video = !1
        }
        try {
            var d = window.external;
            i.Maxthon = !!d.max_version
        } catch (l) {}
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = function i(e) {
            return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)
        };
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, n) {
        var o = i(22)
          , s = function s(e, t, n) {
            var i;
            o(e) && (i = (n = n || {}).expires,
            "number" == typeof n.expires && (i = new Date).setTime(i.getTime() + n.expires),
            document.cookie = e + "=" + t + (n.path ? "; path=" + n.path : "") + (i ? "; expires=" + i.toGMTString() : "") + (n.domain ? "; domain=" + n.domain : "") + (n.secure ? "; secure" : ""))
        };
        n.exports = s
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = function i(e) {
            var t = document
              , t = "BackCompat" == t.compatMode ? t.body : t.documentElement;
            return window.innerHeight || t.clientHeight
        };
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = function i(e) {
            var t = document;
            return ("BackCompat" == t.compatMode ? t.body : t.documentElement).clientWidth || window.innerWidth
        };
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = function i() {
            var e = window
              , t = e.document
              , n = t.documentElement;
            return e.pageXOffset || n && n.scrollLeft || t.body.scrollLeft
        };
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = function i() {
            var e = window
              , t = e.document
              , n = t.documentElement;
            return e.pageYOffset || n && n.scrollTop || t.body.scrollTop
        };
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(t, n, r) {
    (function(g) {
        var e = function(e, t, n) {
            var i = r(10)
              , o = r(12)
              , l = r(1)
              , u = r(3)
              , h = r(4)
              , s = new (r(56))
              , a = r(62)
              , p = [{
                "name": "热门地区",
                "value": [{
                    "acode": "86",
                    "name": "中国大陆",
                    "selected": "selected"
                }, {
                    "acode": "886",
                    "name": "台湾",
                    "selected": ""
                }]
            }]
              , f = [{
                "name": "热门地区",
                "value": []
            }];
            n.exports = g.Class("areaListAction", {
                "extend": i,
                "construct": function(e) {
                    this.fireName = e.fireName,
                    this.panel = e.panel,
                    this.acode = p[0].value[0].acode,
                    this.name = p[0].value[0].name
                },
                "methods": {
                    "render": function() {
                        var t = this;
                        this.getAreaList(function(e) {
                            e = o.compile(a)({
                                "lists": e
                            });
                            t.panel.innerHTML = e,
                            t.bindEvent()
                        })
                    },
                    "getAreaList": function(l) {
                        var u = this;
                        1 < f.length ? l(f) : s.getAreacode(function(e) {
                            var t, n, i = "", o = "";
                            if ("A00000" == e.code && e.data) {
                                acode = e.data.acode;
                                var s = null == e || null === (t = e.data) || void 0 === t ? void 0 : t.areas;
                                if (e.data.local && (i = e.data.local.acode,
                                o = e.data.local.name),
                                null != e && null !== (n = e.data) && void 0 !== n && n.hotareas && e.data.hotareas.forEach(function(e) {
                                    f[0].value.push(e)
                                }),
                                s)
                                    for (var a = !1, r = null, c = 0; c < s.length; c++) {
                                        var d = s[c].key;
                                        f.forEach(function(e, t) {
                                            e.name == d && (a = !0,
                                            r = t)
                                        }),
                                        a ? f[r].value.push(s[c].value[0]) : f.push({
                                            "name": d,
                                            "value": s[c].value
                                        }),
                                        a = !1
                                    }
                                e.data.local && (i = e.data.local.acode,
                                o = e.data.local.name)
                            } else
                                f = p,
                                window.MITO && window.MITO.log({
                                    "message": "区域列表接口get_support_areacode.action失败",
                                    "data": e
                                });
                            u.acode = i || u.acode,
                            u.name = o || u.name,
                            l(f)
                        })
                    },
                    "bindEvent": function() {
                        var n = this
                          , e = this.panel.querySelector('[data-area="panel"]')
                          , i = this.panel.querySelector('[data-area="listPanel"]')
                          , t = this.panel.querySelector('[data-area="icon"]')
                          , o = this.panel.querySelector('[data-area="show"]')
                          , s = function s(e) {
                            (e = e || window.event).stopPropagation && e.stopPropagation(),
                            u.removeClass(i, "dn"),
                            u.addClass(o, "hover-style"),
                            u.removeClass(t, "iconfont-buttom"),
                            u.addClass(t, "iconfont-up")
                        };
                        l.on(e, "click", s);
                        for (var a = this.panel.querySelectorAll("[data-area-acode]"), r = function r(e) {
                            (e = e || window.event).stopPropagation && e.stopPropagation();
                            var t = e.target || e.srcElement
                              , e = t.getAttribute("data-area-acode")
                              , t = t.getAttribute("data-area-name");
                            e != n.acode && (n.resetAcode(e, t),
                            h.fire({
                                "type": "globalAcodeChange",
                                "data": {
                                    "acode": e,
                                    "name": t
                                }
                            })),
                            u.addClass(i, "dn")
                        }, c = 0; c < a.length; c++)
                            l.on(a[c], "click", r);
                        var d = function d(e) {
                            (e = e || window.event).stopPropagation && e.stopPropagation(),
                            u.addClass(i, "dn"),
                            u.removeClass(o, "hover-style"),
                            u.addClass(t, "iconfont-buttom"),
                            u.removeClass(t, "iconfont-up")
                        };
                        l.on(i, "mouseover", s),
                        l.on(i, "mouseout", d),
                        g.browser.iPad && h.on("hideArea", function() {
                            u.addClass(i, "dn")
                        })
                    },
                    "getAcode": function() {
                        return {
                            "acode": this.acode,
                            "name": this.name
                        }
                    },
                    "resetAcode": function(e, t) {
                        var n, i;
                        e != this.acode && (n = this.panel.querySelector('[data-area="show"]'),
                        i = this.panel.querySelectorAll('[data-area-acode="' + e + '"]'),
                        u.removeClass(this.panel.querySelector('[data-area-acode="' + this.acode + '"]'), "selected"),
                        u.addClass(i, "selected"),
                        n.innerHTML = "+" + e,
                        this.acode = e,
                        this.name = t,
                        h.fire({
                            "type": this.fireName,
                            "data": e
                        }))
                    }
                }
            })
        }
        .call(n, r, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, r(0))
}
, function(t, n, a) {
    (function(s) {
        var e = function(e, t, n) {
            var i = a(1)
              , o = a(2);
            n.exports = function(e, t) {
                var n = o.getConfig()
                  , e = i.jsonToQuery(e)
                  , e = decodeURIComponent(e);
                return s.md5(e + (t || n.secretKey))
            }
        }
        .call(n, a, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, a(0))
}
, function(t, n, p) {
    (function(h) {
        var e = function(e, t, n) {
            var i, a = p(3), o = p(18), r = p(4), c = p(1), s = "请填写正确的手机号", d = "邮箱格式错误，请重新输入", l = "系统异常，请重试", u = p(9);
            (i = function i(e) {
                this.name = e.name,
                this.nameErr = e.nameErr,
                this.mailPanel = e.mailPanel,
                this.acode = e.acode,
                this.fireEnableName = e.fireEnableName,
                this.zoneChangeFireName = e.zoneChangeFireName,
                this.logger = new u.LoginLogger("QiyiLoginLoader")
            }
            ).prototype = {
                "init": function() {
                    this._bindEvent()
                },
                "_bindEvent": function() {
                    var t = this;
                    t._nameEvent(),
                    r.on(t.zoneChangeFireName, function(e) {
                        t.acode = e.data;
                        e = t.name.value.trim();
                        e && o.number(e) && (e = t.checkNameValidate(!0),
                        r.fire({
                            "type": t.fireEnableName,
                            "data": {
                                "enable": e
                            }
                        }))
                    })
                },
                "_nameEvent": function() {
                    var t, n = this, i = function i(e) {
                        e.stopPropagation && e.stopPropagation(),
                        n.clearErrMsg()
                    };
                    c.on(n.name, "click", i),
                    h.browser.iPad && (t = function t(e) {
                        r.fire({
                            "type": "hideArea"
                        })
                    }
                    ,
                    c.on(n.name, "touchend", t));
                    var o = function o(e) {
                        n.mailPanel && a.addClass(this.mailPanel, "dn");
                        var t = n.checkNameValidate(!0);
                        r.fire({
                            "type": n.fireEnableName,
                            "data": {
                                "enable": t
                            }
                        })
                    };
                    c.on(n.name, "blur", o);
                    var s = function s(e) {
                        e.stopPropagation && e.stopPropagation(),
                        n.clearErrMsg();
                        e = n.checkNameValidate();
                        r.fire({
                            "type": n.fireEnableName,
                            "data": {
                                "enable": e
                            }
                        })
                    };
                    c.on(n.name, "keyup", s),
                    c.on(n.name, "input", s)
                },
                "checkNameValidate": function(e) {
                    var t = this.name.value.trim();
                    return t ? o.number(t) ? this.checkMobileValidate(t, e) : this.mailPanel ? this.checkEmaiValidate(t, e) : e ? (this.showErrMsg(s),
                    !1) : void 0 : (this.name.value = "",
                    this.hideErrMsg(),
                    !1)
                },
                "checkMobileValidate": function(e, t) {
                    return o.mobile(e, this.acode) ? (this.hideErrMsg(),
                    !0) : t ? (this.showErrMsg(s),
                    !1) : void 0
                },
                "checkEmaiValidate": function(e, t) {
                    return 1 <= e.indexOf("@") && o.mail(e) ? (this.hideErrMsg(),
                    !0) : t ? (this.showErrMsg(d),
                    !1) : void 0
                },
                "showErrMsg": function(e) {
                    var t = window.navigator.onLine;
                    this.nameErr.innerHTML = t ? e || l : "网络连接失败 ，请检查网络设置",
                    a.removeClass(this.nameErr, "dn"),
                    a.addClass(this.namePlaceholder, "dn"),
                    e || this.logger.warn("error information show nameErr is not have msg")
                },
                "hideErrMsg": function() {
                    a.addClass(this.nameErr, "dn")
                },
                "showPhoneMsg": function(e) {
                    e || this.logger.warn("error information show nameErr is not have msg"),
                    this.showErrMsg(e || l)
                },
                "clearErrMsg": function() {
                    this.hideErrMsg()
                }
            },
            n.exports = i
        }
        .call(n, p, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, p(0))
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    (function d(e) {
        return function(e) {
            if (!(e instanceof d))
                throw new TypeError("Cannot call a class as a function")
        }(this),
        this.console = console,
        this.name = e,
        d.ExternalLogger && (this.console = new d.ExternalLogger(e)),
        this.console
    }
    );
    var o = n(9);
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var i = function() {
        function t(e) {
            return function(e) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this),
            new t.loginLoggers(e)
        }
        var e, n, i;
        return e = t,
        i = [{
            "key": "loginLoggers",
            "get": function() {
                return o["LoginLogger"]
            }
        }, {
            "key": "levels",
            "get": function() {
                return t.loginLoggers.Levels
            }
        }, {
            "key": "setLevel",
            "value": function(e) {
                t.loginLoggers.setLevel(e)
            }
        }, {
            "key": "getLevel",
            "value": function() {
                return t.loginLoggers.getLevel()
            }
        }, {
            "key": "getLog",
            "value": function() {
                return t.loginLoggers.getLog()
            }
        }, {
            "key": "saveImmediately",
            "value": function() {
                t.loginLoggers.saveImmediately()
            }
        }],
        (n = null) && s(e.prototype, n),
        i && s(e, i),
        Object.defineProperty(e, "prototype", {
            "writable": !1
        }),
        t
    }();
    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    var r = function l(i, o, s) {
        function a(t, e) {
            if (!o[t]) {
                if (!i[t]) {
                    if (r)
                        return r(t, !0);
                    var n = new Error("Cannot find module '" + t + "'");
                    throw n.code = "MODULE_NOT_FOUND",
                    n
                }
                n = o[t] = {
                    "exports": {}
                },
                i[t][0].call(n.exports, function(e) {
                    return a(i[t][1][e] || e)
                }, n, n.exports, l, i, o, s)
            }
            return o[t].exports
        }
        for (var r = !1, e = 0; e < s.length; e++)
            a(s[e]);
        return a
    }({
        "1": [function(e, t, n) {
            var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
            n.assign = function(e) {
                for (var t, n, i = Array.prototype.slice.call(arguments, 1); i.length; ) {
                    var o = i.shift();
                    if (o) {
                        if ("object" !== a(o))
                            throw new TypeError(o + "must be non-object");
                        for (var s in o)
                            t = o,
                            n = s,
                            Object.prototype.hasOwnProperty.call(t, n) && (e[s] = o[s])
                    }
                }
                return e
            }
            ,
            n.shrinkBuf = function(e, t) {
                return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t,
                e)
            }
            ;
            var o = {
                "arraySet": function(e, t, n, i, o) {
                    if (t.subarray && e.subarray)
                        e.set(t.subarray(n, n + i), o);
                    else
                        for (var s = 0; s < i; s++)
                            e[o + s] = t[n + s]
                },
                "flattenChunks": function(e) {
                    for (var t, n, i, o = 0, s = 0, a = e.length; s < a; s++)
                        o += e[s].length;
                    for (i = new Uint8Array(o),
                    s = t = 0,
                    a = e.length; s < a; s++)
                        n = e[s],
                        i.set(n, t),
                        t += n.length;
                    return i
                }
            }
              , s = {
                "arraySet": function(e, t, n, i, o) {
                    for (var s = 0; s < i; s++)
                        e[o + s] = t[n + s]
                },
                "flattenChunks": function(e) {
                    return [].concat.apply([], e)
                }
            };
            n.setTyped = function(e) {
                e ? (n.Buf8 = Uint8Array,
                n.Buf16 = Uint16Array,
                n.Buf32 = Int32Array,
                n.assign(n, o)) : (n.Buf8 = Array,
                n.Buf16 = Array,
                n.Buf32 = Array,
                n.assign(n, s))
            }
            ,
            n.setTyped(i)
        }
        , {}],
        "2": [function(e, t, n) {
            var c = e("./common")
              , o = !0
              , s = !0;
            try {
                String.fromCharCode.apply(null, [0])
            } catch (a) {
                o = !1
            }
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (a) {
                s = !1
            }
            for (var d = new c.Buf8(256), i = 0; i < 256; i++)
                d[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
            function l(e, t) {
                if (t < 65534 && (e.subarray && s || !e.subarray && o))
                    return String.fromCharCode.apply(null, c.shrinkBuf(e, t));
                for (var n = "", i = 0; i < t; i++)
                    n += String.fromCharCode(e[i]);
                return n
            }
            d[254] = d[254] = 1,
            n.string2buf = function(e) {
                for (var t, n, i, o, s = e.length, a = 0, r = 0; r < s; r++)
                    55296 == (64512 & (n = e.charCodeAt(r))) && r + 1 < s && 56320 == (64512 & (i = e.charCodeAt(r + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320),
                    r++),
                    a += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
                for (t = new c.Buf8(a),
                r = o = 0; o < a; r++)
                    55296 == (64512 & (n = e.charCodeAt(r))) && r + 1 < s && 56320 == (64512 & (i = e.charCodeAt(r + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320),
                    r++),
                    n < 128 ? t[o++] = n : (n < 2048 ? t[o++] = 192 | n >>> 6 : (n < 65536 ? t[o++] = 224 | n >>> 12 : (t[o++] = 240 | n >>> 18,
                    t[o++] = 128 | n >>> 12 & 63),
                    t[o++] = 128 | n >>> 6 & 63),
                    t[o++] = 128 | 63 & n);
                return t
            }
            ,
            n.buf2binstring = function(e) {
                return l(e, e.length)
            }
            ,
            n.binstring2buf = function(e) {
                for (var t = new c.Buf8(e.length), n = 0, i = t.length; n < i; n++)
                    t[n] = e.charCodeAt(n);
                return t
            }
            ,
            n.buf2string = function(e, t) {
                for (var n, i, o = t || e.length, s = new Array(2 * o), a = 0, r = 0; r < o; )
                    if ((n = e[r++]) < 128)
                        s[a++] = n;
                    else if (4 < (i = d[n]))
                        s[a++] = 65533,
                        r += i - 1;
                    else {
                        for (n &= 2 === i ? 31 : 3 === i ? 15 : 7; 1 < i && r < o; )
                            n = n << 6 | 63 & e[r++],
                            i--;
                        1 < i ? s[a++] = 65533 : n < 65536 ? s[a++] = n : (n -= 65536,
                        s[a++] = 55296 | n >> 10 & 1023,
                        s[a++] = 56320 | 1023 & n)
                    }
                return l(s, a)
            }
            ,
            n.utf8border = function(e, t) {
                for (var n = (t = (t = t || e.length) > e.length ? e.length : t) - 1; 0 <= n && 128 == (192 & e[n]); )
                    n--;
                return !(n < 0) && 0 !== n && n + d[e[n]] > t ? n : t
            }
        }
        , {
            "./common": 1
        }],
        "3": [function(e, t, n) {
            t.exports = function(e, t, n, i) {
                for (var o = 65535 & e | 0, s = e >>> 16 & 65535 | 0, a = 0; 0 !== n; ) {
                    for (a = 2e3 < n ? 2e3 : n,
                    n -= a; s = s + (o = o + t[i++] | 0) | 0,
                    --a; )
                        ;
                    o %= 65521,
                    s %= 65521
                }
                return o | s << 16 | 0
            }
        }
        , {}],
        "4": [function(e, t, n) {
            var r = function() {
                for (var e, t = [], n = 0; n < 256; n++) {
                    e = n;
                    for (var i = 0; i < 8; i++)
                        e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                    t[n] = e
                }
                return t
            }();
            t.exports = function(e, t, n, i) {
                var o = r
                  , s = i + n;
                e ^= -1;
                for (var a = i; a < s; a++)
                    e = e >>> 8 ^ o[255 & (e ^ t[a])];
                return -1 ^ e
            }
        }
        , {}],
        "5": [function(e, t, n) {
            var r, u = e("../utils/common"), c = e("./trees"), h = e("./adler32"), p = e("./crc32"), i = e("./messages"), d = 0, l = 4, f = 0, g = -2, m = -1, v = 4, o = 2, y = 8, b = 9, s = 286, a = 30, _ = 19, w = 2 * s + 1, k = 15, C = 3, S = 258, P = S + C + 1, L = 42, x = 113, q = 1, T = 2, I = 3, E = 4;
            function A(e, t) {
                return e.msg = i[t],
                t
            }
            function O(e) {
                return (e << 1) - (4 < e ? 9 : 0)
            }
            function D(e) {
                for (var t = e.length; 0 <= --t; )
                    e[t] = 0
            }
            function B(e) {
                var t = e.state
                  , n = t.pending;
                0 !== (n = n > e.avail_out ? e.avail_out : n) && (u.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out),
                e.next_out += n,
                t.pending_out += n,
                e.total_out += n,
                e.avail_out -= n,
                t.pending -= n,
                0 === t.pending && (t.pending_out = 0))
            }
            function N(e, t) {
                c._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t),
                e.block_start = e.strstart,
                B(e.strm)
            }
            function j(e, t) {
                e.pending_buf[e.pending++] = t
            }
            function F(e, t) {
                e.pending_buf[e.pending++] = t >>> 8 & 255,
                e.pending_buf[e.pending++] = 255 & t
            }
            function M(e, t) {
                var n, i, o = e.max_chain_length, s = e.strstart, a = e.prev_length, r = e.nice_match, c = e.strstart > e.w_size - P ? e.strstart - (e.w_size - P) : 0, d = e.window, l = e.w_mask, u = e.prev, h = e.strstart + S, p = d[s + a - 1], f = d[s + a];
                e.prev_length >= e.good_match && (o >>= 2),
                r > e.lookahead && (r = e.lookahead);
                do {
                    if (d[(n = t) + a] === f && d[n + a - 1] === p && d[n] === d[s] && d[++n] === d[s + 1]) {
                        for (s += 2,
                        n++; d[++s] === d[++n] && d[++s] === d[++n] && d[++s] === d[++n] && d[++s] === d[++n] && d[++s] === d[++n] && d[++s] === d[++n] && d[++s] === d[++n] && d[++s] === d[++n] && s < h; )
                            ;
                        if (i = S - (h - s),
                        s = h - S,
                        a < i) {
                            if (e.match_start = t,
                            r <= (a = i))
                                break;
                            p = d[s + a - 1],
                            f = d[s + a]
                        }
                    }
                } while ((t = u[t & l]) > c && 0 != --o);
                return a <= e.lookahead ? a : e.lookahead
            }
            function R(e) {
                var t, n, i, o, s, a, r, c, d, l = e.w_size;
                do {
                    if (d = e.window_size - e.lookahead - e.strstart,
                    e.strstart >= l + (l - P)) {
                        for (u.arraySet(e.window, e.window, l, l, 0),
                        e.match_start -= l,
                        e.strstart -= l,
                        e.block_start -= l,
                        n = e.hash_size,
                        t = n; i = e.head[--t],
                        e.head[t] = l <= i ? i - l : 0,
                        --n; )
                            ;
                        for (n = l,
                        t = n; i = e.prev[--t],
                        e.prev[t] = l <= i ? i - l : 0,
                        --n; )
                            ;
                        d += l
                    }
                    if (0 === e.strm.avail_in)
                        break;
                    if (s = e.strm,
                    a = e.window,
                    r = e.strstart + e.lookahead,
                    c = d,
                    d = void 0,
                    d = s.avail_in,
                    n = 0 === (d = c < d ? c : d) ? 0 : (s.avail_in -= d,
                    u.arraySet(a, s.input, s.next_in, d, r),
                    1 === s.state.wrap ? s.adler = h(s.adler, a, d, r) : 2 === s.state.wrap && (s.adler = p(s.adler, a, d, r)),
                    s.next_in += d,
                    s.total_in += d,
                    d),
                    e.lookahead += n,
                    e.lookahead + e.insert >= C)
                        for (o = e.strstart - e.insert,
                        e.ins_h = e.window[o],
                        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + C - 1]) & e.hash_mask,
                        e.prev[o & e.w_mask] = e.head[e.ins_h],
                        e.head[e.ins_h] = o,
                        o++,
                        e.insert--,
                        !(e.lookahead + e.insert < C)); )
                            ;
                } while (e.lookahead < P && 0 !== e.strm.avail_in)
            }
            function z(e, t) {
                for (var n, i; ; ) {
                    if (e.lookahead < P) {
                        if (R(e),
                        e.lookahead < P && t === d)
                            return q;
                        if (0 === e.lookahead)
                            break
                    }
                    if (n = 0,
                    e.lookahead >= C && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask,
                    n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                    e.head[e.ins_h] = e.strstart),
                    0 !== n && e.strstart - n <= e.w_size - P && (e.match_length = M(e, n)),
                    e.match_length >= C)
                        if (i = c._tr_tally(e, e.strstart - e.match_start, e.match_length - C),
                        e.lookahead -= e.match_length,
                        e.match_length <= e.max_lazy_match && e.lookahead >= C) {
                            for (e.match_length--; e.strstart++,
                            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask,
                            n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                            e.head[e.ins_h] = e.strstart,
                            0 != --e.match_length; )
                                ;
                            e.strstart++
                        } else
                            e.strstart += e.match_length,
                            e.match_length = 0,
                            e.ins_h = e.window[e.strstart],
                            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                    else
                        i = c._tr_tally(e, 0, e.window[e.strstart]),
                        e.lookahead--,
                        e.strstart++;
                    if (i && (N(e, !1),
                    0 === e.strm.avail_out))
                        return q
                }
                return e.insert = e.strstart < C - 1 ? e.strstart : C - 1,
                t === l ? (N(e, !0),
                0 === e.strm.avail_out ? I : E) : e.last_lit && (N(e, !1),
                0 === e.strm.avail_out) ? q : T
            }
            function V(e, t) {
                for (var n, i, o; ; ) {
                    if (e.lookahead < P) {
                        if (R(e),
                        e.lookahead < P && t === d)
                            return q;
                        if (0 === e.lookahead)
                            break
                    }
                    if (n = 0,
                    e.lookahead >= C && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask,
                    n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                    e.head[e.ins_h] = e.strstart),
                    e.prev_length = e.match_length,
                    e.prev_match = e.match_start,
                    e.match_length = C - 1,
                    0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - P && (e.match_length = M(e, n),
                    e.match_length <= 5 && (1 === e.strategy || e.match_length === C && 4096 < e.strstart - e.match_start) && (e.match_length = C - 1)),
                    e.prev_length >= C && e.match_length <= e.prev_length) {
                        for (o = e.strstart + e.lookahead - C,
                        i = c._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - C),
                        e.lookahead -= e.prev_length - 1,
                        e.prev_length -= 2; ++e.strstart <= o && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask,
                        n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                        e.head[e.ins_h] = e.strstart),
                        0 != --e.prev_length; )
                            ;
                        if (e.match_available = 0,
                        e.match_length = C - 1,
                        e.strstart++,
                        i && (N(e, !1),
                        0 === e.strm.avail_out))
                            return q
                    } else if (e.match_available) {
                        if ((i = c._tr_tally(e, 0, e.window[e.strstart - 1])) && N(e, !1),
                        e.strstart++,
                        e.lookahead--,
                        0 === e.strm.avail_out)
                            return q
                    } else
                        e.match_available = 1,
                        e.strstart++,
                        e.lookahead--
                }
                return e.match_available && (i = c._tr_tally(e, 0, e.window[e.strstart - 1]),
                e.match_available = 0),
                e.insert = e.strstart < C - 1 ? e.strstart : C - 1,
                t === l ? (N(e, !0),
                0 === e.strm.avail_out ? I : E) : e.last_lit && (N(e, !1),
                0 === e.strm.avail_out) ? q : T
            }
            function Q(e, t, n, i, o) {
                this.good_length = e,
                this.max_lazy = t,
                this.nice_length = n,
                this.max_chain = i,
                this.func = o
            }
            function U() {
                this.strm = null,
                this.status = 0,
                this.pending_buf = null,
                this.pending_buf_size = 0,
                this.pending_out = 0,
                this.pending = 0,
                this.wrap = 0,
                this.gzhead = null,
                this.gzindex = 0,
                this.method = y,
                this.last_flush = -1,
                this.w_size = 0,
                this.w_bits = 0,
                this.w_mask = 0,
                this.window = null,
                this.window_size = 0,
                this.prev = null,
                this.head = null,
                this.ins_h = 0,
                this.hash_size = 0,
                this.hash_bits = 0,
                this.hash_mask = 0,
                this.hash_shift = 0,
                this.block_start = 0,
                this.match_length = 0,
                this.prev_match = 0,
                this.match_available = 0,
                this.strstart = 0,
                this.match_start = 0,
                this.lookahead = 0,
                this.prev_length = 0,
                this.max_chain_length = 0,
                this.max_lazy_match = 0,
                this.level = 0,
                this.strategy = 0,
                this.good_match = 0,
                this.nice_match = 0,
                this.dyn_ltree = new u.Buf16(2 * w),
                this.dyn_dtree = new u.Buf16(2 * (2 * a + 1)),
                this.bl_tree = new u.Buf16(2 * (2 * _ + 1)),
                D(this.dyn_ltree),
                D(this.dyn_dtree),
                D(this.bl_tree),
                this.l_desc = null,
                this.d_desc = null,
                this.bl_desc = null,
                this.bl_count = new u.Buf16(k + 1),
                this.heap = new u.Buf16(2 * s + 1),
                D(this.heap),
                this.heap_len = 0,
                this.heap_max = 0,
                this.depth = new u.Buf16(2 * s + 1),
                D(this.depth),
                this.l_buf = 0,
                this.lit_bufsize = 0,
                this.last_lit = 0,
                this.d_buf = 0,
                this.opt_len = 0,
                this.static_len = 0,
                this.matches = 0,
                this.insert = 0,
                this.bi_buf = 0,
                this.bi_valid = 0
            }
            function H(e) {
                var t;
                return e && e.state ? (e.total_in = e.total_out = 0,
                e.data_type = o,
                (t = e.state).pending = 0,
                t.pending_out = 0,
                t.wrap < 0 && (t.wrap = -t.wrap),
                t.status = t.wrap ? L : x,
                e.adler = 2 === t.wrap ? 0 : 1,
                t.last_flush = d,
                c._tr_init(t),
                f) : A(e, g)
            }
            function K(e) {
                var t = H(e);
                return t === f && ((e = e.state).window_size = 2 * e.w_size,
                D(e.head),
                e.max_lazy_match = r[e.level].max_lazy,
                e.good_match = r[e.level].good_length,
                e.nice_match = r[e.level].nice_length,
                e.max_chain_length = r[e.level].max_chain,
                e.strstart = 0,
                e.block_start = 0,
                e.lookahead = 0,
                e.insert = 0,
                e.match_length = e.prev_length = C - 1,
                e.match_available = 0,
                e.ins_h = 0),
                t
            }
            function $(e, t, n, i, o, s) {
                if (!e)
                    return g;
                var a = 1;
                if (t === m && (t = 6),
                i < 0 ? (a = 0,
                i = -i) : 15 < i && (a = 2,
                i -= 16),
                o < 1 || b < o || n !== y || i < 8 || 15 < i || t < 0 || 9 < t || s < 0 || v < s)
                    return A(e, g);
                8 === i && (i = 9);
                var r = new U;
                return (e.state = r).strm = e,
                r.wrap = a,
                r.gzhead = null,
                r.w_bits = i,
                r.w_size = 1 << r.w_bits,
                r.w_mask = r.w_size - 1,
                r.hash_bits = o + 7,
                r.hash_size = 1 << r.hash_bits,
                r.hash_mask = r.hash_size - 1,
                r.hash_shift = ~~((r.hash_bits + C - 1) / C),
                r.window = new u.Buf8(2 * r.w_size),
                r.head = new u.Buf16(r.hash_size),
                r.prev = new u.Buf16(r.w_size),
                r.lit_bufsize = 1 << o + 6,
                r.pending_buf_size = 4 * r.lit_bufsize,
                r.pending_buf = new u.Buf8(r.pending_buf_size),
                r.d_buf = +r.lit_bufsize,
                r.l_buf = 3 * r.lit_bufsize,
                r.level = t,
                r.strategy = s,
                r.method = n,
                K(e)
            }
            r = [new Q(0,0,0,0,function(e, t) {
                var n = 65535;
                for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
                    if (e.lookahead <= 1) {
                        if (R(e),
                        0 === e.lookahead && t === d)
                            return q;
                        if (0 === e.lookahead)
                            break
                    }
                    e.strstart += e.lookahead,
                    e.lookahead = 0;
                    var i = e.block_start + n;
                    if ((0 === e.strstart || e.strstart >= i) && (e.lookahead = e.strstart - i,
                    e.strstart = i,
                    N(e, !1),
                    0 === e.strm.avail_out))
                        return q;
                    if (e.strstart - e.block_start >= e.w_size - P && (N(e, !1),
                    0 === e.strm.avail_out))
                        return q
                }
                return e.insert = 0,
                t === l ? (N(e, !0),
                0 === e.strm.avail_out ? I : E) : (e.strstart > e.block_start && (N(e, !1),
                e.strm.avail_out),
                q)
            }
            ), new Q(4,4,8,4,z), new Q(4,5,16,8,z), new Q(4,6,32,32,z), new Q(4,4,16,16,V), new Q(8,16,32,32,V), new Q(8,16,128,128,V), new Q(8,32,128,256,V), new Q(32,128,258,1024,V), new Q(32,258,258,4096,V)],
            n.deflateInit = function(e, t) {
                return $(e, t, y, 15, 8, 0)
            }
            ,
            n.deflateInit2 = $,
            n.deflateReset = K,
            n.deflateResetKeep = H,
            n.deflateSetHeader = function(e, t) {
                return !e || !e.state || 2 !== e.state.wrap ? g : (e.state.gzhead = t,
                f)
            }
            ,
            n.deflate = function(e, t) {
                var n, i, o, s;
                if (!e || !e.state || 5 < t || t < 0)
                    return e ? A(e, g) : g;
                if (n = e.state,
                !e.output || !e.input && 0 !== e.avail_in || 666 === n.status && t !== l)
                    return A(e, 0 === e.avail_out ? -5 : g);
                if (n.strm = e,
                a = n.last_flush,
                n.last_flush = t,
                n.status === L && (2 === n.wrap ? (e.adler = 0,
                j(n, 31),
                j(n, 139),
                j(n, 8),
                n.gzhead ? (j(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)),
                j(n, 255 & n.gzhead.time),
                j(n, n.gzhead.time >> 8 & 255),
                j(n, n.gzhead.time >> 16 & 255),
                j(n, n.gzhead.time >> 24 & 255),
                j(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0),
                j(n, 255 & n.gzhead.os),
                n.gzhead.extra && n.gzhead.extra.length && (j(n, 255 & n.gzhead.extra.length),
                j(n, n.gzhead.extra.length >> 8 & 255)),
                n.gzhead.hcrc && (e.adler = p(e.adler, n.pending_buf, n.pending, 0)),
                n.gzindex = 0,
                n.status = 69) : (j(n, 0),
                j(n, 0),
                j(n, 0),
                j(n, 0),
                j(n, 0),
                j(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0),
                j(n, 3),
                n.status = x)) : (s = y + (n.w_bits - 8 << 4) << 8,
                s |= (2 <= n.strategy || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6,
                0 !== n.strstart && (s |= 32),
                s += 31 - s % 31,
                n.status = x,
                F(n, s),
                0 !== n.strstart && (F(n, e.adler >>> 16),
                F(n, 65535 & e.adler)),
                e.adler = 1)),
                69 === n.status)
                    if (n.gzhead.extra) {
                        for (i = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)),
                        B(e),
                        i = n.pending,
                        n.pending !== n.pending_buf_size)); )
                            j(n, 255 & n.gzhead.extra[n.gzindex]),
                            n.gzindex++;
                        n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)),
                        n.gzindex === n.gzhead.extra.length && (n.gzindex = 0,
                        n.status = 73)
                    } else
                        n.status = 73;
                if (73 === n.status)
                    if (n.gzhead.name) {
                        i = n.pending;
                        do {
                            if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)),
                            B(e),
                            i = n.pending,
                            n.pending === n.pending_buf_size)) {
                                o = 1;
                                break
                            }
                        } while (o = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0,
                        j(n, o),
                        0 !== o);
                        n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)),
                        0 === o && (n.gzindex = 0,
                        n.status = 91)
                    } else
                        n.status = 91;
                if (91 === n.status)
                    if (n.gzhead.comment) {
                        i = n.pending;
                        do {
                            if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)),
                            B(e),
                            i = n.pending,
                            n.pending === n.pending_buf_size)) {
                                o = 1;
                                break
                            }
                        } while (o = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0,
                        j(n, o),
                        0 !== o);
                        n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)),
                        0 === o && (n.status = 103)
                    } else
                        n.status = 103;
                if (103 === n.status && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && B(e),
                n.pending + 2 <= n.pending_buf_size && (j(n, 255 & e.adler),
                j(n, e.adler >> 8 & 255),
                e.adler = 0,
                n.status = x)) : n.status = x),
                0 !== n.pending) {
                    if (B(e),
                    0 === e.avail_out)
                        return n.last_flush = -1,
                        f
                } else if (0 === e.avail_in && O(t) <= O(a) && t !== l)
                    return A(e, -5);
                if (666 === n.status && 0 !== e.avail_in)
                    return A(e, -5);
                if (0 !== e.avail_in || 0 !== n.lookahead || t !== d && 666 !== n.status) {
                    var a = 2 === n.strategy ? function(e, t) {
                        for (var n; ; ) {
                            if (0 === e.lookahead && (R(e),
                            0 === e.lookahead)) {
                                if (t === d)
                                    return q;
                                break
                            }
                            if (e.match_length = 0,
                            n = c._tr_tally(e, 0, e.window[e.strstart]),
                            e.lookahead--,
                            e.strstart++,
                            n && (N(e, !1),
                            0 === e.strm.avail_out))
                                return q
                        }
                        return e.insert = 0,
                        t === l ? (N(e, !0),
                        0 === e.strm.avail_out ? I : E) : e.last_lit && (N(e, !1),
                        0 === e.strm.avail_out) ? q : T
                    }(n, t) : 3 === n.strategy ? function(e, t) {
                        for (var n, i, o, s, a = e.window; ; ) {
                            if (e.lookahead <= S) {
                                if (R(e),
                                e.lookahead <= S && t === d)
                                    return q;
                                if (0 === e.lookahead)
                                    break
                            }
                            if (e.match_length = 0,
                            e.lookahead >= C && 0 < e.strstart && (i = a[o = e.strstart - 1]) === a[++o] && i === a[++o] && i === a[++o]) {
                                for (s = e.strstart + S; i === a[++o] && i === a[++o] && i === a[++o] && i === a[++o] && i === a[++o] && i === a[++o] && i === a[++o] && i === a[++o] && o < s; )
                                    ;
                                e.match_length = S - (s - o),
                                e.match_length > e.lookahead && (e.match_length = e.lookahead)
                            }
                            if (e.match_length >= C ? (n = c._tr_tally(e, 1, e.match_length - C),
                            e.lookahead -= e.match_length,
                            e.strstart += e.match_length,
                            e.match_length = 0) : (n = c._tr_tally(e, 0, e.window[e.strstart]),
                            e.lookahead--,
                            e.strstart++),
                            n && (N(e, !1),
                            0 === e.strm.avail_out))
                                return q
                        }
                        return e.insert = 0,
                        t === l ? (N(e, !0),
                        0 === e.strm.avail_out ? I : E) : e.last_lit && (N(e, !1),
                        0 === e.strm.avail_out) ? q : T
                    }(n, t) : r[n.level].func(n, t);
                    if (a !== I && a !== E || (n.status = 666),
                    a === q || a === I)
                        return 0 === e.avail_out && (n.last_flush = -1),
                        f;
                    if (a === T && (1 === t ? c._tr_align(n) : 5 !== t && (c._tr_stored_block(n, 0, 0, !1),
                    3 === t && (D(n.head),
                    0 === n.lookahead && (n.strstart = 0,
                    n.block_start = 0,
                    n.insert = 0))),
                    B(e),
                    0 === e.avail_out))
                        return n.last_flush = -1,
                        f
                }
                return t !== l ? f : n.wrap <= 0 ? 1 : (2 === n.wrap ? (j(n, 255 & e.adler),
                j(n, e.adler >> 8 & 255),
                j(n, e.adler >> 16 & 255),
                j(n, e.adler >> 24 & 255),
                j(n, 255 & e.total_in),
                j(n, e.total_in >> 8 & 255),
                j(n, e.total_in >> 16 & 255),
                j(n, e.total_in >> 24 & 255)) : (F(n, e.adler >>> 16),
                F(n, 65535 & e.adler)),
                B(e),
                0 < n.wrap && (n.wrap = -n.wrap),
                0 !== n.pending ? f : 1)
            }
            ,
            n.deflateEnd = function(e) {
                var t;
                return e && e.state ? (t = e.state.status) !== L && 69 !== t && 73 !== t && 91 !== t && 103 !== t && t !== x && 666 !== t ? A(e, g) : (e.state = null,
                t === x ? A(e, -3) : f) : g
            }
            ,
            n.deflateSetDictionary = function(e, t) {
                var n, i, o, s, a, r, c, d = t.length;
                if (!e || !e.state)
                    return g;
                if (2 === (s = (n = e.state).wrap) || 1 === s && n.status !== L || n.lookahead)
                    return g;
                for (1 === s && (e.adler = h(e.adler, t, d, 0)),
                n.wrap = 0,
                d >= n.w_size && (0 === s && (D(n.head),
                n.strstart = 0,
                n.block_start = 0,
                n.insert = 0),
                c = new u.Buf8(n.w_size),
                u.arraySet(c, t, d - n.w_size, n.w_size, 0),
                t = c,
                d = n.w_size),
                a = e.avail_in,
                r = e.next_in,
                c = e.input,
                e.avail_in = d,
                e.next_in = 0,
                e.input = t,
                R(n); n.lookahead >= C; ) {
                    for (i = n.strstart,
                    o = n.lookahead - (C - 1); n.ins_h = (n.ins_h << n.hash_shift ^ n.window[i + C - 1]) & n.hash_mask,
                    n.prev[i & n.w_mask] = n.head[n.ins_h],
                    n.head[n.ins_h] = i,
                    i++,
                    --o; )
                        ;
                    n.strstart = i,
                    n.lookahead = C - 1,
                    R(n)
                }
                return n.strstart += n.lookahead,
                n.block_start = n.strstart,
                n.insert = n.lookahead,
                n.lookahead = 0,
                n.match_length = n.prev_length = C - 1,
                n.match_available = 0,
                e.next_in = r,
                e.input = c,
                e.avail_in = a,
                n.wrap = s,
                f
            }
            ,
            n.deflateInfo = "pako deflate (from Nodeca project)"
        }
        , {
            "../utils/common": 1,
            "./adler32": 3,
            "./crc32": 4,
            "./messages": 6,
            "./trees": 7
        }],
        "6": [function(e, t, n) {
            t.exports = {
                "2": "need dictionary",
                "1": "stream end",
                "0": "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            }
        }
        , {}],
        "7": [function(e, t, n) {
            var o = e("../utils/common")
              , r = 0
              , c = 1;
            function i(e) {
                for (var t = e.length; 0 <= --t; )
                    e[t] = 0
            }
            var s = 0
              , a = 29
              , d = 256
              , l = d + 1 + a
              , u = 30
              , h = 19
              , m = 2 * l + 1
              , v = 15
              , p = 16
              , f = 7
              , g = 256
              , y = 16
              , b = 17
              , _ = 18
              , w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
              , k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
              , C = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
              , S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
              , P = new Array(2 * (l + 2));
            i(P);
            var L = new Array(2 * u);
            i(L);
            var x = new Array(512);
            i(x);
            var q = new Array(256);
            i(q);
            var T = new Array(a);
            i(T);
            var I, E, A, O = new Array(u);
            function D(e, t, n, i, o) {
                this.static_tree = e,
                this.extra_bits = t,
                this.extra_base = n,
                this.elems = i,
                this.max_length = o,
                this.has_stree = e && e.length
            }
            function B(e, t) {
                this.dyn_tree = e,
                this.max_code = 0,
                this.stat_desc = t
            }
            function N(e) {
                return e < 256 ? x[e] : x[256 + (e >>> 7)]
            }
            function j(e, t) {
                e.pending_buf[e.pending++] = 255 & t,
                e.pending_buf[e.pending++] = t >>> 8 & 255
            }
            function F(e, t, n) {
                e.bi_valid > p - n ? (e.bi_buf |= t << e.bi_valid & 65535,
                j(e, e.bi_buf),
                e.bi_buf = t >> p - e.bi_valid,
                e.bi_valid += n - p) : (e.bi_buf |= t << e.bi_valid & 65535,
                e.bi_valid += n)
            }
            function M(e, t, n) {
                F(e, n[2 * t], n[2 * t + 1])
            }
            function R(e, t) {
                for (var n = 0; n |= 1 & e,
                e >>>= 1,
                n <<= 1,
                0 < --t; )
                    ;
                return n >>> 1
            }
            function z(e, t, n) {
                for (var i, o = new Array(v + 1), s = 0, a = 1; a <= v; a++)
                    o[a] = s = s + n[a - 1] << 1;
                for (i = 0; i <= t; i++) {
                    var r = e[2 * i + 1];
                    0 !== r && (e[2 * i] = R(o[r]++, r))
                }
            }
            function V(e) {
                for (var t = 0; t < l; t++)
                    e.dyn_ltree[2 * t] = 0;
                for (t = 0; t < u; t++)
                    e.dyn_dtree[2 * t] = 0;
                for (t = 0; t < h; t++)
                    e.bl_tree[2 * t] = 0;
                e.dyn_ltree[2 * g] = 1,
                e.opt_len = e.static_len = 0,
                e.last_lit = e.matches = 0
            }
            function Q(e) {
                8 < e.bi_valid ? j(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf),
                e.bi_buf = 0,
                e.bi_valid = 0
            }
            function U(e, t, n, i) {
                var o = 2 * t
                  , s = 2 * n;
                return e[o] < e[s] || e[o] === e[s] && i[t] <= i[n]
            }
            function H(e, t, n) {
                for (var i = e.heap[n], o = n << 1; o <= e.heap_len && (o < e.heap_len && U(t, e.heap[o + 1], e.heap[o], e.depth) && o++,
                !U(t, i, e.heap[o], e.depth)); )
                    e.heap[n] = e.heap[o],
                    n = o,
                    o <<= 1;
                e.heap[n] = i
            }
            function K(e, t, n) {
                var i, o, s, a, r = 0;
                if (0 !== e.last_lit)
                    for (; i = e.pending_buf[e.d_buf + 2 * r] << 8 | e.pending_buf[e.d_buf + 2 * r + 1],
                    o = e.pending_buf[e.l_buf + r],
                    r++,
                    0 == i ? M(e, o, t) : (M(e, (s = q[o]) + d + 1, t),
                    0 !== (a = w[s]) && F(e, o -= T[s], a),
                    M(e, s = N(--i), n),
                    0 !== (a = k[s]) && F(e, i -= O[s], a)),
                    r < e.last_lit; )
                        ;
                M(e, g, t)
            }
            function $(e, g) {
                var t, n, i, o = g.dyn_tree, s = g.stat_desc.static_tree, a = g.stat_desc.has_stree, r = g.stat_desc.elems, c = -1;
                for (e.heap_len = 0,
                e.heap_max = m,
                t = 0; t < r; t++)
                    0 !== o[2 * t] ? (e.heap[++e.heap_len] = c = t,
                    e.depth[t] = 0) : o[2 * t + 1] = 0;
                for (; e.heap_len < 2; )
                    o[2 * (i = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1,
                    e.depth[i] = 0,
                    e.opt_len--,
                    a && (e.static_len -= s[2 * i + 1]);
                for (g.max_code = c,
                t = e.heap_len >> 1; 1 <= t; t--)
                    H(e, o, t);
                for (i = r; t = e.heap[1],
                e.heap[1] = e.heap[e.heap_len--],
                H(e, o, 1),
                n = e.heap[1],
                e.heap[--e.heap_max] = t,
                e.heap[--e.heap_max] = n,
                o[2 * i] = o[2 * t] + o[2 * n],
                e.depth[i] = (e.depth[t] >= e.depth[n] ? e.depth[t] : e.depth[n]) + 1,
                o[2 * t + 1] = o[2 * n + 1] = i,
                e.heap[1] = i++,
                H(e, o, 1),
                2 <= e.heap_len; )
                    ;
                e.heap[--e.heap_max] = e.heap[1],
                function(e) {
                    for (var t, n, i, o, s, a = g.dyn_tree, r = g.max_code, c = g.stat_desc.static_tree, d = g.stat_desc.has_stree, l = g.stat_desc.extra_bits, u = g.stat_desc.extra_base, h = g.stat_desc.max_length, p = 0, f = 0; f <= v; f++)
                        e.bl_count[f] = 0;
                    for (a[2 * e.heap[e.heap_max] + 1] = 0,
                    t = e.heap_max + 1; t < m; t++)
                        h < (f = a[2 * a[2 * (n = e.heap[t]) + 1] + 1] + 1) && (f = h,
                        p++),
                        a[2 * n + 1] = f,
                        r < n || (e.bl_count[f]++,
                        o = 0,
                        u <= n && (o = l[n - u]),
                        s = a[2 * n],
                        e.opt_len += s * (f + o),
                        d && (e.static_len += s * (c[2 * n + 1] + o)));
                    if (0 !== p) {
                        do {
                            for (f = h - 1; 0 === e.bl_count[f]; )
                                f--
                        } while (e.bl_count[f]--,
                        e.bl_count[f + 1] += 2,
                        e.bl_count[h]--,
                        0 < (p -= 2));
                        for (f = h; 0 !== f; f--)
                            for (n = e.bl_count[f]; 0 !== n; )
                                r < (i = e.heap[--t]) || (a[2 * i + 1] !== f && (e.opt_len += (f - a[2 * i + 1]) * a[2 * i],
                                a[2 * i + 1] = f),
                                n--)
                    }
                }(e),
                z(o, c, e.bl_count)
            }
            function G(e, t, n) {
                var i, o, s = -1, a = t[1], r = 0, c = 7, d = 4;
                for (0 === a && (c = 138,
                d = 3),
                t[2 * (n + 1) + 1] = 65535,
                i = 0; i <= n; i++)
                    o = a,
                    a = t[2 * (i + 1) + 1],
                    ++r < c && o === a || (r < d ? e.bl_tree[2 * o] += r : 0 !== o ? (o !== s && e.bl_tree[2 * o]++,
                    e.bl_tree[2 * y]++) : r <= 10 ? e.bl_tree[2 * b]++ : e.bl_tree[2 * _]++,
                    s = o,
                    d = (r = 0) === a ? (c = 138,
                    3) : o === a ? (c = 6,
                    3) : (c = 7,
                    4))
            }
            function W(e, t, n) {
                var i, o, s = -1, a = t[1], r = 0, c = 7, d = 4;
                for (0 === a && (c = 138,
                d = 3),
                i = 0; i <= n; i++)
                    if (o = a,
                    a = t[2 * (i + 1) + 1],
                    !(++r < c && o === a)) {
                        if (r < d)
                            for (; M(e, o, e.bl_tree),
                            0 != --r; )
                                ;
                        else
                            0 !== o ? (o !== s && (M(e, o, e.bl_tree),
                            r--),
                            M(e, y, e.bl_tree),
                            F(e, r - 3, 2)) : r <= 10 ? (M(e, b, e.bl_tree),
                            F(e, r - 3, 3)) : (M(e, _, e.bl_tree),
                            F(e, r - 11, 7));
                        s = o,
                        d = (r = 0) === a ? (c = 138,
                        3) : o === a ? (c = 6,
                        3) : (c = 7,
                        4)
                    }
            }
            i(O);
            var J = !1;
            function X(e, t, n, i) {
                F(e, (s << 1) + (i ? 1 : 0), 3),
                i = t,
                t = n,
                n = !0,
                Q(e = e),
                n && (j(e, t),
                j(e, ~t)),
                o.arraySet(e.pending_buf, e.window, i, t, e.pending),
                e.pending += t
            }
            n._tr_init = function(e) {
                J || (function() {
                    for (var e, t, n, i = new Array(v + 1), o = 0, s = 0; s < a - 1; s++)
                        for (T[s] = o,
                        e = 0; e < 1 << w[s]; e++)
                            q[o++] = s;
                    for (q[o - 1] = s,
                    s = n = 0; s < 16; s++)
                        for (O[s] = n,
                        e = 0; e < 1 << k[s]; e++)
                            x[n++] = s;
                    for (n >>= 7; s < u; s++)
                        for (O[s] = n << 7,
                        e = 0; e < 1 << k[s] - 7; e++)
                            x[256 + n++] = s;
                    for (t = 0; t <= v; t++)
                        i[t] = 0;
                    for (e = 0; e <= 143; )
                        P[2 * e + 1] = 8,
                        e++,
                        i[8]++;
                    for (; e <= 255; )
                        P[2 * e + 1] = 9,
                        e++,
                        i[9]++;
                    for (; e <= 279; )
                        P[2 * e + 1] = 7,
                        e++,
                        i[7]++;
                    for (; e <= 287; )
                        P[2 * e + 1] = 8,
                        e++,
                        i[8]++;
                    for (z(P, l + 1, i),
                    e = 0; e < u; e++)
                        L[2 * e + 1] = 5,
                        L[2 * e] = R(e, 5);
                    I = new D(P,w,d + 1,l,v),
                    E = new D(L,k,0,u,v),
                    A = new D(new Array(0),C,0,h,f)
                }(),
                J = !0),
                e.l_desc = new B(e.dyn_ltree,I),
                e.d_desc = new B(e.dyn_dtree,E),
                e.bl_desc = new B(e.bl_tree,A),
                e.bi_buf = 0,
                e.bi_valid = 0,
                V(e)
            }
            ,
            n._tr_stored_block = X,
            n._tr_flush_block = function(e, t, n, i) {
                var o, s, a = 0;
                0 < e.level ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
                    for (var t = 4093624447, n = 0; n <= 31; n++,
                    t >>>= 1)
                        if (1 & t && 0 !== e.dyn_ltree[2 * n])
                            return r;
                    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26])
                        return c;
                    for (n = 32; n < d; n++)
                        if (0 !== e.dyn_ltree[2 * n])
                            return c;
                    return r
                }(e)),
                $(e, e.l_desc),
                $(e, e.d_desc),
                a = function(e) {
                    var t;
                    for (G(e, e.dyn_ltree, e.l_desc.max_code),
                    G(e, e.dyn_dtree, e.d_desc.max_code),
                    $(e, e.bl_desc),
                    t = h - 1; 3 <= t && 0 === e.bl_tree[2 * S[t] + 1]; t--)
                        ;
                    return e.opt_len += 3 * (t + 1) + 5 + 5 + 4,
                    t
                }(e),
                o = e.opt_len + 3 + 7 >>> 3,
                (s = e.static_len + 3 + 7 >>> 3) <= o && (o = s)) : o = s = n + 5,
                n + 4 <= o && -1 !== t ? X(e, t, n, i) : 4 === e.strategy || s === o ? (F(e, 2 + (i ? 1 : 0), 3),
                K(e, P, L)) : (F(e, 4 + (i ? 1 : 0), 3),
                function(e, t, n, i) {
                    var o;
                    for (F(e, t - 257, 5),
                    F(e, n - 1, 5),
                    F(e, i - 4, 4),
                    o = 0; o < i; o++)
                        F(e, e.bl_tree[2 * S[o] + 1], 3);
                    W(e, e.dyn_ltree, t - 1),
                    W(e, e.dyn_dtree, n - 1)
                }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1),
                K(e, e.dyn_ltree, e.dyn_dtree)),
                V(e),
                i && Q(e)
            }
            ,
            n._tr_tally = function(e, t, n) {
                return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255,
                e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t,
                e.pending_buf[e.l_buf + e.last_lit] = 255 & n,
                e.last_lit++,
                0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++,
                t--,
                e.dyn_ltree[2 * (q[n] + d + 1)]++,
                e.dyn_dtree[2 * N(t)]++),
                e.last_lit === e.lit_bufsize - 1
            }
            ,
            n._tr_align = function(e) {
                F(e, 2, 3),
                M(e, g, P),
                16 === (e = e).bi_valid ? (j(e, e.bi_buf),
                e.bi_buf = 0,
                e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf,
                e.bi_buf >>= 8,
                e.bi_valid -= 8)
            }
        }
        , {
            "../utils/common": 1
        }],
        "8": [function(e, t, n) {
            t.exports = function() {
                this.input = null,
                this.next_in = 0,
                this.avail_in = 0,
                this.total_in = 0,
                this.output = null,
                this.next_out = 0,
                this.avail_out = 0,
                this.total_out = 0,
                this.msg = "",
                this.state = null,
                this.data_type = 2,
                this.adler = 0
            }
        }
        , {}],
        "/lib/deflate.js": [function(e, t, n) {
            var a = e("./zlib/deflate")
              , r = e("./utils/common")
              , c = e("./utils/strings")
              , i = e("./zlib/messages")
              , o = e("./zlib/zstream")
              , d = Object.prototype.toString
              , l = 0
              , s = -1
              , u = 0
              , h = 8;
            function p(e) {
                if (!(this instanceof p))
                    return new p(e);
                this.options = r.assign({
                    "level": s,
                    "method": h,
                    "chunkSize": 16384,
                    "windowBits": 15,
                    "memLevel": 8,
                    "strategy": u,
                    "to": ""
                }, e || {});
                var t = this.options;
                if (t.raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16),
                this.err = 0,
                this.msg = "",
                this.ended = !1,
                this.chunks = [],
                this.strm = new o,
                this.strm.avail_out = 0,
                (e = a.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy)) !== l)
                    throw new Error(i[e]);
                if (t.header && a.deflateSetHeader(this.strm, t.header),
                t.dictionary) {
                    t = "string" == typeof t.dictionary ? c.string2buf(t.dictionary) : "[object ArrayBuffer]" === d.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary;
                    if ((e = a.deflateSetDictionary(this.strm, t)) !== l)
                        throw new Error(i[e]);
                    this._dict_set = !0
                }
            }
            function f(e, t) {
                t = new p(t);
                if (t.push(e, !0),
                t.err)
                    throw t.msg || i[t.err];
                return t.result
            }
            p.prototype.push = function(e, t) {
                var n, i, o = this.strm, s = this.options.chunkSize;
                if (this.ended)
                    return !1;
                i = t === ~~t ? t : !0 === t ? 4 : 0,
                "string" == typeof e ? o.input = c.string2buf(e) : "[object ArrayBuffer]" === d.call(e) ? o.input = new Uint8Array(e) : o.input = e,
                o.next_in = 0,
                o.avail_in = o.input.length;
                do {
                    if (0 === o.avail_out && (o.output = new r.Buf8(s),
                    o.next_out = 0,
                    o.avail_out = s),
                    1 !== (n = a.deflate(o, i)) && n !== l)
                        return this.onEnd(n),
                        !(this.ended = !0)
                } while (0 !== o.avail_out && (0 !== o.avail_in || 4 !== i && 2 !== i) || ("string" === this.options.to ? this.onData(c.buf2binstring(r.shrinkBuf(o.output, o.next_out))) : this.onData(r.shrinkBuf(o.output, o.next_out))),
                (0 < o.avail_in || 0 === o.avail_out) && 1 !== n);
                return 4 === i ? (n = a.deflateEnd(this.strm),
                this.onEnd(n),
                this.ended = !0,
                n === l) : 2 !== i || (this.onEnd(l),
                !(o.avail_out = 0))
            }
            ,
            p.prototype.onData = function(e) {
                this.chunks.push(e)
            }
            ,
            p.prototype.onEnd = function(e) {
                e === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = r.flattenChunks(this.chunks)),
                this.chunks = [],
                this.err = e,
                this.msg = this.strm.msg
            }
            ,
            n.Deflate = p,
            n.deflate = f,
            n.deflateRaw = function(e, t) {
                return (t = t || {}).raw = !0,
                f(e, t)
            }
            ,
            n.gzip = function(e, t) {
                return (t = t || {}).gzip = !0,
                f(e, t)
            }
        }
        , {
            "./utils/common": 1,
            "./utils/strings": 2,
            "./zlib/deflate": 5,
            "./zlib/messages": 6,
            "./zlib/zstream": 8
        }]
    }, {}, [])("/lib/deflate.js");
    function c(e) {
        var t = i.getLog()
          , n = r.gzip(t)
          , t = new XMLHttpRequest;
        t.open("POST", "//qosp.iqiyi.com/crashlog?source=pcwplayer"),
        t.setRequestHeader("Content-Encoding", "gzip"),
        t.setRequestHeader("Content-Type", "application/octet-stream"),
        t.setRequestHeader("File-Name", e),
        t.send(n)
    }
    n.d(t, "uploadLogToCompass", function() {
        return c
    })
}
, function(t, n, w) {
    (function(_) {
        var e = function(e, t, n) {
            var i, o = w(51), s = w(4), a = w(96), r = new (w(97)), c = new a, d = w(2), l = w(8), u = w(15).getDomain(), h = "//static.iqiyi.com/lequ/20230704/3f067d8e5896456fb11ee0a8e5cb77b1.css", p = null, f = {}, g = !1, m = !1, v = function v() {
                var e;
                "pca" == f.business || "39" == f.agenttype || _.browser && (_.browser.IE8 || _.browser.IE9) || (e = function e() {
                    MITO.init({
                        "platform": "b6c13e26323c537d",
                        "cid": 18,
                        "maxBreadcrumbs": 10,
                        "beforePushBreadcrumb": function(e, t) {
                            return "Console" !== t.type && t
                        },
                        "beforeDataReport": function(e) {
                            return (!e.message || !e.message.match(/(pan.iqiyi.com|datax.baidu.com|.jpg|.logo|qa.js|.png|sea1.2.js|msg.qy.net|pingBack|.gif)/)) && e
                        }
                    })
                }
                ,
                window.MITO ? e() : _.load("js", "https://stc.iqiyipic.com/js/common/mito.min.js", function() {
                    window.MITO && e()
                }))
            }, y = function y() {};
            function b(e, t, n) {
                f = e || {},
                p = p || new o,
                t && !g ? (_.load("css", h, function() {
                    g = !0,
                    n()
                }),
                (e = null == e ? void 0 : e.cssUrl) && _.load("css", e, function() {}),
                v()) : n()
            }
            _.cookie.get("QC005_PCA") || c.checkApp("", function(e) {
                null != e && e.clientid && r.deviceId(null == e ? void 0 : e.clientid)
            }),
            _.cookie.get("QC005_PCA") && "1" !== _.cookie.get("isRefreshAuth") && _.cookie.get("QC005") && _.cookie.get("QC005_PCA") !== _.cookie.get("QC005") && _.cookie.get("P00001") && !m && (i = d.getConfig(),
            i = {
                "authcookie": _.cookie.get("P00001") || "",
                "agenttype": (null == i ? void 0 : i.agenttype) || 1,
                "ptid": i.ptid || "01010021010000000000",
                "from_qyid": _.cookie.get("QC005") || "",
                "qyid": _.cookie.get("QC005_PCA") || ""
            },
            c.refreshAuth(i, function(e) {
                "P00101" !== e.code && "A00000" !== e.code || (_.cookie.set("isRefreshAuth", "1", {
                    "expires": 31536e6,
                    "path": "/",
                    "domain": u
                }),
                l.qosSend({
                    "diy_ec": e.code || "",
                    "diy_ls": "refresh",
                    "diy_method": "700"
                })),
                m = !0
            })),
            console.log("cookie wait", _.cookie.get("QC005_PCA") === _.cookie.get("QC005")),
            y.openLoginRegWindow = function(e) {
                e && e.business && b(e, !0, function() {
                    p.openLoginRegWindow(f)
                })
            }
            ,
            y.logout = function(e, t) {
                var n = 1;
                console.log("config.agenttype", e.agenttype);
                var i = d.getConfig();
                null != i && i.agenttype && 1 != (null == i ? void 0 : i.agenttype) && (n = (null == i ? void 0 : i.agenttype) || e.agenttype),
                console.log("agenttype", n),
                b(e, !0, function() {
                    1 == n ? "auto_remember" == t ? p.logout(f, "4") : "auto" == t ? p.logout(f) : p.openQuitToast(f) : 39 != n || "auto" == t ? p.logout(f) : p.openQuitToast(f)
                })
            }
            ,
            y.isLogin = function() {
                return !!_.cookie.get("P00001")
            }
            ,
            y.on = function(e, t) {
                s.on(e, t)
            }
            ,
            y.un = function(e, t) {
                s.un(e, t)
            }
            ,
            window["PCLoginSDK"] = y
        }
        .call(n, w, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, w(0))
}
, function(e, t) {
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        if ("function" != typeof this)
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t, n = Array.prototype.slice.call(arguments, 1), i = this, o = function o() {
            return i.apply(this instanceof t && e ? this : e, n.concat(Array.prototype.slice.call(arguments)))
        };
        return (t = function t() {}
        ).prototype = this.prototype,
        o.prototype = new t,
        o
    }
    ),
    String.prototype.trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "")
    }
    ,
    "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(e) {
        for (var t = 0; t < this.length; t++)
            e.apply(this, [this[t], t, this])
    }
    )
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = function i() {}
          , o = new Object;
        o.superclass = Object,
        o.__NAME__ = "Object",
        o.superinstance = new Object,
        o.callsuper = function(e) {
            var t;
            this._realsuper ? this._realsuper = this._realsuper.prototype.superclass : this._realsuper = this.superclass,
            "string" == typeof e ? (t = Array.prototype.slice.call(arguments, 1),
            this._realsuper.prototype[e].apply(this, t)) : (t = Array.prototype.slice.call(arguments, 0),
            this._realsuper.apply(this, t)),
            this._realsuper = null
        }
        ,
        i.prototype = o,
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, s) {
    t = function(e, t, n) {
        var i = s(36)
          , o = function o(e) {
            e = i(e);
            return "string" == typeof e ? e = decodeURIComponent(e) : null
        };
        n.exports = o
    }
    .call(t, s, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, s) {
    t = function(e, t, n) {
        var i = s(22)
          , o = function o(e) {
            if (i(e)) {
                e = new RegExp("(^| )" + e + "=([^;]*)(;|$)").exec(document.cookie);
                if (e)
                    return e[2] || null
            }
            return null
        };
        n.exports = o
    }
    .call(t, s, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, s) {
    t = function(e, t, n) {
        var i = s(23)
          , o = function o(e, t, n) {
            i(e, encodeURIComponent(t), n)
        };
        n.exports = o
    }
    .call(t, s, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, s) {
    t = function(e, t, n) {
        var i = s(23)
          , o = function o(e, t) {
            (t = t || {}).expires = new Date(0),
            i(e, "", t)
        };
        n.exports = o
    }
    .call(t, s, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, o) {
    t = function(e, t, n) {
        var i = o(17);
        n.exports = i("Floater", {
            "construct": function(e) {
                e = e || {},
                this._view = e.view,
                this._valid = !0
            },
            "methods": {
                "show": function(e) {
                    e = e || {},
                    this._view.show(e)
                },
                "destroy": function() {
                    this._valid && (this._view.destroy && this._view.destroy(),
                    this._valid = !1)
                }
            }
        })
    }
    .call(t, o, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, a) {
    t = function(e, t, n) {
        var i = a(41)
          , o = a(42)
          , s = a(17);
        n.exports = s("FloaterView", {
            "construct": function(e) {
                this.param = e || {},
                this._panel = e.panel || document.body,
                this._zIndex = e.zIndex || 100,
                this.domHeight = e.domHeight,
                this.resetSize = e.resetSize
            },
            "methods": {
                "create": function() {
                    this._elem || (this._elem = document.createElement("div"),
                    this._elem.style.position = "absolute",
                    this._elem.style.top = "0px",
                    this._elem.style.zIndex = this._zIndex,
                    this._elem.style.visibility = "hidden",
                    this._panel.appendChild(this._elem),
                    this.adjustBind = this.adjustBind || this.adjustPosition.bind(this))
                },
                "show": function(e) {
                    this.create(),
                    this.build(e),
                    this.adjustPosition(),
                    this.doOnresize(),
                    this._elem.style.visibility = "visible",
                    this.showCover({
                        "bg": null === (e = this.param) || void 0 === e ? void 0 : e.bg
                    }),
                    this.winObj && (this.winObj.addEventListener ? this.winObj.addEventListener("resize", this.adjustBind) : this.winObj.attachEvent && this.winObj.attachEvent("onresize", this.adjustBind))
                },
                "destroy": function() {
                    this.hide(),
                    this.hideCover(),
                    this._removeEvent(),
                    this._removeDom()
                },
                "hide": function() {
                    this._elem.style.visibility = "visible"
                },
                "hideCover": function() {
                    o.hide()
                },
                "build": function(e) {
                    var t;
                    e.id ? (t = document.getElementById(e.id)) && (this._elem.appendChild(t),
                    e.removeBlock ? t.style = "" : t.style.display = "block") : e.html ? this._elem.innerHTML = e.html : e.elem && (e.replace && (this._elem.innerHTML = ""),
                    this._elem.appendChild(e.elem),
                    e.iframeId && e.url && (document.getElementById(e.iframeId).src = e.url),
                    e.elem.style.display = "block")
                },
                "adjustPosition": function() {
                    i(this._elem, {
                        "domHeight": this.domHeight,
                        "resetSize": this.resetSize,
                        "left": this.param.left
                    }),
                    o.resize(),
                    this._elem.offsetTop < 0 && (this._elem.style.top = "30px")
                },
                "showCover": function(e) {
                    o.show(this._zIndex - 5, e)
                },
                "_removeDom": function() {
                    var e = this._elem;
                    e.parentNode && setTimeout(function() {
                        e.parentNode.removeChild(e)
                    }, 0)
                },
                "_removeEvent": function() {
                    this.winObj && (this.winObj.addEventListener ? this.winObj.removeEventListener("resize", this.adjustBind) : this.winObj.attachEvent && this.winObj.detachEvent("onresize", this.adjustBind),
                    this.winObj = null)
                },
                "doOnresize": function() {
                    this.f || (this.winObj = window,
                    this.adjustBind = this.adjustBind || this.adjustPosition.bind(this),
                    this.winObj.addEventListener ? this.winObj.addEventListener("resize", this.adjustBind) : this.winObj.attachEvent && this.winObj.attachEvent("onresize", this.adjustBind))
                }
            }
        })
    }
    .call(t, a, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, n) {
        var r = i(24)
          , c = i(25)
          , d = i(26)
          , l = i(27)
          , u = function u(e, t) {
            var n, i, o, s, a;
            t = t || {},
            e && (a = e.offsetWidth || 360,
            n = t.domHeight || e.offsetHeight,
            o = c(),
            i = r(),
            o = null !== t && void 0 !== t && t.left ? null === t || void 0 === t ? void 0 : t.left : (o - a) / 2 + d(),
            a = (i - n) / 2 + l(),
            e.style.position = "fixed",
            t.resetSize && (a = (i - n) / 2,
            null != o && null !== (s = o.toString()) && void 0 !== s && s.indexOf("%") && 0 < (null == o ? void 0 : o.toString().indexOf("%")) ? e.style.left = o : e.style.left = o + "px",
            e.style.top = a + "px"))
        };
        n.exports = u
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, a) {
    t = function(e, t, n) {
        var i = a(17)
          , o = a(21)
          , s = i("Overlay", {
            "_overlay": null,
            "statics": {
                "_count": 0,
                "_originZIndex": [],
                "show": function(e, t) {
                    var n;
                    t = t || {},
                    s._overlay || ((n = document.createElement("div")).style.position = o.IE6 ? "absolute" : "fixed",
                    n.style.left = "0",
                    n.style.top = "0",
                    n.style.width = "100%",
                    n.style.height = "100%",
                    "transparent" !== t.bg && (n.style.background = t.bg || "#000"),
                    n.style.opacity = t.opacity || "0.5",
                    n.style.filter = "alpha(opacity=" + (100 * t.opacity || 50) + ")",
                    n.style["-moz-opacity"] = t.opacity || "0.5",
                    n.setAttribute("data-loginIfr-layer", "loginIfrLayer"),
                    document.body.appendChild(n),
                    s._overlay = n),
                    e && (s._overlay.style.zIndex = e),
                    this.resize(),
                    s._overlay.style.display = ""
                },
                "hide": function() {
                    if (s._overlay) {
                        if (0 < s._count)
                            return s._count--,
                            void (s._overlay.style.zIndex = s._originZIndex[s._count]);
                        s._overlay.style.display = "none",
                        s._overlay.style.zIndex = 100
                    }
                },
                "resize": function() {}
            }
        });
        n.exports = s
    }
    .call(t, a, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var a = {}
          , r = function r(e) {
            if (e) {
                var t = new Image
                  , n = "slog_" + Math.floor(2147483648 * Math.random()).toString(36);
                (a[n] = t).onload = t.onerror = t.onabort = function() {
                    t.onload = t.onerror = t.onabort = null,
                    a[n] = null,
                    delete a[n],
                    t = null
                }
                ;
                var i, o = [];
                for (i in e)
                    o.push(i + "=" + encodeURIComponent(e[i]));
                try {
                    t.src = "//msg.qy.net/act?" + o.join("&")
                } catch (s) {}
            }
        };
        n.exports = r
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var a = {}
          , r = function r(e) {
            if (e) {
                var t = new Image
                  , n = "slog_" + Math.floor(2147483648 * Math.random()).toString(36);
                (a[n] = t).onload = t.onerror = t.onabort = function() {
                    t.onload = t.onerror = t.onabort = null,
                    a[n] = null,
                    delete a[n],
                    t = null
                }
                ;
                var i, o = [];
                for (i in e)
                    o.push(i + "=" + encodeURIComponent(e[i]));
                try {
                    t.src = "//msg.qy.net/qos?" + o.join("&")
                } catch (s) {}
            }
        };
        n.exports = r
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = function i() {
            var e = window.document
              , t = e.body
              , n = e.documentElement
              , e = "BackCompat" == e.compatMode ? t : e.documentElement;
            return Math.max(n.scrollWidth, t.scrollWidth, e.clientWidth)
        };
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = function i() {
            var e = window.document
              , t = e.body
              , n = e.documentElement
              , e = "BackCompat" == e.compatMode ? t : e.documentElement;
            return Math.max(n.scrollHeight, t.scrollHeight, e.clientHeight)
        };
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var r, u, c, d, l, h, p, f, g, m, v, y, b, i = (r = function r(e, t) {
            return e << t | e >>> 32 - t
        }
        ,
        u = function u(e, t) {
            var n = 2147483648 & e
              , i = 2147483648 & t
              , o = 1073741824 & e
              , s = 1073741824 & t
              , t = (1073741823 & e) + (1073741823 & t);
            return o & s ? 2147483648 ^ t ^ n ^ i : o | s ? 1073741824 & t ? 3221225472 ^ t ^ n ^ i : 1073741824 ^ t ^ n ^ i : t ^ n ^ i
        }
        ,
        c = function c(e, t, n) {
            return e & t | ~e & n
        }
        ,
        d = function d(e, t, n) {
            return e & n | t & ~n
        }
        ,
        l = function l(e, t, n) {
            return e ^ t ^ n
        }
        ,
        h = function h(e, t, n) {
            return t ^ (e | ~n)
        }
        ,
        p = function p(e, t, n, i, o, s, a) {
            return e = u(e, u(u(c(t, n, i), o), a)),
            u(r(e, s), t)
        }
        ,
        f = function f(e, t, n, i, o, s, a) {
            return e = u(e, u(u(d(t, n, i), o), a)),
            u(r(e, s), t)
        }
        ,
        g = function g(e, t, n, i, o, s, a) {
            return e = u(e, u(u(l(t, n, i), o), a)),
            u(r(e, s), t)
        }
        ,
        m = function m(e, t, n, i, o, s, a) {
            return e = u(e, u(u(h(t, n, i), o), a)),
            u(r(e, s), t)
        }
        ,
        v = function v(e) {
            for (var t, n = e.length, i = n + 8, i = 16 * (1 + (i - i % 64) / 64), o = Array(i - 1), s = 0, a = 0; a < n; )
                s = a % 4 * 8,
                o[t = (a - a % 4) / 4] = o[t] | e.charCodeAt(a) << s,
                a++;
            return s = a % 4 * 8,
            o[t = (a - a % 4) / 4] = o[t] | 128 << s,
            o[i - 2] = n << 3,
            o[i - 1] = n >>> 29,
            o
        }
        ,
        y = function y(e) {
            for (var t = "", n = "", i = 0; i <= 3; i++)
                t += (n = "0" + (e >>> 8 * i & 255).toString(16)).substr(n.length - 2, 2);
            return t
        }
        ,
        b = function b(e) {
            e = e.replace(/\x0d\x0a/g, "\n");
            for (var t = "", n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n);
                i < 128 ? t += String.fromCharCode(i) : (127 < i && i < 2048 ? t += String.fromCharCode(i >> 6 | 192) : (t += String.fromCharCode(i >> 12 | 224),
                t += String.fromCharCode(i >> 6 & 63 | 128)),
                t += String.fromCharCode(63 & i | 128))
            }
            return t
        }
        ,
        function(e) {
            e += "";
            var t, n, i, o, s, a, r, c, d, l = Array();
            for (e = b(e),
            l = v(e),
            a = 1732584193,
            r = 4023233417,
            c = 2562383102,
            d = 271733878,
            t = 0; t < l.length; t += 16)
                a = p(n = a, i = r, o = c, s = d, l[t + 0], 7, 3614090360),
                d = p(d, a, r, c, l[t + 1], 12, 3905402710),
                c = p(c, d, a, r, l[t + 2], 17, 606105819),
                r = p(r, c, d, a, l[t + 3], 22, 3250441966),
                a = p(a, r, c, d, l[t + 4], 7, 4118548399),
                d = p(d, a, r, c, l[t + 5], 12, 1200080426),
                c = p(c, d, a, r, l[t + 6], 17, 2821735955),
                r = p(r, c, d, a, l[t + 7], 22, 4249261313),
                a = p(a, r, c, d, l[t + 8], 7, 1770035416),
                d = p(d, a, r, c, l[t + 9], 12, 2336552879),
                c = p(c, d, a, r, l[t + 10], 17, 4294925233),
                r = p(r, c, d, a, l[t + 11], 22, 2304563134),
                a = p(a, r, c, d, l[t + 12], 7, 1804603682),
                d = p(d, a, r, c, l[t + 13], 12, 4254626195),
                c = p(c, d, a, r, l[t + 14], 17, 2792965006),
                r = p(r, c, d, a, l[t + 15], 22, 1236535329),
                a = f(a, r, c, d, l[t + 1], 5, 4129170786),
                d = f(d, a, r, c, l[t + 6], 9, 3225465664),
                c = f(c, d, a, r, l[t + 11], 14, 643717713),
                r = f(r, c, d, a, l[t + 0], 20, 3921069994),
                a = f(a, r, c, d, l[t + 5], 5, 3593408605),
                d = f(d, a, r, c, l[t + 10], 9, 38016083),
                c = f(c, d, a, r, l[t + 15], 14, 3634488961),
                r = f(r, c, d, a, l[t + 4], 20, 3889429448),
                a = f(a, r, c, d, l[t + 9], 5, 568446438),
                d = f(d, a, r, c, l[t + 14], 9, 3275163606),
                c = f(c, d, a, r, l[t + 3], 14, 4107603335),
                r = f(r, c, d, a, l[t + 8], 20, 1163531501),
                a = f(a, r, c, d, l[t + 13], 5, 2850285829),
                d = f(d, a, r, c, l[t + 2], 9, 4243563512),
                c = f(c, d, a, r, l[t + 7], 14, 1735328473),
                r = f(r, c, d, a, l[t + 12], 20, 2368359562),
                a = g(a, r, c, d, l[t + 5], 4, 4294588738),
                d = g(d, a, r, c, l[t + 8], 11, 2272392833),
                c = g(c, d, a, r, l[t + 11], 16, 1839030562),
                r = g(r, c, d, a, l[t + 14], 23, 4259657740),
                a = g(a, r, c, d, l[t + 1], 4, 2763975236),
                d = g(d, a, r, c, l[t + 4], 11, 1272893353),
                c = g(c, d, a, r, l[t + 7], 16, 4139469664),
                r = g(r, c, d, a, l[t + 10], 23, 3200236656),
                a = g(a, r, c, d, l[t + 13], 4, 681279174),
                d = g(d, a, r, c, l[t + 0], 11, 3936430074),
                c = g(c, d, a, r, l[t + 3], 16, 3572445317),
                r = g(r, c, d, a, l[t + 6], 23, 76029189),
                a = g(a, r, c, d, l[t + 9], 4, 3654602809),
                d = g(d, a, r, c, l[t + 12], 11, 3873151461),
                c = g(c, d, a, r, l[t + 15], 16, 530742520),
                r = g(r, c, d, a, l[t + 2], 23, 3299628645),
                a = m(a, r, c, d, l[t + 0], 6, 4096336452),
                d = m(d, a, r, c, l[t + 7], 10, 1126891415),
                c = m(c, d, a, r, l[t + 14], 15, 2878612391),
                r = m(r, c, d, a, l[t + 5], 21, 4237533241),
                a = m(a, r, c, d, l[t + 12], 6, 1700485571),
                d = m(d, a, r, c, l[t + 3], 10, 2399980690),
                c = m(c, d, a, r, l[t + 10], 15, 4293915773),
                r = m(r, c, d, a, l[t + 1], 21, 2240044497),
                a = m(a, r, c, d, l[t + 8], 6, 1873313359),
                d = m(d, a, r, c, l[t + 15], 10, 4264355552),
                c = m(c, d, a, r, l[t + 6], 15, 2734768916),
                r = m(r, c, d, a, l[t + 13], 21, 1309151649),
                a = m(a, r, c, d, l[t + 4], 6, 4149444226),
                d = m(d, a, r, c, l[t + 11], 10, 3174756917),
                c = m(c, d, a, r, l[t + 2], 15, 718787259),
                r = m(r, c, d, a, l[t + 9], 21, 3951481745),
                a = u(a, n),
                r = u(r, i),
                c = u(c, o),
                d = u(d, s);
            return (y(a) + y(r) + y(c) + y(d)).toLowerCase()
        }
        );
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = function i(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        };
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    (t = function(e, t, n) {
        var s = i(21)
          , a = function a(e, t, n) {
            var i = null
              , o = null;
            if (t) {
                switch (o = document.getElementsByTagName("head")[0],
                e) {
                case "css":
                    (i = document.createElement("link")).rel = "stylesheet",
                    i.href = t;
                    break;
                case "js":
                    (i = document.createElement("script")).type = "text/javascript",
                    i.src = t
                }
                null != i && "object" == r(i) && o.appendChild(i),
                s.IE && i.readyState ? i.onreadystatechange = function() {
                    /loaded|complete/.test(i.readyState) && n && n()
                }
                : i.onload = function() {
                    n && n()
                }
            }
        };
        n.exports = a
    }
    .call(t, i, t, e)) === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var o, s, b, a = {}, _ = {}, w = 65536, k = w - 1, C = function C(e) {
            this.digits = "boolean" == typeof e && !0 === e ? null : o.slice(0),
            this.isNeg = !1
        };
        function r(e) {
            var t = _
              , n = t.biDivideByRadixPower(e, this.k - 1)
              , n = t.biMultiply(n, this.mu)
              , n = t.biDivideByRadixPower(n, this.k + 1)
              , e = t.biModuloByRadixPower(e, this.k + 1)
              , n = t.biMultiply(n, this.modulus)
              , n = t.biModuloByRadixPower(n, this.k + 1)
              , i = t.biSubtract(e, n);
            i.isNeg && (i = t.biAdd(i, this.bkplus1));
            for (var o = 0 <= t.biCompare(i, this.modulus); o; )
                i = t.biSubtract(i, this.modulus),
                o = 0 <= t.biCompare(i, this.modulus);
            return i
        }
        function c(e, t) {
            t = _.biMultiply(e, t);
            return this.modulo(t)
        }
        function d(e, t) {
            var n = new C;
            n.digits[0] = 1;
            for (var i = e, o = t; 0 != (1 & o.digits[0]) && (n = this.multiplyMod(n, i)),
            0 != (o = _.biShiftRight(o, 1)).digits[0] || 0 != _.biHighIndex(o); )
                i = this.multiplyMod(i, i);
            return n
        }
        a.BarrettMu = function(e) {
            this.modulus = _.biCopy(e),
            this.k = _.biHighIndex(this.modulus) + 1;
            e = new C;
            e.digits[2 * this.k] = 1,
            this.mu = _.biDivide(e, this.modulus),
            this.bkplus1 = new C,
            this.bkplus1.digits[this.k + 1] = 1,
            this.modulo = r,
            this.multiplyMod = c,
            this.powMod = d
        }
        ,
        _.biModuloByRadixPower = function(e, t) {
            var n = new C;
            return _.arrayCopy(e.digits, 0, n.digits, 0, t),
            n
        }
        ,
        _.biMultiply = function(e, t) {
            for (var n, i, o, s = new C, a = _.biHighIndex(e), r = _.biHighIndex(t), c = 0; c <= r; ++c) {
                for (o = c,
                j = n = 0; j <= a; ++j,
                ++o)
                    i = s.digits[o] + e.digits[j] * t.digits[c] + n,
                    s.digits[o] = i & k,
                    n = i >>> 16;
                s.digits[c + a + 1] = n
            }
            return s.isNeg = e.isNeg != t.isNeg,
            s
        }
        ,
        _.biDivideByRadixPower = function(e, t) {
            var n = new C;
            return _.arrayCopy(e.digits, t, n.digits, 0, n.digits.length - t),
            n
        }
        ,
        _.biDivide = function(e, t) {
            return _.biDivideModulo(e, t)[0]
        }
        ,
        _.setMaxDigits = function(e) {
            o = new Array(e);
            for (var t = 0; t < o.length; t++)
                o[t] = 0;
            s = new C,
            (b = new C).digits[0] = 1
        }
        ,
        _.setMaxDigits(20),
        _.biCopy = function(e) {
            var t = new C(!0);
            return t.digits = e.digits.slice(0),
            t.isNeg = e.isNeg,
            t
        }
        ,
        _.reverseStr = function(e) {
            for (var t = "", n = e.length - 1; -1 < n; --n)
                t += e.charAt(n);
            return t
        }
        ;
        var l = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        _.biToString = function(e, t) {
            var n = new C;
            n.digits[0] = t;
            for (var i = _.biDivideModulo(e, n), o = l[i[1].digits[0]]; 1 == _.biCompare(i[0], s); )
                i = _.biDivideModulo(i[0], n),
                digit = i[1].digits[0],
                o += l[i[1].digits[0]];
            return (e.isNeg ? "-" : "") + _.reverseStr(o)
        }
        ;
        var u = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        _.digitToHex = function(e) {
            var t = "";
            for (i = 0; i < 4; ++i)
                t += u[15 & e],
                e >>>= 4;
            return _.reverseStr(t)
        }
        ,
        _.biToHex = function(e) {
            for (var t = "", n = (_.biHighIndex(e),
            _.biHighIndex(e)); -1 < n; --n)
                t += _.digitToHex(e.digits[n]);
            return t
        }
        ,
        _.charToHex = function(e) {
            e = 48 <= e && e <= 57 ? e - 48 : 65 <= e && e <= 90 ? 10 + e - 65 : 97 <= e && e <= 122 ? 10 + e - 97 : 0;
            return e
        }
        ,
        _.hexToDigit = function(e) {
            for (var t = 0, n = Math.min(e.length, 4), i = 0; i < n; ++i)
                t <<= 4,
                t |= _.charToHex(e.charCodeAt(i));
            return t
        }
        ,
        _.biFromHex = function(e) {
            for (var t = new C, n = e.length, i = 0; 0 < n; n -= 4,
            ++i)
                t.digits[i] = _.hexToDigit(e.substr(Math.max(n - 4, 0), Math.min(n, 4)));
            return t
        }
        ,
        _.biAdd = function(e, t) {
            var n;
            if (e.isNeg != t.isNeg)
                t.isNeg = !t.isNeg,
                n = _.biSubtract(e, t),
                t.isNeg = !t.isNeg;
            else {
                n = new C;
                for (var i, o = 0, s = 0; s < e.digits.length; ++s)
                    i = e.digits[s] + t.digits[s] + o,
                    n.digits[s] = i % w,
                    o = Number(w <= i);
                n.isNeg = e.isNeg
            }
            return n
        }
        ,
        _.biSubtract = function(e, t) {
            if (e.isNeg != t.isNeg)
                t.isNeg = !t.isNeg,
                i = _.biAdd(e, t),
                t.isNeg = !t.isNeg;
            else {
                for (var n, i = new C, o = 0, s = 0; s < e.digits.length; ++s)
                    n = e.digits[s] - t.digits[s] + o,
                    i.digits[s] = n % w,
                    i.digits[s] < 0 && (i.digits[s] += w),
                    o = 0 - Number(n < 0);
                if (-1 == o) {
                    for (s = o = 0; s < e.digits.length; ++s)
                        n = 0 - i.digits[s] + o,
                        i.digits[s] = n % w,
                        i.digits[s] < 0 && (i.digits[s] += w),
                        o = 0 - Number(n < 0);
                    i.isNeg = !e.isNeg
                } else
                    i.isNeg = e.isNeg
            }
            return i
        }
        ,
        _.biHighIndex = function(e) {
            for (var t = e.digits.length - 1; 0 < t && 0 == e.digits[t]; )
                --t;
            return t
        }
        ,
        _.biNumBits = function(e) {
            for (var t = _.biHighIndex(e), n = e.digits[t], i = 16 * (t + 1), o = i; i - 16 < o && 0 == (32768 & n); --o)
                n <<= 1;
            return o
        }
        ,
        _.biMultiplyDigit = function(e, t) {
            var n, i, o;
            result = new C,
            n = _.biHighIndex(e);
            for (var s = i = 0; s <= n; ++s)
                o = result.digits[s] + e.digits[s] * t + i,
                result.digits[s] = o & k,
                i = o >>> 16;
            return result.digits[1 + n] = i,
            result
        }
        ,
        _.arrayCopy = function(e, t, n, i, o) {
            for (var s = Math.min(t + o, e.length), a = t, r = i; a < s; ++a,
            ++r)
                n[r] = e[a]
        }
        ;
        var h = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
        _.biShiftLeft = function(e, t) {
            var n = Math.floor(t / 16)
              , i = new C;
            _.arrayCopy(e.digits, 0, i.digits, n, i.digits.length - n);
            for (var o = t % 16, s = 16 - o, a = i.digits.length - 1, r = a - 1; 0 < a; --a,
            --r)
                i.digits[a] = i.digits[a] << o & k | (i.digits[r] & h[o]) >>> s;
            return i.digits[0] = i.digits[a] << o & k,
            i.isNeg = e.isNeg,
            i
        }
        ;
        var p = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
        _.biShiftRight = function(e, t) {
            var n = Math.floor(t / 16)
              , i = new C;
            _.arrayCopy(e.digits, n, i.digits, 0, e.digits.length - n);
            for (var o = t % 16, s = 16 - o, a = 0, r = a + 1; a < i.digits.length - 1; ++a,
            ++r)
                i.digits[a] = i.digits[a] >>> o | (i.digits[r] & p[o]) << s;
            return i.digits[i.digits.length - 1] >>>= o,
            i.isNeg = e.isNeg,
            i
        }
        ,
        _.biMultiplyByRadixPower = function(e, t) {
            var n = new C;
            return _.arrayCopy(e.digits, 0, n.digits, t, n.digits.length - t),
            n
        }
        ,
        _.biCompare = function(e, t) {
            if (e.isNeg != t.isNeg)
                return 1 - 2 * Number(e.isNeg);
            for (var n = e.digits.length - 1; 0 <= n; --n)
                if (e.digits[n] != t.digits[n])
                    return e.isNeg ? 1 - 2 * Number(e.digits[n] > t.digits[n]) : 1 - 2 * Number(e.digits[n] < t.digits[n]);
            return 0
        }
        ,
        _.biDivideModulo = function(e, t) {
            var n, i, o = _.biNumBits(e), s = _.biNumBits(t), a = t.isNeg;
            if (o < s)
                return e.isNeg ? ((n = _.biCopy(b)).isNeg = !t.isNeg,
                e.isNeg = !1,
                t.isNeg = !1,
                i = biSubtract(t, e),
                e.isNeg = !0,
                t.isNeg = a) : (n = new C,
                i = _.biCopy(e)),
                [n, i];
            n = new C,
            i = e;
            for (var r = Math.ceil(s / 16) - 1, c = 0; t.digits[r] < 32768; )
                t = _.biShiftLeft(t, 1),
                ++c,
                ++s,
                r = Math.ceil(s / 16) - 1;
            i = _.biShiftLeft(i, c),
            o += c;
            for (var d = Math.ceil(o / 16) - 1, l = _.biMultiplyByRadixPower(t, d - r); -1 != _.biCompare(i, l); )
                ++n.digits[d - r],
                i = _.biSubtract(i, l);
            for (var u = d; r < u; --u) {
                var h = u >= i.digits.length ? 0 : i.digits[u]
                  , p = u - 1 >= i.digits.length ? 0 : i.digits[u - 1]
                  , f = u - 2 >= i.digits.length ? 0 : i.digits[u - 2]
                  , g = r >= t.digits.length ? 0 : t.digits[r]
                  , m = r - 1 >= t.digits.length ? 0 : t.digits[r - 1];
                n.digits[u - r - 1] = h == g ? k : Math.floor((h * w + p) / g);
                for (var v = n.digits[u - r - 1] * (g * w + m), y = 4294967296 * h + (p * w + f); y < v; )
                    --n.digits[u - r - 1],
                    v = n.digits[u - r - 1] * (g * w | m),
                    y = h * w * w + (p * w + f);
                l = _.biMultiplyByRadixPower(t, u - r - 1),
                (i = _.biSubtract(i, _.biMultiplyDigit(l, n.digits[u - r - 1]))).isNeg && (i = _.biAdd(i, l),
                --n.digits[u - r - 1])
            }
            return i = _.biShiftRight(i, c),
            n.isNeg = e.isNeg != a,
            e.isNeg && (n = a ? _.biAdd(n, b) : _.biSubtract(n, b),
            t = _.biShiftRight(t, c),
            i = _.biSubtract(t, i)),
            0 == i.digits[0] && 0 == _.biHighIndex(i) && (i.isNeg = !1),
            [n, i]
        }
        ;
        var f = function f(e, t, n) {
            var i = _;
            this.e = i.biFromHex(e),
            this.d = i.biFromHex(t),
            this.m = i.biFromHex(n),
            this.chunkSize = 2 * i.biHighIndex(this.m),
            this.radix = 16,
            this.barrett = new a.BarrettMu(this.m)
        };
        _.getKeyPair = function(e, t, n) {
            return new f(e,t,n)
        }
        ,
        _.encryptedString = function(e, t) {
            for (var n = [], i = t.length, o = 0; o < i; )
                n[o] = t.charCodeAt(o),
                o++;
            for (; n.length % e.chunkSize != 0; )
                n[o++] = 0;
            for (var s, a, r, c = n.length, d = "", o = 0; o < c; o += e.chunkSize) {
                for (r = new C,
                s = 0,
                a = o; a < o + e.chunkSize; ++s)
                    r.digits[s] = n[a++],
                    r.digits[s] += n[a++] << 8;
                var l = e.barrett.powMod(r, e.e);
                d += (16 == e.radix ? _.biToHex(l) : _.biToString(l, e.radix)) + " "
            }
            return d.substring(0, d.length - 1)
        }
        ,
        _.setMaxDigits(130),
        n.exports = _
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(t, n, E) {
    (function(I) {
        var e = function(e, t, n) {
            var i = E(52)
              , o = E(53)
              , s = E(10)
              , a = E(55)
              , w = E(67)
              , r = E(70)
              , c = E(73)
              , h = E(77)
              , d = E(86)
              , l = E(87)
              , p = E(4)
              , k = E(3)
              , u = E(92)
              , f = new (E(93))
              , g = E(1)
              , C = E(2)
              , m = E(94)
              , v = E(95)
              , y = E(11)
              , b = E(15).getDomain()
              , _ = E(14)
              , S = ""
              , P = E(8)
              , L = "icon-login__pwd"
              , x = E(13)
              , q = E(9)
              , T = ["danmu", "vue-ssr", "qiyiV2", "personalCenter", "main-site", "header-v1", "personalSpace", "comment"];
            n.exports = I.Class("indexAction", {
                "extend": s,
                "construct": function() {
                    this.logger = new q.LoginLogger("QiyiLoginLoader"),
                    this.arrOpt = [],
                    this.login_src = null,
                    this.smsPhoneNum = null
                },
                "methods": {
                    "openLoginRegWindow": function(e) {
                        C.initConfig(e),
                        S = C.getConfig(),
                        this.login_src = e.login_src || "0",
                        this.logger.log("Login v2 sdk init location:".concat(window.location.href)),
                        P.qosSend({
                            "diy_ec": "",
                            "diy_ls": "show_login",
                            "diy_method": "600"
                        }),
                        I.cookie.get("firstkey") && I.cookie.remove("firstkey", {
                            "expires": 31536e6,
                            "path": "/",
                            "domain": b
                        }),
                        I.cookie.get("seckey") && I.cookie.remove("seckey", {
                            "expires": 31536e6,
                            "path": "/",
                            "domain": b
                        }),
                        I.cookie.get("thirdkey") && I.cookie.remove("thirdkey", {
                            "expires": 31536e6,
                            "path": "/",
                            "domain": b
                        });
                        var t = {
                            "title": null == e ? void 0 : e.title,
                            "subTitle": null == e ? void 0 : e.subTitle,
                            "optTitle": null == e ? void 0 : e.optTitle,
                            "optSubTitle": null == e ? void 0 : e.optSubTitle
                        }
                          , n = (null == e ? void 0 : e.loginSource) || (null == e ? void 0 : e.business) || "normal";
                        e.types = e.types || (5 == e.firstShow ? "" : "1,2,3,4,5");
                        var i = this;
                        this.config = I.extend({
                            "agenttype": S.agenttype,
                            "ptid": S.ptid,
                            "skinMode": S.skinMode,
                            "protocolDom": S.protocolDom,
                            "logoUrl": S.logoUrl
                        }, e),
                        this.createFloater();
                        var o = document.querySelector('[data-login-sdk="panel"]');
                        this.doms = {
                            "mask": o.querySelector('[data-login-sdk="mask"]'),
                            "panelLeft": o.querySelector('[data-login-sdk="panel-left"]'),
                            "panelRight": o.querySelector('[data-login-sdk="panel-right"]'),
                            "baseLoginPanel": o.querySelector('[data-login-sdk="baseLogin"]'),
                            "scanLoginPanel": o.querySelector('[data-login-sdk="scanLogin"]'),
                            "smsLoginRegPanel": o.querySelector('[data-login-sdk="smsLoginreg"]'),
                            "thridPartyPanel": o.querySelector('[data-login-sdk="thridPartyLogin"]'),
                            "autoRegister": o.querySelector('[data-login-sdk="auto-register"]'),
                            "regPanel": o.querySelector('[data-login-sdk="reg"]'),
                            "realNamePanel": o.querySelector('[data-login-sdk="realname"]'),
                            "upSmsCodePanel": o.querySelector('[data-login-sdk="upSmsCode"]'),
                            "closeBtn": o.querySelector('[data-login-sdk="close"]'),
                            "toastPanel": o.querySelector('[data-login-sdk="toast"]'),
                            "leftIconPanel": o.querySelector('[data-login-sdk="leftIcon"]'),
                            "protocolPanel": o.querySelector('[data-login-sdk="protocol"]'),
                            "slideCover": o.querySelector('[data-login-sdk="slideCover"]'),
                            "slidePanel": o.querySelector('[data-login-sdk="slidePanel"]'),
                            "verifyPhonePanel": o.querySelector('[data-login-sdk="verifyPhone"]'),
                            "logoImg": o.querySelector('[data-login-sdk="logoImg"]'),
                            "regProtocolPanel": o.querySelector('[data-login-sdk="regProtocol"]'),
                            "secondVerify": o.querySelector('[data-login-sdk="secondVerify"]'),
                            "smsLoginCheck": o.querySelector('[data-login-sdk="smsLoginCheck"]'),
                            "deviceVerify": o.querySelector('[data-login-sdk="deviceVerify"]'),
                            "businessPanel": document.querySelector('[data-login-sdk="business"]'),
                            "xiaomiForbiddenPanel": document.querySelector('[data-login-sdk="xiaomiForbidden"]'),
                            "xiaomiForbiddenBtn": document.querySelector('[data-login-sdk="xiaomiForbidden-btn"]'),
                            "xiaomiForbiddenClose": document.querySelector('[data-login-sdk="xiaomiForbidden-close"]')
                        },
                        this.config.hideClose && k.addClass(this.doms.closeBtn, "dn"),
                        "pca" == this.config.business && (k.addClass(o, "qy-login-pca"),
                        this.resetSize(420)),
                        this.verifyCenter = new d({
                            "slideCover": this.doms.slideCover,
                            "slidePanel": this.doms.slidePanel
                        }),
                        this.verifyCenter.init(function() {
                            window.VerifyCenter && window.VerifyCenter.collect && window.VerifyCenter.collect.init({
                                "ignoreJsBridge": !0
                            })
                        }),
                        this.secondVerify = new l({
                            "panel": this.doms.secondVerify,
                            "businessPanel": this.doms.businessPanel,
                            "sdkPanel": o,
                            "isThirdLogin": 0 <= this.config.types.indexOf(4)
                        }),
                        this.isShowVipBusiness = !1,
                        this.showPanel = null,
                        this.prePanel = null,
                        this.showType = -1,
                        this.localCookie = {};
                        this.initLoginTypes(),
                        this.defaultShowType = 2,
                        this.config.logoUrl && (this.doms.logoImg.src = this.config.logoUrl),
                        this.config.logoHeight && (this.doms.logoImg.style.height = this.config.logoHeight + "px"),
                        this.bindEvent(),
                        setTimeout(function() {
                            i.toggelLoginPanel(),
                            i.initOptLogin(n, t),
                            k.removeClass(o, "dn"),
                            y.show({
                                "rpage": "passsdkv2",
                                "login_src": i.login_src
                            })
                        }, 10)
                    },
                    "initLoginTypes": function() {
                        var e = this.config.types;
                        (e.indexOf(1) < 0 && e.indexOf(3) < 0 || e.indexOf(2) < 0) && k.addClass(this.doms.leftIcon, "dn"),
                        this.config.protocolDom && (this.doms.protocolPanel.innerHTML = this.config.protocolDom)
                    },
                    "toggelLoginPanel": function(e, t, n) {
                        e = e || this.config.firstShow || this.defaultShowType;
                        switch (e = parseInt(e)) {
                        case 1:
                            this.initBaseLogin();
                            break;
                        case 2:
                            this.initScanLogin();
                            break;
                        case 3:
                            this.initSmsLogin();
                            break;
                        case 4:
                            this.initRegist();
                            break;
                        case 5:
                            this.initRealName(t, n);
                            break;
                        default:
                            this.initBaseLogin()
                        }
                        4 != e && 0 <= this.config.types.indexOf(4) && this.initThirdLogin(e)
                    },
                    "initBaseLogin": function() {
                        this.baseLogin || (this.baseLogin = new a({
                            "panel": this.doms.baseLoginPanel,
                            "types": this.config.types,
                            "verifyCenter": this.verifyCenter,
                            "toastPanel": this.doms.toastPanel,
                            "business": this.config.business,
                            "errMsg": this.config.errMsg,
                            "secondVerify": this.secondVerify
                        }),
                        this.baseLogin.init()),
                        k.addClass(this.doms.scanLoginPanel, "dn"),
                        k.addClass(this.doms.smsLoginRegPanel, "dn"),
                        this.baseLogin.showPanel(),
                        this.resetAcode(this.baseLogin),
                        this.showPanel = this.doms.baseLoginPanel,
                        this.showType = 1
                    },
                    "initSmsLogin": function() {
                        this.smsLoginReg || (this.smsLoginReg = new h({
                            "panel": this.doms.smsLoginRegPanel,
                            "types": this.config.types,
                            "upSmsCodePanel": this.doms.upSmsCodePanel,
                            "verifyCenter": this.verifyCenter,
                            "secondVerify": this.secondVerify,
                            "phoneNum": this.smsPhoneNum || ""
                        }),
                        this.smsLoginReg.init()),
                        this.smsLoginReg.showPanel("", this.smsPhoneNum),
                        this.smsPhoneNum = null,
                        this.resetAcode(this.smsLoginReg),
                        this.showPanel = this.doms.smsLoginRegPanel,
                        "login" == this.type && (k.addClass(this.doms.scanLoginPanel, "dn"),
                        k.addClass(this.doms.baseLoginPanel, "dn"),
                        this.showPanel = this.doms.smsLoginRegPanel),
                        this.showType = 3
                    },
                    "initThirdLogin": function(e) {
                        this.thridParty || (this.thridParty = new c({
                            "panel": this.doms.thridPartyPanel,
                            "verifyCenter": this.verifyCenter,
                            "types": this.config.thirds,
                            "toastPanel": this.doms.toastPanel,
                            "business": this.config.business,
                            "thirdLoginCB": this.config.thirdLoginCB,
                            "secondVerify": this.secondVerify
                        }),
                        this.thridParty.init(),
                        k.removeClass(this.doms.thridPartyPanel, "dn")),
                        this.sendThridPartyBlock(e)
                    },
                    "initScanLogin": function(e) {
                        var t = "login"
                          , n = ""
                          , i = ""
                          , o = ""
                          , s = "";
                        e && (t = (null == e ? void 0 : e.type) || "login",
                        i = (null == e ? void 0 : e.prePanel) || "",
                        n = (null == e ? void 0 : e.msg) || (null == e ? void 0 : e.mobile) || "",
                        e.loginData && (o = e.loginData.uid_enc,
                        s = 3)),
                        "login" != t ? (this.deviceVerify = new r({
                            "type": t,
                            "msg": n,
                            "business": null === (e = this.config) || void 0 === e ? void 0 : e.business,
                            "appTitle": null === (e = this.config) || void 0 === e ? void 0 : e.appTitle,
                            "panel": this.doms.deviceVerify,
                            "device_auth_uid": o,
                            "new_device_auth": s,
                            "prePanel": i
                        }),
                        this.deviceVerify.init(),
                        k.removeClass(this.doms.mask, "dn"),
                        this.deviceVerify.showPanel({
                            "type": t,
                            "msg": n
                        })) : this.scanLogin || (this.scanLogin = new r({
                            "type": t,
                            "msg": n,
                            "types": null === (i = this.config) || void 0 === i ? void 0 : i.types,
                            "business": null === (i = this.config) || void 0 === i ? void 0 : i.business,
                            "appTitle": null === (i = this.config) || void 0 === i ? void 0 : i.appTitle,
                            "panel": this.doms.scanLoginPanel,
                            "device_auth_uid": o,
                            "new_device_auth": s
                        }),
                        this.scanLogin.init(),
                        k.addClass(this.showPanel, "dn")),
                        "login" == t && this.scanLogin.showPanel({
                            "type": t,
                            "msg": n
                        }),
                        2 != this.showType && (-1 == this.showType ? !this.config.types || 0 <= this.config.types.indexOf("1") ? this.preShowType = 1 : this.preShowType = 3 : this.preShowType = this.showType),
                        "login" == t && (k.addClass(this.doms.baseLoginPanel, "dn"),
                        k.addClass(this.doms.smsLoginRegPanel, "dn"),
                        this.showPanel = this.doms.scanLoginPanel)
                    },
                    "toggleSpecialPanel": function(e, t, n) {
                        e ? ("3" != e && (k.removeClass(this.doms.thridPartyPanel, "dn"),
                        n && this.sendThridPartyBlock(this.showType),
                        k.removeClass(this.doms.leftIconPanel, "dn")),
                        k.removeClass(this.doms.protocolPanel, "dn")) : (k.addClass(this.doms.thridPartyPanel, "dn"),
                        k.addClass(this.doms.leftIconPanel, "dn"),
                        t || k.addClass(this.doms.protocolPanel, "dn"))
                    },
                    "initRegist": function() {
                        var e = this.doms.regPanel;
                        this.regIns || (this.regIns = new h({
                            "panel": e,
                            "upSmsCodePanel": this.doms.upSmsCodePanel,
                            "verifyCenter": this.verifyCenter,
                            "type": "reg"
                        }),
                        this.regIns.init()),
                        this.toggleSpecialPanel("", !0),
                        this.regIns.showPanel(),
                        this.resetAcode(this.regIns),
                        this.showPanel = e
                    },
                    "initRealName": function(e, t) {
                        var n = this.doms.realNamePanel;
                        this.realNameIns = new h({
                            "panel": n,
                            "upSmsCodePanel": this.doms.upSmsCodePanel,
                            "verifyCenter": this.verifyCenter,
                            "type": "realname",
                            "secondVerify": this.secondVerify,
                            "hideBack": 5 == this.config.firstShow,
                            "token": e,
                            "verifyPhonePanel": this.doms.verifyPhonePanel,
                            "loginSucRpage": t
                        }),
                        this.realNameIns.init(),
                        this.resetAcode(this.realNameIns),
                        this.realNameIns.showPanel(),
                        k.removeClass(this.doms.mask, "dn")
                    },
                    "initOptLogin": function(e, t) {
                        var n, i, o, s, a, r, c = parseInt((new Date).getTime() / 1e3), d = "", l = JSON.parse(decodeURIComponent(localStorage.getItem("firstkey"))) || {}, u = JSON.parse(decodeURIComponent(localStorage.getItem("seckey"))) || {}, h = JSON.parse(decodeURIComponent(localStorage.getItem("thirdkey"))) || {}, p = [];
                        null !== l && null !== (n = l.value) && void 0 !== n && n.uid && ((null === l || null === (s = l.value) || void 0 === s ? void 0 : s.time) < c ? localStorage.removeItem("firstkey") : p.push(l)),
                        null !== u && null !== (i = u.value) && void 0 !== i && i.uid && ((null === u || null === (a = u.value) || void 0 === a ? void 0 : a.time) < c ? localStorage.removeItem("seckey") : p.push(u)),
                        null !== h && null !== (o = h.value) && void 0 !== o && o.uid && ((null === h || null === (r = h.value) || void 0 === r ? void 0 : r.time) < c ? localStorage.removeItem("thirdkey") : p.push(h)),
                        0 < p.length && (d = "hasOpt"),
                        this.logger.log("Opt login page init type_".concat(d || "noOpt"));
                        for (var f = 0; f < p.length - 1; f++) {
                            for (var g, m, v, y = f, b = f + 1; b < p.length; b++)
                                (null === (m = p[b]) || void 0 === m || null === (g = m.value) || void 0 === g ? void 0 : g.time) < (null === (m = p[y]) || void 0 === m || null === (v = m.value) || void 0 === v ? void 0 : v.time) && (y = b);
                            var _ = [p[y], p[f]];
                            p[f] = _[0],
                            p[y] = _[1]
                        }
                        this.otpLoginAction = new w({
                            "verifyCenter": this.verifyCenter,
                            "secondVerify": this.secondVerify,
                            "toastPanel": this.doms.toastPanel,
                            "panel": this.doms.panelLeft,
                            "type": d,
                            "opt_info": p || [],
                            "loginSource": e,
                            "leftText": t
                        });
                        t = C.getConfig(),
                        t = null == t ? void 0 : t.agenttype;
                        1 != t && 39 != t && (p.length = 0),
                        0 < p.length ? (k.addClass(this.doms.panelLeft, "qy-haslogin-container-left"),
                        k.removeClass(this.doms.panelLeft, "qy-login-container-left"),
                        k.removeClass(this.doms.panelRight, "qy-login-container-right"),
                        k.addClass(this.doms.panelRight, "qy-login-container-right-not")) : k.hasClass(this.doms.panelLeft, "qy-haslogin-container-left") && (k.addClass(this.doms.panelLeft, "qy-login-container-left"),
                        k.removeClass(this.doms.panelLeft, "qy-haslogin-container-left"),
                        k.removeClass(this.doms.panelRight, "qy-login-container-right-not"),
                        k.addClass(this.doms.panelRight, "qy-login-container-right")),
                        this.otpLoginAction.init()
                    },
                    "initUpSms": function(e) {
                        var t = this.doms.upSmsCodePanel;
                        this.upSmsCodeIns || (this.upSmsCodeIns = new h({
                            "panel": t,
                            "upSmsCodePanel": t,
                            "verifyCenter": this.verifyCenter,
                            "type": e.type
                        }),
                        this.upSmsCodeIns.init()),
                        this.upSmsCodeIns.showSmsLoginUp(e)
                    },
                    "bindEvent": function() {
                        var t = this
                          , o = this
                          , n = function n(e) {
                            e.stopPropagation && e.stopPropagation(),
                            o.closeFloater(),
                            y.click({
                                "rpage": "passsdkv2",
                                "block": "psprt_exit"
                            })
                        };
                        g.on(this.doms.closeBtn, "click", n);
                        var i = function i(e) {
                            e.stopPropagation && e.stopPropagation(),
                            k.addClass(o.doms.xiaomiForbiddenPanel, "dn"),
                            k.addClass(o.doms.mask, "dn")
                        }
                          , s = function s(e) {
                            console.log("小米登录按钮"),
                            e.stopPropagation && e.stopPropagation(),
                            p.fire({
                                "type": "xiaomiLogin"
                            }),
                            k.addClass(o.doms.xiaomiForbiddenPanel, "dn"),
                            k.addClass(o.doms.mask, "dn")
                        };
                        g.on(this.doms.xiaomiForbiddenBtn, "click", s),
                        g.on(this.doms.xiaomiForbiddenClose, "click", i),
                        window.addEventListener && window.addEventListener("message", function(e) {
                            "qiyiHeaderFloaterShow" === e.data.type && t.closeFloater()
                        });
                        var a, r, c = this.doms.protocolPanel.querySelector('[data-protocol-btn="agree"]'), d = this.doms.protocolPanel.querySelector('[data-login-sdk="agreementPop"]'), l = this.doms.protocolPanel.querySelector('[data-login-sdk="agreementTriangle"]');
                        c && ("2" == this.config.types && "2" == this.config.firstShow ? k.addClass(c, "dn") : (a = function a(e) {
                            e.stopPropagation && e.stopPropagation(),
                            k.hasClass(c, "agree-selected") ? (k.removeClass(c, "agree-selected"),
                            k.addClass(c, "iconfont-agree")) : (k.addClass(c, "agree-selected"),
                            k.removeClass(c, "iconfont-agree"),
                            k.addClass(d, "dn"),
                            k.addClass(l, "dn"))
                        }
                        ,
                        g.on(c, "click", a))),
                        d && (r = function r(e) {
                            e.stopPropagation && e.stopPropagation(),
                            k.hasClass(c, "agree-selected") || (k.addClass(c, "agree-selected"),
                            k.removeClass(c, "iconfont-agree"),
                            k.addClass(d, "dn"),
                            k.addClass(l, "dn"))
                        }
                        ,
                        g.on(d, "click", r));
                        var u = function u(e) {
                            e.stopPropagation && e.stopPropagation(),
                            k.hasClass(d, "dn") || (k.addClass(d, "dn"),
                            k.addClass(l, "dn"))
                        };
                        g.on(this.doms.panelLeft, "click", u),
                        g.on(this.doms.panelRight, "click", u),
                        g.on(this.doms.panel, "click", u),
                        p.on("showQrCodeLogin", function(e) {
                            o.initScanLogin(e.data)
                        }),
                        p.on("showSmsLogin", function(e) {
                            o.smsLoginCheck = new h({
                                "panel": o.doms.smsLoginCheck,
                                "types": o.config.types,
                                "upSmsCodePanel": o.doms.upSmsCodePanel,
                                "verifyCenter": o.verifyCenter,
                                "secondVerify": o.secondVerify,
                                "type": "loginToast"
                            }),
                            o.smsLoginCheck.init(),
                            o.smsLoginCheck.showPanel(),
                            k.removeClass(o.doms.mask, "dn"),
                            o.logger.log("smslogin page show"),
                            o.resetAcode(o.smsLoginCheck)
                        }),
                        p.on("handleLoginSuc", function(e) {
                            o.showLoginToast(e),
                            console.log("data", e);
                            var t = {
                                "type": o.showType
                            };
                            I.cookie.get("P00001") ? (P.qosSend({
                                "diy_ec": "A00000",
                                "diy_ls": e.data.methods || "",
                                "diy_method": "600"
                            }),
                            o.logger.log("login success ".concat(JSON.stringify(e))),
                            P.qosCommonSend({
                                "diy_pca_qc005": I.cookie.get("QC005_PCA") || "",
                                "diy_common": "pca_device_id"
                            }),
                            I.cookie.get("QC005_PCA") && I.cookie.set("isRefreshAuth", "1", {
                                "expires": 31536e6,
                                "path": "/",
                                "domain": b
                            })) : (o.logger.error("login has finished ,but token is not ".concat(JSON.stringify(e))),
                            x("WIKI-LOGIN-TOKEN-FAIL__".concat(I.cookie.get("QC005_PCA") || I.cookie.get("QC005")))),
                            !o.secondVerify.isShow && (o.isLoginType(e, "login_scs_sms") || o.isLoginType(e, "login_scs_acc") || o.isLoginType(e, "login_scs_3")) && -1 !== T.indexOf(o.config.business) && "vue-ssr-player-afterAd" !== o.config.business ? t.conformLoginType = 1 : t.conformLoginType = 0,
                            t = Object.assign(o.localCookie, t),
                            o.setCookie(t);
                            var n = null;
                            "pca" == o.config.business && "login_scs_acc" === e.data.rpage && (n = o.baseLogin.getAutoLoginStatus(),
                            e.auto_login = n),
                            o.updateInfo && 0 <= e.data.rpage.indexOf("login_scs_3") && (e.data.isNewUser = !0),
                            o.notify({
                                "type": "login",
                                "data": e
                            }),
                            e.data && e.data.rpage && e.data.rpage.indexOf("login_scs_3") < 0 && (null != n ? t.autoLogin = n : "pca" == o.config.business && o.localCookie.autoLogin != undefined && (t.autoLogin = o.localCookie.autoLogin),
                            t = Object.assign(o.localCookie, t),
                            I.cookie.set("QC160", JSON.stringify(t), {
                                "expires": 31536e6,
                                "path": "/",
                                "domain": b
                            }));
                            var i = o.secondVerify.isInitVipBusiness();
                            p.fire({
                                "type": "loginSuccessClearTime"
                            }),
                            setTimeout(function() {
                                o.secondVerify && (i || o.closeFloater())
                            }, 2e3),
                            "pca" != o.config.business && m.request()
                        }),
                        p.on("quitLoginSuc", function(e) {
                            is_opt = !1,
                            (o = this).logout(e)
                        }),
                        p.on("optDev", function(e) {
                            var t, n;
                            o.initOptLogin(null == e || null === (t = e.data) || void 0 === t ? void 0 : t.loginSource, null == e || null === (n = e.data) || void 0 === n ? void 0 : n.leftText)
                        }),
                        p.on("showToastMi", function() {
                            k.removeClass(o.doms.xiaomiForbiddenPanel, "dn"),
                            k.removeClass(o.doms.mask, "dn")
                        }),
                        p.on("backShow", function(e) {
                            e.data.resetShowPanel && 2 == o.showType ? (o.initScanLogin(),
                            o.sendThridPartyBlock(2)) : o.toggelLoginPanel(o.showType),
                            e.data.resetSize && o.resetSize(420)
                        }),
                        p.on("toggleSpecialPanel", function(e) {
                            o.toggleSpecialPanel(e.data, "", !0)
                        }),
                        p.on("toggleLoginTypes", function(e) {
                            5 != e.data.type && k.addClass(o.showPanel, "dn"),
                            4 != e.data.type && (o.toggleSpecialPanel(!0),
                            2 == o.showType && k.hasClass(o.doms.leftIcon, L) && o.toggleIcon("icon-login__qrcode", L)),
                            o.toggelLoginPanel(e.data.type, e.data.token, e.data.rpage),
                            3 == e.data.type ? (k.removeClass(o.doms.autoRegister, "dn"),
                            k.addClass(o.doms.protocolPanel, "qy-login-agreement-sms"),
                            k.removeClass(o.doms.protocolPanel, "qy-login-agreement")) : 1 != e.data.type && 2 != e.data.type || (k.addClass(o.doms.autoRegister, "dn"),
                            k.hasClass(o.doms.protocolPanel, "qy-login-agreement-sms") && (k.removeClass(o.doms.protocolPanel, "qy-login-agreement-sms"),
                            k.addClass(o.doms.protocolPanel, "qy-login-agreement")))
                        }),
                        p.on("globalAcodeChange", function(e) {
                            o.acode = e.data.acode,
                            o.aname = e.data.name
                        }),
                        p.on("setUpdateInfo", function(e) {
                            o.updateInfo = e.data.updateInfo
                        }),
                        p.on("resizeHeight", function(e) {
                            o.resetSize(e.data)
                        }),
                        p.on("callThirdLogin", function(e) {
                            var t = e.data.type
                              , e = e.data.prePanel;
                            o.thridParty.callThirdLogin(t, e)
                        }),
                        p.on("callScanLogin", function(e) {
                            o.initScanLogin(e.data)
                        }),
                        p.on("callUpSmsCode", function(e) {
                            o.initUpSms({
                                "loginData": e.data.loginData,
                                "type": e.data.type || "login",
                                "prePanel": e.data.prePanel,
                                "sourceLogin": e.data.sourceLogin
                            })
                        }),
                        p.on("showBusiness", function(e) {
                            o.hide(o.sdkPanel),
                            o.show(o.doms.businessPanel)
                        }),
                        p.on("closeFloater", function() {
                            o.closeFloater()
                        }),
                        p.on("isShowVipBusiness", function(e) {
                            o.isShowVipBusiness = !0
                        }),
                        p.on("updateLocalCookie", function(e) {
                            e = e.data;
                            o.localCookie = e
                        })
                    },
                    "resetAcode": function(e) {
                        this.acode && e.resetAcode(this.acode, this.aname)
                    },
                    "showLoginToast": function(t) {
                        var e, n, i, o, s, a, r, c, d, l = this, u = document.querySelector('[data-login-sdk="panel-container"]'), h = {
                            "title": "登录成功"
                        };
                        t.data && (null != t && null !== (e = t.data) && void 0 !== e && e.icon || null != t && null !== (n = t.data) && void 0 !== n && null !== (i = n.userinfo) && void 0 !== i && i.icon) && (h = {
                            "title": t.data.isNewUser ? "恭喜，注册成功～" : "登录成功",
                            "tip": t.data.isNewUser ? "下面是您将在爱奇艺使用的头像和昵称" : t.data.isReg ? "发现您曾经注册过爱奇艺账号，登录中……" : "",
                            "nickname": (null == t || null === (o = t.data) || void 0 === o ? void 0 : o.nickname) || (null == t || null === (s = t.data) || void 0 === s || null === (a = s.userinfo) || void 0 === a ? void 0 : a.nickname) || "一名用户",
                            "icon": t.data.icon ? null == t || null === (r = t.data) || void 0 === r ? void 0 : r.icon : null == t || null === (c = t.data) || void 0 === c || null === (d = c.userinfo) || void 0 === d ? void 0 : d.icon,
                            "isVip": ""
                        }),
                        this.config.hideIcon && (h.icon = ""),
                        this.config.hideNickname && (h.nickname = ""),
                        _.loginSuc(this.doms.toastPanel, h),
                        k.addClass(u, "hide_container"),
                        I.cookie.get("P00003") ? y.show({
                            "rpage": t.data.rpage,
                            "pu": t.data.uid || I.cookie.get("P00003"),
                            "login_src": this.login_src
                        }) : v.request(function() {
                            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
                            y.show({
                                "rpage": t.data.rpage,
                                "pu": e.uid,
                                "login_src": l.login_src
                            })
                        });
                        h = window.location.href;
                        "vippage" === (null === (u = this.config) || void 0 === u ? void 0 : u.business) && g.getQueryValue(h, "from_url") && (window.location.href = "https:" + decodeURIComponent(g.getQueryValue(h, "from_url")))
                    },
                    "toggleIcon": function(e, t) {
                        var n = this.doms.leftIcon;
                        k.addClass(n, e),
                        k.removeClass(n, t)
                    },
                    "sendThridPartyBlock": function(e) {
                        var t = 1 == e || 2 == e || 3 == e;
                        this.thridParty && t && (t = 1 == e ? this.doms.baseLoginPanel : 2 == e ? this.doms.scanLoginPanel : this.doms.smsLoginRegPanel,
                        this.thridParty.sendBlock(e, t))
                    },
                    "createFloater": function() {
                        this.logger.log("Login page creating");
                        var e = {
                            "isResize": !1,
                            "zIndex": 9999,
                            "domHeight": 507,
                            "resetSize": "pca" != this.config.business,
                            "left": null === (e = this.config) || void 0 === e ? void 0 : e.left,
                            "bg": null === (e = this.config) || void 0 === e ? void 0 : e.background
                        };
                        this.config.background && (e.bg = this.config.background),
                        this.floater || (this.floater = new I.floater({
                            "view": new I.floaterView(e)
                        })),
                        this.floater.show({
                            "html": i
                        }),
                        this.notify("pcLoginSDKShow")
                    },
                    "createQuitFloater": function(e) {
                        this.floater || (this.floater = new I.floater({
                            "view": new I.floaterView({
                                "isResize": !1,
                                "zIndex": 9999,
                                "domHeight": 186,
                                "resetSize": !0
                            })
                        })),
                        this.floater.show({
                            "html": o
                        }),
                        this.notify("pcLoginSDKQuitShow")
                    },
                    "closeFloater": function(e) {
                        var t = this;
                        this.floater.destroy(),
                        this.doms = {},
                        g.unAll(),
                        p.unAll(S.globalEvent || e.globalEvent),
                        this.thridParty && this.thridParty.destroy(),
                        this.scanLogin && this.scanLogin.destroy(),
                        this.floater = null,
                        this.thridParty = null,
                        this.scanLogin = null,
                        this.baseLogin = null,
                        this.smsLoginReg = null,
                        this.smsLoginCheck = null,
                        this.regIns = null,
                        this.realNameIns = null,
                        this.showPanel = null,
                        this.prePanel = null,
                        this.showType = -1,
                        this.isSmsThirdLogin = !1,
                        this.acode = "",
                        this.aname = "",
                        this.updateInfo = !1,
                        this.secondVerify = null,
                        this.deviceVerify = null,
                        "pca" !== ((this.smsPhoneNum = null) === (e = this.config) || void 0 === e ? void 0 : e.business) && "uwp-was" !== (null === (e = this.config) || void 0 === e ? void 0 : e.business) || !I.cookie.get("P00001") ? this.notify("pcLoginSDKHide") : this.sendUserInfo().then(function() {
                            t.notify("pcLoginSDKHide")
                        })["catch"](function() {
                            t.notify("pcLoginSDKHide")
                        })
                    },
                    "sendUserInfo": function() {
                        return new Promise(function(t, n) {
                            window.external && window.external.hostInfo && "function" == typeof window.external.sendRequest ? fetch("//pcw-api.iqiyi.com/passport/user/userinfodetail", {
                                "credentials": "include"
                            }).then(function(e) {
                                setTimeout(function() {
                                    t()
                                }, 1e3)
                            }, function(e) {
                                n()
                            }) : t()
                        }
                        )
                    },
                    "openQuitToast": function(t) {
                        C.initConfig(t);
                        var n = C.getConfig()
                          , i = this
                          , o = "4"
                          , e = document.querySelector('[data-quit-sdk="quit-toast"]');
                        this.createQuitFloater(e);
                        var s = document.querySelector('[data-quit-sdk="btn-quit"]')
                          , e = document.querySelector('[data-quit-sdk="btn-cancel"]')
                          , a = document.querySelector('[data-quit-sdk="btn-select"]')
                          , r = function r(e) {
                            e.stopPropagation && e.stopPropagation(),
                            i.closeFloater(n)
                        }
                          , c = function c(e) {
                            e.stopPropagation && e.stopPropagation(),
                            i.logout(t, o),
                            i.closeFloater(n)
                        }
                          , d = function d(e) {
                            e.stopPropagation && e.stopPropagation(),
                            o = k.hasClass(a, "quit-toast-selected") ? (k.removeClass(a, "quit-toast-selected"),
                            k.addClass(a, "quit-toast-select"),
                            "") : (k.removeClass(a, "quit-toast-select"),
                            k.addClass(a, "quit-toast-selected"),
                            "4")
                        };
                        g.on(e, "click", r),
                        g.on(s, "click", c),
                        g.on(a, "click", d)
                    },
                    "logout": function(s, e) {
                        var t, a = this, r = !1, c = !1, n = e, d = [JSON.parse(decodeURIComponent(localStorage.getItem("firstkey"))) ? JSON.parse(decodeURIComponent(localStorage.getItem("firstkey"))) : {
                            "name": "firstkey",
                            "value": {},
                            "ind": "1"
                        }, JSON.parse(decodeURIComponent(localStorage.getItem("seckey"))) ? JSON.parse(decodeURIComponent(localStorage.getItem("seckey"))) : {
                            "name": "seckey",
                            "value": {},
                            "ind": "2"
                        }, JSON.parse(decodeURIComponent(localStorage.getItem("thirdkey"))) ? JSON.parse(decodeURIComponent(localStorage.getItem("thirdkey"))) : {
                            "name": "thirdkey",
                            "value": {},
                            "ind": "3"
                        }];
                        P00002 = JSON.parse(decodeURIComponent(I.cookie.get("P00002"))),
                        QC179 = JSON.parse(decodeURIComponent(I.cookie.get("QC179")));
                        var l = {
                            "icon": "",
                            "uid": (null === (t = QC179) || void 0 === t ? void 0 : t.uid) || "",
                            "viptype": (null === (t = QC179) || void 0 === t ? void 0 : t.vipTypes) || "",
                            "nickname": ""
                        };
                        (s = s || {}).requestType = n,
                        "4" == e ? (P.qosSend({
                            "diy_ec": "",
                            "diy_ls": "退登成功",
                            "diy_method": "6101"
                        }),
                        r || f.getUserInfo(function(e) {
                            var t, n, i, o;
                            l.icon = null == e || null === (t = e.data) || void 0 === t || null === (n = t.userinfo) || void 0 === n ? void 0 : n.icon,
                            l.nickname = null == e || null === (i = e.data) || void 0 === i || null === (o = i.userinfo) || void 0 === o ? void 0 : o.nickname,
                            u.request(s, function(e) {
                                var t, n, i, o, s;
                                r || (l.opt_key = (null == e || null === (t = e.data) || void 0 === t ? void 0 : t.opt_key) || "",
                                l.time = (null == e || null === (n = e.data) || void 0 === n ? void 0 : n.expire) || "",
                                l.uid && l.opt_key ? d[0].value.uid && d[1].value.uid && d[2].value.uid ? (s = null === (n = d[o = 0]) || void 0 === n || null === (i = n.value) || void 0 === i ? void 0 : i.time,
                                d.forEach(function(e, t) {
                                    var n, i;
                                    e.value.uid == l.uid && (e.value = l,
                                    c = !0,
                                    localStorage.removeItem(null == e ? void 0 : e.name),
                                    localStorage.setItem(e.name, JSON.stringify(e))),
                                    (null == e || null === (n = e.value) || void 0 === n ? void 0 : n.time) <= s && (s = null == e || null === (i = e.value) || void 0 === i ? void 0 : i.time,
                                    d[o = t].value = l)
                                }),
                                c || (localStorage.removeItem(d[o].name),
                                localStorage.setItem(d[o].name, JSON.stringify(d[o])))) : (d.forEach(function(e) {
                                    e.value.uid == l.uid && (e.value = l,
                                    c = !0,
                                    localStorage.removeItem(null == e ? void 0 : e.name),
                                    localStorage.setItem(e.name, JSON.stringify(e)))
                                }),
                                c || d.forEach(function(e) {
                                    e.value.uid || r || (e.value = l,
                                    localStorage.setItem(e.name, JSON.stringify(e)),
                                    r = !0)
                                }),
                                r = !0) : !l.opt_key && l.uid && d.forEach(function(e) {
                                    var t;
                                    (null == e || null === (t = e.value) || void 0 === t ? void 0 : t.uid) == (null == l ? void 0 : l.uid) && localStorage.removeItem(null == e ? void 0 : e.name)
                                })),
                                a.notify("logout")
                            })
                        })) : (P.qosSend({
                            "diy_ec": "",
                            "diy_ls": "退登成功",
                            "diy_method": "6102"
                        }),
                        u.request(s, function(e) {
                            a.notify("logout")
                        }))
                    },
                    "notify": function(e) {
                        var t = "string" == typeof e ? {
                            "type": e
                        } : e;
                        t.business = null === (e = this.config) || void 0 === e ? void 0 : e.business,
                        p.fire(t),
                        window.postMessage(t, window.location.href)
                    },
                    "resetSize": function(e) {
                        "pca" == this.config.business && (e = '{"call_type":"request", "cmd":"page_size_change", "cmd_context":"", "cmd_data":{"width":360,"height":' + e + "}}",
                        window.external.js_app_service(e))
                    },
                    "isLoginType": function(e, t) {
                        e = (e.data || {}).rpage,
                        e = void 0 === e ? "" : e;
                        return t === e || 0 <= e.indexOf(t)
                    },
                    "setCookie": function(e) {
                        I.cookie.set("QC160", JSON.stringify(e), {
                            "expires": 31536e6,
                            "path": "/",
                            "domain": b
                        })
                    }
                }
            })
        }
        .call(n, E, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, E(0))
}
, function(e, t) {
    e.exports = '<div class="qy-login-wrapper" data-login-sdk="panel"> <div class="qy-login-container" data-login-sdk="panel-container"> <div class="qy-login-mask dn" data-login-sdk="mask"></div> <div class="qy-login-container-left" data-login-sdk="panel-left"> </div> <div class="qy-login-container-right" data-login-sdk="panel-right"> <div class="qy-login-close"> <span class="iconfont icon-close" style="font-family:iconfontlogin!important" data-login-sdk="close"></span> </div> <div class="qy-login-main" data-login-sdk="login-right-main"> <div class="qy-login-form"> <div class="login-form-inner"> <div class="login-form"> <div class="dn" data-login-sdk="baseLogin"></div> <div class="dn" data-login-sdk="scanLogin"></div> <div class="dn" data-login-sdk="smsLoginreg"></div> <div class="qy-login-sns dn" data-login-sdk="thridPartyLogin"></div> <div class="qy-login-agreement" data-login-sdk="protocol"> <div class="agreement-link"> <a href="javascript:;" data-protocol-btn="agree" class="iconfont-agree"> <div class="agreement-pop dn" data-login-sdk="agreementPop">请阅读并勾选下方协议</div> <div class="agreement-triangle dn" data-login-sdk="agreementTriangle"></div> </a> 同意 <a href="https://www.iqiyi.com/user/register/protocol.html" class="agree-cricle" target="_blank">《用户协议》</a>和<a href="https://privacy.iqiyi.com/policies" class="agree-cricle" target="_blank">《隐私政策》</a> </div> <div class="phone-agreement dn" data-login-sdk="auto-register">未注册过的手机号，我们将自动帮您注册账号</div> </div> <div class="qy-login-sns dn" data-login-sdk="regProtocol"></div> </div> </div> </div> </div> </div> </div> <div class="qy-login-checking dn" data-login-sdk="secondVerify"> </div> <div class="qy-login-checking dn" data-login-sdk="deviceVerify"> </div> <div class="qy-login-checking dn" data-login-sdk="verifyPhone"></div> <div class="qy-smslogin-toast dn" data-login-sdk="smsLoginCheck"></div> <div class="qy-login-checking dn" data-login-sdk="realname"></div> <div class="qy-login-checking dn" data-login-sdk="upSmsCode"></div> <div class="qy-login-xiaomiForbidden dn" data-login-sdk="xiaomiForbidden"> <span class="iconfont icon-close" style="font-family:iconfontlogin!important" data-login-sdk="xiaomiForbidden-close"></span> <div class="forbidden-title">小米账号登录方式下线说明</div> <div class="forbidden-text"> <div class="forbidden-text-item">尊敬的用户，鉴于账号系统升级及账号安全考虑，小米登录方式即将在爱奇艺站内下线。若您的小米账号已绑定爱奇艺手机号，后续请使用手机号登录。</div> </div> <div class="forbidden-btn" data-login-sdk="xiaomiForbidden-btn">立即登录</div> </div> <div class="qy-login-checking dn" data-login-sdk="slideCover"> <div class="qy-checking-container"> <div class="qy-checking-title"> <span class="close-link"> <i class="iconfont icon-close" data-login-sdk="slideCover-close"></i> </span> </div> <div class="qy-login-form"> <div class="login-form-inner"> <div class="login-form"> <div class="qy-safe-title"> <div class="title-content align-left"> <div class="minor-desc-verify"> <div class="minor-desc-item">为保证您的账号安全，请完成以下认证</div> </div> <div class="qy-login-field" data-login-sdk="slidePanel"> </div> </div> </div> </div> </div> </div> </div> </div> <div class="qy-login-cover dn" data-login-sdk="toast"></div> <div class="dn" data-login-sdk="business"></div> </div>'
}
, function(e, t) {
    e.exports = '<div class="qy-quit-toast" data-quit-sdk="quit-toast"> <div class="container"> <div class="qy-quit-toast-title">确定退出当前账号吗?</div> <div class="qy-quit-toast-dec"> <i class="quit-toast-selected" data-quit-sdk="btn-select"></i>记住账号，下次快速登录 </div> <div class="qy-quit-btn-quit" data-quit-sdk="btn-quit">确定退出</div> <div class="qy-quit-btn-cancel" data-quit-sdk="btn-cancel">取消</div> </div> </div>'
}
, function(e, t, n) {
    (function(d) {
        "use strict";
        function s(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }
        function a(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t, n, i, o, s, a) {
            try {
                var r = e[s](a)
                  , c = r.value
            } catch (e) {
                return n(e),
                0
            }
            r.done ? t(c) : Promise.resolve(c).then(i, o)
        }
        function t(t, e) {
            var n, i = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            i.push.apply(i, n)),
            i
        }
        function l(i) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? t(Object(o), !0).forEach(function(e) {
                    var t, n;
                    t = i,
                    e = o[n = e],
                    n in t ? Object.defineProperty(t, n, {
                        "value": e,
                        "enumerable": !0,
                        "configurable": !0,
                        "writable": !0
                    }) : t[n] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return i
        }
        var u = {
            "get": function(e, t) {
                if (t || "object" === ("undefined" == typeof document ? "undefined" : r(document)) || console.warn("服务端调用cookie.get时需传入cookie字符串"),
                t || "object" !== ("undefined" == typeof document ? "undefined" : r(document)) || (t = document && document.cookie),
                !e || !t)
                    return null;
                t = new RegExp("(^| )".concat(e, "=([^;]*)(;|$)")).exec(t);
                return (t = t && t[2]) ? decodeURIComponent(t) : null
            },
            "set": function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                if (e)
                    if (!/[\<\>]/.test(t)) {
                        var i = n.expires
                          , o = void 0 === i ? 0 : i
                          , s = n.domain
                          , a = void 0 === s ? "" : s
                          , i = n.path
                          , s = void 0 === i ? "" : i
                          , i = n.secure
                          , i = void 0 === i ? "" : i
                          , n = n.session
                          , n = void 0 !== n && n
                          , o = new Date(Date.now() + o).toGMTString()
                          , r = "".concat(e, "=").concat(encodeURIComponent(t)).concat(s ? "; path=".concat(s) : "").concat(o && !n ? "; expires=".concat(o) : "").concat(a ? "; domain=".concat(a) : "").concat(i ? "; secure=".concat(i) : "");
                        try {
                            document.cookie = r
                        } catch (e) {
                            return r
                        }
                    }
            },
            "remove": function(e, t) {
                var n = "".concat(e, "=''; expires=").concat((new Date).toGMTString());
                try {
                    document.cookie = n
                } catch (e) {
                    return n
                }
            }
        }
          , n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          , i = {
            "indexOf": function(e) {
                return e.charCodeAt(0)
            },
            "charAt": String.fromCharCode
        };
        function o(e, t, n, i, o, s) {
            for (var a, r, c = 0, d = "", l = 1, u = 1, h = (e = String(e)).length, p = 0; p < h || !t && 1 < u; p += 1) {
                if (c *= o,
                l *= o,
                p < h) {
                    if ((a = n.indexOf(e.charAt(p))) <= -1 || o <= a)
                        throw new RangeError;
                    u *= o,
                    c += a
                }
                for (; s <= l; )
                    l /= s,
                    1 < u && (r = c,
                    c %= l,
                    d += i.charAt((r - c) / l),
                    u /= s)
            }
            return d
        }
        var h, p, f, g, m, v, y, e = {
            "atob": function(e) {
                for (var t = (e = String(e).split("=")).length - 1; 0 <= t; --t) {
                    if (e[t].length % 4 == 1)
                        throw new RangeError;
                    e[t] = o(e[t], !0, n, i, 64, 256)
                }
                return e.join("")
            },
            "btoa": function(e) {
                return (e = o(e, !1, i, n, 256, 64)) + "====".slice(e.length % 4 || 4)
            }
        }, b = (h = function(e, t) {
            return e << t | e >>> 32 - t
        }
        ,
        p = function(e, t) {
            var n = 2147483648 & e
              , i = 2147483648 & t
              , o = (1073741823 & e) + (1073741823 & t);
            return (e = 1073741824 & e) & (t = 1073741824 & t) ? 2147483648 ^ o ^ n ^ i : e | t ? 1073741824 & o ? 3221225472 ^ o ^ n ^ i : 1073741824 ^ o ^ n ^ i : o ^ n ^ i
        }
        ,
        f = function(e, t, n, i, o, s, a) {
            return e = p(e, p(p(t & n | ~t & i, o), a)),
            p(h(e, s), t)
        }
        ,
        g = function(e, t, n, i, o, s, a) {
            return e = p(e, p(p(t & i | n & ~i, o), a)),
            p(h(e, s), t)
        }
        ,
        m = function(e, t, n, i, o, s, a) {
            return e = p(e, p(p(t ^ n ^ i, o), a)),
            p(h(e, s), t)
        }
        ,
        v = function(e, t, n, i, o, s, a) {
            return e = p(e, p(p(n ^ (t | ~i), o), a)),
            p(h(e, s), t)
        }
        ,
        y = function(e) {
            for (var t = "", n = "", i = 0; i <= 3; i++)
                t += (n = "0" + (e >>> 8 * i & 255).toString(16)).substr(n.length - 2, 2);
            return t
        }
        ,
        function(e) {
            e += "";
            for (var t, n, i, o, s = Array(), s = function(e) {
                for (var t, n = e.length, i = n + 8, i = 16 * ((i - i % 64) / 64 + 1), o = Array(i - 1), s = 0, a = 0; a < n; )
                    s = a % 4 * 8,
                    o[t = (a - a % 4) / 4] = o[t] | e.charCodeAt(a) << s,
                    a++;
                return s = a % 4 * 8,
                o[t = (a - a % 4) / 4] = o[t] | 128 << s,
                o[i - 2] = n << 3,
                o[i - 1] = n >>> 29,
                o
            }(e = function(e) {
                e = e.replace(/\x0d\x0a/g, "\n");
                for (var t = "", n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n);
                    i < 128 ? t += String.fromCharCode(i) : (127 < i && i < 2048 ? t += String.fromCharCode(i >> 6 | 192) : (t += String.fromCharCode(i >> 12 | 224),
                    t += String.fromCharCode(i >> 6 & 63 | 128)),
                    t += String.fromCharCode(63 & i | 128))
                }
                return t
            }(e)), a = 1732584193, r = 4023233417, c = 2562383102, d = 271733878, l = 0; l < s.length; l += 16)
                a = f(t = a, n = r, i = c, o = d, s[l + 0], 7, 3614090360),
                d = f(d, a, r, c, s[l + 1], 12, 3905402710),
                c = f(c, d, a, r, s[l + 2], 17, 606105819),
                r = f(r, c, d, a, s[l + 3], 22, 3250441966),
                a = f(a, r, c, d, s[l + 4], 7, 4118548399),
                d = f(d, a, r, c, s[l + 5], 12, 1200080426),
                c = f(c, d, a, r, s[l + 6], 17, 2821735955),
                r = f(r, c, d, a, s[l + 7], 22, 4249261313),
                a = f(a, r, c, d, s[l + 8], 7, 1770035416),
                d = f(d, a, r, c, s[l + 9], 12, 2336552879),
                c = f(c, d, a, r, s[l + 10], 17, 4294925233),
                r = f(r, c, d, a, s[l + 11], 22, 2304563134),
                a = f(a, r, c, d, s[l + 12], 7, 1804603682),
                d = f(d, a, r, c, s[l + 13], 12, 4254626195),
                c = f(c, d, a, r, s[l + 14], 17, 2792965006),
                r = f(r, c, d, a, s[l + 15], 22, 1236535329),
                a = g(a, r, c, d, s[l + 1], 5, 4129170786),
                d = g(d, a, r, c, s[l + 6], 9, 3225465664),
                c = g(c, d, a, r, s[l + 11], 14, 643717713),
                r = g(r, c, d, a, s[l + 0], 20, 3921069994),
                a = g(a, r, c, d, s[l + 5], 5, 3593408605),
                d = g(d, a, r, c, s[l + 10], 9, 38016083),
                c = g(c, d, a, r, s[l + 15], 14, 3634488961),
                r = g(r, c, d, a, s[l + 4], 20, 3889429448),
                a = g(a, r, c, d, s[l + 9], 5, 568446438),
                d = g(d, a, r, c, s[l + 14], 9, 3275163606),
                c = g(c, d, a, r, s[l + 3], 14, 4107603335),
                r = g(r, c, d, a, s[l + 8], 20, 1163531501),
                a = g(a, r, c, d, s[l + 13], 5, 2850285829),
                d = g(d, a, r, c, s[l + 2], 9, 4243563512),
                c = g(c, d, a, r, s[l + 7], 14, 1735328473),
                r = g(r, c, d, a, s[l + 12], 20, 2368359562),
                a = m(a, r, c, d, s[l + 5], 4, 4294588738),
                d = m(d, a, r, c, s[l + 8], 11, 2272392833),
                c = m(c, d, a, r, s[l + 11], 16, 1839030562),
                r = m(r, c, d, a, s[l + 14], 23, 4259657740),
                a = m(a, r, c, d, s[l + 1], 4, 2763975236),
                d = m(d, a, r, c, s[l + 4], 11, 1272893353),
                c = m(c, d, a, r, s[l + 7], 16, 4139469664),
                r = m(r, c, d, a, s[l + 10], 23, 3200236656),
                a = m(a, r, c, d, s[l + 13], 4, 681279174),
                d = m(d, a, r, c, s[l + 0], 11, 3936430074),
                c = m(c, d, a, r, s[l + 3], 16, 3572445317),
                r = m(r, c, d, a, s[l + 6], 23, 76029189),
                a = m(a, r, c, d, s[l + 9], 4, 3654602809),
                d = m(d, a, r, c, s[l + 12], 11, 3873151461),
                c = m(c, d, a, r, s[l + 15], 16, 530742520),
                r = m(r, c, d, a, s[l + 2], 23, 3299628645),
                a = v(a, r, c, d, s[l + 0], 6, 4096336452),
                d = v(d, a, r, c, s[l + 7], 10, 1126891415),
                c = v(c, d, a, r, s[l + 14], 15, 2878612391),
                r = v(r, c, d, a, s[l + 5], 21, 4237533241),
                a = v(a, r, c, d, s[l + 12], 6, 1700485571),
                d = v(d, a, r, c, s[l + 3], 10, 2399980690),
                c = v(c, d, a, r, s[l + 10], 15, 4293915773),
                r = v(r, c, d, a, s[l + 1], 21, 2240044497),
                a = v(a, r, c, d, s[l + 8], 6, 1873313359),
                d = v(d, a, r, c, s[l + 15], 10, 4264355552),
                c = v(c, d, a, r, s[l + 6], 15, 2734768916),
                r = v(r, c, d, a, s[l + 13], 21, 1309151649),
                a = v(a, r, c, d, s[l + 4], 6, 4149444226),
                d = v(d, a, r, c, s[l + 11], 10, 3174756917),
                c = v(c, d, a, r, s[l + 2], 15, 718787259),
                r = v(r, c, d, a, s[l + 9], 21, 3951481745),
                a = p(a, t),
                r = p(r, n),
                c = p(c, i),
                d = p(d, o);
            return (y(a) + y(r) + y(c) + y(d)).toLowerCase()
        }
        );
        function _(e, t) {
            if (isNaN(e))
                return "NaN".repeat(t);
            var n = ""
              , i = e < 0
              , e = String(Math.abs(e));
            return (i ? "-" : "") + (n = e.length < t ? new Array(t - e.length + 1).join("0") : n) + e
        }
        function w(e) {
            return e || "object" === ("undefined" == typeof window ? "undefined" : r(window)) || console.warn("服务端调用时需传入userAgent字符串"),
            e ? e.toString().toLowerCase() : "object" === ("undefined" == typeof window ? "undefined" : r(window)) ? window.navigator.userAgent.toLowerCase() : ""
        }
        function k(e) {
            return /android/.test(w(e))
        }
        function C(e) {
            return k(e) && /mobi/.test(w(e))
        }
        function S(e) {
            return k(e) && !C(e)
        }
        function P(e) {
            return /blackberry/.test(w(e)) || /bb10/.test(w(e))
        }
        function L(e, t) {
            if (!e)
                return !1;
            if (!t)
                return !0;
            var n = {
                "<": function(e, t) {
                    return e < t
                },
                "<=": function(e, t) {
                    return e <= t
                },
                ">": function(e, t) {
                    return t < e
                },
                ">=": function(e, t) {
                    return t <= e
                }
            }
              , i = +(t.match(/\d+/) || NaN)
              , t = t.match(/^[<>]=?|/)[0];
            return n[t] ? n[t](e, i) : e == i
        }
        function x(e, t) {
            t = w(t).match(/(?:^opera.+?version|opr)\/(\d+)/);
            return L(t && t[1], e)
        }
        function q(e, t) {
            t = w(t).match(/(?:edge|edg)\/(\d+)/);
            return L(t && t[1], e)
        }
        function T(e, t) {
            var n = w(t).match(/ipad.+?os (\d+)/)
              , i = n && n[1]
              , o = "macintel" === function() {
                if ("object" === ("undefined" == typeof window ? "undefined" : r(window)))
                    return window.navigator.platform.toLowerCase()
            }() && 1 < function() {
                if ("object" === ("undefined" == typeof window ? "undefined" : r(window)))
                    return window.navigator.maxTouchPoints || 0
            }()
              , n = w(t).match(/macintosh.+?version\/(\d+)/)
              , t = !1;
            return o && n && (e ? 13 <= (n = n[1]) && (t = L(n, e)) : t = !0),
            L(i, e) || o && t
        }
        function I(e, t) {
            var n = w(t).match(/iphone(?:.+?os (\d+))?/)
              , n = n && n[1];
            return !T("", t) && L(n, e)
        }
        function E(e) {
            return /win/.test(w(e))
        }
        function A(e) {
            return E(e) && /phone/.test(w(e))
        }
        function O(e) {
            return I("", e) || C(e) || P(e) || A(e)
        }
        function D(e) {
            return E(e) && !A(e) && /touch/.test(w(e))
        }
        function B(e) {
            return T("", e) || S(e) || D(e)
        }
        function N() {
            return "object" !== ("undefined" == typeof window ? "undefined" : r(window)) || window.navigator.onLine
        }
        function j(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e
        }
        function F(e, t) {
            return e(t = {
                "exports": {}
            }, t.exports),
            t.exports
        }
        var M = F(function(t) {
            function n(e) {
                return t.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                t.exports.__esModule = !0,
                t.exports["default"] = t.exports,
                n(e)
            }
            t.exports = n,
            t.exports.__esModule = !0,
            t.exports["default"] = t.exports
        });
        j(M);
        var R = F(function(C) {
            var S = M["default"];
            function P() {
                C.exports = P = function() {
                    return a
                }
                ,
                C.exports.__esModule = !0,
                C.exports["default"] = C.exports;
                var a = {}
                  , e = Object.prototype
                  , c = e.hasOwnProperty
                  , o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                }
                  , t = "function" == typeof Symbol ? Symbol : {}
                  , i = t.iterator || "@@iterator"
                  , n = t.asyncIterator || "@@asyncIterator"
                  , s = t.toStringTag || "@@toStringTag";
                function r(e, t, n) {
                    return Object.defineProperty(e, t, {
                        "value": n,
                        "enumerable": !0,
                        "configurable": !0,
                        "writable": !0
                    }),
                    e[t]
                }
                try {
                    r({}, "")
                } catch (C) {
                    r = function(e, t, n) {
                        return e[t] = n
                    }
                }
                function d(e, t, n, i) {
                    var s, a, r, c, t = t && t.prototype instanceof h ? t : h, t = Object.create(t.prototype), i = new w(i || []);
                    return o(t, "_invoke", {
                        "value": (s = e,
                        a = n,
                        r = i,
                        c = "suspendedStart",
                        function(e, t) {
                            if ("executing" === c)
                                throw new Error("Generator is already running");
                            if ("completed" === c) {
                                if ("throw" === e)
                                    throw t;
                                return {
                                    "value": void 0,
                                    "done": !0
                                }
                            }
                            for (r.method = e,
                            r.arg = t; ; ) {
                                var n = r.delegate;
                                if (n) {
                                    var i = function o(e, t) {
                                        var n = t.method
                                          , i = e.iterator[n];
                                        if (void 0 === i)
                                            return t.delegate = null,
                                            "throw" === n && e.iterator["return"] && (t.method = "return",
                                            t.arg = void 0,
                                            o(e, t),
                                            "throw" === t.method) || "return" !== n && (t.method = "throw",
                                            t.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                                            u;
                                        i = l(i, e.iterator, t.arg);
                                        if ("throw" === i.type)
                                            return t.method = "throw",
                                            t.arg = i.arg,
                                            t.delegate = null,
                                            u;
                                        var i = i.arg;
                                        return i ? i.done ? (t[e.resultName] = i.value,
                                        t.next = e.nextLoc,
                                        "return" !== t.method && (t.method = "next",
                                        t.arg = void 0),
                                        t.delegate = null,
                                        u) : i : (t.method = "throw",
                                        t.arg = new TypeError("iterator result is not an object"),
                                        t.delegate = null,
                                        u)
                                    }(n, r);
                                    if (i) {
                                        if (i === u)
                                            continue;
                                        return i
                                    }
                                }
                                if ("next" === r.method)
                                    r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === c)
                                        throw c = "completed",
                                        r.arg;
                                    r.dispatchException(r.arg)
                                } else
                                    "return" === r.method && r.abrupt("return", r.arg);
                                c = "executing";
                                i = l(s, a, r);
                                if ("normal" === i.type) {
                                    if (c = r.done ? "completed" : "suspendedYield",
                                    i.arg === u)
                                        continue;
                                    return {
                                        "value": i.arg,
                                        "done": r.done
                                    }
                                }
                                "throw" === i.type && (c = "completed",
                                r.method = "throw",
                                r.arg = i.arg)
                            }
                        }
                        )
                    }),
                    t
                }
                function l(e, t, n) {
                    try {
                        return {
                            "type": "normal",
                            "arg": e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            "type": "throw",
                            "arg": e
                        }
                    }
                }
                a.wrap = d;
                var u = {};
                function h() {}
                function p() {}
                function f() {}
                var g = {};
                r(g, i, function() {
                    return this
                });
                t = Object.getPrototypeOf,
                t = t && t(t(k([])));
                t && t !== e && c.call(t, i) && (g = t);
                var m = f.prototype = h.prototype = Object.create(g);
                function v(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        r(e, t, function(e) {
                            return this._invoke(t, e)
                        })
                    })
                }
                function y(a, r) {
                    var t;
                    o(this, "_invoke", {
                        "value": function(n, i) {
                            function e() {
                                return new r(function(e, t) {
                                    !function s(e, t, n, i) {
                                        e = l(a[e], a, t);
                                        if ("throw" !== e.type) {
                                            var o = e.arg
                                              , t = o.value;
                                            return t && "object" == S(t) && c.call(t, "__await") ? r.resolve(t.__await).then(function(e) {
                                                s("next", e, n, i)
                                            }, function(e) {
                                                s("throw", e, n, i)
                                            }) : r.resolve(t).then(function(e) {
                                                o.value = e,
                                                n(o)
                                            }, function(e) {
                                                return s("throw", e, n, i)
                                            })
                                        }
                                        i(e.arg)
                                    }(n, i, e, t)
                                }
                                )
                            }
                            return t = t ? t.then(e, e) : e()
                        }
                    })
                }
                function b(e) {
                    var t = {
                        "tryLoc": e[0]
                    };
                    1 in e && (t.catchLoc = e[1]),
                    2 in e && (t.finallyLoc = e[2],
                    t.afterLoc = e[3]),
                    this.tryEntries.push(t)
                }
                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal",
                    delete t.arg,
                    e.completion = t
                }
                function w(e) {
                    this.tryEntries = [{
                        "tryLoc": "root"
                    }],
                    e.forEach(b, this),
                    this.reset(!0)
                }
                function k(e) {
                    if (e || "" === e) {
                        var t = e[i];
                        if (t)
                            return t.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var n = -1
                              , t = function S() {
                                for (; ++n < e.length; )
                                    if (c.call(e, n))
                                        return S.value = e[n],
                                        S.done = !1,
                                        S;
                                return S.value = void 0,
                                S.done = !0,
                                S
                            };
                            return t.next = t
                        }
                    }
                    throw new TypeError(S(e) + " is not iterable")
                }
                return o(m, "constructor", {
                    "value": p.prototype = f,
                    "configurable": !0
                }),
                o(f, "constructor", {
                    "value": p,
                    "configurable": !0
                }),
                p.displayName = r(f, s, "GeneratorFunction"),
                a.isGeneratorFunction = function(e) {
                    e = "function" == typeof e && e.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                a.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f,
                    r(e, s, "GeneratorFunction")),
                    e.prototype = Object.create(m),
                    e
                }
                ,
                a.awrap = function(e) {
                    return {
                        "__await": e
                    }
                }
                ,
                v(y.prototype),
                r(y.prototype, n, function() {
                    return this
                }),
                a.AsyncIterator = y,
                a.async = function(e, t, n, i, o) {
                    void 0 === o && (o = Promise);
                    var s = new y(d(e, t, n, i),o);
                    return a.isGeneratorFunction(t) ? s : s.next().then(function(e) {
                        return e.done ? e.value : s.next()
                    })
                }
                ,
                v(m),
                r(m, s, "Generator"),
                r(m, i, function() {
                    return this
                }),
                r(m, "toString", function() {
                    return "[object Generator]"
                }),
                a.keys = function(t) {
                    var e, n = Object(t), i = [];
                    for (e in n)
                        i.push(e);
                    return i.reverse(),
                    function t() {
                        for (; i.length; ) {
                            var e = i.pop();
                            if (e in n)
                                return t.value = e,
                                t.done = !1,
                                t
                        }
                        return t.done = !0,
                        t
                    }
                }
                ,
                a.values = k,
                w.prototype = {
                    "constructor": w,
                    "reset": function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = void 0,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = void 0,
                        this.tryEntries.forEach(_),
                        !e)
                            for (var t in this)
                                "t" === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    "stop": function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type)
                            throw e.arg;
                        return this.rval
                    },
                    "dispatchException": function(n) {
                        if (this.done)
                            throw n;
                        var i = this;
                        function e(e, t) {
                            return s.type = "throw",
                            s.arg = n,
                            i.next = e,
                            t && (i.method = "next",
                            i.arg = void 0),
                            !!t
                        }
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var o = this.tryEntries[t]
                              , s = o.completion;
                            if ("root" === o.tryLoc)
                                return e("end");
                            if (o.tryLoc <= this.prev) {
                                var a = c.call(o, "catchLoc")
                                  , r = c.call(o, "finallyLoc");
                                if (a && r) {
                                    if (this.prev < o.catchLoc)
                                        return e(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc)
                                        return e(o.finallyLoc)
                                } else if (a) {
                                    if (this.prev < o.catchLoc)
                                        return e(o.catchLoc, !0)
                                } else {
                                    if (!r)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc)
                                        return e(o.finallyLoc)
                                }
                            }
                        }
                    },
                    "abrupt": function(e, t) {
                        for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && c.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        var s = (o = o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc ? null : o) ? o.completion : {};
                        return s.type = e,
                        s.arg = t,
                        o ? (this.method = "next",
                        this.next = o.finallyLoc,
                        u) : this.complete(s)
                    },
                    "complete": function(e, t) {
                        if ("throw" === e.type)
                            throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === e.type && t && (this.next = t),
                        u
                    },
                    "finish": function(e) {
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                                return this.complete(n.completion, n.afterLoc),
                                _(n),
                                u
                        }
                    },
                    "catch": function(e) {
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var i, o = n.completion;
                                return "throw" === o.type && (i = o.arg,
                                _(n)),
                                i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    "delegateYield": function(e, t, n) {
                        return this.delegate = {
                            "iterator": k(e),
                            "resultName": t,
                            "nextLoc": n
                        },
                        "next" === this.method && (this.arg = void 0),
                        u
                    }
                },
                a
            }
            C.exports = P,
            C.exports.__esModule = !0,
            C.exports["default"] = C.exports
        });
        j(R);
        var z = R()
          , V = z;
        try {
            regeneratorRuntime = z
        } catch (d) {
            "object" === ("undefined" == typeof globalThis ? "undefined" : r(globalThis)) ? globalThis.regeneratorRuntime = z : Function("r", "regeneratorRuntime = r")(z)
        }
        var Q, U, H = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== H && H, K = "URLSearchParams"in H, $ = "Symbol"in H && "iterator"in Symbol, G = "FileReader"in H && "Blob"in H && function() {
            try {
                return new Blob,
                !0
            } catch (d) {
                return !1
            }
        }(), W = "FormData"in H, J = "ArrayBuffer"in H;
        function X(e) {
            if ("string" != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
                throw new TypeError('Invalid character in header field name: "' + e + '"');
            return e.toLowerCase()
        }
        function Y(e) {
            return e = "string" != typeof e ? String(e) : e
        }
        function Z(t) {
            var e = {
                "next": function() {
                    var e = t.shift();
                    return {
                        "done": void 0 === e,
                        "value": e
                    }
                }
            };
            return $ && (e[Symbol.iterator] = function() {
                return e
            }
            ),
            e
        }
        function ee(t) {
            this.map = {},
            t instanceof ee ? t.forEach(function(e, t) {
                this.append(t, e)
            }, this) : Array.isArray(t) ? t.forEach(function(e) {
                this.append(e[0], e[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }
        function te(e) {
            if (e.bodyUsed)
                return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }
        function ne(n) {
            return new Promise(function(e, t) {
                n.onload = function() {
                    e(n.result)
                }
                ,
                n.onerror = function() {
                    t(n.error)
                }
            }
            )
        }
        function ie(e) {
            var t = new FileReader
              , n = ne(t);
            return t.readAsArrayBuffer(e),
            n
        }
        function oe(e) {
            if (e.slice)
                return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)),
            t.buffer
        }
        function se() {
            return this.bodyUsed = !1,
            this._initBody = function(e) {
                this.bodyUsed = this.bodyUsed,
                (this._bodyInit = e) ? "string" == typeof e ? this._bodyText = e : G && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : W && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : K && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : J && G && e && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = oe(e.buffer),
                this._bodyInit = new Blob([this._bodyArrayBuffer])) : J && (ArrayBuffer.prototype.isPrototypeOf(e) || U(e)) ? this._bodyArrayBuffer = oe(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "",
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : K && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }
            ,
            G && (this.blob = function() {
                var e = te(this);
                if (e)
                    return e;
                if (this._bodyBlob)
                    return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }
            ,
            this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? te(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(ie)
            }
            ),
            this.text = function() {
                var e, t, n = te(this);
                if (n)
                    return n;
                if (this._bodyBlob)
                    return e = this._bodyBlob,
                    n = ne(t = new FileReader),
                    t.readAsText(e),
                    n;
                if (this._bodyArrayBuffer)
                    return Promise.resolve(function(e) {
                        for (var t = new Uint8Array(e), n = new Array(t.length), i = 0; i < t.length; i++)
                            n[i] = String.fromCharCode(t[i]);
                        return n.join("")
                    }(this._bodyArrayBuffer));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }
            ,
            W && (this.formData = function() {
                return this.text().then(ce)
            }
            ),
            this.json = function() {
                return this.text().then(JSON.parse)
            }
            ,
            this
        }
        J && (Q = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        U = ArrayBuffer.isView || function(e) {
            return e && -1 < Q.indexOf(Object.prototype.toString.call(e))
        }
        ),
        ee.prototype.append = function(e, t) {
            e = X(e),
            t = Y(t);
            var n = this.map[e];
            this.map[e] = n ? n + ", " + t : t
        }
        ,
        ee.prototype["delete"] = function(e) {
            delete this.map[X(e)]
        }
        ,
        ee.prototype.get = function(e) {
            return e = X(e),
            this.has(e) ? this.map[e] : null
        }
        ,
        ee.prototype.has = function(e) {
            return this.map.hasOwnProperty(X(e))
        }
        ,
        ee.prototype.set = function(e, t) {
            this.map[X(e)] = Y(t)
        }
        ,
        ee.prototype.forEach = function(e, t) {
            for (var n in this.map)
                this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
        }
        ,
        ee.prototype.keys = function() {
            var n = [];
            return this.forEach(function(e, t) {
                n.push(t)
            }),
            Z(n)
        }
        ,
        ee.prototype.values = function() {
            var t = [];
            return this.forEach(function(e) {
                t.push(e)
            }),
            Z(t)
        }
        ,
        ee.prototype.entries = function() {
            var n = [];
            return this.forEach(function(e, t) {
                n.push([t, e])
            }),
            Z(n)
        }
        ,
        $ && (ee.prototype[Symbol.iterator] = ee.prototype.entries);
        var ae = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function re(e, t) {
            if (!(this instanceof re))
                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var n, i = (t = t || {}).body;
            if (e instanceof re) {
                if (e.bodyUsed)
                    throw new TypeError("Already read");
                this.url = e.url,
                this.credentials = e.credentials,
                t.headers || (this.headers = new ee(e.headers)),
                this.method = e.method,
                this.mode = e.mode,
                this.signal = e.signal,
                i || null == e._bodyInit || (i = e._bodyInit,
                e.bodyUsed = !0)
            } else
                this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin",
            !t.headers && this.headers || (this.headers = new ee(t.headers)),
            this.method = (e = (n = t.method || this.method || "GET").toUpperCase(),
            -1 < ae.indexOf(e) ? e : n),
            this.mode = t.mode || this.mode || null,
            this.signal = t.signal || this.signal,
            this.referrer = null,
            ("GET" === this.method || "HEAD" === this.method) && i)
                throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i),
            "GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache || ((t = /([?&])_=[^&]*/).test(this.url) ? this.url = this.url.replace(t, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime())
        }
        function ce(e) {
            var n = new FormData;
            return e.trim().split("&").forEach(function(e) {
                var t;
                e && (e = (t = e.split("=")).shift().replace(/\+/g, " "),
                t = t.join("=").replace(/\+/g, " "),
                n.append(decodeURIComponent(e), decodeURIComponent(t)))
            }),
            n
        }
        function de(e, t) {
            if (!(this instanceof de))
                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            t = t || {},
            this.type = "default",
            this.status = void 0 === t.status ? 200 : t.status,
            this.ok = 200 <= this.status && this.status < 300,
            this.statusText = void 0 === t.statusText ? "" : "" + t.statusText,
            this.headers = new ee(t.headers),
            this.url = t.url || "",
            this._initBody(e)
        }
        re.prototype.clone = function() {
            return new re(this,{
                "body": this._bodyInit
            })
        }
        ,
        se.call(re.prototype),
        se.call(de.prototype),
        de.prototype.clone = function() {
            return new de(this._bodyInit,{
                "status": this.status,
                "statusText": this.statusText,
                "headers": new ee(this.headers),
                "url": this.url
            })
        }
        ,
        de.error = function() {
            var e = new de(null,{
                "status": 0,
                "statusText": ""
            });
            return e.type = "error",
            e
        }
        ;
        var le = [301, 302, 303, 307, 308];
        de.redirect = function(e, t) {
            if (-1 === le.indexOf(t))
                throw new RangeError("Invalid status code");
            return new de(null,{
                "status": t,
                "headers": {
                    "location": e
                }
            })
        }
        ;
        var ue, he, pe, fe, ge = H.DOMException;
        try {
            new ge
        } catch (d) {
            (ge = function(e, t) {
                this.message = e,
                this.name = t;
                e = Error(e);
                this.stack = e.stack
            }
            ).prototype = Object.create(Error.prototype),
            ge.prototype.constructor = ge
        }
        function me(i, a) {
            return new Promise(function(o, e) {
                var t = new re(i,a);
                if (t.signal && t.signal.aborted)
                    return e(new ge("Aborted","AbortError"));
                var s = new XMLHttpRequest;
                function n() {
                    s.abort()
                }
                s.onload = function() {
                    var e, n, t = {
                        "status": s.status,
                        "statusText": s.statusText,
                        "headers": (e = s.getAllResponseHeaders() || "",
                        n = new ee,
                        e.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(e) {
                            return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                        }).forEach(function(e) {
                            var t = e.split(":")
                              , e = t.shift().trim();
                            e && (t = t.join(":").trim(),
                            n.append(e, t))
                        }),
                        n)
                    };
                    t.url = "responseURL"in s ? s.responseURL : t.headers.get("X-Request-URL");
                    var i = "response"in s ? s.response : s.responseText;
                    setTimeout(function() {
                        o(new de(i,t))
                    }, 0)
                }
                ,
                s.onerror = function() {
                    setTimeout(function() {
                        e(new TypeError("Network request failed"))
                    }, 0)
                }
                ,
                s.ontimeout = function() {
                    setTimeout(function() {
                        e(new TypeError("Network request failed"))
                    }, 0)
                }
                ,
                s.onabort = function() {
                    setTimeout(function() {
                        e(new ge("Aborted","AbortError"))
                    }, 0)
                }
                ,
                s.open(t.method, function(e) {
                    try {
                        return "" === e && H.location.href ? H.location.href : e
                    } catch (a) {
                        return e
                    }
                }(t.url), !0),
                "include" === t.credentials ? s.withCredentials = !0 : "omit" === t.credentials && (s.withCredentials = !1),
                "responseType"in s && (G ? s.responseType = "blob" : J && t.headers.get("Content-Type") && -1 !== t.headers.get("Content-Type").indexOf("application/octet-stream") && (s.responseType = "arraybuffer")),
                !a || "object" !== r(a.headers) || a.headers instanceof ee ? t.headers.forEach(function(e, t) {
                    s.setRequestHeader(t, e)
                }) : Object.getOwnPropertyNames(a.headers).forEach(function(e) {
                    s.setRequestHeader(e, Y(a.headers[e]))
                }),
                t.signal && (t.signal.addEventListener("abort", n),
                s.onreadystatechange = function() {
                    4 === s.readyState && t.signal.removeEventListener("abort", n)
                }
                ),
                s.send(void 0 === t._bodyInit ? null : t._bodyInit)
            }
            )
        }
        function ve(n) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if ("object" !== r(n))
                return n;
            var t = {
                "replacer": encodeURIComponent,
                "pSpliter": "&",
                "kvSpliter": "=",
                "sort": 0
            }
              , i = []
              , e = e instanceof Object ? e : {}
              , o = e = Object.assign({}, t, e)
              , s = o.replacer
              , t = o.pSpliter
              , a = o.kvSpliter
              , e = o.sort
              , o = Object.keys(n);
            return e && (o.sort(),
            e < 0 && o.reverse()),
            o.forEach(function(t) {
                var e = n[t];
                e instanceof Array ? e.forEach(function(e) {
                    null != e && "undefined" != e && i.push(t + a + s(e.toString(), t))
                }) : null != e && "undefined" != e && i.push(t + a + s(e.toString(), t))
            }),
            i.join(t)
        }
        function ye(e) {
            for (var t, n, i, o = ("string" == typeof e && e ? e.substr(e.lastIndexOf("?") + 1) : "").split("&"), s = o.length, a = {}, r = 0; r < s; r++)
                o[r] && (t = (i = o[r].split("=")).shift(),
                n = i.join("="),
                void 0 === (i = a[t]) ? a[t] = n : "[object Array]" === Object.prototype.toString.call(i) ? i.push(n) : a[t] = [i, n]);
            return "[object Object]" === Object.prototype.toString.call(e) ? e : a
        }
        function be() {
            return _e.apply(this, arguments)
        }
        function _e() {
            return r = V.mark(function d() {
                var n, i, o, s, a, r, c = arguments;
                return V.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            n = 0 < c.length && void 0 !== c[0] ? c[0] : {},
                            i = 1 < c.length && void 0 !== c[1] ? c[1] : {},
                            o = qe(document.cookie, ";"),
                            s = {},
                            a = n.t;
                            try {
                                s = o.QC179 && JSON.parse(decodeURIComponent(o.QC179)) || {}
                            } catch (e) {}
                            r = {
                                "u": o.QC005,
                                "pu": o.P00003 || 0,
                                "p1": "1_10_101",
                                "de": (t = o,
                                Le = Le || b(+new Date + t.QC005 + "")),
                                "hu": s.vipTypes || "-1",
                                "nu": o.QC173 || 0,
                                "purl": Te(window.location.href),
                                "ce": window.webEventID || (window.webEventID = b(+new Date + Math.round(2147483647 * Math.random()) + "") || ""),
                                "ntwk": function() {
                                    if (null != Ie)
                                        return Ie;
                                    var e = 0;
                                    if (navigator.connection) {
                                        navigator.connection.downlink;
                                        var t = (navigator.connection.effectiveType || "").toLowerCase()
                                          , n = (navigator.connection.type || "").toLowerCase();
                                        switch (t) {
                                        case "4g":
                                            e = 18;
                                            break;
                                        case "3g":
                                            e = 17;
                                            break;
                                        case "2g":
                                            e = 16;
                                            break;
                                        case "slow-2g":
                                            e = 14
                                        }
                                        switch (n) {
                                        case "cellular":
                                            e = 15;
                                            break;
                                        case "wifi":
                                            e = 1;
                                            break;
                                        case "ethernet":
                                            e = 13;
                                            break;
                                        case "bluetooth":
                                            e = 21;
                                            break;
                                        case "wimax":
                                            e = 22
                                        }
                                    }
                                    return Ie = e
                                }(),
                                "sid": we(o),
                                "lrfr": Ce(o),
                                "rfr": Fe(),
                                "vfm": Me().vfm || "",
                                "stime": (new Date).getTime(),
                                "wint": window.document.fullscreenElement ? 4 : 3
                            },
                            Se(a, r),
                            (he = he || new Promise(function(t, e) {
                                if (ue)
                                    return t(ue);
                                if (window.localStorage && window.localStorage instanceof Storage) {
                                    var i = localStorage.getItem("__dfp");
                                    if (i && function() {
                                        if (i && 0 < i.length) {
                                            var e = i.split("@")
                                              , t = e[2]
                                              , n = e[1]
                                              , t = isNaN(t) ? 0 : Number(t)
                                              , n = isNaN(n) ? 0 : Number(n)
                                              , e = (new Date).getTime();
                                            if (e < n && t < e)
                                                return 1
                                        }
                                    }())
                                        return ue = i.split("@")[0],
                                        t(ue)
                                }
                                var n, o = document.getElementsByTagName("HEAD").item(0), s = document.createElement("script");
                                s.type = "text/javascript",
                                s.src = "//security.iqiyi.com/static/cook/v1/cooksdk.js",
                                s.onload = s.onerror = s.onreadystatechange = function() {
                                    if (!(s.readyState && !/^c|loade/.test(s.readyState) || n)) {
                                        if (n = 1,
                                        s.onload = s.onreadystatechange = null,
                                        window.dfp.setOptions({
                                            "excludeWebGL": !0,
                                            "excludeCanvas": !0
                                        }),
                                        ue = window.dfp.tryGetFingerPrint())
                                            return t(ue);
                                        window.dfp.getFingerPrint(function(e) {
                                            t(ue = e)
                                        })
                                    }
                                }
                                ,
                                s.async = 1,
                                o.appendChild(s)
                            }
                            )).then(function(e) {
                                r.dfp = e,
                                function(t, e) {
                                    try {
                                        if (22 != e && window.biPingbackParams && window.biPingbackParams.fp2 && window.biPingbackParams.fp1)
                                            return t(window.biPingbackParams);
                                        window.Fingerprint ? window.Fingerprint.getFingerprint(22 == +e).then(function(e) {
                                            t(e)
                                        }) : function(e, t) {
                                            var n = !1
                                              , i = null
                                              , o = document.getElementsByTagName("HEAD").item(0)
                                              , s = document.createElement("script")
                                              , a = []
                                              , r = navigator.userAgent.toLowerCase()
                                              , r = /msie/.test(r);
                                            window.qaLoadingDfp = function(e) {
                                                a.push(e)
                                            }
                                            ;
                                            var c = function() {
                                                for (; 0 < a.length; )
                                                    try {
                                                        a.shift()()
                                                    } catch (e) {}
                                            };
                                            r ? s.onreadystatechange = function() {
                                                /loaded|complete/.test(s.readyState) && (n || (n = !0,
                                                clearTimeout(i),
                                                t(),
                                                c()))
                                            }
                                            : s.onload = function() {
                                                n || (n = !0,
                                                clearTimeout(i),
                                                t(),
                                                c())
                                            }
                                            ,
                                            s.type = "text/javascript",
                                            s.src = e,
                                            o.appendChild(s),
                                            clearTimeout(i),
                                            i = setTimeout(function() {
                                                n || (clearTimeout(i),
                                                n = !0,
                                                t(),
                                                c())
                                            }, 2500)
                                        }("//stc.iqiyipic.com/gaze/fingerprint/1.0.58/fingerprint.umd.min.js", function() {
                                            try {
                                                window.Fingerprint && window.Fingerprint.getFingerprint(22 == +e).then(function(e) {
                                                    t(e)
                                                })
                                            } catch (e) {
                                                t()
                                            }
                                        })
                                    } catch (e) {
                                        t()
                                    }
                                }(function(e) {
                                    var t = e || {}
                                      , e = t.fp1
                                      , t = t.fp2;
                                    e && "timeout" !== e && (window.pingbackParams = window.pingbackParams || {},
                                    window.pingbackParams.fp1 = e,
                                    window.biPingbackParams = window.biPingbackParams || {},
                                    window.biPingbackParams.fp1 = e),
                                    t && "timeout" !== t && (window.pingbackParams = window.pingbackParams || {},
                                    window.pingbackParams.fp2 = t,
                                    window.biPingbackParams = window.biPingbackParams || {},
                                    window.biPingbackParams.fp2 = t),
                                    r.fp1 = e,
                                    r.fp2 = t,
                                    function(i, e) {
                                        if (Be)
                                            e && e(Oe);
                                        else {
                                            Oe.rfr = Fe(),
                                            Oe.fv = i.QC142;
                                            try {
                                                var t = window.document.referrer
                                                  , n = ye(window.location.href)
                                                  , t = t.match(/(\w+):\/\/([^\/:]+):?(\d*)((?:\/|$).*)/)
                                                  , o = ""
                                                  , s = n && n.vfm
                                                  , a = n && n.fv;
                                                t && (o = t[2] || ""),
                                                console.log("【biPingback】", o, s, a),
                                                -1 < o.indexOf("iqiyi.com") || !o && !s && !a ? (Be = !0,
                                                e && e(Oe)) : s && a ? (Be = !0,
                                                Oe.fv = a,
                                                je(i, a),
                                                e && e(Oe)) : (Ne.push(e),
                                                De || (De = !0,
                                                t = b(ve(n = {
                                                    "appKey": "basic_pcw",
                                                    "clientType": 1,
                                                    "fv": a,
                                                    "rfr": o,
                                                    "vfm": s
                                                }) + "UKobMjDMsDoScuWOfp6F"),
                                                n.sign = t,
                                                me("//mpaas.iqiyi.com/user-growth/api/getFvCode?" + ve(n)).then(function(e) {
                                                    return e.json()
                                                }).then(function(e) {
                                                    var t, n;
                                                    Be = !0,
                                                    e && "A0000" === e.code && e.data ? (t = e.data.vfm,
                                                    n = e.data.rfr,
                                                    e = e.data.fv,
                                                    o || s || !a ? (s = t || s,
                                                    o = n || o,
                                                    a = e || a) : o = n || "other",
                                                    Oe.fv = a,
                                                    Oe.rfr = Fe() || o,
                                                    je(i, a),
                                                    Ne.forEach(function(e) {
                                                        e && e(Oe)
                                                    })) : Ne.forEach(function(e) {
                                                        e && e(Oe)
                                                    })
                                                })["catch"](function(e) {
                                                    Be = !0,
                                                    Ne.forEach(function(e) {
                                                        e && e(Oe)
                                                    })
                                                })))
                                            } catch (i) {
                                                Be = !0,
                                                e && e(Oe)
                                            }
                                        }
                                    }(o, function(e) {
                                        r.fv = e && e.fv,
                                        r.rfr = e && e.rfr;
                                        var t = window.biPingbackParams || {}
                                          , e = "1_10_101";
                                        0 <= window.location.search.indexOf("dev=pca") && (e = "1_11_114"),
                                        n.p1 = e,
                                        function(e, t) {
                                            var n = "//msg.qy.net/act";
                                            if (e instanceof Array) {
                                                var i = new URLSearchParams
                                                  , o = "application/x-www-form-urlencoded";
                                                return i.append("msg", JSON.stringify({
                                                    "cm": Object.assign({}, t),
                                                    "cu": e.map(function(e) {
                                                        return Se(e.t, e)
                                                    })
                                                })),
                                                me(n, {
                                                    "method": "POST",
                                                    "headers": {
                                                        "Content-Type": o
                                                    },
                                                    "body": i
                                                })
                                            }
                                            i = e.__s__,
                                            delete e.__s__,
                                            (o = new Image).src = n + "?" + ve(Object.assign({}, e, t)),
                                            22 == e.t && /^\/[vw]_.*/.test(window.location.pathname) && (window._pb_trace_id_ = window._pb_trace_id_ || t.dfp.substring(0, 12) + "_" + (new Date).getTime(),
                                            i = "//msg.qy.net/qos?" + ve({
                                                "p1": "1_10_101",
                                                "t": 9,
                                                "ct": "pb1_vs_pb2",
                                                "r": e.r || "",
                                                "u": t.u,
                                                "pu": t.pu || 0,
                                                "dfp": t.dfp,
                                                "diy_pb_trace_id": window._pb_trace_id_,
                                                "diy_pb": i ? 41 : 21,
                                                "purl": window.location.href
                                            }),
                                            (new Image).src = i)
                                        }(n, Object.assign(r, t, i))
                                    })
                                }, a)
                            });
                        case 10:
                        case "end":
                            return e.stop()
                        }
                    var t
                }, d)
            }),
            (_e = function() {
                var e = this
                  , a = arguments;
                return new Promise(function(t, n) {
                    var i = r.apply(e, a);
                    function o(e) {
                        c(i, t, n, o, s, "next", e)
                    }
                    function s(e) {
                        c(i, t, n, o, s, "throw", e)
                    }
                    o(void 0)
                }
                )
            }
            ).apply(this, arguments);
            var r
        }
        function we(e) {
            if (pe)
                return pe;
            try {
                var t = e.QC008;
                if (e.QC010 && t)
                    return pe = t;
                var n = function() {
                    return parseInt(new Date / 1e3, 10).toString()
                };
                /^\d{10}\.\d{10}\.\d{10}\.\d+$/.test(t) ? ((t = t.split("."))[1] = t[2],
                t[2] = n(),
                t[3] = parseInt(t[3], 10) + 1) : t = [i = n(), i, i, "1"],
                t = t.join(".");
                var i = ke();
                return u.set("QC008", t, {
                    "domain": i,
                    "path": "/",
                    "expires": 31536e6
                }),
                u.set("QC010", Math.random(), {
                    "domain": i,
                    "path": "/",
                    "session": !0
                }),
                pe = t
            } catch (e) {
                return console.error(e),
                ""
            }
        }
        function ke() {
            var e = window.location.hostname.split(".");
            return (e = e.slice(e.length - 2)).join(".")
        }
        function Ce(e) {
            if (null != fe)
                return fe;
            try {
                var t = e.QC007
                  , n = window.document.referrer
                  , i = (i = n.match(/http[s]?:\/\/([^\/]*)/)) ? i[1] : ""
                  , o = ke()
                  , t = "undefined" == t ? "" : t
                  , s = window.location.hostname
                  , a = i && i.match(/i?qiyi\.com|pps\.tv/)
                  , r = t;
                return t ? n ? i !== s && -1 === i.indexOf(o) && (a || (r = encodeURIComponent(n))) : r = "DIRECT" : r = !n || a ? "DIRECT" : encodeURIComponent(n),
                u.set("QC007", r, {
                    "domain": o,
                    "path": "/",
                    "session": !0
                }),
                fe = r
            } catch (e) {
                return console.error(e),
                ""
            }
        }
        function Se(e, t) {
            if (e)
                return t.rn = function() {
                    for (var e = [], t = 0; t < 16; ++t)
                        e.push(xe[Math.floor(62 * Math.random())]);
                    return e.join("")
                }(),
                22 === e && (e = Pe = Pe || JSON.parse(localStorage.getItem("QC007_ps234") || "{}"),
                t.s2 = e.ps2 || "",
                t.s3 = e.ps3 || "",
                t.s4 = e.ps4 || ""),
                t
        }
        me.polyfill = !0,
        H.fetch || (H.fetch = me,
        H.Headers = ee,
        H.Request = re,
        H.Response = de),
        "undefined" != typeof window && (window.__addEventListener__ || (window.__addEventListener__ = !0,
        window.document.addEventListener("click", function(e) {
            for (var t, n, i, o, s = e.target, a = []; s && s !== window.documentElement && (t = t || s.dataset && s.dataset.rseatV2,
            i = "true" === (s.dataset && s.dataset.stopV2),
            n = n || s.dataset && s.dataset.blockV2,
            (o = s.dataset && s.dataset.pbV2) && a.unshift(o),
            s = s.parentNode,
            i && t && !n || !i && (!n || !t)); )
                ;
            n = n || "body",
            t && be(l(l({
                "t": 20,
                "block": n
            }, qe(a.join("&"))), {}, {
                "rseat": t
            }))
        }, !0)));
        var Pe, Le, xe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        function qe(e, t) {
            t = t || "&";
            var n = {};
            if (e)
                for (var i, o = e.split(t), s = 0, a = o.length; s < a; s++)
                    (i = o[s]) && (i = i.split(/\s*=\s*/g))[0] && i[1] && "undefined" != i[1] && (n[i[0].replace(/^\s*|\s*$/g, "")] = i[1] || "");
            return n
        }
        function Te(e) {
            return e.replace(/[#%&+=\/\\\ \u3000\f\r\n\t]/g, function(e) {
                return "%" + (256 + e.charCodeAt()).toString(16).substring(1).toUpperCase()
            })
        }
        var Ie, Ee, Ae, Oe = {
            "fv": "",
            "rfr": ""
        }, De = !(be.createClient = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
              , t = Object.assign({}, e);
            function n(e) {
                be(e, t)
            }
            return n.bussness = function(e) {
                t = e
            }
            ,
            n
        }
        ), Be = !1, Ne = [];
        function je(e, t) {
            t !== e.QC142 && u.set("QC142", t, {
                "domain": ke(),
                "path": "/",
                "expires": 864e5
            })
        }
        function Fe() {
            var e = Me();
            return e.rfr && "pcw_album_auto" == e.vfrm ? e.rfr : Ee = Ee || Te(window.document.referrer)
        }
        function Me() {
            return Ae = Ae || (ye(window.location.search) || {})
        }
        d.base64 = e,
        d.biPingback = be,
        d.cookie = u,
        d.deleteProtocol = function(e) {
            return e = /^(https?:|ftps?:)\/\//.test(e) ? e.replace(RegExp.$1, "") : e
        }
        ,
        d.forDeep = function d(n, i) {
            var e, o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
            return i && (e = i,
            "[object Function]" === Object.prototype.toString.call(e)) && (s(n) || a(n)) && Object.keys(n).forEach(function(e) {
                var t = n[e];
                s(t) || a(t) ? o.indexOf(t) < 0 && (i(t, e, n),
                o.push(t),
                d(t, i, o)) : i(t, e, n)
            }),
            n
        }
        ,
        d.formatDate = function(e, n) {
            if ("string" != typeof n)
                return e.toString();
            function t(e, t) {
                n = n.replace(e, t)
            }
            var i = (e = !(e instanceof Date) ? new Date(e) : e).getFullYear()
              , o = e.getMonth() + 1
              , s = e.getDate()
              , a = e.getHours()
              , r = e.getMinutes()
              , e = e.getSeconds();
            return t(/yyyy/g, _(i, 4)),
            t(/yy/g, _(parseInt(i.toString().slice(2), 10), 2)),
            t(/MM/g, _(o, 2)),
            t(/M/g, o),
            t(/dd/g, _(s, 2)),
            t(/d/g, s),
            t(/HH/g, _(a, 2)),
            t(/H/g, a),
            t(/hh/g, _(a % 24, 2)),
            t(/h/g, a % 24),
            t(/mm/g, _(r, 2)),
            t(/m/g, r),
            t(/ss/g, _(e, 2)),
            t(/s/g, e),
            n
        }
        ,
        d.getHeight = function() {
            if ("object" !== ("undefined" == typeof window ? "undefined" : r(window)))
                return -1;
            var e = window.document
              , t = e.body
              , n = e.documentElement
              , e = ("BackCompat" === e.compatMode ? t : n).clientHeight;
            return Math.max(n.scrollHeight, t.scrollHeight, e)
        }
        ,
        d.getScrollLeft = function() {
            if ("object" !== ("undefined" == typeof window ? "undefined" : r(window)))
                return -1;
            var e = window.document
              , t = e.documentElement
              , e = e.body;
            return window.pageXOffset || t && t.scrollLeft || e.scrollLeft
        }
        ,
        d.getScrollTop = function() {
            if ("object" !== ("undefined" == typeof window ? "undefined" : r(window)))
                return -1;
            var e = window.document
              , t = e.documentElement
              , e = e.body;
            return window.pageYOffset || t && t.scrollTop || e.scrollTop
        }
        ,
        d.getViewHeight = function() {
            if ("object" !== ("undefined" == typeof window ? "undefined" : r(window)))
                return -1;
            var e = window.document
              , t = e.compatMode
              , n = e.body
              , e = e.documentElement
              , e = ("BackCompat" === t ? n : e).clientHeight;
            return window.innerHeight || e
        }
        ,
        d.getViewWidth = function() {
            if ("object" !== ("undefined" == typeof window ? "undefined" : r(window)))
                return -1;
            var e = window.document
              , t = e.compatMode
              , n = e.body
              , e = e.documentElement;
            return ("BackCompat" === t ? n : e).clientWidth,
            window.innerWidth || clientHeight
        }
        ,
        d.getWidth = function() {
            if ("object" !== ("undefined" == typeof window ? "undefined" : r(window)))
                return -1;
            var e = window.document
              , t = e.body
              , n = e.documentElement
              , e = ("BackCompat" === e.compatMode ? t : n).clientWidth;
            return Math.max(n.scrollWidth, t.scrollWidth, e)
        }
        ,
        d.isAndroid = k,
        d.isAndroidPhone = C,
        d.isAndroidTablet = S,
        d.isBlackberry = P,
        d.isChrome = function(e, t) {
            var n = w(t).match(/(?:chrome|crios)\/(\d+)/i)
              , n = n && n[1];
            return !x("", t) && !q("", t) && L(n, e)
        }
        ,
        d.isClient = function() {
            return "undefined" != typeof window
        }
        ,
        d.isDesktop = function(e) {
            return !O(e) && !B(e)
        }
        ,
        d.isEdge = q,
        d.isEmail = function(e) {
            return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
        }
        ,
        d.isFirefox = function(e, t) {
            t = w(t).match(/(?:firefox|fxios)\/(\d+)/);
            return L(t && t[1], e)
        }
        ,
        d.isIE = function(e, t) {
            t = w(t).match(/(?:msie |trident.+?; rv:)(\d+)/);
            return L(t && t[1], e)
        }
        ,
        d.isInScreen = function(e) {
            e = e.getBoundingClientRect();
            return e.top <= (window.innerHeight || document.documentElement.clientHeight) && e.left <= (window.innerWidth || document.documentElement.clientWidth) && 0 <= e.bottom && 0 <= e.right
        }
        ,
        d.isIos = function(e, t) {
            return I(e, t) || T(e, t)
        }
        ,
        d.isIpad = T,
        d.isIphone = I,
        d.isLinux = function(e) {
            return /linux/.test(w(e))
        }
        ,
        d.isMac = function(e) {
            return /mac/.test(w(e))
        }
        ,
        d.isMobile = O,
        d.isOffline = function() {
            return !N()
        }
        ,
        d.isOnline = N,
        d.isOpera = x,
        d.isPhoneNumber = function(t) {
            var n = !1;
            return [/^((1[3-8][0-9])\d{8})$/, /^\d{3,4}\-?\d{7,8}$/].forEach(function(e) {
                n = n || e.test(t)
            }),
            n
        }
        ,
        d.isQQBrowser = function(e, t) {
            t = w(t).match(/(?:m?qqbrowser)\/(\d+)/);
            return L(t && t[1], e)
        }
        ,
        d.isSafari = function(e, t) {
            t = w(t).match(/version\/(\d+).+?safari/);
            return L(t && t[1], e)
        }
        ,
        d.isTablet = B,
        d.isTouchDevice = function() {
            return !("object" !== ("undefined" == typeof window ? "undefined" : r(window)) || !(window.ontouchstart || window.DocumentTouch && document instanceof DocumentTouch))
        }
        ,
        d.isUrl = function(e) {
            return (!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1] ? /^(?:(?:https?|ftp):\/\/)+(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i : /^(?:\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i).test(e)
        }
        ,
        d.isWindows = E,
        d.isWindowsPhone = A,
        d.isWindowsTablet = D,
        d.md5 = b,
        d.toJSON = ye,
        d.toParam = ve,
        Object.defineProperty(d, "__esModule", {
            "value": !0
        })
    }
    )(t)
}
, function(t, n, _) {
    (function(b) {
        var e = function(e, t, n) {
            var i = _(10)
              , o = _(28)
              , s = _(63)
              , r = new (_(64))
              , u = _(1)
              , c = _(4)
              , h = _(3)
              , a = _(30)
              , d = _(11)
              , l = _(8)
              , p = _(19)
              , f = (_(14),
            _(65))
              , g = "baseLoginAcodeChange"
              , m = "resetBaseLoginBtnStatus"
              , v = _(13)
              , y = _(9);
            n.exports = b.Class("baseLoginAction", {
                "extend": i,
                "construct": function(e) {
                    this.panel = e.panel,
                    this.types = e.types,
                    this.toastPanel = e.toastPanel,
                    this.verifyCenter = e.verifyCenter,
                    this.secondVerify = e.secondVerify,
                    this.isPca = "pca" == e.business,
                    this.errMsg = e.errMsg,
                    this.doms = {},
                    this.nameKit = null,
                    this.areaIns = null,
                    this.isFirstShow = !0,
                    this.logger = new y.LoginLogger("QiyiLoginLoader"),
                    this.mask = document.querySelector('[data-login-sdk="mask"'),
                    this.LoginData = {},
                    this.rpage = "passsdkv2",
                    this.block = "psprt_acc",
                    this.count = 0,
                    this.isLogining = !1
                },
                "methods": {
                    "init": function() {
                        this.render(),
                        this.bindEvent()
                    },
                    "bindEvent": function() {
                        var e = this;
                        this.initArea(),
                        this.toggleEye(),
                        this.handlePwdInput(),
                        this.initNameInput(),
                        this.initMailSuggest(),
                        this.handleBtn(),
                        this.handleAutoLogin(),
                        c.on("agreeBaseLogin", function() {
                            e.panel.querySelector('[data-baseLogin="loginBtn"]').innerHTML = "正在登录...",
                            e.isLogining = !0,
                            e.doLogin()
                        }),
                        c.on("baseLoginErr", function() {
                            e.nameKit.showErrMsg("系统异常,请稍后再试")
                        }),
                        this.errMsg && this.nameKit.showErrMsg(this.errMsg)
                    },
                    "render": function() {
                        var e = JSON.parse(b.cookie.get("QC160") || "{}")
                          , e = this.renderHtml(s, {
                            "noSmsLogin": this.types.indexOf(3) < 0,
                            "noScanLogin": this.types.indexOf(2) < 0,
                            "noReg": this.types.indexOf(5) < 0,
                            "isPca": this.isPca,
                            "autoLogin": 0 != e.autoLogin
                        });
                        this.panel.innerHTML = e,
                        this.logger.log("baselogin has render "),
                        d.block({
                            "rpage": this.rpage,
                            "block": this.block
                        }),
                        this.doms = {
                            "slideCover": document.querySelector('[data-login-sdk="slideCover"]'),
                            "mask": document.querySelector('[data-login-sdk="mask"]'),
                            "loginBtn": this.panel.querySelector('[data-baseLogin="loginBtn"]'),
                            "nameErr": this.panel.querySelector('[data-baseLogin="nameErr"]'),
                            "nameInput": this.panel.querySelector('[data-baseLogin="nameInput"]'),
                            "pwdInput": this.panel.querySelector('[data-baseLogin="pwdInput"]'),
                            "nameText": this.panel.querySelector('[data-baseLogin="field-item-name"]'),
                            "pwdText": this.panel.querySelector('[data-baseLogin="field-item-pwd"]'),
                            "pwdErr": this.panel.querySelector('[data-baseLogin="pwdErr"]'),
                            "pwdClose": this.panel.querySelector('[data-baseLogin="pwdClose"]'),
                            "pwdEye": this.panel.querySelector('[data-baseLogin="pwdEye"]'),
                            "smsLogin": this.panel.querySelector('[data-baseLogin="smsLogin"]'),
                            "scanLogin": this.panel.querySelector('[data-baseLogin="scanLogin"]'),
                            "reg": this.panel.querySelector('[data-baseLogin="reg"]'),
                            "mailSuggestPanel": this.panel.querySelector('[data-baseLogin="mailSuggest"]'),
                            "autologin": this.panel.querySelector('[data-baseLogin="autologin"]')
                        }
                    },
                    "showPanel": function(e) {
                        this.nameKit.clearErrMsg(),
                        this.show(e || this.panel)
                    },
                    "initArea": function() {
                        this.areaIns = new o({
                            "panel": this.doms.areaPanel,
                            "fireName": g
                        })
                    },
                    "toggleEye": function() {
                        var t = this.doms.pwdEye
                          , n = this.doms.pwdInput
                          , i = function i(e) {
                            e.stopPropagation && e.stopPropagation(),
                            h.hasClass(t, "iconfont-preview-prihabit") ? (h.addClass(t, "iconfont-preview"),
                            h.removeClass(t, "iconfont-preview-prihabit"),
                            n.setAttribute("type", "password")) : (h.addClass(t, "iconfont-preview-prihabit"),
                            h.removeClass(t, "iconfont-preview"),
                            n.setAttribute("type", "text"))
                        };
                        u.on(t, "click", i)
                    },
                    "handlePwdInput": function() {
                        var t = this
                          , n = this.doms.pwdInput
                          , e = this.doms.pwdClose
                          , i = function i(e) {
                            e.stopPropagation && e.stopPropagation(),
                            n.value = "",
                            h.addClass(t.doms.pwdClose, "dn"),
                            n.focus
                        };
                        u.on(e, "click", i);
                        var o = function o(e) {
                            e.stopPropagation && e.stopPropagation(),
                            h.removeClass(t.doms.pwdClose, "dn"),
                            h.addClass(t.doms.pwdText, "field-item-focus"),
                            t.hidePwdErr()
                        };
                        u.on(n, "click", o);
                        var s = function s(e) {
                            e.stopPropagation && e.stopPropagation(),
                            h.addClass(t.doms.nameText, "field-item-focus")
                        };
                        u.on(t.doms.nameInput, "focus", s);
                        var a = function a(e) {
                            e.stopPropagation && e.stopPropagation(),
                            0 == n.value.trim().length && (n.value = ""),
                            h.addClass(t.doms.pwdClose, "dn"),
                            h.removeClass(t.doms.pwdText, "field-item-focus")
                        };
                        u.on(n, "blur", a);
                        var r = function r(e) {
                            e.stopPropagation && e.stopPropagation(),
                            n.value.trim().length,
                            h.removeClass(t.doms.nameText, "field-item-focus")
                        };
                        u.on(t.doms.nameInput, "blur", r);
                        var c = function c(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hidePwdErr(),
                            t.setBaseLoginBtnStatus()
                        }
                          , d = function d(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.LoginData.pwd = t.doms.pwdInput.value
                        }
                          , l = function l(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.LoginData.name = t.doms.nameInput.value
                        };
                        u.on(n, "keyup", c),
                        u.on(n, "input", c),
                        u.on(n, "input", d),
                        u.on(t.doms.nameInput, "input", l)
                    },
                    "setBaseLoginBtnStatus": function() {
                        this.doms.pwdInput;
                        var e = this.nameKit.checkNameValidate()
                          , t = 0 < this.doms.pwdInput.value.trim().length
                          , n = this.doms.loginBtn;
                        e && t ? (h.addClass(n, "btn-major-show"),
                        h.removeClass(n, "btn-major")) : (h.removeClass(n, "btn-major-show"),
                        h.addClass(n, "btn-major"))
                    },
                    "showPwdErr": function(e) {
                        this.doms.pwdErr.innerHTML = e,
                        h.removeClass(this.doms.pwdErr, "dn")
                    },
                    "hidePwdErr": function() {
                        h.addClass(this.doms.pwdErr, "dn")
                    },
                    "initNameInput": function() {
                        var e = this;
                        this.nameKit = new a({
                            "name": this.doms.nameInput,
                            "nameErr": this.doms.nameErr,
                            "mailPanel": this.doms.mailSuggestPanel,
                            "acode": "",
                            "fireEnableName": m,
                            "zoneChangeFireName": g
                        }),
                        this.nameKit.init(),
                        c.on(m, function() {
                            e.setBaseLoginBtnStatus()
                        })
                    },
                    "initMailSuggest": function() {
                        new f({
                            "panel": this.doms.mailSuggestPanel,
                            "input": this.doms.nameInput,
                            "prompt": !1
                        }).init()
                    },
                    "handleBtn": function() {
                        var t = this;
                        this.logger.log("baselogin click login btn");
                        var n = this.doms.loginBtn
                          , i = function i(e) {
                            e.stopPropagation && e.stopPropagation(),
                            !h.hasClass(n, "btn-major") && p.isAgree("baseLogin") && (t.isLogining || (n.innerHTML = "正在登录...",
                            t.isLogining = !0,
                            d.click({
                                "rpage": t.rpage,
                                "block": t.block,
                                "rseat": "acc_login"
                            }),
                            t.doLogin()))
                        };
                        u.on(n, "click", i);
                        var o = function o(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.doms.pwdInput.value = "",
                            t.doms.nameInput.value = "",
                            h.hasClass(n, "btn-major-show") && (h.removeClass(n, "btn-major-show"),
                            h.addClass(n, "btn-major")),
                            d.click({
                                "rpage": t.rpage,
                                "block": t.block,
                                "rseat": "acc2sms"
                            }),
                            c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 3
                                }
                            })
                        }
                          , s = function s(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.doms.pwdInput.value = "",
                            t.doms.nameInput.value = "",
                            h.hasClass(n, "btn-major-show") && (h.removeClass(n, "btn-major-show"),
                            h.addClass(n, "btn-major")),
                            c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 2
                                }
                            })
                        };
                        u.on(this.doms.smsLogin, "click", o),
                        u.on(this.doms.scanLogin, "click", s);
                        var a = function a(e) {
                            e.stopPropagation && e.stopPropagation(),
                            c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 4
                                }
                            })
                        };
                        u.on(this.doms.reg, "click", a)
                    },
                    "handleAutoLogin": function() {
                        var t, n;
                        this.isPca && (t = this.doms.autologin,
                        n = function n(e) {
                            e.stopPropagation && e.stopPropagation(),
                            h.hasClass(t, "selected") ? h.removeClass(t, "selected") : h.addClass(t, "selected")
                        }
                        ,
                        u.on(t, "click", n))
                    },
                    "doLogin": function(e) {
                        var o = this.doms.loginBtn
                          , s = this
                          , a = {
                            "passwd": s.doms.pwdInput.value,
                            "acode": "",
                            "phone": s.doms.nameInput.value,
                            "token": e
                        };
                        this.logger.log("baselogin start login___logininfo:".concat(a.phone));
                        try {
                            r.login(a, function(e) {
                                s.nameKit.clearErrMsg();
                                var t, n, i = e.msg;
                                o.innerHTML = "登录",
                                s.isLogining = !1,
                                "A00000" == e.code && e.data ? ((t = e.data).rpage = "login_scs_accv2",
                                t.methods = "baseLogin",
                                t.phone = s.doms.nameInput.value,
                                l.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "登录成功",
                                    "diy_method": "601"
                                }),
                                c.fire({
                                    "type": "handleLoginSuc",
                                    "rpage": "login_scs_accv2",
                                    "data": t
                                })) : "P00223" == e.code ? ((n = a).ErrCb = function() {
                                    s.nameKit.showPhoneMsg("请稍后重试"),
                                    s.logger.log("baselogin login verifyCenter error"),
                                    window.MITO && window.MITO.log({
                                        "message": "账号密码登录：触发验证中心失败",
                                        "data": {
                                            "acode": null === a ? void 0 : a.acode,
                                            "phone": null === a ? void 0 : a.phone
                                        }
                                    })
                                }
                                ,
                                l.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "开启滑动验证码",
                                    "diy_method": "6011"
                                }),
                                s.logger.log("baselogin login start verifyCenter"),
                                s.verifyCenter.callSDK(e, n, function(e) {
                                    e ? (l.qosSend({
                                        "diy_ec": "",
                                        "diy_ls": "滑动验证码验证成功",
                                        "diy_method": "60111"
                                    }),
                                    s.doLogin(e)) : (l.qosSend({
                                        "diy_ec": "",
                                        "diy_ls": "滑动验证码验证失败",
                                        "diy_method": "60112"
                                    }),
                                    h.addClass(s.doms.slideCover, "dn"),
                                    h.addClass(s.doms.mask, "dn"),
                                    s.nameKit.showPhoneMsg("请稍后重试"))
                                })) : "P00807" == e.code ? (s.logger.log("baselogin login Bind mobile phone number"),
                                l.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "绑定手机",
                                    "diy_method": "6012"
                                }),
                                c.fire({
                                    "type": "toggleLoginTypes",
                                    "data": {
                                        "type": 5,
                                        "rpage": "login_scs_acc"
                                    }
                                }),
                                h.removeClass(s.mask, "dn")) : "P00159" === e.code || "P00908" == e.code ? (s.logger.log("baselogin login fail data.code=".concat(e.code, " (").concat("hrisk", ")")),
                                l.qosSend({
                                    "diy_ec": e.code || "",
                                    "diy_ls": "高危账号/设备锁",
                                    "diy_method": "6013"
                                }),
                                n = "P00159" === e.code ? "hrisk" : "lock",
                                c.fire({
                                    "type": "showQrCodeLogin",
                                    "data": {
                                        "type": n,
                                        "mobile": i
                                    }
                                }),
                                h.removeClass(s.doms.mask, "dn")) : "P00117" == e.code || "P00119" == e.code && i.indexOf("再错") < 0 || "P00125" == e.code && i.indexOf("再错") < 0 || "P00108" === e.code ? (s.count = s.count + 1,
                                2 <= s.count ? s.nameKit.showErrMsg("账号或密码错误，试试短信登录吧~") : s.nameKit.showErrMsg(i || "账号或密码错误"),
                                s.logger.log("baselogin login fail (password error)"),
                                l.qosSend({
                                    "diy_ec": (null == e ? void 0 : e.code) || "",
                                    "diy_ls": "登录失败",
                                    "diy_method": "601"
                                })) : "P00141" == e.code || "P00119" == e.code && 0 <= i.indexOf("再错") || "P00125" == e.code && 0 <= i.indexOf("再错") ? (s.logger.log("baselogin login fail (password error)"),
                                l.qosSend({
                                    "diy_ec": (null == e ? void 0 : e.code) || "",
                                    "diy_ls": "登录失败",
                                    "diy_method": "601"
                                }),
                                s.nameKit.showErrMsg(i)) : "P00950" == e.code || "P00951" == e.code ? (s.logger.log("baselogin login data.code=".concat(e.code, " init secondVerify page")),
                                l.qosSend({
                                    "diy_ec": e.code || "",
                                    "diy_ls": "二次验证",
                                    "diy_method": "6015"
                                }),
                                s.secondVerify.init({
                                    "prePanel": s.panel,
                                    "data": e
                                }),
                                h.removeClass(s.doms.mask, "dn"),
                                s.secondVerify.showPanel()) : (s.logger.warn("baselogin login info:".concat(JSON.stringify(a), " failed:").concat(JSON.stringify(e))),
                                l.qosSend({
                                    "diy_ec": e.code || "",
                                    "diy_ls": "登录失败",
                                    "diy_method": "601"
                                }),
                                s.nameKit.showErrMsg(i),
                                v("KIWI-LOGIN-BASELOGIN-FAIL-".concat(a.phone)))
                            })
                        } catch (t) {
                            this.logger.error("baselogin login info:".concat(JSON.stringify(a), " error:").concat(t)),
                            v("KIWI-LOGIN-BASELOGIN-ERROR-".concat(null === a ? void 0 : a.phone))
                        }
                    },
                    "resetAcode": function(e, t) {
                        this.areaIns.resetAcode(e, t)
                    },
                    "getAutoLoginStatus": function() {
                        return h.hasClass(this.doms.autologin, "selected")
                    }
                }
            })
        }
        .call(n, _, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, _(0))
}
, function(t, n, r) {
    (function(a) {
        var e = function(e, t, n) {
            var i = r(6)
              , o = r(5)
              , s = r(2);
            n.exports = a.Class("areaListService", {
                "construct": function() {
                    this._remoteInterface = new i({
                        "getAreacodeIf": {
                            "url": o.getAreacode
                        }
                    })
                },
                "methods": {
                    "getAreacode": function(t) {
                        var e = s.getConfig();
                        this._remoteInterface.send({
                            "ifname": "getAreacodeIf",
                            "param": {
                                "agenttype": e.agenttype,
                                "app_version": e.appVersion || "",
                                "device_id": e.deviceid || a.cookie.get("QC005_PCA") || "",
                                "fromSDK": e.fromSDK,
                                "local": 1,
                                "smart": 1,
                                "ptid": e.ptid,
                                "sdk_version": e.sdk_version
                            }
                        }, function(e) {
                            t && t(e)
                        })
                    }
                }
            })
        }
        .call(n, r, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, r(0))
}
, function(t, n, d) {
    "use strict";
    (function(a) {
        var e = function(e, t, n) {
            var r = d(1)
              , c = d(29)
              , i = "__IFRAME__"
              , o = function o() {}
              , s = a.Class("FormRequest", {
                "construct": function(e) {
                    e = e || {},
                    this.form = e.form || {},
                    this.data = e.data || [],
                    this.iframe = e.iframe || {},
                    this.callbackName = e.callbackName || "__CALLBACK__" + Math.floor(2147483648 * Math.random()).toString(36),
                    this.randomCb = !e.callbackName,
                    this.callback = e.callback || o,
                    this.needIframe = !1 !== e.needIframe && !0 !== e.needIframe || e.needIframe,
                    this.needDestroy = e.needDestroy || !1,
                    this.noTranslateKeys = e.noTranslateKeys || [],
                    this.needMd5 = e.needMd5 || !1,
                    this.init()
                },
                "methods": {
                    "init": function() {
                        i += Math.floor(2147483648 * Math.random()).toString(36),
                        this.form = this._dealForm(this.form),
                        this.formElem = this._createForm(this.form),
                        this._importData(this.formElem, this.data),
                        this.needIframe && (this.iframe = this._dealIframe(this.iframe),
                        this.iframeElem = this._createIframe(this.iframe))
                    },
                    "_translateStr": function(e, t) {
                        if ((e = e || "") && "string" == typeof e && e.length)
                            for (var n = [{
                                "origin": '"',
                                "dest": "&quot;"
                            }, {
                                "origin": "<",
                                "dest": "&lt;"
                            }, {
                                "origin": ">",
                                "dest": "&gt;"
                            }, {
                                "origin": "\\\\",
                                "dest": "&#92;"
                            }, {
                                "origin": "&",
                                "dest": "&amp;"
                            }], i = 0; i < n.length; i++) {
                                var o, s = n[i].origin;
                                "&" === s && t || (o = new RegExp(s,"g"),
                                s = n[i].dest,
                                e = e.replace(o, s))
                            }
                        return e
                    },
                    "_dealForm": function(e) {
                        return 1 != (e = e || {}).nodeType && (e["accept-charset"] = e["accept-charset"] || "utf-8",
                        e["action"] = e["action"] || "",
                        e["enctype"] = e["enctype"] || "application/x-www-form-urlencoded",
                        e["method"] = e["method"] || "post",
                        e["name"] = e["name"] || "__FORM__",
                        e["target"] = e["target"] || i,
                        e["style"] = e["style"] || "display:none;"),
                        e
                    },
                    "_createForm": function(e) {
                        if (1 == (e = e || {}).nodeType)
                            return e;
                        var t = null
                          , n = r.getElementByAttr("form", "name", e.name);
                        if (0 < n.length)
                            t = n[0],
                            r.removeAllChild(t);
                        else {
                            for (var i in t = document.createElement("form"),
                            e)
                                e[i] && t.setAttribute(i, e[i]);
                            document.body.appendChild(t)
                        }
                        return t
                    },
                    "_dealIframe": function(e) {
                        return 1 != (e = e || {}).nodeType && (e.style = e.style || "display:none;",
                        e.name = e.name || i),
                        e
                    },
                    "_createIframe": function(e) {
                        if (1 == (e = e || {}).nodeType)
                            return e;
                        var t = e.name || ""
                          , n = (e.style,
                        r.getElementByAttr("iframe", "name", t))
                          , t = null;
                        return 0 < n.length ? t = n[0] : ((n = document.createElement("div")).innerHTML = '<iframe style="display:none;" name="' + e.name + '"></iframe>',
                        n.setAttribute("style", "display:none"),
                        t = n,
                        document.body.appendChild(n)),
                        t
                    },
                    "_importData": function(e, t) {
                        if (this.formElem) {
                            r.isEmptyObject(t) || r.isArray(t) || (this.randomCb && (t.callback = "window.parent." + this.callbackName),
                            t = this.sortData(t));
                            for (var n = 0; n < t.length; n++) {
                                var i, o = this._translateStr(String(t[n].name)), s = String(t[n].value), s = 0 <= this.noTranslateKeys.indexOf(o) ? this._translateStr(s, !0) : this._translateStr(s), a = String(t[n].type || "text");
                                o && (0 < (i = r.getElementByAttr("input", "name", o, e)).length ? i[0].setAttribute("name", s) : ((i = document.createElement("input")).name = o,
                                i.value = s,
                                i.type = a,
                                e.appendChild(i)))
                            }
                            return !0
                        }
                    },
                    "submit": function() {
                        if (this.formElem)
                            try {
                                var t;
                                this.needIframe && (this.needDestroy && this.callback ? (t = this,
                                window[this.callbackName] = function(e) {
                                    t.callback(e),
                                    t.iframeElem && (t.iframeElem.parentNode.removeChild(t.iframeElem),
                                    t.iframeElem = null),
                                    t.randomCb && (window[t.callbackName] = null)
                                }
                                ) : window[this.callbackName] = this.callback),
                                this.formElem.submit(),
                                this.needDestroy && (this.formElem.parentNode.removeChild(this.formElem),
                                this.formElem = null)
                            } catch (e) {
                                this.callback && this.callback({
                                    "code": "E0000F",
                                    "msg": "表单出错！",
                                    "data": e
                                })
                            }
                    },
                    "reset": function() {
                        this.formElem && this.formElem.reset()
                    },
                    "sortData": function(e) {
                        var t, n = [];
                        for (t in e) {
                            var i = {
                                "name": t,
                                "value": e[t],
                                "type": "text"
                            };
                            n.push(i)
                        }
                        if (this.needMd5) {
                            n.sort(function(e, t) {
                                return e.name < t.name ? -1 : e.name > t.name ? 1 : 0
                            });
                            for (var o = {}, s = 0; s < n.length; s++)
                                o[n[s].name] = n[s].value;
                            var a = c(o);
                            n.push({
                                "name": "qd_sc",
                                "value": a,
                                "type": "text"
                            })
                        }
                        return n
                    }
                }
            });
            n.exports = s
        }
        .call(n, d, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, d(0))
}
, function(e, t, o) {
    "use strict";
    t = function(e, t, n) {
        var y = o(1)
          , b = o(8)
          , i = {
            "request": function(t, e) {
                var o, n, s, i = (e = e || {}).data || "", a = !1 !== e.async, r = e.username || "", c = e.password || "", d = (e.method || "GET").toUpperCase(), l = e.headers || {}, u = e.timeout || 5e3, h = e.ifname, p = {}, f = e.withCredentials || !1;
                function g() {
                    if (4 == s.readyState) {
                        var e;
                        try {
                            e = s.status
                        } catch (t) {
                            return void m("failure")
                        }
                        m(e),
                        m(200 <= e && e < 300 || 304 == e || 1223 == e || 0 === e ? "success" : "failure"),
                        window.setTimeout(function() {
                            s && (s.onreadystatechange = function() {}
                            ),
                            a && (s = null)
                        }, 0)
                    }
                }
                function m(e) {
                    var t, n = p[e = "on" + e];
                    if (n) {
                        o && window.clearTimeout(o);
                        try {
                            t = s.responseText || "{}",
                            n(JSON.parse(t))
                        } catch (i) {
                            return n("")
                        }
                        return 1
                    }
                }
                for (n in e)
                    p[n] = e[n];
                try {
                    for (n in s = function() {
                        if (window.XMLHttpRequest)
                            return new XMLHttpRequest;
                        if (window.ActiveXObject)
                            try {
                                return new window.ActiveXObject("Msxml2.XMLHTTP")
                            } catch (e) {
                                try {
                                    return new window.ActiveXObject("Microsoft.XMLHTTP")
                                } catch (t) {}
                            }
                    }(),
                    "deviceId" === h ? i = JSON.stringify(i) : "[object Object]" == Object.prototype.toString.call(i) && (i = y.jsonToQuery(i)),
                    "GET" == d && (i && (t += (0 <= t.indexOf("?") ? "&" : "?") + i,
                    i = null),
                    e["noCache"] && (t += (0 <= t.indexOf("?") ? "&" : "?") + "b" + +new Date + "=1")),
                    r ? s.open(d, t, a, r, c) : s.open(d, t, a),
                    a && (s.onreadystatechange = g),
                    "POST" == d && ("deviceId" === h ? s.setRequestHeader("Content-Type", l["Content-Type"] || "application/json") : s.setRequestHeader("Content-Type", l["Content-Type"] || "application/x-www-form-urlencoded")),
                    l)
                        l.hasOwnProperty(n) && s.setRequestHeader(n, l[n]);
                    "withCredentials"in s && (s.withCredentials = f),
                    m("beforerequest"),
                    u && (o = setTimeout(function() {
                        var e = "";
                        t && (e = t.split("?")[0].split(":")[1]),
                        b.qosSend({
                            "diy_ec": e || "",
                            "diy_ls": "TCP连接超时",
                            "diy_method": "612"
                        }),
                        s.onreadystatechange = function() {}
                        ,
                        s.abort(),
                        m("timeout") || m("failure")
                    }, u)),
                    s.send(i),
                    a || g()
                } catch (v) {
                    m("failure")
                }
                return s
            }
        };
        n.exports = i
    }
    .call(t, o, t, e);
    t === undefined || (e.exports = t)
}
, function(t, n, i) {
    (function(w) {
        var e = function(e, t, n) {
            var i = function(e, t, n) {
                var i = "boolean" != typeof __BROWSER__ && void 0 !== w && "undefined" == typeof window;
                console.log("pageUrl:", e, t, n);
                var o = ""
                  , s = {}
                  , a = {}
                  , r = ""
                  , c = t.toLowerCase();
                a.userAgent = c;
                var d = ""
                  , d = n && n.effectiveType ? n.effectiveType : (d = c.match(/NetType\/\w+/) ? c.match(/NetType\/\w+/)[0] : "").toLowerCase().replace("nettype/", "")
                  , l = c.match(/rtrident/)
                  , u = !l && c.match(/(ipad).*os\s([\d_]+)/)
                  , h = !l && !u && c.match(/(iphone\sos)\s([\d_]+)/)
                  , p = c.match(/Android\s+([\d.]+)/i)
                  , f = c.match(/(?:redmi|hm) ([\w ]+) build/i)
                  , t = c.match(/iqiyireader iqiyireaderversion\/([\d.]+)/i)
                  , n = c.match(/iqiyiversion_reader\/([\d.]+)/i);
                t || n || /iqiyiapp/gi.test(c);
                a.IE11 = /rv\:11/.test(c),
                a.IE = /msie/.test(c) || a.IE11,
                a.IE6 = /msie 6/.test(c),
                a.IE7 = /msie 7/.test(c),
                a.IE8 = /msie 8/.test(c),
                a.IE9 = /msie 9/.test(c),
                a.IE10 = /msie 10/.test(c),
                a.EDGE = /edge/.test(c),
                a.iPhone = /iphone os/.test(c) && !l,
                a.iPhone4 = /iphone os [45]_/.test(c) && !l,
                a.iPad = /ipad/.test(c) && !l,
                a.iPod = /iPod/i.test(c) && !l,
                a.isTouch = "undefined" != typeof window && ("ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                a.CHROMEIOS = /crios/.test(c),
                a.CHROME = /chrome/.test(c) && !a.EDGE,
                a.SAFARI = /safari/.test(c) && !/chrome/.test(c),
                a.FIREFOX = /firefox/.test(c),
                a.mobile = /mobile/gi.test(c),
                a.mobileSafari = a.iPhone || a.iPhone || a.iPad,
                a.QQ = /QQBrowser/gi.test(c),
                a.WECHAT = /(wechat)|(micromessenger)/gi.test(c),
                a.SmartTV = /SMART-TV/gi.test(c),
                a.BAIDU = /baidubrowser/gi.test(c),
                a.BAIDU_BOX = /baiduboxapp/gi.test(c),
                a.HUAWEI = /huaweibrowser/gi.test(c),
                a.VIVO = /vivobrowser/gi.test(c),
                a.MIUI = /miuibrowser/gi.test(c),
                a.MIUI_VIDEO = /miuivideo/gi.test(c),
                a.CHROME && ((l = /chrome\/([\d\.]+) /gi.exec(c)[1]) ? (a.version = parseInt(l, 10),
                1 < (g = l.split(".")).length && (a.minorVersion = parseInt(g[1], 10)),
                2 < g.length && (a.buildVersion = parseInt(g[2], 10))) : a.version = 0),
                a.EDGE && (m = /edge\/([\d\.]+)/gi.exec(c),
                a.version = m ? parseInt(m[1], 10) : 0),
                f && (a.redmi = f);
                var g = /(macintosh|macintel|macppc|mac68k|macos)/i.test(c)
                  , m = /X11/.test(c) && !g
                  , f = /win/i.test(c) && !m
                  , m = /android/.test(c);
                s.win = f,
                s.mac = g,
                s.android = m,
                s.androidMobile = m && a.mobile,
                s.androidTablet = m && (!a.mobile || /pad/i.test(c)),
                p && (s.version = p[1]),
                s.ios = !1,
                h && (s.ios = !0,
                s.version = h[2].replace(/_/g, ".")),
                u && (s.ios = !0,
                s.version = u[2].replace(/_/g, ".")),
                a.iPod && (s.ios = !0),
                o = a.iPad ? "b85da1cf3ae44351" : "b6c13e26323c537d";
                var v = function v() {
                    var e = "01";
                    (a.iPhone || s.android) && (e = "02"),
                    (a.iPad || s.androidTablet) && (e = "03");
                    var t = "01";
                    s.android && (t = "02"),
                    s.ios && (t = "03");
                    return e + (t = s.mac && "02" !== e && "03" !== e ? "08" : t) + "0031010000000000"
                }
                  , y = function y() {
                    return !i && r || v()
                }
                  , b = function b(e) {
                    r = e
                }
                  , _ = function _() {
                    var e = "";
                    return a.CHROME ? e = "CHROME" : a.SAFARI ? e = "SAFARI" : a.FIREFOX ? e = "FIREFOX" : a.QQ ? e = "QQ" : a.WECHAT ? e = "WECHAT" : a.IE ? e = "IE" : a.IE6 ? e = "IE6" : a.IE7 ? e = "IE7" : a.IE8 ? e = "IE8" : a.IE9 ? e = "IE9" : a.IE10 ? e = "IE10" : a.EDGE ? e = "EDGE" : a.mobileSafari ? e = "mobileSafari" : s.ios || s.ios ? e = "ios" : s.androidMobile ? e = "androidMobile" : s.androidTablet && (e = "androidTablet"),
                    e
                }
                  , u = "m3u8";
                return /__pmode__=m3u8/.test(e) ? u = "m3u8" : /__pmode__=mp4/.test(e) && (u = "mp4"),
                {
                    "browser": a,
                    "os": s,
                    "code": o,
                    "getPtid": y,
                    "setPtid": b,
                    "browserName": _,
                    "network": d,
                    "playerMode": u
                }
            }("undefined" == typeof window ? "" : window.location.href, "undefined" == typeof navigator ? "" : navigator.userAgent, "undefined" == typeof navigator ? "" : navigator.connection);
            n.exports = i
        }
        .call(n, i, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, i(60))
}
, function(e, t) {
    var n, i, e = e.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function a(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            i = s
        }
    }();
    var r, c = [], d = !1, l = -1;
    function u() {
        d && r && (d = !1,
        r.length ? c = r.concat(c) : l = -1,
        c.length && h())
    }
    function h() {
        if (!d) {
            var e = a(u);
            d = !0;
            for (var t = c.length; t; ) {
                for (r = c,
                c = []; ++l < t; )
                    r && r[l].run();
                l = -1,
                t = c.length
            }
            r = null,
            d = !1,
            function(e) {
                if (i === clearTimeout)
                    return clearTimeout(e);
                if ((i === s || !i) && clearTimeout)
                    return i = clearTimeout,
                    clearTimeout(e);
                try {
                    i(e)
                } catch (t) {
                    try {
                        return i.call(null, e)
                    } catch (t) {
                        return i.call(this, e)
                    }
                }
            }(e)
        }
    }
    function p(e, t) {
        this.fun = e,
        this.array = t
    }
    function f() {}
    e.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        c.push(new p(e,t)),
        1 !== c.length || d || a(h)
    }
    ,
    p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    e.title = "browser",
    e.browser = !0,
    e.env = {},
    e.argv = [],
    e.version = "",
    e.versions = {},
    e.on = f,
    e.addListener = f,
    e.once = f,
    e.off = f,
    e.removeListener = f,
    e.removeAllListeners = f,
    e.emit = f,
    e.prependListener = f,
    e.prependOnceListener = f,
    e.listeners = function(e) {
        return []
    }
    ,
    e.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    e.cwd = function() {
        return "/"
    }
    ,
    e.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    e.umask = function() {
        return 0
    }
}
, function(e, t) {
    e.exports = '{{if type == \'suc\'}} <div class="qy-cover-align"> <div class="cover-content"> <div class="qy-result-success"> <div class="success-title"> <span class="title-txt">{{title}}</span> </div> {{if tip}} <div class="success-tips">{{tip}}</div> {{/if}} <div class="qyl-success-info"> {{if icon}} <div class="user-avatar-circle {{if isVip == true}}suc-vip-border{{/if}}"> <img class="user-avatar" src="{{icon}}"> </div> {{/if}} {{if nickname}} <div class="login-user-name {{if isVip == true}}suc-vip-font{{/if}}">{{nickname}}</div> {{/if}} </div> </div> </div> </div> {{else if type == \'toast\'}} <div class="qy-cover-align"> <div class="cover-content"> <div class="qy-login-warning"> <i class="iconfont icon-warning"></i> <div class="warning-title">{{tip}}</div> </div> </div> </div> {{else if type == \'agree\'}} <div class="read-clause" data-toast="read-clause"> <div class="read-clause-title">请阅读并同意</div> <div> <a href="https://www.iqiyi.com/user/register/protocol.html" class="theme-color" target="_blank">《用户协议》</a>和<a href="https://privacy.iqiyi.com/policies" class="theme-color" target="_blank">《隐私政策》</a> </div> <div class="read-clause-btn-agreen" data-toast="btn-agree">同意并登录</div> <div class="read-clause-btn-cancel" data-toast="btn-cancel">取消</div> </div> {{else if type == \'thrid\'}} <div class="read-clause" data-toast="read-clause"> <div class="read-clause-title">请阅读并同意</div> <div> <a href="https://www.iqiyi.com/user/register/protocol.html" class="theme-color" target="_blank">《用户协议》</a>和<a href="https://privacy.iqiyi.com/policies" class="theme-color" target="_blank">《隐私政策》</a> </div> <div class="read-clause-btn-agreen" data-toast="btn-agree">同意并继续</div> <div class="read-clause-btn-cancel" data-toast="btn-cancel">取消</div> </div> {{else if type == \'optLogin\'}} <div class="read-clause" data-toast="read-clause"> <div class="read-clause-title">请阅读并同意</div> <div> <a href="https://www.iqiyi.com/user/register/protocol.html" class="theme-color" target="_blank">《用户协议》</a>和<a href="https://privacy.iqiyi.com/policies" class="theme-color" target="_blank">《隐私政策》</a> </div> <div class="read-clause-btn-agreen" data-toast="btn-agree">同意并登录</div> <div class="read-clause-btn-cancel" data-toast="btn-cancel">取消</div> </div> {{else if type == \'delOpt\'}} <div class="read-clause" data-toast="del-opt"> <div class="read-clause-title">删除账号后</div> <div class="toast-del">再次登录需重新验证</div> <div class="read-clause-btn-agreen" data-toast="btn-sure">确定</div> <div class="read-clause-btn-cancel" data-toast="btn-cancel">取消</div> </div> {{else if type == \'deadLine\'}} <div class="read-clause" data-toast="del-opt"> <div class="read-clause-title-deadLine">当前账号登录信息已失效</div> <div class="read-clause-title-deadLine-bottom">请尝试其他登录方式</div> <div class="read-clause-btn-agreen-deadLine" data-toast="btn-sure">确定 <span data-toast="btn-sure-time"></span></div> </div> {{else if type == \'login-quit\'}} <div class="login-quit" data-toast="login-quit"> <div class="login-quit-title">确定退出当前账号吗?</div> <div class="login-quit-select">记住账号,下次快速登录</div> <div class="read-clause-btn-agreen" data-toast="btn-quit">确定退出</div> <div class="read-clause-btn-cancel" data-toast="btn-cancel">取消</div> </div> {{else}} <div class="qy-cover-align"> <div class="cover-content"> <div class="qy-login-warning"> <i class="iconfont icon-warning"></i> <div class="warning-title">{{tip}}</div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major" data-toast="btn">{{btnTip}}</div> </div> </div> </div> </div> </div> {{/if}}'
}
, function(e, t) {
    e.exports = '<div class="country-code" data-area="panel"> <span class="country-current" data-area="show">+86</span> <div class="iconfont-buttom" data-area="icon"></div> <span class="splite-line"></span> </div> <div class="country-code-list dn" data-area="listPanel"> {{each lists as item}} <ul> <li class="country-code-list-title">{{item.name}}</li> {{each item.value as i }} <li class="country-code-list-dec" data-area-acode="{{i.acode}}" data-area-name="{{i.name}}"> <span data-area-acode="{{i.acode}}" data-area-name="{{i.name}}">{{i.name}}</span> <span data-area-acode="{{i.acode}}" data-area-name="{{i.name}}">+{{i.acode}}</span> </li> {{/each}} </ul> {{/each}} </div>'
}
, function(e, t) {
    e.exports = '<div class="qy-login-methods {{if noSmsLogin == true}}single-tab{{/if}}"> <div data-baseLogin="scanLogin" class="qy-methods-item {{if noScanLogin == true}}dn{{/if}}">扫码登录</div> <div data-baseLogin="smsLogin" class="qy-methods-item {{if noSmsLogin == true}}dn{{/if}}">短信登录</div> <div class="qy-methods-item selected">密码登录<span class="tab-line"></span></div> </div> <div class="qy-login-field"> <div class="field-item" data-baseLogin="field-item-name"> <div class="field-error dn" data-baseLogin="nameErr">请输入手机号/邮箱</div> <div class="field-account"> <input type="text" name="username" class="input-box" data-baseLogin="nameInput" maxlength="40" placeholder="请输入手机号/邮箱"/> <div class="account-dropList dn" data-baseLogin="mailSuggest"></div> </div> </div> <div class="field-item" data-baseLogin="field-item-pwd"> <div class="field-error dn" data-baseLogin="pwdErr">账号或密码错误</div> <div class="field-confirm-code"> <input type="password" name="password" class="input-box" data-baseLogin="pwdInput" maxlength="20" placeholder="请输入密码"/> <i class="iconfont icon-close dn" data-baseLogin="pwdClose"></i> <div class="iconfont-preview" data-baseLogin="pwdEye"></div> </div> </div> <div class="field-other"> <div class="other-forget"> <a href="https://www.iqiyi.com/safety/findPassword.html" class="forget-pwd" target="_blank">忘记密码？</a> </div> </div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major" data-baseLogin="loginBtn"> 登录 </div> </div> </div> </div> <div class="field-other"> {{if isPca == true}} <div class="other-status"> <a href="javascript:;" class="status-item {{if autoLogin == true}}selected{{/if}}" data-baselogin="autologin"> <span class="iconfont icon-select"></span>自动登录 </a> </div> {{/if}} </div>'
}
, function(t, n, s) {
    (function(l) {
        var e = function(e, t, n) {
            var i = s(6)
              , a = s(16)
              , r = s(7)
              , o = s(5)
              , c = s(2)
              , d = s(1);
            n.exports = l.Class("baseLoginService", {
                "construct": function() {
                    this._remoteInterface = new i({
                        "login": {
                            "url": o.login
                        }
                    })
                },
                "methods": {
                    "login": function(e, t) {
                        var n = c.getConfig()
                          , i = this
                          , o = a.rsaFun(e.passwd)
                          , s = {
                            "__NEW": 1,
                            "agenttype": n.agenttype,
                            "app_version": n.appVersion || "",
                            "area_code": e.acode,
                            "checkExist": 1,
                            "device_id": n.deviceid || l.cookie.get("QC005_PCA") || "",
                            "dfp": "",
                            "email": e.phone
                        };
                        e.token && (s.env_token = e.token),
                        s = l.extend(s, {
                            "fromSDK": n.fromSDK,
                            "lang": "",
                            "nr": 3,
                            "passwd": o,
                            "ptid": n.ptid,
                            "sdk_version": n.sdk_version,
                            "verifyPhone": 1
                        }),
                        r.getDFP(function(e) {
                            s.dfp = e,
                            d.isCors() && (s.qd_sc = l.md5(decodeURIComponent(d.jsonToQuery(s)) + n.secretKey)),
                            i._remoteInterface.send({
                                "ifname": "login",
                                "param": s
                            }, function(e) {
                                t && t(e)
                            })
                        })
                    }
                }
            })
        }
        .call(n, s, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, s(0))
}
, function(t, n, d) {
    (function(c) {
        var e = function(e, t, n) {
            var i = d(10)
              , o = d(66)
              , a = d(1)
              , s = d(18)
              , r = d(3);
            n.exports = c.Class("mailSuggest", {
                "extend": i,
                "construct": function(e) {
                    this.panel = e.panel,
                    this._input = e.input,
                    this._curStr = "",
                    this.pattern = e.pattern || /^[0-9a-zA-Z_][-_\.0-9a-zA-Z-]{1,}@([0-9a-zA-Z][0-9a-zA-Z-])*/,
                    this._mails = e.mails || ["qq.com", "163.com", "126.com", "sina.com", "sina.cn", "hotmail.com", "gmail.com", "yahoo.cn", "139.com"],
                    this._max = e.max || 3
                },
                "methods": {
                    "init": function() {
                        if (this.panel && this._input)
                            return this.bindEvent(),
                            this
                    },
                    "render": function(e) {
                        e = this.renderHtml(o, {
                            "data": e
                        });
                        this.panel.innerHTML = e,
                        this.handleItem()
                    },
                    "bindEvent": function() {
                        var n = this
                          , i = {
                            "13": "enter",
                            "27": "esc",
                            "37": "left",
                            "38": "up",
                            "39": "right",
                            "40": "down",
                            "9": "tab"
                        }
                          , o = function o(e) {
                            e.stopPropagation && e.stopPropagation();
                            var t = e.keyCode + "";
                            t in i ? "38" == t || "40" == t ? ("38" == t && e.preventDefault(),
                            n.changeSuggest(i[t])) : "13" == t && n.enterSuggest() : setTimeout(function() {
                                n.useCorrectSuggest()
                            }, 50)
                        };
                        a.on(n._input, "keydown", o);
                        var t = function t(e) {
                            e.stopPropagation && e.stopPropagation(),
                            n._input.value && n.useCorrectSuggest()
                        };
                        a.on(n._input, "focus", t)
                    },
                    "handleItem": function() {
                        var s = this
                          , e = this.panel.querySelectorAll('[data-maisuggest="item"]');
                        this.itemClk = function(e) {
                            e.stopPropagation && e.stopPropagation();
                            var t = (e = e || window.event).target || e.srcElement
                              , e = t.getAttribute("data-index")
                              , e = parseInt(e, 10)
                              , t = t.innerHTML;
                            s._input.value = t,
                            s.hidePanel()
                        }
                        ,
                        this.itemMouseOver = function(e) {
                            e.stopPropagation && e.stopPropagation();
                            for (var t = (e = e || window.event).target || e.srcElement, n = t.getAttribute("data-index"), n = parseInt(n, 10), i = s.suggests, o = 0; o < i.length; o++)
                                o !== n ? r.removeClass(t, "selected") : (r.addClass(t, "selected"),
                                s._input.value = t.innerHTML)
                        }
                        ;
                        for (var t, n = 0; n < e.length; n++)
                            t = n,
                            a.on(e[t], "click", s.itemClk),
                            a.on(e[t], "mouseover", s.itemMouseOver)
                    },
                    "unBindEvent": function() {
                        for (var t = this.panel.querySelectorAll('[data-maisuggest="item"]'), e = 0; e < t.length; e++)
                            !function(e) {
                                a.un(t[e], "click", this.itemClk),
                                a.un(t[e], "click", this.itemMouseOver)
                            }(e);
                        this.itemClk = null,
                        this.itemMouseOver = null
                    },
                    "useCorrectSuggest": function() {
                        var e = this
                          , t = e._input.value || "";
                        e._curStr = s.trimAllBlank(t);
                        t = e.assemble(e.parseMail());
                        e._curStr && 0 < t.length && (!e.pattern || e.pattern && e.pattern.test(e._curStr)) ? (e.render(t),
                        e.suggests = e.panel.querySelectorAll('[data-maisuggest="item"]'),
                        e.show(e.panel)) : e.hidePanel()
                    },
                    "hidePanel": function() {
                        this.unBindEvent(),
                        this.hide(this.panel)
                    },
                    "changeSuggest": function(e) {
                        for (var t = this.suggests, n = t.length, i = 0, o = 1, i = "up" == e ? -1 : 1, s = 0; s < n; s++)
                            if (r.hasClass(t[s], "selected")) {
                                o = parseInt(t[s].getAttribute("data-index"), 10);
                                break
                            }
                        n - 1 <= (o = (o += i) <= 0 ? 0 : o) && (o = n - 1);
                        for (s = 0; s < n; s++)
                            parseInt(t[s].getAttribute("data-index"), 10) == o ? (r.addClass(t[s], "selected"),
                            this._input.value = t[s].innerHTML) : r.removeClass(t[s], "selected")
                    },
                    "enterSuggest": function() {
                        if (!r.hasClass(this.panel, "dn"))
                            for (var e = this.suggests, t = 0; t < e.length; t++)
                                r.hasClass(e[t], "selected") && (this._input.value = e[t].innerHTML,
                                this.hidePanel())
                    },
                    "parseMail": function() {
                        var e = this._mails.concat()
                          , t = this._curStr.match(/(@)(.*)/);
                        return t && t[2] && (e = e.filter(function(e) {
                            return -1 < e.indexOf(t[2])
                        })),
                        this._max && e.length > this._max && (e.length = this._max),
                        e
                    },
                    "assemble": function(e) {
                        var e = e
                          , n = this._curStr.replace(/@.*/, "");
                        return e.length && (e = e.map(function(e, t) {
                            return {
                                "mail": n + "@" + e
                            }
                        })).forEach(function(e, t) {
                            e.index = t
                        }),
                        e
                    }
                }
            })
        }
        .call(n, d, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, d(0))
}
, function(e, t) {
    e.exports = '<ul> {{each data as item}} <li> <a href="javascript:;" class="dropList-item" data-maisuggest="item" data-index="{{item.index}}">{{item.mail}}</a> </li> {{/each}} </ul>'
}
, function(t, n, y) {
    (function(v) {
        var e = function(e, t, n) {
            var i = y(10)
              , o = y(68)
              , s = y(12)
              , r = new (y(69))
              , c = y(4)
              , d = y(1)
              , l = y(15).getDomain()
              , u = y(11)
              , h = y(3)
              , p = y(19)
              , f = y(14)
              , g = y(8)
              , m = y(13)
              , a = y(9);
            n.exports = v.Class("otpLoginAction", {
                "extend": i,
                "construct": function(e) {
                    this.panel = null == e ? void 0 : e.panel,
                    this.type = (null == e ? void 0 : e.type) || "noOpt",
                    this.verifyCenter = null == e ? void 0 : e.verifyCenter,
                    this.secondVerify = null == e ? void 0 : e.secondVerify,
                    this.toastPanel = null == e ? void 0 : e.toastPanel,
                    this.doms = {},
                    this.opt_info = (null == e ? void 0 : e.opt_info) || [],
                    this.rpage = "psprt_qlg",
                    this.loginSource = null == e ? void 0 : e.loginSource,
                    this.leftText = null == e ? void 0 : e.leftText,
                    this.code = null,
                    this.logger = new a.LoginLogger("QiyiLoginLoader")
                },
                "methods": {
                    "init": function() {
                        this.render(),
                        "hasOpt" == this.type && u.block({
                            "rpage": "passsdkv2",
                            "block": this.rpage
                        }),
                        this.bindEvent()
                    },
                    "bindEvent": function() {
                        var t = this;
                        this.handleBtn(),
                        c.on("delOpt", function(n) {
                            null != n && n.data && (t.opt_info.forEach(function(e) {
                                var t;
                                (null == e || null === (t = e.value) || void 0 === t ? void 0 : t.opt_key) == (null == n ? void 0 : n.data) && localStorage.removeItem(null == e ? void 0 : e.name)
                            }),
                            t.optDev(n.data))
                        }),
                        c.on("ddRemove", function(n) {
                            null != n && n.data && (t.opt_info.forEach(function(e) {
                                var t;
                                (null == e || null === (t = e.value) || void 0 === t ? void 0 : t.opt_key) == (null == n ? void 0 : n.data) && localStorage.removeItem(null == e ? void 0 : e.name)
                            }),
                            t.optDev(n.data))
                        }),
                        c.on("agreeOptLogin", function(e) {
                            t.doLogin(e.data)
                        })
                    },
                    "render": function(e) {
                        var t = s.compile(o)({
                            "type": this.type,
                            "lists": this.opt_info,
                            "loginSource": this.loginSource || "",
                            "leftText": this.leftText || ""
                        });
                        this.panel.innerHTML = t,
                        this.logger.log("optlogin has render "),
                        this.doms = {
                            "headerImg": this.panel.querySelectorAll('[data-otpLogin="header-img"]'),
                            "close": this.panel.querySelectorAll('[data-otpLogin="close"]'),
                            "userErr": this.panel.querySelectorAll('[data-otpLogin="qy-quicklogin-err"]'),
                            "username": this.panel.querySelector('[data-otpLogin="username"]'),
                            "userNumber": this.panel.querySelector('[data-otpLogin="userNumber"]'),
                            "mask": document.querySelector('[data-login-sdk="mask"]')
                        }
                    },
                    "handleBtn": function() {
                        for (var e = (_this = this).doms.headerImg, t = this.doms.close, n = function n(e) {
                            e.stopPropagation && e.stopPropagation();
                            e = e.target.getAttribute("data-otpLogin-code");
                            u.click({
                                "rpage": "passsdkv2",
                                "block": this.rpage,
                                "rseat": "qlg_login"
                            }),
                            p.isAgree({
                                "type": "optLogin",
                                "code": e
                            }) && (_this.logger.log("opt login click headerImg code:".concat(e)),
                            _this.doLogin(e))
                        }, i = 0; i < e.length; i++)
                            d.on(e[i], "click", n);
                        for (var o, s = function s(e) {
                            e.stopPropagation && e.stopPropagation();
                            var n = e.target.getAttribute("data-otpLogin-code");
                            _this.opt_info.forEach(function(e) {
                                var t;
                                (null == e || null === (t = e.value) || void 0 === t ? void 0 : t.opt_key) == n && (t = _this.panel.querySelector('[data-otpLogin-code-close="'.concat(n, '"]')),
                                h.removeClass(t, "dn"))
                            })
                        }, i = 0; i < e.length; i++)
                            o = i,
                            d.on(e[o], "mouseover", s),
                            d.on(t[o], "mouseover", s);
                        for (var a, r = function r(e) {
                            e.stopPropagation && e.stopPropagation();
                            var t = e.target.getAttribute("data-otpLogin-code");
                            _this.opt_info.forEach(function(e) {
                                e.value.opt_key == t && (e = _this.panel.querySelector('[data-otpLogin-code-close="'.concat(t, '"]')),
                                h.addClass(e, "dn"))
                            })
                        }, i = 0; i < e.length; i++)
                            a = i,
                            d.on(e[a], "mouseout", r),
                            d.on(t[a], "mouseout", r);
                        for (var c = function c(e) {
                            e.stopPropagation && e.stopPropagation();
                            e = e.target.getAttribute("data-otpLogin-code");
                            u.click({
                                "rpage": "passsdkv2",
                                "block": this.rpage,
                                "rseat": "qlg_quit"
                            }),
                            _this.logger.log("opt login click close btn delete one userinfo code:".concat(e)),
                            p.isDel(e)
                        }, i = 0; i < t.length; i++)
                            d.on(t[i], "click", c)
                    },
                    "doLogin": function(e) {
                        var s = this
                          , a = {
                            "opt_key": e
                        };
                        try {
                            r.optLogin(a, function(e) {
                                var t, n, i, o = e.msg;
                                "A00000" == e.code && e.data ? (g.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "登录成功",
                                    "diy_method": "604"
                                }),
                                a.authcookie = null == e || null === (t = e.data) || void 0 === t ? void 0 : t.authcookie,
                                a.authcookie || this.logger.error("optlogin authcookie is hasn't value error:".concat(JSON.stringify(e))),
                                v.cookie.set("P00001", null == e || null === (n = e.data) || void 0 === n ? void 0 : n.authcookie, {
                                    "expires": 7776e6,
                                    "path": "/",
                                    "domain": l
                                }),
                                r.optLoginAuth(a, function(e) {
                                    var t;
                                    "A00000" == e.code && e.data ? ((t = null == e ? void 0 : e.data).rpage = "login_scs_qlgv2",
                                    t.methods = "optLogin",
                                    u.show({
                                        "rpage": "login_scs_qlgv2"
                                    }),
                                    c.fire({
                                        "type": "handleLoginSuc",
                                        "data": t
                                    })) : s.logger.error("optlogin login userinfo error:".concat(JSON.stringify(e)))
                                })) : "P00223" == e.code ? (g.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "开启滑动验证码",
                                    "diy_method": "6041"
                                }),
                                (i = a).ErrCb = function() {
                                    s.logger.error("optlogin login verifyCenter error"),
                                    window.MITO && window.MITO.log({
                                        "message": "账号密码登录：触发验证中心失败",
                                        "data": {
                                            "phone": a.phone
                                        }
                                    })
                                }
                                ,
                                s.logger.log("optlogin login start verifyCenter"),
                                s.verifyCenter.callSDK(e, i, function(e) {
                                    e ? (g.qosSend({
                                        "diy_ec": "",
                                        "diy_ls": "滑动验证码验证成功",
                                        "diy_method": "60411"
                                    }),
                                    s.doLogin(e)) : (g.qosSend({
                                        "diy_ec": "",
                                        "diy_ls": "滑动验证码验证失败",
                                        "diy_method": "60412"
                                    }),
                                    h.addClass(s.doms.slideCover, "dn"),
                                    h.addClass(s.doms.mask, "dn"))
                                })) : "P00159" === e.code || "P00908" == e.code ? (s.logger.log("optlogin login fail data.code=".concat(e.code, " (").concat("hrisk", ")")),
                                i = "P00159" === e.code ? "hrisk" : "lock",
                                g.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "高危账号/设备锁",
                                    "diy_method": "6043"
                                }),
                                c.fire({
                                    "type": "showQrCodeLogin",
                                    "data": {
                                        "type": i,
                                        "mobile": o
                                    }
                                })) : "P00119" == e.code && 0 <= o.indexOf("再错") || "P00125" == e.code || "P00141" == e.code ? f.showTip(s.toastPanel, {
                                    "tip": o,
                                    "btnTip": "确定"
                                }) : "P00950" == e.code || "P00951" == e.code ? (s.logger.log("optlogin login data.code=".concat(e.code, " init secondVerify page")),
                                g.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "二次验证",
                                    "diy_method": "6045"
                                }),
                                s.secondVerify.init({
                                    "prePanel": s.panel,
                                    "data": e
                                }),
                                h.removeClass(s.doms.mask, "dn"),
                                s.secondVerify.showPanel()) : (s.logger.warn("optlogin login failed Delete corresponding information:".concat(JSON.stringify(e))),
                                u.block({
                                    "rpage": "passsdkv2",
                                    "block": "psprt_fail"
                                }),
                                g.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "账号信息过期",
                                    "diy_method": "6044"
                                }),
                                null != a && a.opt_key && p.isDeadLine(null == a ? void 0 : a.opt_key),
                                s.opt_info.forEach(function(e) {
                                    var t;
                                    (null == e || null === (t = e.value) || void 0 === t ? void 0 : t.opt_key) == (null == a ? void 0 : a.opt_key) && (t = s.panel.querySelector('[data-otpLogin-code-Err="'.concat(null == a ? void 0 : a.opt_key, '"]')),
                                    h.removeClass(t, "dn"))
                                }),
                                m("KIWI-LOGIN-OPTLOGIN-FAIL-".concat(v.cookie.get("QC005_PCA") || v.cookie.get("QC005"))))
                            })
                        } catch (t) {
                            this.logger.error("optlogin login error :".concat(t)),
                            m("KIWI-LOGIN-OPTLOGIN-ERROR-".concat(v.cookie.get("QC005_PCA") || v.cookie.get("QC005")))
                        }
                    },
                    "optDev": function(e) {
                        c.fire({
                            "type": "optDev",
                            "data": {
                                "loginSource": this.loginSource,
                                "leftText": this.leftText
                            }
                        })
                    }
                }
            })
        }
        .call(n, y, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, y(0))
}
, function(e, t) {
    e.exports = '{{if type ===\'noOpt\'}} {{if loginSource==\'kanguo\'}} <h1 class="qy-login-header-title">登录后同步观看历史</h1> <div class="qy-login-subtitle">换端看剧无缝衔接 <div class="qy-login-subtitle-left-line"></div> <div class="qy-login-subtitle-right-line"></div> </div> {{else if loginSource==\'vip\'}} <h1 class="qy-login-header-title">登录后享VIP特惠</h1> <div class="qy-login-subtitle">最低四折起 <div class="qy-login-subtitle-left-line"></div> <div class="qy-login-subtitle-right-line"></div> </div> {{else if loginSource==\'yuyue\'}} <h1 class="qy-login-header-title">登录后解锁预约功能</h1> <div class="qy-login-subtitle">第一时间获取开播信息 <div class="qy-login-subtitle-left-line"></div> <div class="qy-login-subtitle-right-line"></div> </div> {{else}} <h1 class="qy-login-header-title">{{leftText.title?leftText.title:\'欢迎来到爱奇艺\'}}</h1> <div class="qy-login-subtitle"> {{if leftText.subTitle===\'\'}} {{else if leftText.subTitle===undefined }} 登录后解锁更多功能 {{else}} {{leftText.subTitle}} {{/if}} <div class="qy-login-subtitle-left-line"></div> <div class="qy-login-subtitle-right-line"></div> </div> {{/if}} {{else}} {{if loginSource==\'yuyue\'}} <h1 class="qy-haslogin-header-title">登录后可开启预约功能</h1> <div class="qy-haslogin-subtitle">点击头像立即登录 <div class="qy-login-subtitle-left-line"></div> <div class="qy-login-subtitle-right-line"></div> </div> {{else}} <h1 class="qy-haslogin-header-title"> {{if !leftText.optTitle}} 快速登录 {{else}} {{leftText.optTitle}} {{/if}} </h1> <div class="qy-haslogin-subtitle">{{leftText.optSubTitle?leftText.optSubTitle:\'点击头像立即登录\'}} <div class="qy-login-subtitle-left-line"></div> <div class="qy-login-subtitle-right-line"></div> </div> {{/if}} {{each lists as item}} <div class="qy-quicklogin {{if lists.length == 2}}qy-quicklogin-two{{/if}} {{if lists.length == 3}}qy-quicklogin-thrid{{/if}}"> <ul> <li> <div class="qy-login-head {{if lists.length == 2}}qy-login-head-two{{/if}} {{if lists.length == 3}}qy-login-head-thrid{{/if}}" data-otpLogin="head"> <img class="head-img" data-otpLogin="header-img" data-otpLogin-code="{{item.value.opt_key}}" src="{{item.value.icon}}" alt=""> <div class="qy-login-head-close dn" data-otpLogin="close" data-otpLogin-code-close="{{item.value.opt_key}}"> <span class="iconfont icon-close" data-otpLogin-code="{{item.value.opt_key}}"></span> </div> </div> </li> </ul>{{if item.value.viptype}} <div class="qy-login-username {{if lists.length == 2}}qy-quicklogin-username-two{{/if}} {{if lists.length == 3}}qy-quicklogin-username-thrid{{/if}}"> <div class="qy-login-username" data-otpLogin="username"> <span class="qy-login-username-text vip-text">{{item.value.nickname}}</span> <img class="vip-icon" src="http://pic1.iqiyipic.com/lequ/20221114/e949710b407c4db597ede57ee469e011.png" data-otpLogin="icon" alt=""> </div> <div class="qy-quicklogin-err {{if lists.length == 2}}qy-quicklogin-err-two{{/if}} {{if lists.length == 3}}qy-quicklogin-err-thrid{{/if}} dn" data-otpLogin="qy-quicklogin-err" data-otpLogin-code-Err="{{item.value.opt_key}}"> 用户信息失效</div> </div> <div class="qy-login-account vip-account-text">{{item.value.user_name}}</div> {{else}} <div class="qy-login-username {{if lists.length == 2}}qy-quicklogin-username-two{{/if}} {{if lists.length == 3}}qy-quicklogin-username-thrid{{/if}}"> <div class="qy-login-username" data-otpLogin="username"> <span class="qy-login-username-text">{{item.value.nickname}}</span> </div> <div class="qy-quicklogin-err {{if lists.length == 2}}qy-quicklogin-err-two{{/if}} {{if lists.length == 3}}qy-quicklogin-err-thrid{{/if}} dn" data-otpLogin="qy-quicklogin-err" data-otpLogin-code-Err="{{item.value.opt_key}}"> 用户信息失效</div> <div class="qy-login-account">{{item.value.user_name}}</div> </div> {{/if}} </div> {{/each}} {{/if}}'
}
, function(t, n, s) {
    (function(d) {
        var e = function(e, t, n) {
            var i = s(6)
              , a = (s(16),
            s(7))
              , o = s(5)
              , r = s(2)
              , c = s(1);
            n.exports = d.Class("optLoginService", {
                "construct": function() {
                    this.optInterface = new i({
                        "optLogin": {
                            "url": o.optLogin
                        }
                    }),
                    this.optDevInterface = new i({
                        "optDev": {
                            "url": o.optDev
                        }
                    }),
                    this.AuthInterface = new i({
                        "optLoginAuth": {
                            "url": o.optLoginAuth
                        }
                    })
                },
                "methods": {
                    "baseData": function(e, t) {
                        var n = r.getConfig();
                        return {
                            "agenttype": n.agenttype,
                            "qyid": d.cookie.get("QC005_PCA") || d.cookie.get("QC005") || "",
                            "ptid": n.ptid,
                            "opt_key": e.opt_key
                        }
                    },
                    "optLogin": function(e, t) {
                        e = this.baseData(e),
                        this.cmd5x(e, "optLogin", t)
                    },
                    "optLoginAuth": function(e, t) {
                        var n = this.baseData(e);
                        n.authcookie = e.authcookie,
                        this.cmd5xA(n, "optLoginAuth", t)
                    },
                    "cmd5x": function(t, n, i) {
                        var o = this
                          , s = r.getConfig();
                        a.getDFP(function(e) {
                            t.dfp = e,
                            t = o.sortKey(t),
                            c.isCors() && (t.qd_sc = d.md5(decodeURIComponent(c.jsonToQuery(t)) + s.secretKey)),
                            o.optInterface.send({
                                "ifname": n,
                                "param": t,
                                "needMd5": !0
                            }, function(e) {
                                i && i(e)
                            })
                        })
                    },
                    "cmd5xA": function(t, n, i) {
                        var o = this
                          , s = r.getConfig();
                        a.getDFP(function(e) {
                            t.dfp = e,
                            t = o.sortKey(t),
                            c.isCors() && (t.qd_sc = d.md5(decodeURIComponent(c.jsonToQuery(t)) + s.secretKey)),
                            o.AuthInterface.send({
                                "ifname": n,
                                "param": t,
                                "needMd5": !0
                            }, function(e) {
                                i && i(e)
                            })
                        })
                    },
                    "sortKey": function(e) {
                        for (var t = Object.keys(e).sort(), n = {}, i = 0; i < t.length; i++)
                            n[t[i]] = e[t[i]];
                        return n
                    },
                    "optDev": function(e, t) {
                        var n = r.getConfig()
                          , i = {
                            "agenttype": n.agenttype,
                            "qyid": n.deviceid || "",
                            "qd_sf": ""
                        }
                          , i = d.extend(i, {
                            "ptid": n.ptid,
                            "opt_key": e.opt_key
                        });
                        this.optInterface.send({
                            "ifname": "optDev",
                            "param": i
                        }, function(e) {
                            t && t(e)
                        })
                    }
                }
            })
        }
        .call(n, s, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, s(0))
}
, function(t, n, f) {
    (function(p) {
        var e = function(e, t, n) {
            var i = f(10)
              , o = f(71)
              , a = new (f(72))
              , s = f(1)
              , r = f(4)
              , c = f(11)
              , d = f(8)
              , l = f(3)
              , u = f(14)
              , h = f(9);
            n.exports = p.Class("scanLoginAction", {
                "extend": i,
                "construct": function(e) {
                    this.panel = null == e ? void 0 : e.panel,
                    this.types = null == e ? void 0 : e.types,
                    this.type = (null == e ? void 0 : e.type) || "login",
                    this.msg = (null == e ? void 0 : e.msg) || "",
                    this.prePanel = (null == e ? void 0 : e.prePanel) || "",
                    this.appTitle = (null == e ? void 0 : e.appTitle) || "爱奇艺手机APP",
                    this.business = null == e ? void 0 : e.business,
                    this._pullInterval = 2e3,
                    this.doms = {},
                    this.hidden = !0,
                    this.isSend = !1,
                    this.reGenClick = null,
                    this.backClick = null,
                    this.smsLogincli = null,
                    this.rpage = "login" == this.type ? "passsdkv2" : "lock" == this.type ? "device_lockedv2" : "device_newv2",
                    this.block = "login" == this.type ? "psprt_QRcode" : "",
                    this.device_auth_uid = null == e ? void 0 : e.device_auth_uid,
                    this.new_device_auth = null == e ? void 0 : e.new_device_auth,
                    this.logger = new h.LoginLogger("QiyiLoginLoader"),
                    this.online = null,
                    this.isOnline = null
                },
                "methods": {
                    "init": function() {
                        var e = this;
                        this.reGenClick && this.unBindEvent(),
                        this.render(),
                        "login" == this.type && c.block({
                            "rpage": this.rpage,
                            "block": this.block
                        }),
                        this.bindEvent(),
                        r.on("loginSuccessClearTime", function() {
                            e._pollTokenLoginTimer && clearTimeout(e._pollTokenLoginTimer)
                        })
                    },
                    "bindEvent": function() {
                        var n = this;
                        this.reGenClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            n.refreshQrcode()
                        }
                        ,
                        this.refreshQr = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            n.refreshQrcode()
                        }
                        ,
                        s.on(this.doms.reGenBtn, "click", this.reGenClick),
                        s.on(this.doms.refreshQr, "click", this.refreshQr);
                        var i = function i(e) {
                            var t = document.querySelector('[data-login-sdk="mask"]');
                            l.addClass(t, "dn"),
                            e.stopPropagation && e.stopPropagation(),
                            n.hidePanel(),
                            r.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 3
                                }
                            })
                        }
                          , t = function t(e) {
                            e.stopPropagation && e.stopPropagation(),
                            n.hidePanel(),
                            r.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 1
                                }
                            })
                        };
                        s.on(this.doms.smsLogin, "click", i),
                        s.on(this.doms.baseLogin, "click", t),
                        "normal" != this.type && (this.backClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            n.hidePanel(),
                            n.prePanel ? n.show(n.prePanel) : (e = document.querySelector('[data-login-sdk="mask"]'),
                            l.addClass(e, "dn"),
                            r.fire({
                                "type": "backShow",
                                "data": {
                                    "resetShowPanel": !0
                                }
                            }))
                        }
                        ,
                        s.on(this.doms.back, "click", this.backClick),
                        this.closeClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            n.hidePanel(),
                            l.addClass(n.doms.mask, "dn")
                        }
                        ,
                        s.on(this.doms.close, "click", this.closeClick))
                    },
                    "unBindEvent": function() {
                        s.un(this.doms.reGenBtn, "click", this.reGenClick),
                        s.un(this.doms.reGenBtn, "click", this.refreshQr),
                        this.reGenClick = null,
                        this.refreshQr = null,
                        this.doms.back && (s.un(this.doms.back, "click", this.backClick),
                        this.backClick = null,
                        s.un(this.doms.smsLogin, "click", this.smsLogincli),
                        s.un(this.doms.close, "click", this.closeClick),
                        this.smsLogincli = null,
                        this.closeClick = null)
                    },
                    "render": function() {
                        var e = this.renderHtml(o, {
                            "noBaseLogin": this.types ? this.types.indexOf(1) < 0 : "",
                            "noSmsLogin": this.types ? this.types.indexOf(3) < 0 : "",
                            "type": this.type || "login",
                            "msg": this.msg || "",
                            "appTitle": this.appTitle || ""
                        });
                        this.panel.innerHTML = e,
                        this.logger.log("scanlogin has render "),
                        this.doms = {
                            "mask": document.querySelector('[data-login-sdk="mask"]'),
                            "code": this.panel.querySelector('[data-scanLogin="code"]'),
                            "codeFailPanel": this.panel.querySelector('[data-scanLogin="codeFailPanel"]'),
                            "codeWaitPanel": this.panel.querySelector('[data-scanLogin="codeWaitPanel"]'),
                            "noInternet": this.panel.querySelector('[data-scanLogin="noInternet"]'),
                            "codeSuc": this.panel.querySelector('[data-scanLogin="codeSucPanel"]'),
                            "refreshQr": this.panel.querySelector('[data-scanLogin="refreshQr"]'),
                            "codeImg": this.panel.querySelector('[data-scanLogin="codeImg"]'),
                            "reGenBtn": this.panel.querySelector('[data-scanLogin="reGen"]'),
                            "back": this.panel.querySelector('[data-scanLogin="back"]'),
                            "close": this.panel.querySelector('[data-scanLogin="close"]'),
                            "smsLogin": this.panel.querySelector('[data-scanLogin="smsLogin"]'),
                            "baseLogin": this.panel.querySelector('[data-scanLogin="baseLogin"]')
                        },
                        this.scsSend = !1
                    },
                    "showPanel": function(e) {
                        type = e.type || "normal",
                        e.type !== this.type && (this.type = e.type,
                        this.rpage = "normal" == this.type ? "passsdk" : "lock" == this.type ? "device_locked" : "device_new",
                        this.block = "normal" == this.type ? "psprt_QRcode" : "",
                        this.msg = e.msg,
                        this.init()),
                        this.hidden = !1,
                        this.show(this.panel),
                        this.refreshQrcode()
                    },
                    "hidePanel": function() {
                        this.hidden = !0,
                        clearTimeout(this._pollTokenLoginTimer),
                        clearTimeout(this._arcodeOnerrorTimer),
                        clearInterval(this.online),
                        this.hide(this.panel)
                    },
                    "refreshQrcode": function() {
                        var e = this;
                        clearInterval(this.online),
                        this.online = setInterval(function() {
                            window.navigator.onLine ? l.hasClass(n.doms.noInternet, "dn") || e.refreshQrcode() : (clearTimeout(e._pollTokenLoginTimer),
                            e.hide(e.doms.codeSuc),
                            l.removeClass(e.doms.noInternet, "dn")),
                            e.isOnline = window.navigator.onLine
                        }, 6e3);
                        var n = this
                          , i = n.doms.codeImg;
                        n.hiden || (l.addClass(n.doms.codeImg, "vb"),
                        l.hasClass(n.doms.noInternet, "dn") || l.addClass(n.doms.noInternet, "dn"),
                        l.hasClass(n.doms.codeSuc, "dn") || l.addClass(n.doms.codeSuc, "dn"),
                        l.removeClass(n.doms.codeWaitPanel, "dn"),
                        a.genLoginToken({
                            "device_auth_uid": n.device_auth_uid,
                            "new_device_auth": n.new_device_auth
                        }, function(e) {
                            var t;
                            "A00000" === e.code ? (d.qosSend({
                                "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                "diy_ls": "二维码获取成功",
                                "diy_method": "6021"
                            }),
                            n._loginToken = e.data.token,
                            n._loginTokenExpire = e.data.expire,
                            t = a.getQrCode(e.data.url) + "&_=" + Math.random(),
                            n._arcodeOnerrorTimer = null,
                            i.onload = function() {
                                n.logger.log("scanlogin login qrcode onload "),
                                l.addClass(n.doms.codeWaitPanel, "dn"),
                                l.removeClass(n.doms.codeImg, "vb"),
                                i.onload = i.onerror = function() {}
                                ,
                                clearTimeout(n._arcodeOnerrorTimer),
                                n.qrcodeImgSrcChanged()
                            }
                            ,
                            i.onerror = function() {
                                n.logger.log("scanlogin login qrcode onerror "),
                                i.onload = i.onerror = function() {}
                                ,
                                clearTimeout(n._arcodeOnerrorTimer),
                                l.addClass(n.doms.codeWaitPanel, "dn"),
                                l.removeClass(n.doms.noInternet, "dn"),
                                n.hide(n.doms.codeSuc),
                                "pca" == n.business && u.callPca()
                            }
                            ,
                            n._arcodeOnerrorTimer = setTimeout(function() {
                                d.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "二维码获取失败",
                                    "diy_method": "6021"
                                }),
                                i.onerror()
                            }, 1e4),
                            t && (i.src = t)) : (l.addClass(n.doms.codeWaitPanel, "dn"),
                            l.removeClass(n.doms.noInternet, "dn"),
                            n.hide(n.doms.codeSuc),
                            window.MITO && window.MITO.log({
                                "message": "扫码登录：刷新二维码接口gen_login_token.action失败",
                                "data": e
                            }))
                        }))
                    },
                    "qrcodeImgSrcChanged": function() {
                        var n = this
                          , i = 300;
                        n.hide(n.doms.noInternet),
                        n.hide(n.doms.codeSuc),
                        l.removeClass(n.doms.code, "dn");
                        var o = !1;
                        n._pollTokenLoginTimer = setTimeout(function s() {
                            a.checkTokenLogin(n._loginToken, function(e) {
                                var t;
                                "A00000" === e.code ? (t = {},
                                (t = e.data && e.data.userinfo ? e.data.userinfo : t).rpage = "login_scs_QRv2",
                                t.methods = "scanLogin",
                                d.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "登录成功",
                                    "diy_method": "602"
                                }),
                                r.fire({
                                    "type": "handleLoginSuc",
                                    "rpage": "login_scs_QRv2",
                                    "data": t
                                })) : window.navigator.onLine ? (clearTimeout(n._pollTokenLoginTimer),
                                o || n.hidden || (0 < i ? (n._pollTokenLoginTimer = setTimeout(s, 1e3),
                                0 == --i ? n.refreshQrcode() : "P01006" === e.code ? (n.hide(n.doms.code),
                                clearInterval(n.online),
                                l.removeClass(n.doms.codeSuc, "dn"),
                                n.scsSend || (c.block({
                                    "rpage": n.rpage,
                                    "block": "QRscan_scs"
                                }),
                                d.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "已扫描,等待授权",
                                    "diy_method": "6022"
                                }),
                                n.scsSend = !0)) : "P01007" === e.code && (d.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "已扫描,取消授权",
                                    "diy_method": "6023"
                                }),
                                clearTimeout(n._pollTokenLoginTimer),
                                n.hide(n.doms.codeSuc),
                                l.removeClass(n.doms.code, "dn"),
                                n.refreshQrcode(),
                                n.scsSend = !1)) : (d.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "二维码失效/未登录",
                                    "diy_method": "6025"
                                }),
                                n.refreshQrcode()))) : (clearTimeout(n._pollTokenLoginTimer),
                                n.hide(n.doms.codeSuc),
                                l.removeClass(n.doms.noInternet, "dn"))
                            })
                        }, n._pullInterval),
                        clearTimeout(n._loginTokenExpireTimer),
                        n._loginTokenExpireTimer = null,
                        n._loginTokenExpireTimer = setTimeout(function() {
                            o = !0,
                            clearTimeout(n._pollTokenLoginTimer),
                            n._pollTokenLoginTimer = null,
                            clearTimeout(n._loginTokenExpireTimer),
                            n._loginTokenExpireTimer = null,
                            n.hidden || n.refreshQrcode()
                        }, 1e3 * n._loginTokenExpire)
                    },
                    "destroy": function() {
                        clearTimeout(this._pollTokenLoginTimer)
                    }
                }
            })
        }
        .call(n, f, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, f(0))
}
, function(e, t) {
    e.exports = '{{if type == \'login\'}} <div class="qy-login-methods {{if noBaseLogin == true}}single-tab{{/if}}"> <div class="selected qy-methods-item">扫码登录<span class="tab-line"></span></div> <div data-scanLogin="smsLogin" class="qy-methods-item {{if noSmsLogin == true}}dn{{/if}}">短信登录</div> <div data-scanLogin="baseLogin" class="qy-methods-item {{if noBaseLogin == true}}dn{{/if}}">密码登录</div> </div> <div class="qy-login-qrcode"> <div class="qrcode-pic"> <img data-scanLogin="codeImg" class="vb">  <div class="qrcode-cover dn" data-scanLogin="codeFailPanel"> <div class="qrcode-cover-middle"> <div class="cover-desc">二维码已失效</div> </div> </div> <div class="qrcode-cover dn" data-scanLogin="noInternet"> <div class="qrcode-cover-middle"> <div class="cover-desc">网络连接失败</div> <div class="cover-desc">请检查网络设置</div> <div class="cover-refresh" data-scanLogin="reGen">刷新重试</div> </div> </div> <div class="qrcode-waiting dn" data-scanLogin="codeWaitPanel"> <div class="qrcode-cover-waiting"> <svg xmlns="http://www.w3.org/2000/svg" class="qrcode-waiting" viewBox="0 0 1024 1024"> <path d="M82.692 724.346c-18.465 0-36.93-9.233-41.546-27.697-73.86-189.265-32.313-401.611 110.79-544.714C295.037 8.833 507.383-32.713 696.648 36.53c23.08 9.232 36.93 36.93 27.697 60.01s-36.93 36.93-60.011 27.698C512 64.228 336.584 101.157 221.179 216.562S68.844 507.384 128.854 659.72c9.233 23.08-4.616 50.778-27.697 60.01-9.232 4.617-13.849 4.617-18.465 4.617zM512 1019.783c-64.627 0-124.638-13.848-189.265-36.93-23.08-9.232-36.93-36.929-27.697-60.01 9.232-23.081 36.93-36.93 60.01-27.697 152.336 60.01 327.752 23.08 447.773-92.325C922.843 682.8 955.156 507.384 895.146 350.433c-9.233-23.082 0-50.779 27.697-60.011 23.081-9.233 50.778 0 60.01 27.697 78.476 189.265 32.314 406.227-110.788 549.33C775.125 969.004 645.87 1019.782 512 1019.782z"/> </svg> <div class="qrcode-waiting-text">获取二维码中</div> </div> </div> </div> <div class="qrcode-cover dn" data-scanLogin="codeSucPanel"> <div class="qrcode-cover-middle"> <i class="iconfont icon-success"></i> <div class="cover-success-desc">扫码成功</div> <div class="cover-success-desc">请在手机上授权登录</div> <div class="cover-success-desc theme-color cover-success-refresh" data-scanLogin="refreshQr">重新扫描二维码</div> </div> </div> </div>  <div class="qy-login-title"> <div class="title-content"> <div class="major-desc"> <p>打开<span class="theme-color">爱奇艺手机APP</span>扫码登录</p> </div> </div> </div> {{/if}} {{if type != \'login\'}} <div class="qy-checking-container"> <div class="qy-checking-title"> {{if type == \'deviceVerify\'}} <span class="back-link"> <i class="iconfont icon-back" data-scanLogin="back"></i> </span> {{/if}} <span class="close-link"> <i class="iconfont icon-close" data-scanLogin="close"></i> </span> </div> <div class="qy-login-form qy-login-secverify-qrcode"> <div class="login-form-inner"> <div class="login-form"> <div class="qy-safe-title"> {{if type == \'deviceVerify\'}} <div class="title-content align-left"> <div class="major-desc"> <p>主设备扫码验证</p> </div> <div class="minor-desc minor-desc-common"> <div class="minor-desc-item">使用主设备打开爱奇艺，</div> <div class="minor-desc-item">点击页面右上角“+”，点击“扫一扫”，</div> <div class="minor-desc-item">扫描下方二维码，授权登录</div> </div> </div> {{else if type == \'lock\'}} <div class="title-content align-left"> <div class="major-desc"> <p>已开启设备锁</p> </div> <div class="minor-desc minor-desc-common"> <div class="minor-desc-item"> <p>{{msg}}</p> </div> </div> {{else if type == \'hrisk\'}} <div class="title-content align-left"> <div class="major-desc"> <p>当前登录存在风险</p> </div> <div class="minor-desc minor-desc-common"> <div class="minor-desc-item">为了账号安全</div> <div class="minor-desc-item">请打开<span class="theme-color">爱奇艺手机APP</span>扫码登录</div> </div> {{/if}} </div> <div class="qy-login-qrcode" data-scanLogin="code"> <div class="qrcode-pic"> <img data-scanLogin="codeImg"> </div> <div class="qrcode-cover dn" data-scanLogin="codeFailPanel"> <div class="qrcode-cover-middle"> <div class="cover-desc">二维码已失效</div> <div class="cover-refresh" data-scanLogin="reGen"><i class="iconfont icon-refresh"></i>点击刷新</div> </div> </div> </div> <div class="qy-login-saoma-success dn" data-scanLogin="codeSucPanel"> <div class="saoma-con"> <i class="iconfont icon-success"></i> <div class="saoma-title">扫码成功</div> <div class="saoma-tips">请在手机上确认 [ 授权登录 ]</div> </div> </div> </div> </div> </div> {{if type != \'login\'}} <div class="qy-login-problem"> <div class="problem-ask"> {{if type == \'lock\'}} <span class="ask-desc">主设备手机不在身边</span> {{else if type == \'hrisk\'}} <span class="ask-desc">或<span class="theme-color" data-scanLogin="smsLogin">前往短信登录</span></span> {{else}} <span class="ask-desc">没有安装爱奇艺APP</span> {{/if}} <i class="ask-icon-pro"> <img class="ask-icon" src="http://pic0.iqiyipic.com/lequ/20221212/bea9408bc5284c4ca969beec2ea80d13.png" alt=""> <span class="pop-arr"></span> <div class="problem-pop">建议安装爱奇艺APP，扫码登录更安全，有效防止盗号。不想安装？可以使用<a href="javascript:;" class="theme-color" data-scanLogin="smsLogin">短信登录</a> </div> </i> </div> </div> {{/if}} </div> {{/if}}</div></div>'
}
, function(t, n, c) {
    (function(r) {
        var e = function(e, t, n) {
            var i = c(6)
              , o = c(5)
              , s = c(2)
              , a = c(7);
            n.exports = r.Class("scanLoginService", {
                "construct": function() {
                    this._remoteInterface = new i({
                        "genLoginTokenIf": {
                            "url": o.genLoginToken,
                            "async": !1
                        },
                        "checkTokenLoginIf": {
                            "url": o.isTokenLogin
                        }
                    })
                },
                "methods": {
                    "genLoginToken": function(e, t) {
                        var n = s.getConfig();
                        this._remoteInterface.send({
                            "ifname": "genLoginTokenIf",
                            "param": {
                                "agenttype": n.agenttype,
                                "app_version": n.appVersion || "",
                                "device_id": n.deviceid || r.cookie.get("QC005_PCA") || "",
                                "device_name": "网页端",
                                "fromSDK": n.fromSDK,
                                "ptid": n.ptid,
                                "sdk_version": n.sdk_version,
                                "surl": 1,
                                "device_auth_uid": e ? e.device_auth_uid : "",
                                "new_device_auth": e ? e.new_device_auth : ""
                            }
                        }, function(e) {
                            t && t(e)
                        })
                    },
                    "checkTokenLogin": function(t, n) {
                        var i = s.getConfig()
                          , o = this;
                        a.getDFP(function(e) {
                            o._remoteInterface.send({
                                "ifname": "checkTokenLoginIf",
                                "param": {
                                    "agenttype": i.agenttype,
                                    "app_version": i.appVersion || "",
                                    "device_id": i.deviceid || r.cookie.get("QC005_PCA") || "",
                                    "fromSDK": i.fromSDK,
                                    "ptid": i.ptid,
                                    "sdk_version": i.sdk_version,
                                    "token": t,
                                    "dfp": e
                                }
                            }, function(e) {
                                n && n(e)
                            })
                        })
                    },
                    "getQrCode": function(e) {
                        for (var t = encodeURIComponent(e), n = [{
                            "key": "!",
                            "value": "%21"
                        }], i = 0, o = n.length; i < o; i++)
                            var s = new RegExp(n[i]["key"],"g")
                              , t = t.replace(s, n[i]["value"]);
                        var a = "35f4223bb8f6c8638dc91d94e9b16f5" + t
                          , e = r.md5(a)
                          , a = [];
                        return a.push("data=" + t),
                        a.push("property=0"),
                        a.push("salt=" + e),
                        a.push("width=162"),
                        "//qrcode.iqiyipic.com/login/?" + a.join("&")
                    }
                }
            })
        }
        .call(n, c, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, c(0))
}
, function(t, n, k) {
    (function(_) {
        var e;
        function w(e) {
            return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        (e = function(e, t, n) {
            var i = k(10)
              , o = k(2)
              , s = k(5)
              , a = k(1)
              , r = k(74)
              , c = k(4)
              , d = k(11)
              , l = k(8)
              , u = k(19)
              , h = k(14)
              , p = new (k(75))
              , f = k(76)
              , g = k(13)
              , m = k(9);
            window.lib = window.lib || {},
            window.lib.__callbacks__ = window.lib.__callbacks__ || {};
            var v = {
                "weixin": {
                    "w": 500,
                    "h": 470,
                    "type": 29,
                    "rseat": "wx"
                },
                "qq": {
                    "w": 600,
                    "h": 400,
                    "type": 4,
                    "rseat": "qq"
                },
                "weibo": {
                    "w": 600,
                    "h": 400,
                    "type": 2,
                    "rseat": "wb"
                },
                "zhifubao": {
                    "w": 650,
                    "h": 620,
                    "type": 5,
                    "rseat": "zfb"
                },
                "baidu": {
                    "w": 600,
                    "h": 400,
                    "type": 1,
                    "rseat": "bd"
                },
                "mi": {
                    "w": 900,
                    "h": 685,
                    "type": 30,
                    "rseat": "xm"
                }
            }
              , y = {
                "1": {
                    "type": "weixin"
                },
                "2": {
                    "type": "qq"
                },
                "3": {
                    "type": "weibo"
                },
                "4": {
                    "type": "zhifubao"
                },
                "5": {
                    "type": "baidu"
                },
                "6": {
                    "type": "mi"
                }
            }
              , b = null;
            n.exports = _.Class("thridPartyLoginAction", {
                "extend": i,
                "construct": function(e) {
                    this.panel = e.panel,
                    this.types = e.types || "1,2,3,4,5,6",
                    this.toastPanel = e.toastPanel,
                    this.verifyCenter = e.verifyCenter,
                    this.secondVerify = e.secondVerify,
                    this.business = e.business,
                    this.thirdLoginCB = e.thirdLoginCB,
                    this.rpage = "passsdkv2",
                    this.logger = new m.LoginLogger("QiyiLoginLoader")
                },
                "methods": {
                    "init": function() {
                        var t = this;
                        this.render(),
                        this.bindEvent(),
                        this.cbData = "",
                        c.on("thridLogin", function(e) {
                            "pca" == t.business ? t.callPCA(e.data) : t.thirdLoginCB ? t.specialCallPage(e.data) : t.callThirdLogin(e.data)
                        }),
                        c.on("xiaomiLogin", function() {
                            "pca" == t.business ? t.callPCA("mi") : t.thirdLoginCB ? t.specialCallPage("mi") : t.callThirdLogin("mi")
                        })
                    },
                    "bindEvent": function() {
                        var t = this;
                        window.lib.__callbacks__["_oAuthSuccess"] = function(e) {
                            t.handleAuthSuc(e)
                        }
                        ,
                        b = function b(e) {
                            e = e.data;
                            e && "__loginSdkAuthSuccess" === e.type && t.handleAuthSuc(e.data)
                        }
                        ,
                        window.addEventListener && window.addEventListener("message", b);
                        var e = this.panel.querySelectorAll("[data-thirdparty]");
                        console.log("allBtn", e[5]);
                        for (var n = function n(e) {
                            e.stopPropagation && e.stopPropagation();
                            e = (e = e || window.event).target || e.srcElement,
                            e = e && e.getAttribute("data-thirdparty");
                            "mi" === e ? c.fire({
                                "type": "showToastMi"
                            }) : u.isAgree({
                                "type": "thrid",
                                "event": e
                            }) && ("pca" == t.business ? t.callPCA(e) : t.thirdLoginCB ? t.specialCallPage(e) : t.callThirdLogin(e),
                            c.fire({
                                "type": "setUpdateInfo",
                                "data": {
                                    "updateInfo": !1
                                }
                            }))
                        }, i = 0; i < e.length; i++)
                            a.on(e[i], "click", n)
                    },
                    "render": function() {
                        var t = [];
                        this.types.split(",").forEach(function(e) {
                            "6" !== e && t.push(y[e])
                        });
                        var e = this.renderHtml(f, {
                            "lists": t
                        });
                        this.panel.innerHTML = e
                    },
                    "callPCA": function(e) {
                        var e = v[e]
                          , t = this.getThirdLoginUrl(e.type);
                        try {
                            var n = '{"call_type":"request", "cmd":"third_login", "cmd_context":"", "cmd_data":' + JSON.stringify({
                                "thirdurl": t
                            }) + "}";
                            window.external.js_app_service(n)
                        } catch (i) {}
                    },
                    "specialCallPage": function(e) {
                        var t = v[e]
                          , n = this.getThirdLoginUrl(t.type)
                          , i = this.getWinConfig(e);
                        try {
                            window[this.thirdLoginCB]({
                                "type": "open",
                                "data": {
                                    "url": n,
                                    "config": i
                                }
                            })
                        } catch (o) {}
                    },
                    "getWinConfig": function(e) {
                        e = v[e];
                        return e.l = window.screenX + (window.screen.width - e.w) / 2,
                        e.t = window.screenY + (window.screen.height - e.h) / 2,
                        "height=" + e.h + ",width=" + e.w + ",top=" + e.t + ",left=" + e.l + ",toolbar=no,menubar=no,scrollbars=no, resizable=yes,location=yes, status=no"
                    },
                    "callThirdLogin": function(e, t) {
                        var n = v[e];
                        t && (this.prePanel = t),
                        "pca" == this.business ? this.callPCA(e) : (t = this.getWinConfig(e),
                        e = this.getThirdLoginUrl(n.type),
                        this.snsWindow = r.href("__window", {
                            "url": e,
                            "config": t
                        })),
                        d.click({
                            "rpage": "passsdkv2",
                            "block": this.block,
                            "rseat": this.block + "_" + n.rseat
                        }),
                        this.selectType = n.rseat
                    },
                    "getThirdLoginUrl": function(e) {
                        var t = o.getConfig()
                          , n = "https://www.iqiyi.com/thirdlogin/close.html";
                        "pca" == this.business ? (n = window.location.origin + "/thirdlogin/close.html",
                        n += "?business=pca") : this.thirdLoginCB && (n += "?thirdLoginCB=" + this.thirdLoginCB);
                        t = {
                            "type": e,
                            "isiframe": 1,
                            "_pos": 1,
                            "agenttype": t.agenttype,
                            "device_id": t.deviceid || _.cookie.get("QC005_PCA") || "",
                            "verifyPhone": 1,
                            "ptid": t.ptid,
                            "fromSDK": t.fromSDK || 1,
                            "is_reg_confirm": 1,
                            "sdk_version": "1.0.0",
                            "exception_url": n,
                            "success_url": n
                        },
                        n = s.thirdLogin;
                        return n += "?" + a.jsonToQuery(t)
                    },
                    "handleAuthSuc": function(e) {
                        e = e || {};
                        var t = ""
                          , n = "";
                        this.snsWindow && this.snsWindow.close(),
                        n = "object" == w(e) ? (t = a.getQueryValue(e.url, "msg") || e.msg,
                        a.getQueryValue(e.url, "code") || e.code) : (t = a.getQueryValue(e, "msg") || "",
                        a.getQueryValue(e, "code") || "");
                        var i = _.cookie.get("P00038") || t
                          , i = decodeURIComponent(i)
                          , t = _.cookie.get("P00037") || n
                          , n = _.cookie.get("P00036") || e.data
                          , e = _.cookie.get("P00001") && _.cookie.get("P00002") && _.cookie.get("P00003");
                        if (this.cbData = n,
                        "A00000" == t || e)
                            l.qosSend({
                                "diy_ec": t || "",
                                "diy_ls": "登录成功+".concat(this.selectType),
                                "diy_method": "606"
                            }),
                            c.fire({
                                "type": "handleLoginSuc",
                                "data": {
                                    "rpage": "login_scs_3_" + this.selectType,
                                    "methods": "".concat(this.selectType, "Login")
                                }
                            });
                        else if ("P00807" == t) {
                            l.qosSend({
                                "diy_ec": t || "",
                                "diy_ls": "绑定手机+".concat(this.selectType),
                                "diy_method": "6062"
                            });
                            var o = "";
                            if (this.cbData)
                                try {
                                    o = JSON.parse(decodeURIComponent(this.cbData)).token
                                } catch (s) {}
                            o = decodeURIComponent(o),
                            c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 5,
                                    "token": o,
                                    "rpage": "login_scs_3_" + this.selectType
                                }
                            }),
                            this.prePanel && this.hide(this.prePanel)
                        } else
                            "P01118" == t ? (this.regConfirm(),
                            this.prePanel && this.hide(this.prePanel)) : "P00908" == t ? (l.qosSend({
                                "diy_ec": t || "",
                                "diy_ls": "设备锁",
                                "diy_method": "6066"
                            }),
                            c.fire({
                                "type": "showQrCodeLogin",
                                "data": {
                                    "type": "lock",
                                    "mobile": i
                                }
                            }),
                            this.prePanel && this.hide(this.prePanel)) : "P00950" == n.code || "P00951" == n.code ? (l.qosSend({
                                "diy_ec": t || "",
                                "diy_ls": " 二次验证",
                                "diy_method": "6065"
                            }),
                            this.secondVerify.init({
                                "prePanel": this.panel,
                                "data": n
                            }),
                            dom.addClass(this.panel, "dn"),
                            this.secondVerify.showPanel()) : (l.qosSend({
                                "diy_ec": null != n && n.code ? null == n ? void 0 : n.code : "",
                                "diy_ls": "登录失败+".concat(this.selectType),
                                "diy_method": "606"
                            }),
                            this.showErr(i),
                            this.logger.warn("thrid login fail info data:".concat(n)),
                            g("KIWI-LOGIN-THRIDLOGIN-FAIL-".concat(_.cookie.get("QC005_PCA") || _.cookie.get("QC005"))),
                            window.MITO && window.MITO.log({
                                "message": "handleAuthSuc三方登录回调失败",
                                "data": {
                                    "code": t,
                                    "msg": i,
                                    "data": n
                                }
                            }))
                    },
                    "regConfirm": function(e) {
                        var i = this
                          , t = ""
                          , n = _.cookie.get("P00036") || i.cbData;
                        if (n) {
                            n = decodeURIComponent(n);
                            try {
                                t = JSON.parse(n).token
                            } catch (s) {}
                        }
                        var o = {
                            "token": e,
                            "regToken": t
                        };
                        p.regConfirm(o, function(e) {
                            var t;
                            "A00000" == e.code ? c.fire({
                                "type": "handleLoginSuc",
                                "data": {
                                    "rpage": "login_scs_3_" + i.selectType,
                                    "isNewUser": !0
                                }
                            }) : "P00223" == e.code ? ((t = o).ErrCb = function() {
                                i.showErr("请稍后重试"),
                                window.MITO && window.MITO.log({
                                    "message": "三方注册确认接口触发验证中心失败",
                                    "data": o
                                })
                            }
                            ,
                            i.verifyCenter.callSDK(e, t, function(e) {
                                var t = document.querySelector('[data-login-sdk="slideCover"]')
                                  , n = document.querySelector('[data-login-sdk="mask"]');
                                e ? i.regConfirm(e) : (dom.addClass(t, "dn"),
                                dom.addClass(n, "dn"),
                                i.showErr("请稍后重试"))
                            })) : "P00807" == e.code ? (c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 5,
                                    "rpage": "login_scs_3_" + i.selectType
                                }
                            }),
                            c.fire({
                                "type": "setUpdateInfo",
                                "data": {
                                    "updateInfo": !0
                                }
                            })) : (i.showErr(e.msg || "请稍后重试"),
                            window.MITO && window.MITO.log({
                                "message": "regConfirm三方注册确认接口失败",
                                "data": e
                            }))
                        })
                    },
                    "showErr": function(e, t) {
                        h.showTip(this.toastPanel, {
                            "tip": e,
                            "btnTip": t || "使用其他账号登录"
                        })
                    },
                    "destroy": function() {
                        window.addEventListener && b && (window.removeEventListener("message", b),
                        b = null)
                    },
                    "sendBlock": function(e, t) {
                        this.block = 1 == e ? "acc_3" : 2 == e ? "QR_3" : "sms_3",
                        d.block({
                            "rpage": this.rpage,
                            "block": this.block
                        }),
                        this.parentPanel = t
                    }
                }
            })
        }
        .call(n, k, n, t)) === undefined || (t.exports = e)
    }
    ).call(this, k(0))
}
, function(e, t, n) {
    t = function(e, t, n) {
        var i = {
            "href": function(e, t) {
                var n = "string" == typeof t ? t : t.url;
                if ("__blank" == e)
                    window.open(n, "_blank");
                else {
                    if ("__window" == e) {
                        t = t.config || "",
                        t = window.open(n, "newwindow", t);
                        return t || alert("请允许弹窗验证窗体。"),
                        t
                    }
                    "__self" == e ? window.location.href = n : n === window.parent.location.href ? window.parent.location.reload() : window.parent.location.href = n
                }
            }
        };
        n.exports = i
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(t, n, d) {
    (function(c) {
        var e = function(e, t, n) {
            var i = d(6)
              , s = d(1)
              , a = d(7)
              , o = d(5)
              , r = d(2);
            n.exports = c.Class("thridPartyLoginService", {
                "construct": function() {
                    this._remoteInterface = new i({
                        "regConfirm": {
                            "url": o.userRegConfirm
                        }
                    })
                },
                "methods": {
                    "regConfirm": function(e, t) {
                        var n = this
                          , i = r.getConfig()
                          , o = {
                            "agenttype": i.agenttype,
                            "app_version": i.appVersion || "",
                            "device_id": i.deviceid || c.cookie.get("QC005_PCA") || c.cookie.get("QC005") || "",
                            "dfp": "",
                            "fromSDK": i.fromSDK,
                            "ptid": i.ptid,
                            "reg_confirm_token": e.regToken,
                            "sdk_version": i.sdk_version,
                            "serviceId": 2,
                            "token": e.token || ""
                        };
                        a.getDFP(function(e) {
                            o.dfp = e,
                            s.isCors() && (o.qd_sc = c.md5(decodeURIComponent(s.jsonToQuery(o)) + i.secretKey)),
                            n._remoteInterface.send({
                                "ifname": "regConfirm",
                                "param": o,
                                "needMd5": !0
                            }, function(e) {
                                t && t(e)
                            })
                        })
                    }
                }
            })
        }
        .call(n, d, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, d(0))
}
, function(e, t) {
    e.exports = '<div class="sns-title">其他方式登录 <div class="sns-title-line-left"></div> <div class="sns-title-line-right"></div> </div> <div class="sns-list"> {{each lists as item}} <a href="javascript:;" class="icon-login icon-login__{{item.type}}" data-thirdparty="{{item.type}}"></a> {{/each}} </div>'
}
, function(t, n, C) {
    (function(k) {
        var e = function(e, t, n) {
            var i = C(10)
              , o = C(28)
              , s = C(78)
              , r = new (C(79))
              , a = C(1)
              , c = C(4)
              , d = C(3)
              , l = C(30)
              , u = C(11)
              , h = C(8)
              , p = C(18)
              , f = C(19)
              , g = C(80)
              , m = C(83)
              , v = "smsLoginRegAcodeChange"
              , y = "resetSmsLoginRegBtnStatus"
              , b = C(13)
              , _ = C(9)
              , w = C(2);
            n.exports = k.Class("qw", {
                "extend": i,
                "construct": function(e) {
                    this.panel = e.panel,
                    this.types = e.types || "",
                    this.verifyCenter = null == e ? void 0 : e.verifyCenter,
                    this.secondVerify = null == e ? void 0 : e.secondVerify,
                    this.upSmsCodePanel = null == e ? void 0 : e.upSmsCodePanel,
                    this.verifyPhonePanel = null == e ? void 0 : e.verifyPhonePanel,
                    this.doms = {},
                    this.nameKit = null,
                    this.areaIns = null,
                    this.sendTimer = null,
                    this.isNewUser = !1,
                    this.type = (null == e ? void 0 : e.type) || "login",
                    this.hideBack = (null == e ? void 0 : e.hideBack) || !1,
                    this.bindToken = (null == e ? void 0 : e.token) || "",
                    this.rpage = "login" == this.type ? "passsdkv2" : "reg" == this.type ? "signupv2" : "authentication_1v2",
                    this.block = "login" == this.type ? "psprt_sms" : "reg" == this.type ? "signup_clickv2" : "authentication_1v2",
                    this.loginSucRpage = e.loginSucRpage,
                    this.logger = new _.LoginLogger("QiyiLoginLoader"),
                    this.phoneNum = null == e ? void 0 : e.phoneNum,
                    this.isLogining = !1;
                    e = w.getConfig();
                    this.agenttype = e.agenttype
                },
                "methods": {
                    "init": function() {
                        this.render(),
                        this.bindEvent()
                    },
                    "bindEvent": function() {
                        var t = this;
                        this.initArea(),
                        this.initNameInput(),
                        this.handleCodeInput(),
                        this.handleBtn(),
                        this.handleSendCodeBtn(),
                        this.initClose(),
                        c.on("agreeSmsLogin", function() {
                            t.panel.querySelector('[data-smsLoginReg="loginBtn"]').innerHTML = "正在登录...",
                            t.isLogining = !0,
                            t.authcodeLogin()
                        }),
                        c.on("smsLoginErr", function(e) {
                            t.nameKit.showErrMsg(e.data)
                        })
                    },
                    "render": function() {
                        var e = this.renderHtml(s, {
                            "type": this.type,
                            "hideBack": this.hideBack,
                            "noBaseLogin": this.types ? this.types.indexOf(1) < 0 : "",
                            "noScanLogin": this.types ? this.types.indexOf(2) < 0 : ""
                        });
                        this.panel.innerHTML = e,
                        this.logger.log("smslogin has render "),
                        "login" == this.type && u.block({
                            "rpage": this.rpage,
                            "block": this.block
                        }),
                        this.doms = {
                            "mask": document.querySelector('[data-login-sdk="mask"]'),
                            "smsLoginCheck": document.querySelector('[data-login-sdk="smsLoginCheck"]'),
                            "slideCover": document.querySelector('[data-login-sdk="slideCover"]'),
                            "loginBtn": this.panel.querySelector('[data-smsLoginReg="loginBtn"]'),
                            "areaPanel": this.panel.querySelector('[data-smsLoginReg="area"]'),
                            "nameErr": this.panel.querySelector('[data-smsLoginReg="nameErr"]'),
                            "nameInput": this.panel.querySelector('[data-smsLoginReg="nameInput"]'),
                            "nameText": this.panel.querySelector('[data-smsLoginReg="field-item-name"]'),
                            "codeText": this.panel.querySelector('[data-smsLoginReg="field-item-code"]'),
                            "codeInput": this.panel.querySelector('[data-smsLoginReg="codeInput"]'),
                            "codeErr": this.panel.querySelector('[data-smsLoginReg="codeErr"]'),
                            "sendCodeBtn": this.panel.querySelector('[data-smsLoginReg="sendCode"]'),
                            "baseLoginBtn": this.panel.querySelector('[data-smsLoginReg="baseLogin"]'),
                            "scanLoginBtn": this.panel.querySelector('[data-smsLoginReg="scanLogin"]'),
                            "back": this.panel.querySelector('[data-smsLoginReg="back"]'),
                            "close": this.panel.querySelector('[data-smsLoginReg="close"]'),
                            "toastClose": this.panel.querySelector('[data-smsLoginReg="toast-close"]')
                        }
                    },
                    "showPanel": function(e, t) {
                        this.show(e || this.panel)
                    },
                    "initArea": function() {
                        this.areaIns = new o({
                            "panel": this.doms.areaPanel,
                            "fireName": v
                        }),
                        this.areaIns.render()
                    },
                    "initClose": function() {
                        var e = this
                          , t = this.doms.close
                          , n = this.doms.toastClose
                          , i = function i() {
                            d.addClass(e.panel, "dn"),
                            d.addClass(e.doms.mask, "dn")
                        }
                          , o = function o() {
                            d.addClass(e.panel, "dn"),
                            d.addClass(e.doms.mask, "dn")
                        };
                        n && a.on(n, "click", o),
                        t && a.on(t, "click", i)
                    },
                    "handleCodeInput": function() {
                        var t = this
                          , n = this.doms.codeInput;
                        this.codeFocus = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hideCodeErr(),
                            d.addClass(t.doms.codeText, "field-item-focus")
                        }
                        ,
                        a.on(n, "click", this.codeFocus),
                        this.nameFocus = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            d.addClass(t.doms.nameText, "field-item-focus")
                        }
                        ,
                        a.on(t.doms.nameInput, "click", this.nameFocus),
                        this.codeBlur = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            0 == n.value.trim().length && (n.value = ""),
                            d.removeClass(t.doms.codeText, "field-item-focus")
                        }
                        ,
                        a.on(n, "blur", this.codeBlur),
                        this.nameBlur = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            d.removeClass(t.doms.nameText, "field-item-focus")
                        }
                        ,
                        a.on(t.doms.nameInput, "blur", this.nameBlur),
                        this.checkValidate = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hideCodeErr(),
                            t.setLoginBtnStatus()
                        }
                        ,
                        a.on(n, "keyup", this.checkValidate),
                        a.on(n, "input", this.checkValidate)
                    },
                    "setLoginBtnStatus": function() {
                        var e = this.nameKit.checkNameValidate()
                          , t = 6 == this.doms.codeInput.value.trim().length
                          , n = this.doms.loginBtn
                          , i = this.doms.sendCodeBtn;
                        e ? (d.removeClass(i, "send-code"),
                        d.addClass(i, "send-code-suc")) : (d.addClass(i, "send-code"),
                        d.removeClass(i, "send-code-suc")),
                        e && t ? (d.addClass(n, "btn-major-show"),
                        d.removeClass(n, "btn-major")) : (d.removeClass(n, "btn-major-show"),
                        d.addClass(n, "btn-major"))
                    },
                    "showCodeErr": function(e) {
                        window.navigator.onLine ? (this.doms.codeErr.innerHTML = e,
                        d.removeClass(this.doms.codeErr, "dn")) : (this.doms.nameErr.innerHTML = "网络连接失败 ，请检查网络设置",
                        d.removeClass(this.doms.nameErr, "dn"))
                    },
                    "hideCodeErr": function() {
                        d.addClass(this.doms.codeErr, "dn")
                    },
                    "initNameInput": function() {
                        var e = this;
                        this.nameKit = new l({
                            "name": this.doms.nameInput,
                            "nameErr": this.doms.nameErr,
                            "zoneKey": this.acode,
                            "acode": this.acode || "86",
                            "fireEnableName": y,
                            "zoneChangeFireName": v
                        }),
                        this.nameKit.init(),
                        c.on(y, function() {
                            e.setLoginBtnStatus()
                        })
                    },
                    "handleBtn": function() {
                        var t, n, i = this;
                        this.btnCli = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            !d.hasClass(i.doms.loginBtn, "btn-major") && f.isAgree("smsLogin") && (i.isLogining || ("realname" == i.type ? (u.click({
                                "rpage": i.rpage,
                                "block": i.block,
                                "rseat": "authentication_login"
                            }),
                            i.validatePhone()) : (i.doms.loginBtn.innerHTML = "正在登录...",
                            i.isLogining = !0,
                            i.authcodeLogin(),
                            u.click({
                                "rpage": i.rpage,
                                "block": i.block,
                                "rseat": "login" == i.type ? "sms_login" : "signup_click"
                            }))))
                        }
                        ,
                        a.on(this.doms.loginBtn, "click", this.btnCli),
                        (this.doms.baseLoginBtn || this.doms.scanLoginBtn) && (t = function t(e) {
                            e.stopPropagation && e.stopPropagation(),
                            u.click({
                                "rpage": i.rpage,
                                "block": i.block,
                                "rseat": "sms2acc"
                            }),
                            c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 1
                                }
                            })
                        }
                        ,
                        n = function n(e) {
                            e.stopPropagation && e.stopPropagation(),
                            c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 2
                                }
                            })
                        }
                        ,
                        a.on(this.doms.scanLoginBtn, "click", n),
                        a.on(this.doms.baseLoginBtn, "click", t)),
                        this.backcli = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            i.hide(i.panel),
                            c.fire({
                                "type": "backShow",
                                "data": {
                                    "resetShowPanel": "realname" != i.type,
                                    "resetSize": !0
                                }
                            }),
                            "realname" == i.type && i.unBindEvent()
                        }
                        ,
                        a.on(this.doms.back, "click", this.backcli),
                        this.closecli = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            i.hide(i.panel),
                            d.addClass(i.doms.mask, "dn"),
                            "realname" == i.type && i.unBindEvent()
                        }
                        ,
                        a.on(this.doms.close, "click", this.closecli),
                        "realname" == this.type && (c.on("realnameErr", function(e) {
                            e.data.msg && i.nameKit.showErrMsg(e.data.msg)
                        }),
                        c.on("realnameClear", function() {
                            i.clearPanel()
                        }))
                    },
                    "authcodeLogin": function(e, t) {
                        var n = this
                          , i = this.doms.loginBtn;
                        if (e || !d.hasClass(i, "btn-major")) {
                            var o, s = n.doms.nameInput.value.trim(), e = e || n.doms.codeInput.value.trim();
                            if (this.logger.log("smslogin login start phone number:".concat(s)),
                            o = t ? {
                                "uid_enc": t,
                                "authCode": e
                            } : {
                                "phone": s,
                                "acode": n.areaIns.getAcode().acode,
                                "authCode": e
                            },
                            n.hideCodeErr(),
                            n.nameKit.clearErrMsg(),
                            !p.number(e))
                                return n.nameKit.showErrMsg("验证码不匹配"),
                                void n.logger.log("smslogin login authCode error (验证码不匹配)");
                            try {
                                r.authcodeLogin(o, function(e) {
                                    var t = e.msg || "系统异常,请重试";
                                    n.doms.loginBtn.innerHTML = "登录",
                                    n.isLogining = !1,
                                    "A00000" == e.code ? (e.data.isNewUser = n.isNewUser,
                                    e.data.rpage = n.isNewUser ? "signup_scsv2" : "login_scs_smsv2",
                                    e.data.isReg = "reg" == n.type,
                                    e.data.methods = "smsLogin",
                                    e.data.phone = s,
                                    h.qosSend({
                                        "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                        "diy_ls": "登录成功",
                                        "diy_method": "603"
                                    }),
                                    c.fire({
                                        "type": "handleLoginSuc",
                                        "rpage": "login_scs_smsv2",
                                        "data": e.data
                                    })) : "P00159" == e.code || "A00006" == e.code || "P00402" == e.code ? (this.logger.log("smslogin login request warn :".concat(JSON.stringify(e))),
                                    h.qosSend({
                                        "diy_ec": e.code || "",
                                        "diy_ls": "登录失败",
                                        "diy_method": "603"
                                    }),
                                    n.nameKit.showErrMsg(e.msg)) : "P00950" == e.code || "P00951" == e.code ? (n.logger.log("smslogin login data=".concat(JSON.stringify(e), " init secondVerify page")),
                                    h.qosSend({
                                        "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                        "diy_ls": "二次验证",
                                        "diy_method": "6035"
                                    }),
                                    n.secondVerify.init({
                                        "prePanel": n.panel,
                                        "data": e,
                                        "sourceLogin": "smsLoginErr",
                                        "type": n.type
                                    }),
                                    d.removeClass(n.doms.mask, "dn"),
                                    "loginToast" === n.type && d.addClass(n.panel, "dn"),
                                    n.secondVerify.showPanel()) : (n.logger.log("smslogin login failed:".concat(JSON.stringify(e))),
                                    h.qosSend({
                                        "diy_ec": e.code || "",
                                        "diy_ls": "登录失败",
                                        "diy_method": "603"
                                    }),
                                    n.nameKit.showErrMsg(t),
                                    b("KIWI-LOGIN-SMSLOGIN-FAIL_".concat(s)))
                                })
                            } catch (a) {
                                this.logger.error("smslogin login error"),
                                b("KIWI-LOGIN-SMSLOGIN-ERROR-".concat((null === k || void 0 === k ? void 0 : k.cookie.get("QC005_PCA")) || (null === k || void 0 === k ? void 0 : k.cookie.get("QC005")), " error:").concat(JSON.stringify(a)))
                            }
                        }
                    },
                    "validatePhone": function(e) {
                        var t, i, o = this, n = this.doms.loginBtn;
                        !e && d.hasClass(n, "btn-major") || (t = o.doms.nameInput.value.trim(),
                        n = o.doms.codeInput.value.trim(),
                        i = {
                            "phone": t,
                            "acode": o.areaIns.getAcode().acode,
                            "authCode": e || n,
                            "token": o.bindToken
                        },
                        r.validate(i, function(e) {
                            var t, n = e.msg || "系统异常,请重试";
                            o.hideCodeErr(),
                            o.nameKit.clearErrMsg(),
                            "A00000" == e.code ? (i.panel = o.verifyPhonePanel,
                            i.prePanel = o.panel,
                            i.preRpage = o.rpage,
                            i.preBlock = o.block,
                            i.loginSucRpage = o.loginSucRpage,
                            t = {
                                "verifyPhoneResult": e.data.verifyPhoneResult,
                                "validateData": i
                            },
                            m.identify(t)) : "P00159" == e.code || "A00006" == e.code ? o.nameKit.showErrMsg(e.msg) : o.nameKit.showErrMsg(n)
                        }))
                    },
                    "handleSendCodeBtn": function() {
                        var n = this
                          , i = this.doms.sendCodeBtn
                          , o = this.doms.nameInput;
                        this.sendCodeCli = function(e) {
                            var t;
                            e.stopPropagation && e.stopPropagation(),
                            d.hasClass(i, "send-again") || (0 != (t = o.value.trim()).length ? n.nameKit.checkNameValidate() && n.getUserStatus(function() {
                                "realname" == n.type ? n._sendSmsCode() : n._checkAccount({
                                    "phone": t,
                                    "acode": n.areaIns.getAcode().acode
                                })
                            }) : n.nameKit.showPhoneMsg("请填写正确的手机号"))
                        }
                        ,
                        a.on(i, "click", this.sendCodeCli)
                    },
                    "_checkAccount": function(e) {
                        var t = this;
                        r.checkAccount(e, function(e) {
                            "A00000" == e.code ? (t.isNewUser = !e.data,
                            t._sendSmsCode()) : "P00404" == (null == e ? void 0 : e.code) || "P00105" == (null == e ? void 0 : e.code) ? t._sendSmsCode() : (t.nameKit.showPhoneMsg(null == e ? void 0 : e.msg),
                            d.hasClass(t.doms.codeErr, "dn") || t.hideCodeErr())
                        })
                    },
                    "getUserStatus": function(t) {
                        var n = this
                          , i = this.doms.nameInput.value.trim()
                          , e = {
                            "phone": i,
                            "acode": n.areaIns.getAcode().acode
                        };
                        "realname" == n.type ? t() : r.getUserStatus(e, function(e) {
                            "A00000" === (null == e ? void 0 : e.code) ? t() : "P01120" == (null == e ? void 0 : e.code) ? n.nameKit.showErrMsg(null == e ? void 0 : e.msg) : "P00950" == (null == e ? void 0 : e.code) ? (e.msg || (e.msg = "我们发现您的会员账号在多个设备上登录，本次登录存在安全风险，为了您的会员权益，请用如下方式验证登录。"),
                            e.data.area_code = n.areaIns.getAcode().acode,
                            e.data.phone = i,
                            n.secondVerify.init({
                                "prePanel": n.panel,
                                "data": e,
                                "sourceLogin": "smsLoginErr",
                                "type": n.type
                            }),
                            d.removeClass(n.doms.mask, "dn"),
                            "loginToast" === n.type && d.addClass(n.panel, "dn"),
                            n.secondVerify.showPanel()) : (n.nameKit.showErrMsg(null != e && e.msg ? null == e ? void 0 : e.msg : "系统异常,请重试"),
                            n.logger.warn("smslogin login failed:".concat(JSON.stringify(e))))
                        })
                    },
                    "_sendSmsCode": function(e) {
                        var n = this
                          , i = {
                            "phone": this.doms.nameInput.value.trim(),
                            "acode": n.areaIns.getAcode().acode,
                            "token": e,
                            "requestType": "realname" == n.type ? 26 : 22
                        }
                          , o = (new Date).getTime();
                        try {
                            r.secureSendCode(i, function(e) {
                                var t;
                                h.qosSend({
                                    "p1": "8_84_840",
                                    "ct": "sms_latency",
                                    "stime": o,
                                    "rtime": (new Date).getTime(),
                                    "diy_request_type": "realname" == n.type ? 26 : 22,
                                    "ec": (null == e ? void 0 : e.code) || "",
                                    "agenttype": n.agenttype,
                                    "msg_id": (null == e || null === (t = e.data) || void 0 === t ? void 0 : t.msg_id) || "NA",
                                    "s2": n.rpage,
                                    "s3": n.block,
                                    "s4": "sms_login"
                                }),
                                "A00000" == e.code ? (h.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "获取验证码成功",
                                    "diy_method": "6032"
                                }),
                                n._ecountDown()) : "P00223" == e.code ? (clearInterval(n.sendTimer),
                                (t = i).ErrCb = function() {
                                    n.nameKit.showPhoneMsg("请稍后重试"),
                                    window.MITO && window.MITO.log({
                                        "message": "短信登录注册：发短信接口触发验证中心失败",
                                        "data": i
                                    })
                                }
                                ,
                                n.logger.log("secure_send_cellphone_authcode.action 开启滑动验证码 :".concat(JSON.stringify(e))),
                                h.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "开启滑动验证码",
                                    "diy_method": "6031"
                                }),
                                n.verifyCenter.callSDK(e, t, function(e) {
                                    e ? (h.qosSend({
                                        "diy_ec": "",
                                        "diy_ls": "滑动验证码验证成功",
                                        "diy_method": "60311"
                                    }),
                                    n._sendSmsCode(e)) : (h.qosSend({
                                        "diy_ec": "",
                                        "diy_ls": "滑动验证码验证失败",
                                        "diy_method": "60312"
                                    }),
                                    d.addClass(n.doms.slideCover, "dn"),
                                    d.addClass(n.doms.mask, "dn"),
                                    n.nameKit.showPhoneMsg("请稍后重试"))
                                })) : "P00174" == e.code ? (n.logger.log("secure_send_cellphone_authcode.action 发短信次数达到上限 :".concat(JSON.stringify(e))),
                                n.nameKit.showPhoneMsg(e.msg),
                                h.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "开启上行短信",
                                    "diy_method": "6033"
                                }),
                                n.showSmsLoginUp({
                                    "fromSms": !0
                                }),
                                d.removeClass(n.doms.mask, "dn")) : (h.qosSend({
                                    "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                    "diy_ls": "获取验证码失败",
                                    "diy_method": "6032"
                                }),
                                n.nameKit.showPhoneMsg(e.msg),
                                n.logger.warn("smslogin login identifying code request info:".concat(JSON.stringify(i), " fail ").concat(JSON.stringify(e || "no data"), " ")),
                                b("KIWI - LOGIN-SMSLOGIN - IDENTIFYING - CODE - FAIL-".concat(null === i ? void 0 : i.phone)),
                                d.hasClass(n.doms.codeErr, "dn") || n.hideCodeErr())
                            })
                        } catch (t) {
                            n.logger.error("smslogin login info:".concat(JSON.stringify(i), " identifying code request error:").concat(t, " ")),
                            b("KIWI - LOGIN-SMSLOGIN - IDENTIFYING - CODE - ERROR-".concat(null === i ? void 0 : i.phone))
                        }
                    },
                    "_ecountDown": function() {
                        var e = this
                          , t = 58
                          , n = this.doms.sendCodeBtn;
                        clearInterval(this.sendTimer),
                        d.addClass(n, "send-again"),
                        n.innerHTML = "59s后重发",
                        this.sendTimer = setInterval(function() {
                            return n.innerHTML = "".concat(t, " s后重发"),
                            0 === t ? (clearInterval(e.sendTimer),
                            d.removeClass(n, "send-again"),
                            !(n.innerHTML = "获取验证码")) : void t--
                        }, 1e3)
                    },
                    "showSmsLoginUp": function(e) {
                        var t, n, i, o, s, a = this, r = "";
                        e && e.prePanel && (s = e.prePanel,
                        r = null != e && null !== (i = e.loginData) && void 0 !== i && i.uid_enc ? null == e || null === (o = e.loginData) || void 0 === o ? void 0 : o.uid_enc : ""),
                        this.upSmsCodeIns || (this.upSmsCodeIns = new g({
                            "panel": this.upSmsCodePanel,
                            "type": this.type
                        }));
                        var c = function c(e) {
                            "realname" == a.type ? a.validatePhone(e) : a.authcodeLogin(e, r)
                        };
                        this.upSmsCodeIns.init({
                            "uid_enc": r || "",
                            "prePanel": s || "",
                            "phone": this.doms.nameInput.value.trim() || e.loginData.phone,
                            "acode": null != e && null !== (t = e.loginData) && void 0 !== t && t.area_code ? null == e || null === (n = e.loginData) || void 0 === n ? void 0 : n.area_code : this.areaIns.getAcode().acode,
                            "aname": this.areaIns.getAcode().name,
                            "requestType": "realname" == this.type ? 26 : 22,
                            "fromSms": !(null == e || !e.fromSms) && (null == e ? void 0 : e.fromSms),
                            "cb": c
                        })
                    },
                    "unBindEvent": function() {
                        clearInterval(this.sendTimer),
                        a.un(this.doms.codeInput, "click", this.codeFocus),
                        a.un(this.doms.codeInput, "blur", this.codeBlur),
                        a.un(this.doms.codeInput, "keyup", this.checkValidate),
                        a.un(this.doms.codeInput, "input", this.checkValidate),
                        a.un(this.doms.loginBtn, "click", this.btnCli),
                        a.un(this.doms.back, "click", this.backcli),
                        a.un(this.doms.sendCodeBtn, "click", this.sendCodeCli),
                        this.codeFocus = null,
                        this.codeBlur = null,
                        this.checkValidate = null,
                        this.btnCli = null,
                        this.backcli = null,
                        this.sendCodeCli = null
                    },
                    "resetAcode": function(e, t) {
                        this.areaIns.resetAcode(e, t)
                    },
                    "clearPanel": function() {
                        clearInterval(this.sendTimer);
                        var e = this.doms.sendCodeBtn;
                        d.removeClass(e, "send-again"),
                        e.innerHTML = "获取验证码",
                        this.doms.codeInput.value = "",
                        d.addClass(this.doms.codeErr, "dn"),
                        this.doms.nameInput.value = "",
                        d.addClass(this.doms.nameErr, "dn"),
                        d.addClass(this.doms.loginBtn, "btn-major"),
                        d.hasClass(this.doms.loginBtn, "btn-major-show") && d.removeClass(this.doms.loginBtn, "btn-major-show"),
                        d.hasClass(sendCodeBtn, "send-code-suc") && (d.addClass(sendCodeBtn, "send-code"),
                        d.removeClass(sendCodeBtn, "send-code-suc"))
                    }
                }
            })
        }
        .call(n, C, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, C(0))
}
, function(e, t) {
    e.exports = '{{if type == \'login\'}} <div class="qy-login-methods {{if noBaseLogin == true}}single-tab{{/if}}"> <div data-smsLoginReg="scanLogin" class="qy-methods-item {{if noScanLogin == true}}dn{{/if}}">扫码登录</div> <div class="selected qy-methods-item">短信登录<span class="tab-line"></span></div> <div data-smsLoginReg="baseLogin" class="qy-methods-item {{if noBaseLogin == true}}dn{{/if}}">密码登录</div> </div> {{else if type == \'loginToast\'}} <div class="loginToastClose"> <i class="iconfont icon-close" data-smsLoginReg="toast-close"></i> </div> <div class="loginToastText">手机号未注册，请使用短信登录</div> {{else}} <div class="qy-checking-container"> <div class="qy-checking-title"> <span class="close-link"> <i class="iconfont icon-close" data-smsLoginReg="close"></i> </span> </div> <div class="qy-login-form"> <div class="login-form-inner"> <div class="login-form"> <div class="qy-safe-title"> <div class="title-content align-left"> <div class="major-desc"> <p>安全验证</p> </div> <div class="minor-desc minor-desc-common"> <div class="minor-desc-item">为了您的账号安全，请设置手机号</div> </div> <div class="qy-login-field"> <div class="field-item" data-smsLoginReg="field-item-name"> <div class="field-error dn" data-smsLoginReg="nameErr"></div> <div class="field-country-code" data-smsLoginReg="area"></div> <div class="field-account"> <input type="text" id="sms-phone-number" class="input-box" data-smsLoginReg="nameInput" maxlength="20" placeholder="请输入手机号"> </div> </div> <div class="field-item" data-smsLoginReg="field-item-code"> <div class="field-error dn" data-smsLoginReg="codeErr">验证码错误</div> <div class="field-confirm-code"> <input type="text" class="input-box" data-smsLoginReg="codeInput" maxlength="6" placeholder="请输入验证码"> <span class="send-code" data-smsLoginReg="sendCode">获取验证码</span> </div> </div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major" data-smsLoginReg="loginBtn"> 登录 </div> </div> <div class="btn-common btn-minor dn">绑定其他手机号</div> </div> </div> </div> </div> </div> </div> </div> </div> {{/if}} {{if type == \'login\' || type == \'loginToast\'}} <div class="qy-login-field"> <div class="field-item" data-smsLoginReg="field-item-name"> <div class="field-error dn" data-smsLoginReg="nameErr"></div> <div class="field-country-code" data-smsLoginReg="area"></div> <div class="field-account"> <input type="text" class="input-box" data-smsLoginReg="nameInput" maxlength="20" placeholder="请输入手机号"> </div> </div> <div class="field-item" data-smsLoginReg="field-item-code"> <div class="field-error dn" data-smsLoginReg="codeErr">验证码错误</div> <div class="field-confirm-code"> <input type="text" class="input-box" data-smsLoginReg="codeInput" maxlength="6" placeholder="请输入验证码"> <span class="send-code" data-smsLoginReg="sendCode">获取验证码</span> </div> </div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major" data-smsLoginReg="loginBtn"> 登录 </div> </div> <div class="btn-common btn-minor dn">绑定其他手机号</div> </div> </div> {{/if}}'
}
, function(t, n, l) {
    (function(d) {
        var e = function(e, t, n) {
            var i = l(6)
              , a = l(16)
              , r = l(7)
              , o = l(1)
              , s = l(5)
              , c = l(2);
            n.exports = d.Class("smsLoginService", {
                "construct": function() {
                    this._remoteInterface = new i({
                        "secureSendCode": {
                            "url": s.secureSendCode
                        },
                        "authcodeLogin": {
                            "url": s.authcodeLogin
                        },
                        "validate": {
                            "url": s.validate
                        },
                        "checkAccount": {
                            "url": s.checkAccount
                        },
                        "getUserStatus": {
                            "url": s.getUserStatus
                        }
                    })
                },
                "methods": {
                    "checkAccount": function(e, t) {
                        var n = c.getConfig()
                          , n = {
                            "__NEW": 1,
                            "account": e.phone,
                            "agenttype": n.agenttype,
                            "app_version": n.appVersion || "",
                            "area_code": e.acode,
                            "device_id": n.deviceid || d.cookie.get("QC005_PCA") || d.cookie.get("QC005") || "",
                            "dfp": "",
                            "fromSDK": n.fromSDK,
                            "lang": "",
                            "ptid": n.ptid,
                            "sdk_version": n.sdk_version
                        };
                        this.cmd5x(n, "checkAccount", t, !1)
                    },
                    "secureSendCode": function(e, t) {
                        var n = c.getConfig()
                          , i = {
                            "__NEW": 1,
                            "agenttype": n.agenttype,
                            "app_version": n.appVersion || "",
                            "area_code": e.acode,
                            "cellphoneNumber": e.phone,
                            "device_id": n.deviceid || d.cookie.get("QC005_PCA") || "",
                            "dfp": ""
                        };
                        e.token && (i.env_token = e.token),
                        i.fromSDK = n.fromSDK,
                        i.lang = "",
                        i.nr = 1,
                        i.ptid = n.ptid,
                        i.requestType = e.requestType,
                        i.sdk_version = n.sdk_version,
                        i.serviceId = 2,
                        this.cmd5x(i, "secureSendCode", t, !0)
                    },
                    "authcodeLogin": function(e, t) {
                        var n = c.getConfig()
                          , i = {
                            "__NEW": 1,
                            "agenttype": n.agenttype,
                            "app_version": n.appVersion || "",
                            "area_code": e.acode || "",
                            "authCode": e.authCode,
                            "cellphoneNumber": e.phone || "",
                            "device_id": n.deviceid || d.cookie.get("QC005_PCA") || "",
                            "dfp": ""
                        };
                        i.fromSDK = n.fromSDK,
                        i.lang = "",
                        i.ptid = n.ptid,
                        i.requestType = 22,
                        i.sdk_version = n.sdk_version,
                        i.serviceId = 2,
                        e.uid_enc && (i.uid_enc = e.uid_enc),
                        this.cmd5x(i, "authcodeLogin", t, !1)
                    },
                    "validate": function(e, t) {
                        var n = c.getConfig()
                          , e = {
                            "agenttype": n.agenttype,
                            "app_version": n.appVersion || "",
                            "area_code": e.acode || "",
                            "authCode": e.authCode,
                            "cellphoneNumber": e.phone || "",
                            "device_id": n.deviceid || d.cookie.get("QC005_PCA") || "",
                            "fromSDK": n.fromSDK,
                            "lang": "",
                            "ptid": n.ptid,
                            "requestType": 26,
                            "sdk_version": n.sdk_version,
                            "serviceId": 2,
                            "token": e.token
                        };
                        this.cmd5x(e, "validate", t)
                    },
                    "getUserStatus": function(e, t) {
                        var n = c.getConfig()
                          , e = {
                            "agenttype": n.agenttype,
                            "app_version": n.appVersion || "",
                            "area_code": e.acode,
                            "cellphoneNumber": e.phone,
                            "dfp": ""
                        };
                        e.fromSDK = n.fromSDK,
                        e.ptid = n.ptid,
                        e.qyid = n.deviceid || "",
                        e.sdk_version = n.sdk_version,
                        e.serviceId = 2,
                        this.cmd5x(e, "getUserStatus", t, !0)
                    },
                    "cmd5x": function(t, n, i, o) {
                        var s = this;
                        r.getDFP(function(e) {
                            t.dfp = e,
                            t && o && t.cellphoneNumber && (t.cellphoneNumber = a.rsaFun(t.cellphoneNumber)),
                            t = s.sortKey(t),
                            s.interfaceSend(t, n, i)
                        })
                    },
                    "interfaceSend": function(e, t, n) {
                        var i = c.getConfig();
                        o.isCors() && (e.qd_sc = d.md5(decodeURIComponent(o.jsonToQuery(e)) + i.secretKey)),
                        this._remoteInterface.send({
                            "ifname": t,
                            "param": e,
                            "needMd5": !0
                        }, function(e) {
                            n && n(e)
                        })
                    },
                    "sortKey": function(e) {
                        for (var t = Object.keys(e).sort(), n = {}, i = 0; i < t.length; i++)
                            n[t[i]] = e[t[i]];
                        return n
                    }
                }
            })
        }
        .call(n, l, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, l(0))
}
, function(t, n, p) {
    (function(u) {
        p(3).addClass;
        var h = p(3)
          , e = function(e, t, n) {
            var i = p(10)
              , o = p(81)
              , s = new (p(82))
              , a = p(1)
              , r = p(4)
              , c = p(8)
              , d = p(13)
              , l = p(9);
            n.exports = u.Class("upSmsCodeAction", {
                "extend": i,
                "construct": function(e) {
                    this.panel = e.panel,
                    this.type = e.type,
                    this.rpage = "upsmsv2"
                },
                "methods": {
                    "init": function(e) {
                        this.config = e,
                        this.doms = {},
                        this.upToken = "",
                        this.getUpSmsCode(),
                        this.fromSms = (null == e ? void 0 : e.fromSms) || !1,
                        this.logger = new l.LoginLogger("QiyiLoginLoader")
                    },
                    "bindEvent": function() {
                        var t = this;
                        t.config.prePanel ? h.removeClass(this.doms.back, "dn") : h.hasClass(this.doms.back, "dn") || h.addClass(this.doms.back, "dn"),
                        this.btnClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.upStatusTimer()
                        }
                        ,
                        a.on(this.doms.btn, "click", this.btnClick),
                        this.backClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hidePanel(!0, "back")
                        }
                        ,
                        this.closeClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hidePanel(!0, "close")
                        }
                        ,
                        this.maskCloseClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hidePanel(!0, "close")
                        }
                        ,
                        a.on(this.doms.back, "click", this.backClick),
                        a.on(this.doms.close, "click", this.closeClick),
                        a.on(this.doms.maskClose, "click", this.maskCloseClick),
                        a.on(this.doms.modify, "click", this.closeClick),
                        this.refreshClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.getUpSmsCode(!0),
                            t.hide(t.doms.timeoutCover)
                        }
                        ,
                        a.on(this.doms.refresh, "click", this.refreshClick)
                    },
                    "hidePanel": function(e, t) {
                        this.clearResultTimer(),
                        this.unBindEvent(),
                        !e && "secondVerify" === this.type || (this.hide(this.panel),
                        "login" === this.type || this.type,
                        "back" == t ? this.show(this.config.prePanel) : "close" == t && this.hide(this.doms.mask))
                    },
                    "unBindEvent": function() {
                        a.un(this.doms.btn, "click", this.btnClick),
                        a.un(this.doms.back, "click", this.backClick),
                        a.un(this.doms.close, "click", this.closeClick),
                        a.un(this.doms.maskClose, "click", this.maskCloseClick),
                        a.un(this.doms.modify, "click", this.backClick),
                        a.un(this.doms.refresh, "click", this.refreshClick),
                        this.btnClick = null,
                        this.maskCloseClick = null,
                        this.closeClick = null,
                        this.backClick = null,
                        this.refreshClick = null
                    },
                    "getUpSmsCode": function(t) {
                        var n = this
                          , i = {
                            "acode": this.config.acode,
                            "phone": this.config.phone,
                            "requestType": this.config.requestType
                        };
                        this.config.uid_enc && (i.uid_enc = this.config.uid_enc),
                        s.upBizInfo(i, function(e) {
                            "A00000" == e.code && e.data ? (n.upToken = e.data.upToken,
                            t ? (n.doms.serviceNum.innerHTML = e.data.serviceNum,
                            n.doms.content.innerHTML = e.data.content,
                            n.doms.btn.innerHTML = "我已经发送了") : n.render(e.data),
                            n.timeOutControl()) : (n.logger.error("upsms login up_biz_info.action error"),
                            e = document.querySelector('[data-login-sdk="mask"]'),
                            h.addClass(e, "dn"),
                            r.fire({
                                "type": "showQrCodeLogin",
                                "data": {
                                    "type": "hrisk"
                                }
                            }),
                            window.MITO && window.MITO.log({
                                "message": "up_biz_info.action接口调用失败",
                                "data": i
                            }))
                        })
                    },
                    "render": function(e) {
                        e = this.renderHtml(o, {
                            "aname": this.config.aname || "",
                            "phone": this.config.phone || "",
                            "content": e.content || "",
                            "serviceNum": e.serviceNum || "",
                            "fromSms": this.fromSms || !1
                        });
                        this.panel.innerHTML = e,
                        this.show(this.panel),
                        this.logger.log("login upsmscode page render "),
                        this.doms = {
                            "mask": document.querySelector('[data-login-sdk="mask"]'),
                            "modify": this.panel.querySelector('[data-upsmscode="modify"]'),
                            "btn": this.panel.querySelector('[data-upsmscode="btn"]'),
                            "back": this.panel.querySelector('[data-upsmscode="back"]'),
                            "close": this.panel.querySelector('[data-upsmscode="close"]'),
                            "maskClose": this.panel.querySelector('[data-upsmscode="mask-close"]'),
                            "timeoutCover": this.panel.querySelector('[data-upsmscode="timeout"]'),
                            "content": this.panel.querySelector('[data-upsmscode="content"]'),
                            "serviceNum": this.panel.querySelector('[data-upsmscode="serviceNum"]'),
                            "timeoutTitle": this.panel.querySelector('[data-upsmscode="timeoutTitle"]'),
                            "refresh": this.panel.querySelector('[data-upsmscode="refresh"]')
                        },
                        this.bindEvent()
                    },
                    "timeOutControl": function() {
                        var e = this;
                        e.statusTimeout && clearTimeout(e.statusTimeout),
                        e.statusTimeout = setTimeout(function() {
                            e.showCover("已超时，请刷新", "点击刷新")
                        }, 3e5)
                    },
                    "showCover": function(e, t) {
                        this.clearResultTimer(),
                        this.doms.timeoutTitle.innerHTML = e,
                        this.doms.refresh.innerHTML = t,
                        this.show(this.doms.timeoutCover)
                    },
                    "upStatusTimer": function() {
                        var t = this
                          , n = 60;
                        this.statusTimer && clearInterval(this.statusTimer),
                        this.doms.btn.innerHTML = "发送中...",
                        this.statusTimer = setInterval(function() {
                            var e;
                            0 === (n -= 3) ? (c.qosSend({
                                "diy_ec": null !== (e = data) && void 0 !== e && e.code ? null === (e = data) || void 0 === e ? void 0 : e.code : "",
                                "diy_ls": "上行短信发送失败",
                                "diy_method": "605"
                            }),
                            t.showCover("我们没能收到您的短信", "重新发送")) : t.autoCheckResult()
                        }, 3e3)
                    },
                    "clearResultTimer": function() {
                        this.statusTimer && (clearInterval(this.statusTimer),
                        this.statusTimer = null),
                        this.statusTimeout && (clearTimeout(this.statusTimeout),
                        this.statusTimeout = null),
                        this.upToken = ""
                    },
                    "autoCheckResult": function() {
                        var t = this
                          , n = {
                            "acode": this.config.acode,
                            "phone": this.config.phone,
                            "requestType": this.config.requestType,
                            "upToken": this.upToken
                        };
                        s.upBizStatus(n, function(e) {
                            "A00000" == e.code ? (c.qosSend({
                                "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                                "diy_ls": "上行短信成功",
                                "diy_method": "605"
                            }),
                            t.hidePanel(),
                            t.config.cb(e.data.authCode)) : (t.logger.log("autoCheckResult info:".concat(JSON.stringify(n), " data:").concat(JSON.stringify(e))),
                            d("KIWI-LOGIN-UPBIZ-FAIL"))
                        })
                    }
                }
            })
        }
        .call(n, p, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, p(0))
}
, function(e, t) {
    e.exports = '<div class="qy-checking-mask dn" data-upsmscode="timeout"> <div class="qy-checking-title"> <span class="close-link"> <i class="iconfont icon-close" data-upsmscode="mask-close"></i> </span> </div> <div class="qy-login-warning"> <i class="iconfont icon-warning"></i> <div class="warning-title" data-upsmscode="timeoutTitle">已超时，请刷新</div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major-show" data-upsmscode="refresh">点击刷新</div> </div> </div> </div> </div> <div class="qy-checking-container"> <div class="qy-checking-title"> <span class="back-link dn" data-upsmscode="back"> <i class="iconfont icon-back"></i> </span> <span class="close-link"> <i class="iconfont icon-close" data-upsmscode="close"></i> </span> </div> <div class="qy-login-form"> <div class="login-form-inner"> <div class="login-form"> <div class="qy-safe-title"> <div class="title-content align-left"> <div class="major-desc"> <p>发送短信验证</p> </div> <div class="minor-desc minor-desc-common"> {{if fromSms}} <div class="minor-desc-item">您接收短信验证码次数已达到上限</div> {{/if}} <div class="minor-desc-item">请发送短信进行验证</div> </div> </div> </div> <div class="qy-login-msg"> <div class="msg-item"> <span class="msg-name">{{aname}}</span> <span class="msg-info">{{phone}}</span> <a href="javascript:;" class="theme-color" data-upsmscode="modify">修改</a> </div> <div class="msg-item"> <span class="msg-name">请编辑短信</span> <span class="msg-info" data-upsmscode="content">{{content}}</span> </div> <div class="msg-item"> <span class="msg-name">发送到号码</span> <span class="msg-info" data-upsmscode="serviceNum">{{serviceNum}}</span> </div> </div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major-show" data-upsmscode="btn">我已经发送了</div> <div class="btn-inner btn-major-show dn">发送中...</div> </div> </div> </div> </div> </div> </div>'
}
, function(t, n, l) {
    (function(d) {
        var e = function(e, t, n) {
            var i = l(6)
              , o = l(16)
              , a = l(7)
              , r = l(1)
              , s = l(5)
              , c = l(2);
            n.exports = d.Class("upSmsCodeService", {
                "construct": function() {
                    this._remoteInterface = new i({
                        "upBizInfo": {
                            "url": s.upBizInfo
                        },
                        "upBizStatus": {
                            "url": s.upBizStatus
                        }
                    })
                },
                "methods": {
                    "baseData": function(e) {
                        var t = c.getConfig()
                          , t = {
                            "__NEW": 1,
                            "agenttype": t.agenttype,
                            "app_version": t.appVersion || "",
                            "area_code": e.acode,
                            "cellphoneNumber": o.rsaFun(e.phone),
                            "device_id": t.deviceid || d.cookie.get("QC005_PCA") || d.cookie.get("QC005") || "",
                            "dfp": "",
                            "fromSDK": t.fromSDK,
                            "lang": "",
                            "ptid": t.ptid,
                            "requestType": e.requestType || 22,
                            "sdk_version": t.sdk_version,
                            "serviceId": 2
                        };
                        return e.upToken && (t.token = e.upToken),
                        e.uid_enc && (t.uid_enc = e.uid_enc),
                        t
                    },
                    "upBizInfo": function(e, t) {
                        e = this.baseData(e),
                        this.cmd5x(e, "upBizInfo", t)
                    },
                    "upBizStatus": function(e, t) {
                        e = this.baseData(e),
                        this.cmd5x(e, "upBizStatus", t)
                    },
                    "cmd5x": function(t, n, i) {
                        var o = this
                          , s = c.getConfig();
                        a.getDFP(function(e) {
                            t.dfp = e,
                            r.isCors() && (t.qd_sc = d.md5(decodeURIComponent(r.jsonToQuery(t)) + s.secretKey)),
                            o._remoteInterface.send({
                                "ifname": n,
                                "param": t,
                                "needMd5": !0
                            }, function(e) {
                                i && i(e)
                            })
                        })
                    }
                }
            })
        }
        .call(n, l, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, l(0))
}
, function(t, n, i) {
    (function(y) {
        var e = function(e, t, n) {
            var l = i(12)
              , u = i(1)
              , h = i(4)
              , p = i(3)
              , f = i(11)
              , g = i(8)
              , m = i(84)
              , v = new (i(85))
              , g = i(8);
            n.exports = {
                "identify": function(e) {
                    var t = e.verifyPhoneResult
                      , n = e.validateData;
                    "1" == t.newUser ? (e = "1" == t.toBind,
                    this.bindLogin(n, e)) : "1" == t.toBind ? this.directBindPhone(n) : this.verifyAccount(t.name, n)
                },
                "directBindPhone": function(t) {
                    var n = this;
                    t.requestType = 26,
                    v.directBindPhone(t, function(e) {
                        "A00000" == e.code ? (g.qosSend({
                            "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                            "diy_ls": "绑定手机登录成功",
                            "diy_method": "607"
                        }),
                        h.fire({
                            "type": "handleLoginSuc",
                            "data": {
                                "rpage": t.loginSucRpage
                            }
                        })) : (g.qosSend({
                            "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                            "diy_ls": "绑定手机登录失败",
                            "diy_method": "607"
                        }),
                        n.showErrPanel(e.msg))
                    })
                },
                "verifyAccount": function(e, t) {
                    var n = this
                      , i = document.querySelector('[data-login-sdk="mask"]')
                      , e = l.compile(m)({
                        "phone": t.phone,
                        "account": e
                    });
                    t.panel.innerHTML = e,
                    p.removeClass(t.panel, "dn"),
                    p.removeClass(i, "dn"),
                    p.addClass(t.prePanel, "dn");
                    var o = {
                        "rpage": "authentication_2v2",
                        "block": "authentication_2v2"
                    };
                    f.block(o),
                    h.fire({
                        "type": "toggleSpecialPanel",
                        "data": !1
                    });
                    var s = t.panel.querySelector('[data-bindphone="login"]')
                      , a = function a(e) {
                        e.stopPropagation && e.stopPropagation();
                        e = y.extend({
                            "rseat": "authentication_continuev2"
                        }, o);
                        f.click(e),
                        v.verifyAccount(t, function(e) {
                            "A00000" == e.code ? (g.qosSend({
                                "diy_ec": e.code || "",
                                "diy_ls": "绑定手机登录成功",
                                "diy_method": "607"
                            }),
                            h.fire({
                                "type": "handleLoginSuc",
                                "data": {
                                    "rpage": t.loginSucRpage
                                }
                            })) : (u.un(s, "click", a),
                            u.un(r, "click", c),
                            p.addClass(t.panel, "dn"),
                            p.removeClass(t.prePanel, "dn"),
                            n.showErrPanel(e.msg))
                        })
                    };
                    u.on(s, "click", a);
                    var r = t.panel.querySelector('[data-bindphone="back"]')
                      , e = t.panel.querySelector('[data-bindphone="close"]')
                      , c = function c(e) {
                        e.stopPropagation && e.stopPropagation(),
                        u.un(s, "click", a),
                        u.un(r, "click", c);
                        e = y.extend({
                            "rseat": "authentication_another"
                        }, o);
                        f.click(e),
                        h.fire({
                            "type": "toggleSpecialPanel",
                            "data": "3"
                        }),
                        h.fire({
                            "type": "realnameClear"
                        }),
                        p.addClass(t.panel, "dn"),
                        p.removeClass(t.prePanel, "dn"),
                        f.block({
                            "rpage": t.preRpage,
                            "block": t.preBlock
                        })
                    };
                    u.on(r, "click", c);
                    var d = function d(e) {
                        e.stopPropagation && e.stopPropagation(),
                        p.addClass(i, "dn"),
                        p.addClass(t.panel, "dn")
                    };
                    u.on(e, "click", d)
                },
                "bindLogin": function(t, n) {
                    var i = this;
                    v.bindLogin(t, function(e) {
                        "A00000" == e.code ? (g.qosSend({
                            "diy_ec": null != e && e.code ? null == e ? void 0 : e.code : "",
                            "diy_ls": "绑定手机登录成功",
                            "diy_method": "607"
                        }),
                        h.fire({
                            "type": "handleLoginSuc",
                            "data": {
                                "rpage": t.loginSucRpage,
                                "isNewUser": n
                            }
                        })) : i.showErrPanel(e.msg)
                    })
                },
                "showErrPanel": function(e) {
                    h.fire({
                        "type": "realnameErr",
                        "data": {
                            "msg": e
                        }
                    })
                }
            }
        }
        .call(n, i, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, i(0))
}
, function(e, t) {
    e.exports = ' <div class="qy-checking-bind-container"> <div class="qy-checking-title"> <span class="close-link"> <i class="iconfont icon-close" data-bindphone="close"></i> </span> </div> <div class="qy-login-form"> <div class="login-form-inner"> <div class="login-form"> <div class="qy-verify-title"> <div class="title-content align-left"> <div class="major-desc"> <p>安全校验</p> </div> <div class="minor-desc minor-desc-common"> <div class="minor-desc-item"> 手机号（<span>{{phone}}</span>）已被{{account}}账号绑定，仅可作为本账号的登录身份验证，不能绑定本账号。</div> </div> </div> </div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major-show" data-bindphone="login">继续登录</div> </div> <div class="btn-common btn-minor-bind" data-bindphone="back">绑定其他手机号</div> </div> </div> </div> </div> </div>'
}
, function(t, n, d) {
    (function(c) {
        var e = function(e, t, n) {
            var i = d(6)
              , s = d(1)
              , a = d(7)
              , o = d(5)
              , r = d(2);
            n.exports = c.Class("bindPhoneService", {
                "construct": function() {
                    this._remoteInterface = new i({
                        "directBindPhone": {
                            "url": o.directBindPhone
                        },
                        "verifyAccount": {
                            "url": o.verifyAccount
                        },
                        "bindLogin": {
                            "url": o.bindLogin
                        }
                    })
                },
                "methods": {
                    "baseData": function(e, t, n) {
                        var i = r.getConfig()
                          , o = {
                            "agenttype": i.agenttype,
                            "app_version": i.appVersion || "",
                            "area_code": e.acode,
                            "authCode": e.authCode,
                            "cellphoneNumber": e.phone,
                            "device_id": i.deviceid || c.cookie.get("QC005_PCA") || "",
                            "dfp": ""
                        };
                        o.fromSDK = i.fromSDK,
                        o.lang = "",
                        o.ptid = i.ptid,
                        e.requestType && (o.requestType = e.requestType),
                        o.sdk_version = i.sdk_version,
                        o.serviceId = 2,
                        e.token && (o.token = e.token),
                        a.getDFP(function(e) {
                            o.dfp = e,
                            t && s.isCors() && (o.qd_sc = c.md5(decodeURIComponent(s.jsonToQuery(o)) + i.secretKey)),
                            n(o)
                        })
                    },
                    "directBindPhone": function(e, t) {
                        var n = this;
                        this.baseData(e, !1, function(e) {
                            n._send("directBindPhone", e, t, !1)
                        })
                    },
                    "verifyAccount": function(e, t) {
                        var n = this;
                        this.baseData(e, !0, function(e) {
                            n._send("verifyAccount", e, t, !0)
                        })
                    },
                    "bindLogin": function(e, t) {
                        var n = this;
                        this.baseData(e, !0, function(e) {
                            n._send("bindLogin", e, t, !0)
                        })
                    },
                    "_send": function(e, t, n, i) {
                        this._remoteInterface.send({
                            "ifname": e,
                            "param": t,
                            "needMd5": i
                        }, function(e) {
                            n && n(e)
                        })
                    }
                }
            })
        }
        .call(n, d, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, d(0))
}
, function(t, n, i) {
    (function(r) {
        var e = function(e, t, n) {
            var c = i(1)
              , o = i(2)
              , d = i(3);
            n.exports = r.Class("verifyCenterAction", {
                "construct": function(e) {
                    this._instance = null,
                    this.timer = null,
                    this.slideCover = e.slideCover,
                    this.slidePanel = e.slidePanel
                },
                "methods": {
                    "init": function(e) {
                        window.VerifyCenter ? e && "function" == typeof e && e() : (r.load("css", "//security.iqiyi.com/static/v2/verifycenter/css/verifycenter.css"),
                        this.isLoadSuc(e),
                        r.load("js", "//security.iqiyi.com/static/v2/verifycenter/js/verifycenter.js", function() {
                            window.VerifyCenter && e && "function" == typeof e && e()
                        }))
                    },
                    "callSDK": function(t, n, i) {
                        var e = document.querySelector('[data-login-sdk="mask"]')
                          , o = document.querySelector('[data-login-sdk="slideCover-close"]')
                          , s = document.querySelector('[data-login-sdk="slideCover"]')
                          , a = function a() {
                            d.addClass(s, "dn"),
                            d.addClass(e, "dn")
                        };
                        c.on(o, "click", a);
                        var r = this;
                        this.init(function() {
                            var e;
                            window.VerifyCenter && t.data && t.data.data ? (e = t.data.data,
                            n.token = e.token,
                            3 == e.auth_type && 2 == e.level && 1 == e.secure_page ? r.slideCode(n, i) : 11 == e.auth_type ? r.autoVerify(n, i) : n.ErrCb()) : n.ErrCb()
                        })
                    },
                    "isLoadSuc": function(e) {
                        var t = this;
                        clearTimeout(this.timer),
                        this.timer = setTimeout(function() {
                            clearTimeout(t.timer),
                            window.__newVC || e()
                        }, 5e3)
                    },
                    "slideCode": function(e, t) {
                        var n = this
                          , i = document.querySelector('[data-login-sdk="mask"]')
                          , e = this._getCommonParams(e)
                          , e = r.extend({
                            "callback": function(e) {
                                "A00000" === e.code && (n._instance && (n._instance.remove(),
                                n._instance = null,
                                d.addClass(n.slideCover, "dn"),
                                d.addClass(i, "dn")),
                                t(e.token),
                                d.addClass(n.slideCover, "dn"),
                                d.addClass(i, "dn"))
                            },
                            "captchaType": "slidecode"
                        }, e);
                        this._instance = new VerifyCenter(e)
                    },
                    "autoVerify": function(e, i) {
                        var o = document.querySelector('[data-login-sdk="mask"]')
                          , s = this
                          , t = this._getCommonParams(e)
                          , a = this.slidePanel
                          , t = r.extend({
                            "callback": function(e) {
                                if ("A00000" === e.code) {
                                    s._instance && (s._instance.remove(),
                                    s._instance = null);
                                    try {
                                        var t = a.children && a.children[0];
                                        a.removeChild(t),
                                        d.addClass(s.slideCover, "dn"),
                                        d.addClass(o, "dn")
                                    } catch (n) {}
                                    e = e.token || e.data.initData.token;
                                    i(e),
                                    d.addClass(s.slideCover, "dn"),
                                    d.addClass(o, "dn")
                                }
                            },
                            "triggerElement": e.triggerElement,
                            "bindEvent": "click",
                            "captchaType": "auto",
                            "isShowModalCloseBtn": !0,
                            "ignoreJsBridge": !0,
                            "reportImmediate": !0
                        }, t);
                        this._instance = new VerifyCenter(t)
                    },
                    "_getCommonParams": function(e) {
                        var t = document.querySelector('[data-login-sdk="mask"]')
                          , n = o.getConfig()
                          , i = this
                          , n = {
                            "wrapper": this.slidePanel,
                            "type": !1,
                            "initErrorCallback": function() {
                                e.errCb && e.errCb()
                            },
                            "DomLoadCallback": function() {
                                d.removeClass(i.slideCover, "dn"),
                                d.removeClass(t, "dn"),
                                i.slidePanel.style.display = "block",
                                e.loadCb && e.loadCb()
                            },
                            "closeCallback": function() {
                                d.addClass(i.slideCover, "dn"),
                                d.addClass(t, "dn")
                            },
                            "ptid": n.ptid,
                            "agentType": n.agenttype,
                            "deviceId": n.deviceid || r.cookie.get("QC005_PCA") || r.cookie.get("QC005") || "",
                            "clientVersion": 1,
                            "phoneNumber": e.phone,
                            "areaCode": "" + e.acode || "86",
                            "requestType": e.requestType,
                            "isShowModalCloseBtn": !0,
                            "dfp": n.dfp || window.dfp && dfp.tryGetFingerPrint && dfp.tryGetFingerPrint() || "",
                            "token": e.token,
                            "width": 296,
                            "height": 212,
                            "mode": "dark"
                        };
                        return this._instance && this._instance.remove(),
                        n
                    }
                }
            })
        }
        .call(n, i, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, i(0))
}
, function(t, n, b) {
    (function(y) {
        var e = function(e, t, n) {
            var i = b(10)
              , o = (b(12),
            b(1))
              , s = b(3)
              , a = b(4)
              , r = b(11)
              , c = b(88)
              , a = b(4)
              , d = b(89)
              , l = b(8)
              , u = b(15)
              , h = b(9)
              , p = u.getDomain()
              , f = {
                "P00950": "safeVerify",
                "P00951": "togglePanel"
            }
              , g = "viplgctrl_upsmssucv2"
              , m = "viplgctrl_qqsucv2"
              , v = "viplgctrl_wxsucv2";
            n.exports = y.Class("secondVerifyAction", {
                "extend": i,
                "construct": function(e) {
                    console.log("opt", e),
                    this.panel = e.panel,
                    this.prePanel = null,
                    this.businessPanel = e.businessPanel,
                    this.sdkPanel = e.sdkPanel,
                    this.verifyPingbackType = 0,
                    this.isShow = !1,
                    this.isThirdLogin = e.isThirdLogin ? "isThirdLogin" : "noThirdLogin",
                    this.logger = new h.LoginLogger("QiyiLoginLoader"),
                    this.source = null
                },
                "methods": {
                    "init": function(e) {
                        this.prePanel = e.prePanel || "",
                        this.loginInfo = e.data || "",
                        this.sourceLogin = null != e && e.sourceLogin ? null == e ? void 0 : e.sourceLogin : "",
                        this.source = null == e ? void 0 : e.type,
                        this.setTimestamp(),
                        this.render(),
                        this.bindEvent()
                    },
                    "render": function() {
                        this.isShow = !0,
                        "safeVerify" == f[this.loginInfo.code] ? r.block({
                            "t": 22,
                            "rpage": "viplgctrlv2"
                        }) : r.block({
                            "t": 22,
                            "rpage": "viplgctrl_fbdv2"
                        });
                        var e = this.renderHtml(c, {
                            "showPanel": f[this.loginInfo.code],
                            "msg": this.loginInfo.msg,
                            "isThirdLogin": this.isThirdLogin
                        });
                        this.panel = document.querySelector('[data-login-sdk="secondVerify"]'),
                        this.panel.innerHTML = e,
                        this.logger.log("login secondVerify page render "),
                        this.doms = {
                            "mask": document.querySelector('[data-login-sdk="mask"]'),
                            "togglePanel": this.panel.querySelector('[data-secondVerify="togglePanel"]'),
                            "toggleAccountBtn": this.panel.querySelector('[data-secondVerify="toggleAccountBtn"]'),
                            "toggleAccount": this.panel.querySelector('[data-secondVerify="toggleAccount"]'),
                            "safeVerify": this.panel.querySelector('[data-secondVerify="safeVerify"]'),
                            "close": this.panel.querySelector('[data-secondVerify="close"]'),
                            "mainDevice": this.panel.querySelector('[data-secondVerify="mainDevice"]'),
                            "smsVerify": this.panel.querySelector('[data-secondVerify="smsVerify"]'),
                            "qrcode": this.panel.querySelector('[data-secondVerify="qrcode"]'),
                            "thirdList": this.panel.querySelector('[data-secondVerify="thirdList"]')
                        }
                    },
                    "showPanel": function() {
                        this.show(this.panel)
                    },
                    "bindEvent": function() {
                        var e = this;
                        o.on(e.doms.toggleAccountBtn, "click", e.toggleAccount.bind(this)),
                        o.on(e.doms.toggleAccount, "click", e.toggleAccount.bind(this)),
                        o.on(e.doms.close, "click", e.closeCli.bind(this)),
                        o.on(e.doms.mainDevice, "click", e.mainDeviceCallBack.bind(e)),
                        o.on(e.doms.smsVerify, "click", e.upSmsCode.bind(this)),
                        o.on(e.doms.thirdList, "click", e.thirdLogin.bind(this))
                    },
                    "closeCli": function() {
                        "loginToast" === this.source ? s.removeClass(this.prePanel, "dn") : s.addClass(this.doms.mask, "dn"),
                        s.addClass(this.panel, "dn")
                    },
                    "mainDeviceCallBack": function() {
                        var e;
                        this.logger.log("open mainDevice page info:".concat(JSON.stringify(null == this || null === (e = this.loginInfo) || void 0 === e ? void 0 : e.data))),
                        l.qosSend({
                            "diy_ec": "",
                            "diy_ls": "主设备扫码",
                            "diy_method": "6111"
                        }),
                        a.fire({
                            "type": "callScanLogin",
                            "data": {
                                "loginData": this.loginInfo.data,
                                "type": "deviceVerify",
                                "prePanel": this.panel
                            }
                        }),
                        this.hide(this.panel)
                    },
                    "upSmsCode": function() {
                        var e;
                        this.logger.log("open up sms page info:".concat(JSON.stringify(null == this || null === (e = this.loginInfo) || void 0 === e ? void 0 : e.data))),
                        this.verifyPingbackType = g,
                        l.qosSend({
                            "diy_ec": "",
                            "diy_ls": "短信上行",
                            "diy_method": "6112"
                        }),
                        a.fire({
                            "type": "callUpSmsCode",
                            "data": {
                                "loginData": this.loginInfo.data,
                                "type": "secondVerify",
                                "prePanel": this.panel,
                                "sourceLogin": this.sourceLogin || ""
                            }
                        }),
                        r.click({
                            "rpage": "viplgctrlv2",
                            "block": "viplgctrl_upsmsclick",
                            "rseat": "viplgctrl_upsmsclick"
                        }),
                        this.hide(this.panel)
                    },
                    "thirdLogin": function(e) {
                        e.stopPropagation && e.stopPropagation();
                        e = e.target || e.srcElement,
                        e = e && e.getAttribute("data-secondVerify");
                        "qq" === e ? (this.verifyPingbackType = m,
                        r.click({
                            "rpage": "viplgctrlv2",
                            "block": "viplgctrl_qqclick",
                            "rseat": "viplgctrl_qqclick"
                        })) : (this.verifyPingbackType = v,
                        r.click({
                            "rpage": "viplgctrlv2",
                            "block": "viplgctrl_wxclick",
                            "rseat": "viplgctrl_wxclick"
                        })),
                        a.fire({
                            "type": "callThirdLogin",
                            "data": {
                                "type": e,
                                "prePanel": this.panel
                            }
                        })
                    },
                    "toggleAccount": function(e) {
                        "toggleAccount" === e.target.dataset.secondverify && r.click({
                            "rpage": "viplgctrlv2",
                            "block": "viplgctrl_lg",
                            "rseat": "viplgctrl_lg"
                        }),
                        a.fire({
                            "type": "backShow",
                            "data": {
                                "resetShowPanel": !0
                            }
                        }),
                        this.hide(this.panel),
                        s.addClass(this.doms.mask, "dn")
                    },
                    "initVipBusiness": function() {
                        this.business = new d({
                            "panel": this.businessPanel,
                            "sdkPanel": this.sdkPanel
                        }),
                        this.business.renderVip()
                    },
                    "setTimestamp": function() {
                        var e = (e = y.cookie.get("QC160")) ? JSON.parse(e) : {}
                          , t = this.loginInfo.data.uid;
                        new Date;
                        "P00950" !== this.loginInfo.code && "P00951" !== this.loginInfo.code || (e.secondVerify = {
                            "uid": t,
                            "timestamp": +new Date
                        },
                        y.cookie.set("QC160", JSON.stringify(e), {
                            "expires": 31536e6,
                            "path": "/",
                            "domain": p
                        }),
                        a.fire({
                            "type": "updateLocalCookie",
                            "data": e
                        }))
                    },
                    "isInitVipBusiness": function() {
                        var e = (e = y.cookie.get("QC160")) ? JSON.parse(e) : {}
                          , t = y.cookie.get("P00003")
                          , n = +new Date;
                        0 !== this.verifyPingbackType && r.block({
                            "t": 22,
                            "rpage": this.verifyPingbackType
                        });
                        try {
                            return !!(this.isShow && e.secondVerify && e.secondVerify.uid != t && e.secondVerify.timestamp - n < 6048e5) && (this.initVipBusiness(),
                            !0)
                        } catch (i) {
                            console.log(i)
                        }
                    }
                }
            })
        }
        .call(n, b, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, b(0))
}
, function(e, t) {
    e.exports = '{{if showPanel == \'togglePanel\'}} <div class="qy-checking-container" data-secondVerify="togglePanel"> <div class="qy-checking-title banner"> <img class="banner" src="//pic1.iqiyipic.com/lequ/20221115/e61a96f8ffb943ef86ea78d4ecd3b091.png"> <span class="close-link"> <i class="iconfont icon-close" data-secondVerify="close"></i> </span> </div> <div class="qy-login-form"> <div class="login-form-inner"> <div class="login-form"> <div class="qy-safe-title"> <div class="title-content align-left"> <div class="major-desc"> <p>安全验证</p> </div> <div class="minor-desc minor-desc-common"> <div class="minor-desc-item">当前会员账号已在多个设备上登录</div> <div class="minor-desc-item">为了您的会员权益和数据安全</div> <div class="minor-desc-item">无法在当前设备登录</div> </div> </div> </div> <div class="toggle-account" data-secondVerify="toggleAccountBtn">切换账号登录</div> </div> </div> </div> </div> {{else if showPanel == \'safeVerify\'}} <div class="qy-checking-container" data-secondVerify="safeVerify"> <div class="qy-checking-title"> <span class="close-link"> <i class="iconfont icon-close" data-secondVerify="close"></i> </span> </div> <div class="qy-login-form"> <div class="login-form-inner"> <div class="login-form"> <div class="qy-safe-title"> <div class="title-content align-left"> <div class="major-desc"> <p>安全验证</p> </div> <div class="minor-desc minor-desc-common"> <div class="minor-desc-item">本次登录存在安全风险，</div> <div class="minor-desc-item">为保护会员权益，继续登录请先验证设备。</div> </div> </div> </div> <div class="qy-login-btn qy-safe-btn"> <div class="btn-common btn-gap" data-secondVerify="mainDevice"> <div class="btn-inner btn-major-show">主设备扫码验证</div> </div> <div class="btn-common sns-verify" data-secondVerify="smsVerify"> <div class="btn-inner btn-major-show">发送短信验证</div> </div> </div> {{if isThirdLogin == \'isThirdLogin\'}} <div class="qy-login-sns"> <div class="sns-title">第三方授权验证 <div class="sns-title-line-leftV2"></div> <div class="sns-title-line-rightV2"></div> </div> <div class="sns-list" data-secondVerify="thirdList"> <a href="javascript:;" data-secondVerify="weixin" class="icon-login icon-login__weixin"></a> <a href="javascript:;" data-secondVerify="qq" class="icon-login icon-login__qq"></a> </div> </div> {{/if}} <div class="toggle-account" data-secondVerify="toggleAccount">切换账号登录</div> </div> </div> </div> </div> {{/if}}'
}
, function(t, n, s) {
    (function(p) {
        var e = function(e, t, n) {
            var i = s(10)
              , a = (s(12),
            s(1))
              , c = (s(3),
            s(4))
              , o = new (s(90))
              , d = s(91)
              , c = s(4)
              , l = s(2)
              , u = s(11)
              , h = "9e30b3f3aed7e090";
            n.exports = p.Class("businessAction", {
                "extend": i,
                "construct": function(e) {
                    this.panel = e.panel,
                    this.sdkPanel = e.sdkPanel,
                    this.pingbackParamsFromUrl = this.getPingbackParamsFromUrl()
                },
                "methods": {
                    "getPingbackParamsFromUrl": function() {
                        var e = window.location.href;
                        return {
                            "s2": a.getQueryValue(e, "vfrm") || "",
                            "s3": a.getQueryValue(e, "vfrmblk") || "",
                            "s4": a.getQueryValue(e, "vfrmrst") || ""
                        }
                    },
                    "renderVip": function(e) {
                        var t = l.getConfig()
                          , n = this
                          , i = {
                            "interfaceCode": h,
                            "P00001": p.cookie.get("P00001"),
                            "platform": "pca" == t.business ? "967c46be75eaaa1e" : "uwp-was" === t.business ? "a71e8c85906aa6eb" : "b6c13e26323c537d",
                            "qyid": t.deviceid || p.cookie.get("QC005_PCA") || p.cookie.get("QC005") || "",
                            "lang": "zh_cn",
                            "app_lm": "cn"
                        }
                          , o = n.pingbackParamsFromUrl
                          , s = o.s2
                          , a = o.s3
                          , r = o.s4;
                        this.getVipRecommendInfo(i, function(e) {
                            0 < e.length && e[0].interfaceData && "A00000" === e[0].interfaceData.respCode ? (n.vipBusinessData = e[0].interfaceData.respData.covers[0],
                            n.strategyCode = e[0].interfaceData.respData.strategyCode,
                            e = n.renderHtml(d, {
                                "business": "vip",
                                "data": n.vipBusinessData.detail
                            }),
                            n.panel.innerHTML = e,
                            n.doms = {
                                "close": n.panel.querySelector('[data-login-business="close"]'),
                                "btn": n.panel.querySelector('[data-login-business="btn"]')
                            },
                            n.bindEvent(),
                            "pca" == t.business && n.doms.close && (n.doms.close.style = n.doms.close.style || {},
                            n.doms.close.style.display = "none"),
                            n.showPanel(),
                            u.block({
                                "t": 21,
                                "bstp": 56,
                                "block": "9e30b3f3aed7e090",
                                "rpage": "viploginctrl_conv",
                                "inter_posi_code": h,
                                "strategy_code": n.strategyCode,
                                "cover_code": n.vipBusinessData.code,
                                "fc": n.vipBusinessData.fc,
                                "fv": n.vipBusinessData.fv || p.cookie.get("QC142") || "",
                                "s2": s,
                                "s3": a,
                                "s4": r
                            })) : setTimeout(function() {
                                c.fire({
                                    "type": "closeFloater"
                                })
                            }, 1500)
                        })
                    },
                    "showPanel": function() {
                        this.show(this.panel),
                        this.hide(this.sdkPanel)
                    },
                    "bindEvent": function() {
                        var n = this
                          , e = n.pingbackParamsFromUrl
                          , i = e.s2
                          , o = e.s3
                          , s = e.s4;
                        a.on(n.doms.close, "click", function() {
                            u.click({
                                "rseat": "vipctrl_popupclose",
                                "block": "vipctrl_click",
                                "rpage": "viploginctrl_conv"
                            }),
                            c.fire({
                                "type": "closeFloater"
                            })
                        }),
                        a.on(n.doms.btn, "click", function() {
                            u.click({
                                "rseat": "vipctrl_popuptobuy",
                                "block": "vipctrl_click",
                                "rpage": "viploginctrl_conv",
                                "fc": n.vipBusinessData.fc,
                                "fv": n.vipBusinessData.fv || p.cookie.get("QC142") || "",
                                "inter_posi_code": h,
                                "strategy_code": n.strategyCode,
                                "cover_code": n.vipBusinessData.code,
                                "s2": i,
                                "s3": o,
                                "s4": s
                            });
                            var e = n.vipBusinessData.detail.linkType.type
                              , t = n.vipBusinessData.detail.linkType;
                            "5" == e ? "pca" == l.getConfig().business ? n.openNativeCashier(t) : n.openVip(t) : "4" == e && (window.location.href = n.vipBusinessData.detail.linkType.url)
                        })
                    },
                    "getVipRecommendInfo": function(e, t) {
                        o.getVipRecommendInfo(e, function(e) {
                            t(e)
                        })
                    },
                    "openNativeCashier": function(e) {
                        var t = {
                            "fc": this.vipBusinessData.fc,
                            "fv": this.vipBusinessData.fv,
                            "product": "vip" === e.vipCashierType ? "gold" : e.vipCashierType,
                            "linkType": {
                                "vipProduct": e.vipProduct,
                                "autoRenew": e.autoRenew,
                                "type": "5",
                                "url": ""
                            }
                        };
                        try {
                            var n = '{"call_type":"request","cmd":"WJSShowNativeCashier","cmd_data":' + JSON.stringify(t) + "}";
                            console.log("openNativeCashier:" + n),
                            window.external.js_app_service(n),
                            u.block({
                                "t": 22,
                                "rpage": "viploginctrl_conv"
                            })
                        } catch (i) {}
                        setTimeout(function() {
                            window.close()
                        }, 500)
                    },
                    "openVip": function(e) {
                        var t = "vip" === e.vipCashierType ? "gold" : e.vipCashierType
                          , n = e.vipProduct
                          , i = "3" == e.autoRenew
                          , o = e.marketExtendContent || ""
                          , s = this;
                        window.sdkPackManager || p.load("js", "//stc.iqiyipic.com/js/sdkpack/sdkpackmanager.js", function() {
                            window.sdkPackManager.set({
                                "business": "1"
                            }),
                            window.sdkPackManager.require("vippay", function(e) {
                                e.init({
                                    "type": "vipPay",
                                    "isIgnoreArea": !1,
                                    "loadData": {
                                        "source": "pcw",
                                        "product": t,
                                        "packageAmount": n,
                                        "autoRenew": i,
                                        "fc": s.vipBusinessData.fc,
                                        "fv": s.vipBusinessData.fv || p.cookie.get("QC142") || "",
                                        "s2": "viploginctrl_conv",
                                        "s3": "vipctrl_click",
                                        "s4": "vipctrl_popuptobuy",
                                        "rpage": s.vipBusinessData.rpage || "",
                                        "marketExtendContent": o,
                                        "QC005": p.cookie.get("QC005_PCA") || p.cookie.get("QC005") || "",
                                        "abtest": p.cookie.get("QC189") || "",
                                        "external": {
                                            "hideAllVipBtn": "false",
                                            "hideJihuoBtn": "false"
                                        }
                                    },
                                    "register": {
                                        "showFloaterEve": function() {
                                            c.fire({
                                                "type": "closeFloater"
                                            })
                                        },
                                        "closeFloaterEve": function() {},
                                        "successPayEve": function() {}
                                    }
                                })
                            })
                        })
                    }
                }
            })
        }
        .call(n, s, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, s(0))
}
, function(t, n, s) {
    (function(o) {
        var e = function(e, t, n) {
            s(6),
            s(5),
            s(2);
            var i = s(20);
            n.exports = o.Class("businessSevice", {
                "construct": function() {
                    this._remoteInterface = {
                        "secondVipRecommend": "//act.vip.iqiyi.com/interact/api/v2/show"
                    }
                },
                "methods": {
                    "getVipRecommendInfo": function(e, t) {
                        i(this._remoteInterface.secondVipRecommend, {
                            "data": e,
                            "sign": !0,
                            "onsuccess": function(e) {
                                "A00000" === e.code ? t(e.data) : (console.log("会员接口请求失败"),
                                t(!1))
                            },
                            "onfailure": function() {
                                t(!1),
                                console.log("会员接口请求失败")
                            }
                        })
                    }
                }
            })
        }
        .call(n, s, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, s(0))
}
, function(e, t) {
    e.exports = '{{if business == \'vip\'}} <div class="qy-login-vip"> <div class="header"> <img class="banner" src="{{data.imgUrl1}}"/> <span class="iconfont icon-close" data-login-business="close"></span> </div> <div class="container"> <div class="title">{{data.text1}}</div> <div class="sub-title">{{data.text2}}</div> <div class="icon-list"> <div class="icon-item"> <img class="icon-img" src="{{data.icon1}}"/> <span class="text">{{data.iconText1}}</span> </div> <div class="icon-item"> <img class="icon-img" src="{{data.icon2}}"/> <span class="text">{{data.iconText2}}</span> </div> <div class="icon-item"> <img class="icon-img" src="{{data.icon3}}"/> <span class="text">{{data.iconText3}}</span> </div> <div class="icon-item"> <img class="icon-img" src="{{data.icon4}}"/> <span class="text">{{data.iconText4}}</span> </div> </div> <div class="button" data-login-business="btn">{{data.button}}</div> </div> </div> {{/if}} '
}
, function(t, n, c) {
    (function(r) {
        var e = function(e, t, n) {
            var i = c(5)
              , o = c(2)
              , s = c(20)
              , a = c(6);
            n.exports = {
                "_doSync": function(e) {
                    var t = o.getConfig()
                      , n = t.domain;
                    "iqiyi.com" != n && "pps.tv" != n || (n = {
                        "agenttype": e.agenttype || t.agenttype || "1",
                        "authcookie": r.cookie.get("P00001"),
                        "device_id": t.deviceid || r.cookie.get("QC005_PCA") || "",
                        "fromSDK": t.fromSDK || "1",
                        "sdk_version": t.sdk_version || "1.0.0"
                    },
                    e = i.delcookiePPS,
                    /pps/.test(t.domain) && (e = i.delcookieIQIYI),
                    s(e, {
                        "data": n,
                        "sign": !1,
                        "onsuccess": function() {},
                        "onfailure": function() {}
                    }))
                },
                "request": function(e, t) {
                    var n = o.getConfig();
                    this._doSync(e);
                    n = {
                        "authcookie": r.cookie.get("P00001"),
                        "agenttype": e.agenttype || n.agenttype || "1",
                        "app_version": n.appVersion || "",
                        "qyid": r.cookie.get("QC005_PCA") || r.cookie.get("QC005") || "",
                        "fromSDK": n.fromSDK || "1",
                        "noredirect": 1,
                        "opt_type": e.requestType,
                        "ptid": e.ptid || n.ptid || "01010021010000000000",
                        "sdk_version": n.sdk_version || "1.0.0"
                    };
                    new a({
                        "url": i.logout
                    }).send({
                        "param": n
                    }, function(e) {
                        t && t(e)
                    })
                }
            }
        }
        .call(n, c, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, c(0))
}
, function(t, n, s) {
    (function(d) {
        var e = function(e, t, n) {
            var i = s(6)
              , a = (s(16),
            s(7))
              , o = s(5)
              , r = s(2)
              , c = s(1);
            n.exports = d.Class("userInfoLoginService", {
                "construct": function() {
                    this.UserInfoInterface = new i({
                        "getUserInfo": {
                            "url": o.userInfo
                        }
                    })
                },
                "methods": {
                    "baseData": function(e, t) {
                        var n = r.getConfig();
                        return {
                            "agenttype": n.agenttype,
                            "ptid": n.ptid
                        }
                    },
                    "getUserInfo": function(e) {
                        param = this.baseData(),
                        this.cmd5x(param, "getUserInfo", e)
                    },
                    "cmd5x": function(t, n, i) {
                        var o = this
                          , s = r.getConfig();
                        a.getDFP(function(e) {
                            t.dfp = e,
                            t = o.sortKey(t),
                            c.isCors() && (t.qd_sc = d.md5(decodeURIComponent(c.jsonToQuery(t)) + s.secretKey)),
                            o.UserInfoInterface.send({
                                "ifname": n,
                                "param": t,
                                "needMd5": !0
                            }, function(e) {
                                i && i(e)
                            })
                        })
                    },
                    "cmd5xA": function(t, n, i) {
                        var o = this
                          , s = r.getConfig();
                        a.getDFP(function(e) {
                            t.dfp = e,
                            t = o.sortKey(t),
                            c.isCors() && (t.qd_sc = d.md5(decodeURIComponent(c.jsonToQuery(t)) + s.secretKey)),
                            o.UserInfoInterface.send({
                                "ifname": n,
                                "param": t,
                                "needMd5": !0
                            }, function(e) {
                                i && i(e)
                            })
                        })
                    },
                    "sortKey": function(e) {
                        for (var t = Object.keys(e).sort(), n = {}, i = 0; i < t.length; i++)
                            n[t[i]] = e[t[i]];
                        return n
                    }
                }
            })
        }
        .call(n, s, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, s(0))
}
, function(t, n, i) {
    (function(r) {
        var e = function(e, t, n) {
            var o = i(2)
              , s = i(20)
              , a = (i(7),
            i(5));
            n.exports = {
                "request": function() {
                    var e, t, n = o.getConfig(), i = n.domain;
                    "iqiyi.com" != i && "pps.tv" != i || (t = e = "",
                    t = /pps/.test(i) ? (e = a.ssoTokenPPS,
                    a.ssoCookieIQIYI) : (e = a.ssoTokenIQIYI,
                    a.ssoCookiePPS),
                    i = {
                        "agenttype": n.agenttype,
                        "callback": "callback",
                        "device_id": n.deviceid || r.cookie.get("QC005_PCA") || "",
                        "fromSDK": n.fromSDK,
                        "ptid": n.ptid,
                        "sdk_version": n.sdk_version
                    },
                    s(e, {
                        "data": i,
                        "sign": !0,
                        "onsuccess": function(e) {
                            e && "A00000" == e.code && e.data && e.data.token && (e = {
                                "agenttype": n.agenttype,
                                "callback": "callback",
                                "fromSDK": n.fromSDK,
                                "sdk_version": n.sdk_version,
                                "token": e.data.token
                            },
                            s(t, {
                                "data": e,
                                "sign": !0,
                                "onsuccess": function() {},
                                "onfailure": function() {}
                            }))
                        },
                        "onfailure": function() {}
                    }))
                }
            }
        }
        .call(n, i, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, i(0))
}
, function(t, n, d) {
    (function(c) {
        var e = function(e, t, n) {
            var s = d(2)
              , i = d(6)
              , o = (d(7),
            d(5))
              , a = d(1)
              , r = new i({
                "getUid": {
                    "url": o.getUid
                }
            });
            n.exports = {
                "request": function(t) {
                    var e, n, i = s.getConfig(), o = (i.domain,
                    {
                        "agenttype": i.agenttype,
                        "authcookie": c.cookie.get("P00001"),
                        "ptid": i.ptid
                    });
                    e = o,
                    i = "getUid",
                    n = function(e) {
                        "A00000" === e.code ? t(e.data) : t({})
                    }
                    ,
                    o = s.getConfig(),
                    a.isCors() && (e.qd_sc = c.md5(decodeURIComponent(a.jsonToQuery(e)) + o.secretKey)),
                    r.send({
                        "ifname": i,
                        "param": e,
                        "needMd5": !0
                    }, function(e) {
                        n && n(e)
                    })
                }
            }
        }
        .call(n, d, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, d(0))
}
, function(n, i, l) {
    (function(d) {
        var e;
        function t(t, e) {
            var n, i = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            i.push.apply(i, n)),
            i
        }
        function s(i) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? t(Object(o), !0).forEach(function(e) {
                    var t, n;
                    t = i,
                    e = o[n = e],
                    n in t ? Object.defineProperty(t, n, {
                        "value": e,
                        "enumerable": !0,
                        "configurable": !0,
                        "writable": !0
                    }) : t[n] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return i
        }
        (e = function(e, t, n) {
            var i = l(20)
              , a = l(7)
              , r = l(1)
              , o = l(6)
              , c = l(2);
            n.exports = d.Class("checkApp", {
                "construct": function() {
                    this.checkUrl = "http://127.0.0.1:16422/get_client_id",
                    this.refreshUrl = "https://passport.iqiyi.com/apis/sso/refresh_auth.action",
                    this.refreshAuthInterface = new o({
                        "refreshAuth": {
                            "url": this.refreshUrl
                        }
                    })
                },
                "methods": {
                    "checkApp": function(e, t) {
                        i(this.checkUrl, {
                            "data": s({
                                "ver": "5.2.15.2240",
                                "t": (new Date).getTime() || ""
                            }, e),
                            "onsuccess": function(e) {
                                "A00000" === e.code ? t(e.data) : t(!1)
                            },
                            "onfailure": function() {
                                t(!1)
                            }
                        })
                    },
                    "refreshAuth": function(e, t) {
                        this.cmd5x(e, "refreshAuth", t)
                    },
                    "cmd5x": function(t, n, i) {
                        var o = this;
                        c.initConfig();
                        var s = c.getConfig();
                        console.log("globalConfig", s),
                        a.getDFP(function(e) {
                            t.dfp = e,
                            t = o.sortKey(t),
                            console.log("param", t),
                            r.isCors() && (t.qd_sc = d.md5(decodeURIComponent(r.jsonToQuery(t)) + s.secretKey)),
                            o.refreshAuthInterface.send({
                                "ifname": n,
                                "param": t,
                                "needMd5": !0
                            }, function(e) {
                                i && i(e)
                            })
                        })
                    },
                    "sortKey": function(e) {
                        for (var t = Object.keys(e).sort(), n = {}, i = 0; i < t.length; i++)
                            n[t[i]] = e[t[i]];
                        return n
                    }
                }
            })
        }
        .call(i, l, i, n)) === undefined || (n.exports = e)
    }
    ).call(this, l(0))
}
, function(t, n, c) {
    (function(r) {
        var e = function(e, t, n) {
            var i = c(6)
              , s = c(1)
              , a = c(7)
              , o = c(5);
            n.exports = r.Class("deviceIdService", {
                "construct": function() {
                    this._remoteInterface = new i({
                        "deviceId": {
                            "url": o.getDevice
                        }
                    })
                },
                "methods": {
                    "deviceId": function(e, t) {
                        var n = this
                          , i = {
                            "cid": e,
                            "version": "1.0.0.1",
                            "timestamp": (new Date).getTime() || ""
                        }
                          , o = {
                            "cid": e,
                            "version": "1.0.0.1",
                            "key": "2cCq2fgeDNG-Eb8B%d]S.Ch<c]@uVN95"
                        };
                        a.getDFP(function(e) {
                            s.isCors() && (i.sign = r.md5(decodeURIComponent(s.jsonToQuery(o)))),
                            n._remoteInterface.send({
                                "ifname": "deviceId",
                                "param": i,
                                "needMd5": !0,
                                "withCredentials": !0
                            }, function(e) {
                                t && t(e)
                            })
                        })
                    }
                }
            })
        }
        .call(n, c, n, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, c(0))
}
]);

a = bc(16)
console.log(a.rsaFun('1234345'))
