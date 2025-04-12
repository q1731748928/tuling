# 元组内部元素不允许修改
int_tuple = (1, 2, 3)
# int_tuple[1] = 4 修改报错
print(int_tuple)

"""
可以修改的类型
    list dict set
    
不能修改的类型
    tuple string int float bool
"""

"""
元组不能修改可以保证数据的安全性
"""

# 返回元素索引
print(int_tuple.index(3))
# 返回元素个数
print(int_tuple.count(3))