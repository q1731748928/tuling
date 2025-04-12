# -*- coding: utf-8 -*-
import base64

import requests


# -*- coding: utf-8 -*-

import hashlib

params =  {
    "condition": "ty1tt2mw1",
    "refer": "homepage",
    "containerType": "0",
    "from": "search_result",
    "cityId": "110000",
    "page": "1"
}

so = "".join([f"{key}={params[key]}" for key in sorted(params.keys())])
print(so)

so1 = "d5e343d453aecca8b14b2dc687c381ca" + so
print(so1)

sha1  = hashlib.sha1()
sha1.update(so1.encode())
res = sha1.hexdigest()
auth = base64.b64encode(("20180111_android:"+res).encode('utf-8'))
print(auth)

headers = {
    "Host": "app.api.ke.com",
    "x-req-id": "46e6e85a-b998-4ad6-8d2a-b4bdd0c23e70",
    "page-schema": "homepage%2Fershou_home",
    "referer": "homepage1",
    "dynamic-sdk-version": "1.1.0",
    "lianjia-city-id": "110000",
    "parentsceneid": "741507170175560449",
    "source-global": "{}",
    "user-agent": "Beike2.66.0;google Pixel+4; Android 10",
    "lianjia-channel": "Android_ke_tencentt",
    "lianjia-device-id": "5ae8318bb4ccc523",
    "lianjia-version": "2.66.0",
    "lianjia-im-version": "2.34.0",
    "lianjia-recommend-allowable": "1",
    "authorization": auth.decode(),
    "extension": "lj_duid=DuW03RNc5Z//XluKVDfrs23pJYqaSAeqsj3CINiiEeginHcegtEY5dOnunCacmsd++2/c/wshcEmXpk0SVf4hdRA&ketoken=0201021BApDd672Y0JeFBAeoW9bZX9K+IwdtamstBsIAbicYMnpaEh3a2y3IJxGcANFRthOZkjeG2+2x7hIFKPS4cdDw==&lj_android_id=5ae8318bb4ccc523&lj_device_id_android=5ae8318bb4ccc523&mac_id=3A:5F:36:CD:11:AD",
    "ip": "127.0.0.1",
    "wifi_name": "XIALUO+7098",
    "lat": "28.207823",
    "lng": "112.868231",
    "beikebasedata": "%7B%22appVersion%22%3A%222.66.0%22%2C%22duid%22%3A%22DuW03RNc5Z%2F%2FXluKVDfrs23pJYqaSAeqsj3CINiiEeginHcegtEY5dOnunCacmsd%2B%2B2%2Fc%2FwshcEmXpk0SVf4hdRA%22%2C%22fpid%22%3A%220201021BApDd672Y0JeFBAeoW9bZX9K%2BIwdtamstBsIAbicYMnpaEh3a2y3IJxGcANFRthOZkjeG2%2B2x7hIFKPS4cdDw%5Cu003d%5Cu003d%22%7D",
    "device-id-s": "5ae8318bb4ccc523;DuW03RNc5Z//XluKVDfrs23pJYqaSAeqsj3CINiiEeginHcegtEY5dOnunCacmsd++2/c/wshcEmXpk0SVf4hdRA;0201021BApDd672Y0JeFBAeoW9bZX9K+IwdtamstBsIAbicYMnpaEh3a2y3IJxGcANFRthOZkjeG2+2x7hIFKPS4cdDw==",
    "channel-s": "Android_ke_tencentt",
    "appinfo-s": "Beike;2.66.0;2660100",
    "hardware-s": "google;Pixel 4",
    "systeminfo-s": "android;10",
    "wll-kgsa": "LJAPPVA accessKeyId=sjoe98HI099dhdD7; nonce=AK8pRd61r7BcmZc9CH8WA5jMPiQWc8r5; timestamp=1715087810; signedHeaders=Device-id-s,User-Agent,AppInfo-s,Hardware-s,Channel-s,SystemInfo-s; signature=o6nUwCdlL4E45dG9TbJT6pTBavO4sIs+xOu6hunYXC8="
}

cookies = {
    "lianjia_udid": "5ae8318bb4ccc523",
    "lianjia_ssid": "f807e74a-5d07-4b6a-9989-2750fd1440a7",
    "algo_session_id": "b84a9fbc-a9e6-4804-9491-04a502c7a186",
    "lianjia_uuid": "4ed552c9-35d2-4b31-bdea-600eaae12420"
}
url = "https://app.api.ke.com/api/secondhand/ershoufang/homepagesearch"

response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)


'''
=https://app.api.ke.com/api/secondhand/ershoufang/homepagesearch?condition=mw1ty1&refer=homepage&containerType=0&from=search_result&cityId=110000&page=1


d5e343d453aecca8b14b2dc687c381ca  + 查询参数

d5e343d453aecca8b14b2dc687c381 cacityId=110000condition=mw1containerType=0from=search_resultpage=1 refer=homepage

result=59d8b5e33c12e4f4ea117fc0faa13c0d59294e1c


base64(20180111_android +  59d8b5e33c12e4f4ea117fc0faa13c0d59294e1c  )


https://app.api.ke.com/api/secondhand/ershoufang/homepagesearch?condition=ty1&refer=homepage&containerType=0&from=search_result&cityId=110000&page=1
MjAxODAxMTFfYW5kcm9pZDo2MjIyM2UwMmRjZGMzMDk5NGMxMDU1Mzc2YzhjM2I2NTliZGQ2Mjc0
'''