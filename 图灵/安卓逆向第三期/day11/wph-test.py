# -*- coding: utf-8 -*-
import requests
import hashlib

def calc_sign(params):
    if isinstance(params, (list, tuple, dict)):
        if hasattr(params, 'items'):
            params = params.items()
        params = '&'.join(f'{k}={v}' for k, v in sorted(params))
    if isinstance(params, str):
        params = params.encode()
    salt = b'a84c5883206309ad076deea939e850dc'
    s1 = hashlib.sha1(salt + params).hexdigest()
    s2 = hashlib.sha1(salt + s1.encode()).hexdigest()
    return s2

url = "https://mapi.appvipshop.com/vips-mobile/rest/shop/search/category_tree/get"
data = {
    "api_key": "23e7f28019e8407b98b84cd05b5aef2c",
    "app_name": "shop_android",
    "app_version": "7.45.6",
    "bigSaleTagIds": "",
    "brand_ids": "",
    "brand_store_sn": "",
    "category_id_1_5_show": "",
    "category_id_1_show": "",
    "category_id_2_show": "",
    "category_id_3_show": "",
    "channel_flag": "0_1",
    "channel_id": "1",
    "client": "android",
    "client_type": "android",
    "darkmode": "0",
    "deeplink_cps": "",
    "did": "0.0.f81256ac564e49764335a4919db82438.dd16b7",
    "fdc_area_id": "104103101104",
    "functions": "priceSections,svipService,bigSaleTagV2,noGender",
    "keyword": "睡衣",
    "mars_cid": "73282cb2-beb4-377e-b817-e8fe6dfb9cec",
    "mobile_channel": "8rdlo74r:::",
    "mobile_platform": "3",
    "other_cps": "",
    "page_id": "page_te_commodity_search_1715688651717",
    "phone_model": "Pixel 4",
    "province_id": "104103",
    "referer": "com.achievo.vipshop.search.activity.VerticalTabSearchProductListActivity",
    "rom": "Dalvik/2.1.0 (Linux; U; Android 10; Pixel 4 Build/QQ2A.200405.005)",
    "sd_tuijian": "0",
    "session_id": "73282cb2-beb4-377e-b817-e8fe6dfb9cec_shop_android_1715688686375",
    "skey": "2d30297ff20ec9b7442dc4f3c335abdc",
    "source_app": "android",
    "standby_id": "8rdlo74r:::",
    "sys_version": "29",
    "timestamp": "1715688652",
    "warehouse": "VIP_HZ"
}
sign = calc_sign(data)
print("OAuth api_sign=%s" % sign)
headers = {
    "Host": "mapi.appvipshop.com",
    "authorization": "OAuth api_sign=" + sign,
    "x-vip-host": "mapi.appvipshop.com",
    "content-type": "application/x-www-form-urlencoded",
    "user-agent": "okhttp/3.12.13"
}
response = requests.get(url, headers=headers, params=data)

print(response.text)
print(response)