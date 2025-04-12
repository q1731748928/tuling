
setTimeout = function () {}

function hello() {
    console.log('123234345')
}

// function hello1() {
//     console.log('123')
// }

// hello()

// 定时器 setTimeout 固定的时间之后 执行一次代码
t1 = setTimeout(hello, 5000)
// 清除定时器
clearTimeout(t1)


// setInterval 固定的时间 重复执行 宏任务 异步
// setInterval(hello1, 500)
//
// hello()