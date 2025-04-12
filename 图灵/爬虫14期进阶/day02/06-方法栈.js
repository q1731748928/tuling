
function cc(a, b) {
    console.log(a + b)
    console.log('调用的cc函数')
}


function bb(a, b){
    console.log(a + b)
    cc()
    console.log('调用的bb函数')
}

function aa(a, b) {
    bb(a, b)
    console.log('调用的aa函数')
}

aa(1, 2)
