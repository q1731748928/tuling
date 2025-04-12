"""
self其实就是一个普通的参数
    在类执行过程中self会自动接收这个类的实例对象
"""

class Person:
    def __init__(self, name):
        self.name = name

    # self的本质是实例对象的地址
    def info(self):
        print(id(self))
        print(self.name)


p = Person("安娜")
p.info()

# p.__class__.info(p) # cpython底层运行机制

print('类对象地址: ', id(Person))
print('类对象地址: ', id(p.__class__))

"""
1.类在实例化的过程中创建了一个新的空间来保存实例对象
    空间存储了这个对象独有的一些属性值
    
2.类本身也会开辟一个空间来保存
    类的方法
    类属性
"""