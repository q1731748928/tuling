import json
import re

import requests
import execjs
from loguru import logger
from curl_cffi import requests

requests = requests.Session()

url = "https://www.dhl.com/cn-zh/home/tracking/tracking-ecommerce.html?submit=1&tracking-id=1232343"

headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "content-type": "text/plain;charset=UTF-8",
    "origin": "https://www.dhl.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.dhl.com/cn-zh/home/tracking/tracking-ecommerce.html?submit=1&tracking-id=1232343",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Microsoft Edge\";v=\"127\", \"Chromium\";v=\"127\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}

response = requests.get(url, headers=headers)
bm_sz = response.cookies.get('bm_sz')

js_url = 'https://www.dhl.com' + \
         re.findall('<script type="text/javascript"  src="(.*?)">', response.text)[0]
print(js_url)
logger.info(f'请求首页提取到js_url: {js_url}')

response = requests.get(js_url, headers=headers)
_abck = response.cookies.get('_abck')
logger.info(f'第一次请求js')

with open('04-阿卡迈代码.js', encoding='utf-8') as f:
    js_code = f.read()
sensor_data = execjs.compile(js_code).call('get_cookie', _abck , bm_sz)

data = {
    "sensor_data": sensor_data
}
data = json.dumps(data, separators=(',', ':'))
requests.post(js_url, headers=headers, data=data)

# print(requests.cookies.get('_abck'))
logger.info(f'第二次请求js, 获取到_abck: {requests.cookies.get("_abck")}')

# requests.cookies.set('_abck', _abck)
#
url = "https://www.dhl.com/utapi"
params = {
    "trackingNumber": "1232343",
    "language": "zh",
    "requesterCountryCode": "CN",
    "source": "tt"
}

response = requests.get(url, headers=headers, params=params)

print(response.text)
print(response)