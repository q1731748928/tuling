# 全局变量, 在文件中的任意函数都可以进行访问
num = 0
print(id(num))

def test_1():
    global num # 在函数内部操作全局变量必须声明global

    # 如果在没有声明global的情况下, 当前代码是在test_1函数内部重新声明了一个变量: num
    # num = 100
    print(id(num))
    print('test_1:', num)

def test_2():
    print('test_2:', num)

test_1()
test_2()