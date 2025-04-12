# -*- coding: utf-8 -*-


import subprocess
from functools import partial

import pymysql

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

import requests
import execjs

db = pymysql.connect(host="localhost", port=3306, user="root", passwd="123456", db="wukuang")
cursor = db.cursor()

def get_data():
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-GB,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Origin": "https://ec.minmetals.com.cn",
        "Pragma": "no-cache",
        "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "sec-ch-ua": "^\\^Not/A)Brand^^;v=^\\^99^^, ^\\^Google",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "^\\^Windows^^"
    }
    url = 'https://ec.minmetals.com.cn/open/homepage/public'
    res = requests.post(url,headers=headers)
    pub = res.text
    print(pub)
    for pn in range(1,11):
        data = {
                "inviteMethod": "",
                "businessClassfication": "",
                "mc": "",
                "lx": "ZBGG",
                "dwmc": "",
                "pageIndex": pn
            }
        ctll = execjs.compile(open('04-五矿.js', encoding='utf-8').read())
        sign = ctll.call('get_data',data,pub)
        data_url = "https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page"
        commit_data = {
            'param':sign
        }
        response = requests.post(data_url, headers=headers,json=commit_data)
        js = response.json()
        lists = js['list']
        for list in lists:
            mc = list['mc']
            bm = list['bm']
            rq = list['rq']
            try:
                sql = "insert INTO wukuang (rq,mc,bm) " \
                      "VALUES " \
                      "(%s,%s,%s)"
                val = (rq,mc,bm)
                cursor.execute(sql, val)
                db.commit()
            except Exception as e:
                print(e)




get_data()

