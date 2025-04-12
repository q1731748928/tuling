import time


def func_time(func):
    def wrapper():
        start_time = time.time()
        func()
        end_time = time.time()
        print('自定义装饰计算的耗时结果:', end_time - start_time)

    return wrapper


@func_time
def work():
    print('这是我们自定义的耗时任务...')
    time.sleep(5)
    print('耗时任务结束...')


# 1.运行装饰器外层函数: 传递是一个需要计时的函数的引用
# func_obj = func_time(work)

# 2.根据接收到的函数引用完成函数调用
# func_obj = wrapper
# func_obj()

# 3.因为wrapper代码内部运行了func(): func == work

"""
语法糖运行方式
"""
work()

