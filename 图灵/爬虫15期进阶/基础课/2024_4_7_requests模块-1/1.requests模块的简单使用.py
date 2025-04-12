import requests

# 声明请求网站地址
url = 'https://www.baidu.com'

# 访问指定地址
response = requests.get(url)
print(response)

# 响应对象的使用
print('响应状态码:', response.status_code)  # 状态码：可以用作于响应对象状态的判断
print('字节数据:', response.content)  # 字节类型
print('字符串数据:', response.text)  # 字符串类型，直接获取页面数据中文会有乱码问题
print("正常页面数据:", response.content.decode())

print('网站响应头:', response.headers)
print('网站请求头:', response.request.headers)
print('网站cookie信息:', response.request.headers.get('cookies')) # 默认网站请求头没有设置cookie，所以返回None
print('网站响应头cookie信息:', dict(response.cookies))
print('请求的网站地址:', response.url)
