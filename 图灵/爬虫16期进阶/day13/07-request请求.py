
import requests
url = 'https://www.handebook.com/api/web/document/list'

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    # "Content-Type": "application/json",
    "Origin": "https://kaoyan.docin.com",
    "Pragma": "no-cache",
    "Referer": "https://kaoyan.docin.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "X-Application": "Pdfreader.Web",
    "X-Nonce": "f7cd4f0c-5a9d-f436-e13e-162bbaab2242",
    "X-Sign": "BC8A1AD7BFA7FA505C6D2FE1BA0B1338",
    "X-Timestamp": "1721306502",   # 时间戳    1970年01月01日00时00分00秒  到现在  秒为为单位  过了多少秒
    "X-Token": "null",
}

data = '{"SearchKeyword":"复试仿真模拟","UniversityCode":"","MajorCode":"","PageIndex":5,"PageSize":30}'.encode()
response = requests.post(url, headers=headers, data=data)
print(response.json())

