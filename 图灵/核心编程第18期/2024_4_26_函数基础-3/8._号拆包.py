# def work(a, b, c):
#     print(a + b + c)
#
#
# nums_1 = [11, 22, 33]
# nums_2 = (11, 22, 33)
# nums_3 = {11, 22, 33}
# work(nums_1[0], nums_1[1], nums_1[2])
#
# # *号也可以用于解包
# work(*nums_1)
# work(*nums_2)
# work(*nums_3)

"""
如果某一个函数需要接收一个容器类型中的元素
    直接使用*号拆包的方式将元素传递过去
"""
def work(*args):
    print(args)
    print(len(args))
    print(type(args))


nums = [i for i in range(1, 101)]
work(nums) # 拆包出来的所有元素放入到了元组类型中


