// ryw.a is called: hashMap={data={"sellerId":"2202825144761","pageSize":"10","prefetchKey":"page_data_prefetch_commentlist_key"}, deviceId=AjFhO792bmCyGqgZ1Tb3wyePk8hXoWrBdaazKOpsiyTI, sid=280c14e7f74607d1e94408a2194e10a2, uid=1945588948, x-features=1051, appKey=21646297, api=mtop.taobao.rotterdam.shop.impression.commentlist, mtopBusiness=true, utdid=Zqxp9Bm6qUcDAGzsTLQuWS/n, extdata=openappkey=DEFAULT_AUTH, ttid=700170@taobao_android_10.32.0, t=1722683088, v=1.0}, hashMap2={pageId=https://tbshop.m.taobao.com/app/tb-haodian/h5-pages/newimpression?sellerId=2202825144761&shopId=226039147&disableNav=YES&status_bar_transparent=true&ttid=700170%40taobao_android_10.32.0, pageName=com.taobao.browser.BrowserActivity}, str=21646297, str2=null, z=false, str3=r_78
// 淘宝的参数1: {data={"sellerId":"2202825144761","pageSize":"10","prefetchKey":"page_data_prefetch_commentlist_key"}, deviceId=AjFhO792bmCyGqgZ1Tb3wyePk8hXoWrBdaazKOpsiyTI, sid=280c14e7f74607d1e94408a2194e10a2, uid=1945588948, x-features=1051, appKey=21646297, api=mtop.taobao.rotterdam.shop.impression.commentlist, mtopBusiness=true, utdid=Zqxp9Bm6qUcDAGzsTLQuWS/n, extdata=openappkey=DEFAULT_AUTH, ttid=700170@taobao_android_10.32.0, t=1722683088, v=1.0}
// 淘宝的参数2: {pageId=https://tbshop.m.taobao.com/app/tb-haodian/h5-pages/newimpression?sellerId=2202825144761&shopId=226039147&disableNav=YES&status_bar_transparent=true&ttid=700170%40taobao_android_10.32.0, pageName=com.taobao.browser.BrowserActivity}
// 淘宝的参数3: 21646297
// 淘宝的参数4: null
// 淘宝的参数5: false
// 淘宝的参数6: r_78

rpc.exports = {
    sign: function (data, times) {
        var ret = null;
        Java.perform(function () {
            Java.choose("tb.ryw", {
                onMatch: function (instance) {
                    //这些都是传入的参数，具体传参内容根据实际修改
                    var HashMap1 = Java.use("java.util.HashMap").$new();
                    HashMap1.put("data", '{"sellerId":"2202825144761","pageSize":"10","prefetchKey":"page_data_prefetch_commentlist_key"}');

                    HashMap1.put("deviceId", "AjFhO792bmCyGqgZ1Tb3wyePk8hXoWrBdaazKOpsiyTI");
                    HashMap1.put("sid", "280c14e7f74607d1e94408a2194e10a2");
                    HashMap1.put("uid", "1945588948");
                    HashMap1.put("x-features", "1051");
                    HashMap1.put("appKey", "21646297");
                    HashMap1.put("api", "mtop.taobao.rotterdam.shop.impression.commentlist");
                    HashMap1.put("mtopBusiness","true");
                    HashMap1.put("utdid", "Zqxp9Bm6qUcDAGzsTLQuWS/n");
                    HashMap1.put("extdata", "openappkey=DEFAULT_AUTH");
                    HashMap1.put("ttid", "700170@taobao_android_10.32.0");
                    HashMap1.put("t", "1722683088");
                    HashMap1.put("v", "1.0");

                    var jExt = Java.use("java.util.HashMap").$new();
                    jExt.put("pageId", "https://tbshop.m.taobao.com/app/tb-haodian/h5-pages/newimpression?sellerId=2202825144761&shopId=226039147&disableNav=YES&status_bar_transparent=true&ttid=700170%40taobao_android_10.32.0");
                    jExt.put("pageName", "com.taobao.browser.BrowserActivity");

                    ret = instance.a(HashMap1, jExt, "21646297", null, false, "r_78").toString();
                    console.log('getUnifiedSign ret value is ' + ret);
                    // ret["result"] = res;
                },
                onComplete: function () {
                }
            })
        })
        return ret;
    }
};

