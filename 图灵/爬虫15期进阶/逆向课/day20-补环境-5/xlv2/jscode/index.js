
// debugger;

// 12321321


function demo1(){
    h_log(navigator.userAgent)
    if (navigator.userAgent){
         h_log("navigator环境通过")
    }else {
         h_log("navigator检测失败")
    }
}

function demo(){
    h_log(location.href)
    if (location.href){
        demo1()
        return "location环境通过"
    }else {
        return "location检测失败"
    }

}


