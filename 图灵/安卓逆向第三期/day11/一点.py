# -*- coding: utf-8 -*-
import requests
import json

headers = {
    "Host": "a1.go2yd.com",
    "apiname": "/Website/channel/news-list-for-flash",
    "content-type": "application/json; charset=UTF-8",
    "user-agent": "okhttp/3.8.0"
}
cookies = {
    "JSESSIONID": "TIBCbeBB8IyXXBI3TviXEg"
}
url = "https://a1.go2yd.com/Website/channel/news-list-for-flash"
params = {
    "eventid": "2161101933266f1816-6e50-4d68-9fe6-562aec14bf6e",
    "apiv": "031700",
    "cstart": "0",
    "cend": "30",
    "infinite": "true",
    "searchentry": "channel_navibar",
    "cpv": "1.211",
    "group_fromid": "g181",
    "refresh": "0",
    "every_day_history": "false",
    "fromId": "t2433472",
    "ad_version": "010972",
    "fields": "down",
    "os": "29",
    "signature": "LZoqomxM1Y2Zmq-KAuHtKnxKFE2VljXtel9lz6xvTZNWJm6QPqqdhEx4sC5fco3PT2pL1Hi8EKCHkkJvH9TJ37CiYg0WwJsbSolnNZUlO9FIchInkXo-MLn6NOKbPK2EMrFiq7gowBVjBmfrfBOZ9YMG-1UbGlW-nQYawo_4Fa8",
    "apk_meta_channel": "www.wandoujia.com",
    "personalRec": "1",
    "distribution": "www.wandoujia.com",
    "version": "031700",
    "platform": "1",
    "reqid": "zqnwx9al_1715689176177_940",
    "cv": "6.2.3.0",
    "appid": "yidian",
    "net": "wifi",
    "brand": "google",
    "request_sign_q": "RB2PHzn0cq7BEiSfEblWSzPrWBg2nWsy9pPsRydo7CBaA2X6onxdZPZ6QhT5NgIlEuAnYRdkZQ1d9EPGrKICoGmqfuDSmz51kTaviyHpJ9S-Xv_7ubE5uU42BddLm7LH"
}
data = {
    "request_sign_bj": "RiUbGqYsTnUgECMnf0YGBnP_psgUShfdAmT_qK9OMwqHdTySrC5OHPk47Bnork8Ml4Gc-smB-UT7l5OVolO7MH268QuXuScMWxh_bq5stB6COnR4Srq9l16HSpOOs6mlJyWAszM4ngGw3995qiVjW1GUKIzzpsjnNHX8m1-S6gKORsOTApn6FGon4LTRaotL3Bl0AplUK6uyn5zzcPkKCrMAVBOXjeqWQcqaoPubpw-t2_cbG5ZUEWCVW5Kl0dLoNrr9z2rB-kNdILUnQAUvLhfJQWSFaa80VANFnjBNovokPIqWOBCd-6qUpxSG1_NrcgubOY5BXwLMNUP84FY_dB8kM38i45EaOOJl1Bvtqo1t4Uh1Ixee5Rc-gr2cBZYa5k25N6KAuEXDDfKC24SS8OW8IGvR_6YMBI5yLs4IXYVfFK1hwQvGEwXQKstp7U0HQRHkBmfqwi79Smk9fRKfw1tVVS5jw7LD2fQqdYvwxvylODapbiR2YyA9tgBsBw83ygfuiswzJry1rOhJO79PvQdc4zwpRqa25OrR0c4U_OLRo_CDgBN_RilxMqXq2b3MwzsSTPhoxCbYVEMx1VlBTZxB1WhDzSTqJTcw-xtB0fZQwrlyI9-Mjn3KbVQNeyqiy5sIn8CAXaJqoWmQqmA_g6CO2c34LMucMclHSyGmh4MiSsgMMVpy0ga9bgUU0BngVbC6_h1yfcltns5cpCt7w7qJtMpLiitMxZkjlupR4ce7KGUvg_fs52hAa5c3vH_6crhkH1XvodRxfxDZXPnhmVAgFP4tjgilaiMH0E2oKMaWj_Y7_ZBoANFbPWe5vKdxWmEMNGeb0YmGvl8QeyWawJhaieqWRN3JRV5nZhnMpDs1hGi76veChpcaK2PLAKPol7eOL4eGtB6zcZRqUQ7DzvgdycTl5F87lzjRAwK48Gj5ns3eCsndhr24zAoL3XV_B9BH-FFCkl0cTi1tFFlrFb72QMoNjqINrEfFx79QwfGMd0ixqntBilRwlZGJcA59ZzxE67yP8Hjw3eJytvznyxzh99-GIB3vfjYPH198twSFlpTGD36s3YbI0BpFW1G_pmZh-jFx8Mf_yQDzM1rERvwWTl1zcV_09orN08Irg1iuZWiMYOOaDDxEJqXacSYk"
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
print(response)