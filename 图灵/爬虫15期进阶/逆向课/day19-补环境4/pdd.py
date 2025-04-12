# -*- coding: utf-8 -*-

import requests
import json
import execjs

with open('pdds.js',encoding='utf-8') as f1:
    js_code = f1.read()

_co = execjs.compile(js_code).call("get_aaa")

print(_co)

headers = {
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-platform": "\"Windows\"",
    "Referer": "https://careers.pinduoduo.com/jobs",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "Content-Type": "application/json"
}

url = "https://careers.pinduoduo.com/api/recruit/position/list"
data = {
    "job": "",
    "page": 3,
    "pageSize": 10,
    "name": "",
    "workLocationList": [],
    "anti_content": _co
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, data=data)

print(response.text)
print(response)