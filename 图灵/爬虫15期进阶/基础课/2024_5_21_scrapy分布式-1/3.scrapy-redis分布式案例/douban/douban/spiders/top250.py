import base64
import scrapy
from scrapy.http import HtmlResponse
from scrapy import cmdline
from scrapy_redis.spiders import RedisSpider

class Top250Spider(RedisSpider):
    name = "top250"
    # allowed_domains = ["douban.com"]
    # start_urls = ["https://movie.douban.com/top250"]

    redis_key = 'top250:start_urls'

    def parse(self, response):
        li_list = response.xpath("//ol[@class='grid_view']/li")
        for li_temp in li_list:
            image_url = li_temp.xpath(".//img/@src").extract_first()
            title = li_temp.xpath(".//span[@class='title'][1]/text()").extract_first()
            rating_num = li_temp.xpath(".//span[@class='rating_num']/text()").extract_first()
            people_num = li_temp.xpath(".//div[@class='star']/span[4]/text()").extract_first()

            yield {
                'type_': 'info',
                'image': image_url,
                'title': title,
                'rating_num': rating_num,
                'people_num': people_num
            }

            # 创建一个新的request对象去请求图片数据
            yield scrapy.Request(url=image_url, callback=self.parse_image, cb_kwargs={'image_name': title})

        # 翻页逻辑
        if response.xpath("//span[@class='next']/a/@href"):
            # url拼接
            next_url = response.urljoin(response.xpath("//span[@class='next']/a/@href").extract_first())
            print('开始抓取下一页:', next_url)
            yield scrapy.Request(url=next_url, callback=self.parse)
        else:
            print('全站抓取完成...')

    # 创建针对图片的处理方法
    def parse_image(self, response, image_name):
        base64_data = base64.b64encode(response.body)
        str_data = base64_data.decode()

        yield {
            'type_': 'image',
            'image_name': image_name + ".jpg",
            'image_content': str_data
        }


if __name__ == '__main__':
    cmdline.execute('scrapy crawl top250 --nolog'.split())
