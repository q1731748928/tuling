import pymongo

client_mongo = pymongo.MongoClient(host = 'localhost', port=27017)
db = client_mongo['py_spider']['sut_info']

# 插入单条数据
# student = {'id': '20240101', 'name': '安娜', 'age': 20, 'address': '长沙'}
# res = db.insert_one(student)
# print(res)
#
# a = db.find()
# print(list(a))

# 插入多条数据
student_list = [
    {'id': '20240101', 'name': '安娜', 'age': 20, 'address': '长沙'},
    {'id': '20240102', 'name': '双双', 'age': 21, 'address': '南京'},
    {'id': '20240103', 'name': '夏洛', 'age': 27, 'address': '北京'},
]

res = db.insert_many(student_list)
print(res)
