import scrapy
from scrapy import cmdline
from scrapy.http import HtmlResponse


class JcNewsSpider(scrapy.Spider):
    name = 'jc_news'

    def start_requests(self):
        url = "http://www.cninfo.com.cn/new/disclosure"
        for page in range(1, 15):
            data = {
                "column": "szse_latest",
                "pageNum": str(page),
                "pageSize": "30",
                "sortName": "",
                "sortType": "",
                "clusterFlag": "true"
            }

            yield scrapy.FormRequest(url=url, formdata=data, dont_filter=False)

    def parse(self, response):
        for info_list in response.json()['classifiedAnnouncements']:
            for info in info_list:
                item = dict()
                item['announcementTitle'] = info['announcementTitle']
                item['announcementTypeName'] = info['announcementTypeName']
                item['batchNum'] = info['batchNum']
                item['secName'] = info['secName']
                item['adjunctType'] = info['adjunctType']
                yield item


if __name__ == '__main__':
    cmdline.execute('scrapy crawl jc_news'.split())