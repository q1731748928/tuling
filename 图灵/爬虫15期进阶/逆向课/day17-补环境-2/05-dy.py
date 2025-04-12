# -*- coding: utf-8 -*-
import urllib.parse

import requests
import execjs
import requests
import requests
params = {
    "device_platform": "webapp",
    "aid": "6383",
    "channel": "channel_pc_web",
    "aweme_id": "7393929099015654696",
    "cursor": "20",
    "count": "20",
    "item_type": "0",
    "insert_ids": "",
    "whale_cut_token": "",
    "cut_version": "1",
    "rcFT": "",
    "update_version_code": "170400",
    "pc_client_type": "1",
    "version_code": "170400",
    "version_name": "17.4.0",
    "cookie_enabled": "true",
    "screen_width": "1920",
    "screen_height": "1080",
    "browser_language": "en-GB",
    "browser_platform": "Win32",
    "browser_name": "Chrome",
    "browser_version": "126.0.0.0",
    "browser_online": "true",
    "engine_name": "Blink",
    "engine_version": "126.0.0.0",
    "os_name": "Windows",
    "os_version": "10",
    "cpu_core_num": "20",
    "device_memory": "8",
    "platform": "PC",
    "downlink": "10",
    "effective_type": "4g",
    "round_trip_time": "50",
    "webid": "7165132921782519296",
    "msToken": "10lah6hlKpLiGvjemrwweqPTpubkb-_r1fTLx7djVwCYuXGcm2Xy6kbGm00moXCnznqbMSF1soNBokxmT1c37b7w19HrFncehYTONbRAfioOXLcstF5H6Q==",
    "a_bogus": "OyR0BfgfDifTXfSX5IKLfY3q6WN3YZzV0trEMD2fVdfOiy39HMT89exYAZTvUd6jNs/DIeLjy4haTpaMx5AJA3vRHuDKUIcgmESkKl5Q5xSSs1Xce6UgrUkE-wsACFrQsv1lxOfkqwAGKuRmAoPe-wHvPjojx2f39gG-",
    "verifyFp": "verify_lyllcqt4_s9d9gCtC_kRST_4dJQ_A2a3_O04mQQrrqwK2",
    "fp": "verify_lyllcqt4_s9d9gCtC_kRST_4dJQ_A2a3_O04mQQrrqwK2"
}

par = urllib.parse.urlencode(params)

# ab = execjs.compile(code).call("get_aa",par)
ab = requests.get("http://127.0.0.1:5000/dy",params=params).json().get("context")["ab"]
print(ab)

params["a_bogus"] = ab


headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-GB,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.douyin.com/user/MS4wLjABAAAAcr8P4n7JPrKRe73LW-7PbLq-rVWw-I0sCccdUcJI5Fo?modal_id=7393929099015654696&vid=7393929099015654696",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
}
cookies = {
    "store-region": "cn-hn",
    "store-region-src": "uid",
    "my_rd": "2",
    "live_use_vvc": "%22false%22",
    "d_ticket": "b116914da5979edc41703203250b74c7f3ff5",
    "bd_ticket_guard_client_web_domain": "2",
    "n_mh": "8mKOf2_JvwPuythMmbRmeQrhNrXP4KTpB1TWYkuCH1U",
    "LOGIN_STATUS": "1",
    "xgplayer_user_id": "884140098801",
    "SEARCH_RESULT_LIST_TYPE": "%22single%22",
    "_bd_ticket_crypt_doamin": "2",
    "__security_server_data_status": "1",
    "xgplayer_device_id": "50337088506",
    "UIFID_TEMP": "29d6bea3e5a6c157a08a212e1912b5e8a78666ece26be56100fa19e58a63a45b383b32005f27b94e41e3a2a833849524c0be1aa34dce7f1c08ef1b488c942b895a401e02d62bbca4ace2750f5072a802",
    "fpk1": "U2FsdGVkX1+vBkwVqxszhD9BSll9QSnXPN3fktGxORe0sc9oL7jJztaQEfxgJouOWKRNKrUsE09q7sk71ieixw==",
    "fpk2": "c92baae71318dc81de51a663df2f8b4f",
    "UIFID": "29d6bea3e5a6c157a08a212e1912b5e8a78666ece26be56100fa19e58a63a45b5d6f4f4b0acd74eea3a6c5eca8931a3a0bd1505d46d637710f2595a50a88e1750ee71382fec2fef528d4c4c24b4c8164f608ba5c40bbd5af80d812bd18749f2592f8f31c6cc9c7a6aa6de102f59cf1282e42d130745ad396f62c14b246ec970a9b2ba6388acd930385953ccce5fc1fe04d87773f299c910923293b75033c4b1e",
    "passport_assist_user": "CkGJF5ryrsQLusz-t20eBSRyT0lLphOusfMm3kpBC683RsWSrR3_PO4Mhk9AWBabLakNAuzScDg-_uCauvG-6llhCxpKCjz9A4CgCIJr1OgH2RcFBQNlpWaZA3I6ixDnvhEKG2Yazyd0UjmBY1HX_ps4fweoLbVgRguia8ggCZnvohQQ8anUDRiJr9ZUIAEiAQM8QSWG",
    "sso_uid_tt": "6fc636428ff10e6bfc44ff0de798f770",
    "sso_uid_tt_ss": "6fc636428ff10e6bfc44ff0de798f770",
    "toutiao_sso_user": "2b183d0580590c4b7073feb4d65a0c92",
    "toutiao_sso_user_ss": "2b183d0580590c4b7073feb4d65a0c92",
    "sid_ucp_sso_v1": "1.0.0-KDU3MTc0OWE2MmY3OGUzZmM5NTM1N2IwM2QxY2Y5MDlhZWJmNjI5NzcKIQjp8_D2scy6BBDCx8SzBhjvMSAMMLHbx6kGOAVA-wdIBhoCbGYiIDJiMTgzZDA1ODA1OTBjNGI3MDczZmViNGQ2NWEwYzky",
    "ssid_ucp_sso_v1": "1.0.0-KDU3MTc0OWE2MmY3OGUzZmM5NTM1N2IwM2QxY2Y5MDlhZWJmNjI5NzcKIQjp8_D2scy6BBDCx8SzBhjvMSAMMLHbx6kGOAVA-wdIBhoCbGYiIDJiMTgzZDA1ODA1OTBjNGI3MDczZmViNGQ2NWEwYzky",
    "uid_tt": "bad922c6cfd7142507289fc8c7846807",
    "uid_tt_ss": "bad922c6cfd7142507289fc8c7846807",
    "sid_tt": "55a994fb4a45a5c7bb802a84a3df0185",
    "sessionid": "55a994fb4a45a5c7bb802a84a3df0185",
    "sessionid_ss": "55a994fb4a45a5c7bb802a84a3df0185",
    "_bd_ticket_crypt_cookie": "a999b61d5ff9881e522a5fb57d3978e0",
    "ttwid": "1%7CHNQ9kmNbkzDz2L-TRt8plNUZpzbuaPz3A0BEhdvRCB8%7C1719930302%7C377ff6a0af01693f08d83eafca233d3996676845ebc79631f27120880eb57201",
    "sid_guard": "55a994fb4a45a5c7bb802a84a3df0185%7C1720749877%7C5184000%7CTue%2C+10-Sep-2024+02%3A04%3A37+GMT",
    "sid_ucp_v1": "1.0.0-KDAyODIxYmM5ZGViZmNiZDI2ZGNhZmQxZjIzYTBiYmU0OWRlMjcyYmYKGwjp8_D2scy6BBC1nsK0BhjvMSAMOAVA-wdIBBoCbGYiIDU1YTk5NGZiNGE0NWE1YzdiYjgwMmE4NGEzZGYwMTg1",
    "ssid_ucp_v1": "1.0.0-KDAyODIxYmM5ZGViZmNiZDI2ZGNhZmQxZjIzYTBiYmU0OWRlMjcyYmYKGwjp8_D2scy6BBC1nsK0BhjvMSAMOAVA-wdIBBoCbGYiIDU1YTk5NGZiNGE0NWE1YzdiYjgwMmE4NGEzZGYwMTg1",
    "s_v_web_id": "verify_lyllcqt4_s9d9gCtC_kRST_4dJQ_A2a3_O04mQQrrqwK2",
    "passport_csrf_token": "1632c1dfce14174e98ebf5c71d2a5497",
    "passport_csrf_token_default": "1632c1dfce14174e98ebf5c71d2a5497",
    "volume_info": "%7B%22isUserMute%22%3Afalse%2C%22isMute%22%3Afalse%2C%22volume%22%3A0.138%7D",
    "download_guide": "%223%2F20240722%2F0%22",
    "pwa2": "%220%7C0%7C3%7C0%22",
    "msToken": "tCSR5-ObLpRHf9yCc3l52771FSJkESpcRIlz29QxQgvzJgcuxRg1T-OrT6pLBMb2le4HCbVtJLMyYtT19comhV16FKYwesl6JOUHgzPA-SmcmNc-eE9iKw==",
    "publish_badge_show_info": "%220%2C0%2C0%2C1721828280528%22",
    "__live_version__": "%221.1.2.2252%22",
    "live_can_add_dy_2_desktop": "%221%22",
    "WallpaperGuide": "%7B%22showTime%22%3A1721910117144%2C%22closeTime%22%3A0%2C%22showCount%22%3A1%2C%22cursor1%22%3A12%2C%22cursor2%22%3A0%7D",
    "stream_player_status_params": "%22%7B%5C%22is_auto_play%5C%22%3A0%2C%5C%22is_full_screen%5C%22%3A0%2C%5C%22is_full_webscreen%5C%22%3A0%2C%5C%22is_mute%5C%22%3A0%2C%5C%22is_speed%5C%22%3A1%2C%5C%22is_visible%5C%22%3A0%7D%22",
    "__ac_signature": "_02B4Z6wo00f01rUOfeQAAIDDaXfiUQZu9Oq1LnlAAMvsDWhbbpLkm1pJ5GLJ.lnrH0d43rV.w8MDjOs7B-vIoD7ZoOnNKs0N71nxJiPTGkRy.plORrZiZE4MN7f1v.pRsqOh-4drCyOsi3-Peb",
    "douyin.com": "",
    "device_web_cpu_core": "20",
    "device_web_memory_size": "8",
    "architecture": "amd64",
    "dy_swidth": "1920",
    "dy_sheight": "1080",
    "csrf_session_id": "c9309906aab1a10667069e88b5b45c9c",
    "strategyABtestKey": "%221721995863.585%22",
    "biz_trace_id": "e2e957b6",
    "xg_device_score": "7.801557679558424",
    "stream_recommend_feed_params": "%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A1920%2C%5C%22screen_height%5C%22%3A1080%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A20%2C%5C%22device_memory%5C%22%3A8%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A50%7D%22",
    "FOLLOW_LIVE_POINT_INFO": "%22MS4wLjABAAAAOZJ9Qv8nlRmFEkzLyRU6zMlFtskoWLXBK2T6QHNG4iJ9_lickAaiDrmMaNP1fCIL%2F1722009600000%2F0%2F0%2F1721997756373%22",
    "FOLLOW_NUMBER_YELLOW_POINT_INFO": "%22MS4wLjABAAAAOZJ9Qv8nlRmFEkzLyRU6zMlFtskoWLXBK2T6QHNG4iJ9_lickAaiDrmMaNP1fCIL%2F1722009600000%2F0%2F1721997156374%2F0%22",
    "home_can_add_dy_2_desktop": "%221%22",
    "bd_ticket_guard_client_data": "eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCQnBjZTZoMUt2c09YRUtFNjA5TXFCNXpqd0FrZzJXQkROQ3VwWjJRZlhEaHl3TXM3dTVCc21NVEVQNWtKSndmQWJVcnRxS3A5S2MrYWwrRTRWOWVicUU9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D",
    "IsDouyinActive": "true",
    "passport_fe_beating_status": "true",
    "__ac_nonce": "066a39dee008850a6c9fc",
    "odin_tt": "855778b6d7b2fae802f05dc07b73318e7efea8097858d3f482efbdef9b83237edb83de0360bfd01a08c2ae2885c7f7f41edbadb394f5eb7e8a77714fce04cef5"
}
url = "https://www.douyin.com/aweme/v1/web/comment/list/"

response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)