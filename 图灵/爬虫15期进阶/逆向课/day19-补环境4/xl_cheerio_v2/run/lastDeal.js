function get_cookie(){
    a={
        cookie:document.cookie
    }
    return a
}
get_cookie()


function get_anti(){
    return new window.anti(4)({
            serverTime: new Date().getTime()
        }).messagePack()
}

// get_anti()



