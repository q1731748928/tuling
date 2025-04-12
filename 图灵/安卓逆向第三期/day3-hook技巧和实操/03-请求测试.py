# -*- coding: utf-8 -*-

import requests

url = "https://rmt-api.dachuan.org.cn/getList"


data = {
    "switch_suggest": "1",
    "data": "{\"operation_type\":0,\"channel_type\":4,\"channel_id\":4006,\"list_style\":1,\"page_size\":16}",
    "vno": "1.1.1",
    "sign": "98E057E5D5A5A0B9C0AA585634AB7218",
    "channel": "yingyongbao_1023",
    "client": "android",
    "teen_mode": "0",
    "app_vno": "1.2.0",
    "deviceid": "ae930c33-1b47-3631-83e0-e4160801d27a-SRYU",
    "account": "172ab258-2ce3-4956-bdeb-56c95aa6de75",
    "timestamp": "1713876494970",
    "token": ""
}

headers = {
    'User-Agent':'12312easdasdasd'
}
res = requests.post(url,data=data,headers=headers)
print(res.text)

