import requests
import re
import execjs

js = execjs.compile(open('05-ai代码.js', encoding='utf-8').read())

requests = requests.session()
headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}
url = "https://www.cnvd.org.cn/flaw/typelist"
params = {
    "typeId": "27"
}
response = requests.get(url, headers=headers, params=params)

cook = re.findall('document.cookie=(.*?);location', response.text)[0]
aa = execjs.eval(cook)
cookies = {
    '__jsl_clearance_s': aa.split('=')[1]
}
response = requests.get(url, headers=headers, params=params, cookies=cookies)
go_code = execjs.eval(re.findall(';go\((.*?)\)</', response.text)[0])
print(go_code)
aaa = js.call('go', go_code)
# print(aa)
cookies = {
    '__jsl_clearance_s': aaa.split('=')[1]
}
response = requests.get(url, headers=headers, params=params, cookies=cookies)
print(response.text)
