 var St = 0;
    function mainMd5(s) {
        return Tt(At(Rt(s)))
    }
    function At(s) {
        return Dt(Nt(Lt(s), 8 * s.length))
    }
    function Tt(input) {
        for (var t, e = St ? "0123456789ABCDEF" : "0123456789abcdef", output = "", i = 0; i < input.length; i++)
            t = input.charCodeAt(i),
            output += e.charAt(t >>> 4 & 15) + e.charAt(15 & t);
        return output
    }
    function Rt(input) {
        for (var t, e, output = "", i = -1; ++i < input.length; )
            t = input.charCodeAt(i),
            e = i + 1 < input.length ? input.charCodeAt(i + 1) : 0,
            55296 <= t && t <= 56319 && 56320 <= e && e <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & e),
            i++),
            t <= 127 ? output += String.fromCharCode(t) : t <= 2047 ? output += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? output += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (output += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
        return output
    }
    function Lt(input) {
        for (var output = Array(input.length >> 2), i = 0; i < output.length; i++)
            output[i] = 0;
        for (i = 0; i < 8 * input.length; i += 8)
            output[i >> 5] |= (255 & input.charCodeAt(i / 8)) << i % 32;
        return output
    }
    function Dt(input) {
        for (var output = "", i = 0; i < 32 * input.length; i += 8)
            output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
        return output
    }
    function Nt(t, e) {
        t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
        for (var a = 1732584193, b = -271733879, n = -1732584194, r = 271733878, i = 0; i < t.length; i += 16) {
            var o = a
              , c = b
              , l = n
              , f = r;
            a = qt(a, b, n, r, t[i + 0], 7, -680876936),
            r = qt(r, a, b, n, t[i + 1], 12, -389564586),
            n = qt(n, r, a, b, t[i + 2], 17, 606105819),
            b = qt(b, n, r, a, t[i + 3], 22, -1044525330),
            a = qt(a, b, n, r, t[i + 4], 7, -176418897),
            r = qt(r, a, b, n, t[i + 5], 12, 1200080426),
            n = qt(n, r, a, b, t[i + 6], 17, -1473231341),
            b = qt(b, n, r, a, t[i + 7], 22, -45705983),
            a = qt(a, b, n, r, t[i + 8], 7, 1770035416),
            r = qt(r, a, b, n, t[i + 9], 12, -1958414417),
            n = qt(n, r, a, b, t[i + 10], 17, -42063),
            b = qt(b, n, r, a, t[i + 11], 22, -1990404162),
            a = qt(a, b, n, r, t[i + 12], 7, 1804603682),
            r = qt(r, a, b, n, t[i + 13], 12, -40341101),
            n = qt(n, r, a, b, t[i + 14], 17, -1502002290),
            a = Ft(a, b = qt(b, n, r, a, t[i + 15], 22, 1236535329), n, r, t[i + 1], 5, -165796510),
            r = Ft(r, a, b, n, t[i + 6], 9, -1069501632),
            n = Ft(n, r, a, b, t[i + 11], 14, 643717713),
            b = Ft(b, n, r, a, t[i + 0], 20, -373897302),
            a = Ft(a, b, n, r, t[i + 5], 5, -701558691),
            r = Ft(r, a, b, n, t[i + 10], 9, 38016083),
            n = Ft(n, r, a, b, t[i + 15], 14, -660478335),
            b = Ft(b, n, r, a, t[i + 4], 20, -405537848),
            a = Ft(a, b, n, r, t[i + 9], 5, 568446438),
            r = Ft(r, a, b, n, t[i + 14], 9, -1019803690),
            n = Ft(n, r, a, b, t[i + 3], 14, -187363961),
            b = Ft(b, n, r, a, t[i + 8], 20, 1163531501),
            a = Ft(a, b, n, r, t[i + 13], 5, -1444681467),
            r = Ft(r, a, b, n, t[i + 2], 9, -51403784),
            n = Ft(n, r, a, b, t[i + 7], 14, 1735328473),
            a = Ut(a, b = Ft(b, n, r, a, t[i + 12], 20, -1926607734), n, r, t[i + 5], 4, -378558),
            r = Ut(r, a, b, n, t[i + 8], 11, -2022574463),
            n = Ut(n, r, a, b, t[i + 11], 16, 1839030562),
            b = Ut(b, n, r, a, t[i + 14], 23, -35309556),
            a = Ut(a, b, n, r, t[i + 1], 4, -1530992060),
            r = Ut(r, a, b, n, t[i + 4], 11, 1272893353),
            n = Ut(n, r, a, b, t[i + 7], 16, -155497632),
            b = Ut(b, n, r, a, t[i + 10], 23, -1094730640),
            a = Ut(a, b, n, r, t[i + 13], 4, 681279174),
            r = Ut(r, a, b, n, t[i + 0], 11, -358537222),
            n = Ut(n, r, a, b, t[i + 3], 16, -722521979),
            b = Ut(b, n, r, a, t[i + 6], 23, 76029189),
            a = Ut(a, b, n, r, t[i + 9], 4, -640364487),
            r = Ut(r, a, b, n, t[i + 12], 11, -421815835),
            n = Ut(n, r, a, b, t[i + 15], 16, 530742520),
            a = Bt(a, b = Ut(b, n, r, a, t[i + 2], 23, -995338651), n, r, t[i + 0], 6, -198630844),
            r = Bt(r, a, b, n, t[i + 7], 10, 1126891415),
            n = Bt(n, r, a, b, t[i + 14], 15, -1416354905),
            b = Bt(b, n, r, a, t[i + 5], 21, -57434055),
            a = Bt(a, b, n, r, t[i + 12], 6, 1700485571),
            r = Bt(r, a, b, n, t[i + 3], 10, -1894986606),
            n = Bt(n, r, a, b, t[i + 10], 15, -1051523),
            b = Bt(b, n, r, a, t[i + 1], 21, -2054922799),
            a = Bt(a, b, n, r, t[i + 8], 6, 1873313359),
            r = Bt(r, a, b, n, t[i + 15], 10, -30611744),
            n = Bt(n, r, a, b, t[i + 6], 15, -1560198380),
            b = Bt(b, n, r, a, t[i + 13], 21, 1309151649),
            a = Bt(a, b, n, r, t[i + 4], 6, -145523070),
            r = Bt(r, a, b, n, t[i + 11], 10, -1120210379),
            n = Bt(n, r, a, b, t[i + 2], 15, 718787259),
            b = Bt(b, n, r, a, t[i + 9], 21, -343485551),
            a = zt(a, o),
            b = zt(b, c),
            n = zt(n, l),
            r = zt(r, f)
        }
        return Array(a, b, n, r)
    }
    function Mt(q, a, b, t, s, e) {
        return zt((n = zt(zt(a, q), zt(t, e))) << (r = s) | n >>> 32 - r, b);
        var n, r
    }
    function qt(a, b, t, e, n, s, r) {
        return Mt(b & t | ~b & e, a, b, n, s, r)
    }
    function Ft(a, b, t, e, n, s, r) {
        return Mt(b & e | t & ~e, a, b, n, s, r)
    }
    function Ut(a, b, t, e, n, s, r) {
        return Mt(b ^ t ^ e, a, b, n, s, r)
    }
    function Bt(a, b, t, e, n, s, r) {
        return Mt(t ^ (b | ~e), a, b, n, s, r)
    }
    function zt(t, e) {
        var n = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
    }

 console.log(mainMd5("1"));
