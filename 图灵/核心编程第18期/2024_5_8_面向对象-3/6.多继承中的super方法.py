class A:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_attr(self):  # 如果子类没有把父类中的参数补齐, 那么子类是无法运行当前方法的
        print(self.name, self.age)


class B(A):
    def __init__(self, name, age, address):
        # 需要在子类中运行父类的初始化方法
        super().__init__(name, age)  # 检测继承的父类
        print(super())
        self.address = address


b = B('安娜', 19, '长沙')
b.print_attr()
"""
对于初始化方法, 在子类重写的过程中需要首先调用父类的初始化方法
    如果继承的父类存在初始化方法, 需要在子类中重新运行并补上父类需要的参数
        1.父类名.__init__(self, 参数1, 参数2)
        2.super().__init__(参数1, 参数2) # 建议在多继承中使用
"""
