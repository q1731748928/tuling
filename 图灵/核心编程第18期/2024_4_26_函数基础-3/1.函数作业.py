# -*- coding: utf-8 -*-
# @Time    : 2024/4/26 19:36
# @Author  : 顾安
# @File    : 1.函数作业.py
# @Software: PyCharm


# -*- coding:utf-8 -*-
# @FileName: hnw.py
# @Time    : 2022/9/26 2:05 下午
# @Author  : 顾安


info_list = []


def print_menu():
    print('')
    print("*" * 27)
    print("      学生管理系统 V1.0")
    print(" 1:添加学生")
    print(" 2:删除学生")
    print(" 3:修改学生")
    print(" 4:查询学生")
    print(" 5:显示所有学生")
    print(" 6:退出系统")
    print("*" * 27)
    print('')


def add_new_info():
    """添加学生信息"""
    new_name = input("请输入姓名:")
    new_tel = input("请输入手机号:")
    new_qq = input("请输入QQ:")

    # 学号自增
    new_id = len(info_list) + 1

    for temp_info in info_list:
        if temp_info['id'] == new_id:
            print("此学号已经存在，请重新输入")
            return

    # 定义一个字典，用来存储用户的学生信息(这是一个字典)
    info = dict()

    # 向字典中添加数据
    info["id"] = new_id
    info["name"] = new_name
    info["tel"] = new_tel
    info["qq"] = new_qq

    # 向列表中添加这个字典
    info_list.append(info)
    print(info_list)


def del_info():
    """删除学生信息"""
    del_num = int(input("请输入要删除的序号:"))

    # 序号从1开始，需要减1来获取正确的索引
    index = del_num - 1

    if 0 <= index < len(info_list):
        del_flag = input("确认删除:y or n: ")

        if del_flag == "y":
            # 删除指定索引的学生信息
            del info_list[index]
    else:
        print("输入序号有误，请重新输入")


def modify_info():
    """修改学生信息"""
    modify_num = int(input("请输入要修改的序号:"))

    # 序号从1开始，需要减1来获取正确的索引
    index = modify_num - 1

    if 0 <= index < len(info_list):
        print("你要修改的信息是:")
        info = info_list[index]

        print("学号:%s, 姓名:%s, 手机号:%s, QQ:%s" % (info['id'], info['name'], info['tel'], info['qq']))

        new_name = input("请输入新的姓名:")
        new_tel = input("请输入新的手机号:")
        new_qq = input("请输入新QQ:")

        # 更新学生信息
        info['name'] = new_name
        info['tel'] = new_tel
        info['qq'] = new_qq
    else:
        print("输入序号有误，请重新输入")


def search_info():
    """查询学生信息"""
    search_name = input("请输入要查询的学生姓名:")

    for temp_info in info_list:
        if temp_info['name'] == search_name:
            print("查询到的信息如下:")
            print("学号:%s, 姓名:%s, 手机号:%s, QQ:%s" % (
                temp_info['id'], temp_info['name'], temp_info['tel'], temp_info['qq']))
            break
    else:
        print("没有您要找的信息....")


def print_all_info():
    """打印所有学生信息"""
    print("序号\t\t学号\t\t姓名\t\t手机号\t\t\tQQ")
    i = 1

    for temp_info in info_list:
        print('-' * 47)
        print("%d\t\t%s\t\t%s\t\t%s\t\t%s" % (i, temp_info['id'], temp_info['name'], temp_info['tel'], temp_info['qq']))
        i += 1


def main():
    while True:
        print_menu()
        option = input("请选择操作:")

        if option == '1':
            add_new_info()
        elif option == '2':
            del_info()
        elif option == '3':
            modify_info()
        elif option == '4':
            search_info()
        elif option == '5':
            print_all_info()
        elif option == '6':
            print("感谢使用学生管理系统，再见！")
            break
        else:
            print("输入有误，请重新输入")


if __name__ == '__main__':
    main()
