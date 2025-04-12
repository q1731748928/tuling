"""
使用input获取一名学生的身高
    判断当前身高是否大于170
        如果大于则打印可以进入篮球队
        否则打印不能进入篮球队
"""
height = input("请输入身高:")

if float(height) > 170:
    print('可以进入')
else:
    print('不符合要求...')