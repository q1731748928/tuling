# encoding: utf-8
"""
@author: 夏洛
@QQ: 1972386194
@file: 测试.py
"""
import requests

# data = {"group": "rpc-test",
#         "action": "aaa",
#         "data": "hello"
#         }
# res = requests.get("http://127.0.0.1:5612/business-demo/invoke", params=data)
# print(res.text)

datas = {
    "group": "rpc-test",
    "action": "qq",
    "datas": '{"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":0,"g_tk_new_20200303":5381,"g_tk":5381},"req_1":{"module":"music.musichallSinger.SingerList","method":"GetSingerListIndex","param":{"area":-100,"sex":-100,"genre":-100,"index":2,"sin":0,"cur_page":1}}}'
}
res = requests.get("http://127.0.0.1:5612/business-demo/invoke", params=datas)
print(res.text)