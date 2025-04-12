"""
需求
    获取年龄大于等于18岁并且性别为女的数据
"""

age = 20
gender = '女'

"""and必须左右两边的条件成立整体条件才成立"""
# if age >= 18 and gender == '女':
#     print('数据查询成功')
# else:
#     print('数据查询失败')

"""or左右两边的条件只要一个成立则条件整体成立"""
# if age >= 18 or gender == '女':
#     print('数据查询成功')
# else:
#     print('数据查询失败')


"""not表示的是取反, 如果条件成立则返回False, 如果条件不成立则返回True"""
print(not 100 > 50)
print(not 100 < 50)


if 18 <= age <= 50 and gender == '女':
    print('数据查询成功')
else:
    print('数据查询失败')


# if age >= 18 and age <= 50 and gender == '女':
#     print('数据查询成功')
# else:
#     print('数据查询失败')



age = 20
gender = "男性"
print((18 <= age <= 50 and gender == "女性") or (18 <= age <= 60 and gender == "男性"))