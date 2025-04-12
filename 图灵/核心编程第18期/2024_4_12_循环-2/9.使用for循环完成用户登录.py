# -*- coding: utf-8 -*-
# @Time    : 2024/4/12 21:23
# @Author  : 顾安
# @File    : 9.使用for循环完成用户登录.py
# @Software: PyCharm


for i in range(3, 0, -1):
    password = input(f'请输入密码(还剩下{i}次输入机会): ')
    if password == 'admin':
        print('登录成功...')
        break
else:
    print('三次登录机会已用完, 请明天重试...')
