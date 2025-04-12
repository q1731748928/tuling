"""
在python中私有属性的设置方式有两种
    self._属性名称: 没有语法限制, 主要通过下划线标识这是一个私有属性
    self.__属性名称: 有语法限制, 无法随意使用属性
"""


class Person:
    def __init__(self, name, age):
        """
        通过_下划线语法结构告诉你这是一个私有属性, 但是没有语法限制
        kwargs
        """
        self._name = name # 只能通过代码规则判断是否是一个私有属性
        self.__age = age
    def info(self):
        print(self._name)


p = Person('安娜', 18)
p._name = '双双'
p.info()

# print(p.__age)

# 大家不要这样去访问一个类的私有属性
print(p._Person__age) # cpython将私有属性的名字重新命名成了 _类名__属性名

p._Person__age = 20
print(p._Person__age)

"""
在设置__属性的过程中, cpython其实给这个属性重新命名了
    如果需要操作私有属性强烈建议在类中创建对应的方法去完成私有属性的操作
"""