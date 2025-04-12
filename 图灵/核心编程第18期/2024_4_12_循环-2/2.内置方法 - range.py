# 使用for循环生成11个数字, 默认从0开始
# for i in range(11):
#     print(i)


# 使用for循环生成11个数字, 设置起始位置从1开始
# range方法的结束位置是不包含自身, 结束位置 - 1
# for i in range(1, 16):
#     print(i)

# 使用for循环获取非连续序列
"""
    步长为2 隔一个数字取值
    步长为3 隔两个数字取值
    步长为4 隔三个数字取值
"""
# for i in range(1, 16, 2):
#     print(i)

# 如果倒序输出则步长设置为-1
for i in range(16, 0, -1):
    print(i)
