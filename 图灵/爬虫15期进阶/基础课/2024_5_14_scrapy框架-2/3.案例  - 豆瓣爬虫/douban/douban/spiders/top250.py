import scrapy
from scrapy.http import HtmlResponse
from scrapy import cmdline

class Top250Spider(scrapy.Spider):
    name = "top250"
    allowed_domains = ["douban.com"]
    start_urls = ["https://movie.douban.com/top250?start=0&filter="]

    def parse(self, response):
        li_list = response.xpath("//ol[@class='grid_view']/li")
        for li_temp in li_list:
            image = li_temp.xpath(".//img/@src").extract_first()
            title = li_temp.xpath(".//span[@class='title'][1]/text()").extract_first()
            rating_num = li_temp.xpath(".//span[@class='rating_num']/text()").extract_first()
            people_num = li_temp.xpath(".//div[@class='star']/span[4]/text()").extract_first()

            # 信息验证
            print('--->', image, title, rating_num, people_num)


if __name__ == '__main__':
    cmdline.execute('scrapy crawl top250 --nolog'.split())

"""
1.豆瓣网站访问需要遵守robots协议，在setting中的ROBOTSTXT_OBEY修改成False
2.在setting文件中修改 DEFAULT_REQUEST_HEADERS 中的UA信息
"""