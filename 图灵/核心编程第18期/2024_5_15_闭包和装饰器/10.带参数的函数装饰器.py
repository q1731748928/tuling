"""
通过装饰器完成对一个任务的debug检测, 并且打印出当前的检测等级
    info
    warning
    error
"""


def logging(level):
    def wrapper(func):
        def inner_wrapper():
            print(f'{level}: 检测的函数为: {func.__name__}')
            func()  # 运行被检测的函数

        return inner_wrapper

    return wrapper


# @logging("普通日志等级") == wrapper_func == logging("普通日志等级")
# wrapper_func(work)
@logging("普通日志等级")
def work():
    print('被检测的函数任务...')


work()

# wrapper_func = logging("普通日志等级")
# inner_wrapper_func = wrapper_func(work)
# inner_wrapper_func()
