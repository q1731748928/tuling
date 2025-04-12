

// 调用入口

const {VM, VMScript} = require("vm2");

let vm = new VM({
     sandbox:{
        h_log:console.log,
    }
}

);

// 加载环境
const env = require('./config/env.config')

// 加载JS代码

const {readJsCode} = require('./jscode/main')
const envCode = env.getEnvCode()

jscode = "";

jscode += envCode

jscode += readJsCode()


const script = new VMScript(jscode);

let result = vm.run(script)
console.log(result);



