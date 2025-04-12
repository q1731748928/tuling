
!(function (){
    if (window.flag) {}
    else {
           const websocket = new WebSocket('ws://127.0.0.1:9999')
            // 建立一个标记
            window.flag = true
            //接收到消息的回调方法  接收服务器的数据
            websocket.onmessage = function (event) {
                var _xl = event.data

                // 调JS进行解密
                var res = Xt(_xl)

                // 发送给服务器
                 websocket.send(JSON.stringify(res))
    }
    }
})()

     // "{app_id=98357f659cf8fb6001cff80f7c6b85f2&diploma_id=7&page=2&page_len=20&platform=desktop&ts=1721654477039&v=210&wenli=0}&key=146fd1e66513611ac7af69f21f1d7725"
