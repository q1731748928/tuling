import requests

url = 'https://chinasoftinc.com/owa'
response = requests.get(url, verify = False) # 取消证书认证
print(response)