stu = [
    {"name": "顾安", "age": 18},
    {"name": "夏洛", "age": 19},
    {"name": "木木", "age": 17}
]

# def sort_by_age(stu_dict):
#     return stu_dict['age']
#
# sorted_stu = sorted(stu, key=sort_by_age)
# print(sorted_stu)

stu.sort(key=lambda stu_dict: stu_dict['age'], reverse=True)
print(stu)