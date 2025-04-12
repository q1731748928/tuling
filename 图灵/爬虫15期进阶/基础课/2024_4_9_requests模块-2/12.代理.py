# -*- coding: utf-8 -*-
import requests

# http代理
ip = "127.0.0.1"
port = 1087

proxies = {
    "http": "http://%s:%d" % (ip, port),
    "https": "http://%s:%d" % (ip, port)
}

print(proxies)

# 请求头
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36"
}

url = "http://httpbin.org/ip"

response = requests.get(url=url, headers=headers, proxies=proxies, timeout=10)
print(response.text)