"""
在运行函数后可能会得到一个计算结果
    现在期望想要将函数得到的计算结果赋值给一个变量
        就想要将函数计算得到的结果返回出去
    return 关键字主要用于返回函数得到的结果
"""

def add_num(num_1, num_2):
    return num_1 + num_2

res = add_num(10, 20)
print(res)

print(add_num(30, 40)) # print获取到了这个函数所返回的结果并直接打印了
