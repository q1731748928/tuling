# -*- coding: utf-8 -*-
import json

import execjs

headers = {
    'user-agent':"123123123123"
}

import requests
import re

with open('扣-jsl.js',encoding='utf-8') as f1:
    js_code =  f1.read()


cookie = {}
res = requests.get('https://www.mafengwo.cn/i/5376978.html',headers=headers)
cookie.update(res.cookies)

ck1 = re.search("document.cookie=(.*?);location", res.text).group(1)
_js_ck = execjs.eval(ck1).split(';')[0]
print(_js_ck)

cookie['__jsl_clearance_s'] = _js_ck.split('=')[1]
print(cookie)

res2 = requests.get('https://www.mafengwo.cn/i/5376978.html',headers=headers,cookies=cookie)

parsm = re.findall(";go\((.*?)\)</script>",res2.text)[0]
print(parsm)

ck_2 = execjs.compile(js_code).call("get_ck",json.loads(parsm))[0]

cookie['__jsl_clearance_s'] =ck_2

res3 = requests.get('https://www.mafengwo.cn/i/5376978.html',headers=headers,cookies=cookie)

print(res3.text)

