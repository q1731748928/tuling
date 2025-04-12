# -*- coding: utf-8 -*-
# @Time    : 2024/4/10 下午8:26
# @Author  : 顾安
# @File    : 7.elif判断分支.py
# @Software: PyCharm


# score = 77  # 定义变量存储分数
#
# if score >= 90 and score <= 100:  # 如果分数在90~100
#     print('本次考试，等级为A')
# elif score >= 80 and score < 90:  # 如果分数在80~90
#     print('本次考试，等级为B')
# elif score >= 70 and score < 80:  # 如果分数在70~80
#     print('本次考试，等级为C')
# elif score >= 60 and score < 70:  # 如果分数在60~70
#     print('本次考试，等级为D')
# elif score >= 0 and score < 60:  # 如果分数在60以下
#     print('本次考试，等级为E')
# else:  # 如果分数不在0~100之间，就认为错误
#     print("分数有误...")


fruit = '榴莲'

"""
如果
否则如果
否则如果
条件都不成立
"""

if fruit == '橙子':
    print('橙子')
elif fruit == '香蕉':
    print('香蕉')
elif fruit == '苹果':
    print('苹果')
else:
    print('以上水果都不符合...')

"""
if

以下关键字不能脱离判断语句单独使用
    else
    elif
"""

