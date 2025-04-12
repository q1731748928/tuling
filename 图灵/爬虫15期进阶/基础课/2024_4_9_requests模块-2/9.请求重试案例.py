# -*- coding: utf-8 -*-
import time
import requests
from retrying import retry

num = 1

@retry(stop_max_attempt_number=3)
def parse_html(url):
    global num
    print(f'第{num}次尝试...')
    num += 1
    headers = {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
    }

    response = requests.get(url, headers = headers, timeout = 3)

    # 断言
    assert  response.status_code == 200
    return response

def main():
    try:
        url = 'https://www.google.com/'
        response = parse_html(url)
        print(response)
    except Exception as e:
        print('请求失败：', e)

if __name__ == '__main__':
    main()