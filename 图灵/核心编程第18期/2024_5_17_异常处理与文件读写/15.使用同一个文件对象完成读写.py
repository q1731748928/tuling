with open('测试文件.txt', mode='a+') as f:
    f.write('\n大家一起去游泳...')

    # 将文件游标归位: 可以理解为文件中的闪烁光标
    f.seek(0)
    print(f.read())
