;;
!function () {
    var bolognum=0
    bodavm.toolsFunc.printLog = function printLog(logList) {
        let log = "";
        for (let i = 0; i < logList.length; i++) {
            if (logList[i] instanceof Object) {
                if (typeof logList[i] === "function") {
                    log += logList[i].toString() + ""
                } else {
                    log += bodavm.toolsFunc.getType(logList[i]) + "";
                }
            } else if (typeof logList[i] === "symbol") {
                log += logList[i].toString() + ""
            } else {
                log += logList[i] + "";
            }
        }
        log += "\r\n"
        const filePath = 'D:\\works\\out_codes\\pythons\\vip-course\\11班\\day21-环境\\xl_cheerio_v2\\run\\log.txt';
        // bofs.appendFileSync(`./env_xbb_lastest_cheerio/run/log.txt`, log)
        bofs.appendFileSync(filePath, log)
    }
    //hook console,让他自动调用printlog
    console.log_ = console.log;
    console.log = function log(type,...args) {

        let index=args[0]?args[0]:args
        if (typeof index =='string'&&  index.indexOf('属性:')!=-1){
        }else{
        // debugger
            let arglenth=args.length
            let obj={'type':'env:'+type}

            for (let i = 0; i < arglenth; i++) {
                
                obj['prop'+i]=args[i]
                // if (args[i] ==undefined || args[i] ==null){
                //     myundefinedlist.push(obj)
                // }
            }
            // debugger
            myloglist.push(obj)
        }
        // if (bodavm.memory.getundefined){
        //     if (arguments.indexOf(undefined) >0 || arguments.indexOf(null) >0){
        //         myundefinedlist.push(arguments)
        //     }
        // }
        if (bodavm.config.printLog ) {
            bodavm.toolsFunc.printLog(arguments)

        }
        
        //自动生成hook代码
        return console.log_.apply(this, arguments)
    };
   
    console.log.toString = function log(){
        return 'function log() { [native code] }';
    }
}();

