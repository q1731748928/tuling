def counter(number = 0):
    def add_number(): # 内部函数获取外部函数的参数只有读取权限
        nonlocal number
        number += 1
        print(number)

    return add_number


# 两个闭包返回的函数地址不一样
# 闭包与闭包之间是内存隔离的: 类似于实例对象
add_func_1 = counter(10)
add_func_2 = counter(20)
# print(id(add_func_1), id(add_func_2))

add_func_1()
add_func_2()

"""
总结:
    1.闭包的使用方式和面向对象中实例对象类似
    2.函数之间存在包含关系
    3.外层函数必须返回内部函数的引用
"""