# 除数不能为0, 如果为0则抛出ZeroDivisionError异常
def exp_exception(a, b):
    try:
        result = a / b
        return result
    except:
        print("程序异常...")

# 程序报错会导致整个py程序奔溃退出
print(exp_exception(4, 0))