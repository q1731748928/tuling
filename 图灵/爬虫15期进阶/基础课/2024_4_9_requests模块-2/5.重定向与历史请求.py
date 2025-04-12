# -*- coding: utf-8 -*-
import requests

headers = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
}
url = 'http://www.baidu.com'
# allow_redirects：可以设置禁止跳转
response = requests.get(url, headers=headers,allow_redirects=False)
print(response.url)


url = 'https://www.360buy.com/'
response = requests.get(url, headers)
print(response.history) # 返回的是一个列表，列表元素是响应对象

for res in response.history:
    print(res.status_code, res.url, res.headers)