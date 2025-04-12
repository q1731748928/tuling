import csv
with open('test_2.csv') as f:
    # 创建读对象，当前创建的读取对象支持dict输出
    f_csv = csv.DictReader(f)

    for row in f_csv:
        print(row)
        print(row.get('name'))