import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
url = "https://adworld.xctf.org.cn/api/event/release_event/list/"
params = {
    "page": "2",
    "page_size": "20",
    "search": "",
    "isSearch": "false",
    "event_status": "",
    "event_type": ""
}

def fetch_data():
    response = requests.get(url, headers=headers, params=params)
    response.raise_for_status()
    return response.json()['data']['rows']

def process_row(row):
    release_name = row['release_name']
    release_sponsor = row['release_sponsor']
    order_start_time = row['order_start_time']
    order_end_time = row['order_end_time']
    order_time = order_start_time + "至" + order_end_time
    sign_up_start_time = row['sign_up_start_time']
    sign_up_end_time = row['sign_up_end_time']
    sign_time = sign_up_start_time + "至" + sign_up_end_time
    print(f'主办方:{release_name}, 比赛时间:{order_time}, 报名时间:{sign_time}, 主办方:{release_sponsor}')

def main():
    rows = fetch_data()
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = [executor.submit(process_row, row) for row in rows]
        for future in as_completed(futures):
            future.result()


if __name__ == "__main__":
    main()
