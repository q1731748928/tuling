class A:
    def work_1(self):
        print("当前方法是类A的方法...")


class B(A):
    def work_2(self):
        print("当前方法是类B的方法...")


b = B()
b.work_1()
b.work_2()

"""
解释器会在类B中查询是否存在方法work_1
    如果当前的work_1方法在类B中不存在, 向上查找: 查询的是继承的父类中的方法
在类B中查询是否存在work_2, 如果存在则直接运行, 无需查找
    
    就近原则
"""
