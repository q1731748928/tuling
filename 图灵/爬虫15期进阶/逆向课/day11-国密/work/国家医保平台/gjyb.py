import hashlib

import requests

cookies = {
    'yb_header_active': '-1',
    'amap_local': '330100',
    'https_waf_cookie': '351d2bdf-3eee-42ec2c629900e4d1eb3f3667db1b4151a2e8',
}

headers = {
    'Accept': 'application/json',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    # 'Cookie': 'yb_header_active=-1; amap_local=330100; https_waf_cookie=351d2bdf-3eee-42ec2c629900e4d1eb3f3667db1b4151a2e8',
    'Origin': 'https://fuwu.nhsa.gov.cn',
    'Pragma': 'no-cache',
    'Referer': 'https://fuwu.nhsa.gov.cn/nationalHallSt/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'X-Tingyun': 'c=B|4Nl_NnGbjwY;x=946a686b0ef8461b',
    'channel': 'web',
    'contentType': 'application/x-www-form-urlencoded',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'x-tif-nonce': 'C88NzL5k',
    'x-tif-paasid': 'undefined',
    'x-tif-signature': '9a0a1bf2bf098ad4a04fb143ec8b03ff6243402a5f6cc8959748a821f16bcf9b',
    'x-tif-timestamp': '1720692844',
}

json_data = {
    'data': {
        'data': {
            'encData': '3DFBCA4667B978F639BB23B95DCE4CC7D3F0E93DD67D270624F4FFE82490852ECCD20943B4DAE96380B41164D761DE9742C84A985FE3BABC31CB352556BB87C9C1495DB24A29AB6BC3A85AB7FCA00F33C56677481A67C67F739EE2C7D589054DC373615B5DDB33C24C5B31E61CB7643E8CCAA19EAE1FD36157CF9869E3A3753ED0B4E7BB97C60BF8E5275CAFCAFD1E13E384C10195003FD638576645B5EF45EA',
        },
        'appCode': 'T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ',
        'version': '1.0.0',
        'encType': 'SM4',
        'signType': 'SM2',
        'timestamp': 1720692844,
        'signData': 'koi8GA2dFWFNWWBugNg+Gn3QkZZY1+vdqPlbpmkv3OfvSuX2kLghD+843tT8t5/2T/aX+gDg5uo/YweXNQIMGQ==',
    },
}

response = requests.post(
    'https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryFixedHospital',
    cookies=cookies,
    headers=headers,
    json=json_data,
).text
print(response)