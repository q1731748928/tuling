file_path = '测试文件.txt'

stu_name_list = ['双双', '\n夏洛', '\n安娜']

file_obj = open(file_path, mode='w')
file_obj.writelines(stu_name_list)


# 关闭文件对象
file_obj.close()
file_obj = open(file_path)
# print(file_obj.read())

# 如果想要在文件中读取指定行
print(file_obj.readlines()[1]) # readlines: 将多行的数据打包成一个列表, 一行数据为列表中的一个元素