# -*- coding: utf-8 -*-

import requests


headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-GB,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.jizhy.com/44/rank/school",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
}
cookies = {
    "PI": "44",
    "Hm_lvt_2610e5c202b60841b30a62960fbef0ad": "1718608566,1718687142,1718801746,1718974318",
    "Hm_lpvt_2610e5c202b60841b30a62960fbef0ad": "1718974318"
}
url = "https://www.jizhy.com/open/sch/rank-list"
params = {
    "page": "2",
    "page_len": "20",
    "diploma_id": "7",
    "wenli": "0",
    "app_id": "98357f659cf8fb6001cff80f7c6b85f2",
    "ts": "1718974324864",
    "platform": "desktop",
    "v": "210",
    # "sign": "19D926AE4A5D318448A8B2804B08AF8C"  // 破解

}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)