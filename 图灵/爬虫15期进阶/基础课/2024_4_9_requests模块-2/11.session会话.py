# -*- coding: utf-8 -*-
"""
session的本质其实是和网站保持一个长链接
"""
import requests

headers = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
}

session = requests.Session()

url_1 = 'https://www.baidu.com'
response = session.get(url_1,headers = headers)
print("第一次请求的请求头数据为：", response.request.headers)
print("第一次请求成功的响应头数据为：", response.headers)

response.request.headers['Cookie'] = requests.utils.dict_from_cookiejar(response.cookies)
print(response.request.headers)
"""
使用session第二次请求不需要重新带入新的请求头
会将之前的请求头数据自动载入
"""
url_2 = 'https://www.baidu.com'
response = session.get(url_2)
print("第二次请求的请求头为：", response.request.headers)