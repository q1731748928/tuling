"""
在类中可以创建不同类型的属性
    方法同理
在类中最常见的属性和方法是实例属性和实例方法
    self
"""


class Person:
    # 类在实例化过程中会自动运行__init__方法, 无需手动调用
    def __init__(self, name, age, gender):
        # 实例属性: self.前缀不能删除
        self.name = name
        self.age = age
        self.gender = gender

    # 如果类中的首个参数名称为self, 则这个函数一定是一个实例方法
    def info(self):
        print(f'{self.name}, {self.age}, {self.gender}')


p = Person('安娜', gender='女', age=18)
p.info()


class Dog:
    # 使用普通实例方法创建实例属性
    # 如果使用普通实例方法创建属性则必须显式调用传参才行
    def set_attr(self, name, type_):
        self.name = name
        self.type_ = type_


dog = Dog()
dog.set_attr('旺财', '博美')

# 实例化对象可以直接打印实例属性
print(dog.name)
print(dog.type_)


# 使用实例对象动态创建属性
dog.sex = '公'
print(dog.sex)


"""
属性前加self.是实例属性
类中的方法第一个参数为self是实例方法
    实例属性一般用于存储数据
    实例方法一般用于执行特定的代码逻辑
"""