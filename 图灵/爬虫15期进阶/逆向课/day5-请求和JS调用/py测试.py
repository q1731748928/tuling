# -*- coding: utf-8 -*-


import execjs


with open("py测试.js", encoding='utf-8') as f1:
    js_code = f1.read()

ctll = execjs.compile(js_code)
# 调用
res = ctll.call("get")

# 传参
res1 = ctll.call("getPar","how are you")

res2 = ctll.call("getPar1","how are you","asdasd",{"page":"111"})

res3 = ctll.call("getPars",{"page":"111"})

print(res2)

print(execjs.eval('Date.now()'))

