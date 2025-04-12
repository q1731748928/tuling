document = {
    getElementsByTagName: function (){
    // arguments  数组
    if(arguments[0] == 'head') {
        return {}
    }
}
}
document.cookie = '123123'

function demo1() {
    if (document.cookie) {
        console.log('环境通过')
    } else {
        console.log('检测失败')
    }
}

navigator = {
    'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
}


function demo2() {
    if (navigator.userAgent.length) {
        console.log("环境通过")
    } else {
        console.log("检测失败")
    }
}

function demo3() {
    if (document.getElementsByTagName('head')) {
        console.log("环境通过")
    } else {
        console.log("检测失败")
    }
}
demo3()