from copy import deepcopy

list_1 = [['张三', '李四'], '王五', '赵六', '田七']

# 使用列表中的copy完成深拷贝
list_2 = deepcopy(list_1)

print(id(list_1))
print(id(list_2))

print('-' * 30)

print(id(list_1[0]))
print(id(list_2[0]))

print("-" * 30)
list_2[0][0] = '安娜'
print(list_1)
print(list_2)

"""
在内存当中完全拷贝了一份相同的数据结构和元素[可变元素]
    并且数据结构和元素中的引用与被拷贝的数据不一样
    
"""
