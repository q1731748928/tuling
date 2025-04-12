def work():
    print('这是work方法...')

function_obj = work

function_obj()

# 引用地址相同
print(function_obj is work)