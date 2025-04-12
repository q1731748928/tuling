import execjs
import requests


headers = {
    "Accept": "text/html, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://q.10jqka.com.cn/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "hexin-v": "A81UY7W2lwsrXjMnq1eSeSg-2uJCqgCmi99lQw9TC7vT9OMc1_oRTBsudRec",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}

with open('1-同花顺.js', encoding='utf-8') as f1:
    j_code = f1.read()
ctll = execjs.compile(j_code)
result = ctll.call("getCK")

cookies = {
    "v": result
}
url = "https://q.10jqka.com.cn/index/index/board/all/field/zdf/order/desc/page/2/ajax/1/"
response = requests.get(url, headers=headers, cookies=cookies)

print(response.text)
print(response)