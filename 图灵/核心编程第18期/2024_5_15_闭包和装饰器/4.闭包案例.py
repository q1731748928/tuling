# 装饰器是基于闭包
# @classmethod
# @classmethod
# @property

def add(number):
    def innder_func(in_number):
        return number + in_number
    return innder_func


add_func = add(10)
print(add_func(20))