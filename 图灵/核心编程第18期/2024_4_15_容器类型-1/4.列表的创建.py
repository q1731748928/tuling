# 存储三名同学的姓名
stu_1 = '安娜'
stu_2 = '双双'
stu_3 = '夏洛'

# 列表中存储的值我们称之为元素
stu_list = ['安娜', '双双', '夏洛']

# 索引取值
print(stu_list[0])
print(stu_list[2])

# 切片取值
print(stu_list[1:]) # 返回的类型依然是一个列表
print(stu_list[::-1])

# 一般对列表进行循环打印取值基本上都是使用for循环
for name in stu_list:
    print(name)

print()

length = len(stu_list)
i = 0
while i < length:
    print(stu_list[i])
    i += 1
