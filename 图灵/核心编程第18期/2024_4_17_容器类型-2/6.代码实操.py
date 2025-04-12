# -*- coding: utf-8 -*-
# @Time    : 2024/4/17 21:00
# @Author  : 顾安
# @File    : 6.代码实操.py
# @Software: PyCharm


"""
有一个学校, 学校中有三个办公室,现在有八位老师等待办公室分配
需要使用随机分配的方式将八位老师分配到各个办公室中
"""
import random

# 办公室定义
offices = [[], [], []]

# 老师定义
names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

for name in names:
    random_num = random.randint(0, 2)  # 随机数中的结束位置包含自身
    offices[random_num].append(name)

office_index = 1
for office_names in offices:
    print(f'办公室编号为{office_index}的人数为: {len(office_names)}')
    office_index += 1
    for name in office_names:
        print(f'{name}',end=" ")
        print()
        print("-" * 30)