# -*- coding: utf-8 -*-
import json
import requests

import subprocess
from functools import partial
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs



headers = {
    "accept": "*/*",
    "accept-language": "en-GB,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://careers.pinduoduo.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://careers.pinduoduo.com/jobs",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
}
cookies = {
    "_bee": "xQ7qGAmSgD7rGmic9gSMsy7mLXgZ0q7x",
    "_f77": "b6375e0c-ac66-4495-a902-a2deeb5b19ba",
    "_a42": "e7ecb87f-d95b-444e-8a3c-754bac7ee3e0",
    "rckk": "xQ7qGAmSgD7rGmic9gSMsy7mLXgZ0q7x",
    "ru1k": "b6375e0c-ac66-4495-a902-a2deeb5b19ba",
    "ru2k": "e7ecb87f-d95b-444e-8a3c-754bac7ee3e0",
    "njrpl": "EEpYInqGrKpqm9rQNOMBmmo7l1wo4ed3",
    "api_uid": "rBUUYGaNM200FzKzwAhrAg==",
    "_nano_fp": "XpmxXpdjX0EJlpTjl9_alWVAVP6vEvkEofBo1wa1"
}
_con = subprocess.check_output(['node', 'main.js'])
url = "https://careers.pinduoduo.com/api/recruit/position/list"
content = input("输入--》")

data = {
    "job": "",
    "page": 1,
    "pageSize": 10,
    "name": "",
    "workLocationList": [],
    "anti_content": content

}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)
print(response.text)
print(response)