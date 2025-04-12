# break: 中断整个循环
# for i in range(1, 11):
#     print(i)
#     break 当第一次循环打印出i的值之后会执行break退出整个循环

# break关键字必须要配合循环使用, 不能单独使用

# i = 0
# while i < 5:
#     print("-" * 30)
#     i += 1
#     print(i)
#     break

"""
代码练习
"""
# web_site = 'www.tulingxueyuan.com'
# for x in web_site:
#     print(x)
#     break

# continue
# for i in range(1, 11):
#     print(i)
#     continue
#     print("-" * 30) 忽略在continue关键字之下的代码


"""
代码练习
"""
web_site = 'www.tulingxueyuan.com'
for x in web_site:
    print(x)
    continue
    print("-" * 30)
