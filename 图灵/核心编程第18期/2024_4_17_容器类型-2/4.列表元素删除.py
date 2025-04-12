movie_names = ['加勒比海盗', '骇客帝国', '第一滴血', '指环王', '霍比特人', '速度与激情']

print("删除之前的结果:", movie_names)

# 可以删除任意数据类型
del movie_names[2]
print("删除之后的结果:", movie_names)

# 可以使用列表中内置的方法来移除元素
movie_names.pop() # 默认删除列表的最后一位元素
print(movie_names)

# 可以在pop方法中传递列表元素的索引指定移除
movie_names.pop(0)
print(movie_names)

# pop方法可以将移除的元素返回出去并使用一个变量进行接收
movie_name = movie_names.pop(1)
print(movie_names)
print(movie_name)

# remove: 根据元素名称删除元素
movie_names = ['霍比特人', '霍比特人', '霍比特人', '骇客帝国']
movie_names.remove("霍比特人") # remove会删除出现的第一个值
print(movie_names)
