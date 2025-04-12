"""
1.无参数, 无返回值
2.无参数, 有返回值
3.有参数, 无返回值
4.有参数, 有返回值

"""


def test_1():
    pass
    # 如果在函数中没有使用return返回则cpython解释器默认返回None


def test_2():
    print("接下来要进行加法操作...")
    num1 = input("请输入第1个数：")
    num2 = input("请输入第2个数：")
    return int(num1) + int(num2)

def test_3(num_1, num_2):
    print(num_1 + num_2)

def test_4(num_1, num_2):
    return num_1 + num_2
