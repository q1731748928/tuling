import hashlib
import time

import requests
def md5_test2(arg):
    md5 = hashlib.md5()
    md5.update(arg.encode('utf-8'))
    print(md5.hexdigest())
    return md5.hexdigest()

headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    "origin": "https://www.mytokencap.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.mytokencap.com/",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
}
url = "https://api.mytokenapi.com/ticker/currencyranklist"
_ts = str(int(time.time() * 1000)) # 模拟生成时间戳
print(_ts)
code = md5_test2(_ts + "9527" + _ts[0:6])
params = {
    "pages": "2,1",
    "sizes": "100,100",
    "subject": "market_cap",
    "language": "en_US",
    "legal_currency": "USD",
    "timestamp": _ts, # you
    "code": code, # you
    "platform": "web_pc",
    "v": "0.1.0",
    "international": "1"
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
print(response)