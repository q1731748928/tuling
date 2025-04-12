import requests
url = 'https://www.baidu.com/img/bd_logo1.png'

# 在网络中获取图片的二进制数据
response = requests.get(url)

# 将获取到的二进制数据写入到本地
with open('baidu_logo_1.png', 'wb') as f:
    f.write(response.content)