from bs4 import BeautifulSoup
import re

html = """
<html><head><title>The Dormouse's story</title></head>
<body>
<p class="title" name="dromouse"><b>The Dormouse's story</b></p>
<p class="story">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>
<p class="story">...</p>
"""

# 1.创建bs4对象，第二个参数需要手动指定一个解析器
soup = BeautifulSoup(html, "lxml")
# 2.格式化输出页面代码
print(soup.prettify())

# 根据标签名称获取对应标签
res_1 = soup.find_all('b')  # 返回的结果是一个列表类型
res_2 = soup.find_all('a')
print(res_1, res_2)

res_3 = soup.find_all(['b', 'a'])
print(res_3)  # 将结果放在一个列表中

# 暂时没有讲到正则，了解即可
res_4 = soup.find_all(re.compile('^b'))
print(res_4)

# 根据属性过滤
res_5 = soup.find_all(class_="sister")
print(res_5)
res_5 = soup.find_all(attrs={'class': 'sister'})
print(res_5)

res_6 = soup.find(id='link2') # find获取查询到的第一个值，find_all查询所有符合要求的值
print(res_6)

# 根据文本获取对应的标签
res_7 = soup.find_all(string='Elsie')
print(res_7) # 获取的是文本值

res_8 = soup.find_all(string=['Elsie', 'Lacie', 'abc']) # 匹配不上的文本会忽略
print(res_8)

res_9 = soup.find_all(string=re.compile('Dormouse'))
print(res_9)

"""
1. 创建bs对象并手动指定解析器：lxml
2. find_all方法的特征：根据标签名称查询、属性查询、文本查询、re正则匹配查询，返回的数据类型是列表
    标签名称可以传递多个：将多个标签放到列表中直接传递给find_all方法
"""