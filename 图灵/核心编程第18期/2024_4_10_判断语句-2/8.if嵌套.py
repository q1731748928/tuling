"""
if 条件1:
    执行条件1成立的代码
    if 条件2:
        执行条件2成立的代码
"""

ticket = True
knife_length = 11 # 管制刀具的长度

if ticket:
    print('有车票,可以进站,等待安检...')
    if knife_length < 10:
        print('通过安检,可以上车...')
    else:
        print('管制刀具不符合要求,禁止上车...')
else:
    print('没有车票,无法进站...')


"""
必须掌握:
    1.if条件判断语法
    2.else的使用
    3.熟悉代码块的含义已经代码块的执行特征 作业域在函数章节中会讲
    4.熟悉elif的使用
    5.熟练使用if嵌套
"""