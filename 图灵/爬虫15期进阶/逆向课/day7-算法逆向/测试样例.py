import requests
import hashlib
import execjs

with open('123.js', encoding='utf-8') as f1:
    j_code = f1.read()
ctll = execjs.compile(j_code)


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

params = {
    "type": "2",
    "page": "1",
}

sign = ctll.call('getSign',params['page'],params['type'])
print(sign)

response = requests.get(url, headers=headers, cookies=cookies, params=sign)

print(response.text)
print(response)


"""
ts: 1719790751270
rs: q48wKoCjN7c7DKqv
signature: f227d045c8c687436b2091183f0f1bd78a5b371019783da890f17fc6306eba26
type: 1
page_size: 10
page: 1
"""