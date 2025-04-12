# -*- coding: utf-8 -*-
import time
from retrying import retry
num = 1

@retry(stop_max_attempt_number=3) # 允许程序报错并重试，可以设置最大重试次数
def test():
    global num
    print('num=', num)
    num += 1
    time.sleep(1)
    for temp in 100:
        print(temp)

try:
    test()
except Exception as e:
    print("程序异常：", e)