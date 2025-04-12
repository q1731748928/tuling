const express = require("express");

console.log(express)

// 2.创建 web 服务器
const app = express();

// 4.编写API
// app.get('/user', (req, res) => {
//     // 调用express提供的res.send()方法，向客户端响应一个JSON对象
//     console.log(req.query)
//
//     res.send({name: 'zs', age: 20, gender: '男'})
// })

function get_decode(a) {
    title = document.getElementsByName('head')
    if (title) {
        res = btoa(a)
    return res
    }
}

//注意：这里的:id是一个动态的参数
// news/1/?news=123 new/2?news=123 news/3?news=123 副业的时候可以使用
// 传参 key=token
// http://127.0.0.1:8080/user/1/getToken?key=python
app.get('/user/:id/:name', (req, res) => {
//    req.paraams 是动态匹配到的URL参数，默认也是一个空对象
    console.log(req.params)

    key = req.query._key
    result = get_decode(key)

    res.send({
        "msg": result
    })
})


// 3.启动 web 服务器
app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1');
})