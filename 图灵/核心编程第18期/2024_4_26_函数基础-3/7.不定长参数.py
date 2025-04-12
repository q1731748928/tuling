"""
不知道一个方法/函数中的参数个数
    *args: 可以接收任意数量的值, 并且将传递的多个值放入到一个元组中
        在声明不定长时需要在args单词的前面加*
        在打印args时不能在参数名称前加*

    **kwargs: 可以接收任意数量的值, 并且将传递的多个值打包成一个字典
        专门接收命名参数并打包成字典
            参数名为字典的key, 值为字典的value
            **kwargs必须在所有参数的末尾

            在打印kwargs时与args一致, 不能加**
"""


def work_1(*args):
    print(args)  # 元组类型


work_1(1, [2, 3], 4, 5, {6, 7}, 8)


def work_2(a, b, *args):
    print(f'a={a}, b={b}, args={args}')


work_2(1, [2, 3], 4, 5)


def work_3(a, b=2, *args):
    print(f'a={a}, b={b}, args={args}')


work_3(1, 2, 3)


# 一般将不定长参数放在所有参数类型之后
# 强烈不建议将不定长参数放在任意参数之前
# 普通参数 -> 缺省参数 -> 不定长
def work_4(a, *args, b):
    print(f'a={a}, b={b}, args={args}')


work_4(1, 2, b=3)


def work_5(a, b, c, *args, **kwargs):
    print(f'a={a}, b={b}, c={c},args={args}, kwargs={kwargs}')


work_5(1, 2, 3, 4, 5, 6, name='安娜', age=18)

# **kwargs必须在所有参数的最末尾
# def work_6(a, b, c, *args, **kwargs, d):
#     print(f'a={a}, b={b}, c={c},args={args}, kwargs={kwargs},d={d}')
#
#  work_6(1, 2, 3, 5, 6, name='安娜', 10)
