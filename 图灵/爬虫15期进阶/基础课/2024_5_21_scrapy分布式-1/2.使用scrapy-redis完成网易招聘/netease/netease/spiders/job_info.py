import scrapy
from scrapy.http import JsonRequest
from scrapy.http import HtmlResponse


class JobInfoSpider(scrapy.Spider):
    name = 'job_info'
    allowed_domains = ['hr.163.com']

    # start_urls = ['https://hr.163.com/']

    def start_requests(self):
        api_url = 'https://hr.163.com/api/hr163/position/queryPage'
        for page in range(1, 26):
            json_data = {
                "currentPage": page,
                "pageSize": 10,
                "keyword": "python"
            }
            yield JsonRequest(api_url, data=json_data)

    def parse(self, response: HtmlResponse, **kwargs):
        work_list = response.json()['data']['list']
        for work in work_list:
            item = dict()
            item['work_id'] = work['id']
            item['postTypeFullName'] = work['postTypeFullName']
            item['reqEducationName'] = work['reqEducationName']
            item['workPlaceNameList'] = work['workPlaceNameList'][0]
            item['requirement'] = work['requirement']

            yield item
