import requests
from lxml import etree

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}

res = requests.get('http://www.sgcc.com.cn/html/sgcc/col2022121225/column_2022121225_9.shtml', headers=headers)

tree = etree.HTML(res.text)
arg = tree.xpath('//meta/@content')[-1]
arg2 = tree.xpath("//script/text()")[0]
# print(arg2)

arg_3 = "http://www.sgcc.com.cn" + tree.xpath("//script[2]/@src")[0]
print(arg_3)
