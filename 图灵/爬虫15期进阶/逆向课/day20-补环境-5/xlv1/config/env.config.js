const fs = require("fs");
const path = require("path");
let env_path = path.resolve(__dirname, '../env/');

let filelist= [

    "Locations"
]

let parentPath = path.dirname(__dirname)
function getFile(dir_name,name) {
    // debugger
    let _path =path.join( parentPath,dir_name,name+'.js');
    // debugger
    console.log(_path)
    try {
        return fs.readFileSync(_path) + "\r\n";

    } catch (e) {
        console.log(`${_path}不存在`)
        return "";
    }
}

function getDom(){
     try {
        let code = "";
        let filelist = fs.readdirSync(`${env_path}/DOM`)
        for (let i = 0; i < filelist.length; i++) {
            code += fs.readFileSync(`${env_path}/DOM/${filelist[i]}`) + "\r\n"
        }
        return code
    } catch (e) {
        console.log(`${env_path}/${name}.js不存在`)
        return "";
    }
}

function getEnvCode(){
    let code = "//env相关代码" + "\r\n"
    for (file of filelist){
        code += getFile('env/BOM',file)
    }
    code += getDom()
    return code
}


module.exports = {
    getEnvCode,
}