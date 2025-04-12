def counter(number = 0):
    def add_number(): # 内部函数获取外部函数的参数只有读取权限
        nonlocal number
        number += 1
        print(number)

    return add_number

"""
global作用于全局变量
nolocal作用于内部函数操作外层函数的参数
"""

add_func = counter()
add_func()