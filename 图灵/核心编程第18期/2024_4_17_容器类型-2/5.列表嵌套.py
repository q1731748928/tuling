school_names = [
    ['北京大学', '清华大学'],
    ['南开大学', '天津大学', '天津师范大学'],
    ['山东大学', '中国海洋大学']
]

print(school_names[0][1])
print(school_names[1][2])

# 列表对象中提供了一个index方法, 可以返回你传递的元素的索引值
# index方法只是针对于一维列表
str_list = ['a', 'b', 'c']
print(str_list.index("c"))
