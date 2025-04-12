name_list = ['张三', '李四', '王五']
name_list[1] = '赵六'
print(name_list)

stu_info_list = ['张三', 18, '男']
gender_1 = stu_info_list[2]
print(gender_1)

stu_info_set = {'张三', 18, '男'}
for temp in stu_info_set:
    print(temp)


# 字典：使用大括号，大括号中的值是键值对  key: value
stu_info_dict = {
    'user_name': "张三",
    'age': 18,
    'gender': '男'
}

# 字典取值使用的不是所谓的元素下标：使用的是key取值value
print(stu_info_dict['gender'])

# 集合中的元素是有要求的 集合中的元素必须是可哈希的：不可变对象
# data = {{'user_name': "张三",'age': 18,'gender': '男'},}
# print(data)