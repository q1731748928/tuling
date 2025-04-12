import requests
import re


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "http://www.zjmazhang.gov.cn",
    "Pragma": "no-cache",
    "Referer": "http://www.zjmazhang.gov.cn/",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    "X-CSRF-TOKEN": "pBM2Xj9tLnHRwoiGgkIuHylP816Ll8b6E0WLoojX" # 写死
}

def get_ck():
    url = 'http://www.zjmazhang.gov.cn/hdjlpt/published?via=pc'
    res = requests.get(url, headers=headers)
    print(res.cookies)
    szxx_session = res.cookies.get('szxx_session')
    tk = re.findall("var _CSRF = '(.*?)';", res.text)[0]
    return szxx_session, tk

def get_data():
    ck, tk = get_ck()
    cookies = {
        "szxx_session": ck
    }
    headers["X-CSRF-TOKEN"] = tk
    url = "http://www.zjmazhang.gov.cn/hdjlpt/letter/pubList"
    data = {
        "offset": "0",
        "limit": "20",
        "site_id": "759010",
        "time_from": "1691424000",
        "time_to": "1722959999"
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data, verify=False)

    print(response.text)
    print(response)

if __name__ == '__main__':
    get_data()