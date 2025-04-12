import json
import subprocess
import pymongo
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

# 连接到 MongoDB
client = pymongo.MongoClient()

db = client["mydatabase"]

# 创建一个集合
collection = db["mycollection"]

import requests
import execjs
cookies = {
    'mobile_iindex_uuid': '592e58b0-29d6-5e58-9b11-4495295d56cf',
    'Hm_lvt_2873e2b0bdd5404c734992cd3ae7253f': '1675999112,1676340331',
    'Hm_lpvt_2873e2b0bdd5404c734992cd3ae7253f': '1676340331',
}

headers = {
    'authority': 'www.chinaindex.net',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'funcid': 'undefined',
    'incognitomode': '0',
    'referer': 'https://www.chinaindex.net/ranklist/4',
    'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41',
    'uuid': '592e58b0-29d6-5e58-9b11-4495295d56cf',
}

params = {
    'channel': 'movielist',
    'sign': '5f3cce6a40c09a221b21104cc98436a3',
}

response = requests.get(
    'https://www.chinaindex.net/iIndexMobileServer/teleplay/rank/waiting/fans',
    params=params,
    cookies=cookies,
    headers=headers,
).json()
data = response['data']
lastFetchtime = response['lastFetchTime']
ctx = execjs.compile(open('123123.js', 'r', encoding='utf-8').read()).call('main123', data, lastFetchtime)
rank_lists = ctx['rank_list']
for rank_list in rank_lists:
    object_infos = rank_list['object_info']
    name = object_infos['name']
    first_platform = object_infos['first_platform']
    # 插入文档
    data = {"name": name, "first_platform": first_platform}
    insert_result = collection.insert_one(data)
    print("Inserted document id:", insert_result.inserted_id)
