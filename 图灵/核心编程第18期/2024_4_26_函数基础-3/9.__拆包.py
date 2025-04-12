# -*- coding: utf-8 -*-
# @Time    : 2024/4/26 21:26
# @Author  : 顾安
# @File    : 9.**拆包.py
# @Software: PyCharm


info = {
    "name": "顾安",
    "age": 18,
    "address": "长沙"
}


def work(name, age, address):
    print(f'{name}, {age}, {address}')


# **可以拆字典中的value
work(**info)