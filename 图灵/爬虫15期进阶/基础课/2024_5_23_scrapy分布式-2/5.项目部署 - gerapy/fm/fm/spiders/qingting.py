import scrapy
from scrapy.http import HtmlResponse
from scrapy import cmdline

class QingTingSpider(scrapy.Spider):
    name = 'qingting'
    allowed_domains = ['m.qingting.fm']
    start_urls = ['http://m.qingting.fm/rank']

    def parse(self, response: HtmlResponse, **kwargs):
        # 在scrapy框架环境中不需要自己手动发送请求就可以获取到响应对象
        # response：响应对象
        # print(response)

        # 响应对象中的属性和方法
        print('响应地址:', response.url)
        print('响应头:', response.headers)
        print('响应状态码:', response.status)
        print('响应体:', response.body) # 字节数据
        print('请求地址:', response.request.url)
        print('请求头:', response.request.headers)
        print('文本数据:', response.text)


if __name__ == '__main__':
    cmdline.execute('scrapy crawl qingting --nolog'.split())