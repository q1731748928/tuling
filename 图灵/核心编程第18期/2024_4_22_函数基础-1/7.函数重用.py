# -*- coding: utf-8 -*-
# @Time    : 2024/4/22 21:44
# @Author  : 顾安
# @File    : 7.函数重用.py
# @Software: PyCharm


def test():
    num = 100
    num += 1
    print("在test函数中num=%d" % num)


test()
test()  # 第二次运行是在函数的第一行重新运行


