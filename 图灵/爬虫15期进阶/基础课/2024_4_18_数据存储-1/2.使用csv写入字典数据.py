import csv


rows = [
    {
        "class_name": "18级Python",
        "name": '小王',
        "gender": '男',
        "phone": '13146060xx1',
        "qq": '123456xx1'
    },
    {
        "class_name": "18级Python",
        "name": '小李',
        "gender": '男',
        "phone": '13146060xx2',
        "qq": '123456xx2'
    },
    {
        "class_name": "19级Python",
        "name": '小赵',
        "gender": '女',
        "phone": '13146060xx3',
        "qq": '123456xx3'
    },
    {
        "class_name": "19级Python",
        "name": '小红',
        "gender": '女',
        "phone": '13146060xx4',
        "qq": '123456xx4'
    },
]
# 表头中的数据是字典中的key
headers = ['class_name', 'name', 'gender', "phone", 'qq']

with open('test_2.csv', 'w', newline='') as f:
    # 创建字典写入对象
    f_csv = csv.DictWriter(f, headers)

    # 将传递的表头数据写入
    f_csv.writeheader()

    # 写入数据
    f_csv.writerow(rows)
