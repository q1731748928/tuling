# -*- coding: utf-8 -*-
import requests

url = 'https://www.baidu.com'

headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36",
    "Cookie": 'name=aaa'
}


response = requests.get(url)
print(response.cookies) #  响应头中的set-cookie

print(dict(response.cookies))
print(requests.utils.dict_from_cookiejar(response.cookies))

print(response.request.headers.get('Cookie')) # 请求头