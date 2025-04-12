"""
在类中的方法一般是实例方法
    方法的第一个参数为self
"""


class Person:
    def __init__(self, name):
        self.name = name

    @staticmethod # 加上了这个装饰器则方法中无需使用self
    def play_game(): # 静态方法无法访问类中的资源
        print('正在玩游戏...')

# 运行静态方法
Person.play_game()

person = Person('安娜')
# person.play_game()
person.__class__.play_game()

"""
静态方法的特点:
    1.如果一个类中的方法无需使用类中的资源[类属性、实例方法、类方法], 则可以将这个方法设置为静态方法
    2.静态方法可以被类对象或者实例对象调用
    3.实例方法可以完成静态方法的所有功能
"""