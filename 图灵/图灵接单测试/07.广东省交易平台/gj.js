var CryptoJS = require('crypto-js')
const lF = "zxcvbnmlkjhgfdsaqwertyuiop0987654321QWERTYUIOPLKJHGFDSAZXCVBNM"
  , fne = lF + "-@#$%^&*+!";
function qu(e=[]) {
    return e.map(t=>fne[t]).join("")
}
function hne(e) {
    function dne(e, t) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * e + 1, 10);
    case 2:
        return parseInt(Math.random() * (t - e + 1) + e, 10);
    default:
        return 0
    }
}
    return [...Array(e)].map(()=>lF[dne(0, 61)]).join("")
}
var tC = function(t, n) {
    for (var u = n && n.plainObjects ? Object.create(null) : {}, o = 0; o < t.length; ++o)
        typeof t[o] < "u" && (u[o] = t[o]);
    return u
}
var zW = function e(t, n, u) {
    if (!n)
        return t;
    if (typeof n != "object") {
        if ($u(t))
            t.push(n);
        else if (t && typeof t == "object")
            (u && (u.plainObjects || u.allowPrototypes) || !Nd.call(Object.prototype, n)) && (t[n] = !0);
        else
            return [t, n];
        return t
    }
    if (!t || typeof t != "object")
        return [t].concat(n);
    var o = t;
    return $u(t) && !$u(n) && (o = tC(t, u)),
    $u(t) && $u(n) ? (n.forEach(function(r, s) {
        if (Nd.call(t, s)) {
            var i = t[s];
            i && typeof i == "object" && r && typeof r == "object" ? t[s] = e(i, r, u) : t.push(r)
        } else
            t[s] = r
    }),
    t) : Object.keys(n).reduce(function(r, s) {
        var i = n[s];
        return Nd.call(r, s) ? r[s] = e(r[s], i, u) : r[s] = i,
        r
    }, o)
}
  , VW = function(t, n) {
    return Object.keys(n).reduce(function(u, o) {
        return u[o] = n[o],
        u
    }, t)
}
  , YW = function(e, t, n) {
    var u = e.replace(/\+/g, " ");
    if (n === "iso-8859-1")
        return u.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
        return decodeURIComponent(u)
    } catch {
        return u
    }
}
Ld = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
}
np = {
    default: Ld.RFC3986,
    formatters: {
        RFC1738: function(e) {
            return LW.call(e, NW, "+")
        },
        RFC3986: function(e) {
            return String(e)
        }
    },
    RFC1738: Ld.RFC1738,
    RFC3986: Ld.RFC3986
}
ys = np
Fg = ys.default
var xn = function() {
    for (var e = [], t = 0; t < 256; ++t)
        e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e
}()
var HW = np,
    UW = function(t, n, u, o, r) {
    if (t.length === 0)
        return t;
    var s = t;
    if (typeof t == "symbol" ? s = Symbol.prototype.toString.call(t) : typeof t != "string" && (s = String(t)),
    u === "iso-8859-1")
        return escape(s).replace(/%u[0-9a-f]{4}/gi, function(c) {
            return "%26%23" + parseInt(c.slice(2), 16) + "%3B"
        });
    for (var i = "", a = 0; a < s.length; ++a) {
        var l = s.charCodeAt(a);
        if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || r === HW.RFC1738 && (l === 40 || l === 41)) {
            i += s.charAt(a);
            continue
        }
        if (l < 128) {
            i = i + xn[l];
            continue
        }
        if (l < 2048) {
            i = i + (xn[192 | l >> 6] + xn[128 | l & 63]);
            continue
        }
        if (l < 55296 || l >= 57344) {
            i = i + (xn[224 | l >> 12] + xn[128 | l >> 6 & 63] + xn[128 | l & 63]);
            continue
        }
        a += 1,
        l = 65536 + ((l & 1023) << 10 | s.charCodeAt(a) & 1023),
        i += xn[240 | l >> 18] + xn[128 | l >> 12 & 63] + xn[128 | l >> 6 & 63] + xn[128 | l & 63]
    }
    return i
}
  , WW = function(t) {
    for (var n = [{
        obj: {
            o: t
        },
        prop: "o"
    }], u = [], o = 0; o < n.length; ++o)
        for (var r = n[o], s = r.obj[r.prop], i = Object.keys(s), a = 0; a < i.length; ++a) {
            var l = i[a]
              , c = s[l];
            typeof c == "object" && c !== null && u.indexOf(c) === -1 && (n.push({
                obj: s,
                prop: l
            }),
            u.push(c))
        }
    return jW(n),
    t
}
  , GW = function(t) {
    return Object.prototype.toString.call(t) === "[object RegExp]"
}
  , qW = function(t) {
    return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
}
  , KW = function(t, n) {
    return [].concat(t, n)
}
  , QW = function(t, n) {
    if ($u(t)) {
        for (var u = [], o = 0; o < t.length; o += 1)
            u.push(n(t[o]));
        return u
    }
    return n(t)
}
var nC = {
    arrayToObject: tC,
    assign: VW,
    combine: KW,
    compact: WW,
    decode: YW,
    encode: UW,
    isBuffer: qW,
    isRegExp: GW,
    maybeMap: QW,
    merge: zW
}
var xa = nC


bt = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: xa.encode,
    encodeValuesOnly: !1,
    format: Fg,
    formatter: ys.formatters[Fg],
    indices: !1,
    serializeDate: function(t) {
        return XW.call(t)
    },
    skipNulls: !1,
    strictNullHandling: !1
}
qn = Array.isArray
var tG = function(t) {
    if (!t)
        return bt;
    if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
        throw new TypeError("Encoder has to be a function.");
    var n = t.charset || bt.charset;
    if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var u = ys.default;
    if (typeof t.format < "u") {
        if (!JW.call(ys.formatters, t.format))
            throw new TypeError("Unknown format option provided.");
        u = t.format
    }
    var o = ys.formatters[u]
      , r = bt.filter;
    return (typeof t.filter == "function" || qn(t.filter)) && (r = t.filter),
    {
        addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : bt.addQueryPrefix,
        allowDots: typeof t.allowDots > "u" ? bt.allowDots : !!t.allowDots,
        charset: n,
        charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : bt.charsetSentinel,
        delimiter: typeof t.delimiter > "u" ? bt.delimiter : t.delimiter,
        encode: typeof t.encode == "boolean" ? t.encode : bt.encode,
        encoder: typeof t.encoder == "function" ? t.encoder : bt.encoder,
        encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : bt.encodeValuesOnly,
        filter: r,
        format: u,
        formatter: o,
        serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : bt.serializeDate,
        skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : bt.skipNulls,
        sort: typeof t.sort == "function" ? t.sort : null,
        strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : bt.strictNullHandling
    }
}
var rC = function(e, t) {
    ZW.apply(e, qn(t) ? t : [t])
}
var Q5 = Function.prototype.bind || OU
var Ei = Q5
var TU = Q5
var zU = Ei.call(Function.call, RegExp.prototype.exec)
sl = Ei.call(Function.call, String.prototype.slice)
ig = Ei.call(Function.call, String.prototype.replace)
var VU = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
PU = TU.call(Function.call, Object.prototype.hasOwnProperty)
ol = PU
var sg = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
}
var bU = function() {
    return typeof rg != "function" || typeof Symbol != "function" || typeof rg("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : BU()
}
Tr = bU()
vt = Object.getPrototypeOf || (MU ? function(e) {
    return e.__proto__
}
: null)
var Pe;
var ao = SyntaxError
Lr = {}
var RU = typeof Uint8Array > "u" || !vt ? Pe : vt(Uint8Array)
var sr = Object.getOwnPropertyDescriptor;
var IU = sr ? function() {
    try {
        return arguments.callee,
        Td
    } catch {
        try {
            return sr(arguments, "callee").get
        } catch {
            return Td
        }
    }
}() : Td
var Uy = Function;
Gr = TypeError
var ZW = Array.prototype.push
var $W = function(t) {
    return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
}
var ir = {
    "%AggregateError%": typeof AggregateError > "u" ? Pe : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Pe : ArrayBuffer,
    "%ArrayIteratorPrototype%": Tr && vt ? vt([][Symbol.iterator]()) : Pe,
    "%AsyncFromSyncIteratorPrototype%": Pe,
    "%AsyncFunction%": Lr,
    "%AsyncGenerator%": Lr,
    "%AsyncGeneratorFunction%": Lr,
    "%AsyncIteratorPrototype%": Lr,
    "%Atomics%": typeof Atomics > "u" ? Pe : Atomics,
    "%BigInt%": typeof BigInt > "u" ? Pe : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? Pe : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? Pe : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? Pe : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? Pe : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? Pe : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Pe : FinalizationRegistry,
    "%Function%": Uy,
    "%GeneratorFunction%": Lr,
    "%Int8Array%": typeof Int8Array > "u" ? Pe : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? Pe : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? Pe : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": Tr && vt ? vt(vt([][Symbol.iterator]())) : Pe,
    "%JSON%": typeof JSON == "object" ? JSON : Pe,
    "%Map%": typeof Map > "u" ? Pe : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !Tr || !vt ? Pe : vt(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? Pe : Promise,
    "%Proxy%": typeof Proxy > "u" ? Pe : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? Pe : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? Pe : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !Tr || !vt ? Pe : vt(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Pe : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": Tr && vt ? vt(""[Symbol.iterator]()) : Pe,
    "%Symbol%": Tr ? Symbol : Pe,
    "%SyntaxError%": ao,
    "%ThrowTypeError%": IU,
    "%TypedArray%": RU,
    "%TypeError%": Gr,
    "%Uint8Array%": typeof Uint8Array > "u" ? Pe : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Pe : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? Pe : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? Pe : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? Pe : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? Pe : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? Pe : WeakSet
};
var PU = TU.call(Function.call, Object.prototype.hasOwnProperty)
var UU = function(t) {
    var n = sl(t, 0, 1)
      , u = sl(t, -1);
    if (n === "%" && u !== "%")
        throw new ao("invalid intrinsic syntax, expected closing `%`");
    if (u === "%" && n !== "%")
        throw new ao("invalid intrinsic syntax, expected opening `%`");
    var o = [];
    return ig(t, VU, function(r, s, i, a) {
        o[o.length] = i ? ig(a, YU, "$1") : s || r
    }),
    o
}
var WU = function(t, n) {
    var u = t, o;
    if (ol(sg, u) && (o = sg[u],
    u = "%" + o[0] + "%"),
    ol(ir, u)) {
        var r = ir[u];
        if (r === Lr && (r = NU(u)),
        typeof r > "u" && !n)
            throw new Gr("intrinsic " + t + " exists, but is not available. Please file an issue!");
        return {
            alias: o,
            name: u,
            value: r
        }
    }
    throw new ao("intrinsic " + t + " does not exist!")
}
var J5 = function(t, n) {
    if (typeof t != "string" || t.length === 0)
        throw new Gr("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof n != "boolean")
        throw new Gr('"allowMissing" argument must be a boolean');
    if (zU(/^%?[^%]*%?$/, t) === null)
        throw new ao("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var u = UU(t)
      , o = u.length > 0 ? u[0] : ""
      , r = WU("%" + o + "%", n)
      , s = r.name
      , i = r.value
      , a = !1
      , l = r.alias;
    l && (o = l[0],
    jU(u, HU([0, 1], l)));
    for (var c = 1, d = !0; c < u.length; c += 1) {
        var f = u[c]
          , p = sl(f, 0, 1)
          , h = sl(f, -1);
        if ((p === '"' || p === "'" || p === "`" || h === '"' || h === "'" || h === "`") && p !== h)
            throw new ao("property names with quotes must have matching quotes");
        if ((f === "constructor" || !d) && (a = !0),
        o += "." + f,
        s = "%" + o + "%",
        ol(ir, s))
            i = ir[s];
        else if (i != null) {
            if (!(f in i)) {
                if (!n)
                    throw new Gr("base intrinsic for " + t + " exists, but the property is not available.");
                return
            }
            if (sr && c + 1 >= u.length) {
                var m = sr(i, f);
                d = !!m,
                d && "get"in m && !("originalValue"in m.get) ? i = m.get : i = i[f]
            } else
                d = ol(i, f),
                i = i[f];
            d && !a && (ir[s] = i)
        }
    }
    return i
}
var ep = J5
var ta = ep("%WeakMap%", !0)
var RW = function() {
    var t, n, u, o = {
        assert: function(r) {
            if (!o.has(r))
                throw new DW("Side channel does not contain " + wW(r))
        },
        get: function(r) {
            if (ta && r && (typeof r == "object" || typeof r == "function")) {
                if (t)
                    return SW(t, r)
            } else if (na) {
                if (n)
                    return kW(n, r)
            } else if (u)
                return PW(u, r)
        },
        has: function(r) {
            if (ta && r && (typeof r == "object" || typeof r == "function")) {
                if (t)
                    return xW(t, r)
            } else if (na) {
                if (n)
                    return TW(n, r)
            } else if (u)
                return MW(u, r);
            return !1
        },
        set: function(r, s) {
            ta && r && (typeof r == "object" || typeof r == "function") ? (t || (t = new ta),
            _W(t, r, s)) : na ? (n || (n = new na),
            OW(n, r, s)) : (u || (u = {
                key: {},
                next: null
            }),
            IW(u, r, s))
        }
    };
    return o
}
Hd = {}
var eG = function e(t, n, u, o, r, s, i, a, l, c, d, f, p, h, m, C) {
    for (var g = t, v = C, y = 0, E = !1; (v = v.get(Hd)) !== void 0 && !E; ) {
        var B = v.get(t);
        if (y += 1,
        typeof B < "u") {
            if (B === y)
                throw new RangeError("Cyclic object value");
            E = !0
        }
        typeof v.get(Hd) > "u" && (y = 0)
    }
    if (typeof a == "function" ? g = a(n, g) : g instanceof Date ? g = d(g) : u === "comma" && qn(g) && (g = xa.maybeMap(g, function(R) {
        return R instanceof Date ? d(R) : R
    })),
    g === null) {
        if (r)
            return i && !h ? i(n, bt.encoder, m, "key", f) : n;
        g = ""
    }
    if ($W(g) || xa.isBuffer(g)) {
        if (i) {
            var A = h ? n : i(n, bt.encoder, m, "key", f);
            return [p(A) + "=" + p(i(g, bt.encoder, m, "value", f))]
        }
        return [p(n) + "=" + p(String(g))]
    }
    var _ = [];
    if (typeof g > "u")
        return _;
    var O;
    if (u === "comma" && qn(g))
        h && i && (g = xa.maybeMap(g, i)),
        O = [{
            value: g.length > 0 ? g.join(",") || null : void 0
        }];
    else if (qn(a))
        O = a;
    else {
        var P = Object.keys(g);
        O = l ? P.sort(l) : P
    }
    for (var L = o && qn(g) && g.length === 1 ? n + "[]" : n, ue = 0; ue < O.length; ++ue) {
        var N = O[ue]
          , H = typeof N == "object" && typeof N.value < "u" ? N.value : g[N];
        if (!(s && H === null)) {
            var Q = qn(g) ? typeof u == "function" ? u(L, N) : L : L + (c ? "." + N : "[" + N + "]");
            C.set(t, y);
            var W = uC();
            W.set(Hd, C),
            rC(_, e(H, Q, u, o, r, s, u === "comma" && h && qn(g) ? null : i, a, l, c, d, f, p, h, m, W))
        }
    }
    return _
}
var uC = RW
var nG = function(e, t) {
    var n = e, u = tG(t), o, r;
    typeof u.filter == "function" ? (r = u.filter,
    n = r("", n)) : qn(u.filter) && (r = u.filter,
    o = r);
    var s = [];
    if (typeof n != "object" || n === null)
        return "";
    var i;
    t && t.arrayFormat in Cg ? i = t.arrayFormat : t && "indices"in t ? i = t.indices ? "indices" : "repeat" : i = "indices";
    var a = Cg[i];
    if (t && "commaRoundTrip"in t && typeof t.commaRoundTrip != "boolean")
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var l = a === "comma" && t && t.commaRoundTrip;
    o || (o = Object.keys(n)),
    u.sort && o.sort(u.sort);
    for (var c = uC(), d = 0; d < o.length; ++d) {
        var f = o[d];
        u.skipNulls && n[f] === null || rC(s, eG(n[f], f, a, l, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, c))
    }
    var p = s.join(u.delimiter)
      , h = u.addQueryPrefix === !0 ? "?" : "";
    return u.charsetSentinel && (u.charset === "iso-8859-1" ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"),
    p.length > 0 ? h + p : ""
}

Cg = {
    brackets: function(t) {
        return t + "[]"
    },
    comma: "comma",
    indices: function(t, n) {
        return t + "[" + n + "]"
    },
    repeat: function(t) {
        return t
    }
}

o ={
    "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
    },
    "adapter": [
        "xhr",
        "http"
    ],
    "transformRequest": [
        null
    ],
    "transformResponse": [
        null
    ],
    "timeout": 30000,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1,
    "env": {},
    "headers": {
        "Accept": "application/json, text/plain, */*"
    },
    "baseURL": "/ggzy-portal/search/",
    "paramsSerializer": {},
    "method": "post",
    "url": "v2/items",
    "data": {
        "type": "trading-type",
        "openConvert": false,
        "keyword": "",
        "siteCode": "44",
        "secondType": "A",
        "tradingProcess": "",
        "thirdType": "[]",
        "projectType": "",
        "publishStartTime": "",
        "publishEndTime": "",
        "pageNo": 2,
        "pageSize": 10
    }
}
function get_data(o) {
    a = Date.now()
    , l = hne(16)
    , c = qu([8, 28, 20, 42, 21, 53, 65, 6])
    , d = {
    [qu([56, 62, 52, 11, 23, 62, 39, 18, 16, 62, 54, 25, 25])]: qu([11, 11, 0, 21, 62, 25, 24, 19, 20, 15, 7]),
    [qu([56, 62, 52, 11, 23, 62, 39, 18, 16, 62, 60, 24, 5, 2, 18])]: l,
    [qu([56, 62, 52, 11, 23, 62, 39, 18, 16, 62, 40, 23, 6, 18, 14, 20, 15, 6, 25])]: a
};
function t1(e={}) {
    const {p: t, t: n, n: u, k: o} = e
      , r = pne(t);
    return CryptoJS.SHA256(u + o + decodeURIComponent(r) + n)
}
function pne(e) {
    let t = "";
    return typeof e == "object" ? t = Object.keys(e).map(n=>`${n}=${e[n]}`).sort().join("&") : typeof e == "string" && (t = e.split("&").sort().join("&")),
    t
}
const p = t1({
                p: nG(o.data, {
                    allowDots: !0
                }),
                t: a,
                n: l,
                k: c
            }).toString();

    d[[qu([56, 62, 52, 11, 23, 62, 39, 18, 16, 62, 53, 23, 11, 5, 15, 20, 22, 19, 18])]] = p;
    console.log(p);
    return d;
}

// console.log(CryptoJS.SHA256("1").toString());
//
// console.log(get_data(o));
