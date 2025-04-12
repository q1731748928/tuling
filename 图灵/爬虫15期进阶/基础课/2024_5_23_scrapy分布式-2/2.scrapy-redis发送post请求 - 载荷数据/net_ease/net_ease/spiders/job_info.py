import json
import scrapy
from scrapy import cmdline
from scrapy.http import HtmlResponse,JsonRequest
from scrapy_redis.spiders import RedisSpider


class JobInfoSpider(RedisSpider):
    name = 'job_info'
    redis_key = "job:start_json"

    def make_request_from_data(self, data):
        url = 'https://hr.163.com/api/hr163/position/queryPage'
        data = json.loads(data)
        json_data = data.get('json_data')
        print('从redis中获取的载荷信息为:', json_data)
        return JsonRequest(url, data=json_data)

    def parse(self, response: HtmlResponse, **kwargs):
        print('响应信息为:', response.json())


if __name__ == '__main__':
    cmdline.execute('scrapy crawl job_info'.split())