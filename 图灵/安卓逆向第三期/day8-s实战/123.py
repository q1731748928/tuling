# -*- coding: utf-8 -*-

import requests

import frida
import sys


def on_message(message, data):
    print("message", message)
    print("data", data)


# 通过Spawn模式启动一个新的应用程序进程，并在该进程中加载Frida脚本
device = frida.get_usb_device().attach("com.xunmeng.pinduoduo")
with open('pdd-rpc.js',encoding='utf-8') as f1:
    js_code = f1.read()

script = device.create_script(js_code)
script.on("message", on_message)
script.load()

anti = script.exports.xialuo()
print(anti)

headers = {
    "Host": "api.pinduoduo.com",
    "etag": "bDmY1yH4",
    "accesstoken": "OEPLLFI3OENRH5CWCUD7MC5COSNGODHPFLVE3MSS37ODC2CC2JJQ12031b2",
    "referer": "Android",
    "lat": "KCAYS5HSM2KHIYKKPFMMWVQN5L5ZEDJQTK7D4LSDNJDW6JKAJXNA12031b2",
    "al-sa": "{\"ads\":\"!!!;-[fg#&!\\yX=d6!!#&!\\\\\"-[Gs`3!!#&!\\\\\"yX=d6#k#&!\\.7C5M,#k#&!\\+kpw`z%9#&!!t<i\\pB%9#&!\\-H4-Ab)p\"}",
    "p-appname": "pinduoduo",
    "p-proc-time": "2099738",
    "x-pdd-info": "bold_free%3Dfalse%26bold_product%3D%26front%3D1",
    "x-pdd-queries": "width=1080&height=2236&net=1&brand=google&model=Pixel+4&osv=10&appv=6.26.0&pl=2",
    "x-yak-llt": "1714029970723",
    "p-proc": "main",
    "p-mediainfo": "player=1.0.3&rtc=1.0.0",
    "x-b3-ptracer": "hctrue236505f8aacb452f9618b5425f",
    "user-agent": "android Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QQ2A.200405.005; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36  phh_android_version/6.26.0 phh_android_build/43953171301671e3b3baf01f859eed5581323a9e phh_android_channel/hw pversion/0",
    "pdd-config": "V4:001.062600",
    "multi-set": "1,1",
    "content-type": "application/json;charset=UTF-8",
    "anti-token": anti,
    "vip": "81.69.104.49"
}

cookies = {
    "acid": "91957d147138da6c4ddd5bd3649fa2fb",
    "api_uid": "CiRVq2Yp/zE2uABaj49fAg=="
}
url = "https://api.pinduoduo.com/search"
params = {
    "source": "index",
    "pdduid": "4761406513"
}

data = '{"install_token":"3519158c-12dc-420d-8db6-3eafea319832","item_ver":"lzqq","list_id":"CS0AQ959","track_data":"refer_page_id,10002_1715083769100_0491581551;refer_search_met_pos,0","search_met":"history","max_offset":"0","source":"index","sort":"default","exposure_offset":"0","q":"茅台","page_sn":"10015","page_id":"search_result.html","size":"20","q_search":"{\\pes_req_id\\:\\515f5109-0ebc-4440-a866-282d071fdc8a\\}","requery":"0","page":"1","engine_version":"2.0","is_new_query":"1","back_search":"false"}'.encode('unicode_escape')
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)
print(response.text)
print(response)
