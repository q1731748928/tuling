import scrapy
from scrapy import cmdline

class BiaduSpider(scrapy.Spider):
    name = 'baidu'
    allowed_domains = ['www.baidu.com']
    start_urls = ['http://www.baidu.com/']

    # 作用：解析返回的响应对象
    def parse(self, response):
        pass


if __name__ == '__main__':
    cmdline.execute('scrapy crawl baidu'.split())

    """
    scarpy爬虫启动方式有两种:
        1.cmdline.execute('scrapy crawl 爬虫名称'.split())
        
        2.在终端中进入到项目根目录之下运行以下指令:
            scrapy crawl 爬虫名称
    """