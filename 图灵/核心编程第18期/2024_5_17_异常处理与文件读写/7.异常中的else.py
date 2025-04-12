try:
    print(9 / 1)
except Exception as e:
    print('程序异常:', e)
else:
    print('如果try执行的代码没有任何异常则执行else中的代码')