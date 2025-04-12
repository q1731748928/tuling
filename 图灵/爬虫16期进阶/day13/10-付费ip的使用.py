
import requests

ip_url = 'https://dps.kdlapi.com/api/getdps/?secret_id=ouy6zuogcnb6t516855l&signature=obeii7n9z1em5vk9lsmgz4uob2&num=1&pt=1&format=text&sep=1'
res = requests.get(ip_url)
print(res.text)



username = 'd2952905742'
password = 'cixv0obv'
proxies = {
    "http": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": res.text},
    "https": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": res.text}
}
print(proxies)

# 白名单方式（需提前设置白名单）
# proxies = {
#     "http": "http://%(proxy)s/" % {"proxy": proxy_ip},
#     "https": "http://%(proxy)s/" % {"proxy": proxy_ip}
# }

# 要访问的目标网页
target_url = "https://dev.kdlapi.com/testproxy"

# 使用代理IP发送请求
response = requests.get(target_url, proxies=proxies)

# 获取页面内容
if response.status_code == 200:
    print(response.text)



