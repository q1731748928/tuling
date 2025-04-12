import requests


headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.jizhy.com/44/rank/school",
    "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
}
cookies = {
    "PI": "44",
    "Hm_lvt_2610e5c202b60841b30a62960fbef0ad": "1718436693,1718437723,1718437906,1718850614",
    "Hm_lpvt_2610e5c202b60841b30a62960fbef0ad": "1718850694"
}
url = "https://www.jizhy.com/open/sch/rank-list"
params = {
    "page": "2",
    "page_len": "20",
    "diploma_id": "7",
    "wenli": "0",
    "app_id": "98357f659cf8fb6001cff80f7c6b85f2",
    "ts": "1718850695750",
    "platform": "desktop",
    "v": "210",
    "sign": "36ADDB810D3B5A193BB0A2D8CF229141" # 需要携带 签名
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)



'''
发包测试
抓2个包对比 观察可变和不可变
'''