"""
字符串格式化输出一共有三种方式
    占位符
    f表达式
    字符串中的内置方法: format
"""

age = 18
name = '安娜'

# str_data_1 = '我是%s, 我的年龄为%d岁' % (name, age)
# print(str_data_1)

# format是字符串这个数据结构给我们提供的一个格式化输出的方法, 占位符是一个大括号
# str_data_2 = '我是{}, 我的年龄为{}岁'.format(name, age)
# print(str_data_2)

# str_data_3 = f'我是{name}, 我的年龄为{age}岁'
# print(str_data_3)

# .2f: 占位符点值,并保留两位小数, 默认有四舍五入
float_data = 3.146
str_data_4 = '圆周率的值为: %.2f' % (float_data)
print(str_data_4)
