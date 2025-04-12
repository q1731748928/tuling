data_tuple = ('顾安', 3.14, True, [1, 2, 3])
print(id(data_tuple[3]))

# 当前修改的是元组内部列表中的元素值
data_tuple[3][1] = 0  # 在元组中修改列表内部的值是可以的
print(id(data_tuple[3]))
print(data_tuple)

"""
元组不能修改的值是当前元素在内存中的引用
"""

int_tuple = (1, 2, 3, 4, 5)
new_tuple = int_tuple[0:4] # 创建了一个新的元组, 将获取的范围元素存储到这个新的元组中
print(new_tuple)
print(int_tuple)

print(id(int_tuple), id(new_tuple))