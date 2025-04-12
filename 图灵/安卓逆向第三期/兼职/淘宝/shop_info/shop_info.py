import re
import urllib.parse
import requests as sess
import time
import frida
import json

# 创建Flask应用实例
from flask import Flask

app = Flask(__name__)

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
                    HashMap1.put("api", "mtop.taobao.shop.impression.all.get");
                    HashMap1.put("mtopBusiness","true");
                    HashMap1.put("utdid", "Zqxp9Bm6qUcDAGzsTLQuWS/n");
                    HashMap1.put("extdata", "openappkey=DEFAULT_AUTH");
                    HashMap1.put("ttid", "700170@taobao_android_10.32.0");
                    HashMap1.put("t", times);
                    HashMap1.put("v", "1.0");

                    var jExt = Java.use("java.util.HashMap").$new();
                    jExt.put("pageId", "");
                    jExt.put("pageName", "");

                    ret = instance.a(HashMap1, jExt, "21646297", "", false, "r_94").toString();
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

@app.route('/getShopInfo')
def get_shop_info_data():
    shop_info_dict = dict()
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
        "x-t": "1722735039",
        "x-bx-version": "6.6.231204",
        "f-refer": "mtop",
        "x-extdata": "openappkey%3DDEFAULT_AUTH",
        "x-ttid": "700170%40taobao_android_10.32.0",
        "x-app-ver": "10.32.0",
        "x-c-traceid": "34ee78fa418b438fa6b574e3b4622ac2",
        "a-orange-dq": "appKey=21646297&appVersion=10.32.0&clientAppIndexVersion=1120240804010002723",
        "x-regid": "reg0ju5cOHOukgC8gJeLszbY0Bv5Cx9q",
        "x-ua": "Mozilla%2F5.0+%28Linux%3B+U%3B+Android+10%3B+zh-CN%3B+Pixel+4+Build%2FQQ3A.200805.001%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Version%2F4.0+Chrome%2F100.0.4896.58+UWS%2F5.6.0.13+Mobile+Safari%2F537.36+AliApp%28TB%2F10.32.0%29+UCBS%2F2.11.1.1+TTID%2F700170%40taobao_android_10.32.0+WindVane%2F8.5.0+1080X2236+UT4Aplus%2F0.2.29",
        "x-utdid": "Zqxp9Bm6qUcDAGzsTLQuWS%2Fn",
        "c-launch-info": "0,0,1722735039300,1722733991304,2",
        "x-appkey": "21646297",
        "x-falco-id": "34ee78fa418b438fa6b574e3b4622ac2",
        "x-page-url": "https%3A%2F%2Ftbshop.m.taobao.com%2Fapp%2Ftb-haodian%2Fh5-pages%2Fnewimpression%3FsellerId%3D2202825144761%26shopId%3D226039147%26disableNav%3DYES%26status_bar_transparent%3Dtrue%26ttid%3D700170%2540taobao_android_10.32.0",
        "x-page-name": "com.taobao.browser.BrowserActivity",
        "x-devid": "AjFhO792bmCyGqgZ1Tb3wyePk8hXoWrBdaazKOpsiyTI",
        "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B10%3BGoogle%3BPixel+4%29+DeviceType%28Phone%29",
        "Host": "guide-acs.m.taobao.com"
    }
    datas = {
        "data": "{\"sellerId\":\"2202825144761\",\"shopId\":\"226039147\",\"appUid\":\"\"}"
    }
    result = get_sign(datas)
    headers['x-t'] = st
    headers['x-sign'] = urllib.parse.quote_plus(re.findall("x-sign=(.*?)}", result, re.S)[0])
    headers['x-mini-wua'] = urllib.parse.quote_plus(re.findall("x-mini-wua=(.*?),", result)[0])
    headers['x-sgext'] = urllib.parse.quote_plus(re.findall("x-sgext=(.*?),", result)[0])
    headers['x-umt'] = urllib.parse.quote_plus(re.findall("x-umt=(.*?),", result)[0])
    url = "https://guide-acs.m.taobao.com/gw/mtop.taobao.shop.impression.all.get/1.0/"
    text = sess.post(url, headers=headers, data=datas, verify=False).text
    json_str = json.loads(text)
    data = json_str.get('data')
    if data == None:
        print("请求失败,请检查参数!!!")
    else:
        result = data.get('result')
        # 粉丝数
        fansNumText = result.get('fansNumText')
        # print("粉丝数:", fansNumText)
        shop_info_dict['fansNumText'] = fansNumText
        # 店铺名称
        shopName = result.get('shopName')
        # print("店铺名称:", shopName)
        shop_info_dict['shopName'] = shopName
        # 店铺头像
        mtopShopLogoVO = result.get('mtopShopLogoVO')
        # https://img.alicdn.com/imgextra/i4/2202825144761/O1CN01fytlz91l2aaj5i9Mp_!!2202825144761.jpg
        shopLogo = mtopShopLogoVO.get('shopLogo')
        if None != shopLogo:
            if str(shopLogo).__contains__("https://"):
                url_regex = r'https://[^ ]+'  # 匹配 https 开头的 URL，直到遇到空格为止
                # 找到所有匹配的 URL
                shop_logo_url = re.findall(url_regex, shopLogo)
                shop_logo = shop_logo_url[0]
                shop_info_dict['shop_logo'] = shop_logo
                # print("粉丝数量:" + fansNumText, "店铺名称:" + shopName, "店铺头像:" + shop_logo)
            elif str(shopLogo).__contains__("//img.alicdn.com//"):
                shopLogo = str(shopLogo).replace("//img.alicdn.com//", "https://img.alicdn.com/")
                shop_logo = shopLogo
                shop_info_dict['shop_logo'] = shop_logo
                # print("粉丝数量:" + fansNumText, "店铺名称:" + shopName, "店铺头像:" + shop_logo)

        impressionHeaderLabels = mtopShopLogoVO.get('impressionHeaderLabels')
        for i in range(0, len(list(impressionHeaderLabels))):
            # 店铺标识
            outputName = impressionHeaderLabels[i].get('outputName')
            # print("店铺标识:", outputName)
            shop_info_dict['shopping_mall_sign'] = outputName

        endorseModules = result.get('endorseModules')
        for i in range(0, len(endorseModules)):
            # 淘宝神店榜 + 爱心好店
            tagText = endorseModules[i].get('tagText')
            # print("淘宝神店榜:", tagText)
            shop_info_dict['store_rank'] = tagText

        mtopShopDsrVO = result.get('mtopShopDsrVO')
        # 综合体验描述
        xdtExperienceScoreDesc = mtopShopDsrVO.get('xdtExperienceScoreDesc')
        # 综合体验评分
        xdtExperienceScore = mtopShopDsrVO.get('xdtExperienceScore')
        # 宝贝质量
        xdtMerchandisScore = mtopShopDsrVO.get('xdtMerchandisScore')
        # 物流速度
        xdtConsignmentScore = mtopShopDsrVO.get('xdtConsignmentScore')
        # 服务保障
        xdtServiceScore = mtopShopDsrVO.get('xdtServiceScore')
        # print('综合体验描述:' + xdtExperienceScoreDesc, "综合体验评分:" + xdtExperienceScore, "宝贝质量:" + xdtMerchandisScore,'物流速度' + xdtConsignmentScore, '服务保障' + xdtServiceScore)
        shop_info_dict['xdtExperienceScoreDesc'] = xdtExperienceScoreDesc
        shop_info_dict['xdtExperienceScore'] = xdtExperienceScore
        shop_info_dict['xdtMerchandisScore'] = xdtMerchandisScore
        shop_info_dict['xdtConsignmentScore'] = xdtConsignmentScore
        shop_info_dict['xdtServiceScore'] = xdtServiceScore

        shopLabels = result.get('shopLabels')
        stylizedTypeLabels = shopLabels.get('stylizedTypeLabels')
        for i in range(0, len(stylizedTypeLabels)):
            # 经营特色
            outputName = stylizedTypeLabels[0].get('outputName')
            # print(outputName)
            shop_info_dict['operating_characteristics'] = outputName

        dataTypeLabels = shopLabels.get('dataTypeLabels')
        for i in range(0, len(dataTypeLabels)):
            # 店铺人气
            outputName = dataTypeLabels[i].get('outputName')
            # print(outputName)
            shop_info_dict['shop_popularity'] = outputName

        shopLabels = result.get('shopLabels')
        serviceTypeLabels = shopLabels.get('serviceTypeLabels')
        for i in range(0, len(serviceTypeLabels)):
            # 服务保障
            outputName = serviceTypeLabels[i].get('outputName')
            # print(outputName)
            shop_info_dict['service guarantee'] = outputName

        mtopShopIntroVO = result.get('mtopShopIntroVO')
        # 保证金
        aptitude = mtopShopIntroVO.get('aptitude')
        # print('保证金:', aptitude)
        shop_info_dict['aptitude'] = aptitude
        return json.dumps(shop_info_dict, ensure_ascii=False)


if __name__ == '__main__':
    app.run(host='localhost', port=8081, debug=True)
