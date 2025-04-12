import csv
headers = ['班级', '姓名', '性别', '手机号', 'QQ']

rows = [
    ["18级Python", '小王', '男', '13146060xx1', '123456xx1'],
    ["18级Python", '小李', '男', '13146060xx2', '123456xx2'],
    ["19级Python", '小赵', '女', '13146060xx3', '123456xx3'],
    ["19级Python", '小红', '女', '13146060xx4', '123456xx4'],
]

# newline=''：让windows中的excel去除空行
with open('test_1.csv', 'w', newline='') as f:
    # 创建csv写入对象
    f_csv = csv.writer(f)

    f_csv.writerow(headers) # 写入表头
    f_csv.writerows(rows) # 写入数据

