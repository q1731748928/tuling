import hashlib
import json

import requests
from Crypto.Cipher import AES
from requests_pkcs12 import Pkcs12Adapter


def decrypt(data, key):
    md5 = hashlib.md5(str(key).encode("UTF-8")).hexdigest()
    key = md5[8:24]
    iv = '0809060801020609'
    enc_data = bytearray.fromhex(data)
    aes = AES.new(key.encode(), AES.MODE_CBC, iv.encode())
    decrypted = aes.decrypt(enc_data).strip()
    text = decrypted.decode()
    return text


headers = {
    "User-Agent": "MztApp For Android Version/3.7.5",
    "Charset": "UTF-8",
    "Accept": "*/*",
    "Host": "api.iimzt.com"
}
url = "https://api.iimzt.com/app/list/posts"
params = {
    "type": "post",
    "order": "tax",
    "tax": "post_tag",
    "tid": "60",
    "paged": "1"
}
session = requests.session()
session.mount(url,Pkcs12Adapter(pkcs12_filename='client_keystore__2024_05_05_14_46_47_73.p12', pkcs12_password="hooker"))
# 使用session调用get/post方法
response = session.get(url, headers=headers, verify=False)
data = json.loads(response.text)['data']
key = json.loads(response.text)['last']
text = decrypt(data, key)
json_str = text.encode('utf8').decode('unicode_escape')
print(json_str)