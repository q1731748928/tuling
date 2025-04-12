import re
content = '''
张三，手机号码15945678901
李四，手机号码13945677701
王二，手机号码13845666901
'''

for temp in re.findall(r'^(.+)，.+(\d{11})', content, re.M):
    print(*temp)