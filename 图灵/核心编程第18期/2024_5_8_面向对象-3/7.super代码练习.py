class Father:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_attr(self):
        print(f'{self.name}', f'{self.age}')


class Son(Father):
    def __init__(self, name, age, college):
        super().__init__(name, age)
        self.colleage = college

    def print_attr(self):
        print(f'{self.name}', f'{self.age}', f'{self.colleage}')


class GrandSon(Son):
    def __init__(self, name, age, college, address):
        super().__init__(name, age, college)
        self.address = address

    def print_attr(self):
        print(f'姓名: {self.name}', f'年龄: {self.age}', f'学历: {self.colleage}', f'地址: {self.address}')

grand_son = GrandSon('夏洛', 20, '本科', '长沙')
grand_son.print_attr()


"""
在子类中补齐父类的参数值, 使用的是super方法完成
    补参数的过程中需要注意父类的参数位置
"""