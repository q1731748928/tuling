import scrapy
from scrapy import cmdline
from scrapy.http import HtmlResponse


class QingTingSpider(scrapy.Spider):
    name = "qingting"
    allowed_domains = ["m.qingting.fm","pic.qtfm.cn"]
    start_urls = ["https://m.qingting.fm/rank/"]

    def parse(self, response: HtmlResponse):
        a_list = response.xpath('//div[@class="rank-list"]/a')
        for a_temp in a_list:
            rank_number = a_temp.xpath('./div[@class="badge"]/text()').extract_first()
            img_url = a_temp.xpath('./img/@src').extract_first()
            title = a_temp.xpath('./div[@class="content"]/div[@class="title"]/text()').extract_first()
            desc = a_temp.xpath('.//div[@class="desc"]/text()').extract_first()

            # print(rank_number, title, img_url, desc)

            yield {
                'type': 'info',
                'rank_number': rank_number,
                'img_url': img_url,
                'title': title,
                'desc': desc
            }

            # 需要在parse函数中重新构建一个新的request对象并对图片地址发送请求
            # 如果解析函数中存在自定义形参则需要使用cb_kwargs进行传参，key值必须和函数中的形参名称一一致
            yield scrapy.Request(img_url, callback=self.image_parse, cb_kwargs={'image_name': title})

    # 图片解析函数
    @staticmethod
    def image_parse(response: HtmlResponse, image_name):
        yield {
            'type': 'image',
            'image_name': image_name + ".jpg",
            'image_content': response.body
                }


if __name__ == '__main__':
    cmdline.execute('scrapy crawl qingting'.split())
