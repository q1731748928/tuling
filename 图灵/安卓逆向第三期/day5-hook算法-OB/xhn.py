# -*- coding: utf-8 -*-
import hashlib
import requests
import time

def md5s(arg):
    md5 = hashlib.md5()
    md5.update(arg.encode())
    return md5.hexdigest()

def get_list():
    headers = {
        "os": "android",
        "appversion": "10.0.0",
        "rmt-device-id": "D1C928B118FBB238164CED5B1FFDCB867605087A",
        # "rmt-hash": "e8483ced5cbf269d7c81a8c302a46ee2", # 切换
        # "rmt-request-time": _ts,
        "rmt-device-type": "android",
        "rmt-build": "1000018",
        "rmt-app-version": "10.0.0",
        "rmt-app-id": "9",
        "accept-encoding": "gzip",
        "user-agent": "okhttp/4.11.0"
    }
    _ts = str(int(time.time() * 1000))
    params = {
        "list_version": "",
        "classid": "3378",  # 分类ID
        "appid": "9",
        "page": "1"
    }
    headers["rmt-request-time"] = _ts
    pa = "C50GIK6GDhQNjtMRVRoQbwxVovXCX8DUv5"
    hash = md5s(pa + "android" + headers['rmt-device-id'] + headers["rmt-request-time"])
    headers['rmt-hash'] = hash
    urls = 'https://xhnapi2.voc.com.cn/v5/news/getlist'
    res = requests.get(url=urls,params=params,headers=headers)
    print(res.text)

if __name__ == '__main__':
    get_list()
