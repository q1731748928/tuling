# 数据添加
stu_info = ['安娜', '顾安', '双双']

for stu in stu_info:
    print(stu)

new_stu = '夏洛'

# append可以在列表添加一个元素, 并且添加的元素一定在列表的最末尾
# append只能添加一个元素, 元素类型任意
stu_info.append(new_stu)
new_stu = '百川'
stu_info.append(new_stu)

print("-" * 30)

for stu in stu_info:
    print(stu)


new_stu_list = ['南枫', '木木', '何老师']
stu_info.append(new_stu_list)

print("-" * 30)
print(stu_info)

# for stu in stu_info:
#     print(stu)


# 使用extend添加可迭代对象
stu_info.extend(new_stu_list) # 将迭代对象中的元素先取出来之后再进行添加
print(stu_info)

list_1 = [1, 2, 3]
list_2 = [4, 5, 6]
list_3 = list_1 + list_2 # 创建了一个新列表
print(list_3)
print(list_1)

list_2 += list_1 # 创建的新列表中的引用会覆盖原有list_2中的引用
print(list_2)

print("-" * 30)

int_list = [1, 2, 3]
int_list.insert(0, "0")
print(int_list)

