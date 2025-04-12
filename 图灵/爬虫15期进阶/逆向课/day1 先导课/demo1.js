// 单行注释
// console.log('123123')


/*
*
* 多行注释
*
* */

// xl = '123'; // 全局

// var xl;
// console.log(xl);


// var xl2 = 'xxx';
// var xl2 = 'yyy';
// console.log(xl2);


let s = {
    // 代码块

}

// for (let i = 0; i < 3; i++) {
//     console.log(i); // 输出 0, 1, 2
// }
// console.log(i); // ReferenceError: i is not defined

// let xa = 2
// {
//     let xs = 3
//     console.log(xs)
// }

// let x = 3;
// if (true) {
//     let y = 2;
//     console.log(x);
//     console.log(y);
// }

// console.log(y);

// let xx = 2;
// xx = 3; //  修改
// console.log(xx);

// console.log(xxx)
// let xxx = 10;
// console.log(xxx);


// {
//     const a = 5;
//     console.log(a); // 输出 5
// }

const axxx = 5; // 导包

// const ss = require('xxx')

// var xxx;
// let xxxx;
// const xxxxx;
// xxxx = '123';


console.log("函数的使用======================")

function xxs(){
    console.log('123')
}
// xxs()


sss = function (a,b,c,d) {
    // arguments 默认参数
    console.log(arguments)
    console.log(a);
    console.log(b);
    console.log(c);
}
sss('123','123123','110','sss','555')




!(function () {
  console.log("Hello World!");
})();

var _xl;
!(function () {

    function xl(){
        console.log('hello')
    }
    _xl = xl // 调用 copy

})();
console.log(_xl());

as = 123 // 全局变量
function xxss(){
    console.log(as);
    let as = 333; // 局部变量
    console.log(as);
}

console.log(as)
