int_set = {1, 2, 3, 4, 5, 6, 7, 8, 9}
print(int_set, type(int_set))

# 集合能否使用元素索引取值
# print(int_set[0]) 集合无法使用索引

# 集合能否完成元素迭代
for temp in int_set:
    print(temp)

# 集合能否使用切片的方式获取部分数据
# print(int_set[0:4]) 无法使用切片
