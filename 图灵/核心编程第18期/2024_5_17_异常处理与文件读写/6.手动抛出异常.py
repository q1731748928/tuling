# -*- coding: utf-8 -*-
# @Time    : 2024/5/17 20:35
# @Author  : 顾安
# @File    : 6.手动抛出异常.py
# @Software: PyCharm


# 手动抛出异常的作用不是故意让程序报错
# 而是相当于发送了一个信号, 这个信号如果被except监测到则执行except之下的代码段

try:
    raise NameError  # 语法异常
    print('123')
except NameError as e:  # 找不到
    print('程序异常:', e)

while True:
    try:
        pass
    except StopIteration as e:
        break
