from bs4 import BeautifulSoup

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

soup = BeautifulSoup(html, 'lxml')
# 标签选择器
print(soup.select('title')) # 专门使用css选择器完成标签定位
print(soup.select('a')) # select查询符合条件的所有标签，并且使用列表的结构返回
print(soup.select_one('a')) # 查询符合条件的第一个标签，返回的是数据本身

print(soup.select('b'))

# 类选择器：如果使用css选择器完成基于class属性去筛选那么必须在class属性值的前面加.
print('类选择器:', soup.select('.sister'))

# id选择器：如果使用css选择器完成基于id属性去筛选那么必须在id属性值的前面加#
print('id选择器:', soup.select("#link1"))

# 层级选择器，父标签与子标签中间使用空格间隔
print('层级选择器:', soup.select('p a'))
print('层级选择器:', soup.select('p #link1'))

# 属性选择器
print('属性选择器:', soup.select('a[class="sister"]'))

print("-" * 30)

# 获取文本内容
# 使用find_all或者select返回的列表中的元素是一个对象
print(soup.select('title')[0].get_text())
for temp in soup.select('title'):
    print(type(temp))
    print(temp.get_text())

print("-" * 30)

# 获取属性
for temp in soup.select('a'):
    print(temp.get('href'))