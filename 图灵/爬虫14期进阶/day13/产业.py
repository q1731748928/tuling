import requests
import execjs



headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/octet-stream",
    "Origin": "https://www.spolicy.com",
    "Pragma": "no-cache",
    "Referer": "https://www.spolicy.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "Hm_lvt_6146f11e5afab71309b3accbfc4a932e": "1720660170,1721022555",
    "HMACCOUNT": "948C4802AACF8062",
    "JSESSIONID": "3C0511980C96F4791D3F3EC970AF8617",
    "Hm_lpvt_6146f11e5afab71309b3accbfc4a932e": "1721023476"
}
url = "https://www.spolicy.com/info_api/policyType/showPolicyType"

m = {
    "policyType": "6",
    "province": "",
    "city": "",
    "downtown": "",
    "garden": "",
    "centralId": "",
    "sort": 0,
    "pageNum": 1,
    "pageSize": 7
}

data = execjs.compile(open('demo.js', encoding='utf-8').read()).call('get_data', m)
print(data)
response = requests.post(url, headers=headers, cookies=cookies, data=bytes(data.get('data')))

print(response.text)
print(response)