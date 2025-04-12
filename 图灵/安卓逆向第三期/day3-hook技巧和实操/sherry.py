import os
import requests

cookies = {
    'store-region': 'cn-zj',
    'store-region-src': 'did',
    'install_id': '728343238432708',
    'ttreq': '1' + os.getenv('cae80e9f62fccc75361b7a58d94f230544652412', ''),
    'odin_tt': '16a2ce4207533f90ffa310e53a8dda60028e8c3f9edb37cb423627324f2f4d196d1cb6debe8b15b83bc3d53cb7f0219b3df6d602c546bd3720132b3dfd0d4b5691811248842422b40e0e1ea5cf0260af',
}

headers = {
    'Host': 'search5-search-lq.amemv.com',
    # 'Cookie': 'store-region=cn-zj; store-region-src=did; install_id=728343238432708; ttreq=1' + os.getenv('cae80e9f62fccc75361b7a58d94f230544652412', '') + '; odin_tt=16a2ce4207533f90ffa310e53a8dda60028e8c3f9edb37cb423627324f2f4d196d1cb6debe8b15b83bc3d53cb7f0219b3df6d602c546bd3720132b3dfd0d4b5691811248842422b40e0e1ea5cf0260af',
    'x-ss-stub': '9BD0CE6BF03DAC520A72EB9139BA7811',
    'x-tt-dt': 'AAAUWYSROQ5IAO7DDB66WQYFSD2RIZMQFBXXZLXX3FPJ7VGZK5DNGZHWW33PZLOKOZGCP2I6MZU24F6K3MWLE3XHONS3K2ELLCM2F34QJC6NVFWYWIRGSIOH64XZZO4XGFTUIY7IOLFN4FKIHDAPMCQ',
    'activity_now_client': '1724577058508',
    'sdk-version': '2',
    'passport-sdk-version': '20356',
    'x-ss-req-ticket': '1724577062063',
    'x-vc-bdturing-sdk-version': '2.2.1.cn',
    'user-agent': 'com.ss.android.ugc.aweme/190101 (Linux; U; Android 10; zh_CN_#Hans; Pixel 4; Build/QQ3A.200805.001;tt-ok/3.10.0.2)',
    'x-ladon': 'GQnVLC92vrWYi4B3Kb65wy3+D+vh/hPbjFOqmdMm2RSsUiqy',
    'x-khronos': '1724577065',
    'x-argus': 'Ugg5O0EXB8vxYQhyA2FXTkXMlPsAk68GPAHACheUeGcsNA6oAebpjss3UEJjCqBB2sbGR66+MvgsmTsYuTdlBiOW+KspIBK4xll+peyHhphon6GKd05/W1ZlsZA20O6+2xSsGBIVTNSVCA0nfrEIXL686KH3pyGrzhWZGqbsDB7iOOudPMWrDgqlUESRmDmr29vgP3TH0xKC5+ROUHrq2qz8/TYF27Dyq2GaCzYO32BIQQFPY5axWiSMzM3R7U8knstsol6ME6T5TVS1d0ru/TWK',
    'x-gorgon': '0404a07e0001e3b3e306d7c16e732a31c2bb7a7aa6df3363289e',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
}

data = {
    'keyword': '358965202',
    'offset': '0',
    'count': '10',
    'is_pull_refresh': '0',
    'search_source': 'search_history',
    'hot_search': '0',
    'search_id': '',
    'query_correct_type': '1',
    'is_filter_search': '0',
    'sort_type': '0',
    'publish_time': '0',
    'search_range': '0',
    'disable_synthesis': '0',
    'multi_mod': '0',
    'single_filter_aladdin': '0',
    'client_width': '393',
    'client_height': '829',
    'dynamic_type': '0',
    'epidemic_card_type': '0',
    'enter_from': 'homepage_hot',
    'mode': '',
    'anchor_item_id': '',
    'backtrace': 'HOrgrceWk4ln3IVKBQsE1I7mLiW8LvReFC/DAk9vUhYmv4b8QuUPxWF5hAI+fr40bDr/4uPSgMdH5ZNJdJPYuLOvQ/GjmI+rFKJTisjpltQln2EziNlQMBdnDjn3dY7MuC4Z1Wsjjhr+C1d6EQHf73sCyXhtPv+1lhnZA2YxxI4AtAmWK/ken1BetFWSVNQ7vWcaFhKFy557z+hCznO7Lwc7Q/IonyKryNnjH6+VOirzyiKpGdCU6jJvZNWRGuwDql/+SQ/+PvU7+vprwfduAcVXB406Ny+TYY1ME8lJqAjycuT3pztVX4jkCC2TRE64HkDEzSdPQfiJ29MW3idMYzuBxrW2iR+zWeoDCZlpRW6ExKdCezKPrFXW+0KmrCK2',
    'json': '',
    'from_author_id': '',
    'from_group_id': '',
    'previous_search_query': '358965202',
    'previous_search_ts': '1724577046931',
    'previous_source': 'search_history',
    'effect_sdk_version': '10.6.0',
    'location_permission': '1',
    'is_accessibility': '0',
    'is_adapt_elder': '0',
    'need_filter_settings': '0',
    'enable_history': '1',
    'client_extra': '{"charging":0,"qoe":82,"har_info":""}',
    'large_font_mode': '0',
    'search_scene': 'douyin_search',
    'address_book_access': '2',
    'location_access': '1',
    'goods_info_count': '10',
    'goods_info_version': '1',
}

response = requests.post(
    'https://search5-search-lq.amemv.com/aweme/v1/general/search/stream/?iid=728343238432708&device_id=587597487327291&ac=wifi&channel=tengxun_1128_1025&aid=1128&app_name=aweme&version_code=190100&version_name=19.1.0&device_platform=android&os=android&ssmix=a&device_type=Pixel+4&device_brand=google&language=zh&os_api=29&os_version=10&openudid=fdc9aec786792478&manifest_version_code=190101&resolution=1080*2236&dpi=440&update_version_code=19109900&_rticket=1724577062062&package=com.ss.android.ugc.aweme&cpu_support64=true&host_abi=armeabi-v7a&is_guest_mode=0&app_type=normal&minor_status=0&appTheme=light&need_personal_recommend=1&is_android_pad=0&ts=1724577057&cdid=625d4e76-0290-44f9-81b0-fe83a075a3b4',
    cookies=cookies,
    headers=headers,
    data=data,
).text
print(response)
# aweme_list = response['aweme_list']
# for aweme in aweme_list:
#     video = aweme['video']
#     play_addr_lowbr = video['play_addr_lowbr']
#     url_list = play_addr_lowbr['url_list']
#     for url in url_list:
#         print(url)
#     print("")