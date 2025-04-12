class A:
    def print_attr(self):
        print('这是类A的方法')


class B(A):
    # 重写
    def print_attr(self):
        print('这是类B的方法')


class C(A):
    pass


b = B()
b.print_attr()

a = A()
a.print_attr()

c = C()
c.print_attr()

"""
如果子类中存在了与父类相同名称的方法, 那么这种情况被称之为方法重写
    1.子类中的方法与父类中的方法名称相同

在今后编写项目的过程中发现父类中的方法不能满足要求则可以在子类中重写父类的方法
"""
