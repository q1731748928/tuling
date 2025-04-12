# -*- coding: utf-8 -*-
import hashlib
import json

from Crypto.Cipher import AES

def decrypt(data, key):
    md5 = hashlib.md5(str(key).encode("UTF-8")).hexdigest()
    key = md5[8:24]
    iv = '0809060801020609'
    enc_data = bytearray.fromhex(data)
    aes = AES.new(key.encode(), AES.MODE_CBC, iv.encode())
    decrypted = aes.decrypt(enc_data).strip()
    text = decrypted.decode()
    return text

headers = {"User-Agent":"Mozilla/5.0 (Linux; Android 11; M2007J22C Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.210 Mobile Safari/537.36 mztapk","Accept":"*/*","Referer":"https://app.mmzztt.com",}
import requests
from requests_pkcs12 import Pkcs12Adapter
session = requests.session()
for i in range(1, 11):
    url = f"https://api.iimzt.com/app/list/posts?type=post&order=last&paged={i}"
    # 指定双向认证网站的pfx证书文件，并附带证书的密码
    session.mount(url, Pkcs12Adapter(pkcs12_filename='client_keystore__2024_05_05_14_46_47_73.p12', pkcs12_password="hooker"))
    # 使用session调用get/post方法
    response = session.get(url, headers=headers,verify=False)
    # print(response.status_code)
    # print(response.text)

    items = json.loads(response.text)
    key = items['last']
    data = items.get('data')
    text = decrypt(data, key)
    json_str = text.encode('utf8').decode('unicode_escape')
    jss = json.loads(json_str)
    for js in jss:
        title = js['title']
        thumb = js['thumb']
        print(title, thumb)





