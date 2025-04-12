import scrapy
from scrapy import cmdline
from scrapy.http import HtmlResponse


class Top250Spider(scrapy.Spider):
    name = "top250"

    # allowed_domains = ["douban.com", "doubanio.com"]
    start_urls = ["https://movie.douban.com/top250"]

    def parse(self, response: HtmlResponse, **kwargs):
        li_list = response.xpath("//ol[@class='grid_view']/li")
        for li_temp in li_list:
            image_url = li_temp.xpath(".//img/@src").extract_first()
            title = li_temp.xpath(".//span[@class='title'][1]/text()").extract_first()
            rating_num = li_temp.xpath(".//span[@class='rating_num']/text()").extract_first()
            people_num = li_temp.xpath(".//div[@class='star']/span[4]/text()").extract_first()

            yield {
                'type': 'info',
                'image': image_url,
                'title': title,
                'rating_num': rating_num,
                'people_num': people_num
            }

        if response.xpath("//span[@class='next']/a/@href"):
            next_url = response.urljoin(response.xpath("//span[@class='next']/a/@href").extract_first())
            print('开始抓取下一页: ', next_url)
            yield scrapy.Request(url=next_url, callback=self.parse)
        else:
            print('全站抓取完成...')

# 如果需要使用scrapy中自带的增量功能，则需要通过命令行的形式启动爬虫
# if __name__ == '__main__':
#     cmdline.execute('scrapy crawl top250'.split())