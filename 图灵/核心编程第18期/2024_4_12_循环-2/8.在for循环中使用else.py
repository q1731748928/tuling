# -*- coding: utf-8 -*-
# @Time    : 2024/4/12 21:20
# @Author  : 顾安
# @File    : 8.在for循环中使用else.py
# @Software: PyCharm


for i in range(5):
    print(f'i的值为: {i}')
    if i == 3:
        print('即将执行break...')
        break
else:
    print('我是else中的代码...')
