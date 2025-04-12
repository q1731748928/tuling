# -*- coding: utf-8 -*-
"""
Created on 2024-05-27 10:01:22
---------
@summary:
---------
@author: hejie
"""

import feapder
from douban_feapder_item import DoubanFeapderItem

class Douban(feapder.AirSpider):
    def start_requests(self):
        for page in range(10):
            yield feapder.Request(f"https://movie.douban.com/top250?start={page * 25}&filter=")

    def parse(self, request, response):
        div_list = response.xpath('//div[@class="item"]')
        for temp in div_list:
            movie_dict = DoubanFeapderItem()
            movie_dict['title'] = temp.xpath('./div[@class="info"]/div/a/span[1]/text()').extract_first()
            movie_dict['score'] = temp.xpath('.//div[@class="star"]/span[2]/text()').extract_first()
            movie_dict['detail_url'] = temp.xpath('./div[@class="info"]/div/a/@href').extract_first()
            yield feapder.Request(movie_dict['detail_url'], callback=self.parse_detail, item = movie_dict)

    def parse_detail(self, request, response):
        if response.xpath('//div[@class="indent"]/span[@class="all hidden"]//text()'):
            request.item['detail_text'] = response.xpath(
                '//div[@class="indent"]/span[@class="all hidden"]//text()').extract_first().strip()
        else:
            request.item['detail_text'] = response.xpath(
                '//div[@class="indent"]/span[1]//text()').extract_first().strip()

        # 将数据提交到数据库中
        yield request.item


if __name__ == "__main__":
    Douban(thread_count=10).start()
