# -*- coding: utf-8 -*-
"""
Created on 2024-05-27 10:01:22
---------
@summary:
---------
@author: hejie
"""

import feapder
from feapder import Request, Response


class Douban(feapder.AirSpider):
    def start_requests(self):
        for page in range(10):
            yield feapder.Request(f"https://movie.douban.com/top250?start={page * 25}&filter=")

    def parse(self, request, response):
        """
        可以在parse函数中判断响应对象中的状态码
            如果状态码不符合规定，则直接可以raise抛出异常让框架重试
        """
        # if response.status_code != 200:
        #     raise Exception('状态码异常...')

        div_list = response.xpath('//div[@class="item"]')
        for temp in div_list:
            movie_dict = dict()
            movie_dict['title'] = temp.xpath('./div[@class="info"]/div/a/span[1]/text()').extract_first()
            movie_dict['score'] = temp.xpath('.//div[@class="star"]/span[2]/text()').extract_first()
            movie_dict['detail_url'] = temp.xpath('./div[@class="info"]/div/a/@href').extract_first()
            yield feapder.Request(movie_dict.get('detail_url'), callback=self.parse_detail, item = movie_dict)

    def parse_detail(self, request, response):
        if response.xpath('//div[@class="indent"]/span[@class="all hidden"]//text()'):
            request.item['detail_text'] = response.xpath(
                '//div[@class="indent"]/span[@class="all hidden"]//text()').extract_first().strip()
        else:
            request.item['detail_text'] = response.xpath(
                '//div[@class="indent"]/span[1]//text()').extract_first().strip()
        print(request.item)


    def validate(self, request: Request, response: Response):
        """

        :param request:
        :param response:
        :return:
        除了可以对状态码判断之外也可以对数据进行校验
            如果数据本身不符合要求则可以直接抛出异常完成重试或者 return false 放弃当前请求
        """
        print('校验的响应状态码:', response.status_code)
        if response.status_code != 200:
            raise Exception('状态码异常...') # 抛出异常完成请求重试


if __name__ == "__main__":
    Douban(thread_count=10).start()
