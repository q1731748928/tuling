# -*- coding: utf-8 -*-

import execjs
import urllib.parse
import requests

headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.douyin.com/user/MS4wLjABAAAACV5Em110SiusElwKlIpUd-MRSi8rBYyg0NfpPrqZmykHY8wLPQ8O4pv3wPL6A-oz",
    "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Ch`rome/124.0.0.0 Safari/537.36"
}
cookies = {
    "ttwid": "1%7CFuS7O1DVWyn5UIo3ydIi57ht6It810NUkgCmPZznPls%7C1717728208%7C6e3f9cf095b3bcd8630cc9b9f409131ac795bbe0a1138e98d8304b9885cb600d",
    "s_v_web_id": "verify_lx430xgm_gAkmep7q_tihS_4HtF_BQtL_8T5FgORxYFr7",
    "home_can_add_dy_2_desktop": "%220%22",
    "dy_swidth": "1920",
    "dy_sheight": "1080",
    "strategyABtestKey": "%221717728210.174%22",
    "csrf_session_id": "86cf6cecc3d7cf90b465554039a49779",
    "passport_csrf_token": "54461560cd594f59d56df1e7113dc12f",
    "passport_csrf_token_default": "54461560cd594f59d56df1e7113dc12f",
    "bd_ticket_guard_client_web_domain": "2",
    "download_guide": "%223%2F20240607%2F0%22",
    "FORCE_LOGIN": "%7B%22videoConsumedRemainSeconds%22%3A180%2C%22isForcePopClose%22%3A1%7D",
    "douyin.com": "",
    "device_web_cpu_core": "8",
    "device_web_memory_size": "8",
    "volume_info": "%7B%22isUserMute%22%3Afalse%2C%22isMute%22%3Atrue%2C%22volume%22%3A0.5%7D",
    "xgplayer_user_id": "993969320736",
    "xg_device_score": "7.601412568506403",
    "stream_player_status_params": "%22%7B%5C%22is_auto_play%5C%22%3A0%2C%5C%22is_full_screen%5C%22%3A0%2C%5C%22is_full_webscreen%5C%22%3A0%2C%5C%22is_mute%5C%22%3A1%2C%5C%22is_speed%5C%22%3A1%2C%5C%22is_visible%5C%22%3A0%7D%22",
    "__ac_nonce": "06662d4860084322b89ba",
    "__ac_signature": "_02B4Z6wo00f01qijScAAAIDB-lxp2bLgdX6og01AAMxW3b",
    "WallpaperGuide": "%7B%22showTime%22%3A1717749819938%2C%22closeTime%22%3A0%2C%22showCount%22%3A1%2C%22cursor1%22%3A0%2C%22cursor2%22%3A0%7D",
    "stream_recommend_feed_params": "%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A1920%2C%5C%22screen_height%5C%22%3A1080%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A8%2C%5C%22device_memory%5C%22%3A8%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A100%7D%22",
    "msToken": "jQtJ1W978TmplB58GQng0JS5lvPOOtjwu7qpZxiz7LDTZkDc5t9hQeeDRPj_WHt6I-lh9QPLNWPmevu_YHaR1mOZTN1JGk3uzloPNXungYDi6biGexnc5rCpJFDHtw==",
    "bd_ticket_guard_client_data": "eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCQkV3dk5XYWNleWUwVVIyMTlYeERKNmh5TE1mYUdyQkhRQ0U0bzIwL0xhL0Q5bG5SM1kzWE5OZ2NaT0dJbEt4d1RwWmJzVlNpOWQwUEd5S1VtMTFLa1E9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D",
    "IsDouyinActive": "true"
}
url = "https://www.douyin.com/aweme/v1/web/aweme/post/"
params = {
    "device_platform": "webapp",
    "aid": "6383",
    "channel": "channel_pc_web",
    "sec_user_id": "MS4wLjABAAAACV5Em110SiusElwKlIpUd-MRSi8rBYyg0NfpPrqZmykHY8wLPQ8O4pv3wPL6A-oz",
    "max_cursor": "0",
    "locate_query": "false",
    "show_live_replay_strategy": "1",
    "need_time_list": "1",
    "time_list_query": "0",
    "whale_cut_token": "",
    "cut_version": "1",
    "count": "18",
    "publish_video_strategy_type": "2",
    "update_version_code": "170400",
    "pc_client_type": "1",
    "version_code": "290100",
    "version_name": "29.1.0",
    "cookie_enabled": "true",
    "screen_width": "1920",
    "screen_height": "1080",
    "browser_language": "zh-CN",
    "browser_platform": "MacIntel",
    "browser_name": "Chrome",
    "browser_version": "125.0.0.0",
    "browser_online": "true",
    "engine_name": "Blink",
    "engine_version": "125.0.0.0",
    "os_name": "Mac OS",
    "os_version": "10.15.7",
    "cpu_core_num": "8",
    "device_memory": "8",
    "platform": "PC",
    "downlink": "10",
    "effective_type": "4g",
    "round_trip_time": "100",
    "webid": "7377586381898499625",
    "verifyFp": "verify_lx430xgm_gAkmep7q_tihS_4HtF_BQtL_8T5FgORxYFr7",
    "fp": "verify_lx430xgm_gAkmep7q_tihS_4HtF_BQtL_8T5FgORxYFr7"
}

param = urllib.parse.urlencode(params)
a_bogus = execjs.compile(open('09-查看dy环境检测.js',encoding='utf-8').read()).call('get_aa', param)

# a_bogus = requests.get("http://127.0.0.1:5000/dy",params=params).json().get("context")["ab"]
print(a_bogus)
print(len(a_bogus), a_bogus)
params['a_bogus'] = a_bogus

response = requests.get(url, headers=headers, cookies=cookies, params=params)
print(response.text)
