i = 3
while i > 0:
    password = input(f"请输入密码(还剩{i})次机会: ")
    if password == "admin":
        print('输入正确...')
        break
    else:
        print('密码输入有误,请重新输入...')
        i -= 1
else:
    print('账号冻结...')
# 上面的代码改写成for循环
