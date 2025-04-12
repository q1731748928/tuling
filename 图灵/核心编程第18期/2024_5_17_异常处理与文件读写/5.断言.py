"""
断言:
    在执行某段代码时可以判断这段代码的返回值是否符合自己的要求
        如果不符合则可以手动抛出异常
"""
import requests
url = 'https://www.baidu.com/user_name/key=abc'
response = requests.get(url)
assert response.status_code == 200, StopIteration # 如果返回的状态码不是200则抛出StopIteration异常

