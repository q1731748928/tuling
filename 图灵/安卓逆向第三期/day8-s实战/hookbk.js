
function hook2(){}

function hook1(){
    let HttpUtil = Java.use("com.bk.base.netimpl.a");
    HttpUtil["a"].overload('java.lang.String', 'java.util.Map', 'org.apache.http.client.HttpClient').implementation = function (str, map2, httpClient) {
    console.log(`HttpUtil.m30667a is called: str=${str}, map2=${map2}, httpClient=${httpClient}`);
    let result = this["a"](str, map2, httpClient);
    console.log(`HttpUtil.m30667a result=${result}`);
    return result;
};
}

function hook3(){
    let HeaderInterceptor = Java.use("com.bk.base.netimpl.interceptor.d");
HeaderInterceptor["signRequest"].implementation = function (builder, request) {
    console.log(`HeaderInterceptor.signRequest is called: builder=${builder}, request=${request}`);
    let result = this["signRequest"](builder, request);
    console.log(`HeaderInterceptor.signRequest result=${result}`);
    return result;
};
}


function hook4(){

    /*
    *  str=https://app.api.ke.com/api/secondhand/ershoufang/homepagesearch?condition=mw1ty1&refer=homepage&containerType=0&from=search_result&cityId=110000&page=1, map2=[object Object]
    * */

    let HttpUtil = Java.use("com.bk.base.netimpl.a");
HttpUtil["getSignString"].implementation = function (str, map2) {
    console.log(`HttpUtil.getSignString is called: str=${str},map=${map2}`);
          //Java map的遍历
            var key = map2.keySet(); // 这一行获取了Map对象的键集合，这个键集合是一个迭代器
            var it = key.iterator();
            var results = "";
            while(it.hasNext()){
                var keystr = it.next();
                var valuestr = map2.get(keystr);
                console.log("key->" + keystr + "val->" + valuestr);
                results += valuestr;
            }
    console.log(results)


    let result = this["getSignString"](str, map2);
    console.log(`HttpUtil.getSignString result=${result}`);
    return result;
};
}

function hook5(){
    let DeviceUtil = Java.use("com.bk.base.util.bk.DeviceUtil");
DeviceUtil["SHA1ToString"].implementation = function (str) {
    console.log(`DeviceUtil.SHA1ToString is called: str=${str}`);
    let result = this["SHA1ToString"](str);
    console.log(`DeviceUtil.SHA1ToString result=${result}`);
    return result;
};
}

function hook6(){
    let MainRouterApi = Java.use("com.bk.base.router.ModuleRouterApi$MainRouterApi");
MainRouterApi["getHttpAppSecret"].implementation = function () {
    console.log(`MainRouterApi.getHttpAppSecret is called`);
    let result = this["getHttpAppSecret"]();
    console.log(`MainRouterApi.getHttpAppSecret result=${result}`);
    return result;
};
}


function hook7(){
let MainRouterApi = Java.use("com.bk.base.router.ModuleRouterApi$MainRouterApi");
MainRouterApi["getHttpAppId"].implementation = function () {
    console.log(`MainRouterApi.getHttpAppId is called`);
    let result = this["getHttpAppId"]();
    console.log(`MainRouterApi.getHttpAppId result=${result}`);
    return result;
};
}

Java.perform(function (){
    // hook1()
        hook3()
    // hook4()
    // hook5()
// hook6()
// hook7()

})