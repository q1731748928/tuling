# -*- coding: utf-8 -*-
# @Time    : 2024/4/12 21:09
# @Author  : 顾安
# @File    : 7.在用户登录代码中显示密码不正确.py
# @Software: PyCharm


login_flag = False


# i = 3
#
# while i > 0:
#     password = input(f"请输入密码(还剩{i}次输入机会):")
#     if password == 'admin':
#         login_flag = True
#         break
#     i -= 1
#
# if login_flag:
#     print('密码正确...')
# else:
#     print('用户名或密码不正确...')


# i = 1
# while i <= 3:
#     print('这是一段测试信息...')
#     if i == 1:
#         print('调用了break...')
#         break # 如果存在break则不会执行本循环中的else代码
#     i += 1
# else:
#     print('我是else代码...')


# i = 1
# while i <= 3:
#     print('这是一段测试信息...')
#     # if i == 1:
#     #     print('调用了break...')
#     #     break # 如果存在break则不会执行本循环中的else代码
#     i += 1
# else: # 如果循环条件不成立则运行else代码
#     print('我是else代码...')


i = 3
while i > 0:
    password = input(f"请输入密码(还剩{i}次输入机会):")
    if password == 'admin':
        print('登录成功...')
        break
    i -= 1
else:
    print('三次登录机会已用完, 请明天重试...')