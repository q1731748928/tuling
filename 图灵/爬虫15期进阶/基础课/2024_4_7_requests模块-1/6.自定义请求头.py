import requests

# 声明请求网站地址
url = 'https://www.baidu.com'

# 自定义请求头
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
}

# 访问指定地址
response = requests.get(url,headers=headers)
print(response.content.decode())

print("------------------------------")

print('请求头信息:', response.request.headers)

