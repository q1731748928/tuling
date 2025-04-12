"""
字典中的key是唯一的
    如果定义中的key有重复,则最后出现的值会覆盖前一次出现的值
"""

stu_info = {
    'name': '安娜',
    'name': '双双'
}
print(stu_info)

stu_info = [
    {'name': '安娜'},
    {'name': '双双'}
]

for stu in stu_info:
    print(stu['name'])

stu_info = {
    'aaa': 'bbb',
    'ccc': 'ddd'
}