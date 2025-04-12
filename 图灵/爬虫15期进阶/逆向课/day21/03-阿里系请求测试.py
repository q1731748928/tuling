
import requests
import execjs
import re
with open("硬扣_alx.js", encoding="utf-8") as f1:
    js_code = f1.read()
ctll = execjs.compile(js_code)

url = 'https://xueqiu.com/today'

headers = {
    'user-agent':"12312312312"
}
res = requests.get(url, headers=headers)
# print(res.text)
arg1 = re.findall("var arg1='(.*?)';", res.text)[0]
ck = ctll.call('get_ck', arg1)

cookies = {
    'acw_sc__v2': ck
}

res = requests.get(url, headers=headers, cookies=cookies)
print(res.text)