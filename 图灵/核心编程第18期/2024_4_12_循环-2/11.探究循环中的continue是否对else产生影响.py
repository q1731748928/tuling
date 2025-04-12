# -*- coding: utf-8 -*-
# @Time    : 2024/4/12 21:31
# @Author  : 顾安
# @File    : 11.探究循环中的continue是否对else产生影响.py
# @Software: PyCharm


for temp in range(1, 11):
    print(f'获取循环的值为: {temp}')
    continue # 影响下面的代码而不会影响其他的代码块
    print('-' * 30)
else:
    print('已经超出序列范围...')

"""
continue不会影响到循环中的else, 但是break会影响
"""


flag = False

for i in range(1, 11):
    if i % 2 == 0:
        print(i)
    else:
        continue # 如果在循环的过程中不符合条件则忽略

int_list = [0, 1, 2 ,3, 4]
for i in int_list:
    print(i)
else:
    print('列表中的元素到最后了...')


