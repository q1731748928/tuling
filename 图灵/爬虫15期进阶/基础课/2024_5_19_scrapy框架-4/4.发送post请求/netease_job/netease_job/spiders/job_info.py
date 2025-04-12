import scrapy
from jsonpath import jsonpath
from scrapy import cmdline
from scrapy.http import HtmlResponse, JsonRequest

class JobInfoSpider(scrapy.Spider):
    name = 'job_info'

    def start_requests(self):
        url = "https://hr.163.com/api/hr163/position/queryPage"
        for page in range(1, 179):
            json_data = {
                "currentPage": page,
                "pageSize": 10,
                "workType": "0"
            }

            yield JsonRequest(url=url, data=json_data, dont_filter=False)


    def parse(self, response: HtmlResponse, **kwargs):
        result = response.json()
        print(result)


if __name__ == '__main__':
    cmdline.execute('scrapy crawl job_info'.split())