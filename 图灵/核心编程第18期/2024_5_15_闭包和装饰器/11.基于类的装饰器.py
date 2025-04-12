# class Person:
#     # 如果使用类似函数调用的方式运行一个类的实例对象则会触发__call__方法运行
#     def __call__(self, *args, **kwargs):
#         print('这是类中的魔术方法: __call__')
#
#
# p = Person()
# p.__call__()

class Logging():
    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        print(f'被检测的函数为: {self.func.__name__}')
        print(args, kwargs)
        self.func(*args, **kwargs)


@Logging
def work(name, gender):
    print('被检测的函数任务...', name, gender)


# 不用语法糖的形式
# log = Logging(work)
# log()

# 使用语法糖的形式
work('双双', gender='女')
