const fs=require("fs");
const path = require("path");


function getFile(name) {
    let tools_path = path.resolve(__dirname, '../tools/');
    try {
        return fs.readFileSync(`${tools_path}/${name}.js`) + "\r\n";

    } catch (e) {
        console.log(`${tools_path}/${name}.js不存在`)
        return "";
    }
}


function getCode(){
    let code=""
    code+=getFile("toolsFunc")   // 对象原型
        code+=getFile("envFunc") // 浏览器一些接口
    // code+=getFile("printLog")
    return code
}

module.exports={
    getCode
}

