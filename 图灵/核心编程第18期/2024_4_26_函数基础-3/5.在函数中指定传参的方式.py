# /: 禁止使用命名参数的方式完成参数传递(作用于前面)
# *: 必须使用命名参数的方式完成参数传递(作用于后面)
# def print_info(name, /, age, gender, address):
def print_info(name, age, gender, *, address):
    print(name, age, gender, address)


# print_info(name='夏洛', 18, '男', '长沙')
print_info('夏洛', 18, '男', address='长沙')
