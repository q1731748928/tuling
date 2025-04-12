

function get(){
    return "hello world"
}


function getPar(arg){
    return "hello world" + arg
}

function getPar1(arg,aaa,bbb){
    let pages = bbb['page']
    return aaa + "hello world" + arg + pages
}

function getPars(obj){
    let page = obj['page']
    console.log(page)
    return page
}




