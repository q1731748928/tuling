
var bodavm = {
    "toolsFunc": {}, //功能函数相关,插件
    "envFunc": {},//环境相关
    "config": {},   //配置相关
    "memory":{},
    "toolsPlugin": {} //Plugin相关
}

bodavm.memory.tag=[]          //存放标签
bodavm.memory.globalobj={}    //全局对象

bodavm.memory.location={
    origin:"http://www.fangdi.com.cn",
    hash:"",
    pathname:"/",
    search:"",
    href:"http://www.fangdi.com.cn/",
    port:"",
    protocol:"http:",
    host:"www.fangdi.com.cn",
    ancestorOrigins:"{}",
    hostname:"www.fangdi.com.cn"
};

bodavm.memory.navigator={
    language:"zh-CN",
    userAgent:"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    appVersion:"5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    vendor:"Google Inc.",
    appName:"Netscape",
    appCodeName:"Mozilla",
    cookieEnabled:true,
    languages:["zh-CN","zh"],
    productSub:"20030107",
    userAgentData:undefined,
    xr:undefined,
    platform:'Win32',
    webkitPersistentStorage:{},
    connection:{},
    javaEnabled:false
};


