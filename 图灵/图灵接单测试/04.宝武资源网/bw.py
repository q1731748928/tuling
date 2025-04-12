import execjs
import requests
import json

with open("env.js", encoding="utf-8") as f:
    js_code = f.read()
ctll = execjs.compile(js_code)
cookies = ctll.call("get_ck")
cookie_str = str(cookies).split(';')
cookies = dict()
for cookie in cookie_str:
    cok = cookie.split('=')
    key = cok[0]
    value = cok[1]
    cookies[key] = value

print(cookies)

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json;charset=UTF-8",
    "Origin": "https://qiye.obei.com.cn",
    "Pragma": "no-cache",
    "Referer": "https://qiye.obei.com.cn/web-zone/bwzy/procurement.html",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "x-csrf-token": "a7CLk0baZbNw6qpNqn6iLmSW"
}
# cookies = {
#     "HKIIUU9O618PPTHKM": "232b5596057e20ad86729e5f6f5bfb6ac177473",
#     "csrfToken": "a7CLk0baZbNw6qpNqn6iLmSW",
#     "HKIIUU9O618PPTHPM": "MTcyMzc7wNTYxNzE2SkMxMjFzQUg1ODB5Q3AxNTBzOEF4elJoYjUxMT5g3RnFlTFkwMlM5OWYyZG0zQzZHejEyOEYE4YUoyM001MWlNWOUY3ZmUz8MGd6HJS2jIxRkEz9Mz4dMWTU2ZkhvUjFUMDI3djU3QzAxNTBZVEZpdkFhOGR1NjgwMjF2N3g3MXE1UjZmN0UwMDNyUjU3bkN5dTgxakMzZ2V1aTM1MUpZdnlMQTc4c0xvQjhOM3QzVzhqOTYwM0lZSlQxMTFnenoyRjExMUExOHdFQTh3b2g1ODE2QjExMWNndmdJakRBMTExVzlnbkIxWU01QXBBN0VyZXlKdGIzVnpaWGdpT2lJeE1EQXdNQ0lzSW0xdmRYTmxlU0k2SWpFd01EQXdJaXdpYzJOeVpXVnVkeUk2SWpFM01UTWlMQ0p6WTNKbFpXNW9Jam9pTmpNMElpd2libTlvWldGa1pYSWlPaUp1YnlJc0ltNXZiV0ZzSWpvaWVXVnpJaXdpWVdwaGVDSTZJbmxsY3lJc0ltNXZkMTkxYm1seGRXVWlPaUl5TXpKaU5UVTVOakExTjJVeU1HRmtPRFkzTWpsbE5XWTJaalZpWm1JMllXTXhOemMwTnpNaUxDSnphR1ZpWldraU9pSlhaV0lpTENKdVlYWnBaMkYwYjNJaU9pSWlMQ0oxZFdsa1gyWnBjWFZ5WlNJNkltVmpabVJqWWpGaU5UQTVZVFJoT1RRNFpqWTJZbVE0WXpCa05HUmpObU5pSW4wPQ@@"
# }
url = "https://qiye.obei.com.cn/web-zone/api/sys/zone/getPurchaseList"
data = {
    "code": "bwzy",
    "noticeType": "1",
    "pageNum": 2,
    "pageSize": 10,
    "pageFlag": "addSelect",
    "sidx": "issueDate",
    "sord": "desc"
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)