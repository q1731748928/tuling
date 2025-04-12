"""
在定义的过程中, 可以给函数一些变量
    函数可以根据用户给定的一些变量完成一些简单的计算
形式参数可以理解为函数定义的一种没有具体的值的变量
    需要在函数的小括号中定义
"""

# 创建函数参数
def add_num(num_1, num_2): # 形式参数
    print(num_2 - num_1)

# add_num(10, 20)


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

def add_2_nums(num1, num2):
    print("接下来要进行加法操作...")
    # num1 = input("请输入第1个数：")
    # num2 = input("请输入第2个数：")
    print("%s+%s=%d" % (num1, num2, int(num1) + int(num2)))


# add_2_nums(50, 30)

def test(num1, num2):
    print(num1, num2)


test(1, 2)