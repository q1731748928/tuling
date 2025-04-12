person = {
    'name': '安娜',
    'age':  18,
    'gender': '女',
}

print(person['name'])
print(person['age'])
print(person['gender'])


# 内置方法
# 获取所有的key
print(person.keys()) # 返回的对象类型是dict_keys, 当前类型可以强转成列表
# 获取所有的values
print(person.values())

# 获取所有的键值对
print(person.items()) # 返回的对象类型为：dict.items(), 是一种类似与列表嵌套元组的数据结构
for temp in person.items():
    for i in temp:
        print(i, end=' ')
    print()