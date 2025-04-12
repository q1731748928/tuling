import re
content = '''001-苹果价格-60
002-橙子价格-70
003-香蕉价格-80
'''
# re.M开启多行模式
# ^：以指定字符开头
for temp in re.findall(r'^\d+', content, re.M):
    print(temp)

"""
"""

# $：以指定字符结尾
for temp in re.findall(r'\d+$', content, re.M):
    print(temp)

# 在多个字符中匹配指定的多个字符
content = '''
苹果，苹果是绿色的
橙子，橙子是橙色的
香蕉，香蕉是黄色的
'''
for temp in re.findall(r'绿|橙色|黄', content, re.M):
    print(temp)

# 分组使用
content = """苹果，苹果是绿色的
橙子，橙子是橙色的
香蕉，香蕉是黄色的
"""
for temp in re.findall(r'^(.*)，', content, re.M):
    print(temp)