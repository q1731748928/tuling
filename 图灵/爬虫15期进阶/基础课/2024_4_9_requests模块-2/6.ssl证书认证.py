import requests

url = 'https://chinasoftinc.com/owa'
response = requests.get(url, verify = False) # ȡ��֤����֤
print(response)