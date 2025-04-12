from collections import OrderedDict # 有序字典
person = {
    'name': '安娜',
    'age': 18,
    'gender': '女',
}

del person['gender']
print(person)

# 清空字典
# person.clear()
# print(person)

int_list = [1, 2, 3, 4]
int_list.clear()
print(int_list)

# 弹出最后一个键值对
data = person.popitem()
print(data)

# pop 根据key弹出值, 弹出后键值对不存在
data = person.pop('name')
print(data)
print(person)