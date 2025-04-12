"""
open函数的文件读写模式
    r:只读 [open函数默认为读模式]
    w:写 [只能完成内容的写， 不能读, 如果文件中有内容会将原有内容覆盖]
    a:写[可以在原有内容的基础上追加写]
"""

file_path = '测试文件.txt'
# 覆盖写
# f_obj = open(file_path, mode='w')
# f_obj.write('大家好， 我是来福')

# 追加写
f_obj = open(file_path, mode='a')
f_obj.write('\n大家好， 我是旺财')