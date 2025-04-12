# -*- coding: utf-8 -*-
import base64
import json
from Crypto.Cipher import DES
from Crypto.Util.Padding import pad
import hashlib


def des_cry(data, key, iv):
    des = DES.new(key, DES.MODE_CBC, iv)
    pad_data = pad(data.encode("utf-8"), des.block_size)
    en_data = des.encrypt(pad_data)
    return base64.b64encode(en_data).decode('utf-8')

data = {"equtype":"ANDROID","loginImei":"Androidnull","sign":"B6D3AC308C5B3C299AF658B1BC3A510A","timeStamp":"1713878689681","userPwd":"123123123123","username":"13535353535"}
key= "65102933"
desIV= "32028092"
print(des_cry(str(data), key.encode(), desIV.encode()))


