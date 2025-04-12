import requests

url = 'https://www.4399.com/'

# response = requests.get(url)
# response.encode = 'gbk'
# print(response.text)

response = requests.get(url).content
print(response.decode('gbk'))

"""
text:
    根据网站的响应头推测可能的编码类型，但是不可靠
    所以可以自己指定编码集
"""

"""
    当前方法返回的数据类型是字节，没有编码集，所以可以直接解码成字符串
    但是在decode解码的过程中需要指定页面原有的编码集
"""
