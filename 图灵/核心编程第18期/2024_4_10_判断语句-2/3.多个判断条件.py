cool = True
money = 10000
height = 177.65

if cool == True and money > 9000 and height > 178:
    print('这是一个高富帅')

if cool and money > 9000 and height > 172:
    print('这是一个高富帅')


# 如果条件是布尔值则无需使用==
if cool: # if 默认条件为真
    print('长得帅')
else:
    print('长的不帅')