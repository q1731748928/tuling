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


class Cat(Animal):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print(f'姓名: {self.name}, 年龄: {self.age}')  # 当前父类中没有定义实例属性


dog = Dog('旺柴', 2)
dog.info()

# 父类本身的实例对象运行info会报错
animal = Animal()
animal.info()

cat = Cat()
cat.info()

"""
1.查询当前Dog中是否存在info方法
2.如果不存在则查询Dog类的父类: Animal
3.如果Animal类中存在则直接运行
4.在运行info方法中需要获取两个实例属性, 当前两个实例属性在父类中是否存在? 不存在
5.程序运行成功, 并且打印了在info方法中的两个参数的值, 则证明在运行的过程中self指向的是子类的实例对象

我现在想要对上面的类进行功能的拓展, 那么需要在子类中添加方法
    1.如果在父类中添加了方法, 并且当前这个方法需要使用一些实例属性, 那么可能会造成一些错误
    2.如果需要运行以上代码的info方法, 那么建议写入到子类中


在继承环境中的设计原则: 
    在拓展功能时需要将功能写入到子类中, 如果将方法写入到父类中则影响范围太大
"""
