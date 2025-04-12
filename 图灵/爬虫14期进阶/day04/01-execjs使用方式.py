# 下载 pip install pyexecjs
import execjs

# 查看自己使用的环境 引擎
# print(execjs.get())

# js_data = '''
#
# function aa(a) {
#     return a
# }
#
# '''

with open('02-处理的js代码.js', encoding='utf-8') as f:
    js_data = f.read()
# compile 编译对应的js
js = execjs.compile(js_data)
# call调用代码
# data = js.call('aa')
# print(data)
# eval 调用代码
# data = js.eval('aa()')
# print(data)

# 带参数调用
# data = js.call('aa', 2, 3)
# print(data)
# data = js.eval('aa(2, 3)')
# print(data)

# print(js.call('aa', ['123', 2345]))



# print(js.call('bb'))
