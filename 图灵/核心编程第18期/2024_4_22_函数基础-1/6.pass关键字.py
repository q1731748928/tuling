"""
用来在代码块中占位的
"""

# for i in range(10):
#     # 代码块必须有代码存在
#     pass  # 用于占位, 什么都不做, pass本身没有任何含义, 单纯用于代码占位


# def test():
#     pass  # 防止代码块无代码而产生报错


# 定义了4个函数
def add_2_nums():
    print("接下来要进行加法操作...")
    num1 = input("请输入第1个数：")
    num2 = input("请输入第2个数：")
    print("%s+%s=%d" % (num1, num2, int(num1) + int(num2)))


def min_2_nums():
    print("接下来要进行减法操作...")
    num1 = input("请输入第1个数：")
    num2 = input("请输入第2个数：")
    print("%s-%s=%d" % (num1, num2, int(num1) - int(num2)))


def mult_2_nums():
    print("接下来要进行乘法操作...")
    num1 = input("请输入第1个数：")
    num2 = input("请输入第2个数：")
    print("%s*%s=%d" % (num1, num2, int(num1) * int(num2)))


def div_2_nums():
    print("接下来要进行除法操作...")
    num1 = input("请输入第1个数：")
    num2 = input("请输入第2个数：")
    print("%s/%s=%d" % (num1, num2, int(num1) / int(num2)))


# 分别调用函数
add_2_nums()
