import requests


headers = {
    "5c34d073e8da2231b198": "d3e544f716d6785f9ecf18a85b462ca8f996e91ae0df0dda2f1b51c6943f67b2d678ac9eb7e63d5ef0272f8cb3f08b5609fe98f1b205571725b6897994fdff7e",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.qcc.com/firm/9cce0780ab7644008b73bc2120479d31.html",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    # "x-pid": "f81011c5b8bc8fafdda35dfc5c1d00a2",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "qcc_did": "cc723e8d-8eeb-455a-acd2-21f8bdee4322",
    "UM_distinctid": "1902fb8ba8b38d-0cb088f95c56f7-1a525637-1d73c0-1902fb8ba8cc4b",
    "acw_tc": "707c9fd317197926738118374e36c3071f907dacc864592089d716ae46c4e1",
    "QCCSESSID": "139cab895141690c7d2e136fbd",
    "tfstk": "fhFqDxqIRfq5vMei40GZYj6UTrcxdXICI5isSP4ilmmDGItgUPZTGAjxG5rzYoushjvmbcrISnxistHwq2uHsccMsA-oSlNjSxDgr40nu5OmnPYZSuZubAQxfcmafP2fP61QkrhtsfSCO6igDsmU0qDms0bi52zTGilzkrh9yqr3JlUvQ1THh5cgjbDo5Vciommmqaus8IcimAxkE2mojfcgjbDol20MiImiEUc92YkFa2Dc-AC8iwByrxm3om4bl7AmnKUq4CAgafMqxhoysCVruzIFZPRcT02bISGuigxsZye7m4lF_FuzLzcmulCpMj43rRD4_OTKX8zudYyJlZ3zgyPZ8YBMfcMUZSGYUMRIx8Ug_Y4AYp37IyNbQosJsmwUrukQN3OIZSr4iYlh4jKtrOV86--MQx0-zD_Pr7A7WwFtCzLMBdHuf4oCkrp9BxDqzD_PzdptHB0rAZUA.",
    "CNZZDATA1254842228": "1773149755-1718787554-https%253A%252F%252Fwww.google.com%252F%7C1719792771"
}
url = "https://www.qcc.com/api/datalist/holdcolist"
params = {
    "isNewAgg": "true",
    "keyNo": "9cce0780ab7644008b73bc2120479d31",
    "pageIndex": "2"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)