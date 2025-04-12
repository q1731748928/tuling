# 案例1: 打印星星
i = 1
while i <= 5:
    j = 1
    while j <= i:
        print("* ", end='')
        j += 1
    print('')
    i += 1

# 案例2: 九九乘法表模版打印
# i = 1
# while i <= 5:
#     j = 1
#     while j <= i:
#         print('X*Y=Z',end=' ')
#         j += 1
#     print('')
#     i += 1

# 案例3: 将乘法表中的数字带入到模版中
i = 1
while i <= 5:
    j = 1
    while j <= i:
        print(f'{j}*{i}={j*i}', end=' ')
        j += 1
    print('')
    i += 1

