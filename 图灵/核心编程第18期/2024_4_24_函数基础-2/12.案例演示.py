"""
打印一条横线
    使用另外一个函数控制打印的横线次数
"""


def print_one_line():
    print("-" * 30)


def print_num_line(num):
    i = 0
    while i < num:
        print_one_line()
        i += 1


print_num_line(4)


"""
计算三个数的和, 并获取这三个数的平均值
"""
def add_num(abc, bed, caa):
    return abc + bed + caa

def avg_num(a, b, c):
    res = add_num(a, b, c)
    avg_result = res / 3
    return avg_result


print(avg_num(10, 17, 86))
