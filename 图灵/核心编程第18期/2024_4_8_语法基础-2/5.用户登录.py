name = input('请输入姓名:')
password = input('请输入密码:')


# 在计算机本地存储了这个用户之前创建的账号信息
local_name = '夏洛'
local_password = 123456

# 逻辑判断: 暂时没讲到,目前当作了解
if local_name == name and local_password == password:
    print('登录成功...')
else:
    print('登录失败...')


# input接收到的所有的数据类型都是字符串
print(type(password))