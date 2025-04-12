"""
在类中如果定义了私有方法则这个方法不能在类的外部使用
"""


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __info(self):
        print(self.name, self.age)

    def print_info(self):
        self.__info()


p = Person('安娜', 18)
p._Person__info()  # 这种方式是可以运行的, 强烈不建议这样去做


"""
私有方法与私有属性的特征
    在名称之前添加 __
"""
