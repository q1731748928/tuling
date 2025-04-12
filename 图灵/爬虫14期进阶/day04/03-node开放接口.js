
// 导入模块 express 向外开放一个接口
var express = require('express')

// 创建服务器
var app = express();

// 请求方法 get post

function aa(bb) {
    return "这个是加密之后的数据" + bb
}

// get请求
app.get("/user", function (req, res) {
    console.log(req.query.aa)
    res.send(aa(req.query.aa))
})

// post方法
app.post('/api', function (req, res) {
    console.log(req)
    res.send(aa(req.query.aa))
})

// 公网 外网 阿里 腾讯

app.listen(8080, function () {
    console.log("开启服务:网址是http://127.0.0.1:8080")
})