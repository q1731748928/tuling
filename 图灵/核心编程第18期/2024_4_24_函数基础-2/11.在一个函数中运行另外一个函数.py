def test_1():
    print(1)


def test_2():
    print(2)
    test_1() # 嵌套调用: 在一个函数中运行其他函数


test_2()