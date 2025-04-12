# -*- coding: utf-8 -*-
import requests
url = 'http://www.cninfo.com.cn/new/disclosure'
headers = {
'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
}

# 先要将api需要的数据打包成字典发送过去
form_data = {
    "column": "szse_latest",
    "pageNum": "1",
    "pageSize": "30",
    "sortName": "",
    "sortType": "",
    "clusterFlag": "true"
}
response = requests.post(url,data=form_data,headers=headers)
print(response.json()) # 返回json数据类型并自动转为字典数据结构

"""
1.通过浏览器开发者工具获取网站中的api数据链接，既然获取了那么就明确了url地址
2.查询载荷中的数据 - 表单数据
3.构建表单数据
4.携带表单数据发送post请求
"""
