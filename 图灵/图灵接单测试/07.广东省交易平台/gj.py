import time

import requests
import execjs

for pn in range(1, 2):
    o = {
        "data": {
            "type": "trading-type",
            "openConvert": False,
            "keyword": "",
            "siteCode": "44",
            "secondType": "A",
            "tradingProcess": "",
            "thirdType": "[]",
            "projectType": "",
            "publishStartTime": "",
            "publishEndTime": "",
            "pageNo": pn,
            "pageSize": 10
        }
    }
    with open('gj.js', encoding='utf-8') as f1:
        j_code = f1.read()
    ctll = execjs.compile(j_code)
    result = ctll.call("get_data", o)
    cookies = {
        '_horizon_uid': '490801df-1d0d-43be-9b44-56f3d876fd46',
        '_horizon_sid': 'ab7645c6-3f8c-41f3-8e92-d4d15c77a4c1',
    }

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        # 'Cookie': '_horizon_uid=490801df-1d0d-43be-9b44-56f3d876fd46; _horizon_sid=ab7645c6-3f8c-41f3-8e92-d4d15c77a4c1',
        'Origin': 'https://ygp.gdzwfw.gov.cn',
        'Pragma': 'no-cache',
        'Referer': 'https://ygp.gdzwfw.gov.cn/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'X-Dgi-Req-App': str(result.get('X-Dgi-Req-App')),
        'X-Dgi-Req-Nonce': str(result.get('X-Dgi-Req-Nonce')),
        'X-Dgi-Req-Signature': str(result.get('X-Dgi-Req-Signature')),
        'X-Dgi-Req-Timestamp': str(result.get('X-Dgi-Req-Timestamp')),
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
    }

    response = requests.post('https://ygp.gdzwfw.gov.cn/ggzy-portal/search/v2/items', cookies=cookies, headers=headers,
                             json=o.get('data')).text
    time.sleep(5)
    print("第" + str(pn) + "页的数据")
    print(response)
