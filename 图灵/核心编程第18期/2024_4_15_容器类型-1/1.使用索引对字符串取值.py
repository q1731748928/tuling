str_data = "abcdefg"

# for i in str_data:
#     print(i)
#     break

# 字符串索引值是从0开始计算的
print(str_data[0])
print(id(str_data))
print(str_data[3])

# 在字符的最后一位是-1, 依次类推
print(str_data[-2])
print(str_data[-7])

# 在字符串索引取值时一定要确保索引存在
# 如果写入的索引值不存在则报错: 索引下标越界
print(str_data[7])

