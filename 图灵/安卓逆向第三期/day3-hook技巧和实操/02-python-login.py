# -*- coding: utf-8 -*-
import time
import requests
import base64
from Crypto.Cipher import DES
from Crypto.Util.Padding import pad
import hashlib
from Crypto.Util.Padding import unpad

class DuDuNiu(object):
    def __init__(self):
        self.username = "15888888888"
        self.password = "123456"
        self.time_string = str(int(time.time() * 1000))
        self.headers = {
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.2; SM-G9810 Build/QP1A.190711.020)'
        }
        self.key = hashlib.md5('65102933'.encode('utf-8')).digest()[:8]

        self.iv = '32028092'.encode('utf-8')

    def get_login_params(self):
        items = {
            'equtype': 'ANDROID', 'loginImei': 'Android354730613429558', 'timeStamp': self.time_string,
            "userPwd": self.password, "username": self.username
        }
        content = ''
        for keys in items:
            content += f"{keys}={items[keys]}&"
        append = "sdlkjsdljf0j2fsjk"
        content += f"key={append}"
        print(content)
        sign = hashlib.md5(content.encode('utf-8')).hexdigest().upper()
        print("sign参数:", sign)
        items['sign'] = sign
        content = str(items).replace(' ', '')
        print(content)
        encrypt_string = self.des_encrypt(str(content))
        print("login参数:", encrypt_string)
        return encrypt_string

    def des_encrypt(self,data):
        des = DES.new(self.key, DES.MODE_CBC, self.iv)
        padded_data = pad(data.encode('utf-8'), des.block_size)
        encrypted_data = des.encrypt(padded_data)
        return base64.b64encode(encrypted_data).decode('utf-8')

    def des_decrypt(self,content):
        des = DES.new(self.key, DES.MODE_CBC, self.iv)
        encrypted_data = base64.b64decode(content)
        decrypted_data = des.decrypt(encrypted_data)
        return unpad(decrypted_data, des.block_size).decode('utf-8')

    def login(self):
        login_url = 'http://api.dodovip.com/api/user/login'
        params = {"Encrypt": self.get_login_params()}
        login_response = requests.post(url=login_url, headers=self.headers, json=params)
        login_result = str(login_response.text)
        print("login响应:", login_result)
        login_result = self.des_decrypt(content=login_result)
        print(login_result)

    def runs(self):
        self.login()

if __name__ == '__main__':
    obj = DuDuNiu()
    obj.runs()
