# -*- coding: utf-8 -*-
from lxml import etree

text = ''' <div> <ul> 
        <li class="item-1"><a href="link1.html">first item</a></li> 
        <li class="item-1"><a href="link2.html">second item</a></li> 
        <li class="item-inactive"><a href="link3.html">third item</a></li> 
        <li class="item-1"><a href="link4.html">fourth item</a></li> 
        <li class="item-0"><a href="link5.html">fifth item</a> 
        </ul> </div> '''

# 1.创建对象：Element对象，可以支持xpath语法
tree = etree.HTML(text)
print(type(tree))

# 2.将Element对象转为str
str_data = etree.tostring(tree).decode()
print(str_data)
print(type(str_data))

"""
标签定位
"""
# li = tree.xpath('//div/ul/li[1]/a/@href') # xpath代码不会提示
# li = tree.xpath('//li[@class="item-1"][1]/a/@href') # 返回的结果是一个列表
li = tree.xpath('//li[@class="item-1"]/a/@href') # 返回的结果是一个列表
text = tree.xpath('//li[@class="item-1"]/a/text()')
for title, href in zip(text, li):
    print(title, href)
