# -*- coding: utf-8 -*-
# @Time    : 2024/4/17 21:48
# @Author  : 顾安
# @File    : 11.集合的特征.py
# @Software: PyCharm


"""
1.集合中的元素是无序的
2.集合中的元素必须是唯一的
3.集合是可以修改元素的
"""

set_data = {'a', 'b', 'c', 'd', 'e', 'f'}
print(set_data)

int_set = {1, 2, 1, 3, 1, 3, 2, 4, 7, 7, 6, 5, 6, 5}  # 对重复的元素进行了去重
print(int_set)

# 集合中的元素是可以被修改的
int_set.add(10)
int_set.remove(10)
int_set.update(['1', '2', '3'])
print(int_set)
# 是否可以移除集合中的最后一个元素
int_set.pop()  # 随机删除,因为无法确定最后的元素
print(int_set)

# 集合中的数据类型必须是可哈希的: 不可变对象
"""
可哈希的是不可变对象
不可哈希的是可变对象
"""
data_set = {1, 2, 3, (1, 2, 3)}
print(data_set)

set_data = {1, 2, 3, 4, 5}
str_data = str(set_data)
print(str_data)
print(type(str_data))


