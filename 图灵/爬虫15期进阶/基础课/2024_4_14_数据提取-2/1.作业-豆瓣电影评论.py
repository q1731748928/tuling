import requests
from lxml import etree

url = 'https://movie.douban.com/subject/1292052/comments?status=P'
headers = {
'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
}
response = requests.get(url,headers=headers).text
# print(response)

tree = etree.HTML(response)

comments = tree.xpath("//span[@class='short']/text()")
for comment in comments:
    print(comment)