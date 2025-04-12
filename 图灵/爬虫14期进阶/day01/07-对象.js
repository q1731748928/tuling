

// 属性  方法

// 字面量
var obj = {
    name: '柏汌',
    aa: function () {
        console.log(123);
    }
}
console.log(obj.name);
obj.aa()


// new 对象
var object = new Object();
obj.name = '123';
obj.age = '235'
console.log(obj.age);


// 构造函数
function start(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    this.sing = function (aa) {
        console.log('123345')
    }
}
var bc = new start('柏汌', '18', '男')
console.log(bc.name);
bc.sing()


// aa = new


// class 创建类
// class student {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }