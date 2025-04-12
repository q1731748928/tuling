def work(a, b, c=100, d=200):
    print(f'a={a}, b={b}, c={c}, d={d}')


work(11, 22)
work(11, 22, c=33)
work(11, 22, 33, 44)
work(11, 22, c=33, d=44)


# work(c=11, d=22)
# work(c=11, d=22, 33, 44) # 普通传参方式必须在命名参数方式之前
