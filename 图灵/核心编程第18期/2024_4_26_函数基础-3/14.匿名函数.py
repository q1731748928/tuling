"""
匿名函数是否需要掌握
    基本不需要, 匿名函数可以完成的功能普通函数也可以

匿名函数主要用于其他函数的参数
"""


add_num = lambda a, b: a + b # 因为没有函数名, 所以无法在内存中找到这个函数的地址
print(add_num(1, 2))
print(id((add_num)))