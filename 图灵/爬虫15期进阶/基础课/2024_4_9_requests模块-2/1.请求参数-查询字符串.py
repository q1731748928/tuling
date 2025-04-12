# -*- coding: utf-8 -*-
import requests
# url = 'https://www.baidu.com/s?wd=%E5%93%88%E5%A3%AB%E5%A5%87'
# response = requests.get(url)
# print(response.content.decode())
headers = {
'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
}

url = 'https://www.baidu.com/s'

kw = {
    'wd': '哈士奇'
}
response = requests.get(url, params=kw, headers = headers)
print(response.content.decode())