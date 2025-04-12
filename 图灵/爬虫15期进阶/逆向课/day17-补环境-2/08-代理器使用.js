var target = {
    name: 'JACK',
    age: 18,
    xxx:{
        zs:"nana"
    }
};

p = new Proxy(target,{
     get: function (target, property, receiver) {
        temp = Reflect.get(target,property,receiver)
         console.log(`对象${target}--> get属性-${property}-值是--> ${temp}`);
        return temp
    },
    set(target, p, value, receiver) {
        temp = Reflect.set(target, p, value, receiver); //设置target对象的name属性等于value
        console.log(`对象${target}--> set属性-${p}-值是--> ${value}`);
        return temp
     }
})


function XlProxy(obj,name){
    return new Proxy(obj,{
        get(target, p, receiver) {
            temp = Reflect.get(target,p,receiver)
            console.log(`对象${name}--> get了属性--> ${p} 值是--> ${temp}`);
         	if (typeof temp == 'object'){
                 // 对于对象套对象进行挂代理
                 temp = XlProxy(temp,name + '-->' + p)
            }
            return temp
        }
    })
}

// xx = XlProxy(target,"target")
location = {
    href:'111'
}
// location = XlProxy(location,"location")


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
get_enviroment(proxy_array)



function ps(){
    if (location.href.length) {
    console.log('真数据')
    }else {
        console.log("假数据")
    }
}


ps()



