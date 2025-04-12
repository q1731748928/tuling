
location = {
    href:'https://github.com/jsdom/jsdom'
}

// if (location.href.length) {
//     console.log('真数据')
// }else {
//     console.log("假数据")
// }

document = {

    createElement:function (arg){
         if (arg == "div"){
             return {}
         }
    }
}


function ps(){
    if (document.createElement('div')){
        console.log('真数据')
    }else {
        console.log("假数据")
    }

}

navigator = {
    userAgent:'12313123'
}

function pn(){
    // try {
         pn2()
        if (navigator["userAgent"]){
            console.log('真数据')
        }else {
            console.log('假数据')
        }
    // }catch (e) {
    //     console.log(e)
    //     console.log('假数据')
    // }
}

function pn2(){
    if (location.href.length){
        return 'xxx'
    }
}

 // pn()


console.log(exports,typeof exports)

console.log(glb = "undefined" != typeof window );

