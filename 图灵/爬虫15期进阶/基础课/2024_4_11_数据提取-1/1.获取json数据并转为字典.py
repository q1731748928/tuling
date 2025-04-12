import json
import requests

# 网站地址: http://www.cninfo.com.cn/new/commonUrl?url=disclosure/list/notice#szse

# 获取公告信息
url = 'http://www.cninfo.com.cn/new/disclosure'

# 定义请求头，模拟浏览器
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
}
form_data = {
    "column": "szse_latest",
    "pageNum": "1",
    "pageSize": "30",
    "sortName": "",
    "sortType": "",
    "clusterFlag": "true"
}

# response = requests.post(url, headers =headers, data=form_data).content.decode()
# json_dict = json.loads(response)
# print(json_dict, type(json_dict))

response = requests.post(url, headers=headers, data=form_data).json()
print(response, type(response))
