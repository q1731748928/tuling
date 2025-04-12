"""
多态是一种思维, 不是一种编程技术
    一个功能的多种形态

    如何构成多态:
        1.继承关系
        2.有重写
"""


class Person:
    def info(self):
        print('这是父类: 人')


class AnNa(Person):
    def info(self):
        print('这是子类, 安娜')

# 完成了多态
