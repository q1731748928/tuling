str_data = "abcdefg"


print(str_data[0] + str_data[1] + str_data[2])
print(str_data[:5:2])
# 切片取值需要传递起始位置与结束位置, 并且用法与range类似, 结束位置不包含自身
print(str_data[0:3]) # 在中括号的冒号表示的是开启范围取值
print(str_data[:3]) # 切片语法默认的起始位置为0
print(str_data[4:6])
print(str_data[1:])
print(str_data[1:-1]) # -1代表最后一位, 但是结束位置不包含自身


# 在切片中加入步长, 非连续范围
# 隔一个字符取一个字符
print(str_data[0::2])
print(str_data[::2])
print(str_data[1:4:3])

# 如何将字符串进行倒序打印
# -1步长是从右到左取值
print(str_data[::-1])

# 倒序取值要注意取值方向: 从右到左
print("倒序截取结果:", str_data[1:6:-1])
print("倒序截取结果:", str_data[4:0:-1])

# 使用切片获取字符串整体数据
# 切片默认步长为1
print(str_data[::])
