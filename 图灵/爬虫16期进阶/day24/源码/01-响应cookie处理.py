

import requests
import re

requests = requests.session()

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}
url = "http://www.zjmazhang.gov.cn/hdjlpt/published"
params = {
    "via": "pc"
}
response = requests.get(url, headers=headers, params=params, verify=False)
CSRF = re.findall("var _CSRF = '(.*?)';", response.text)[0]
# TOKEN = response.cookies['XSRF-TOKEN']
# session = response.cookies['szxx_session']


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "http://www.zjmazhang.gov.cn",
    "Pragma": "no-cache",
    "Referer": "http://www.zjmazhang.gov.cn/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "X-CSRF-TOKEN": CSRF
}


url = "http://www.zjmazhang.gov.cn/hdjlpt/letter/pubList"
data = {
    "offset": "0",
    "limit": "20",
    "site_id": "759010",
    "time_from": "1712592000",
    "time_to": "1744041599"
}
response = requests.post(url, headers=headers, data=data, verify=False)

print(response.text)
print(response)

# print(response.text)
# print(response)
