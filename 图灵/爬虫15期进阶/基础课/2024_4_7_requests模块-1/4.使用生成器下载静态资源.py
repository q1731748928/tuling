import requests

url = 'https://www.baidu.com/img/bd_logo1.png'

response = requests.get(url, stream=True)

with open('baidu_logo_2.png', 'wb') as f:
    for chunk in response.iter_content(chunk_size=1024):
        f.write(chunk)