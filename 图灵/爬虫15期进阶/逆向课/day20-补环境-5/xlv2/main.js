// 砂箱的目的就是想使用node环境 又不想被网站检测
const {VM,VMScript} = require('vm2');
const vm = new VM({
    sandbox: {
        h_log: console.log,
    }
});

const fs = require('fs')
const path = require("path");
//配置路径
let config_path = path.resolve(__dirname, './config/');

const configCode=fs.readFileSync(`${config_path}/config.js`)
// 导入配置
const tools=require(`${config_path}/tools.config`)
const env = require(`${config_path}/env.config`)

//导入功能插件相关函数
const toolsCode =tools.getCode();

// 导入调试代码
const {readJsCode} = require('./JsCode/main')

//导入浏览器环境相关
const envCode = env.getEnvCode();

let jscode = "";

jscode += configCode

jscode += toolsCode

jscode += envCode

jscode += readJsCode()


const script = new VMScript(jscode, {filename: '/myvmscript.js'});
console.log(vm.run(script));

debugger;

//  node --inspect-brk main.js

