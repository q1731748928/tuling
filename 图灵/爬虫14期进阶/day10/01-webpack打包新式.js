

var bc;

// webpack打包的格式
!function (e) {
    // 加载器
    function n(t) {
        // console.log(t)
        return e[t].call()
    }
    // n(2)
    bc = n
}()



bc('cc')



    function n(t) {
        // 意义   减少资源消耗
        if (c[t])
            return c[t].exports;
        var a = c[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, n),
        a.l = !0,
        a.exports
    }





