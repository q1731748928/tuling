import scrapy
from ..items import DangdangBookItem # ..返回上一级，如果通过当前形式导入必须使用命令行启动
from scrapy import cmdline

# from dangdang_book.items import DangdangBookItem
from scrapy.http import HtmlResponse
from scrapy_redis.spiders import RedisSpider


class BookSpider(RedisSpider):
    name = 'book'
    allowed_domains = ['search.dangdang.com']
    # start_urls = ['http://search.dangdang.com/']

    redis_key = 'dd_book:start_url'

    def parse(self, response: HtmlResponse, **kwargs):
        li_list = response.xpath('//ul[@class="bigimg"]/li')
        for li in li_list:
            item = DangdangBookItem() # items.py中的类是字典的子类
            item['title'] = li.xpath('./a/@title').extract_first()
            item['price'] = li.xpath('./p[@class="price"]/span[1]/text()').extract_first()
            item['author'] = li.xpath('./p[@class="search_book_author"]/span[1]/a[1]/@title').extract_first()
            item['date_data'] = li.xpath('./p[@class="search_book_author"]/span[last()-1]/text()').extract_first()
            item['detail'] = li.xpath('./p[@class="detail"]/text()').extract_first() if li.xpath(
                './p[@class="detail"]/text()') else '空'
            item['producer'] = li.xpath(
                './p[@class="search_book_author"]/span[last()]/a/text()').extract_first() if li.xpath(
                './p[@class="search_book_author"]/span[last()]/a/text()') else '空'

            yield item

        if response.xpath('//ul[@name="Fy"]/li[@class="next"]/a/@href').extract_first() is not None:
            next_url = response.urljoin(response.xpath('//ul[@name="Fy"]/li[@class="next"]/a/@href').extract_first())
            yield scrapy.Request(url=next_url, callback=self.parse)


# if __name__ == '__main__':
#     cmdline.execute('scrapy crawl book'.split())


"""
1.items.py主要用于字段名称校验，一般用的不多
2.如果需要启动字段名称校验，导入的方式为..导入
3.如果用以上方式导入需要在命令行中通过指令启动
"""