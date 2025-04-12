num = 100

def get_number():
    # 如果涉及到全局变量的修改
    # 那么必须在全局变量名称之前声明 global
    global  num
    num += 1
    print(num)


get_number()
print(num)

"""
global相当于给函数提供了修改全局变量的权限
"""