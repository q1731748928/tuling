import requests

# url = 'https://www.baidu.com/s?wd=哈士奇'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
}
#
# response = requests.get(url, headers=headers).content
# print(response.decode())

url = 'https://www.baidu.com/s'

kw = {
    'wd': '哈士奇'
}

# params：接收是查询字符串参数，参数的类型是字典
response = requests.get(url, headers=headers, params=kw)
print(response.content.decode())
print(response.url)