# -*- coding: utf-8 -*-
import requests

url = 'https://www.google.com/'
try:
    response = requests.get(url, timeout = 3)
    print(response)
except Exception as e:
    print("请求超时", e)