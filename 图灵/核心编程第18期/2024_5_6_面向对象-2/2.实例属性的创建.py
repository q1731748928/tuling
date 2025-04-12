class Person:
    # def set_attr(self, name, age):
    #     self.name = name
    #     self.age = age
    def __init__(self, name, age):
        print('init方法被运行了...')
        self.name = name
        self.age = age


p1 = Person("安娜", 20) # 如果使用的是__init__方法 则需要在实例化过程中将实例属性的值传递过去
# 当前创建实例属性的方式需要自己手动去调用实例方法
# p.set_attr("安娜", 20)
print(p1.name, p1.age)

p2 = Person("双双", 21)
print(p2.name, p2.age)


"""
1.如果使用__init__方法则需要在实例化的过程中传递参数 
2.如果使用__init__则无需手动调用__init__方法, 初始化方法会自动运行
3.__init__方法只会被运行一次[实例化过程如果只有一次那么__init__只会被运行一次]: 如果创建多个实例对象则会运行多次
"""




