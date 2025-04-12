str_data = 'abc' # 字符串是可以支持for循环执行的

# 可以将一个对象中的值迭代依次打印
for char in str_data:
    print(char)

# int_data = 100
# for num in int_data: 数字类型无法被for循环执行
#     print(num)

"""
for循环代码结构
    for 变量 in [str, list, set, tuple, dict]:
        需要重复执行的代码

for循环只能运行可迭代对象: 因为目前没有讲到对象, 所以先记住这个专业术语
    
    python中哪些数据类型是可迭代的
        字符串
        列表
        字典
        集合
        元组
        
        不支持迭代的对象
            int
            float
            bool

关键字in
    in被称之为成员运算符
"""

