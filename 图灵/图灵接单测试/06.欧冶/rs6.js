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

window = global;
window.top =window
_null = function () {
    console.log(arguments)
}

window.setInterval = _null
window.setTimeout = _null



window.addEventListener = _null
window.attchEvent = undefined

navigator = {
    appVersion:"5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    languages: ['zh-CN', 'en', 'zh'],
    userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}

document = {}
location = {}

div = {
    getElementsByTagName: function (arg) {
        console.log(arguments);
        if(arg == "i") {
            return {length:0}
        }
    }
}

meta = {
    getAttribute: function (arg) {
        if(arg == 'r') {
            return 'm'
        }
    },
    parentNode: {
        removeChild:function (arg) {
            console.log(arg)
        }
    },
    content: content

}

document = {
    createElement: function (a) {
        console.log(arguments)
        if(a == 'div') {
            return div
        }
        if(a == "a") {
            return {}
        }
        if(a == 'form') {
            return {}
        }
    },
    getElementsByTagName: function (arg) {
        console.log("getElementsByTagName-->", arguments)
        if(arg == 'script') {
            return {}
        }
        if(arg == 'meta') {
            return [meta, meta]
        }
        if(arg == 'base') {
            return {}
        }
    },
    getElementById: function () {
        console.log(arguments)
    },
    addEventListener: function () {
        console.log(arguments)
    },
    appendChild: _null,
    removeChild: _null,
    documentElement: {}

}

location = {
    "ancestorOrigins": {},
    "href": "http://www.sgcc.com.cn/html/sgcc/col2022121225/column_2022121225_1.shtml",
    "origin": "http://www.sgcc.com.cn",
    "protocol": "http:",
    "host": "www.sgcc.com.cn",
    "hostname": "www.sgcc.com.cn",
    "port": "",
    "pathname": "/html/sgcc/col2022121225/column_2022121225_1.shtml",
    "search": "",
    "hash": ""
}

get_enviroment(proxy_array)

"arg2_js";

require("./_tsss")

function get_ck(){
    return document.cookie
}

console.log(get_ck());

