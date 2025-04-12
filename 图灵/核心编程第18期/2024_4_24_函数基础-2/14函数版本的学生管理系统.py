"""
1.添加学生
2.删除学生
3.修改学生
4.查询指定学生
5.查询所有学生
6.退出系统
"""

info_list = list()

def print_menu():
    print("---------------------------")
    print("      学生管理系统 V1.0")
    print(" 1:添加学生")
    print(" 2:删除学生")
    print(" 3:修改学生")
    print(" 4:查询学生")
    print(" 5:显示所有学生")
    print(" 6:退出系统")
    print("---------------------------")

def add_new_info():
    new_name = input("请输入学生姓名:")
    new_tel = input("请输入学生手机号:")
    new_qq = input("请输入学生QQ:")

    # 在添加学生之前判断这个学生是否已经存储到系统中
    for temp in info_list:
        if temp['name'] == new_name:
            print('学生已存在...')
            return

    info = dict()
    info["name"] = new_name
    info["tel"] = new_tel
    info["qq"] = new_qq

    info_list.append(info)


def del_info():
    del_num = int(input("请输入你要删除的学生序号:"))
    if 0 <= del_num <= len(info_list):
        del_flag = input("是否确认删除[y or n]:")
        if del_flag == 'y':
            del info_list[del_num]
    else:
        print('输入的序号有误, 请重新输入...')


def modify_info():
    modify_num = input('请输入要修改的学生序号:')
    if 0 <= modify_num < len(info_list):
        print('你要修改的信息是:')
        print(f"学生姓名: {info_list[modify_num]['name']}, 手机: {info_list[modify_num]['tel']}")
        info_list[modify_num]['name'] = input("请输入新的学生姓名:")
        info_list[modify_num]['tel'] = input("请输入新的学生手机号:")
        info_list[modify_num]['qq'] = input("请输入新的学生QQ:")
    else:
        print('输入学生序号有误...')


def search_info():
    search_name = input("请输入要查询的学生姓名:")
    for temp in info_list:
        if temp["name"] == search_name:
            print('查询到的学生信息如下:')
            print(f"学生姓名: {temp['name']}, 手机: {temp['tel']}")
        break
    else:
        print('当前查询的学生信息不存在...')


def print_all_info():
    print('序号\t\t姓名\t\t手机号\t\tQQ')
    i = 0
    for temp in info_list:
        print("%d\t\t%s\t\t%s\t%s" % (i, temp['name'], temp['tel'], temp['qq']))
        i += 1

def main():
    """用来控制整个流程"""
    while True:
        # 1. 打印功能
        print_menu()

        # 2. 获取用户的选择
        num = input("请输入要进行的操作(数字): ")

        # 3. 根据用户选择,做相应的事情
        if num == "1":
            # 添加学生
            add_new_info()
        elif num == "2":
            # 删除学生
            del_info()
        elif num == "3":
            # 修改学生
            modify_info()
        elif num == "4":
            # 查询学生
            search_info()
        elif num == "5":
            # 遍历所有的信息
            print_all_info()
        elif num == "6":
            # 退出系统
            exit_flag = input("是否退出 [y or n]:")
            if exit_flag == "y":
                break
        else:
            print("输入有误,请重新输入......")

        input("\n\n\n按回车键继续....")
        # os.system("clear")  # 调用Linux命令clear完成清屏

# 程序的开始
main()

"""
1. 添加学号
2. 使用集合的数据类型保证学号不重复
3. 将学生序号从0修改成1
"""

