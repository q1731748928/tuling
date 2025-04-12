import requests
import json

def get_pdd():
    _data = {
            'group': 'test',
            "action": "pdd_pifa",
        }
    res = requests.post("http://127.0.0.1:5612/business-demo/invoke", data=_data)
    sign = res.json().get('data')
    return sign

anti = get_pdd()
print(anti)


headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "anti-content": "0arWtxUkB_VePa3lk6tx1tZB3QTPbTvT4LHX3YQscPktpvsxzmLRV7kDe-L2k-3GDE3wGpEStRHYL2RqoW_aa6W2VbTQvnU9jnUuJlYvJlUpyc09qlAwJnUwacYpqlYPal0ab9BZb51qvcggqOYGaOkGF1iNLOquJPpivJj02wyC2QdnflGNKOYH2vNNy1puxp99VHRawK_4KeBNeDMNWDD4Kbs2dM1bD-tJ1F-RImB3SHBkVKDJZbZoUbL4UMk8DFGrISt8CMD4Obk_CM3ICIB_MkL254Kgtqe--5v4AEpK2s_FsO_vW2OFzueFZ__BtBv3xqC6BMwLhJhMtIks85_rWjkFMY1L3HvwmdG2_tsdIBZMWLtBWELIwm3BW3ZzDB_TKr1cHeHQmuxdSU2n6Tp2eemU9ReM90Xe8io8nOOWaf",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://pifa.pinduoduo.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://pifa.pinduoduo.com/",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
}
cookies = {
    "_bee": "wN1SOBjmx2ZofPmDq9AH4fdRVtn1vg2t",
    "_f77": "0ad55502-08ad-459a-bb57-e6d9866a37c3",
    "_a42": "1fc8e537-87bc-4bb8-ac92-3de24a8e957c",
    "rckk": "wN1SOBjmx2ZofPmDq9AH4fdRVtn1vg2t",
    "ru1k": "0ad55502-08ad-459a-bb57-e6d9866a37c3",
    "ru2k": "1fc8e537-87bc-4bb8-ac92-3de24a8e957c",
    "_nano_fp": "XpmxXpC8nqTbXqXbnC_cY0eKGAeinQ8kKItc9MEb",
    "VISITOR_PASS_ID": "dMVBhrUCq0TqPOY__Z3wbK2DFebiSz6vIeXIP1QW8CgQc1aQtZb41e2s9EmImc23bT8Mj-cUClYDOv8AE9b949imclhC7Bp9jenED4vqbb4_fbfa6cd8ed",
    "webp": "true",
    "api_uid": "rBUUiGahw/e0ohGVzUYLAg=="
}
url = "https://pifa.pinduoduo.com/pifa/recommend/queryRecommendGoods"
data = {
    "page": 1,
    "pageSize": 20,
    "queryApi": ""
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)