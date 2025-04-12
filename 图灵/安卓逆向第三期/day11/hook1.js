

function hook1(){
//  let wg1 = Java.use("wg1");
// wg1["h"].implementation = function (str, str2) {
//     console.log(`wg1.m2230h is called: str=${str}, str2=${str2}`);
//     this["h"](str, str2);
// };


// let SignUtil = Java.use("com.yidian.news.util.sign.SignUtil");
// SignUtil["e"].implementation = function (context, str) {
//     console.log(`SignUtil.m17844e is called: context=${context}, str=${str}`);
//     let result = this["e"](context, str);
//     console.log(`SignUtil.m17844e result=${result}`);
//     return result;
// };


let SignUtil = Java.use("com.yidian.news.util.sign.SignUtil");
SignUtil["signInternal"].implementation = function (context, str) {
    console.log(`SignUtil.signInternal is called: context=${context}, str=${str}`);
    let result = this["signInternal"](context, str);
    console.log(`SignUtil.signInternal result=${result}`);
    return result;
};

}


Java.perform(function (){
    // hook1()
    console.log('hook start')
   var n_addr_func_offset = 0x0000024E4;
    let message = Module.findBaseAddress("libutil.so")
    console.log(message)
    var n_addar_func = parseInt(message,16) + n_addr_func_offset;
    var enc = new NativePointer(n_addar_func)
    console.log(enc)
    // let funs = message.add(n_addr_func_offset);
    var out2 = null;
    var out2_len = null;
Interceptor.attach(enc,{
    onEnter:function (args){
        console.log("Hook so -decryptKey------");
        console.log("keyInNum", args[0].toInt32());
        console.log( " data-cipher " ,Memory.readUtf8String(args[1]));
        console.log( "data-cipher-len" , args[2].toInt32());
        console.log( "out2", args[3]);
        console.log( "buf_len" , args[4].toInt32());
        out2 =args[3]
        out2_len = args[4]
    },
  onLeave: function (retVal) {
            console.log("encrypt---", retVal.toInt32());
            console.log("++Out2++", hexdump(out2));
    }
})

})

//com.hipu.yidian
/*
*
* return str + "&signature=" + SignUtil.m17844e(nd5.getContext(), sb2.toString());
str=yidian6.2.3.01zqnwx9al_1715690312155_1028031700
*
*
* MIGfMA0GCSqGSIb3
74dec22ea8  44 51 45 42 41 51 55 41 41 34 47 4e 41 44 43 42  DQEBAQUAA4GNADCB
74dec22eb8  69 51 4b 42 67 51 44 50 32 53 59 7a 46 63 63 4d  iQKBgQDP2SYzFccM
74dec22ec8  77 5a 78 43 30 35 55 78 77 65 69 36 69 6a 46 63  wZxC05Uxwei6ijFc
74dec22ed8  4f 6f 4a 4f 48 50 48 42 4b 32 6f 52 58 36 5a 56  OoJOHPHBK2oRX6ZV
74dec22ee8  44 53 5a 4d 78 62 37 67 68 48 31 48 55 36 33 61  DSZMxb7ghH1HU63a
74dec22ef8  62 78 7a 63 57 2f 2b 4f 43 38 34 35 4f 6c 78 43  bxzcW/+OC845OlxC
74dec22f08  35 58 5a 41 39 41 5a 74 66 67 45 48 64 59 4e 70  5XZA9AZtfgEHdYNp
74dec22f18  45 47 79 61 43 48 45 31 7a 75 34 4c 73 57 69 6f  EGyaCHE1zu4LsWio
74dec22f28  76 54 4c 70 59 68 56 31 59 61 39 4b 73 2f 36 79  vTLpYhV1Ya9Ks/6y
74dec22f38  6e 55 65 63 6e 31 50 38 44 33 4f 41 4b 61 43 75  nUecn1P8D3OAKaCu
74dec22f48  44 33 44 4c 6c 61 77 4c 43 52 6d 57 6c 63 32 45  D3DLlawLCRmWlc2E
74dec22f58  70 6e 77 59 75 4a 49 72 45 66 2f 4f 6e 42 37 41  pnwYuJIrEf/OnB7A
74dec22f68  32 51 49 44 41 51 41 42 03 53 c7 45 c2 7e de 7e  2QIDAQAB
*
*
* */