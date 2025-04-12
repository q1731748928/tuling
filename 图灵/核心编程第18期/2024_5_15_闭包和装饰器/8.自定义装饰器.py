# 装饰器的代码结构和闭包结构类似
def debug(func):
    def wrapper():
        # 打印外层函数接收到的参数类型
        print(func.__name__)
        # 调用外部函数接收到的函数
        func()

    return wrapper


def work():
    print('这是测试函数...')


wrappder_func = debug(work)
wrappder_func()  # 运行的是内部函数

"""
1.运行了debug函数并传递了被装饰的函数work函数的地址, 返回了内部函数的引用并赋值给变量wrapper_func
2.使用wrappder_func()运行以上闭包内部函数
3.内部函数调用了外部函数中的参数值, 外部函数的参数值是一个函数地址, 运行本质是传递过来的函数本身
"""
