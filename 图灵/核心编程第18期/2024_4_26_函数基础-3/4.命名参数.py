"""
1.缺省参数需要在声明函数时创建
2.命名参数需要在调用函数时使用
"""


def print_info(name, age=18):
    print(name, age)

# 调用函数时传递的参数是指定了参数名称
print_info(age=20, name='夏洛') # 命名参数
