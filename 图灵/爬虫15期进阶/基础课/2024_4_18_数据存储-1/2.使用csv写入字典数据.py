import csv


rows = [
    {
        "class_name": "18��Python",
        "name": 'С��',
        "gender": '��',
        "phone": '13146060xx1',
        "qq": '123456xx1'
    },
    {
        "class_name": "18��Python",
        "name": 'С��',
        "gender": '��',
        "phone": '13146060xx2',
        "qq": '123456xx2'
    },
    {
        "class_name": "19��Python",
        "name": 'С��',
        "gender": 'Ů',
        "phone": '13146060xx3',
        "qq": '123456xx3'
    },
    {
        "class_name": "19��Python",
        "name": 'С��',
        "gender": 'Ů',
        "phone": '13146060xx4',
        "qq": '123456xx4'
    },
]
# ��ͷ�е��������ֵ��е�key
headers = ['class_name', 'name', 'gender', "phone", 'qq']

with open('test_2.csv', 'w', newline='') as f:
    # �����ֵ�д�����
    f_csv = csv.DictWriter(f, headers)

    # �����ݵı�ͷ����д��
    f_csv.writeheader()

    # д������
    f_csv.writerow(rows)
