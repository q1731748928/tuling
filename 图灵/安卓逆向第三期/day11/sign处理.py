# -*- coding: utf-8 -*-
import base64
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5 as Cip_v15

def rsa_encrypt(text):
    key = '''-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDP2SYzFccMwZxC05Uxwei6ijFcOoJOHPHBK2oRX6ZVDSZMxb7ghH1HU63abxzcW/+OC845OlxC5XZA9AZtfgEHdYNpEGyaCHE1zu4LsWiovTLpYhV1Ya9Ks/6ynUecn1P8D3OAKaCuD3DLlawLCRmWlc2EpnwYuJIrEf/OnB7A2QIDAQAB
    -----END PUBLIC KEY-----
    '''

    rsakey = RSA.import_key(key)
    cipther = Cip_v15.new(rsakey)
    sign = base64.b64encode(cipther.encrypt(text.encode('utf-8'))).decode('utf-8')
    print(sign)
    return sign
# data里面的参数
print(rsa_encrypt('yidian6.2.3.01zqnwx9al_1715690312155_1028031700'))

