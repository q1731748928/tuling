int_list = [1, 2, 3]

number = 2

# in是成员运算符, 可以判断一个元素是否在指定的迭代对象内
print(number in int_list)
print(number not in int_list)

if number in int_list:
    print('存在')
else:
    print("不存在")

str_list = ['a', 'a', 'b', 'c', 'a']
# 如果统计次数返回0则代表不存在
print(str_list.count("g"))  # 统计传递的元素在迭代对象内部出现的次数
