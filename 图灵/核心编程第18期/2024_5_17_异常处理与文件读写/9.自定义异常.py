# 自定义异常类
class LoginError(Exception):
    def __str__(self):  # print方法会触发__str__魔术方法
        return '用户名或密码错误...'


name = 'admin'
password = '123'

try:
    if name == 'abc' and password == '123':
        print('登录成功')
    else:
        raise LoginError
except LoginError as e:
    print("程序异常:", e)


"""
总结:
    try:
        执行的代码
    except 异常类型:
        要执行的代码
    else:
        程序如果没有出现异常错误则要执行的代码
    finally:
        无论程序是否出现错误都一定会执行的代码
"""