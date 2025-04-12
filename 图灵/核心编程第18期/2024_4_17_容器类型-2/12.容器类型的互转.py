str_data = 'abcdef'
str_list = list(str_data)
print(str_list)

str_set = set(str_list)
print(str_set)

str_tuple = tuple(str_set)
print(str_tuple)

# 无法转换
str_data = str(str_tuple)
print("字符串:", str_data)

