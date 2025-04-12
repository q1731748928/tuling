def exp_exception(a, b):
    try:
        result = a / b
        return result
    # 指定异常类型/异常类并输出异常原因
    except Exception as e:
        # 对于Exception, 只要是在python中内置的异常都能通过这个父类捕获
        print("程序异常:", e)

print(exp_exception(4, 0))


"""
异常语法
    try:
        你要执行的代码
    except 异常类型/Exception as e:
        出现代码异常时会执行当前代码: e代表出现异常的大致原因
"""
