import scrapy
from scrapy.http import HtmlResponse
from scrapy import cmdline

class QingTingSpider(scrapy.Spider):
    name = 'qingting'
    allowed_domains = ['m.qingting.fm']
    start_urls = ['http://m.qingting.fm/rank']

    def parse(self, response: HtmlResponse, **kwargs):
        a_list = response.xpath('//div[@class="rank-list"]/a')
        for temp in a_list:
            """直接获取数据"""
            # rank_number = temp.xpath('./div[@class="badge"]/text()')  # 排名
            # img_url = temp.xpath('./img/@src')  # 图片地址
            # title = temp.xpath('./div[@class="content"]/div[@class="title"]/text()')  # 标题
            # desc = temp.xpath('./div[@class="content"]/div[@class="desc"]/text()')  # 描述
            # play_number = temp.xpath('.//div[@class="info-item"][1]/span/text()')  # 播放次数
            # print('---***--->', rank_number[0], img_url[0], title[0], desc[0], play_number[0])

            """将解析出来的数据打包成新的列表再返回"""
            # rank_number = temp.xpath('./div[@class="badge"]/text()').extract()  # 排名
            # img_url = temp.xpath('./img/@src').extract()  # 图片地址
            # title = temp.xpath('./div[@class="content"]/div[@class="title"]/text()').extract()  # 标题
            # desc = temp.xpath('./div[@class="content"]/div[@class="desc"]/text()').extract()  # 描述
            # play_number = temp.xpath('.//div[@class="info-item"][1]/span/text()').extract()  # 播放次数
            # print('---***--->', rank_number, img_url, title, desc, play_number)

            """通过extract_first方法直接获取解析数据"""
            rank_number = temp.xpath('./div[@class="badge"]/text()').extract_first()  # 排名
            img_url = temp.xpath('./img/@src').extract_first()  # 图片地址
            title = temp.xpath('./div[@class="content"]/div[@class="title"]/text()').extract_first()  # 标题
            desc = temp.xpath('./div[@class="content"]/div[@class="desc"]/text()').extract_first()  # 描述
            play_number = temp.xpath('.//div[@class="info-item"][1]/span/text()').extract_first()  # 播放次数
            # print('---***--->', rank_number, img_url, title, desc, play_number)

            """
            在默认的scrapy环境中直接解析数据可能会出现警告信息:
                UserWarning: Selector got both text and root, root is being ignored.
                
                解决方式：pip install parsel==1.7.0
            """

            # 如果需要将以上数据保存到数据库, 那么必须使用yield关键字将上述数据返回给管道
            yield {
                'rank_number': rank_number,
                "img_url": img_url,
                'title': title,
                'desc': desc,
                'play_number': play_number
            }

            
if __name__ == '__main__':
    cmdline.execute('scrapy crawl qingting --nolog'.split())