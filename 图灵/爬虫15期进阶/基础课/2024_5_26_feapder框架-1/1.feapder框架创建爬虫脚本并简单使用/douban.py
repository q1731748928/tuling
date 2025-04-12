# -*- coding: utf-8 -*-
"""
Created on 2024-05-27 10:01:22
---------
@summary:
---------
@author: hejie
"""

import feapder


class Douban(feapder.AirSpider):
    def start_requests(self):
        yield feapder.Request("https://movie.douban.com/top250")

    def parse(self, request, response):
        # 提取网站title
        print(response.xpath("//title/text()").extract_first())
        print("网站地址: ", response.url)


if __name__ == "__main__":
    Douban().start()


"""
创建爬虫文件：
    feapder create -s douban
    
    执行完毕之后选择AirSpider 轻量爬虫
"""