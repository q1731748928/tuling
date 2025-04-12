import requests
import json

def get_pdd():
    _data = {
            'group': 'test',
            "action": "pdd",
        }
    res = requests.post("http://127.0.0.1:5612/business-demo/invoke", data=_data)
    sign = res.json().get('data')
    return sign

anti = get_pdd()
print(anti)

headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://careers.pinduoduo.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://careers.pinduoduo.com/jobs",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
}
cookies = {
    "_nano_fp": "XpmxXpC8npdylpTano_asMByTA459j8bxhh6lTFe",
    "_bee": "wN1SOBjmx2ZofPmDq9AH4fdRVtn1vg2t",
    "_f77": "0ad55502-08ad-459a-bb57-e6d9866a37c3",
    "_a42": "1fc8e537-87bc-4bb8-ac92-3de24a8e957c",
    "rckk": "wN1SOBjmx2ZofPmDq9AH4fdRVtn1vg2t",
    "ru1k": "0ad55502-08ad-459a-bb57-e6d9866a37c3",
    "ru2k": "1fc8e537-87bc-4bb8-ac92-3de24a8e957c"
}
url = "https://careers.pinduoduo.com/api/recruit/position/list"
data = {
    "job": "",
    "page": 2,
    "pageSize": 10,
    "name": "",
    "workLocationList": [],
    "anti_content": anti
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)
