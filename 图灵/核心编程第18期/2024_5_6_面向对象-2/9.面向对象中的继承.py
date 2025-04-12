class Animal:
    def eat(self):
        print('正在吃饭...')


class Dog(Animal):  # 继承
    pass


dog = Dog()
dog.eat()


"""
如何让一个类继承另外一个类
    class Father:
        pass
        
    class Son(Father):
        pass
如果一个类的括号中有其他的类名, 则这个类我们称之为子类
在这个类的括号中的类名我们称之为父类
"""