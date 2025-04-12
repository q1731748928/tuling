

function  hook1(){
    let C1674a = Java.use("com.aimi.android.common.http.a");
C1674a["c"].implementation = function (str, z) {
    console.log(`C1674a.m107201c is called: str=${str}, z=${z}`);
    let result = this["c"](str, z);
    console.log(`C1674a.m107201c result=${result}`);

      //Java map的遍历
            var key = result.keySet(); // 这一行获取了Map对象的键集合，这个键集合是一个迭代器
            var it = key.iterator();
            var results = "";
            while(it.hasNext()){
                var keystr = it.next();
                var valuestr = result.get(keystr);
                console.log("key->" + keystr + "val->" + valuestr);
                results += valuestr;
            }

    return result;
};
}

function hook2(){
    let C17763e = Java.use("com.xunmeng.pinduoduo.c.e");
    C17763e["a"].implementation = function (str, i) {
        console.log(`C17763e.m65496a is called: str=${str}, i=${i}`);
        let result = this["a"](str, i);
        console.log(`C17763e.m65496a result=${result}`);
        return result;
    };

}


function hook3(){
    let C1674a = Java.use("com.aimi.android.common.http.a");
C1674a["h"].implementation = function (str) {
    console.log(`C1674a.m107200h is called: str=${str}`);
    let result = this["h"](str);
    console.log(`C1674a.m107200h result=${result}`);
    return result;
};

}


function hook4(){
    let C35598s = Java.use("com.xunmeng.pinduoduo.secure.s");
    C35598s["f"].implementation = function (context, l) {
    console.log(`C35598s.mo24406f is called: context=${context}, l=${l}`);
    let result = this["f"](context, l);
    console.log(`C35598s.mo24406f result=${result}`);
    return result;
};

}

Java.perform(function (){
    // hook1()
    // hook2()
// hook3()
    hook4()

})

/*
*
https://api.pinduoduo.com/search?source=index&pdduid=4761406513, z=false
/search
search
 if (!false && !true) {

    }
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
* */
