class Loging:
    # 如果类本身有参数, 那么不要用构造方法接收被装饰的任务的地址
    def __init__(self, level):
        self.level = level

    def __call__(self, func):
        def wrapper(*args, **kwargs):  # 被装饰的任务自身有参数会被不定长接收
            print(f'[{self.level}]: 被检测的函数为: {func.__name__}')
            # 运行被装饰的任务
            func(*args, **kwargs)

        return wrapper

# @Loging(level='警告日志等级')
def work(name, gender):
    print('被检测的函数任务:', name, gender)

# work('双双', '女')

# 不用语法糖
log = Loging('警告日志等级')
wrapper_func = log(work)
wrapper_func('安娜', '女')