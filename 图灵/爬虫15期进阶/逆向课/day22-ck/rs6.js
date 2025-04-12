// 代理器封装
function get_enviroment(proxy_array) {
    for(var i=0; i<proxy_array.length; i++){
        handler = '{\n' +
            '    get: function(target, property, receiver) {\n' +
            '        console.log("方法:", "get  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return target[property];\n' +
            '    },\n' +
            '    set: function(target, property, value, receiver) {\n' +
            '        console.log("方法:", "set  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return Reflect.set(...arguments);\n' +
            '    }\n' +
            '}'
        eval('try{\n' + proxy_array[i] + ';\n'
        + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
        + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}
proxy_array = ['window', 'document', 'location', 'navigator', 'history','screen']
_null = function () {
    console.log(arguments)
}

window = global;
window.top = window

window.setInterval = _null
window.setTimeout = _null

content="eYZ4lGTQInmC5pcwyJWmBuJNwmqzwIeErgPCzu5suCb2ToW3XLnT4Q1Jin_oOlNzCFCeyegRuapq8A0BH1olkjS8EFuaG0..qNi86q6jFdDeYDxQqYQcZTRCO8py_vntIq0ApMjYHrNhovB_NWJ.iJoeaScwFsyZC2eA3g7Cgs87dB0kgsOQ0.HqTm6oagZV"


window.addEventListener = _null
window.attchEvent = undefined

navigator = {
    appVersion:"5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    languages: ['zh-CN', 'en', 'zh'],
    userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}

document = {}
location = {}

div = {
    getElementsByTagName: function (arg) {
        console.log(arguments);
        if(arg == "i") {
            return {length:0}
        }
    }
}

meta = {
    getAttribute: function (arg) {
        if(arg == 'r') {
            return 'm'
        }
    },
    parentNode: {
        removeChild:function (arg) {
            console.log(arg)
        }
    },
    content: content

}

document = {
    createElement: function (a) {
        console.log(arguments)
        if(a == 'div') {
            return div
        }
        if(a == "a") {
            return {}
        }
        if(a == 'form') {
            return {}
        }
    },
    getElementsByTagName: function (arg) {
        console.log("getElementsByTagName-->", arguments)
        if(arg == 'script') {
            return {}
        }
        if(arg == 'meta') {
            return [meta, meta]
        }
        if(arg == 'base') {
            return {}
        }
    },
    getElementById: function () {
        console.log(arguments)
    },
    addEventListener: function () {
        console.log(arguments)
    },
    appendChild: _null,
    removeChild: _null,
    documentElement: {}

}

location = {
    "ancestorOrigins": {},
    "href": "http://www.sgcc.com.cn/html/sgcc/col2022121225/column_2022121225_1.shtml",
    "origin": "http://www.sgcc.com.cn",
    "protocol": "http:",
    "host": "www.sgcc.com.cn",
    "hostname": "www.sgcc.com.cn",
    "port": "",
    "pathname": "/html/sgcc/col2022121225/column_2022121225_1.shtml",
    "search": "",
    "hash": ""
}

get_enviroment(proxy_array)





$_ts = window['$_ts'];
if (!$_ts)
    $_ts = {};
$_ts.nsd = 44128;
$_ts.cd = "qhTqrfAlDSgqxa3vruE.oGqvr1QcWP78qqLIccQlxaV5rAGllPQoWP0lJAEnhAWvqsEzqPQDrA9ltAaqxalvrOE.oGqtkALvqrZFoGqvrPQoWP78qqLJcSgqDq0WxaqvqsgmcGA3oGqvqOVkWP7vrOEzqSgqxaAvrsEyxaEmcaAGoGqvqnQqWP78lPQDxaQntnQcWP0koGqvqkVrWP7vrGVWrr78qcQcxaWGtSgqxalvrOE.oGqQrcQmWP7vqGV7balTWAEmWsCME6lPNDDI7PbxBiRkYJPbp8F3LFd91N8AFnNkCAlhHydmqaAuraQxbPacK22ZxYu7w6Euwoy8FZpAY9EuYslaZbQuWlW2HYhTwbeNhb2nRIQBMUrXFnzv4beBtKSnFCK6MURNM2L.td2cpUJJslSGzYmBFowVFb6YpsA6p632WZrzwb2XtC2ZeCZBF6w.FnUTwbeNhb2nRIQBMUrXFTL2XKwLFuYiJou8FYxb86YaQFNApKrzJD3.LYfzQDy.tCIXMCZNMox.RMwzwb2XtC2ZeCZBF6w.FT16EK2L1bx7FjziFK2BRl2q_0A_JVzIADPyiYf.wCz.xIYCMC9XFUx2enezQDy.tCIXMCZNMox.RQ3BEKyzw9pfjlyRM9msQOCjp9y.R9zlM5LfiYy7Qbz2zCTCFKg.FUu6Mne.wCz.xIYCMC9XFUx2eTgBx6fqJYHHJmSF1uR3F_yyRuYBQCYa4lEfHT2NQbU6hCTaMb7.R5yBMn27Qbz2zCTCFKg.FUu6MTyghb2nRIw8cAAWVbfmaCy0VYLZQ9Mhpmx0iuZZAHTmWmRuA0gndbRX3DJCUOjGFTYNR0Y0MXLgVUA4UKzj6DfYQ0l0Hmd7V0GCwbekK_J7RuyUVoEy6uwsM2NOFDPG8CTspYxKpepvV2SJtKRB5D3aROENMUjGsUQSsDNJQWxTp9NAtKRB5D3aROENMUjGR0pGwbyLA8NAVTpUtKRB5D3aROENMUjGJYW6Y6eUUZeUFDm4tKT_LkJ_M6zKF0tBQ2JIpuSCijzuJCTxQkwB6mEgRlflAu6FK0piwCmAWBrCYTRrYl2J_sYmpcSb3K.5WDqThDT0W7yzVsmARbpLdoWTHcSb3K.5WDqThDT0W.YPRKRvJDAyzK2arAEorObMqOAmlDeuI87yWs3nJuE_.OV_JsGdJabw3bYbRup9cRGTJklcks3yLuqnWO76WubMrk7CiuVaiFZkl6Pdu.7UtUL1D6pR1n_sLGVmlX76632YawuqkNatbq3rqGVox_zvZFMHHo6sbqPf5xo7bwHXS.mpGAAUFP5e47YNDvpZc    RlnJuQaJuldLu7nrAW6raijJklCWOZTijWnqnyrH2Aa5bm01YwtQsD7UlfhFDrbstxWY6J1FveyClR.3kRkFs.NAbNuK6YccR7kqOlcrOQxbOAcZOYetCO_3ce9M6V.FifXhCp0MPz.5bGBRCJutCBCQnevFC9.F.wG3bQXRop_zCraQny9FD163oJThbJbIMwvMC9X3CfjzCw7Q1yOFD.OhCReRnzPRXZBRK2OtCm25ce2Fba.3KMBhCYjMoW.MBefhCx.31zXg1e9MK0.MCU.hCzTQPzBIIGBFbRztCyvZPejFCA.MbILhCNCM1zz8.wN3vQXMUwXzC2u3DV.MU.0M1eB36mbxIwj312XFDq2ebNvtKe6WnUCQCENMuJbxIRuWc2BwCq2ebfTtKeL3nUCMoVNMCyjxIRuQn2BwDg2evJb3PyLRKi6MDrehbfGM.w7MCQXFDz7zCS63ny6IPU.8bqNQbR0x8z9MP2nwCL2_6JatUx6QnU.RCVNQvwuQMwuMKEXwCyjz6JBMcy6wDC6QbNOhvRuQMwS3P2aFPz45bgBwCeSR1UNRbANQDx0x826R12aRvV2_DaBwbr.t6.e8neCwK3.8XS2h6R03cz_gvqBQKJTt66_81eSFCl.IIx2R12CFoY4dbT6tURdQnUBwCVNwopOx8TaQc20woq24UzvtUYL3K56wDSORkV.IBRTh6xBRPz55vVBQvx0t6oyMPeeQbL.QIwah6TXwoZ2g6rBtUNjFnUfh627QPzb8IqBQC2.woW2ZvJPrAEoqTFd3olmr2GOFZGkrTLbKllxvTavR6Eorsj.qaleWGQDix7cWG";
if ($_ts.lcd)
    $_ts.lcd();


require("./_tsss")

console.log(document.cookie);


