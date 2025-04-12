def work(*args, **kwargs):
    print(args)
    print(kwargs)


# 定义一个字典, 将字典中的key传递给args, value传递给kwargs
info = {
    "name": "顾安",
    "age": 18,
    "address": "长沙"
}
# 第一个参数传递的是字典中的key
# 第二个参数传递的是字典中的键值对
work(*info, **info)