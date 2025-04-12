"""
如果需要python读取文件并获取文件中的内容
    则需要使用python中的内置方法: open()
"""
# 1.定义文件的路径
file_path = '测试文件.txt'
# 如果大家使用的系统是windows 那么可以尝试将编码修改成gbk
f_obj = open(file_path, encoding='utf-8')  # 返回一个文件对象

# 2.通过文件对象读取文件中的内容并打印
content = f_obj.read()  # 将文件中的内容返回出去
print(content)