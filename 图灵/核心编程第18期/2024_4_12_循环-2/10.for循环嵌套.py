# -*- coding: utf-8 -*-
# @Time    : 2024/4/12 21:26
# @Author  : 顾安
# @File    : 10.for循环嵌套.py
# @Software: PyCharm

# 目前暂时没讲到列表
int_list = [
    [1, 2, 3],
    [4, 5, 6],
]

# 使用for循环嵌套的方式可以获取到稍微复杂的数据结构
for temp in int_list:
    for i in temp:
        print(i)

