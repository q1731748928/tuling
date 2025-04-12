class ClassRoom:
    def __init__(self, name):
        self.cls_name = name
        self.stu_list = list()

    def add_stu(self, stu_info):
        self.stu_list.extend(stu_info)

class Student:
    def __init__(self, name):
        self.stu_name = name


cls_1 = ClassRoom("爬虫一班")

stu_1 = Student("安娜")
stu_2 = Student("双双")
stu_3 = Student("夏洛")

cls_1.add_stu([stu_1, stu_2, stu_3])

for stu_obj in cls_1.stu_list:
    print(stu_obj.stu_name)

"""
将多个学生类的实例对象保存到了班级类中的stu_list列表中

对象关联的本质是:
    将一个类的实例对象的地址赋值给另外一个类的属性中
    
"""