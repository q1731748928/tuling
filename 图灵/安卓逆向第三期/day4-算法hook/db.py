# -*- coding: utf-8 -*-
import base64
from hashlib import sha1
import hmac
def encrypt():
    # IiDRpzX1Q0QATYvjV0jrvITJN0A=
    aa = 'GET&%2Fapi%2Fv2%2Fmovie%2Frank_list&1714051031'
    key = 'bf7dddc7c9cfe6f7'
    text = hmac.new(key.encode(),aa.encode(),sha1).digest()
    print(text)
    print(base64.b64encode(text).decode())

encrypt()
