/*! For license information please see 0.f92cc596.chunk.js.LICENSE.txt */
(window["webpackJsonp_bgb-sc-settle"] = window["webpackJsonp_bgb-sc-settle"] || []).push([[0], {
    1500: function(t, e, r) {
        t.exports = function t(e, r, n) {
            function i(s, u) {
                if (!r[s]) {
                    if (!e[s]) {
                        if (o)
                            return o(s, !0);
                        throw new Error("Cannot find module '" + s + "'")
                    }
                    var a = r[s] = {
                        exports: {}
                    };
                    e[s][0].call(a.exports, (function(t) {
                        return i(e[s][1][t] || t)
                    }
                    ), a, a.exports, t, e, r, n)
                }
                return r[s].exports
            }
            for (var o = !1, s = 0; s < n.length; s++)
                i(n[s]);
            return i
        }({
            1: [function(t, e, r) {
                (function(n, i, o, s, u, a, h, f, c) {
                    "use strict";
                    var l = t("crypto");
                    function p(t, e) {
                        return function(t, e) {
                            var r;
                            if (void 0 === (r = "passthrough" !== e.algorithm ? l.createHash(e.algorithm) : new b).write && (r.write = r.update,
                            r.end = r.update),
                            v(e, r).dispatch(t),
                            r.update || r.end(""),
                            r.digest)
                                return r.digest("buffer" === e.encoding ? void 0 : e.encoding);
                            var n = r.read();
                            return "buffer" !== e.encoding ? n.toString(e.encoding) : n
                        }(t, e = y(t, e))
                    }
                    (r = e.exports = p).sha1 = function(t) {
                        return p(t)
                    }
                    ,
                    r.keys = function(t) {
                        return p(t, {
                            excludeValues: !0,
                            algorithm: "sha1",
                            encoding: "hex"
                        })
                    }
                    ,
                    r.MD5 = function(t) {
                        return p(t, {
                            algorithm: "md5",
                            encoding: "hex"
                        })
                    }
                    ,
                    r.keysMD5 = function(t) {
                        return p(t, {
                            algorithm: "md5",
                            encoding: "hex",
                            excludeValues: !0
                        })
                    }
                    ;
                    var d = l.getHashes ? l.getHashes().slice() : ["sha1", "md5"];
                    d.push("passthrough");
                    var g = ["buffer", "hex", "binary", "base64"];
                    function y(t, e) {
                        e = e || {};
                        var r = {};
                        if (r.algorithm = e.algorithm || "sha1",
                        r.encoding = e.encoding || "hex",
                        r.excludeValues = !!e.excludeValues,
                        r.algorithm = r.algorithm.toLowerCase(),
                        r.encoding = r.encoding.toLowerCase(),
                        r.ignoreUnknown = !0 === e.ignoreUnknown,
                        r.respectType = !1 !== e.respectType,
                        r.respectFunctionNames = !1 !== e.respectFunctionNames,
                        r.respectFunctionProperties = !1 !== e.respectFunctionProperties,
                        r.unorderedArrays = !0 === e.unorderedArrays,
                        r.unorderedSets = !1 !== e.unorderedSets,
                        r.unorderedObjects = !1 !== e.unorderedObjects,
                        r.replacer = e.replacer || void 0,
                        r.excludeKeys = e.excludeKeys || void 0,
                        void 0 === t)
                            throw new Error("Object argument required.");
                        for (var n = 0; n < d.length; ++n)
                            d[n].toLowerCase() === r.algorithm.toLowerCase() && (r.algorithm = d[n]);
                        if (-1 === d.indexOf(r.algorithm))
                            throw new Error('Algorithm "' + r.algorithm + '"  not supported. supported values: ' + d.join(", "));
                        if (-1 === g.indexOf(r.encoding) && "passthrough" !== r.algorithm)
                            throw new Error('Encoding "' + r.encoding + '"  not supported. supported values: ' + g.join(", "));
                        return r
                    }
                    function m(t) {
                        if ("function" == typeof t)
                            return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(t))
                    }
                    function v(t, e, r) {
                        function n(t) {
                            return e.update ? e.update(t, "utf8") : e.write(t, "utf8")
                        }
                        return r = r || [],
                        {
                            dispatch: function(e) {
                                return t.replacer && (e = t.replacer(e)),
                                this["_" + (null === e ? "null" : typeof e)](e)
                            },
                            _object: function(e) {
                                var i, s = Object.prototype.toString.call(e), u = /\[object (.*)\]/i.exec(s);
                                if (u = (u = u ? u[1] : "unknown:[" + s + "]").toLowerCase(),
                                0 <= (i = r.indexOf(e)))
                                    return this.dispatch("[CIRCULAR:" + i + "]");
                                if (r.push(e),
                                void 0 !== o && o.isBuffer && o.isBuffer(e))
                                    return n("buffer:"),
                                    n(e);
                                if ("object" === u || "function" === u || "asyncfunction" === u) {
                                    var a = Object.keys(e);
                                    t.unorderedObjects && (a = a.sort()),
                                    !1 === t.respectType || m(e) || a.splice(0, 0, "prototype", "__proto__", "constructor"),
                                    t.excludeKeys && (a = a.filter((function(e) {
                                        return !t.excludeKeys(e)
                                    }
                                    ))),
                                    n("object:" + a.length + ":");
                                    var h = this;
                                    return a.forEach((function(r) {
                                        h.dispatch(r),
                                        n(":"),
                                        t.excludeValues || h.dispatch(e[r]),
                                        n(",")
                                    }
                                    ))
                                }
                                if (!this["_" + u]) {
                                    if (t.ignoreUnknown)
                                        return n("[" + u + "]");
                                    throw new Error('Unknown object type "' + u + '"')
                                }
                                this["_" + u](e)
                            },
                            _array: function(e, i) {
                                i = void 0 !== i ? i : !1 !== t.unorderedArrays;
                                var o = this;
                                if (n("array:" + e.length + ":"),
                                !i || e.length <= 1)
                                    return e.forEach((function(t) {
                                        return o.dispatch(t)
                                    }
                                    ));
                                var s = []
                                  , u = e.map((function(e) {
                                    var n = new b
                                      , i = r.slice();
                                    return v(t, n, i).dispatch(e),
                                    s = s.concat(i.slice(r.length)),
                                    n.read().toString()
                                }
                                ));
                                return r = r.concat(s),
                                u.sort(),
                                this._array(u, !1)
                            },
                            _date: function(t) {
                                return n("date:" + t.toJSON())
                            },
                            _symbol: function(t) {
                                return n("symbol:" + t.toString())
                            },
                            _error: function(t) {
                                return n("error:" + t.toString())
                            },
                            _boolean: function(t) {
                                return n("bool:" + t.toString())
                            },
                            _string: function(t) {
                                n("string:" + t.length + ":"),
                                n(t.toString())
                            },
                            _function: function(e) {
                                n("fn:"),
                                m(e) ? this.dispatch("[native]") : this.dispatch(e.toString()),
                                !1 !== t.respectFunctionNames && this.dispatch("function-name:" + String(e.name)),
                                t.respectFunctionProperties && this._object(e)
                            },
                            _number: function(t) {
                                return n("number:" + t.toString())
                            },
                            _xml: function(t) {
                                return n("xml:" + t.toString())
                            },
                            _null: function() {
                                return n("Null")
                            },
                            _undefined: function() {
                                return n("Undefined")
                            },
                            _regexp: function(t) {
                                return n("regex:" + t.toString())
                            },
                            _uint8array: function(t) {
                                return n("uint8array:"),
                                this.dispatch(Array.prototype.slice.call(t))
                            },
                            _uint8clampedarray: function(t) {
                                return n("uint8clampedarray:"),
                                this.dispatch(Array.prototype.slice.call(t))
                            },
                            _int8array: function(t) {
                                return n("uint8array:"),
                                this.dispatch(Array.prototype.slice.call(t))
                            },
                            _uint16array: function(t) {
                                return n("uint16array:"),
                                this.dispatch(Array.prototype.slice.call(t))
                            },
                            _int16array: function(t) {
                                return n("uint16array:"),
                                this.dispatch(Array.prototype.slice.call(t))
                            },
                            _uint32array: function(t) {
                                return n("uint32array:"),
                                this.dispatch(Array.prototype.slice.call(t))
                            },
                            _int32array: function(t) {
                                return n("uint32array:"),
                                this.dispatch(Array.prototype.slice.call(t))
                            },
                            _float32array: function(t) {
                                return n("float32array:"),
                                this.dispatch(Array.prototype.slice.call(t))
                            },
                            _float64array: function(t) {
                                return n("float64array:"),
                                this.dispatch(Array.prototype.slice.call(t))
                            },
                            _arraybuffer: function(t) {
                                return n("arraybuffer:"),
                                this.dispatch(new Uint8Array(t))
                            },
                            _url: function(t) {
                                return n("url:" + t.toString())
                            },
                            _map: function(e) {
                                n("map:");
                                var r = Array.from(e);
                                return this._array(r, !1 !== t.unorderedSets)
                            },
                            _set: function(e) {
                                n("set:");
                                var r = Array.from(e);
                                return this._array(r, !1 !== t.unorderedSets)
                            },
                            _file: function(t) {
                                return n("file:"),
                                this.dispatch([t.name, t.size, t.type, t.lastModfied])
                            },
                            _blob: function() {
                                if (t.ignoreUnknown)
                                    return n("[blob]");
                                throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')
                            },
                            _domwindow: function() {
                                return n("domwindow")
                            },
                            _bigint: function(t) {
                                return n("bigint:" + t.toString())
                            },
                            _process: function() {
                                return n("process")
                            },
                            _timer: function() {
                                return n("timer")
                            },
                            _pipe: function() {
                                return n("pipe")
                            },
                            _tcp: function() {
                                return n("tcp")
                            },
                            _udp: function() {
                                return n("udp")
                            },
                            _tty: function() {
                                return n("tty")
                            },
                            _statwatcher: function() {
                                return n("statwatcher")
                            },
                            _securecontext: function() {
                                return n("securecontext")
                            },
                            _connection: function() {
                                return n("connection")
                            },
                            _zlib: function() {
                                return n("zlib")
                            },
                            _context: function() {
                                return n("context")
                            },
                            _nodescript: function() {
                                return n("nodescript")
                            },
                            _httpparser: function() {
                                return n("httpparser")
                            },
                            _dataview: function() {
                                return n("dataview")
                            },
                            _signal: function() {
                                return n("signal")
                            },
                            _fsevent: function() {
                                return n("fsevent")
                            },
                            _tlswrap: function() {
                                return n("tlswrap")
                            }
                        }
                    }
                    function b() {
                        return {
                            buf: "",
                            write: function(t) {
                                this.buf += t
                            },
                            end: function(t) {
                                this.buf += t
                            },
                            read: function() {
                                return this.buf
                            }
                        }
                    }
                    r.writeToStream = function(t, e, r) {
                        return void 0 === r && (r = e,
                        e = {}),
                        v(e = y(t, e), r).dispatch(t)
                    }
                }
                ).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_7eac155c.js", "/")
            }
            , {
                buffer: 3,
                crypto: 5,
                lYpoI2: 10
            }],
            2: [function(t, e, r) {
                (function(t, e, n, i, o, s, u, a, h) {
                    !function(t) {
                        "use strict";
                        var e = "undefined" != typeof Uint8Array ? Uint8Array : Array
                          , r = "+".charCodeAt(0)
                          , n = "/".charCodeAt(0)
                          , i = "0".charCodeAt(0)
                          , o = "a".charCodeAt(0)
                          , s = "A".charCodeAt(0)
                          , u = "-".charCodeAt(0)
                          , a = "_".charCodeAt(0);
                        function h(t) {
                            var e = t.charCodeAt(0);
                            return e === r || e === u ? 62 : e === n || e === a ? 63 : e < i ? -1 : e < i + 10 ? e - i + 26 + 26 : e < s + 26 ? e - s : e < o + 26 ? e - o + 26 : void 0
                        }
                        t.toByteArray = function(t) {
                            var r, n;
                            if (0 < t.length % 4)
                                throw new Error("Invalid string. Length must be a multiple of 4");
                            var i = t.length
                              , o = "=" === t.charAt(i - 2) ? 2 : "=" === t.charAt(i - 1) ? 1 : 0
                              , s = new e(3 * t.length / 4 - o)
                              , u = 0 < o ? t.length - 4 : t.length
                              , a = 0;
                            function f(t) {
                                s[a++] = t
                            }
                            for (r = 0; r < u; r += 4,
                            0)
                                f((16711680 & (n = h(t.charAt(r)) << 18 | h(t.charAt(r + 1)) << 12 | h(t.charAt(r + 2)) << 6 | h(t.charAt(r + 3)))) >> 16),
                                f((65280 & n) >> 8),
                                f(255 & n);
                            return 2 == o ? f(255 & (n = h(t.charAt(r)) << 2 | h(t.charAt(r + 1)) >> 4)) : 1 == o && (f((n = h(t.charAt(r)) << 10 | h(t.charAt(r + 1)) << 4 | h(t.charAt(r + 2)) >> 2) >> 8 & 255),
                            f(255 & n)),
                            s
                        }
                        ,
                        t.fromByteArray = function(t) {
                            var e, r, n, i, o = t.length % 3, s = "";
                            function u(t) {
                                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t)
                            }
                            for (e = 0,
                            n = t.length - o; e < n; e += 3)
                                s += u((i = r = (t[e] << 16) + (t[e + 1] << 8) + t[e + 2]) >> 18 & 63) + u(i >> 12 & 63) + u(i >> 6 & 63) + u(63 & i);
                            switch (o) {
                            case 1:
                                s += u((r = t[t.length - 1]) >> 2),
                                s += u(r << 4 & 63),
                                s += "==";
                                break;
                            case 2:
                                s += u((r = (t[t.length - 2] << 8) + t[t.length - 1]) >> 10),
                                s += u(r >> 4 & 63),
                                s += u(r << 2 & 63),
                                s += "="
                            }
                            return s
                        }
                    }(void 0 === r ? this.base64js = {} : r)
                }
                ).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib")
            }
            , {
                buffer: 3,
                lYpoI2: 10
            }],
            3: [function(t, e, r) {
                (function(e, n, i, o, s, u, a, h, f) {
                    var c = t("base64-js")
                      , l = t("ieee754");
                    function i(t, e, r) {
                        if (!(this instanceof i))
                            return new i(t,e,r);
                        var n, o, s, u, a, h = typeof t;
                        if ("base64" === e && "string" == h)
                            for (t = (n = t).trim ? n.trim() : n.replace(/^\s+|\s+$/g, ""); t.length % 4 != 0; )
                                t += "=";
                        if ("number" == h)
                            o = _(t);
                        else if ("string" == h)
                            o = i.byteLength(t, e);
                        else {
                            if ("object" != h)
                                throw new Error("First argument needs to be a number, array or string.");
                            o = _(t.length)
                        }
                        if (i._useTypedArrays ? s = i._augment(new Uint8Array(o)) : ((s = this).length = o,
                        s._isBuffer = !0),
                        i._useTypedArrays && "number" == typeof t.byteLength)
                            s._set(t);
                        else if (O(a = t) || i.isBuffer(a) || a && "object" == typeof a && "number" == typeof a.length)
                            for (u = 0; u < o; u++)
                                i.isBuffer(t) ? s[u] = t.readUInt8(u) : s[u] = t[u];
                        else if ("string" == h)
                            s.write(t, 0, e);
                        else if ("number" == h && !i._useTypedArrays && !r)
                            for (u = 0; u < o; u++)
                                s[u] = 0;
                        return s
                    }
                    function p(t, e, r, n) {
                        return i._charsWritten = M(function(t) {
                            for (var e = [], r = 0; r < t.length; r++)
                                e.push(255 & t.charCodeAt(r));
                            return e
                        }(e), t, r, n)
                    }
                    function d(t, e, r, n) {
                        return i._charsWritten = M(function(t) {
                            for (var e, r, n, i = [], o = 0; o < t.length; o++)
                                r = (e = t.charCodeAt(o)) >> 8,
                                n = e % 256,
                                i.push(n),
                                i.push(r);
                            return i
                        }(e), t, r, n)
                    }
                    function g(t, e, r) {
                        var n = "";
                        r = Math.min(t.length, r);
                        for (var i = e; i < r; i++)
                            n += String.fromCharCode(t[i]);
                        return n
                    }
                    function y(t, e, r, n) {
                        n || (q("boolean" == typeof r, "missing or invalid endian"),
                        q(null != e, "missing offset"),
                        q(e + 1 < t.length, "Trying to read beyond buffer length"));
                        var i, o = t.length;
                        if (!(o <= e))
                            return r ? (i = t[e],
                            e + 1 < o && (i |= t[e + 1] << 8)) : (i = t[e] << 8,
                            e + 1 < o && (i |= t[e + 1])),
                            i
                    }
                    function m(t, e, r, n) {
                        n || (q("boolean" == typeof r, "missing or invalid endian"),
                        q(null != e, "missing offset"),
                        q(e + 3 < t.length, "Trying to read beyond buffer length"));
                        var i, o = t.length;
                        if (!(o <= e))
                            return r ? (e + 2 < o && (i = t[e + 2] << 16),
                            e + 1 < o && (i |= t[e + 1] << 8),
                            i |= t[e],
                            e + 3 < o && (i += t[e + 3] << 24 >>> 0)) : (e + 1 < o && (i = t[e + 1] << 16),
                            e + 2 < o && (i |= t[e + 2] << 8),
                            e + 3 < o && (i |= t[e + 3]),
                            i += t[e] << 24 >>> 0),
                            i
                    }
                    function v(t, e, r, n) {
                        if (n || (q("boolean" == typeof r, "missing or invalid endian"),
                        q(null != e, "missing offset"),
                        q(e + 1 < t.length, "Trying to read beyond buffer length")),
                        !(t.length <= e)) {
                            var i = y(t, e, r, !0);
                            return 32768 & i ? -1 * (65535 - i + 1) : i
                        }
                    }
                    function b(t, e, r, n) {
                        if (n || (q("boolean" == typeof r, "missing or invalid endian"),
                        q(null != e, "missing offset"),
                        q(e + 3 < t.length, "Trying to read beyond buffer length")),
                        !(t.length <= e)) {
                            var i = m(t, e, r, !0);
                            return 2147483648 & i ? -1 * (4294967295 - i + 1) : i
                        }
                    }
                    function w(t, e, r, n) {
                        return n || (q("boolean" == typeof r, "missing or invalid endian"),
                        q(e + 3 < t.length, "Trying to read beyond buffer length")),
                        l.read(t, e, r, 23, 4)
                    }
                    function E(t, e, r, n) {
                        return n || (q("boolean" == typeof r, "missing or invalid endian"),
                        q(e + 7 < t.length, "Trying to read beyond buffer length")),
                        l.read(t, e, r, 52, 8)
                    }
                    function S(t, e, r, n, i) {
                        i || (q(null != e, "missing value"),
                        q("boolean" == typeof n, "missing or invalid endian"),
                        q(null != r, "missing offset"),
                        q(r + 1 < t.length, "trying to write beyond buffer length"),
                        C(e, 65535));
                        var o = t.length;
                        if (!(o <= r))
                            for (var s = 0, u = Math.min(o - r, 2); s < u; s++)
                                t[r + s] = (e & 255 << 8 * (n ? s : 1 - s)) >>> 8 * (n ? s : 1 - s)
                    }
                    function T(t, e, r, n, i) {
                        i || (q(null != e, "missing value"),
                        q("boolean" == typeof n, "missing or invalid endian"),
                        q(null != r, "missing offset"),
                        q(r + 3 < t.length, "trying to write beyond buffer length"),
                        C(e, 4294967295));
                        var o = t.length;
                        if (!(o <= r))
                            for (var s = 0, u = Math.min(o - r, 4); s < u; s++)
                                t[r + s] = e >>> 8 * (n ? s : 3 - s) & 255
                    }
                    function D(t, e, r, n, i) {
                        i || (q(null != e, "missing value"),
                        q("boolean" == typeof n, "missing or invalid endian"),
                        q(null != r, "missing offset"),
                        q(r + 1 < t.length, "Trying to write beyond buffer length"),
                        P(e, 32767, -32768)),
                        t.length <= r || S(t, 0 <= e ? e : 65535 + e + 1, r, n, i)
                    }
                    function B(t, e, r, n, i) {
                        i || (q(null != e, "missing value"),
                        q("boolean" == typeof n, "missing or invalid endian"),
                        q(null != r, "missing offset"),
                        q(r + 3 < t.length, "Trying to write beyond buffer length"),
                        P(e, 2147483647, -2147483648)),
                        t.length <= r || T(t, 0 <= e ? e : 4294967295 + e + 1, r, n, i)
                    }
                    function x(t, e, r, n, i) {
                        i || (q(null != e, "missing value"),
                        q("boolean" == typeof n, "missing or invalid endian"),
                        q(null != r, "missing offset"),
                        q(r + 3 < t.length, "Trying to write beyond buffer length"),
                        U(e, 34028234663852886e22, -34028234663852886e22)),
                        t.length <= r || l.write(t, e, r, n, 23, 4)
                    }
                    function A(t, e, r, n, i) {
                        i || (q(null != e, "missing value"),
                        q("boolean" == typeof n, "missing or invalid endian"),
                        q(null != r, "missing offset"),
                        q(r + 7 < t.length, "Trying to write beyond buffer length"),
                        U(e, 17976931348623157e292, -17976931348623157e292)),
                        t.length <= r || l.write(t, e, r, n, 52, 8)
                    }
                    r.Buffer = i,
                    r.SlowBuffer = i,
                    r.INSPECT_MAX_BYTES = 50,
                    i.poolSize = 8192,
                    i._useTypedArrays = function() {
                        try {
                            var t = new ArrayBuffer(0)
                              , e = new Uint8Array(t);
                            return e.foo = function() {
                                return 42
                            }
                            ,
                            42 === e.foo() && "function" == typeof e.subarray
                        } catch (t) {
                            return !1
                        }
                    }(),
                    i.isEncoding = function(t) {
                        switch (String(t).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "raw":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                        }
                    }
                    ,
                    i.isBuffer = function(t) {
                        return !(null == t || !t._isBuffer)
                    }
                    ,
                    i.byteLength = function(t, e) {
                        var r;
                        switch (t += "",
                        e || "utf8") {
                        case "hex":
                            r = t.length / 2;
                            break;
                        case "utf8":
                        case "utf-8":
                            r = N(t).length;
                            break;
                        case "ascii":
                        case "binary":
                        case "raw":
                            r = t.length;
                            break;
                        case "base64":
                            r = L(t).length;
                            break;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            r = 2 * t.length;
                            break;
                        default:
                            throw new Error("Unknown encoding")
                        }
                        return r
                    }
                    ,
                    i.concat = function(t, e) {
                        if (q(O(t), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),
                        0 === t.length)
                            return new i(0);
                        if (1 === t.length)
                            return t[0];
                        if ("number" != typeof e)
                            for (o = e = 0; o < t.length; o++)
                                e += t[o].length;
                        for (var r = new i(e), n = 0, o = 0; o < t.length; o++) {
                            var s = t[o];
                            s.copy(r, n),
                            n += s.length
                        }
                        return r
                    }
                    ,
                    i.prototype.write = function(t, e, r, n) {
                        var o;
                        isFinite(e) ? isFinite(r) || (n = r,
                        r = void 0) : (o = n,
                        n = e,
                        e = r,
                        r = o),
                        e = Number(e) || 0;
                        var s, u, a, h, f, c, l, g, y, m = this.length - e;
                        switch ((!r || m < (r = Number(r))) && (r = m),
                        n = String(n || "utf8").toLowerCase()) {
                        case "hex":
                            s = function(t, e, r, n) {
                                r = Number(r) || 0;
                                var o = t.length - r;
                                (!n || o < (n = Number(n))) && (n = o);
                                var s = e.length;
                                q(s % 2 == 0, "Invalid hex string"),
                                s / 2 < n && (n = s / 2);
                                for (var u = 0; u < n; u++) {
                                    var a = parseInt(e.substr(2 * u, 2), 16);
                                    q(!isNaN(a), "Invalid hex string"),
                                    t[r + u] = a
                                }
                                return i._charsWritten = 2 * u,
                                u
                            }(this, t, e, r);
                            break;
                        case "utf8":
                        case "utf-8":
                            c = this,
                            l = t,
                            g = e,
                            y = r,
                            s = i._charsWritten = M(N(l), c, g, y);
                            break;
                        case "ascii":
                        case "binary":
                            s = p(this, t, e, r);
                            break;
                        case "base64":
                            u = this,
                            a = t,
                            h = e,
                            f = r,
                            s = i._charsWritten = M(L(a), u, h, f);
                            break;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            s = d(this, t, e, r);
                            break;
                        default:
                            throw new Error("Unknown encoding")
                        }
                        return s
                    }
                    ,
                    i.prototype.toString = function(t, e, r) {
                        var n, i, o, s, u = this;
                        if (t = String(t || "utf8").toLowerCase(),
                        e = Number(e) || 0,
                        (r = void 0 !== r ? Number(r) : r = u.length) === e)
                            return "";
                        switch (t) {
                        case "hex":
                            n = function(t, e, r) {
                                var n = t.length;
                                (!e || e < 0) && (e = 0),
                                (!r || r < 0 || n < r) && (r = n);
                                for (var i = "", o = e; o < r; o++)
                                    i += V(t[o]);
                                return i
                            }(u, e, r);
                            break;
                        case "utf8":
                        case "utf-8":
                            n = function(t, e, r) {
                                var n = ""
                                  , i = "";
                                r = Math.min(t.length, r);
                                for (var o = e; o < r; o++)
                                    t[o] <= 127 ? (n += j(i) + String.fromCharCode(t[o]),
                                    i = "") : i += "%" + t[o].toString(16);
                                return n + j(i)
                            }(u, e, r);
                            break;
                        case "ascii":
                        case "binary":
                            n = g(u, e, r);
                            break;
                        case "base64":
                            i = u,
                            s = r,
                            n = 0 === (o = e) && s === i.length ? c.fromByteArray(i) : c.fromByteArray(i.slice(o, s));
                            break;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            n = function(t, e, r) {
                                for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2)
                                    i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                                return i
                            }(u, e, r);
                            break;
                        default:
                            throw new Error("Unknown encoding")
                        }
                        return n
                    }
                    ,
                    i.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    }
                    ,
                    i.prototype.copy = function(t, e, r, n) {
                        if (r = r || 0,
                        n || 0 === n || (n = this.length),
                        e = e || 0,
                        n !== r && 0 !== t.length && 0 !== this.length) {
                            q(r <= n, "sourceEnd < sourceStart"),
                            q(0 <= e && e < t.length, "targetStart out of bounds"),
                            q(0 <= r && r < this.length, "sourceStart out of bounds"),
                            q(0 <= n && n <= this.length, "sourceEnd out of bounds"),
                            n > this.length && (n = this.length),
                            t.length - e < n - r && (n = t.length - e + r);
                            var o = n - r;
                            if (o < 100 || !i._useTypedArrays)
                                for (var s = 0; s < o; s++)
                                    t[s + e] = this[s + r];
                            else
                                t._set(this.subarray(r, r + o), e)
                        }
                    }
                    ,
                    i.prototype.slice = function(t, e) {
                        var r = this.length;
                        if (t = R(t, r, 0),
                        e = R(e, r, r),
                        i._useTypedArrays)
                            return i._augment(this.subarray(t, e));
                        for (var n = e - t, o = new i(n,void 0,!0), s = 0; s < n; s++)
                            o[s] = this[s + t];
                        return o
                    }
                    ,
                    i.prototype.get = function(t) {
                        return this.readUInt8(t)
                    }
                    ,
                    i.prototype.set = function(t, e) {
                        return this.writeUInt8(t, e)
                    }
                    ,
                    i.prototype.readUInt8 = function(t, e) {
                        if (e || (q(null != t, "missing offset"),
                        q(t < this.length, "Trying to read beyond buffer length")),
                        !(t >= this.length))
                            return this[t]
                    }
                    ,
                    i.prototype.readUInt16LE = function(t, e) {
                        return y(this, t, !0, e)
                    }
                    ,
                    i.prototype.readUInt16BE = function(t, e) {
                        return y(this, t, !1, e)
                    }
                    ,
                    i.prototype.readUInt32LE = function(t, e) {
                        return m(this, t, !0, e)
                    }
                    ,
                    i.prototype.readUInt32BE = function(t, e) {
                        return m(this, t, !1, e)
                    }
                    ,
                    i.prototype.readInt8 = function(t, e) {
                        if (e || (q(null != t, "missing offset"),
                        q(t < this.length, "Trying to read beyond buffer length")),
                        !(t >= this.length))
                            return 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                    }
                    ,
                    i.prototype.readInt16LE = function(t, e) {
                        return v(this, t, !0, e)
                    }
                    ,
                    i.prototype.readInt16BE = function(t, e) {
                        return v(this, t, !1, e)
                    }
                    ,
                    i.prototype.readInt32LE = function(t, e) {
                        return b(this, t, !0, e)
                    }
                    ,
                    i.prototype.readInt32BE = function(t, e) {
                        return b(this, t, !1, e)
                    }
                    ,
                    i.prototype.readFloatLE = function(t, e) {
                        return w(this, t, !0, e)
                    }
                    ,
                    i.prototype.readFloatBE = function(t, e) {
                        return w(this, t, !1, e)
                    }
                    ,
                    i.prototype.readDoubleLE = function(t, e) {
                        return E(this, t, !0, e)
                    }
                    ,
                    i.prototype.readDoubleBE = function(t, e) {
                        return E(this, t, !1, e)
                    }
                    ,
                    i.prototype.writeUInt8 = function(t, e, r) {
                        r || (q(null != t, "missing value"),
                        q(null != e, "missing offset"),
                        q(e < this.length, "trying to write beyond buffer length"),
                        C(t, 255)),
                        e >= this.length || (this[e] = t)
                    }
                    ,
                    i.prototype.writeUInt16LE = function(t, e, r) {
                        S(this, t, e, !0, r)
                    }
                    ,
                    i.prototype.writeUInt16BE = function(t, e, r) {
                        S(this, t, e, !1, r)
                    }
                    ,
                    i.prototype.writeUInt32LE = function(t, e, r) {
                        T(this, t, e, !0, r)
                    }
                    ,
                    i.prototype.writeUInt32BE = function(t, e, r) {
                        T(this, t, e, !1, r)
                    }
                    ,
                    i.prototype.writeInt8 = function(t, e, r) {
                        r || (q(null != t, "missing value"),
                        q(null != e, "missing offset"),
                        q(e < this.length, "Trying to write beyond buffer length"),
                        P(t, 127, -128)),
                        e >= this.length || (0 <= t ? this.writeUInt8(t, e, r) : this.writeUInt8(255 + t + 1, e, r))
                    }
                    ,
                    i.prototype.writeInt16LE = function(t, e, r) {
                        D(this, t, e, !0, r)
                    }
                    ,
                    i.prototype.writeInt16BE = function(t, e, r) {
                        D(this, t, e, !1, r)
                    }
                    ,
                    i.prototype.writeInt32LE = function(t, e, r) {
                        B(this, t, e, !0, r)
                    }
                    ,
                    i.prototype.writeInt32BE = function(t, e, r) {
                        B(this, t, e, !1, r)
                    }
                    ,
                    i.prototype.writeFloatLE = function(t, e, r) {
                        x(this, t, e, !0, r)
                    }
                    ,
                    i.prototype.writeFloatBE = function(t, e, r) {
                        x(this, t, e, !1, r)
                    }
                    ,
                    i.prototype.writeDoubleLE = function(t, e, r) {
                        A(this, t, e, !0, r)
                    }
                    ,
                    i.prototype.writeDoubleBE = function(t, e, r) {
                        A(this, t, e, !1, r)
                    }
                    ,
                    i.prototype.fill = function(t, e, r) {
                        if (t = t || 0,
                        e = e || 0,
                        r = r || this.length,
                        "string" == typeof t && (t = t.charCodeAt(0)),
                        q("number" == typeof t && !isNaN(t), "value is not a number"),
                        q(e <= r, "end < start"),
                        r !== e && 0 !== this.length) {
                            q(0 <= e && e < this.length, "start out of bounds"),
                            q(0 <= r && r <= this.length, "end out of bounds");
                            for (var n = e; n < r; n++)
                                this[n] = t
                        }
                    }
                    ,
                    i.prototype.inspect = function() {
                        for (var t = [], e = this.length, n = 0; n < e; n++)
                            if (t[n] = V(this[n]),
                            n === r.INSPECT_MAX_BYTES) {
                                t[n + 1] = "...";
                                break
                            }
                        return "<Buffer " + t.join(" ") + ">"
                    }
                    ,
                    i.prototype.toArrayBuffer = function() {
                        if ("undefined" == typeof Uint8Array)
                            throw new Error("Buffer.toArrayBuffer not supported in this browser");
                        if (i._useTypedArrays)
                            return new i(this).buffer;
                        for (var t = new Uint8Array(this.length), e = 0, r = t.length; e < r; e += 1)
                            t[e] = this[e];
                        return t.buffer
                    }
                    ;
                    var I = i.prototype;
                    function R(t, e, r) {
                        return "number" != typeof t ? r : e <= (t = ~~t) ? e : 0 <= t || 0 <= (t += e) ? t : 0
                    }
                    function _(t) {
                        return (t = ~~Math.ceil(+t)) < 0 ? 0 : t
                    }
                    function O(t) {
                        return (Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        }
                        )(t)
                    }
                    function V(t) {
                        return t < 16 ? "0" + t.toString(16) : t.toString(16)
                    }
                    function N(t) {
                        for (var e = [], r = 0; r < t.length; r++) {
                            var n = t.charCodeAt(r);
                            if (n <= 127)
                                e.push(t.charCodeAt(r));
                            else {
                                var i = r;
                                55296 <= n && n <= 57343 && r++;
                                for (var o = encodeURIComponent(t.slice(i, r + 1)).substr(1).split("%"), s = 0; s < o.length; s++)
                                    e.push(parseInt(o[s], 16))
                            }
                        }
                        return e
                    }
                    function L(t) {
                        return c.toByteArray(t)
                    }
                    function M(t, e, r, n) {
                        for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); i++)
                            e[i + r] = t[i];
                        return i
                    }
                    function j(t) {
                        try {
                            return decodeURIComponent(t)
                        } catch (t) {
                            return String.fromCharCode(65533)
                        }
                    }
                    function C(t, e) {
                        q("number" == typeof t, "cannot write a non-number as a number"),
                        q(0 <= t, "specified a negative value for writing an unsigned value"),
                        q(t <= e, "value is larger than maximum value for type"),
                        q(Math.floor(t) === t, "value has a fractional component")
                    }
                    function P(t, e, r) {
                        q("number" == typeof t, "cannot write a non-number as a number"),
                        q(t <= e, "value larger than maximum allowed value"),
                        q(r <= t, "value smaller than minimum allowed value"),
                        q(Math.floor(t) === t, "value has a fractional component")
                    }
                    function U(t, e, r) {
                        q("number" == typeof t, "cannot write a non-number as a number"),
                        q(t <= e, "value larger than maximum allowed value"),
                        q(r <= t, "value smaller than minimum allowed value")
                    }
                    function q(t, e) {
                        if (!t)
                            throw new Error(e || "Failed assertion")
                    }
                    i._augment = function(t) {
                        return t._isBuffer = !0,
                        t._get = t.get,
                        t._set = t.set,
                        t.get = I.get,
                        t.set = I.set,
                        t.write = I.write,
                        t.toString = I.toString,
                        t.toLocaleString = I.toString,
                        t.toJSON = I.toJSON,
                        t.copy = I.copy,
                        t.slice = I.slice,
                        t.readUInt8 = I.readUInt8,
                        t.readUInt16LE = I.readUInt16LE,
                        t.readUInt16BE = I.readUInt16BE,
                        t.readUInt32LE = I.readUInt32LE,
                        t.readUInt32BE = I.readUInt32BE,
                        t.readInt8 = I.readInt8,
                        t.readInt16LE = I.readInt16LE,
                        t.readInt16BE = I.readInt16BE,
                        t.readInt32LE = I.readInt32LE,
                        t.readInt32BE = I.readInt32BE,
                        t.readFloatLE = I.readFloatLE,
                        t.readFloatBE = I.readFloatBE,
                        t.readDoubleLE = I.readDoubleLE,
                        t.readDoubleBE = I.readDoubleBE,
                        t.writeUInt8 = I.writeUInt8,
                        t.writeUInt16LE = I.writeUInt16LE,
                        t.writeUInt16BE = I.writeUInt16BE,
                        t.writeUInt32LE = I.writeUInt32LE,
                        t.writeUInt32BE = I.writeUInt32BE,
                        t.writeInt8 = I.writeInt8,
                        t.writeInt16LE = I.writeInt16LE,
                        t.writeInt16BE = I.writeInt16BE,
                        t.writeInt32LE = I.writeInt32LE,
                        t.writeInt32BE = I.writeInt32BE,
                        t.writeFloatLE = I.writeFloatLE,
                        t.writeFloatBE = I.writeFloatBE,
                        t.writeDoubleLE = I.writeDoubleLE,
                        t.writeDoubleBE = I.writeDoubleBE,
                        t.fill = I.fill,
                        t.inspect = I.inspect,
                        t.toArrayBuffer = I.toArrayBuffer,
                        t
                    }
                }
                ).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer")
            }
            , {
                "base64-js": 2,
                buffer: 3,
                ieee754: 11,
                lYpoI2: 10
            }],
            4: [function(t, e, r) {
                (function(r, n, i, o, s, u, a, h, f) {
                    i = t("buffer").Buffer;
                    var c = 4
                      , l = new i(c);
                    l.fill(0),
                    e.exports = {
                        hash: function(t, e, r, n) {
                            return i.isBuffer(t) || (t = new i(t)),
                            function(t, e, r) {
                                for (var n = new i(e), o = r ? n.writeInt32BE : n.writeInt32LE, s = 0; s < t.length; s++)
                                    o.call(n, t[s], 4 * s, !0);
                                return n
                            }(e(function(t, e) {
                                var r;
                                t.length % c != 0 && (r = t.length + (c - t.length % c),
                                t = i.concat([t, l], r));
                                for (var n = [], o = e ? t.readInt32BE : t.readInt32LE, s = 0; s < t.length; s += c)
                                    n.push(o.call(t, s));
                                return n
                            }(t, n), 8 * t.length), r, n)
                        }
                    }
                }
                ).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
            }
            , {
                buffer: 3,
                lYpoI2: 10
            }],
            5: [function(t, e, r) {
                (function(e, n, i, o, s, u, a, h, f) {
                    i = t("buffer").Buffer;
                    var c = t("./sha")
                      , l = t("./sha256")
                      , p = t("./rng")
                      , d = {
                        sha1: c,
                        sha256: l,
                        md5: t("./md5")
                    }
                      , g = 64
                      , y = new i(g);
                    function m(t, e) {
                        var r = d[t = t || "sha1"]
                          , n = [];
                        return r || v("algorithm:", t, "is not yet supported"),
                        {
                            update: function(t) {
                                return i.isBuffer(t) || (t = new i(t)),
                                n.push(t),
                                t.length,
                                this
                            },
                            digest: function(t) {
                                var o = i.concat(n)
                                  , s = e ? function(t, e, r) {
                                    i.isBuffer(e) || (e = new i(e)),
                                    i.isBuffer(r) || (r = new i(r)),
                                    e.length > g ? e = t(e) : e.length < g && (e = i.concat([e, y], g));
                                    for (var n = new i(g), o = new i(g), s = 0; s < g; s++)
                                        n[s] = 54 ^ e[s],
                                        o[s] = 92 ^ e[s];
                                    var u = t(i.concat([n, r]));
                                    return t(i.concat([o, u]))
                                }(r, e, o) : r(o);
                                return n = null,
                                t ? s.toString(t) : s
                            }
                        }
                    }
                    function v() {
                        var t = [].slice.call(arguments).join(" ");
                        throw new Error([t, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"))
                    }
                    y.fill(0),
                    r.createHash = function(t) {
                        return m(t)
                    }
                    ,
                    r.createHmac = m,
                    r.randomBytes = function(t, e) {
                        if (!e || !e.call)
                            return new i(p(t));
                        try {
                            e.call(this, void 0, new i(p(t)))
                        } catch (t) {
                            e(t)
                        }
                    }
                    ,
                    function(t, e) {
                        for (var r in t)
                            e(t[r], r)
                    }(["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], (function(t) {
                        r[t] = function() {
                            v("sorry,", t, "is not implemented yet")
                        }
                    }
                    ))
                }
                ).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
            }
            , {
                "./md5": 6,
                "./rng": 7,
                "./sha": 8,
                "./sha256": 9,
                buffer: 3,
                lYpoI2: 10
            }],
            6: [function(t, e, r) {
                (function(r, n, i, o, s, u, a, h, f) {
                    var c = t("./helpers");
                    function l(t, e) {
                        t[e >> 5] |= 128 << e % 32,
                        t[14 + (e + 64 >>> 9 << 4)] = e;
                        for (var r = 1732584193, n = -271733879, i = -1732584194, o = 271733878, s = 0; s < t.length; s += 16) {
                            var u = r
                              , a = n
                              , h = i
                              , f = o;
                            r = d(r, n, i, o, t[s + 0], 7, -680876936),
                            o = d(o, r, n, i, t[s + 1], 12, -389564586),
                            i = d(i, o, r, n, t[s + 2], 17, 606105819),
                            n = d(n, i, o, r, t[s + 3], 22, -1044525330),
                            r = d(r, n, i, o, t[s + 4], 7, -176418897),
                            o = d(o, r, n, i, t[s + 5], 12, 1200080426),
                            i = d(i, o, r, n, t[s + 6], 17, -1473231341),
                            n = d(n, i, o, r, t[s + 7], 22, -45705983),
                            r = d(r, n, i, o, t[s + 8], 7, 1770035416),
                            o = d(o, r, n, i, t[s + 9], 12, -1958414417),
                            i = d(i, o, r, n, t[s + 10], 17, -42063),
                            n = d(n, i, o, r, t[s + 11], 22, -1990404162),
                            r = d(r, n, i, o, t[s + 12], 7, 1804603682),
                            o = d(o, r, n, i, t[s + 13], 12, -40341101),
                            i = d(i, o, r, n, t[s + 14], 17, -1502002290),
                            r = g(r, n = d(n, i, o, r, t[s + 15], 22, 1236535329), i, o, t[s + 1], 5, -165796510),
                            o = g(o, r, n, i, t[s + 6], 9, -1069501632),
                            i = g(i, o, r, n, t[s + 11], 14, 643717713),
                            n = g(n, i, o, r, t[s + 0], 20, -373897302),
                            r = g(r, n, i, o, t[s + 5], 5, -701558691),
                            o = g(o, r, n, i, t[s + 10], 9, 38016083),
                            i = g(i, o, r, n, t[s + 15], 14, -660478335),
                            n = g(n, i, o, r, t[s + 4], 20, -405537848),
                            r = g(r, n, i, o, t[s + 9], 5, 568446438),
                            o = g(o, r, n, i, t[s + 14], 9, -1019803690),
                            i = g(i, o, r, n, t[s + 3], 14, -187363961),
                            n = g(n, i, o, r, t[s + 8], 20, 1163531501),
                            r = g(r, n, i, o, t[s + 13], 5, -1444681467),
                            o = g(o, r, n, i, t[s + 2], 9, -51403784),
                            i = g(i, o, r, n, t[s + 7], 14, 1735328473),
                            r = y(r, n = g(n, i, o, r, t[s + 12], 20, -1926607734), i, o, t[s + 5], 4, -378558),
                            o = y(o, r, n, i, t[s + 8], 11, -2022574463),
                            i = y(i, o, r, n, t[s + 11], 16, 1839030562),
                            n = y(n, i, o, r, t[s + 14], 23, -35309556),
                            r = y(r, n, i, o, t[s + 1], 4, -1530992060),
                            o = y(o, r, n, i, t[s + 4], 11, 1272893353),
                            i = y(i, o, r, n, t[s + 7], 16, -155497632),
                            n = y(n, i, o, r, t[s + 10], 23, -1094730640),
                            r = y(r, n, i, o, t[s + 13], 4, 681279174),
                            o = y(o, r, n, i, t[s + 0], 11, -358537222),
                            i = y(i, o, r, n, t[s + 3], 16, -722521979),
                            n = y(n, i, o, r, t[s + 6], 23, 76029189),
                            r = y(r, n, i, o, t[s + 9], 4, -640364487),
                            o = y(o, r, n, i, t[s + 12], 11, -421815835),
                            i = y(i, o, r, n, t[s + 15], 16, 530742520),
                            r = m(r, n = y(n, i, o, r, t[s + 2], 23, -995338651), i, o, t[s + 0], 6, -198630844),
                            o = m(o, r, n, i, t[s + 7], 10, 1126891415),
                            i = m(i, o, r, n, t[s + 14], 15, -1416354905),
                            n = m(n, i, o, r, t[s + 5], 21, -57434055),
                            r = m(r, n, i, o, t[s + 12], 6, 1700485571),
                            o = m(o, r, n, i, t[s + 3], 10, -1894986606),
                            i = m(i, o, r, n, t[s + 10], 15, -1051523),
                            n = m(n, i, o, r, t[s + 1], 21, -2054922799),
                            r = m(r, n, i, o, t[s + 8], 6, 1873313359),
                            o = m(o, r, n, i, t[s + 15], 10, -30611744),
                            i = m(i, o, r, n, t[s + 6], 15, -1560198380),
                            n = m(n, i, o, r, t[s + 13], 21, 1309151649),
                            r = m(r, n, i, o, t[s + 4], 6, -145523070),
                            o = m(o, r, n, i, t[s + 11], 10, -1120210379),
                            i = m(i, o, r, n, t[s + 2], 15, 718787259),
                            n = m(n, i, o, r, t[s + 9], 21, -343485551),
                            r = v(r, u),
                            n = v(n, a),
                            i = v(i, h),
                            o = v(o, f)
                        }
                        return Array(r, n, i, o)
                    }
                    function p(t, e, r, n, i, o) {
                        return v((s = v(v(e, t), v(n, o))) << (u = i) | s >>> 32 - u, r);
                        var s, u
                    }
                    function d(t, e, r, n, i, o, s) {
                        return p(e & r | ~e & n, t, e, i, o, s)
                    }
                    function g(t, e, r, n, i, o, s) {
                        return p(e & n | r & ~n, t, e, i, o, s)
                    }
                    function y(t, e, r, n, i, o, s) {
                        return p(e ^ r ^ n, t, e, i, o, s)
                    }
                    function m(t, e, r, n, i, o, s) {
                        return p(r ^ (e | ~n), t, e, i, o, s)
                    }
                    function v(t, e) {
                        var r = (65535 & t) + (65535 & e);
                        return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
                    }
                    e.exports = function(t) {
                        return c.hash(t, l, 16)
                    }
                }
                ).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
            }
            , {
                "./helpers": 4,
                buffer: 3,
                lYpoI2: 10
            }],
            7: [function(t, e, r) {
                (function(t, r, n, i, o, s, u, a, h) {
                    var f, c;
                    c = function(t) {
                        for (var e, r = new Array(t), n = 0; n < t; n++)
                            0 == (3 & n) && (e = 4294967296 * Math.random()),
                            r[n] = e >>> ((3 & n) << 3) & 255;
                        return r
                    }
                    ,
                    e.exports = f || c
                }
                ).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
            }
            , {
                buffer: 3,
                lYpoI2: 10
            }],
            8: [function(t, e, r) {
                (function(r, n, i, o, s, u, a, h, f) {
                    var c = t("./helpers");
                    function l(t, e) {
                        t[e >> 5] |= 128 << 24 - e % 32,
                        t[15 + (e + 64 >> 9 << 4)] = e;
                        for (var r, n, i, o, s, u = Array(80), a = 1732584193, h = -271733879, f = -1732584194, c = 271733878, l = -1009589776, g = 0; g < t.length; g += 16) {
                            for (var y = a, m = h, v = f, b = c, w = l, E = 0; E < 80; E++) {
                                u[E] = E < 16 ? t[g + E] : d(u[E - 3] ^ u[E - 8] ^ u[E - 14] ^ u[E - 16], 1);
                                var S = p(p(d(a, 5), (i = h,
                                o = f,
                                s = c,
                                (n = E) < 20 ? i & o | ~i & s : !(n < 40) && n < 60 ? i & o | i & s | o & s : i ^ o ^ s)), p(p(l, u[E]), (r = E) < 20 ? 1518500249 : r < 40 ? 1859775393 : r < 60 ? -1894007588 : -899497514));
                                l = c,
                                c = f,
                                f = d(h, 30),
                                h = a,
                                a = S
                            }
                            a = p(a, y),
                            h = p(h, m),
                            f = p(f, v),
                            c = p(c, b),
                            l = p(l, w)
                        }
                        return Array(a, h, f, c, l)
                    }
                    function p(t, e) {
                        var r = (65535 & t) + (65535 & e);
                        return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
                    }
                    function d(t, e) {
                        return t << e | t >>> 32 - e
                    }
                    e.exports = function(t) {
                        return c.hash(t, l, 20, !0)
                    }
                }
                ).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
            }
            , {
                "./helpers": 4,
                buffer: 3,
                lYpoI2: 10
            }],
            9: [function(t, e, r) {
                (function(r, n, i, o, s, u, a, h, f) {
                    function c(t, e) {
                        var r = (65535 & t) + (65535 & e);
                        return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
                    }
                    function l(t, e) {
                        return t >>> e | t << 32 - e
                    }
                    function p(t, e) {
                        var r, n, i, o, s, u, a, h, f, p, d = new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298), g = new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225), y = new Array(64);
                        t[e >> 5] |= 128 << 24 - e % 32,
                        t[15 + (e + 64 >> 9 << 4)] = e;
                        for (var m, v, b, w, E, S, T, D, B = 0; B < t.length; B += 16) {
                            r = g[0],
                            n = g[1],
                            i = g[2],
                            o = g[3],
                            s = g[4],
                            u = g[5],
                            a = g[6],
                            h = g[7];
                            for (var x = 0; x < 64; x++)
                                y[x] = x < 16 ? t[x + B] : c(c(c(l(D = y[x - 2], 17) ^ l(D, 19) ^ D >>> 10, y[x - 7]), l(T = y[x - 15], 7) ^ l(T, 18) ^ T >>> 3), y[x - 16]),
                                f = c(c(c(c(h, l(S = s, 6) ^ l(S, 11) ^ l(S, 25)), (E = s) & u ^ ~E & a), d[x]), y[x]),
                                p = c(l(w = r, 2) ^ l(w, 13) ^ l(w, 22), (m = r) & (v = n) ^ m & (b = i) ^ v & b),
                                h = a,
                                a = u,
                                u = s,
                                s = c(o, f),
                                o = i,
                                i = n,
                                n = r,
                                r = c(f, p);
                            g[0] = c(r, g[0]),
                            g[1] = c(n, g[1]),
                            g[2] = c(i, g[2]),
                            g[3] = c(o, g[3]),
                            g[4] = c(s, g[4]),
                            g[5] = c(u, g[5]),
                            g[6] = c(a, g[6]),
                            g[7] = c(h, g[7])
                        }
                        return g
                    }
                    var d = t("./helpers");
                    e.exports = function(t) {
                        return d.hash(t, p, 32, !0)
                    }
                }
                ).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
            }
            , {
                "./helpers": 4,
                buffer: 3,
                lYpoI2: 10
            }],
            10: [function(t, e, r) {
                (function(t, r, n, i, o, s, u, a, h) {
                    function f() {}
                    (t = e.exports = {}).nextTick = function() {
                        var t = "undefined" != typeof window && window.setImmediate
                          , e = "undefined" != typeof window && window.postMessage && window.addEventListener;
                        if (t)
                            return function(t) {
                                return window.setImmediate(t)
                            }
                            ;
                        if (e) {
                            var r = [];
                            return window.addEventListener("message", (function(t) {
                                var e = t.source;
                                e !== window && null !== e || "process-tick" !== t.data || (t.stopPropagation(),
                                0 < r.length && r.shift()())
                            }
                            ), !0),
                            function(t) {
                                r.push(t),
                                window.postMessage("process-tick", "*")
                            }
                        }
                        return function(t) {
                            setTimeout(t, 0)
                        }
                    }(),
                    t.title = "browser",
                    t.browser = !0,
                    t.env = {},
                    t.argv = [],
                    t.on = f,
                    t.addListener = f,
                    t.once = f,
                    t.off = f,
                    t.removeListener = f,
                    t.removeAllListeners = f,
                    t.emit = f,
                    t.binding = function(t) {
                        throw new Error("process.binding is not supported")
                    }
                    ,
                    t.cwd = function() {
                        return "/"
                    }
                    ,
                    t.chdir = function(t) {
                        throw new Error("process.chdir is not supported")
                    }
                }
                ).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process")
            }
            , {
                buffer: 3,
                lYpoI2: 10
            }],
            11: [function(t, e, r) {
                (function(t, e, n, i, o, s, u, a, h) {
                    r.read = function(t, e, r, n, i) {
                        var o, s, u = 8 * i - n - 1, a = (1 << u) - 1, h = a >> 1, f = -7, c = r ? i - 1 : 0, l = r ? -1 : 1, p = t[e + c];
                        for (c += l,
                        o = p & (1 << -f) - 1,
                        p >>= -f,
                        f += u; 0 < f; o = 256 * o + t[e + c],
                        c += l,
                        f -= 8)
                            ;
                        for (s = o & (1 << -f) - 1,
                        o >>= -f,
                        f += n; 0 < f; s = 256 * s + t[e + c],
                        c += l,
                        f -= 8)
                            ;
                        if (0 === o)
                            o = 1 - h;
                        else {
                            if (o === a)
                                return s ? NaN : 1 / 0 * (p ? -1 : 1);
                            s += Math.pow(2, n),
                            o -= h
                        }
                        return (p ? -1 : 1) * s * Math.pow(2, o - n)
                    }
                    ,
                    r.write = function(t, e, r, n, i, o) {
                        var s, u, a, h = 8 * o - i - 1, f = (1 << h) - 1, c = f >> 1, l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : o - 1, d = n ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                        for (e = Math.abs(e),
                        isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0,
                        s = f) : (s = Math.floor(Math.log(e) / Math.LN2),
                        e * (a = Math.pow(2, -s)) < 1 && (s--,
                        a *= 2),
                        2 <= (e += 1 <= s + c ? l / a : l * Math.pow(2, 1 - c)) * a && (s++,
                        a /= 2),
                        f <= s + c ? (u = 0,
                        s = f) : 1 <= s + c ? (u = (e * a - 1) * Math.pow(2, i),
                        s += c) : (u = e * Math.pow(2, c - 1) * Math.pow(2, i),
                        s = 0)); 8 <= i; t[r + p] = 255 & u,
                        p += d,
                        u /= 256,
                        i -= 8)
                            ;
                        for (s = s << i | u,
                        h += i; 0 < h; t[r + p] = 255 & s,
                        p += d,
                        s /= 256,
                        h -= 8)
                            ;
                        t[r + p - d] |= 128 * g
                    }
                }
                ).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/ieee754/index.js", "/node_modules/ieee754")
            }
            , {
                buffer: 3,
                lYpoI2: 10
            }]
        }, {}, [1])(1)
    },
    1510: function(t, e, r) {
        "use strict";
        var n = "0123456789abcdefghijklmnopqrstuvwxyz";
        function i(t) {
            return n.charAt(t)
        }
        function o(t, e) {
            return t & e
        }
        function s(t, e) {
            return t | e
        }
        function u(t, e) {
            return t ^ e
        }
        function a(t, e) {
            return t & ~e
        }
        function h(t) {
            if (0 == t)
                return -1;
            var e = 0;
            return 0 == (65535 & t) && (t >>= 16,
            e += 16),
            0 == (255 & t) && (t >>= 8,
            e += 8),
            0 == (15 & t) && (t >>= 4,
            e += 4),
            0 == (3 & t) && (t >>= 2,
            e += 2),
            0 == (1 & t) && ++e,
            e
        }
        function f(t) {
            for (var e = 0; 0 != t; )
                t &= t - 1,
                ++e;
            return e
        }
        var c, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = "=";
        function d(t) {
            var e, r, n = "";
            for (e = 0; e + 3 <= t.length; e += 3)
                r = parseInt(t.substring(e, e + 3), 16),
                n += l.charAt(r >> 6) + l.charAt(63 & r);
            for (e + 1 == t.length ? (r = parseInt(t.substring(e, e + 1), 16),
            n += l.charAt(r << 2)) : e + 2 == t.length && (r = parseInt(t.substring(e, e + 2), 16),
            n += l.charAt(r >> 2) + l.charAt((3 & r) << 4)); (3 & n.length) > 0; )
                n += p;
            return n
        }
        function g(t) {
            var e, r = "", n = 0, o = 0;
            for (e = 0; e < t.length && t.charAt(e) != p; ++e) {
                var s = l.indexOf(t.charAt(e));
                s < 0 || (0 == n ? (r += i(s >> 2),
                o = 3 & s,
                n = 1) : 1 == n ? (r += i(o << 2 | s >> 4),
                o = 15 & s,
                n = 2) : 2 == n ? (r += i(o),
                r += i(s >> 2),
                o = 3 & s,
                n = 3) : (r += i(o << 2 | s >> 4),
                r += i(15 & s),
                n = 0))
            }
            return 1 == n && (r += i(o << 2)),
            r
        }
        var y, m = function(t) {
            var e;
            if (void 0 === c) {
                var r = "0123456789ABCDEF"
                  , n = " \f\n\r\t\xa0\u2028\u2029";
                for (c = {},
                e = 0; e < 16; ++e)
                    c[r.charAt(e)] = e;
                for (r = r.toLowerCase(),
                e = 10; e < 16; ++e)
                    c[r.charAt(e)] = e;
                for (e = 0; e < 8; ++e)
                    c[n.charAt(e)] = -1
            }
            var i = []
              , o = 0
              , s = 0;
            for (e = 0; e < t.length; ++e) {
                var u = t.charAt(e);
                if ("=" == u)
                    break;
                if (-1 != (u = c[u])) {
                    if (void 0 === u)
                        throw new Error("Illegal character at offset " + e);
                    o |= u,
                    ++s >= 2 ? (i[i.length] = o,
                    o = 0,
                    s = 0) : o <<= 4
                }
            }
            if (s)
                throw new Error("Hex encoding incomplete: 4 bits missing");
            return i
        }, v = {
            decode: function(t) {
                var e;
                if (void 0 === y) {
                    var r = "= \f\n\r\t\xa0\u2028\u2029";
                    for (y = Object.create(null),
                    e = 0; e < 64; ++e)
                        y["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                    for (y["-"] = 62,
                    y._ = 63,
                    e = 0; e < 9; ++e)
                        y[r.charAt(e)] = -1
                }
                var n = []
                  , i = 0
                  , o = 0;
                for (e = 0; e < t.length; ++e) {
                    var s = t.charAt(e);
                    if ("=" == s)
                        break;
                    if (-1 != (s = y[s])) {
                        if (void 0 === s)
                            throw new Error("Illegal character at offset " + e);
                        i |= s,
                        ++o >= 4 ? (n[n.length] = i >> 16,
                        n[n.length] = i >> 8 & 255,
                        n[n.length] = 255 & i,
                        i = 0,
                        o = 0) : i <<= 6
                    }
                }
                switch (o) {
                case 1:
                    throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                case 2:
                    n[n.length] = i >> 10;
                    break;
                case 3:
                    n[n.length] = i >> 16,
                    n[n.length] = i >> 8 & 255
                }
                return n
            },
            re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            unarmor: function(t) {
                var e = v.re.exec(t);
                if (e)
                    if (e[1])
                        t = e[1];
                    else {
                        if (!e[2])
                            throw new Error("RegExp out of sync");
                        t = e[2]
                    }
                return v.decode(t)
            }
        }, b = 1e13, w = function() {
            function t(t) {
                this.buf = [+t || 0]
            }
            return t.prototype.mulAdd = function(t, e) {
                var r, n, i = this.buf, o = i.length;
                for (r = 0; r < o; ++r)
                    (n = i[r] * t + e) < b ? e = 0 : n -= (e = 0 | n / b) * b,
                    i[r] = n;
                e > 0 && (i[r] = e)
            }
            ,
            t.prototype.sub = function(t) {
                var e, r, n = this.buf, i = n.length;
                for (e = 0; e < i; ++e)
                    (r = n[e] - t) < 0 ? (r += b,
                    t = 1) : t = 0,
                    n[e] = r;
                for (; 0 === n[n.length - 1]; )
                    n.pop()
            }
            ,
            t.prototype.toString = function(t) {
                if (10 != (t || 10))
                    throw new Error("only base 10 is supported");
                for (var e = this.buf, r = e[e.length - 1].toString(), n = e.length - 2; n >= 0; --n)
                    r += (b + e[n]).toString().substring(1);
                return r
            }
            ,
            t.prototype.valueOf = function() {
                for (var t = this.buf, e = 0, r = t.length - 1; r >= 0; --r)
                    e = e * b + t[r];
                return e
            }
            ,
            t.prototype.simplify = function() {
                var t = this.buf;
                return 1 == t.length ? t[0] : this
            }
            ,
            t
        }(), E = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, S = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
        function T(t, e) {
            return t.length > e && (t = t.substring(0, e) + "\u2026"),
            t
        }
        var D, B = function() {
            function t(e, r) {
                this.hexDigits = "0123456789ABCDEF",
                e instanceof t ? (this.enc = e.enc,
                this.pos = e.pos) : (this.enc = e,
                this.pos = r)
            }
            return t.prototype.get = function(t) {
                if (void 0 === t && (t = this.pos++),
                t >= this.enc.length)
                    throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
                return "string" === typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
            }
            ,
            t.prototype.hexByte = function(t) {
                return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
            }
            ,
            t.prototype.hexDump = function(t, e, r) {
                for (var n = "", i = t; i < e; ++i)
                    if (n += this.hexByte(this.get(i)),
                    !0 !== r)
                        switch (15 & i) {
                        case 7:
                            n += "  ";
                            break;
                        case 15:
                            n += "\n";
                            break;
                        default:
                            n += " "
                        }
                return n
            }
            ,
            t.prototype.isASCII = function(t, e) {
                for (var r = t; r < e; ++r) {
                    var n = this.get(r);
                    if (n < 32 || n > 176)
                        return !1
                }
                return !0
            }
            ,
            t.prototype.parseStringISO = function(t, e) {
                for (var r = "", n = t; n < e; ++n)
                    r += String.fromCharCode(this.get(n));
                return r
            }
            ,
            t.prototype.parseStringUTF = function(t, e) {
                for (var r = "", n = t; n < e; ) {
                    var i = this.get(n++);
                    r += i < 128 ? String.fromCharCode(i) : i > 191 && i < 224 ? String.fromCharCode((31 & i) << 6 | 63 & this.get(n++)) : String.fromCharCode((15 & i) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++))
                }
                return r
            }
            ,
            t.prototype.parseStringBMP = function(t, e) {
                for (var r, n, i = "", o = t; o < e; )
                    r = this.get(o++),
                    n = this.get(o++),
                    i += String.fromCharCode(r << 8 | n);
                return i
            }
            ,
            t.prototype.parseTime = function(t, e, r) {
                var n = this.parseStringISO(t, e)
                  , i = (r ? E : S).exec(n);
                return i ? (r && (i[1] = +i[1],
                i[1] += +i[1] < 70 ? 2e3 : 1900),
                n = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4],
                i[5] && (n += ":" + i[5],
                i[6] && (n += ":" + i[6],
                i[7] && (n += "." + i[7]))),
                i[8] && (n += " UTC",
                "Z" != i[8] && (n += i[8],
                i[9] && (n += ":" + i[9]))),
                n) : "Unrecognized time: " + n
            }
            ,
            t.prototype.parseInteger = function(t, e) {
                for (var r, n = this.get(t), i = n > 127, o = i ? 255 : 0, s = ""; n == o && ++t < e; )
                    n = this.get(t);
                if (0 === (r = e - t))
                    return i ? -1 : 0;
                if (r > 4) {
                    for (s = n,
                    r <<= 3; 0 == (128 & (+s ^ o)); )
                        s = +s << 1,
                        --r;
                    s = "(" + r + " bit)\n"
                }
                i && (n -= 256);
                for (var u = new w(n), a = t + 1; a < e; ++a)
                    u.mulAdd(256, this.get(a));
                return s + u.toString()
            }
            ,
            t.prototype.parseBitString = function(t, e, r) {
                for (var n = this.get(t), i = "(" + ((e - t - 1 << 3) - n) + " bit)\n", o = "", s = t + 1; s < e; ++s) {
                    for (var u = this.get(s), a = s == e - 1 ? n : 0, h = 7; h >= a; --h)
                        o += u >> h & 1 ? "1" : "0";
                    if (o.length > r)
                        return i + T(o, r)
                }
                return i + o
            }
            ,
            t.prototype.parseOctetString = function(t, e, r) {
                if (this.isASCII(t, e))
                    return T(this.parseStringISO(t, e), r);
                var n = e - t
                  , i = "(" + n + " byte)\n";
                n > (r /= 2) && (e = t + r);
                for (var o = t; o < e; ++o)
                    i += this.hexByte(this.get(o));
                return n > r && (i += "\u2026"),
                i
            }
            ,
            t.prototype.parseOID = function(t, e, r) {
                for (var n = "", i = new w, o = 0, s = t; s < e; ++s) {
                    var u = this.get(s);
                    if (i.mulAdd(128, 127 & u),
                    o += 7,
                    !(128 & u)) {
                        if ("" === n)
                            if ((i = i.simplify())instanceof w)
                                i.sub(80),
                                n = "2." + i.toString();
                            else {
                                var a = i < 80 ? i < 40 ? 0 : 1 : 2;
                                n = a + "." + (i - 40 * a)
                            }
                        else
                            n += "." + i.toString();
                        if (n.length > r)
                            return T(n, r);
                        i = new w,
                        o = 0
                    }
                }
                return o > 0 && (n += ".incomplete"),
                n
            }
            ,
            t
        }(), x = function() {
            function t(t, e, r, n, i) {
                if (!(n instanceof A))
                    throw new Error("Invalid tag value.");
                this.stream = t,
                this.header = e,
                this.length = r,
                this.tag = n,
                this.sub = i
            }
            return t.prototype.typeName = function() {
                switch (this.tag.tagClass) {
                case 0:
                    switch (this.tag.tagNumber) {
                    case 0:
                        return "EOC";
                    case 1:
                        return "BOOLEAN";
                    case 2:
                        return "INTEGER";
                    case 3:
                        return "BIT_STRING";
                    case 4:
                        return "OCTET_STRING";
                    case 5:
                        return "NULL";
                    case 6:
                        return "OBJECT_IDENTIFIER";
                    case 7:
                        return "ObjectDescriptor";
                    case 8:
                        return "EXTERNAL";
                    case 9:
                        return "REAL";
                    case 10:
                        return "ENUMERATED";
                    case 11:
                        return "EMBEDDED_PDV";
                    case 12:
                        return "UTF8String";
                    case 16:
                        return "SEQUENCE";
                    case 17:
                        return "SET";
                    case 18:
                        return "NumericString";
                    case 19:
                        return "PrintableString";
                    case 20:
                        return "TeletexString";
                    case 21:
                        return "VideotexString";
                    case 22:
                        return "IA5String";
                    case 23:
                        return "UTCTime";
                    case 24:
                        return "GeneralizedTime";
                    case 25:
                        return "GraphicString";
                    case 26:
                        return "VisibleString";
                    case 27:
                        return "GeneralString";
                    case 28:
                        return "UniversalString";
                    case 30:
                        return "BMPString"
                    }
                    return "Universal_" + this.tag.tagNumber.toString();
                case 1:
                    return "Application_" + this.tag.tagNumber.toString();
                case 2:
                    return "[" + this.tag.tagNumber.toString() + "]";
                case 3:
                    return "Private_" + this.tag.tagNumber.toString()
                }
            }
            ,
            t.prototype.content = function(t) {
                if (void 0 === this.tag)
                    return null;
                void 0 === t && (t = 1 / 0);
                var e = this.posContent()
                  , r = Math.abs(this.length);
                if (!this.tag.isUniversal())
                    return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + r, t);
                switch (this.tag.tagNumber) {
                case 1:
                    return 0 === this.stream.get(e) ? "false" : "true";
                case 2:
                    return this.stream.parseInteger(e, e + r);
                case 3:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + r, t);
                case 4:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + r, t);
                case 6:
                    return this.stream.parseOID(e, e + r, t);
                case 16:
                case 17:
                    return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                case 12:
                    return T(this.stream.parseStringUTF(e, e + r), t);
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 26:
                    return T(this.stream.parseStringISO(e, e + r), t);
                case 30:
                    return T(this.stream.parseStringBMP(e, e + r), t);
                case 23:
                case 24:
                    return this.stream.parseTime(e, e + r, 23 == this.tag.tagNumber)
                }
                return null
            }
            ,
            t.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            }
            ,
            t.prototype.toPrettyString = function(t) {
                void 0 === t && (t = "");
                var e = t + this.typeName() + " @" + this.stream.pos;
                if (this.length >= 0 && (e += "+"),
                e += this.length,
                this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"),
                e += "\n",
                null !== this.sub) {
                    t += "  ";
                    for (var r = 0, n = this.sub.length; r < n; ++r)
                        e += this.sub[r].toPrettyString(t)
                }
                return e
            }
            ,
            t.prototype.posStart = function() {
                return this.stream.pos
            }
            ,
            t.prototype.posContent = function() {
                return this.stream.pos + this.header
            }
            ,
            t.prototype.posEnd = function() {
                return this.stream.pos + this.header + Math.abs(this.length)
            }
            ,
            t.prototype.toHexString = function() {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            }
            ,
            t.decodeLength = function(t) {
                var e = t.get()
                  , r = 127 & e;
                if (r == e)
                    return r;
                if (r > 6)
                    throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                if (0 === r)
                    return null;
                e = 0;
                for (var n = 0; n < r; ++n)
                    e = 256 * e + t.get();
                return e
            }
            ,
            t.prototype.getHexStringValue = function() {
                var t = this.toHexString()
                  , e = 2 * this.header
                  , r = 2 * this.length;
                return t.substr(e, r)
            }
            ,
            t.decode = function(e) {
                var r;
                r = e instanceof B ? e : new B(e,0);
                var n = new B(r)
                  , i = new A(r)
                  , o = t.decodeLength(r)
                  , s = r.pos
                  , u = s - n.pos
                  , a = null
                  , h = function() {
                    var e = [];
                    if (null !== o) {
                        for (var n = s + o; r.pos < n; )
                            e[e.length] = t.decode(r);
                        if (r.pos != n)
                            throw new Error("Content size is not correct for container starting at offset " + s)
                    } else
                        try {
                            for (; ; ) {
                                var i = t.decode(r);
                                if (i.tag.isEOC())
                                    break;
                                e[e.length] = i
                            }
                            o = s - r.pos
                        } catch (u) {
                            throw new Error("Exception while decoding undefined length content: " + u)
                        }
                    return e
                };
                if (i.tagConstructed)
                    a = h();
                else if (i.isUniversal() && (3 == i.tagNumber || 4 == i.tagNumber))
                    try {
                        if (3 == i.tagNumber && 0 != r.get())
                            throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                        a = h();
                        for (var f = 0; f < a.length; ++f)
                            if (a[f].tag.isEOC())
                                throw new Error("EOC is not supposed to be actual content.")
                    } catch (c) {
                        a = null
                    }
                if (null === a) {
                    if (null === o)
                        throw new Error("We can't skip over an invalid tag with undefined length at offset " + s);
                    r.pos = s + Math.abs(o)
                }
                return new t(n,u,o,i,a)
            }
            ,
            t
        }(), A = function() {
            function t(t) {
                var e = t.get();
                if (this.tagClass = e >> 6,
                this.tagConstructed = 0 !== (32 & e),
                this.tagNumber = 31 & e,
                31 == this.tagNumber) {
                    var r = new w;
                    do {
                        e = t.get(),
                        r.mulAdd(128, 127 & e)
                    } while (128 & e);
                    this.tagNumber = r.simplify()
                }
            }
            return t.prototype.isUniversal = function() {
                return 0 === this.tagClass
            }
            ,
            t.prototype.isEOC = function() {
                return 0 === this.tagClass && 0 === this.tagNumber
            }
            ,
            t
        }(), I = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], R = (1 << 26) / I[I.length - 1], _ = function() {
            function t(t, e, r) {
                null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
            }
            return t.prototype.toString = function(t) {
                if (this.s < 0)
                    return "-" + this.negate().toString(t);
                var e;
                if (16 == t)
                    e = 4;
                else if (8 == t)
                    e = 3;
                else if (2 == t)
                    e = 1;
                else if (32 == t)
                    e = 5;
                else {
                    if (4 != t)
                        return this.toRadix(t);
                    e = 2
                }
                var r, n = (1 << e) - 1, o = !1, s = "", u = this.t, a = this.DB - u * this.DB % e;
                if (u-- > 0)
                    for (a < this.DB && (r = this[u] >> a) > 0 && (o = !0,
                    s = i(r)); u >= 0; )
                        a < e ? (r = (this[u] & (1 << a) - 1) << e - a,
                        r |= this[--u] >> (a += this.DB - e)) : (r = this[u] >> (a -= e) & n,
                        a <= 0 && (a += this.DB,
                        --u)),
                        r > 0 && (o = !0),
                        o && (s += i(r));
                return o ? s : "0"
            }
            ,
            t.prototype.negate = function() {
                var e = M();
                return t.ZERO.subTo(this, e),
                e
            }
            ,
            t.prototype.abs = function() {
                return this.s < 0 ? this.negate() : this
            }
            ,
            t.prototype.compareTo = function(t) {
                var e = this.s - t.s;
                if (0 != e)
                    return e;
                var r = this.t;
                if (0 != (e = r - t.t))
                    return this.s < 0 ? -e : e;
                for (; --r >= 0; )
                    if (0 != (e = this[r] - t[r]))
                        return e;
                return 0
            }
            ,
            t.prototype.bitLength = function() {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + F(this[this.t - 1] ^ this.s & this.DM)
            }
            ,
            t.prototype.mod = function(e) {
                var r = M();
                return this.abs().divRemTo(e, null, r),
                this.s < 0 && r.compareTo(t.ZERO) > 0 && e.subTo(r, r),
                r
            }
            ,
            t.prototype.modPowInt = function(t, e) {
                var r;
                return r = t < 256 || e.isEven() ? new V(e) : new N(e),
                this.exp(t, r)
            }
            ,
            t.prototype.clone = function() {
                var t = M();
                return this.copyTo(t),
                t
            }
            ,
            t.prototype.intValue = function() {
                if (this.s < 0) {
                    if (1 == this.t)
                        return this[0] - this.DV;
                    if (0 == this.t)
                        return -1
                } else {
                    if (1 == this.t)
                        return this[0];
                    if (0 == this.t)
                        return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }
            ,
            t.prototype.byteValue = function() {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }
            ,
            t.prototype.shortValue = function() {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }
            ,
            t.prototype.signum = function() {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }
            ,
            t.prototype.toByteArray = function() {
                var t = this.t
                  , e = [];
                e[0] = this.s;
                var r, n = this.DB - t * this.DB % 8, i = 0;
                if (t-- > 0)
                    for (n < this.DB && (r = this[t] >> n) != (this.s & this.DM) >> n && (e[i++] = r | this.s << this.DB - n); t >= 0; )
                        n < 8 ? (r = (this[t] & (1 << n) - 1) << 8 - n,
                        r |= this[--t] >> (n += this.DB - 8)) : (r = this[t] >> (n -= 8) & 255,
                        n <= 0 && (n += this.DB,
                        --t)),
                        0 != (128 & r) && (r |= -256),
                        0 == i && (128 & this.s) != (128 & r) && ++i,
                        (i > 0 || r != this.s) && (e[i++] = r);
                return e
            }
            ,
            t.prototype.equals = function(t) {
                return 0 == this.compareTo(t)
            }
            ,
            t.prototype.min = function(t) {
                return this.compareTo(t) < 0 ? this : t
            }
            ,
            t.prototype.max = function(t) {
                return this.compareTo(t) > 0 ? this : t
            }
            ,
            t.prototype.and = function(t) {
                var e = M();
                return this.bitwiseTo(t, o, e),
                e
            }
            ,
            t.prototype.or = function(t) {
                var e = M();
                return this.bitwiseTo(t, s, e),
                e
            }
            ,
            t.prototype.xor = function(t) {
                var e = M();
                return this.bitwiseTo(t, u, e),
                e
            }
            ,
            t.prototype.andNot = function(t) {
                var e = M();
                return this.bitwiseTo(t, a, e),
                e
            }
            ,
            t.prototype.not = function() {
                for (var t = M(), e = 0; e < this.t; ++e)
                    t[e] = this.DM & ~this[e];
                return t.t = this.t,
                t.s = ~this.s,
                t
            }
            ,
            t.prototype.shiftLeft = function(t) {
                var e = M();
                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                e
            }
            ,
            t.prototype.shiftRight = function(t) {
                var e = M();
                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                e
            }
            ,
            t.prototype.getLowestSetBit = function() {
                for (var t = 0; t < this.t; ++t)
                    if (0 != this[t])
                        return t * this.DB + h(this[t]);
                return this.s < 0 ? this.t * this.DB : -1
            }
            ,
            t.prototype.bitCount = function() {
                for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r)
                    t += f(this[r] ^ e);
                return t
            }
            ,
            t.prototype.testBit = function(t) {
                var e = Math.floor(t / this.DB);
                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
            }
            ,
            t.prototype.setBit = function(t) {
                return this.changeBit(t, s)
            }
            ,
            t.prototype.clearBit = function(t) {
                return this.changeBit(t, a)
            }
            ,
            t.prototype.flipBit = function(t) {
                return this.changeBit(t, u)
            }
            ,
            t.prototype.add = function(t) {
                var e = M();
                return this.addTo(t, e),
                e
            }
            ,
            t.prototype.subtract = function(t) {
                var e = M();
                return this.subTo(t, e),
                e
            }
            ,
            t.prototype.multiply = function(t) {
                var e = M();
                return this.multiplyTo(t, e),
                e
            }
            ,
            t.prototype.divide = function(t) {
                var e = M();
                return this.divRemTo(t, e, null),
                e
            }
            ,
            t.prototype.remainder = function(t) {
                var e = M();
                return this.divRemTo(t, null, e),
                e
            }
            ,
            t.prototype.divideAndRemainder = function(t) {
                var e = M()
                  , r = M();
                return this.divRemTo(t, e, r),
                [e, r]
            }
            ,
            t.prototype.modPow = function(t, e) {
                var r, n, i = t.bitLength(), o = k(1);
                if (i <= 0)
                    return o;
                r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6,
                n = i < 8 ? new V(e) : e.isEven() ? new L(e) : new N(e);
                var s = []
                  , u = 3
                  , a = r - 1
                  , h = (1 << r) - 1;
                if (s[1] = n.convert(this),
                r > 1) {
                    var f = M();
                    for (n.sqrTo(s[1], f); u <= h; )
                        s[u] = M(),
                        n.mulTo(f, s[u - 2], s[u]),
                        u += 2
                }
                var c, l, p = t.t - 1, d = !0, g = M();
                for (i = F(t[p]) - 1; p >= 0; ) {
                    for (i >= a ? c = t[p] >> i - a & h : (c = (t[p] & (1 << i + 1) - 1) << a - i,
                    p > 0 && (c |= t[p - 1] >> this.DB + i - a)),
                    u = r; 0 == (1 & c); )
                        c >>= 1,
                        --u;
                    if ((i -= u) < 0 && (i += this.DB,
                    --p),
                    d)
                        s[c].copyTo(o),
                        d = !1;
                    else {
                        for (; u > 1; )
                            n.sqrTo(o, g),
                            n.sqrTo(g, o),
                            u -= 2;
                        u > 0 ? n.sqrTo(o, g) : (l = o,
                        o = g,
                        g = l),
                        n.mulTo(g, s[c], o)
                    }
                    for (; p >= 0 && 0 == (t[p] & 1 << i); )
                        n.sqrTo(o, g),
                        l = o,
                        o = g,
                        g = l,
                        --i < 0 && (i = this.DB - 1,
                        --p)
                }
                return n.revert(o)
            }
            ,
            t.prototype.modInverse = function(e) {
                var r = e.isEven();
                if (this.isEven() && r || 0 == e.signum())
                    return t.ZERO;
                for (var n = e.clone(), i = this.clone(), o = k(1), s = k(0), u = k(0), a = k(1); 0 != n.signum(); ) {
                    for (; n.isEven(); )
                        n.rShiftTo(1, n),
                        r ? (o.isEven() && s.isEven() || (o.addTo(this, o),
                        s.subTo(e, s)),
                        o.rShiftTo(1, o)) : s.isEven() || s.subTo(e, s),
                        s.rShiftTo(1, s);
                    for (; i.isEven(); )
                        i.rShiftTo(1, i),
                        r ? (u.isEven() && a.isEven() || (u.addTo(this, u),
                        a.subTo(e, a)),
                        u.rShiftTo(1, u)) : a.isEven() || a.subTo(e, a),
                        a.rShiftTo(1, a);
                    n.compareTo(i) >= 0 ? (n.subTo(i, n),
                    r && o.subTo(u, o),
                    s.subTo(a, s)) : (i.subTo(n, i),
                    r && u.subTo(o, u),
                    a.subTo(s, a))
                }
                return 0 != i.compareTo(t.ONE) ? t.ZERO : a.compareTo(e) >= 0 ? a.subtract(e) : a.signum() < 0 ? (a.addTo(e, a),
                a.signum() < 0 ? a.add(e) : a) : a
            }
            ,
            t.prototype.pow = function(t) {
                return this.exp(t, new O)
            }
            ,
            t.prototype.gcd = function(t) {
                var e = this.s < 0 ? this.negate() : this.clone()
                  , r = t.s < 0 ? t.negate() : t.clone();
                if (e.compareTo(r) < 0) {
                    var n = e;
                    e = r,
                    r = n
                }
                var i = e.getLowestSetBit()
                  , o = r.getLowestSetBit();
                if (o < 0)
                    return e;
                for (i < o && (o = i),
                o > 0 && (e.rShiftTo(o, e),
                r.rShiftTo(o, r)); e.signum() > 0; )
                    (i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e),
                    (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
                    e.compareTo(r) >= 0 ? (e.subTo(r, e),
                    e.rShiftTo(1, e)) : (r.subTo(e, r),
                    r.rShiftTo(1, r));
                return o > 0 && r.lShiftTo(o, r),
                r
            }
            ,
            t.prototype.isProbablePrime = function(t) {
                var e, r = this.abs();
                if (1 == r.t && r[0] <= I[I.length - 1]) {
                    for (e = 0; e < I.length; ++e)
                        if (r[0] == I[e])
                            return !0;
                    return !1
                }
                if (r.isEven())
                    return !1;
                for (e = 1; e < I.length; ) {
                    for (var n = I[e], i = e + 1; i < I.length && n < R; )
                        n *= I[i++];
                    for (n = r.modInt(n); e < i; )
                        if (n % I[e++] == 0)
                            return !1
                }
                return r.millerRabin(t)
            }
            ,
            t.prototype.copyTo = function(t) {
                for (var e = this.t - 1; e >= 0; --e)
                    t[e] = this[e];
                t.t = this.t,
                t.s = this.s
            }
            ,
            t.prototype.fromInt = function(t) {
                this.t = 1,
                this.s = t < 0 ? -1 : 0,
                t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
            }
            ,
            t.prototype.fromString = function(e, r) {
                var n;
                if (16 == r)
                    n = 4;
                else if (8 == r)
                    n = 3;
                else if (256 == r)
                    n = 8;
                else if (2 == r)
                    n = 1;
                else if (32 == r)
                    n = 5;
                else {
                    if (4 != r)
                        return void this.fromRadix(e, r);
                    n = 2
                }
                this.t = 0,
                this.s = 0;
                for (var i = e.length, o = !1, s = 0; --i >= 0; ) {
                    var u = 8 == n ? 255 & +e[i] : H(e, i);
                    u < 0 ? "-" == e.charAt(i) && (o = !0) : (o = !1,
                    0 == s ? this[this.t++] = u : s + n > this.DB ? (this[this.t - 1] |= (u & (1 << this.DB - s) - 1) << s,
                    this[this.t++] = u >> this.DB - s) : this[this.t - 1] |= u << s,
                    (s += n) >= this.DB && (s -= this.DB))
                }
                8 == n && 0 != (128 & +e[0]) && (this.s = -1,
                s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)),
                this.clamp(),
                o && t.ZERO.subTo(this, this)
            }
            ,
            t.prototype.clamp = function() {
                for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
                    --this.t
            }
            ,
            t.prototype.dlShiftTo = function(t, e) {
                var r;
                for (r = this.t - 1; r >= 0; --r)
                    e[r + t] = this[r];
                for (r = t - 1; r >= 0; --r)
                    e[r] = 0;
                e.t = this.t + t,
                e.s = this.s
            }
            ,
            t.prototype.drShiftTo = function(t, e) {
                for (var r = t; r < this.t; ++r)
                    e[r - t] = this[r];
                e.t = Math.max(this.t - t, 0),
                e.s = this.s
            }
            ,
            t.prototype.lShiftTo = function(t, e) {
                for (var r = t % this.DB, n = this.DB - r, i = (1 << n) - 1, o = Math.floor(t / this.DB), s = this.s << r & this.DM, u = this.t - 1; u >= 0; --u)
                    e[u + o + 1] = this[u] >> n | s,
                    s = (this[u] & i) << r;
                for (u = o - 1; u >= 0; --u)
                    e[u] = 0;
                e[o] = s,
                e.t = this.t + o + 1,
                e.s = this.s,
                e.clamp()
            }
            ,
            t.prototype.rShiftTo = function(t, e) {
                e.s = this.s;
                var r = Math.floor(t / this.DB);
                if (r >= this.t)
                    e.t = 0;
                else {
                    var n = t % this.DB
                      , i = this.DB - n
                      , o = (1 << n) - 1;
                    e[0] = this[r] >> n;
                    for (var s = r + 1; s < this.t; ++s)
                        e[s - r - 1] |= (this[s] & o) << i,
                        e[s - r] = this[s] >> n;
                    n > 0 && (e[this.t - r - 1] |= (this.s & o) << i),
                    e.t = this.t - r,
                    e.clamp()
                }
            }
            ,
            t.prototype.subTo = function(t, e) {
                for (var r = 0, n = 0, i = Math.min(t.t, this.t); r < i; )
                    n += this[r] - t[r],
                    e[r++] = n & this.DM,
                    n >>= this.DB;
                if (t.t < this.t) {
                    for (n -= t.s; r < this.t; )
                        n += this[r],
                        e[r++] = n & this.DM,
                        n >>= this.DB;
                    n += this.s
                } else {
                    for (n += this.s; r < t.t; )
                        n -= t[r],
                        e[r++] = n & this.DM,
                        n >>= this.DB;
                    n -= t.s
                }
                e.s = n < 0 ? -1 : 0,
                n < -1 ? e[r++] = this.DV + n : n > 0 && (e[r++] = n),
                e.t = r,
                e.clamp()
            }
            ,
            t.prototype.multiplyTo = function(e, r) {
                var n = this.abs()
                  , i = e.abs()
                  , o = n.t;
                for (r.t = o + i.t; --o >= 0; )
                    r[o] = 0;
                for (o = 0; o < i.t; ++o)
                    r[o + n.t] = n.am(0, i[o], r, o, 0, n.t);
                r.s = 0,
                r.clamp(),
                this.s != e.s && t.ZERO.subTo(r, r)
            }
            ,
            t.prototype.squareTo = function(t) {
                for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0; )
                    t[r] = 0;
                for (r = 0; r < e.t - 1; ++r) {
                    var n = e.am(r, e[r], t, 2 * r, 0, 1);
                    (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, n, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV,
                    t[r + e.t + 1] = 1)
                }
                t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
                t.s = 0,
                t.clamp()
            }
            ,
            t.prototype.divRemTo = function(e, r, n) {
                var i = e.abs();
                if (!(i.t <= 0)) {
                    var o = this.abs();
                    if (o.t < i.t)
                        return null != r && r.fromInt(0),
                        void (null != n && this.copyTo(n));
                    null == n && (n = M());
                    var s = M()
                      , u = this.s
                      , a = e.s
                      , h = this.DB - F(i[i.t - 1]);
                    h > 0 ? (i.lShiftTo(h, s),
                    o.lShiftTo(h, n)) : (i.copyTo(s),
                    o.copyTo(n));
                    var f = s.t
                      , c = s[f - 1];
                    if (0 != c) {
                        var l = c * (1 << this.F1) + (f > 1 ? s[f - 2] >> this.F2 : 0)
                          , p = this.FV / l
                          , d = (1 << this.F1) / l
                          , g = 1 << this.F2
                          , y = n.t
                          , m = y - f
                          , v = null == r ? M() : r;
                        for (s.dlShiftTo(m, v),
                        n.compareTo(v) >= 0 && (n[n.t++] = 1,
                        n.subTo(v, n)),
                        t.ONE.dlShiftTo(f, v),
                        v.subTo(s, s); s.t < f; )
                            s[s.t++] = 0;
                        for (; --m >= 0; ) {
                            var b = n[--y] == c ? this.DM : Math.floor(n[y] * p + (n[y - 1] + g) * d);
                            if ((n[y] += s.am(0, b, n, m, 0, f)) < b)
                                for (s.dlShiftTo(m, v),
                                n.subTo(v, n); n[y] < --b; )
                                    n.subTo(v, n)
                        }
                        null != r && (n.drShiftTo(f, r),
                        u != a && t.ZERO.subTo(r, r)),
                        n.t = f,
                        n.clamp(),
                        h > 0 && n.rShiftTo(h, n),
                        u < 0 && t.ZERO.subTo(n, n)
                    }
                }
            }
            ,
            t.prototype.invDigit = function() {
                if (this.t < 1)
                    return 0;
                var t = this[0];
                if (0 == (1 & t))
                    return 0;
                var e = 3 & t;
                return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
            }
            ,
            t.prototype.isEven = function() {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }
            ,
            t.prototype.exp = function(e, r) {
                if (e > 4294967295 || e < 1)
                    return t.ONE;
                var n = M()
                  , i = M()
                  , o = r.convert(this)
                  , s = F(e) - 1;
                for (o.copyTo(n); --s >= 0; )
                    if (r.sqrTo(n, i),
                    (e & 1 << s) > 0)
                        r.mulTo(i, o, n);
                    else {
                        var u = n;
                        n = i,
                        i = u
                    }
                return r.revert(n)
            }
            ,
            t.prototype.chunkSize = function(t) {
                return Math.floor(Math.LN2 * this.DB / Math.log(t))
            }
            ,
            t.prototype.toRadix = function(t) {
                if (null == t && (t = 10),
                0 == this.signum() || t < 2 || t > 36)
                    return "0";
                var e = this.chunkSize(t)
                  , r = Math.pow(t, e)
                  , n = k(r)
                  , i = M()
                  , o = M()
                  , s = "";
                for (this.divRemTo(n, i, o); i.signum() > 0; )
                    s = (r + o.intValue()).toString(t).substr(1) + s,
                    i.divRemTo(n, i, o);
                return o.intValue().toString(t) + s
            }
            ,
            t.prototype.fromRadix = function(e, r) {
                this.fromInt(0),
                null == r && (r = 10);
                for (var n = this.chunkSize(r), i = Math.pow(r, n), o = !1, s = 0, u = 0, a = 0; a < e.length; ++a) {
                    var h = H(e, a);
                    h < 0 ? "-" == e.charAt(a) && 0 == this.signum() && (o = !0) : (u = r * u + h,
                    ++s >= n && (this.dMultiply(i),
                    this.dAddOffset(u, 0),
                    s = 0,
                    u = 0))
                }
                s > 0 && (this.dMultiply(Math.pow(r, s)),
                this.dAddOffset(u, 0)),
                o && t.ZERO.subTo(this, this)
            }
            ,
            t.prototype.fromNumber = function(e, r, n) {
                if ("number" == typeof r)
                    if (e < 2)
                        this.fromInt(1);
                    else
                        for (this.fromNumber(e, n),
                        this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), s, this),
                        this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(r); )
                            this.dAddOffset(2, 0),
                            this.bitLength() > e && this.subTo(t.ONE.shiftLeft(e - 1), this);
                else {
                    var i = []
                      , o = 7 & e;
                    i.length = 1 + (e >> 3),
                    r.nextBytes(i),
                    o > 0 ? i[0] &= (1 << o) - 1 : i[0] = 0,
                    this.fromString(i, 256)
                }
            }
            ,
            t.prototype.bitwiseTo = function(t, e, r) {
                var n, i, o = Math.min(t.t, this.t);
                for (n = 0; n < o; ++n)
                    r[n] = e(this[n], t[n]);
                if (t.t < this.t) {
                    for (i = t.s & this.DM,
                    n = o; n < this.t; ++n)
                        r[n] = e(this[n], i);
                    r.t = this.t
                } else {
                    for (i = this.s & this.DM,
                    n = o; n < t.t; ++n)
                        r[n] = e(i, t[n]);
                    r.t = t.t
                }
                r.s = e(this.s, t.s),
                r.clamp()
            }
            ,
            t.prototype.changeBit = function(e, r) {
                var n = t.ONE.shiftLeft(e);
                return this.bitwiseTo(n, r, n),
                n
            }
            ,
            t.prototype.addTo = function(t, e) {
                for (var r = 0, n = 0, i = Math.min(t.t, this.t); r < i; )
                    n += this[r] + t[r],
                    e[r++] = n & this.DM,
                    n >>= this.DB;
                if (t.t < this.t) {
                    for (n += t.s; r < this.t; )
                        n += this[r],
                        e[r++] = n & this.DM,
                        n >>= this.DB;
                    n += this.s
                } else {
                    for (n += this.s; r < t.t; )
                        n += t[r],
                        e[r++] = n & this.DM,
                        n >>= this.DB;
                    n += t.s
                }
                e.s = n < 0 ? -1 : 0,
                n > 0 ? e[r++] = n : n < -1 && (e[r++] = this.DV + n),
                e.t = r,
                e.clamp()
            }
            ,
            t.prototype.dMultiply = function(t) {
                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                ++this.t,
                this.clamp()
            }
            ,
            t.prototype.dAddOffset = function(t, e) {
                if (0 != t) {
                    for (; this.t <= e; )
                        this[this.t++] = 0;
                    for (this[e] += t; this[e] >= this.DV; )
                        this[e] -= this.DV,
                        ++e >= this.t && (this[this.t++] = 0),
                        ++this[e]
                }
            }
            ,
            t.prototype.multiplyLowerTo = function(t, e, r) {
                var n = Math.min(this.t + t.t, e);
                for (r.s = 0,
                r.t = n; n > 0; )
                    r[--n] = 0;
                for (var i = r.t - this.t; n < i; ++n)
                    r[n + this.t] = this.am(0, t[n], r, n, 0, this.t);
                for (i = Math.min(t.t, e); n < i; ++n)
                    this.am(0, t[n], r, n, 0, e - n);
                r.clamp()
            }
            ,
            t.prototype.multiplyUpperTo = function(t, e, r) {
                --e;
                var n = r.t = this.t + t.t - e;
                for (r.s = 0; --n >= 0; )
                    r[n] = 0;
                for (n = Math.max(e - this.t, 0); n < t.t; ++n)
                    r[this.t + n - e] = this.am(e - n, t[n], r, 0, 0, this.t + n - e);
                r.clamp(),
                r.drShiftTo(1, r)
            }
            ,
            t.prototype.modInt = function(t) {
                if (t <= 0)
                    return 0;
                var e = this.DV % t
                  , r = this.s < 0 ? t - 1 : 0;
                if (this.t > 0)
                    if (0 == e)
                        r = this[0] % t;
                    else
                        for (var n = this.t - 1; n >= 0; --n)
                            r = (e * r + this[n]) % t;
                return r
            }
            ,
            t.prototype.millerRabin = function(e) {
                var r = this.subtract(t.ONE)
                  , n = r.getLowestSetBit();
                if (n <= 0)
                    return !1;
                var i = r.shiftRight(n);
                (e = e + 1 >> 1) > I.length && (e = I.length);
                for (var o = M(), s = 0; s < e; ++s) {
                    o.fromInt(I[Math.floor(Math.random() * I.length)]);
                    var u = o.modPow(i, this);
                    if (0 != u.compareTo(t.ONE) && 0 != u.compareTo(r)) {
                        for (var a = 1; a++ < n && 0 != u.compareTo(r); )
                            if (0 == (u = u.modPowInt(2, this)).compareTo(t.ONE))
                                return !1;
                        if (0 != u.compareTo(r))
                            return !1
                    }
                }
                return !0
            }
            ,
            t.prototype.square = function() {
                var t = M();
                return this.squareTo(t),
                t
            }
            ,
            t.prototype.gcda = function(t, e) {
                var r = this.s < 0 ? this.negate() : this.clone()
                  , n = t.s < 0 ? t.negate() : t.clone();
                if (r.compareTo(n) < 0) {
                    var i = r;
                    r = n,
                    n = i
                }
                var o = r.getLowestSetBit()
                  , s = n.getLowestSetBit();
                if (s < 0)
                    e(r);
                else {
                    o < s && (s = o),
                    s > 0 && (r.rShiftTo(s, r),
                    n.rShiftTo(s, n));
                    var u = function() {
                        (o = r.getLowestSetBit()) > 0 && r.rShiftTo(o, r),
                        (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
                        r.compareTo(n) >= 0 ? (r.subTo(n, r),
                        r.rShiftTo(1, r)) : (n.subTo(r, n),
                        n.rShiftTo(1, n)),
                        r.signum() > 0 ? setTimeout(u, 0) : (s > 0 && n.lShiftTo(s, n),
                        setTimeout((function() {
                            e(n)
                        }
                        ), 0))
                    };
                    setTimeout(u, 10)
                }
            }
            ,
            t.prototype.fromNumberAsync = function(e, r, n, i) {
                if ("number" == typeof r)
                    if (e < 2)
                        this.fromInt(1);
                    else {
                        this.fromNumber(e, n),
                        this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), s, this),
                        this.isEven() && this.dAddOffset(1, 0);
                        var o = this
                          , u = function() {
                            o.dAddOffset(2, 0),
                            o.bitLength() > e && o.subTo(t.ONE.shiftLeft(e - 1), o),
                            o.isProbablePrime(r) ? setTimeout((function() {
                                i()
                            }
                            ), 0) : setTimeout(u, 0)
                        };
                        setTimeout(u, 0)
                    }
                else {
                    var a = []
                      , h = 7 & e;
                    a.length = 1 + (e >> 3),
                    r.nextBytes(a),
                    h > 0 ? a[0] &= (1 << h) - 1 : a[0] = 0,
                    this.fromString(a, 256)
                }
            }
            ,
            t
        }(), O = function() {
            function t() {}
            return t.prototype.convert = function(t) {
                return t
            }
            ,
            t.prototype.revert = function(t) {
                return t
            }
            ,
            t.prototype.mulTo = function(t, e, r) {
                t.multiplyTo(e, r)
            }
            ,
            t.prototype.sqrTo = function(t, e) {
                t.squareTo(e)
            }
            ,
            t
        }(), V = function() {
            function t(t) {
                this.m = t
            }
            return t.prototype.convert = function(t) {
                return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
            }
            ,
            t.prototype.revert = function(t) {
                return t
            }
            ,
            t.prototype.reduce = function(t) {
                t.divRemTo(this.m, null, t)
            }
            ,
            t.prototype.mulTo = function(t, e, r) {
                t.multiplyTo(e, r),
                this.reduce(r)
            }
            ,
            t.prototype.sqrTo = function(t, e) {
                t.squareTo(e),
                this.reduce(e)
            }
            ,
            t
        }(), N = function() {
            function t(t) {
                this.m = t,
                this.mp = t.invDigit(),
                this.mpl = 32767 & this.mp,
                this.mph = this.mp >> 15,
                this.um = (1 << t.DB - 15) - 1,
                this.mt2 = 2 * t.t
            }
            return t.prototype.convert = function(t) {
                var e = M();
                return t.abs().dlShiftTo(this.m.t, e),
                e.divRemTo(this.m, null, e),
                t.s < 0 && e.compareTo(_.ZERO) > 0 && this.m.subTo(e, e),
                e
            }
            ,
            t.prototype.revert = function(t) {
                var e = M();
                return t.copyTo(e),
                this.reduce(e),
                e
            }
            ,
            t.prototype.reduce = function(t) {
                for (; t.t <= this.mt2; )
                    t[t.t++] = 0;
                for (var e = 0; e < this.m.t; ++e) {
                    var r = 32767 & t[e]
                      , n = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (t[r = e + this.m.t] += this.m.am(0, n, t, e, 0, this.m.t); t[r] >= t.DV; )
                        t[r] -= t.DV,
                        t[++r]++
                }
                t.clamp(),
                t.drShiftTo(this.m.t, t),
                t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
            }
            ,
            t.prototype.mulTo = function(t, e, r) {
                t.multiplyTo(e, r),
                this.reduce(r)
            }
            ,
            t.prototype.sqrTo = function(t, e) {
                t.squareTo(e),
                this.reduce(e)
            }
            ,
            t
        }(), L = function() {
            function t(t) {
                this.m = t,
                this.r2 = M(),
                this.q3 = M(),
                _.ONE.dlShiftTo(2 * t.t, this.r2),
                this.mu = this.r2.divide(t)
            }
            return t.prototype.convert = function(t) {
                if (t.s < 0 || t.t > 2 * this.m.t)
                    return t.mod(this.m);
                if (t.compareTo(this.m) < 0)
                    return t;
                var e = M();
                return t.copyTo(e),
                this.reduce(e),
                e
            }
            ,
            t.prototype.revert = function(t) {
                return t
            }
            ,
            t.prototype.reduce = function(t) {
                for (t.drShiftTo(this.m.t - 1, this.r2),
                t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                t.clamp()),
                this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; )
                    t.dAddOffset(1, this.m.t + 1);
                for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
                    t.subTo(this.m, t)
            }
            ,
            t.prototype.mulTo = function(t, e, r) {
                t.multiplyTo(e, r),
                this.reduce(r)
            }
            ,
            t.prototype.sqrTo = function(t, e) {
                t.squareTo(e),
                this.reduce(e)
            }
            ,
            t
        }();
        function M() {
            return new _(null)
        }
        function j(t, e) {
            return new _(t,e)
        }
        var C = "undefined" !== typeof navigator;
        C && "Microsoft Internet Explorer" == navigator.appName ? (_.prototype.am = function(t, e, r, n, i, o) {
            for (var s = 32767 & e, u = e >> 15; --o >= 0; ) {
                var a = 32767 & this[t]
                  , h = this[t++] >> 15
                  , f = u * a + h * s;
                i = ((a = s * a + ((32767 & f) << 15) + r[n] + (1073741823 & i)) >>> 30) + (f >>> 15) + u * h + (i >>> 30),
                r[n++] = 1073741823 & a
            }
            return i
        }
        ,
        D = 30) : C && "Netscape" != navigator.appName ? (_.prototype.am = function(t, e, r, n, i, o) {
            for (; --o >= 0; ) {
                var s = e * this[t++] + r[n] + i;
                i = Math.floor(s / 67108864),
                r[n++] = 67108863 & s
            }
            return i
        }
        ,
        D = 26) : (_.prototype.am = function(t, e, r, n, i, o) {
            for (var s = 16383 & e, u = e >> 14; --o >= 0; ) {
                var a = 16383 & this[t]
                  , h = this[t++] >> 14
                  , f = u * a + h * s;
                i = ((a = s * a + ((16383 & f) << 14) + r[n] + i) >> 28) + (f >> 14) + u * h,
                r[n++] = 268435455 & a
            }
            return i
        }
        ,
        D = 28),
        _.prototype.DB = D,
        _.prototype.DM = (1 << D) - 1,
        _.prototype.DV = 1 << D;
        _.prototype.FV = Math.pow(2, 52),
        _.prototype.F1 = 52 - D,
        _.prototype.F2 = 2 * D - 52;
        var P, U, q = [];
        for (P = "0".charCodeAt(0),
        U = 0; U <= 9; ++U)
            q[P++] = U;
        for (P = "a".charCodeAt(0),
        U = 10; U < 36; ++U)
            q[P++] = U;
        for (P = "A".charCodeAt(0),
        U = 10; U < 36; ++U)
            q[P++] = U;
        function H(t, e) {
            var r = q[t.charCodeAt(e)];
            return null == r ? -1 : r
        }
        function k(t) {
            var e = M();
            return e.fromInt(t),
            e
        }
        function F(t) {
            var e, r = 1;
            return 0 != (e = t >>> 16) && (t = e,
            r += 16),
            0 != (e = t >> 8) && (t = e,
            r += 8),
            0 != (e = t >> 4) && (t = e,
            r += 4),
            0 != (e = t >> 2) && (t = e,
            r += 2),
            0 != (e = t >> 1) && (t = e,
            r += 1),
            r
        }
        _.ZERO = k(0),
        _.ONE = k(1);
        var K = function() {
            function t() {
                this.i = 0,
                this.j = 0,
                this.S = []
            }
            return t.prototype.init = function(t) {
                var e, r, n;
                for (e = 0; e < 256; ++e)
                    this.S[e] = e;
                for (r = 0,
                e = 0; e < 256; ++e)
                    r = r + this.S[e] + t[e % t.length] & 255,
                    n = this.S[e],
                    this.S[e] = this.S[r],
                    this.S[r] = n;
                this.i = 0,
                this.j = 0
            }
            ,
            t.prototype.next = function() {
                var t;
                return this.i = this.i + 1 & 255,
                this.j = this.j + this.S[this.i] & 255,
                t = this.S[this.i],
                this.S[this.i] = this.S[this.j],
                this.S[this.j] = t,
                this.S[t + this.S[this.i] & 255]
            }
            ,
            t
        }();
        var Y, z, Z = null;
        if (null == Z) {
            Z = [],
            z = 0;
            var G = void 0;
            if (window.crypto && window.crypto.getRandomValues) {
                var $ = new Uint32Array(256);
                for (window.crypto.getRandomValues($),
                G = 0; G < $.length; ++G)
                    Z[z++] = 255 & $[G]
            }
            var J = 0
              , W = function(t) {
                if ((J = J || 0) >= 256 || z >= 256)
                    window.removeEventListener ? window.removeEventListener("mousemove", W, !1) : window.detachEvent && window.detachEvent("onmousemove", W);
                else
                    try {
                        var e = t.x + t.y;
                        Z[z++] = 255 & e,
                        J += 1
                    } catch (r) {}
            };
            window.addEventListener ? window.addEventListener("mousemove", W, !1) : window.attachEvent && window.attachEvent("onmousemove", W)
        }
        function X() {
            if (null == Y) {
                for (Y = new K; z < 256; ) {
                    var t = Math.floor(65536 * Math.random());
                    Z[z++] = 255 & t
                }
                for (Y.init(Z),
                z = 0; z < Z.length; ++z)
                    Z[z] = 0;
                z = 0
            }
            return Y.next()
        }
        var Q = function() {
            function t() {}
            return t.prototype.nextBytes = function(t) {
                for (var e = 0; e < t.length; ++e)
                    t[e] = X()
            }
            ,
            t
        }();
        var tt = function() {
            function t() {
                this.n = null,
                this.e = 0,
                this.d = null,
                this.p = null,
                this.q = null,
                this.dmp1 = null,
                this.dmq1 = null,
                this.coeff = null
            }
            return t.prototype.doPublic = function(t) {
                return t.modPowInt(this.e, this.n)
            }
            ,
            t.prototype.doPrivate = function(t) {
                if (null == this.p || null == this.q)
                    return t.modPow(this.d, this.n);
                for (var e = t.mod(this.p).modPow(this.dmp1, this.p), r = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(r) < 0; )
                    e = e.add(this.p);
                return e.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r)
            }
            ,
            t.prototype.setPublic = function(t, e) {
                null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = j(t, 16),
                this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
            }
            ,
            t.prototype.encrypt = function(t) {
                var e = this.n.bitLength() + 7 >> 3
                  , r = function(t, e) {
                    if (e < t.length + 11)
                        return console.error("Message too long for RSA"),
                        null;
                    for (var r = [], n = t.length - 1; n >= 0 && e > 0; ) {
                        var i = t.charCodeAt(n--);
                        i < 128 ? r[--e] = i : i > 127 && i < 2048 ? (r[--e] = 63 & i | 128,
                        r[--e] = i >> 6 | 192) : (r[--e] = 63 & i | 128,
                        r[--e] = i >> 6 & 63 | 128,
                        r[--e] = i >> 12 | 224)
                    }
                    r[--e] = 0;
                    for (var o = new Q, s = []; e > 2; ) {
                        for (s[0] = 0; 0 == s[0]; )
                            o.nextBytes(s);
                        r[--e] = s[0]
                    }
                    return r[--e] = 2,
                    r[--e] = 0,
                    new _(r)
                }(t, e);
                if (null == r)
                    return null;
                var n = this.doPublic(r);
                if (null == n)
                    return null;
                for (var i = n.toString(16), o = i.length, s = 0; s < 2 * e - o; s++)
                    i = "0" + i;
                return i
            }
            ,
            t.prototype.setPrivate = function(t, e, r) {
                null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = j(t, 16),
                this.e = parseInt(e, 16),
                this.d = j(r, 16)) : console.error("Invalid RSA private key")
            }
            ,
            t.prototype.setPrivateEx = function(t, e, r, n, i, o, s, u) {
                null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = j(t, 16),
                this.e = parseInt(e, 16),
                this.d = j(r, 16),
                this.p = j(n, 16),
                this.q = j(i, 16),
                this.dmp1 = j(o, 16),
                this.dmq1 = j(s, 16),
                this.coeff = j(u, 16)) : console.error("Invalid RSA private key")
            }
            ,
            t.prototype.generate = function(t, e) {
                var r = new Q
                  , n = t >> 1;
                this.e = parseInt(e, 16);
                for (var i = new _(e,16); ; ) {
                    for (; this.p = new _(t - n,1,r),
                    0 != this.p.subtract(_.ONE).gcd(i).compareTo(_.ONE) || !this.p.isProbablePrime(10); )
                        ;
                    for (; this.q = new _(n,1,r),
                    0 != this.q.subtract(_.ONE).gcd(i).compareTo(_.ONE) || !this.q.isProbablePrime(10); )
                        ;
                    if (this.p.compareTo(this.q) <= 0) {
                        var o = this.p;
                        this.p = this.q,
                        this.q = o
                    }
                    var s = this.p.subtract(_.ONE)
                      , u = this.q.subtract(_.ONE)
                      , a = s.multiply(u);
                    if (0 == a.gcd(i).compareTo(_.ONE)) {
                        this.n = this.p.multiply(this.q),
                        this.d = i.modInverse(a),
                        this.dmp1 = this.d.mod(s),
                        this.dmq1 = this.d.mod(u),
                        this.coeff = this.q.modInverse(this.p);
                        break
                    }
                }
            }
            ,
            t.prototype.decrypt = function(t) {
                var e = j(t, 16)
                  , r = this.doPrivate(e);
                return null == r ? null : function(t, e) {
                    var r = t.toByteArray()
                      , n = 0;
                    for (; n < r.length && 0 == r[n]; )
                        ++n;
                    if (r.length - n != e - 1 || 2 != r[n])
                        return null;
                    ++n;
                    for (; 0 != r[n]; )
                        if (++n >= r.length)
                            return null;
                    var i = "";
                    for (; ++n < r.length; ) {
                        var o = 255 & r[n];
                        o < 128 ? i += String.fromCharCode(o) : o > 191 && o < 224 ? (i += String.fromCharCode((31 & o) << 6 | 63 & r[n + 1]),
                        ++n) : (i += String.fromCharCode((15 & o) << 12 | (63 & r[n + 1]) << 6 | 63 & r[n + 2]),
                        n += 2)
                    }
                    return i
                }(r, this.n.bitLength() + 7 >> 3)
            }
            ,
            t.prototype.generateAsync = function(t, e, r) {
                var n = new Q
                  , i = t >> 1;
                this.e = parseInt(e, 16);
                var o = new _(e,16)
                  , s = this
                  , u = function() {
                    var e = function() {
                        if (s.p.compareTo(s.q) <= 0) {
                            var t = s.p;
                            s.p = s.q,
                            s.q = t
                        }
                        var e = s.p.subtract(_.ONE)
                          , n = s.q.subtract(_.ONE)
                          , i = e.multiply(n);
                        0 == i.gcd(o).compareTo(_.ONE) ? (s.n = s.p.multiply(s.q),
                        s.d = o.modInverse(i),
                        s.dmp1 = s.d.mod(e),
                        s.dmq1 = s.d.mod(n),
                        s.coeff = s.q.modInverse(s.p),
                        setTimeout((function() {
                            r()
                        }
                        ), 0)) : setTimeout(u, 0)
                    }
                      , a = function() {
                        s.q = M(),
                        s.q.fromNumberAsync(i, 1, n, (function() {
                            s.q.subtract(_.ONE).gcda(o, (function(t) {
                                0 == t.compareTo(_.ONE) && s.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(a, 0)
                            }
                            ))
                        }
                        ))
                    }
                      , h = function() {
                        s.p = M(),
                        s.p.fromNumberAsync(t - i, 1, n, (function() {
                            s.p.subtract(_.ONE).gcda(o, (function(t) {
                                0 == t.compareTo(_.ONE) && s.p.isProbablePrime(10) ? setTimeout(a, 0) : setTimeout(h, 0)
                            }
                            ))
                        }
                        ))
                    };
                    setTimeout(h, 0)
                };
                setTimeout(u, 0)
            }
            ,
            t.prototype.sign = function(t, e, r) {
                var n = function(t, e) {
                    if (e < t.length + 22)
                        return console.error("Message too long for RSA"),
                        null;
                    for (var r = e - t.length - 6, n = "", i = 0; i < r; i += 2)
                        n += "ff";
                    return j("0001" + n + "00" + t, 16)
                }((et[r] || "") + e(t).toString(), this.n.bitLength() / 4);
                if (null == n)
                    return null;
                var i = this.doPrivate(n);
                if (null == i)
                    return null;
                var o = i.toString(16);
                return 0 == (1 & o.length) ? o : "0" + o
            }
            ,
            t.prototype.verify = function(t, e, r) {
                var n = j(e, 16)
                  , i = this.doPublic(n);
                return null == i ? null : function(t) {
                    for (var e in et)
                        if (et.hasOwnProperty(e)) {
                            var r = et[e]
                              , n = r.length;
                            if (t.substr(0, n) == r)
                                return t.substr(n)
                        }
                    return t
                }(i.toString(16).replace(/^1f+00/, "")) == r(t).toString()
            }
            ,
            t
        }();
        var et = {
            md2: "3020300c06082a864886f70d020205000410",
            md5: "3020300c06082a864886f70d020505000410",
            sha1: "3021300906052b0e03021a05000414",
            sha224: "302d300d06096086480165030402040500041c",
            sha256: "3031300d060960864801650304020105000420",
            sha384: "3041300d060960864801650304020205000430",
            sha512: "3051300d060960864801650304020305000440",
            ripemd160: "3021300906052b2403020105000414"
        };
        var rt = {};
        rt.lang = {
            extend: function(t, e, r) {
                if (!e || !t)
                    throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                var n = function() {};
                if (n.prototype = e.prototype,
                t.prototype = new n,
                t.prototype.constructor = t,
                t.superclass = e.prototype,
                e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e),
                r) {
                    var i;
                    for (i in r)
                        t.prototype[i] = r[i];
                    var o = function() {}
                      , s = ["toString", "valueOf"];
                    try {
                        /MSIE/.test(navigator.userAgent) && (o = function(t, e) {
                            for (i = 0; i < s.length; i += 1) {
                                var r = s[i]
                                  , n = e[r];
                                "function" === typeof n && n != Object.prototype[r] && (t[r] = n)
                            }
                        }
                        )
                    } catch (u) {}
                    o(t.prototype, r)
                }
            }
        };
        var nt = {};
        "undefined" != typeof nt.asn1 && nt.asn1 || (nt.asn1 = {}),
        nt.asn1.ASN1Util = new function() {
            this.integerToByteHex = function(t) {
                var e = t.toString(16);
                return e.length % 2 == 1 && (e = "0" + e),
                e
            }
            ,
            this.bigIntToMinTwosComplementsHex = function(t) {
                var e = t.toString(16);
                if ("-" != e.substr(0, 1))
                    e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                else {
                    var r = e.substr(1).length;
                    r % 2 == 1 ? r += 1 : e.match(/^[0-7]/) || (r += 2);
                    for (var n = "", i = 0; i < r; i++)
                        n += "f";
                    e = new _(n,16).xor(t).add(_.ONE).toString(16).replace(/^-/, "")
                }
                return e
            }
            ,
            this.getPEMStringFromHex = function(t, e) {
                return hextopem(t, e)
            }
            ,
            this.newObject = function(t) {
                var e = nt.asn1
                  , r = e.DERBoolean
                  , n = e.DERInteger
                  , i = e.DERBitString
                  , o = e.DEROctetString
                  , s = e.DERNull
                  , u = e.DERObjectIdentifier
                  , a = e.DEREnumerated
                  , h = e.DERUTF8String
                  , f = e.DERNumericString
                  , c = e.DERPrintableString
                  , l = e.DERTeletexString
                  , p = e.DERIA5String
                  , d = e.DERUTCTime
                  , g = e.DERGeneralizedTime
                  , y = e.DERSequence
                  , m = e.DERSet
                  , v = e.DERTaggedObject
                  , b = e.ASN1Util.newObject
                  , w = Object.keys(t);
                if (1 != w.length)
                    throw "key of param shall be only one.";
                var E = w[0];
                if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + E + ":"))
                    throw "undefined key: " + E;
                if ("bool" == E)
                    return new r(t[E]);
                if ("int" == E)
                    return new n(t[E]);
                if ("bitstr" == E)
                    return new i(t[E]);
                if ("octstr" == E)
                    return new o(t[E]);
                if ("null" == E)
                    return new s(t[E]);
                if ("oid" == E)
                    return new u(t[E]);
                if ("enum" == E)
                    return new a(t[E]);
                if ("utf8str" == E)
                    return new h(t[E]);
                if ("numstr" == E)
                    return new f(t[E]);
                if ("prnstr" == E)
                    return new c(t[E]);
                if ("telstr" == E)
                    return new l(t[E]);
                if ("ia5str" == E)
                    return new p(t[E]);
                if ("utctime" == E)
                    return new d(t[E]);
                if ("gentime" == E)
                    return new g(t[E]);
                if ("seq" == E) {
                    for (var S = t[E], T = [], D = 0; D < S.length; D++) {
                        var B = b(S[D]);
                        T.push(B)
                    }
                    return new y({
                        array: T
                    })
                }
                if ("set" == E) {
                    for (S = t[E],
                    T = [],
                    D = 0; D < S.length; D++) {
                        B = b(S[D]);
                        T.push(B)
                    }
                    return new m({
                        array: T
                    })
                }
                if ("tag" == E) {
                    var x = t[E];
                    if ("[object Array]" === Object.prototype.toString.call(x) && 3 == x.length) {
                        var A = b(x[2]);
                        return new v({
                            tag: x[0],
                            explicit: x[1],
                            obj: A
                        })
                    }
                    var I = {};
                    if (void 0 !== x.explicit && (I.explicit = x.explicit),
                    void 0 !== x.tag && (I.tag = x.tag),
                    void 0 === x.obj)
                        throw "obj shall be specified for 'tag'.";
                    return I.obj = b(x.obj),
                    new v(I)
                }
            }
            ,
            this.jsonToASN1HEX = function(t) {
                return this.newObject(t).getEncodedHex()
            }
        }
        ,
        nt.asn1.ASN1Util.oidHexToInt = function(t) {
            for (var e = "", r = parseInt(t.substr(0, 2), 16), n = (e = Math.floor(r / 40) + "." + r % 40,
            ""), i = 2; i < t.length; i += 2) {
                var o = ("00000000" + parseInt(t.substr(i, 2), 16).toString(2)).slice(-8);
                if (n += o.substr(1, 7),
                "0" == o.substr(0, 1))
                    e = e + "." + new _(n,2).toString(10),
                    n = ""
            }
            return e
        }
        ,
        nt.asn1.ASN1Util.oidIntToHex = function(t) {
            var e = function(t) {
                var e = t.toString(16);
                return 1 == e.length && (e = "0" + e),
                e
            }
              , r = function(t) {
                var r = ""
                  , n = new _(t,10).toString(2)
                  , i = 7 - n.length % 7;
                7 == i && (i = 0);
                for (var o = "", s = 0; s < i; s++)
                    o += "0";
                n = o + n;
                for (s = 0; s < n.length - 1; s += 7) {
                    var u = n.substr(s, 7);
                    s != n.length - 7 && (u = "1" + u),
                    r += e(parseInt(u, 2))
                }
                return r
            };
            if (!t.match(/^[0-9.]+$/))
                throw "malformed oid string: " + t;
            var n = ""
              , i = t.split(".")
              , o = 40 * parseInt(i[0]) + parseInt(i[1]);
            n += e(o),
            i.splice(0, 2);
            for (var s = 0; s < i.length; s++)
                n += r(i[s]);
            return n
        }
        ,
        nt.asn1.ASN1Object = function() {
            this.getLengthHexFromValue = function() {
                if ("undefined" == typeof this.hV || null == this.hV)
                    throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1)
                    throw "value hex must be even length: n=0,v=" + this.hV;
                var t = this.hV.length / 2
                  , e = t.toString(16);
                if (e.length % 2 == 1 && (e = "0" + e),
                t < 128)
                    return e;
                var r = e.length / 2;
                if (r > 15)
                    throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                return (128 + r).toString(16) + e
            }
            ,
            this.getEncodedHex = function() {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                this.hL = this.getLengthHexFromValue(),
                this.hTLV = this.hT + this.hL + this.hV,
                this.isModified = !1),
                this.hTLV
            }
            ,
            this.getValueHex = function() {
                return this.getEncodedHex(),
                this.hV
            }
            ,
            this.getFreshValueHex = function() {
                return ""
            }
        }
        ,
        nt.asn1.DERAbstractString = function(t) {
            nt.asn1.DERAbstractString.superclass.constructor.call(this);
            this.getString = function() {
                return this.s
            }
            ,
            this.setString = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = t,
                this.hV = stohex(this.s)
            }
            ,
            this.setStringHex = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = t
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof t && ("string" == typeof t ? this.setString(t) : "undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex))
        }
        ,
        rt.lang.extend(nt.asn1.DERAbstractString, nt.asn1.ASN1Object),
        nt.asn1.DERAbstractTime = function(t) {
            nt.asn1.DERAbstractTime.superclass.constructor.call(this);
            this.localDateToUTC = function(t) {
                return utc = t.getTime() + 6e4 * t.getTimezoneOffset(),
                new Date(utc)
            }
            ,
            this.formatDate = function(t, e, r) {
                var n = this.zeroPadding
                  , i = this.localDateToUTC(t)
                  , o = String(i.getFullYear());
                "utc" == e && (o = o.substr(2, 2));
                var s = o + n(String(i.getMonth() + 1), 2) + n(String(i.getDate()), 2) + n(String(i.getHours()), 2) + n(String(i.getMinutes()), 2) + n(String(i.getSeconds()), 2);
                if (!0 === r) {
                    var u = i.getMilliseconds();
                    if (0 != u) {
                        var a = n(String(u), 3);
                        s = s + "." + (a = a.replace(/[0]+$/, ""))
                    }
                }
                return s + "Z"
            }
            ,
            this.zeroPadding = function(t, e) {
                return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
            }
            ,
            this.getString = function() {
                return this.s
            }
            ,
            this.setString = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = t,
                this.hV = stohex(t)
            }
            ,
            this.setByDateValue = function(t, e, r, n, i, o) {
                var s = new Date(Date.UTC(t, e - 1, r, n, i, o, 0));
                this.setByDate(s)
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
        }
        ,
        rt.lang.extend(nt.asn1.DERAbstractTime, nt.asn1.ASN1Object),
        nt.asn1.DERAbstractStructured = function(t) {
            nt.asn1.DERAbstractString.superclass.constructor.call(this);
            this.setByASN1ObjectArray = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.asn1Array = t
            }
            ,
            this.appendASN1Object = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.asn1Array.push(t)
            }
            ,
            this.asn1Array = new Array,
            "undefined" != typeof t && "undefined" != typeof t.array && (this.asn1Array = t.array)
        }
        ,
        rt.lang.extend(nt.asn1.DERAbstractStructured, nt.asn1.ASN1Object),
        nt.asn1.DERBoolean = function() {
            nt.asn1.DERBoolean.superclass.constructor.call(this),
            this.hT = "01",
            this.hTLV = "0101ff"
        }
        ,
        rt.lang.extend(nt.asn1.DERBoolean, nt.asn1.ASN1Object),
        nt.asn1.DERInteger = function(t) {
            nt.asn1.DERInteger.superclass.constructor.call(this),
            this.hT = "02",
            this.setByBigInteger = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = nt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
            }
            ,
            this.setByInteger = function(t) {
                var e = new _(String(t),10);
                this.setByBigInteger(e)
            }
            ,
            this.setValueHex = function(t) {
                this.hV = t
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof t && ("undefined" != typeof t.bigint ? this.setByBigInteger(t.bigint) : "undefined" != typeof t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
        }
        ,
        rt.lang.extend(nt.asn1.DERInteger, nt.asn1.ASN1Object),
        nt.asn1.DERBitString = function(t) {
            if (void 0 !== t && "undefined" !== typeof t.obj) {
                var e = nt.asn1.ASN1Util.newObject(t.obj);
                t.hex = "00" + e.getEncodedHex()
            }
            nt.asn1.DERBitString.superclass.constructor.call(this),
            this.hT = "03",
            this.setHexValueIncludingUnusedBits = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = t
            }
            ,
            this.setUnusedBitsAndHexValue = function(t, e) {
                if (t < 0 || 7 < t)
                    throw "unused bits shall be from 0 to 7: u = " + t;
                var r = "0" + t;
                this.hTLV = null,
                this.isModified = !0,
                this.hV = r + e
            }
            ,
            this.setByBinaryString = function(t) {
                var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                8 == e && (e = 0);
                for (var r = 0; r <= e; r++)
                    t += "0";
                var n = "";
                for (r = 0; r < t.length - 1; r += 8) {
                    var i = t.substr(r, 8)
                      , o = parseInt(i, 2).toString(16);
                    1 == o.length && (o = "0" + o),
                    n += o
                }
                this.hTLV = null,
                this.isModified = !0,
                this.hV = "0" + e + n
            }
            ,
            this.setByBooleanArray = function(t) {
                for (var e = "", r = 0; r < t.length; r++)
                    1 == t[r] ? e += "1" : e += "0";
                this.setByBinaryString(e)
            }
            ,
            this.newFalseArray = function(t) {
                for (var e = new Array(t), r = 0; r < t; r++)
                    e[r] = !1;
                return e
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : "undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array))
        }
        ,
        rt.lang.extend(nt.asn1.DERBitString, nt.asn1.ASN1Object),
        nt.asn1.DEROctetString = function(t) {
            if (void 0 !== t && "undefined" !== typeof t.obj) {
                var e = nt.asn1.ASN1Util.newObject(t.obj);
                t.hex = e.getEncodedHex()
            }
            nt.asn1.DEROctetString.superclass.constructor.call(this, t),
            this.hT = "04"
        }
        ,
        rt.lang.extend(nt.asn1.DEROctetString, nt.asn1.DERAbstractString),
        nt.asn1.DERNull = function() {
            nt.asn1.DERNull.superclass.constructor.call(this),
            this.hT = "05",
            this.hTLV = "0500"
        }
        ,
        rt.lang.extend(nt.asn1.DERNull, nt.asn1.ASN1Object),
        nt.asn1.DERObjectIdentifier = function(t) {
            var e = function(t) {
                var e = t.toString(16);
                return 1 == e.length && (e = "0" + e),
                e
            }
              , r = function(t) {
                var r = ""
                  , n = new _(t,10).toString(2)
                  , i = 7 - n.length % 7;
                7 == i && (i = 0);
                for (var o = "", s = 0; s < i; s++)
                    o += "0";
                n = o + n;
                for (s = 0; s < n.length - 1; s += 7) {
                    var u = n.substr(s, 7);
                    s != n.length - 7 && (u = "1" + u),
                    r += e(parseInt(u, 2))
                }
                return r
            };
            nt.asn1.DERObjectIdentifier.superclass.constructor.call(this),
            this.hT = "06",
            this.setValueHex = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = t
            }
            ,
            this.setValueOidString = function(t) {
                if (!t.match(/^[0-9.]+$/))
                    throw "malformed oid string: " + t;
                var n = ""
                  , i = t.split(".")
                  , o = 40 * parseInt(i[0]) + parseInt(i[1]);
                n += e(o),
                i.splice(0, 2);
                for (var s = 0; s < i.length; s++)
                    n += r(i[s]);
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = n
            }
            ,
            this.setValueName = function(t) {
                var e = nt.asn1.x509.OID.name2oid(t);
                if ("" === e)
                    throw "DERObjectIdentifier oidName undefined: " + t;
                this.setValueOidString(e)
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            void 0 !== t && ("string" === typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
        }
        ,
        rt.lang.extend(nt.asn1.DERObjectIdentifier, nt.asn1.ASN1Object),
        nt.asn1.DEREnumerated = function(t) {
            nt.asn1.DEREnumerated.superclass.constructor.call(this),
            this.hT = "0a",
            this.setByBigInteger = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = nt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
            }
            ,
            this.setByInteger = function(t) {
                var e = new _(String(t),10);
                this.setByBigInteger(e)
            }
            ,
            this.setValueHex = function(t) {
                this.hV = t
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof t && ("undefined" != typeof t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
        }
        ,
        rt.lang.extend(nt.asn1.DEREnumerated, nt.asn1.ASN1Object),
        nt.asn1.DERUTF8String = function(t) {
            nt.asn1.DERUTF8String.superclass.constructor.call(this, t),
            this.hT = "0c"
        }
        ,
        rt.lang.extend(nt.asn1.DERUTF8String, nt.asn1.DERAbstractString),
        nt.asn1.DERNumericString = function(t) {
            nt.asn1.DERNumericString.superclass.constructor.call(this, t),
            this.hT = "12"
        }
        ,
        rt.lang.extend(nt.asn1.DERNumericString, nt.asn1.DERAbstractString),
        nt.asn1.DERPrintableString = function(t) {
            nt.asn1.DERPrintableString.superclass.constructor.call(this, t),
            this.hT = "13"
        }
        ,
        rt.lang.extend(nt.asn1.DERPrintableString, nt.asn1.DERAbstractString),
        nt.asn1.DERTeletexString = function(t) {
            nt.asn1.DERTeletexString.superclass.constructor.call(this, t),
            this.hT = "14"
        }
        ,
        rt.lang.extend(nt.asn1.DERTeletexString, nt.asn1.DERAbstractString),
        nt.asn1.DERIA5String = function(t) {
            nt.asn1.DERIA5String.superclass.constructor.call(this, t),
            this.hT = "16"
        }
        ,
        rt.lang.extend(nt.asn1.DERIA5String, nt.asn1.DERAbstractString),
        nt.asn1.DERUTCTime = function(t) {
            nt.asn1.DERUTCTime.superclass.constructor.call(this, t),
            this.hT = "17",
            this.setByDate = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.date = t,
                this.s = this.formatDate(this.date, "utc"),
                this.hV = stohex(this.s)
            }
            ,
            this.getFreshValueHex = function() {
                return "undefined" == typeof this.date && "undefined" == typeof this.s && (this.date = new Date,
                this.s = this.formatDate(this.date, "utc"),
                this.hV = stohex(this.s)),
                this.hV
            }
            ,
            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
        }
        ,
        rt.lang.extend(nt.asn1.DERUTCTime, nt.asn1.DERAbstractTime),
        nt.asn1.DERGeneralizedTime = function(t) {
            nt.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
            this.hT = "18",
            this.withMillis = !1,
            this.setByDate = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.date = t,
                this.s = this.formatDate(this.date, "gen", this.withMillis),
                this.hV = stohex(this.s)
            }
            ,
            this.getFreshValueHex = function() {
                return void 0 === this.date && void 0 === this.s && (this.date = new Date,
                this.s = this.formatDate(this.date, "gen", this.withMillis),
                this.hV = stohex(this.s)),
                this.hV
            }
            ,
            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date),
            !0 === t.millis && (this.withMillis = !0))
        }
        ,
        rt.lang.extend(nt.asn1.DERGeneralizedTime, nt.asn1.DERAbstractTime),
        nt.asn1.DERSequence = function(t) {
            nt.asn1.DERSequence.superclass.constructor.call(this, t),
            this.hT = "30",
            this.getFreshValueHex = function() {
                for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                    t += this.asn1Array[e].getEncodedHex()
                }
                return this.hV = t,
                this.hV
            }
        }
        ,
        rt.lang.extend(nt.asn1.DERSequence, nt.asn1.DERAbstractStructured),
        nt.asn1.DERSet = function(t) {
            nt.asn1.DERSet.superclass.constructor.call(this, t),
            this.hT = "31",
            this.sortFlag = !0,
            this.getFreshValueHex = function() {
                for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                    var r = this.asn1Array[e];
                    t.push(r.getEncodedHex())
                }
                return 1 == this.sortFlag && t.sort(),
                this.hV = t.join(""),
                this.hV
            }
            ,
            "undefined" != typeof t && "undefined" != typeof t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
        }
        ,
        rt.lang.extend(nt.asn1.DERSet, nt.asn1.DERAbstractStructured),
        nt.asn1.DERTaggedObject = function(t) {
            nt.asn1.DERTaggedObject.superclass.constructor.call(this),
            this.hT = "a0",
            this.hV = "",
            this.isExplicit = !0,
            this.asn1Object = null,
            this.setASN1Object = function(t, e, r) {
                this.hT = e,
                this.isExplicit = t,
                this.asn1Object = r,
                this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                this.hTLV = null,
                this.isModified = !0) : (this.hV = null,
                this.hTLV = r.getEncodedHex(),
                this.hTLV = this.hTLV.replace(/^../, e),
                this.isModified = !1)
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof t && ("undefined" != typeof t.tag && (this.hT = t.tag),
            "undefined" != typeof t.explicit && (this.isExplicit = t.explicit),
            "undefined" != typeof t.obj && (this.asn1Object = t.obj,
            this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        }
        ,
        rt.lang.extend(nt.asn1.DERTaggedObject, nt.asn1.ASN1Object);
        var it = function() {
            var t = function(e, r) {
                return t = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, e) {
                    t.__proto__ = e
                }
                || function(t, e) {
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }
                ,
                t(e, r)
            };
            return function(e, r) {
                if ("function" !== typeof r && null !== r)
                    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                function n() {
                    this.constructor = e
                }
                t(e, r),
                e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }()
          , ot = function(t) {
            function e(r) {
                var n = t.call(this) || this;
                return r && ("string" === typeof r ? n.parseKey(r) : (e.hasPrivateKeyProperty(r) || e.hasPublicKeyProperty(r)) && n.parsePropertiesFrom(r)),
                n
            }
            return it(e, t),
            e.prototype.parseKey = function(t) {
                try {
                    var e = 0
                      , r = 0
                      , n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? m(t) : v.unarmor(t)
                      , i = x.decode(n);
                    if (3 === i.sub.length && (i = i.sub[2].sub[0]),
                    9 === i.sub.length) {
                        e = i.sub[1].getHexStringValue(),
                        this.n = j(e, 16),
                        r = i.sub[2].getHexStringValue(),
                        this.e = parseInt(r, 16);
                        var o = i.sub[3].getHexStringValue();
                        this.d = j(o, 16);
                        var s = i.sub[4].getHexStringValue();
                        this.p = j(s, 16);
                        var u = i.sub[5].getHexStringValue();
                        this.q = j(u, 16);
                        var a = i.sub[6].getHexStringValue();
                        this.dmp1 = j(a, 16);
                        var h = i.sub[7].getHexStringValue();
                        this.dmq1 = j(h, 16);
                        var f = i.sub[8].getHexStringValue();
                        this.coeff = j(f, 16)
                    } else {
                        if (2 !== i.sub.length)
                            return !1;
                        var c = i.sub[1].sub[0];
                        e = c.sub[0].getHexStringValue(),
                        this.n = j(e, 16),
                        r = c.sub[1].getHexStringValue(),
                        this.e = parseInt(r, 16)
                    }
                    return !0
                } catch (l) {
                    return !1
                }
            }
            ,
            e.prototype.getPrivateBaseKey = function() {
                var t = {
                    array: [new nt.asn1.DERInteger({
                        int: 0
                    }), new nt.asn1.DERInteger({
                        bigint: this.n
                    }), new nt.asn1.DERInteger({
                        int: this.e
                    }), new nt.asn1.DERInteger({
                        bigint: this.d
                    }), new nt.asn1.DERInteger({
                        bigint: this.p
                    }), new nt.asn1.DERInteger({
                        bigint: this.q
                    }), new nt.asn1.DERInteger({
                        bigint: this.dmp1
                    }), new nt.asn1.DERInteger({
                        bigint: this.dmq1
                    }), new nt.asn1.DERInteger({
                        bigint: this.coeff
                    })]
                };
                return new nt.asn1.DERSequence(t).getEncodedHex()
            }
            ,
            e.prototype.getPrivateBaseKeyB64 = function() {
                return d(this.getPrivateBaseKey())
            }
            ,
            e.prototype.getPublicBaseKey = function() {
                var t = new nt.asn1.DERSequence({
                    array: [new nt.asn1.DERObjectIdentifier({
                        oid: "1.2.840.113549.1.1.1"
                    }), new nt.asn1.DERNull]
                })
                  , e = new nt.asn1.DERSequence({
                    array: [new nt.asn1.DERInteger({
                        bigint: this.n
                    }), new nt.asn1.DERInteger({
                        int: this.e
                    })]
                })
                  , r = new nt.asn1.DERBitString({
                    hex: "00" + e.getEncodedHex()
                });
                return new nt.asn1.DERSequence({
                    array: [t, r]
                }).getEncodedHex()
            }
            ,
            e.prototype.getPublicBaseKeyB64 = function() {
                return d(this.getPublicBaseKey())
            }
            ,
            e.wordwrap = function(t, e) {
                if (!t)
                    return t;
                var r = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})";
                return t.match(RegExp(r, "g")).join("\n")
            }
            ,
            e.prototype.getPrivateKey = function() {
                var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                return t += e.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
                t += "-----END RSA PRIVATE KEY-----"
            }
            ,
            e.prototype.getPublicKey = function() {
                var t = "-----BEGIN PUBLIC KEY-----\n";
                return t += e.wordwrap(this.getPublicBaseKeyB64()) + "\n",
                t += "-----END PUBLIC KEY-----"
            }
            ,
            e.hasPublicKeyProperty = function(t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
            }
            ,
            e.hasPrivateKeyProperty = function(t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
            }
            ,
            e.prototype.parsePropertiesFrom = function(t) {
                this.n = t.n,
                this.e = t.e,
                t.hasOwnProperty("d") && (this.d = t.d,
                this.p = t.p,
                this.q = t.q,
                this.dmp1 = t.dmp1,
                this.dmq1 = t.dmq1,
                this.coeff = t.coeff)
            }
            ,
            e
        }(tt)
          , st = r(1742)
          , ut = function() {
            function t(t) {
                void 0 === t && (t = {}),
                t = t || {},
                this.default_key_size = t.default_key_size ? parseInt(t.default_key_size, 10) : 1024,
                this.default_public_exponent = t.default_public_exponent || "010001",
                this.log = t.log || !1,
                this.key = null
            }
            return t.prototype.setKey = function(t) {
                this.log && this.key && console.warn("A key was already set, overriding existing."),
                this.key = new ot(t)
            }
            ,
            t.prototype.setPrivateKey = function(t) {
                this.setKey(t)
            }
            ,
            t.prototype.setPublicKey = function(t) {
                this.setKey(t)
            }
            ,
            t.prototype.decrypt = function(t) {
                try {
                    return this.getKey().decrypt(g(t))
                } catch (e) {
                    return !1
                }
            }
            ,
            t.prototype.encrypt = function(t) {
                try {
                    return d(this.getKey().encrypt(t))
                } catch (e) {
                    return !1
                }
            }
            ,
            t.prototype.sign = function(t, e, r) {
                try {
                    return d(this.getKey().sign(t, e, r))
                } catch (n) {
                    return !1
                }
            }
            ,
            t.prototype.verify = function(t, e, r) {
                try {
                    return this.getKey().verify(t, g(e), r)
                } catch (n) {
                    return !1
                }
            }
            ,
            t.prototype.getKey = function(t) {
                if (!this.key) {
                    if (this.key = new ot,
                    t && "[object Function]" === {}.toString.call(t))
                        return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                    this.key.generate(this.default_key_size, this.default_public_exponent)
                }
                return this.key
            }
            ,
            t.prototype.getPrivateKey = function() {
                return this.getKey().getPrivateKey()
            }
            ,
            t.prototype.getPrivateKeyB64 = function() {
                return this.getKey().getPrivateBaseKeyB64()
            }
            ,
            t.prototype.getPublicKey = function() {
                return this.getKey().getPublicKey()
            }
            ,
            t.prototype.getPublicKeyB64 = function() {
                return this.getKey().getPublicBaseKeyB64()
            }
            ,
            t.version = st.version,
            t
        }();
        e.a = ut
    },
    1742: function(t) {
        t.exports = JSON.parse('{"version":"3.2.1"}')
    }
}]);
//# sourceMappingURL=0.f92cc596.chunk.js.map
