import re
content = '''
张三，手机号码15945678901
李四，手机号码13945677701
王二，手机号码13845666901
'''

"""
finditer和fidall方法类似
    findall直接匹配并返回最终的结果
    finditer只会返回一个对象，是一个迭代器
    
分成器

"""
for temp in re.finditer(r'(?P<user_name>.+)，.+(?P<mobile>\d{11})', content, re.M):
    print(temp.group('user_name'), temp.group('mobile'))