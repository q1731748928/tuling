# 字符串对象, 对象是具有自己的属性和方法的
str_data = 'abccc'
print(str_data.find('b'))

# 统计写入的字符在字符串中出现的次数
print(str_data.count('c'))
# 字符替换
my_str_1 = "welcome to www.tulingxueyuan.com"
# 参数1: 旧字符, 参数2: 替换字符, 参数3: 替换次数
print(my_str_1.replace("w", "W", 2))
my_str2 = my_str_1.replace("w", "W", 2)
print(my_str_1, my_str2)


print(my_str_1.replace("d", "z", 2)) # 替换的字符不存在不会报错, 返回原有的字符串数据
# print(my_str.replace("d", 3, 2)) # 会报错, 参数1和参数2有类型要求, 必须是str

# 字符串分割
my_str = "welcome to www.tulingxueyuan.com"
print(my_str.split(" "))
print(my_str.split(" ", 1))
my_str = "welcome-to-www.tulingxueyuan.com"
print(my_str.split("-"))

# 判断是否以指定的字符串开头
print(my_str.startswith("welcome"))
print(my_str.startswith("wElcome"))

# 判断是否以指定的字符串结尾
my_str = "WELCOME to www.tulingxueyuan.com"
print(my_str.lower())
print(my_str.upper())

my_str = "   welcome to www.tulingxueyuan.com   "
print(my_str)
print(my_str.strip())

# 字符串分割: partition
print(my_str.strip().partition(".")) # 以第一个查询到的字符作为分割点

# 将多行字符串分割, 以行为单位
my_str = """welcome to www.tulingxueyuan.com
thank you
good good study day day up
"""
print(my_str.splitlines())

# 判断字符串中是否都是字母或者汉字
my_str = "abc123"
print(my_str.isalpha())
my_str = "abc"
print(my_str.isalpha())

# 判断字符串中是否只有正整数, 浮点数返回的是false
my_str = "abc123"
print(my_str.isdigit())
my_str = "123"
print(my_str.isdigit())


# 判断字符串中是否只包含数字或字母
my_str = '123abc'
print(my_str.isalnum())
my_str = '123abc-'
print(my_str.isalnum())


# 字符串拼接
my_str = '-'
str_list = ['welcome', 'to', 'changsha']
print(my_str.join(str_list)) # join方法接收的数据类型是一个列表


# encode 字节编码
my_str = 'abc'
print(my_str.encode()) # bytes数据类型
my_byte = my_str.encode()
print(my_byte.decode()) # 将字节转为字符串