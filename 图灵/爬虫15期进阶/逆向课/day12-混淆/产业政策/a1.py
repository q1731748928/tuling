
import requests,execjs

url = 'http://www.spolicy.com/info_api/policyType/showPolicyType'

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "19",
    "Content-Type": "application/octet-stream",
    "Cookie": "JSESSIONID=360A2DC4044A11CEC6DD9CABE05870A7",
    "Host": "www.spolicy.com",
    "Origin": "http://www.spolicy.com",
    "Pragma": "no-cache",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
}

data = {
    "policyType": "6",
    "province": "",
    "city": "",
    "downtown": "",
    "garden": "",
    "centralId": "",
    "sort": 0,
    "pageNum": 1,
    "pageSize": 8
}
params = execjs.compile(open('a1.js', encoding='utf-8').read()).call('get_data', data)
print(params)

res = requests.post(url,headers=headers,data=bytes(params.get('data')))
print(res.text)

