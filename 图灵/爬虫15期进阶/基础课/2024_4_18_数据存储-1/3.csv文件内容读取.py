# coding: utf-8
import csv
with open('test_1.csv') as f:
    # 创建csv读取对象
    f_csv = csv.reader(f)
    for row in f_csv:
        print(row)