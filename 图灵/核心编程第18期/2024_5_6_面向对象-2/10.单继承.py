# 父类
# class A:
#     def __init__(self):
#         self.num = 10
#
#     def print_num(self):
#         print('这是一个方法:', self.num)

# 子类
# class B(A):
#     pass


# b = B()
# 打印父类属性
# print(b.num)

# 打印父类方法
# b.print_num()


"""
在继承中子类可以接收父类的任意属性和方法
    私有属性与私有方法是无法继承的
    
如果父类中存在我想要运行方法, 那么子类是不需要重新实现的, 直接使用父类的资源即可[属性和方法]
    代码复用
"""


class Animal:
    def eat(self):
        print('吃饭...')

    def drink(self):
        print('喝水...')

    def sleep(self):
        print('睡觉...')

class Dog(Animal):
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def info(self):
        print(f'姓名: {self.name}, 年龄: {self.age}')

dog = Dog("来福", 4)
dog.eat()
dog.info()

"""
子类继承父类之后如果没有符合相关场景的方法, 则可以在子类中单独实现
"""

