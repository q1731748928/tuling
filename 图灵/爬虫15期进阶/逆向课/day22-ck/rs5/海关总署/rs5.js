var content= "arg1_content";

// 代理器封装
function get_enviroment(proxy_array) {
    for(var i=0; i<proxy_array.length; i++){
        handler = '{\n' +
            '    get: function(target, property, receiver) {\n' +
            '        console.log("方法:", "get  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return target[property];\n' +
            '    },\n' +
            '    set: function(target, property, value, receiver) {\n' +
            '        console.log("方法:", "set  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return Reflect.set(...arguments);\n' +
            '    }\n' +
            '}'
        eval('try{\n' + proxy_array[i] + ';\n'
        + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
        + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}
proxy_array = ['window', 'document', 'location', 'navigator', 'history','screen']
_null = function (){
    console.log(arguments)
}


window = global;

// delete global;
// delete global;
// delete Buffer;
// delete root;
// delete __filename
// delete __dirname


window.top = window;

window.setInterval = _null
window.setTimeout = _null


window.addEventListener = _null
window.attachEvent = undefined

div = {
    getElementsByTagName:function (arg){
        console.log(arguments)
        if(arg==="i"){
            return {length:0}
        }
    }
}

meta = {
    getAttribute:function (arg){
            if (arg ==="r"){
                return  "m"
            }
    },
    parentNode :{
        removeChild:function (){
            console.log("removeChild",...arguments)
        }
    },
    content:content
}


navigator = {
    appVersion:"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    languages:['en-GB', 'zh-CN', 'zh'],
    userAgent:"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
}

document = {
    createElement:function (a){
        console.log(arguments)
        if(a === "div"){
            return div
        }
        if (a === "a"){
            return  {}
        }
        if(a ==="form"){
            return  {}
        }
    },
    getElementsByTagName:function (arg){
        console.log("getElementsByTagName-->",arguments)
        if (arg==="script"){
            return {}
        }
        if (arg==="meta"){
            return [meta,meta]
        }
        if (arg === "base"){
            return {}
        }
    },
    getElementById:function (){
        console.log(arguments)
    },
    addEventListener:function (){},
    appendChild:_null,
    removeChild:_null,
    documentElement:{}
}

location = {
    "ancestorOrigins": {},
    "href": "http://www.sgcc.com.cn/html/sgcc/col2022121225/column_2022121225_9.shtml",
    "origin": "http://www.sgcc.com.cn",
    "protocol": "http:",
    "host": "www.sgcc.com.cn",
    "hostname": "www.sgcc.com.cn",
    "port": "",
    "pathname": "/html/sgcc/col2022121225/column_2022121225_9.shtml",
    "search": "",
    "hash": ""
}


// get_enviroment(proxy_array)

"arg2_js";

function get_ck(){
    return document.cookie
}

require("./_tsss")

function get_ck(){
    return document.cookie
}

console.log(get_ck())
