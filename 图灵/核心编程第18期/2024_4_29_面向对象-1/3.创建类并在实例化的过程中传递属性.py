class Dog:
    def __init__(self, name, type_):
        self.name = name # self.xxx 才是属性
        self.type_ = type_

    def eat(self):
        # 方法可以获取到类的属性并操作
        print(f'{self.name}正在啃骨头...')

# 创建出来的对象根据属性的不同是有区别的
dog_1 = Dog("来福", '哈士奇')
dog_1.eat()

dog_2 = Dog("旺柴", '阿拉斯加')
dog_2.eat()


"""
类在实例化的过程中可以传递属性
    def __init__(self, 属性1, 属性2):
        self.attr_1 = 属性1
        self.attr_2 = 属性2

所谓的类是专门创建属性和方法的: 一个物种的行为和属性通过类定义
所谓的对象是基于类提供的属性和方法产出的一个具体的物体: 这个物体具有类提供的行为和特征
"""