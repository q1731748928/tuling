import requests

cookies = {
    'sensorsdata2015jssdkcross': '%7B%22%24device_id%22%3A%2219023a9bc0e18-0f008921cfca63-1a525637-1930176-19023a9bc0f18c1%22%7D',
    'sessionid': '4n90k7wpxndtjwjj2kxqk82yhxe5imbx',
    'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183': '1744635116,1744638635,1744680382,1744708767',
    'HMACCOUNT': '11F3EEC15F332D20',
    'Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183': '1744712603',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://stu.tulingpyton.cn/problem-detail/2/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': 'sensorsdata2015jssdkcross=%7B%22%24device_id%22%3A%2219023a9bc0e18-0f008921cfca63-1a525637-1930176-19023a9bc0f18c1%22%7D; sessionid=4n90k7wpxndtjwjj2kxqk82yhxe5imbx; Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1744635116,1744638635,1744680382,1744708767; HMACCOUNT=11F3EEC15F332D20; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1744712603',
}
total = 0
for i in range(1, 21):
    params = {
        'page': str(i),
    }

    response = requests.get('https://stu.tulingpyton.cn/api/problem-detail/2/data/', params=params, cookies=cookies, headers=headers)
    print(response.text)
    current_array = response.json()['current_array']
    total += sum(current_array)

print(total)