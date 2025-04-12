# -*- coding: utf-8 -*-
import base64
import json
from Crypto.Cipher import DES
from Crypto.Util.Padding import pad
import hashlib


def md5_eny(arg):
    md5 = hashlib.md5()
    md5.update(arg.encode("utf-8"))
    return md5.digest()


def md5_enys(arg):
    md5 = hashlib.md5()
    md5.update(arg.encode("utf-8"))
    return md5.hexdigest()


def des_cry(data, key, iv):
    des = DES.new(key, DES.MODE_CBC, iv)
    pad_data = pad(data.encode("utf-8"), des.block_size)
    en_data = des.encrypt(pad_data)
    return base64.b64encode(en_data).decode('utf-8')

def get_sign():
    text = ''
    data = {"equtype": "ANDROID", "loginImei": "Androidnull", "timeStamp": "1701352876344", "userPwd": "1111qqw","username": "13535353535"}
    for key in data:
        text += f"{key}={data[key]}&"
    append = "sdlkjsdljf0j2fsjk"
    text += f"key={append}"
    sign = md5_enys(text)
    data['sign'] = sign
    return data

des_key = md5_eny('65102933')[:8]  # 取前8位
print(des_key)

des_iv = "32028092".encode('utf-8')
data = get_sign()
print(data)

print(des_cry(json.dumps(data), des_key, des_iv))

