nums = [1, 2, 3, 4]
# num_1 = nums[0]
# num_2 = nums[1]
# num_3 = nums[2]
# num_4 = nums[3]
# print(num_1, num_2, num_3, num_4)

num_1, num_2, num_3, num_4 = nums
print(num_1, num_2, num_3, num_4)

"""
1.多个变量可以在同一个容器类型中获取值：拆包
2.多个变量的个数必须和容器中的元素个数必须要保持一致
3.每一个变量获取的值跟当前变量声明的位置有关系
"""

nums = ('1', '2', '3', '4')
num_1, num_2, num_3, num_4 = nums
print(num_1, num_2, num_3, num_4)

int_set = {"a", 'b', 'c', 'd', 'e'}
# 对集合拆包无法确定元素位置
num_1, num_2, num_3, num_4, num_5 = int_set
print(num_1, num_2, num_3, num_4, num_5)
