try:
    print(9 / 1)
except Exception as e:
    print('程序异常:', e)
else:
    print('如果try执行的代码没有任何异常则执行else中的代码')
finally: # 重点
    print('无论代码是否出现异常都会运行finally代码')

    # 需要完成数据库数据录入
    # 但是在数据录入的情况下发生了异常
    # 关闭数据库链接
    