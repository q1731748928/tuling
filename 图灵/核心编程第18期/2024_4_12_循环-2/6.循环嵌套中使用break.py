# -*- coding: utf-8 -*-
# @Time    : 2024/4/12 20:57
# @Author  : 顾安
# @File    : 6.循环嵌套中使用break.py
# @Software: PyCharm


i = 0
while i < 3:
    print("i=%d" % i)
    i += 1
    j = 0
    while j < 3:
        print("---")
        j += 1
        break  # 只会影响到自身所在的循环,不会影响到外层循环
