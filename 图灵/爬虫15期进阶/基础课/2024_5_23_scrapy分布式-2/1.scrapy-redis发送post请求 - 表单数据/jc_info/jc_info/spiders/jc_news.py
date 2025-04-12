import json
import scrapy
from scrapy import cmdline
from scrapy import FormRequest
from scrapy.http import HtmlResponse
from scrapy_redis.spiders import RedisSpider

class JcNewsSpider(RedisSpider):
    name = 'jc_news'
    redis_key = "jc:start_form"

    def make_request_from_data(self, data):
        url = 'http://www.cninfo.com.cn/new/disclosure'
        data = json.loads(data)
        form_data = data.get('form_data')

        # 不是通过yield返回数据的
        return FormRequest(url=url, formdata=form_data)

    def parse(self, response: HtmlResponse, **kwargs):
        print('响应信息:', response.json())


if __name__ == '__main__':
    cmdline.execute(('scrapy crawl jc_news').split())