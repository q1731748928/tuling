import re

import execjs
import requests

# cateId: 2001324 葡萄
# cateId: 2001243 西瓜
# cateId: 2001107 牛副产品
list = ['2001324', '2001243', '2001107']
for li in list:
    with open("hnw.js", encoding="utf-8") as f:
        js_code = f.read()
    ctll = execjs.compile(js_code)
    result = ctll.call("get_header")
    headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://m.cnhnb.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://m.cnhnb.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
        'x-b3-traceid': result.get('X-B3-TRACEID'),
        'x-client-appid': '5',
        'x-client-id': '5600cce-3fb3-4902-9300-12939750a',
        'x-client-nonce': result.get('X-CLIENT-NONCE'),
        'x-client-page': '/hangqing/',
        'x-client-sid': result.get('X-CLIENT-SID'),
        'x-client-sign': result.get('X-CLIENT-SIGN'),
        'x-client-time': str(result.get('X-CLIENT-TIME')),
        'x-hn-job': 'If you see these message, I hope you dont hack us, I hope you can join us! Please visit https://www.cnhnkj.com/job.html',
    }
    data = {
        'type': '0',
        'cateId': li,
        'pageNum': '1',
        'pageSize': '10',
    }

    js = requests.post(
        'https://appapi.cnhnb.com/market-platform/api/market/marketquote/v2/getOfficerQuotes',
        headers=headers,
        data=data,
    ).json()
    data = js['data']
    list = data['list']
    for li in list:
        userName = li.get('userName')
        msgAttrs = li.get('msgAttrs')
        match = re.search(r'"marketOrArea":"(.*?)"', msgAttrs)
        market_or_area = ""
        if match:
            market_or_area = match.group(1)
        else:
            print("无")
        breedName = li.get('breedName')
        print(userName, market_or_area, breedName)
