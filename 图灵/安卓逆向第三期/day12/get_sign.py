# -*- coding: utf-8 -*-

import time
import hashlib
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import base64
import random
import copy


def create_android_id():
    data_list = []
    for i in range(1, 9):
        part = "".join(random.sample("0123456789ABCDEF", 2))
        data_list.append(part)
    return "".join(data_list).lower()


def md5(data_bytes):
    hash_object = hashlib.md5()
    hash_object.update(data_bytes)
    return hash_object.hexdigest()


def aes_encrypt(data_string):
    key = "d245a0ba8d678a61"
    aes = AES.new(
        key=key.encode('utf-8'),
        mode=AES.MODE_ECB,
    )
    raw = pad(data_string.encode('utf-8'), 16)
    return aes.encrypt(raw)


uid = create_android_id()
ctime = str(int(time.time() * 1000))

# newSign	"newSign": "dfe2b9145490e58c29f74e1191af80a3",
reply_param_dict = {
	"cipherParam": "userName",
	"countryCode": 86,
	"loginToken": "",
	"password": "9fb40645e7b72d1bf356c0ff8d0c667f",
	"platform": "android",
	"timestamp": "1715863648444",
	"type": "pwd",
	"userName": "83c7358c94e3a24e11f0fde1cbf5d559_1",
	"v": "5.6.0"
}

new_dict = copy.deepcopy(reply_param_dict)
new_dict.update(
    { "uuid": "04fb352acbdec4a3"}
)

ordered_string = "".join(["{}{}".format(key, new_dict[key]) for key in sorted(new_dict.keys())])

print(ordered_string)

aes_string = aes_encrypt(ordered_string)
aes_string = base64.encodebytes(aes_string)
aes_string = aes_string.replace(b"\n", b"")
sign_string = md5(aes_string)
print(sign_string)





