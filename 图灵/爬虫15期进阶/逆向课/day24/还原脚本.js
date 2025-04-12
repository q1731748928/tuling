const fs = require('fs')

const parse = require('@babel/parser')
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

process.argv.length > 2 ? File1 = process.argv[2] : File1 = './akm_encode.js'
process.argv.length > 3 ? File2 = process.argv[2] : File2 = './akm_decode.js'

jscode = fs.readFileSync(File1, {encoding: 'utf-8'})
let ast = parse.parse(jscode);

let deObj = {"fJ":"-105","JJ":"-109","mJ":"-112","CJ":"-131","ME":"//","Fz":"0","Wz":"3","hz":"6","Sf":"7NX7rNwrHJl+zkO7mfUZQg==","Rz":"8","Qz":"Array","rb":"Buffer","Gb":"Constructor","Zb":"InstallTrigger","vq":"Jd","qE":"JdG2m","FX":"Jdx","fb":"Promise","kX":"RTCPeerConnection","AE":"Set","qf":"__driver_evaluate","Xf":"__fxdriver_unwrapped","Ef":"__lastWatirPrompt","Hf":"__webdriver_script_func","Ub":"_phantom","Vs":"_sdTrace","gH":"_setPowState","q7":"ajTypeBitmask","wf":"ak_ax","B7":"aprApInFlight","X7":"aprApTimer","UB":"assign","gs":"autocomplete","cB":"btoa","Rf":"callSelenium","gf":"calledSelenium","Os":"camera","Cz":"charAt","W7":"collectHeadlessSignals","Of":"decodeURIComponent","Is":"defaultValue","wb":"dm:","sb":"driver","Ib":"emit","fB":"enumerable","C7":"extractAbckHeartbeatTimestamp","Yb":"fc:","Js":"focus","zT":"fpValCalculated","gB":"function","R7":"getBrowser","m7":"getDeviceData","WE":"getItem","rs":"getVoices","nH":"get_telemetry","Q8":"height","HP":"https://","s7":"iReset","ms":"input","J8":"isNaN","j8":"join","Ah":"keypress","zF":"language","mH":"listFunctions","Ls":"magnetometer","M8":"mouseMoveData","LH":"mouseup","bT":"mozAlarms","vb":"mozInnerScreenY","FT":"mozIsLocallyAvailable","hT":"msManipulationViewsEnabled","HB":"n","BB":"o","cs":"onvoiceschanged","mT":"permissions","xH":"pointerup","PB":"r","bX":"rCFP","RT":"registerProtocolHandler","gT":"requestWakeLock","h8":"round","R8":"search","T7":"sensorData","MH":"setInterval","lE":"size","Zz":"sjs_r","Gz":"slice","AB":"splice","If":"spynner_additional_js_loaded","tf":"substring","qT":"t_en","JX":"td","db":"then","TB":"toStringTag","kH":"touchcancel","dz":"undefined","Sz":"url","NB":"userAgent","kz":"valueOf","xb":"vib:","Ps":"visibilitychange","Uf":"watinExpressionError","pf":"watinExpressionResult","cf":"webdriver","CT":"webkitGetGamepads","wB":"window","CB":"writable","dF":"x11:","Kf":"~","KB":",","M7":",,,,,,,","VF":",loc:","Mf":"-1","PJ":"-101","sJ":"-111","hJ":"-115","TJ":"-117","WJ":"-122","gJ":"-123","pJ":"-126","cJ":"-133","MJ":"-70","DJ":"-90","WH":"/","Hz":"1","gz":"9","Q7":"<bpd>","vz":"Date","x7":"DeviceMotionEvent","Vz":"Function","Qb":"HTMLElement","YB":"Math","m8":"Number","MT":"PiZtE","cb":"PointerEvent","Az":"Xd","Vf":"__$webdriverAsyncExecutor","xX":"__nightmare","sf":"__webdriver_evaluate","Ff":"__webdriver_script_fn","mf":"__webdriver_unwrapped","UH":"_setIpr","Qs":"accelerometer","xs":"accessibility-events","cH":"aeiouy13579","PT":"appMinorVersion","hb":"availHeight","Hb":"availWidth","AF":"bat:","Pb":"brave","J7":"buildPostData","Lz":"cTc","Wf":"calledPhantom","Xb":"catch","NX":"cdc_adoQpoasnfa76pfcZLmcfl_Array","Tz":"charCodeAt","rB":"configurable","Mz":"currentScript","zB":"d","IH":"debug","XB":"defineProperty","BT":"deviceData","hs":"devicemotion","v7":"do_en","tb":"documentMode","YE":"dummy","dB":"exports","rf":"geb","h7":"getCookie","I7":"getHeartbeatTimestamp","sT":"getStorageUpdates","Gs":"gyroscope","AP":"hardwareConcurrency","mB":"hasOwnProperty","jE":"hostname","r7":"https:","Db":"i1:","Rs":"id","JT":"imul","nz":"indexOf","Rb":"innerWidth","Yf":"key","z7":"lastAprAutopostTS","RH":"lastIndexOf","Dz":"location","Fb":"maxTouchPoints","Ss":"midi","jB":"name","P7":"navPerm","Bz":"nd","xz":"now","gb":"outerWidth","Nq":"parseFloat","ZX":"plugins","g7":"processAutopostRes","E8":"protocol","IE":"removeItem","Ws":"required","H7":"rir","WB":"s","UT":"sendBeacon","Yz":"set","F7":"setBraveSignal","Kz":"setTimeout","Cb":"spawn","ls":"speaker","Cs":"speechSynthesis","r8":"split","T8":"sqrt","TT":"storage","b8":"toLowerCase","zz":"toString","YH":"touchmove","ZH":"touchstart","qs":"unk","Oz":"value","Lb":"wrc:","Xz":"","Tb":"$cdc_asdjflasutopfhvcZLmcfl_","Mb":",cpen:","XJ":"-100","FJ":"-103","HJ":"-106","EJ":"-108","nJ":"-110","bJ":"-114","wJ":"-116","RJ":"-119","UJ":"-124","IJ":"-128","tJ":"-129","rJ":"-132","jJ":"-80","pz":".","Iz":"2","Uz":"4","sz":"5","mz":"7","CH":"<init/>","G7":"DeviceOrientationEvent","lf":"JdD","cE":"JdGD","bf":"JdGh","FE":"JdV","nB":"Symbol","dT":"TouchEvent","g8":"XDomainRequest","W8":"XMLHttpRequest","Jb":"XPathResult","zf":"__driver_unwrapped","JB":"__esModule","Bf":"__fxdriver_evaluate","ff":"__lastWatirConfirm","Pf":"__phantomas","nf":"__selenium_evaluate","Tf":"__selenium_unwrapped","Jf":"__webdriverFuncgeb","hf":"__webdriver_script_function","hB":"a","ns":"addEventListener","Df":"ak_a","Eb":"all","Zs":"background-sync","rz":"bd-2-44-32.js","nT":"bluetooth","Ts":"blur","b7":"calcSynthesisSpeechHash","jb":"callPhantom","Af":"cdc_adoQpoasnfa76pfcZLmcfl_Promise","df":"cdc_adoQpoasnfa76pfcZLmcfl_Symbol","p7":"checkIprSignals","QH":"click","vs":"clipboard","Ns":"clipboard-write","P8":"concat","lz":"constructor","ET":"credentials","fT":"deltaTimestamp","Ys":"device-info","AT":"dm_en","cz":"document","pb":"domAutomation","bz":"e","E7":"failedAprApBackoff","f7":"failedAprApCnt","ZB":"floor","Cf":"fmget_targets","Ds":"geolocation","EB":"get","H8":"getAttribute","xT":"getElementsByTagName","cT":"hypot","tz":"index","Qf":"isArray","NH":"keydown","VB":"l","Gq":"length","GX":"localStorage","qB":"m","Ks":"microphone","GH":"mousedown","HT":"mozPhoneNumberService","xB":"navigator","Ob":"non:","ws":"notifications","Sb":"number","Us":"off","Kb":"onLine","lb":"opc:","RB":"p","n8":"parseInt","ks":"persistent-storage","vH":"pointerdown","U7":"postData","BF":"product","qF":"productSub","qz":"prototype","kf":"publish","Jz":"push","Ab":"query","sX":"rVal","kB":"random","A8":"replace","WT":"requestMediaKeySystemAccess","kb":"sc:","D8":"screen","bb":"selenium","pT":"serviceWorker","CE":"setItem","jz":"src","IT":"storeWebWideTrackingException","n7":"synthesisSpeechHash","sB":"t","d8":"test","XT":"totVel","HE":"type","Nb":"vibrate","rT":"webkitTemporaryStorage","k8":"width","cd":"|","x4":"","W4":"","gd":"string","CV":"","Y4":"","rV":"","hq":"opera","nV":"k","gV":"","Hd":"i","z4":"","cV":"","Kq":"form_submit","Pq":"documentElement","Vq":"deviceorientation","R4":"collectSeleniumData","hd":"c","P4":"","fV":"awesomium","Yq":"applyFunc","lV":"","dq":"","N4":"","v4":"","BV":"__lastWatirAlert","jq":"","J4":"","Nd":"","Ld":"","A4":"","p4":"","Ud":"","Qd":"","PV":"$chrome_asyncScriptInfo","Hq":"webstore","T4":"","g4":"","bV":"subscribe","RV":"startTs","pV":"","Yd":"","hV":"","wq":"","Id":"","Xq":"payment-handler","nq":"ontouchstart","L4":"","I4":"","H4":"","h4":"","Dd":"","jd":"","G4":"hidden","kd":"fpValStr","Kd":"","IV":"","EV":"domAutomationController","Sd":"","Zd":"","Wd":"","sV":"cookie","b4":"","tV":"chrome","U4":"","q4":"","XV":"__webdriver__chr","zV":"_Selenium_IDE_Recorder","r4":"URL","Mq":"","pd":"String","K4":"","qV":"OSMJIF","GV":"","tq":"","ZV":"","rq":"","Cq":"","Iq":"","Dq":"","Wq":"x12:","c4":"startTimestamp","m4":"navigatorPermissions","Tq":"msMaxTouchPoints","AV":"","D4":"mozConnection","j4":"mediaDevices","fq":"map","Uq":"","mq":"isc:","YV":"","M4":"getGamepads","w4":"firstLoad","Fq":"cwen:","Md":"","d4":"","Bq":"clipboard-read","TV":"bm_sz","qq":"","xd":"","t4":"","Rd":"Module","kV":"","LV":"","B4":"","gq":"FileReader","VV":"Boolean","MV":"","rd":";","Q4":"","ld":"","Z4":"-102","dV":"","wV":"","E4":"","UV":"","Zq":"touchend","wd":"","l4":"","Aq":"","FV":"remove","C4":"","SV":"","F4":"","Sq":"","kq":"mousemove","WV":"","Qq":"keyup","Eq":"","Jq":"innerHeight","xV":"","DV":"","Rq":"getBattery","mV":"","HV":"forEach","X4":"","Oq":"","f4":"","zq":"ambient-light-sensor","JV":"_abck","OV":"","Gd":"","jV":"","cq":"","vV":"","md":"Object","QV":"","NV":"","n4":"","bq":"JdGx","KV":"","S4":"","pq":"","O4":"","vd":"","Cd":"ActiveXObject","s4":"","Od":"","lq":"/_bm/_data","k4":"-127","sq":",uaend,","V4":"","JdG2e":1000,"Jdx":2,"JdG":1,"JdGh":19,"JdD":0,"JdG2m":10000,"JdV":8,"JdGD":10,"Jdh":9,"JdtU":0.7,"JdtV":0.8,"JdtG":0.1,"Jde":3,"JdmxVxLLe":4282663,"JdmxhmhLUxh$":4294967295,"JdL$$e$":65535,"JdL$Uhe":65793,"JdGx":12}
let enObjName = 'dd'

const callToStringLiteral = {
    CallExpression(path) {
        let {callee} = path.node

        if (!types.isMemberExpression(callee)) {
            return;
        }

        let {object, property, compute} = callee

        if (types.isIdentifier(object, {"name": enObjName})) {
            let proName = compute ? property.value : property.name

            if (deObj.hasOwnProperty(proName)) {
                console.log(path.toString(), '-->', deObj[proName])
                path.replaceWith(types.valueToNode(deObj[proName]))
                return;
            }
        }

        if (types.isMemberExpression(object)) {
            let proName = compute ? property.value : property.name
            if (!['apply', 'call'].includes(proName)) {
                return;
            }

            if (object.object.name == enObjName) {
                let proName = object.compute ? object.property.value : object.property.name
                if (deObj.hasOwnProperty(proName)) {
                    path.replaceWith(types.valueToNode(deObj[proName]))
                    return;
                }
            }
        }
    }
}
traverse(ast, callToStringLiteral)

// 通用插件 进行字面量计算 可解三元
const constantFold = {
    "BinaryExpression|UnaryExpression|ConditionalExpression"(path) {
        // 防止溢出
        if (path.isUnaryExpression({operator: "-"}) || path.isUnaryExpression({operator: "void"})) {
            return;
        }
        // 计算值
        const {confident, value} = path.evaluate();
        if (!confident) {
            return;
        }
        if (typeof value == 'number' && (!Number.isFinite(value))) {
            return;
        }
        path.replaceWith(types.valueToNode(value))
    }
}
traverse(ast, constantFold)

function isNodeLiteral(node) {
    if (Array.isArray(node)) {
        return node.every(ele => isNodeLiteral(ele));
    }
    if (types.isLiteral(node)) {
        if (node.value == null) {
            return false;
        }
        return true;
    }
    if (types.isBinaryExpression(node)) {
        return isNodeLiteral(node.left) && isNodeLiteral(node.right);
    }
    if (types.isUnaryExpression(node, {
        "operator": "-"
    }) || types.isUnaryExpression(node, {
        "operator": "+"
    })) {
        return isNodeLiteral(node.argument);
    }

    if (types.isObjectExpression(node)) {
        let {properties} = node;
        if (properties.length == 0) {
            return true;
        }

        return properties.every(property => isNodeLiteral(property));

    }
    if (types.isArrayExpression(node)) {
        let {elements} = node;
        if (elements.length == 0) {
            return true;
        }
        return elements.every(element => isNodeLiteral(element));
    }

    return false;
}

// 方法计算
const a6 = {
    FunctionDeclaration(path) {
        let {node, parentPath} = path;
        let {id, body} = node;
        let len = body.body.length;
        if (!types.isReturnStatement(body.body[len - 1])) {
            return;
        }
        // path.scope.getBinding 方法获取与该标识符相关联的绑定
        const binding = parentPath.scope.getBinding(id.name);
        // constant 属性表示标识符是否被认为是常量。如果标识符绑定在一个不可修改的值上（如字面量或函数声明），则该属性为 true
        if (!binding || !binding.constant)
            return;
        // binding.referenced 是一个属性，用于判断绑定对象是否在代码中被引用 引用true
        // parentPath.isProgram 方法来检查节点是否为顶级程序节点 顶级程序节点表示整个程序的根节点 最外层
        if (!binding.referenced && !parentPath.isProgram()) {
            path.remove();
            return;
        }
        // 定位到计算的方法
        let sourceCode = path.toString();
        if (sourceCode.includes("try") || sourceCode.includes("random") || sourceCode.includes("Date")) {
            //返回值不唯一不做处理
            return;
        }
        //直接eval，如果缺环境，让其主动报错，再补上即可。下同,函数声明eval不会报错。
        eval(sourceCode);
        try {
            let canRemoved = true;
            // binding.referencePaths 是 Babel AST 绑定对象的属性，用于获取与该绑定相关联的所有引用路径。
            for (const referPath of binding.referencePaths) {
                let {parentPath, node} = referPath;
                if (!parentPath.isCallExpression({"callee": node})) {
                    canRemoved = false;
                    continue;
                }
                let arguments = parentPath.node.arguments;
                if (arguments.length == 0 || !isNodeLiteral(arguments)) {
                    canRemoved = false;
                    continue;
                }

                let value = eval(parentPath.toString());

                if (typeof value == "function" || typeof value == "undefined") {
                    canRemoved = false;
                    continue;
                }

                console.log(parentPath.toString(), "-->", value);
                parentPath.replaceWith(types.valueToNode(value));
            }
            canRemoved && path.remove();
        } catch (e) {
        }
    },
}
traverse(ast, a6)

const {code} = generator(ast)
fs.writeFile(File2, code, (err) => {
});