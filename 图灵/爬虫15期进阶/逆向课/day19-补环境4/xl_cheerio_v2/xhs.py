# -*- coding: utf-8 -*-

import requests,json
import execjs



def feed(source_note_id,web_session,a1):
    headers= {
        "accept":"application/json, text/plain, */*",
        "accept-language":"zh-CN,zh;q=0.9",
        "cache-control":"no-cache",
        "content-type":"application/json;charset=UTF-8",
        "cookie":f"a1={a1}; web_session={web_session};",
        "origin":"https://www.xiaohongshu.com",
        "pragma":"no-cache",
        "referer":"https://www.xiaohongshu.com/",
        "sec-ch-ua":"\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
        "sec-ch-ua-mobile":"?0",
        "sec-ch-ua-platform":"\"Windows\"",
        "sec-fetch-dest":"empty",
        "sec-fetch-mode":"cors",
        "sec-fetch-site":"same-site",
        "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
        "x-b3-traceid":"fd2fd8dff594cd77",
        "x-s-common":"",
    }
    data = {
        "cursor_score": "",
        "num": 27,
        "refresh_type": 1,
        "note_index": 0,
        "unread_begin_note_id": "",
        "unread_end_note_id": "",
        "unread_note_count": 0,
        "category": "homefeed.cosmetics_v3"
    }
    params = {
        'uu':'/api/sns/web/v1/homefeed',
        'ii': data,
        'a1':a1
    }
    # exc = execjs.compile(open('xs.js','r',encoding='utf-8').read())
    # xs_xt = exc.call('get_xs','/api/sns/web/v1/feed',data,a1)
    cs = requests.get('http://127.0.0.1:3000',params=params)
    print(cs.text)
    cs = json.loads(cs.text)
    headers['X-S'] = cs.get('X-s')
    print(len(headers['X-S']))
    headers['X-T'] = str(cs.get('X-t'))
    # print(xs_xt)
    # headers.update(xs_xt)
    feed = 'https://edith.xiaohongshu.com/api/sns/web/v1/homefeed'
    print(requests.post(url=feed, data=json.dumps(data, separators=(",", ":")), headers=headers).text)

if __name__ == '__main__':
    source_note_id = "646840370000000027028120"
    web_session = "030037a32a0f865cf779b42423234a415c06c8"
    a1 = "187030acfd8mxkmdmrub605b6birew8pm7qkvplkb50000225980"
    feed(source_note_id,web_session,a1)