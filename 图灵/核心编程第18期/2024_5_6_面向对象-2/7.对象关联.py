class ClassRoom:
    def __init__(self, name):
        self.cls_name = name

class Student:
    def __init__(self, name):
        self.stu_name = name

cls_1 = ClassRoom("爬虫一班")
stu_1 = Student("安娜")

cls_1.stu_obj = stu_1

# 以下两个对象的地址是一致的
print(id(stu_1))
print(id(cls_1.stu_obj))

print(cls_1.stu_obj.stu_name)


"""
1.创建了一个班级类
2.创建了一个学生类
3.创建了班级类的实例对象: cls_1
4.创建了学生类的实例对象: stu_1

5.使用了班级类的实例对象创建了一个新的实例属性: stu_obj
    cls_1.stu_obj = stu_1: 将stu_1实例对象的地址赋值给了stu_obj
6.根据班级类中的stu_obj保存的学生类实例对象地址查询学生名称
"""