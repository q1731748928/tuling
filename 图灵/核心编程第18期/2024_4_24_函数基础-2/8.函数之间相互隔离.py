# -*- coding: utf-8 -*-
# @Time    : 2024/4/24 20:38
# @Author  : 顾安
# @File    : 8.函数之间相互隔离.py
# @Software: PyCharm


def test_1():
    num = 100


def test_2():
    # 当前num在test_1函数内部设置的
    # 当前test_2函数是无法访问test_1函数的内部代码
    print(num)


print(id(test_1))
print(id(test_2))
# test_1()
# test_2()



"""
函数与函数之间是互相隔离的
    无法使用一个函数访问另外一个函数内部中声明的资源
        变量、对象
"""
