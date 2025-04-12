# 元组的定义
int_tuple = (1, 2, 3)
int_list = [1, 2, 3]
print(int_tuple)
print(type(int_tuple))
print(type(int_list))

# 元组访问
print(int_tuple[1])  # 元组的元素访问和列表是一致的

print("-" * 30)

# 迭代访问
for temp in int_tuple:
    print(temp)
