"""
return可以返回一个函数的结果
    如果创建了一个变量则可以将返回的结果赋值给这个变量

return也可以结束一个函数的执行
"""

def add_num(num_1, num_2):
    print('函数开始执行...')
    return num_1 + num_2
    print('函数即将执行完毕...') # 因为如果函数执行到return关键字则会终止函数, return之后的代码是永远不会被执行的

res = add_num(1, 2)
print(res)

