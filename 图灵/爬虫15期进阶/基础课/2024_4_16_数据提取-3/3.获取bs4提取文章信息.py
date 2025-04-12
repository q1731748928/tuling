import requests
from bs4 import BeautifulSoup

headers = {
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "^Cookie": "ABTEST=0^|1713322856^|v1; SNUID=ABDDEDEB969383D486A12C3696DE99BE; SUID=3D48787D9330A00A00000000661F3B68; IPLOC=CN3301; SUID=3D48787D7CA5A20B00000000661F3B68; SUV=00912F037D78483D661F3B69D4BA4824; ariaDefaultTheme=undefined^",
    "Pragma": "no-cache",
    "Sec-Fetch-Dest": "image",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "^sec-ch-ua": "^\\^Chromium^^;v=^\\^124^^, ^\\^Google",
    "sec-ch-ua-mobile": "?0",
    "^sec-ch-ua-platform": "^\\^Windows^^^",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "^cookie": "SNUID=ABDDEDEB969383D486A12C3696DE99BE; ABTEST=4^|1713322856^|v17; IPLOC=CN3301; SUID=3D48787D7CA5A20B00000000661F3B68; SUV=00912F037D78483D661F3B69D4BA4824; ariaDefaultTheme=undefined^",
    "pragma": "no-cache",
    "priority": "u=4, i",
    "referer": "https://weixin.sogou.com/",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "cross-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Referer": "",
    "X-Requested-With": "XMLHttpRequest",
    "origin": "https://weixin.sogou.com",
    "content-length": "0"
}
cookies = {
    "SNUID": "ABDDEDEB969383D486A12C3696DE99BE",
    "IPLOC": "CN3301",
    "SUID": "3D48787D7CA5A20B00000000661F3B68",
    "SUV": "00912F037D78483D661F3B69D4BA4824",
    "ariaDefaultTheme": "undefined"
}
url = "https://weixin.sogou.com/weixin"
params = {
    "_sug_type_": "1",
    "type": "2",
    "query": "python"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

soup = BeautifulSoup(response.text, 'lxml')

h3_list = soup.select('ul[class="news-list"]')[0].select('h3')

for h3 in h3_list:
    print(h3.get_text())
    print(h3.select('a')[0].get('href'))


