import requests

headers = {
    'Host': '221.181.98.242',
    'Accept': '*/*',
    'User-Agent': 'QQ%E9%9F%B3%E4%B9%90/73238 CFNetwork/1494.0.7 Darwin/23.4.0',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Referer': 'http://y.qq.com',
}

params = {
    'key': '邓紫棋',
    'utf8': '1',
    'is_xml': '0',
}

response = requests.get('https://221.181.98.242/splcloud/fcgi-bin/smartbox_new.fcg?key=%E9%82%93%E7%B4%AB%E6%A3%8B&utf8=1&is_xml=0', params=params, headers=headers)