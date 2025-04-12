sum_ret = 0
# 计算1 - 100的累加和
# for i in range(1, 101):
#     sum_ret += i
# print(sum_ret)

sum_ret = 0
# 计算1 - 100的偶数和
for i in range(1, 101):
    if i % 2 == 0:
        sum_ret += i

print(sum_ret)
