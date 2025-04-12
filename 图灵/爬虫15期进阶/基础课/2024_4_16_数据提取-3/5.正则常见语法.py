import re
content = '''
苹果是绿色的
橙子是橙色的
香蕉是黄色的
乌鸦是黑色的
'''

# 通配符 . 匹配任意一个字符，除了\n
for temp in re.findall(r'.色', content):
    print(temp)


# 匹配任意次数： * 可以匹配0次或者多次
content = '''
苹果，是绿色的
橙子，是橙色的
香蕉，是黄色的
乌鸦，是黑色的
猴子，
'''
for temp in re.findall(r'，.*',content):
    print(temp)

# 匹配任意次数：+ 可以匹配1次或者多次
for temp in re.findall(r'，.+',content):
    print(temp)

# 匹配0-1次：?
for temp in re.findall(r'，.?',content):
    print(temp)

# 匹配指定次数：{}
content = '''
红彤彤，绿油油，黑乎乎，绿油油油油
'''
for temp in re.findall(r'油{3,4}',content):
    print(temp)

# 非贪婪模式
content = '<html><head><title>Title</title>'

for temp in re.findall(r'<.*>', content):
    print(temp)

# 元字符转义
content = '''
苹果.是绿色的
橙子.是橙色的
香蕉.是黄色的
'''
for temp in re.findall(r'.*\.', content):
    print(temp)

# 使用中括号定义匹配范围
content = 'a1b2c3d4e5'
for temp in re.findall(r'[^\d]', content):
    print(temp)