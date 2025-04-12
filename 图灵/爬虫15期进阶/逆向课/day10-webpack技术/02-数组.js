
!function(e) {
    var t = {};
    // 加载器  所有的模块都是从这个函数加载 执行
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        console.log("执行哪一个模块",r)
        return e[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
    }
    n(2)
}
    ([
        function () {
            console.log('123456')
        },

        function () {
            console.log('模块2')
        },

       function () {
            console.log('模块3')
        },

    ])

/*
*
       return e[r].call(o.exports, o, o.exports, n),
                    ^

TypeError: Cannot read properties of undefined (reading 'call')

*
*
*
* */




