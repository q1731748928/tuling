# -*- coding: utf-8 -*-
import requests

headers = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
}

response = requests.post("https://fanyi.baidu.com/sug", headers=headers, json={"kw": "python"}, timeout=3)
print("请求头是：", response.request.headers)
print("请求体是：", response.request.body)