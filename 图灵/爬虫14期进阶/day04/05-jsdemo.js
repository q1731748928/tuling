


// function aa() {
//     console.log('123')
// }
// // 权重 逗号表达式
// (0, aa())
// aa()


function aa() {
    console.log('123')
}

function bb() {
    
}

function cc() {

}

i = {
    'a': aa,
    'b': bb,
    'c': cc
}
i['a']()