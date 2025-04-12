# -*- coding: utf-8 -*-


import execjs
import requests

with open("funcs.js", encoding='utf-8') as f1:
    js_code = f1.read().replace('arg2',"how are you")

print(js_code)

ctll = execjs.compile(js_code)

res = ctll.call("gets")
print(res)




