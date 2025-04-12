import scrapy
from scrapy.http import HtmlResponse
from scrapy import cmdline

class QingTingSpider(scrapy.Spider):
    name = 'qingting'

    # 图片域名与白名单域名不一致
    # allowed_domains = ['m.qingting.fm']
    start_urls = ['http://m.qingting.fm/rank']

    def parse(self, response: HtmlResponse, **kwargs):
        a_list = response.xpath('//div[@class="rank-list"]/a')
        for temp in a_list:
            rank_number = temp.xpath('./div[@class="badge"]/text()').extract_first()  # 排名
            img_url = temp.xpath('./img/@src').extract_first()  # 图片地址
            title = temp.xpath('./div[@class="content"]/div[@class="title"]/text()').extract_first()  # 标题
            desc = temp.xpath('./div[@class="content"]/div[@class="desc"]/text()').extract_first()  # 描述
            play_number = temp.xpath('.//div[@class="info-item"][1]/span/text()').extract_first()  # 播放次数

            # 如果需要将以上数据保存到数据库, 那么必须使用yield关键字将上述数据返回给管道
            yield {
                'type_':'info',
                'rank_number': rank_number,
                "img_url": img_url,
                'title': title,
                'desc': desc,
                'play_number': play_number
            }

            # 构建新的请求并获取图片的response对象
            # callback：回调函数，将下载器返回的response对象传递给指定的解析方法
            # cb_kwargs：如果解析方法中存在自定义参数，那么可以使用cb_kwargs完成传参
            # cb_kwargs需要传递一个字典，字典中key必须要和新创建的解析函数中的形式参数的名称保持一致
            yield scrapy.Request(img_url, callback=self.parse_image, cb_kwargs={'image_name': title})

    # 解析图片数据
    def parse_image(self, response, image_name):
        yield {
            'type_': 'image',
            'image_name': image_name + '.png',
            'image_content': response.body
        }

            
if __name__ == '__main__':
    cmdline.execute('scrapy crawl qingting --nolog'.split())

"""
总结：
    1.需要在parse函数中构建图片请求对象，并且需要指定解析方法
    2.自定义解析函数，并将解析的图片二进制数据传递给管道
    3.在管道中文件图片的文件读写
    4.需要确保图片的域名在白名单中，如果不在白名单中则可以直接注释白名单
"""