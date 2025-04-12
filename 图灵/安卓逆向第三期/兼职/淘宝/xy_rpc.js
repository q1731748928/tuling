rpc.exports = {
    sign: function (data, times) {
        var ret = null;
        Java.perform(function () {
            Java.choose("mtopsdk.security.InnerSignImpl", {
                onMatch: function (instance) {
                    //这些都是传入的参数，具体传参内容根据实际修改
                    var HashMap1 = Java.use("java.util.HashMap").$new();
                    HashMap1.put("data", data);

                    HashMap1.put("deviceId", "Ap2xlstz9Q-Xqp90jq16YWjUopNFAYEEhFHSXXqIucQC");
                    HashMap1.put("sid", "");
                    HashMap1.put("uid", "");
                    HashMap1.put("x-features", "27");
                    HashMap1.put("appKey", "21407387");

                    HashMap1.put("api", "mtop.taobao.idlemtopsearch.search");

                    HashMap1.put("lat", "0");
                    HashMap1.put("lng", "0");
                    HashMap1.put("utdid", "ZUDUSVa6rmsDAOvsGCex7UWC");
                    HashMap1.put("extdata", "openappkey=DEFAULT_AUTH");
                    HashMap1.put("ttid", "270200@fleamarket_android_7.8.80");
                    HashMap1.put("t", times);
                    HashMap1.put("v", "1.0");

                    var jExt = Java.use("java.util.HashMap").$new();
                    jExt.put("pageId", "");
                    jExt.put("pageName", "");

                    ret = instance.getUnifiedSign(HashMap1, jExt, "21407387", "", false, "r_38").toString();
                    //console.log('getUnifiedSign ret value is ' + res);
                    // ret["result"] = res;
                },
                onComplete: function () {
                }
            })
        })
        return ret;
    }
};

