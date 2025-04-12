# -*- coding: utf-8 -*-

import json

import requests

data = {"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":0,"g_tk_new_20200303":5381,"g_tk":5381},"req_1":{"module":"music.musicsearch.HotkeyService","method":"GetHotkeyForQQMusicMobile","param":{"searchid":"28172936832244929","remoteplace":"txt.yqq.top","from":"yqqweb"}},"req_2":{"module":"music.paycenterapi.LoginStateVerificationApi","method":"GetChargeAccount","param":{"appid":"mlive"}},"req_3":{"module":"newalbum.NewAlbumServer","method":"get_new_album_area","param":{}},"req_4":{"module":"newalbum.NewAlbumServer","method":"get_new_album_info","param":{"area":1,"sin":0,"num":20}}}
data = json.dumps(data,separators=(',',":"))

def  get_rpcDy():
    # 参数较长的情况下 超过1024字节  可以采用post方法即可
    _data = {
        'group': 'rpc-test',
        "action": "qq",
        'datas': data
    }
    res = requests.post("http://127.0.0.1:5612/business-demo/invoke", data=_data)
    sign = res.json().get('data')
    return sign


headers = {
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://y.qq.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://y.qq.com/",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
}
cookies = {
    "RK": "UgFZtROnRY",
    "ptcz": "fa0a466865b57cc982431dfc47694438ee222786a111b0ad3708201003d81792",
    "pgv_pvid": "5835515095",
    "fqm_pvqid": "b3ba34b2-5a1f-42c4-99ca-b8845f065cfb",
    "ts_uid": "2317677056",
    "ts_refer": "www.google.com/",
    "euin": "oKSioKSPNeEANn**",
    "tmeLoginType": "2",
    "music_ignore_pskey": "202306271436Hn@vBj",
    "psrf_access_token_expiresAt": "1729388444",
    "fqm_sessionid": "b26bd6ad-04d9-4068-bae1-cb7e6fc604c7",
    "pgv_info": "ssid=s8121805806",
    "ts_last": "y.qq.com/n/ryqq/singer_list"
}
url = "https://u6.y.qq.com/cgi-bin/musics.fcg"
params = {
    "_": "1704799940320",
    # "sign": "zzb700d3ef00hrteho27q6jubn6szcibq65936c35" # 采集信息 必须携带 且每次会变
}

sign = get_rpcDy()
print(sign)
params['sign'] = sign
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)
print(response.text)
print(response)


