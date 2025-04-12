# -*- coding: utf-8 -*-
# @Time    : 2024/4/29 20:01
# @Author  : 顾安
# @File    : 1.面向过程与面向对象代码对比.py
# @Software: PyCharm


# 遍历打印所有姓名-年龄
def print_info(names_temp, ages_temp):
    print("姓名:", names_temp, " 年龄:", ages_temp)


# name = "顾安"
# age = 20
#
# print_info(name, age)
#
#
# name = "安娜"
# age = 18
# print_info(name, age)
#
# name = "双双"
# age = 16
# print_info(name, age)

# name_list = ['顾安', '安娜', '双双']
# age_list = [20, 18, 16]

# print_info(name_list[0], age_list[0])
# print_info(name_list[1], age_list[1])
# print_info(name_list[2], age_list[2])

class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_info(self):
        print("姓名:", self.name, " 年龄:", self.age)


stu_1 = Student('顾安', 20)
stu_2 = Student('安娜', 18)
stu_3 = Student('双双', 16)

stu_1.print_info()
stu_2.print_info()
stu_3.print_info()

# 类支持在类的外部动态添加属性 函数不行
stu_2.address = "长沙"
print(stu_2.address)