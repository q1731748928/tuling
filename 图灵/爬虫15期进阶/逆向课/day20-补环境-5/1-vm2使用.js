

const {VM, VMScript} = require("vm2");

const script = new VMScript("let a = 2;a");

let vm = new VM();

console.log(vm.run(script));



// 外部这么进行调用？？？

