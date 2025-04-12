import hashlib
import time

import requests

def sha1_test2(arg):
    sha1 = hashlib.sha256()
    sha1.update(arg.encode('utf-8'))
    return sha1.hexdigest()


headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://tousu.sina.com.cn/",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "UOR": ",tousu.sina.com.cn,",
    "SINAGLOBAL": "117.147.9.165_1719724809.791840",
    "ULV": "1719789806039:3:1:3::1719725409075",
    "Apache": "117.147.9.165_1719789806.274460"
}
url = "https://tousu.sina.com.cn/api/index/feed"
_ts = str(int(time.time() * 1000))

params = [
    "$d6eb7ff91ee257475%",
    "1",
    "1",
    "10",
    _ts,
    "hOPUNHqaz2dxUISk"
]
env_par = "".join(params)

sign =sha1_test2(env_par)
print(sign)
params = {
    "ts": _ts,
    "rs": "hOPUNHqaz2dxUISk", # 随机 写死
    "signature": sign,
    "type": "1",
    "page_size": "10",
    "page": "1"
}

response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)





