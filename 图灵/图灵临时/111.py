
import base64
import hashlib
import time
from random import randint
import requests
import redis
from loguru import logger
client = redis.Redis()
API_KEY = "a2c903cc-b31e-4547-9299-b6d07b7631ab"
def comb(t, e):
    n = f"{t}|{e}"
    return base64.b64encode(n.encode()).decode()
def encrypt_time(t):
    t += 1111111111111
    e = list(str(t))
    n = randint(0, 9)
    r = randint(0, 9)
    o = randint(0, 9)
    e.extend([str(n), str(r), str(o)])
    return ''.join(e)
def encrypt_api_key():
    e = list(API_KEY)
    n = e[:8]
    e = e[8:] + n
    return ''.join(e)
def get_api_key():
    t = int(time.time() * 1000)
    e = encrypt_api_key()
    t = encrypt_time(t)
    return comb(e, t)

def ma5_data(content):
    m = hashlib.md5()
    m.update(content.encode())
    return m.hexdigest()

headers = {
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "sec-ch-ua": "^\\^Chromium^^;v=^\\^21^^, ^\\^",
    "x-locale": "zh_CN",
    "x-apiKey": get_api_key(),
    "x-cdn": "https://static.oklink.com",
    "devId": "3d732cb3-3bcc-49d1-9392-36cffc0b62fb",
    "App-Type": "web",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
    "Accept": "application/json",
    "x-utc": "8",
    "x-zkdex-env": "0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://www.oklink.com/cn/btc/tx-list/page/2",
    "Accept-Language": "zh-CN,zh;q=0.9"
}
cookies = {
    "_okcoin_legal_currency": "CNY",
    "Hm_lvt_5244adb4ce18f1d626ffc94627dd9fd7": "1675429008",
    "aliyungf_tc": "6f31a704ed60c327b0bb0157e0cfd3afffc4b9b0dc66d4260a5cc2c499c081e4",
    "locale": "zh_CN",
    "browserVersionLevel": "v3.46c1db2adbed",
    "devId": "3d732cb3-3bcc-49d1-9392-36cffc0b62fb",
    "oklink.unaccept_cookie": "1",
    "_monitor_extras": "^{^\\^deviceId^^:^\\^UeXuqQ2ktTyIb8m-bZ1AdI^^,^\\^eventId^^:2,^\\^sequenceNumber^^:2^}",
    "amp_d77757": "x9khjIWrGGx5bVWxuLQtCW...1hcp7epiv.1hcp7epj0.1.0.1",
    "okg.currentMedia": "md"
}
url = "https://www.oklink.com/api/explorer/v1/btc/transactionsNoRestrict"
for i in range(1,501):
    params = {
        "t": "1697358782980",
        "offset": i,
        "txType": "",
        "limit": "20",
        "curType": ""
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    items = response.json()
    hits = items.get('data')['hits']
    for i in hits:
        datas = {}
        datas['hash'] = i.get('hash')
        datas['blockHeight'] = i.get('blockHeight')
        datas['index'] = i.get('index')
        hash_data = ma5_data(str(datas))
        tag = client.sadd('hejie', hash_data)  # 返回值 0 1
        if tag:
            # 表示数据可以继续爬  对数据进行入库   logger = print
            logger.info('可以入库{}'.format(datas['hash']))


