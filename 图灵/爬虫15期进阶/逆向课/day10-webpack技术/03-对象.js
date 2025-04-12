var xxx;
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
    n.m = e; // 包裹所有模块
    // n("aa")
    xxx = n;
}
    ({
       "aa":function (){
           console.log("注册")
       } ,
       "bb":function (){
           console.log("登陆")
       }
    })

// 外部想使用 ？？

xxx("aa");  // 开始调用




