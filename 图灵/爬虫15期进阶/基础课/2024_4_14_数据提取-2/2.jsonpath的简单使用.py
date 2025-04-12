from jsonpath import jsonpath
info = {
    "error_code": 0,
    "stu_info": [
        {
            "id": 2059,
            "name": "小白",
            "sex": "男",
            "age": 28,
            "addr": "河南省济源市北海大道xx号",
            "grade": "天蝎座",
            "phone": "1837830xxxx",
            "gold": 10896,
            "info": {
                "card": 12345678,
                "bank_name": '中国银行'
            }
        },
        {
            "id": 2067,
            "name": "小黑",
            "sex": "男",
            "age": 28,
            "addr": "河南省济源市北海大道xx号",
            "grade": "天蝎座",
            "phone": "87654321",
            "gold": 100
        }
    ]
}

# 需求1：提取name数据
# 普通方式获取字典中key所对应的值
# res_1 = info['stu_info'][0]['name']
# res_2 = info['stu_info'][1]['name']
# print(res_1, res_2)

# 使用jsonpath模块提取对应的值
res_1 = jsonpath(info, "$.stu_info[0]['name']")
print(res_1) # jsonpath获取的值的类型是一个列表

res_2 = jsonpath(info, "$.stu_info[1]['name']")
print(res_2[0])

# 简略写法，表达的含义是可以跨节点取值
res_3 = jsonpath(info, '$..name')
print(res_3)

res_4 = jsonpath(info, '$..bank_name')
print(res_4)
