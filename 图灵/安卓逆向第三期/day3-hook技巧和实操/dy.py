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
    'Host': 'api5-normal-m-lq.amemv.com',
    # 'Cookie': 'store-region=cn-zj; store-region-src=did; install_id=728343238432708; ttreq=1' + os.getenv('cae80e9f62fccc75361b7a58d94f230544652412', '') + '; odin_tt=16a2ce4207533f90ffa310e53a8dda60028e8c3f9edb37cb423627324f2f4d196d1cb6debe8b15b83bc3d53cb7f0219b3df6d602c546bd3720132b3dfd0d4b5691811248842422b40e0e1ea5cf0260af',
    'x-tt-dt': 'AAAUWYSROQ5IAO7DDB66WQYFSD2RIZMQFBXXZLXX3FPJ7VGZK5DNGZHWW33PZLOKOZGCP2I6MZU24F6K3MWLE3XHONS3K2ELLCM2F34QJC6NVFWYWIRGSIOH64XZZO4XGFTUIY7IOLFN4FKIHDAPMCQ',
    'activity_now_client': '1724572387094',
    'sdk-version': '2',
    'passport-sdk-version': '20356',
    'x-ss-req-ticket': '1724572390666',
    'x-vc-bdturing-sdk-version': '2.2.1.cn',
    'user-agent': 'com.ss.android.ugc.aweme/190101 (Linux; U; Android 10; zh_CN_#Hans; Pixel 4; Build/QQ3A.200805.001;tt-ok/3.10.0.2)',
    'x-ladon': 'mlTwW3Amo9gA8jGZ9+AZ9wNCVFQD48fsS68qQVkwlR79iF33',
    'x-khronos': '1724572394',
    'x-argus': '5xiur+GaNvPht/FwTRuyPMsgwisYRbvfEi2+yK0R5HvM1llFSp3op4WgIExnoc9N8zD+fMmQyi1zzCaIUBmEe17tKckq5fiBbqP7l7COf4gOQqRRE19+DfzwH2fRhZe3+GJO/gbbeVPbYnbWfSK+ZyK1XsT6oxVdTY5q2nDWEhlF7mTj+WCCIi+ReygfgHGV/Fi4J0HIGT/zmopxWpEB2tmL8DTBD45Rc2efq0Z6qO4EQF1tc8u8uepXpcbVSqj5dq5BrJqX3+6TPO+0oXUC0ugL',
    'x-gorgon': '040420ab00018269de1b9373dcf4501105dee8869017194a201f',
}

comments = requests.get(
    'https://api5-normal-m-lq.amemv.com/aweme/v2/comment/list/?aweme_id=7402207813830855962&cursor=40&count=20&insert_ids&address_book_access=2&gps_access=1&forward_page_type=1&channel_id=0&city=330100&hotsoon_filtered_count=0&hotsoon_has_more=0&follower_count=0&is_familiar=0&page_source=0&user_avatar_shrink=64_64&aweme_author=MS4wLjABAAAAEvosZpkPB_sYwSNZPoF-51nA_AYKTw9of5EWhQrpfu63ttCpDayp-wzbUDLVjPkL&item_type=0&comment_aggregation=0&top_query_word=%E5%94%AF%E7%A5%8E&iid=728343238432708&device_id=587597487327291&ac=wifi&channel=tengxun_1128_1025&aid=1128&app_name=aweme&version_code=190100&version_name=19.1.0&device_platform=android&os=android&ssmix=a&device_type=Pixel+4&device_brand=google&language=zh&os_api=29&os_version=10&manifest_version_code=190101&resolution=1080*2236&dpi=440&update_version_code=19109900&_rticket=1724572390657&package=com.ss.android.ugc.aweme&cpu_support64=true&host_abi=armeabi-v7a&is_guest_mode=0&app_type=normal&minor_status=0&appTheme=light&need_personal_recommend=1&is_android_pad=0&ts=1724572385&cdid=625d4e76-0290-44f9-81b0-fe83a075a3b4',
    cookies=cookies,
    headers=headers,
).json()['comments']
for comment in comments:
    aweme_id = comment['aweme_id']
    text = comment['text']
    user = comment['user']
    nickname = user['nickname']
    print(aweme_id, nickname, text)
