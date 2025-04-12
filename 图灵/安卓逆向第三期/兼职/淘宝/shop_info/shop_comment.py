import re
import urllib.parse

import requests as sess
import time
import frida

session = sess.session()

st = str(int(time.time()))

def on_message(message):
    if message['type'] == 'send':
        print("[*] {}".format(message['payload']))
    else:
        print(message)

def get_sign(datas):
    jscode = """
    rpc.exports = {
    sign: function (data, times) {
        var ret = null;
        Java.perform(function () {
            Java.choose("tb.ryw", {
                onMatch: function (instance) {
                    //这些都是传入的参数，具体传参内容根据实际修改
                    var HashMap1 = Java.use("java.util.HashMap").$new();
                    HashMap1.put("data", data);
                    HashMap1.put("deviceId", "AjFhO792bmCyGqgZ1Tb3wyePk8hXoWrBdaazKOpsiyTI");
                    HashMap1.put("sid", "20d7c48fd52972d60b432ffe4e8ed452");
                    HashMap1.put("uid", "4157711158");
                    HashMap1.put("x-features", "1051");
                    HashMap1.put("appKey", "21646297");
                    HashMap1.put("api", "mtop.taobao.rotterdam.shop.impression.commentlist");
                    HashMap1.put("mtopBusiness","true");
                    HashMap1.put("utdid", "Zqxp9Bm6qUcDAGzsTLQuWS/n");
                    HashMap1.put("extdata", "openappkey=DEFAULT_AUTH");
                    HashMap1.put("ttid", "700170@taobao_android_10.32.0");
                    HashMap1.put("t", times);
                    HashMap1.put("v", "1.0");

                    var jExt = Java.use("java.util.HashMap").$new();
                    jExt.put("pageId", "");
                    jExt.put("pageName", "");

                    ret = instance.a(HashMap1, jExt, "21646297", "", false, "r_78").toString();
                    // ret["result"] = res;
                },
                onComplete: function () {
                }
            })
        })
        return ret;
    }
};
    """

    process = frida.get_usb_device().attach('com.taobao.taobao')
    script = process.create_script(jscode)
    script.on('message', on_message)
    script.load()
    result = script.exports.sign(datas["data"], st)
    return result


def get_search_data():
    headers = {
        "referer": "https://tbshop.m.taobao.com/app/tb-haodian/h5-pages/newimpression",
        "x-social-attr": "3",
        "x-sid": "20d7c48fd52972d60b432ffe4e8ed452",
        "A-SLIDER-Q": "appKey%3D21646297%26ver%3D1709712817956",
        "x-uid": "4157711158",
        "x-nettype": "WIFI",
        "x-pv": "6.3",
        "x-nq": "WIFI",
        "x-region-channel": "CN",
        "x-features": "1051",
        "x-app-edition": "ST",
        "x-app-conf-v": "0",
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        "x-bx-version": "6.6.231204",
        "f-refer": "mtop",
        "x-extdata": "openappkey%3DDEFAULT_AUTH",
        "x-ttid": "700170%40taobao_android_10.32.0",
        "x-app-ver": "10.32.0",
        "x-c-traceid": "f0eb0b83ef454bbf8eea6b75454feb4d",
        "a-orange-dq": "appKey=21646297&appVersion=10.32.0&clientAppIndexVersion=1120240804010002723",
        "x-regid": "reg0ju5cOHOukgC8gJeLszbY0Bv5Cx9q",
        "x-ua": "Mozilla%2F5.0+%28Linux%3B+U%3B+Android+10%3B+zh-CN%3B+Pixel+4+Build%2FQQ3A.200805.001%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Version%2F4.0+Chrome%2F100.0.4896.58+UWS%2F5.6.0.13+Mobile+Safari%2F537.36+AliApp%28TB%2F10.32.0%29+UCBS%2F2.11.1.1+TTID%2F700170%40taobao_android_10.32.0+WindVane%2F8.5.0+1080X2236+UT4Aplus%2F0.2.29",
        "x-utdid": "Zqxp9Bm6qUcDAGzsTLQuWS%2Fn",
        "c-launch-info": "0,0,1722734055459,1722733991304,2",
        "x-appkey": "21646297",
        "x-falco-id": "f0eb0b83ef454bbf8eea6b75454feb4d",
        "x-page-url": "https%3A%2F%2Ftbshop.m.taobao.com%2Fapp%2Ftb-haodian%2Fh5-pages%2Fnewimpression%3FsellerId%3D2202825144761%26shopId%3D226039147%26disableNav%3DYES%26status_bar_transparent%3Dtrue%26ttid%3D700170%2540taobao_android_10.32.0",
        "x-page-name": "com.taobao.browser.BrowserActivity",
        "x-devid": "AjFhO792bmCyGqgZ1Tb3wyePk8hXoWrBdaazKOpsiyTI",
        "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B10%3BGoogle%3BPixel+4%29+DeviceType%28Phone%29",
        "Host": "guide-acs.m.taobao.com"
    }
    jsonString = '{"sellerId":"2851497469","pageSize":"10","prefetchKey":"page_data_prefetch_commentlist_key"},'
    datas = {
        'data': jsonString
    }
    result = get_sign(datas)
    headers['x-t'] = st
    headers['x-sign'] = urllib.parse.quote_plus(re.findall("x-sign=(.*?)}", result, re.S)[0])
    headers['x-mini-wua'] = urllib.parse.quote_plus(re.findall("x-mini-wua=(.*?),", result)[0])
    headers['x-sgext'] = urllib.parse.quote_plus(re.findall("x-sgext=(.*?),", result)[0])
    headers['x-umt'] = urllib.parse.quote_plus(re.findall("x-umt=(.*?),", result)[0])
    url = "https://guide-acs.m.taobao.com/gw/mtop.taobao.rotterdam.shop.impression.commentlist/1.0/"
    response = sess.post(url, headers=headers, data=datas, verify=False)
    print(response.text)


if __name__ == '__main__':
    get_search_data()