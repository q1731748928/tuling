import execjs

with open('qcc1.0.js', encoding='utf-8') as f1:
    js_code = f1.read()

ctll = execjs.compile(js_code)

t = "/api/datalist/touzilist?isnewagg=true&keyno=9cce0780ab7644008b73bc2120479d31&pageindex=3";
data= "undefined"
tid = "c8ad6966b9ee02e98de573197215827a"

res = ctll.call("getKey", t, data)
value = ctll.call("getValue", t, data, tid)

print(value)