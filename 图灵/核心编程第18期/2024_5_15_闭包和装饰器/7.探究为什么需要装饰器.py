# 定义两个爬虫程序并且需要获取两个爬虫程序的消耗时间
# 第三方的同步爬虫包, 需要大家自己手动下载: pip install requests

import time
import requests


# 定义装饰器
def spider_time(spider_func):
    def wrapper():
        start_time = time.time()
        spider_func()
        end_time = time.time()
        print('自定义装饰计算的耗时结果:', end_time - start_time)

    return wrapper


@spider_time
def spider_baidu():
    url = 'https://www.baidu.com'
    response = requests.get(url)
    time.sleep(3)
    print(response.content.decode())


@spider_time
def spider_bing():
    url = 'https://www.bing.com'
    response = requests.get(url)
    time.sleep(5)
    print(response.content.decode())


spider_baidu()
spider_bing()


"""
通过以上案例发现使用装饰器可以减少代码重用
"""