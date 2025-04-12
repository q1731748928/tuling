# -*- coding: utf-8 -*-
import urllib.parse

import requests
import execjs

with open('03-dy.js', encoding='utf-8') as f1:
    code = f1.read()

params = {
    "device_platform": "webapp",
    "aid": "6383",
    "channel": "channel_pc_web",
    "aweme_id": "7364290138517638409",
    "cursor": "0",
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
    "screen_width": "1728",
    "screen_height": "1117",
    "browser_language": "zh-CN",
    "browser_platform": "MacIntel",
    "browser_name": "Chrome",
    "browser_version": "126.0.0.0",
    "browser_online": "true",
    "engine_name": "Blink",
    "engine_version": "126.0.0.0",
    "os_name": "Mac OS",
    "os_version": "10.15.7",
    "cpu_core_num": "12",
    "device_memory": "8",
    "platform": "PC",
    "downlink": "10",
    "effective_type": "4g",
    "round_trip_time": "50",
    "webid": "7381273364713506304",
    "msToken": "MKbZxX2fvboXRzxmXtXmAsjl9zDaEWqfyJEo1lg8m8VAxLmtaj2dTP7BqzdtVKAagCPBL_NMu0g7zl0ohOKiLFbEX7ERenXEyyemyZxCqrTpfcfCvoe6q2wKGdJEu0g=",
    "verifyFp": "verify_lxia4a2p_poXKh366_UAIC_47Dn_9dKo_GAoMyWKKIARH",
    "fp": "verify_lxia4a2p_poXKh366_UAIC_47Dn_9dKo_GAoMyWKKIARH"
}
par = urllib.parse.urlencode(params)


ab = execjs.compile(code).call("get_aa",par)

headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.douyin.com/?recommend=1",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
}
cookies = {
    "ttwid": "1%7CHOBlH2AmYmnqmeObV_orfO2Q2o-EgUhImEmkeOt41Jo%7C1718586651%7C3f77ef80cde3553aff8582e2f9a753a3463d78b8cf9edcecbc2b535a7becd3ac",
    "s_v_web_id": "verify_lxia4a2p_poXKh366_UAIC_47Dn_9dKo_GAoMyWKKIARH",
    "bd_ticket_guard_client_web_domain": "2",
    "passport_csrf_token": "b20768cce3e100dbc6100788b4418c71",
    "passport_csrf_token_default": "b20768cce3e100dbc6100788b4418c71",
    "SEARCH_RESULT_LIST_TYPE": "%22single%22",
    "UIFID_TEMP": "7457f5ef2178e63069f24974fa04cbf9321b3fa7afdb44208071bc08e7f7084f7ab4556840476d510fadd012a1acdd876ab7d4ea9eb2b97cccf765a369141337b86cdeae34712034041b94ce1ac08d6e",
    "fpk1": "U2FsdGVkX188iYpoup/6RxYRCGZfX+DkfOe2+mZjiPejuNINjDEDluuk0j9m93ULHp8Qt3kCp4Tpdpsi4s4qhQ==",
    "fpk2": "8381c048a9d70230af13a12a76663dc4",
    "UIFID": "7457f5ef2178e63069f24974fa04cbf9321b3fa7afdb44208071bc08e7f7084f1575a7b3c8068a5b99752662f706e8c2fe87b43b883de6590617ae819a4c9699c0a21a692e9078985a16037f99fc8d56594537285ac0df6c5af3fe5349dce2139a22a0d354fda2323629684c6898960bfef46db68673b6db01b456eb8701081bd34fe6ff289833ed56f9ebb433c01064c728936a9a1fe13a2bd5bd5d504e5128",
    "dy_swidth": "1728",
    "dy_sheight": "1117",
    "FORCE_LOGIN": "%7B%22videoConsumedRemainSeconds%22%3A180%7D",
    "odin_tt": "540b2e0a688736e23c8413f5f371c79f92de66d1a0057981b501fa1ee63472370e0876367142b9c19c02ed75c6e4189fa2153f3c10a771c7986907e4faebab51f07374f73b1899d095244d71fbba106e",
    "xgplayer_user_id": "968071324490",
    "download_guide": "%223%2F20240725%2F0%22",
    "volume_info": "%7B%22isUserMute%22%3Afalse%2C%22isMute%22%3Atrue%2C%22volume%22%3A0.5%7D",
    "pwa2": "%220%7C0%7C3%7C0%22",
    "stream_recommend_feed_params": "%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A1728%2C%5C%22screen_height%5C%22%3A1117%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A12%2C%5C%22device_memory%5C%22%3A8%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A50%7D%22",
    "__ac_nonce": "066a4e17200e209fa5cd7",
    "__ac_signature": "_02B4Z6wo00f01ruyiZgAAIDB6U2pgkLmdpa7ko0AAMhUf9",
    "douyin.com": "",
    "device_web_cpu_core": "12",
    "device_web_memory_size": "8",
    "strategyABtestKey": "%221722081652.66%22",
    "xg_device_score": "7.727146666403306",
    "IsDouyinActive": "true",
    "csrf_session_id": "c57d05225e6ba0c86725b56b03804dc8",
    "stream_player_status_params": "%22%7B%5C%22is_auto_play%5C%22%3A0%2C%5C%22is_full_screen%5C%22%3A0%2C%5C%22is_full_webscreen%5C%22%3A0%2C%5C%22is_mute%5C%22%3A1%2C%5C%22is_speed%5C%22%3A1%2C%5C%22is_visible%5C%22%3A1%7D%22",
    "biz_trace_id": "2326cf29",
    "bd_ticket_guard_client_data": "eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCRG9YUzlGa1JrSkNRNVUxOTZEcnVHSmVlcTlrL2g3anFSdm95UmcweEVxeU1IT0FUZEl6WHU0RmdOWVBIOGkxVXNMWm5nU2Jsc2xWMlU5Z1p1d3cza2M9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D",
    "home_can_add_dy_2_desktop": "%221%22"
}
url = "https://www.douyin.com/aweme/v1/web/comment/list/"

print(ab)

params['a_bogus'] = ab

response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)

