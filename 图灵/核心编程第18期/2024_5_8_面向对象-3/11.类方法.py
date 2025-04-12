class Person:
    name = '安娜'

    def __init__(self, gender):
        self.gender = gender

    @classmethod  # 类方法
    def play_game(cls):  # 静态方法无法访问类中的资源
        print(f'{cls.name}正在玩游戏...')


p = Person('女')


"""
1.类方法可以使用@classmethod声明
2.类方法可以访问到类属性
3.类方法的第一个参数是cls, cls指向的是这个类本身: 类对象
4.类方法可以直接被类对象调用
5.类方法无法直接访问实例属性
"""