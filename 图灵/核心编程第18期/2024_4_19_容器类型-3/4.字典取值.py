person = {
    'name': '安娜',
    'age':  18,
    'gender': '女',
}

# 如果使用中括号取值的方式获取不存在的key则会发生报错
# print(person['address'])

# 字典对象中提供的get方法也可以获取key对应的值, 如果key不存在则返回None并且不报错
# get方法的第二个参数是用来设置默认值的, 如果不设置则返回None值
print(person.get('address', 'key不存在...'))
print(person.get('name', 'key不存在...'))