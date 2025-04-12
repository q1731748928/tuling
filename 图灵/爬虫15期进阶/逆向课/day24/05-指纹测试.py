import requests
from curl_cffi import requests

headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "^sec-ch-ua": "^\\^Not)A;Brand^^;v=^\\^99^^, ^\\^Google",
    "sec-ch-ua-mobile": "?0",
    "^sec-ch-ua-platform": "^\\^Windows^^^",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
cookies = {
    "_session_id": "fc27defbe44ddfdd8399b4a7859f0be0",
    "cf_clearance": "jlJceEIl6ydgm7BhIduX5.ikGB_cQi6RPei8nch4hQg-1723645387-1.0.1.1-n.1pAadOK5tHqW.G_r840w3bcDagKtLzD6OWCypOAxk631IgAETDNaxKrGA_ILyUUdDAhFzGehdWmndZreO8vg"
}
url = "https://ascii2d.net/"
response = requests.get(url, headers=headers, cookies=cookies)

print(response.text)
print(response)