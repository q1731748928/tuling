import csv
with open('test_2.csv') as f:
    # ���������󣬵�ǰ�����Ķ�ȡ����֧��dict���
    f_csv = csv.DictReader(f)

    for row in f_csv:
        print(row)
        print(row.get('name'))