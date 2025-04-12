import json

import requests


def get_index():
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Cookie": "cngizm2ziytq3mwy=cFVualVzHwVzGlN3QVh/R117QgnRsqDQ6fGCuvnct6iP5fiHHQ==; fogq4n2exnzc0otg=AQgEN1BfWgRbUQdTDV8EX1tRXUwdF05AREFOTR5CTh4SHEt4BQ==",
        "Host": "adworld.xctf.org.cn",
        "Pragma": "no-cache",
        "sec-ch-ua": "\"Chromium\";v=\"21\", \" Not;A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
    }
    # 可以直接带明文请求
    data = {
            "event_status": "",
            "event_type": "",
            "isSearch": "false",
            "page": "1",
            "page_size": "20",
            "search": ""
        }
    res = requests.get(url="https://adworld.xctf.org.cn/api/event/release_event/list/",params=data, headers=headers)
    json_str = res.text
    json_data = json.loads(json_str)
    rows = json_data['data']['rows']
    for row in rows:
        # 标题
        release_name = row['release_name']
        release_sponsor = row['release_sponsor']
        competition_start_time = row['competition_start_time']
        print("标题:" + release_name + ",时间:" + competition_start_time + ",举办方:" + release_sponsor)

if __name__ == '__main__':
    get_index()
