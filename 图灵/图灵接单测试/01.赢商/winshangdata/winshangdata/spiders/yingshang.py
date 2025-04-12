import scrapy
from scrapy.http import HtmlResponse, JsonRequest
from scrapy import cmdline


class YingshangSpider(scrapy.Spider):
    name = 'yingshang'

    def start_requests(self):
        url = 'https://www.winshangdata.com/wsapi/brand/getBigdataList3_4'
        list = ['餐饮', '儿童', '亲子', '文体娱', '零售', '生活服务', '其它类型']
        for li in list:
            for pageNum in range(1, 50):
                data = {"isHaveLink": "", "isTuozhan": "", "isXxPp": "", "kdfs": "", "key": "", "orderBy": "1",
                        "pageNum": pageNum, "pageSize": 60, "pid": "", "qy_p": "", "qy_r": "", "xqMj": "", "ytlb1": str(li),
                        "ytlb2": ""}
                # print("当前是" + str(pageNum) + "页")
                yield JsonRequest(url=url, data=data, dont_filter=False,cb_kwargs={'type': str(li)})

    def parse(self, response: HtmlResponse, type):
        result = response.json()
        if result['data'].get('list'):
            for li in result['data']['list']:
                brandId = li['brandId']
                url = 'https://www.winshangdata.com/brandDetail?brandId=' + str(brandId)
                yield scrapy.Request(url=url, callback=self.parse_data, cb_kwargs={'type': str(type)})

    def parse_data(self, response, type):
        boxes = response.xpath('//div[@class="box-shadow"]')
        for box in boxes:
            dic = dict()
            dic['type'] = str(type)
            titles = box.xpath('.//div[@class="tit-name"]/div[1]//text()')
            li_len = len(box.xpath(f'.//ul//li'))
            for title in titles:
                dic['title'] = str(title)
            for li_index in range(2, li_len):
                li_info = box.xpath(f'.//ul//li[{li_index}]/span[2]//text()')
                if li_index == 2:
                    creation_times = li_info
                    for creation_time in creation_times:
                        dic['creation_time'] = str(creation_time)
                if li_index == 4:
                    business_models = li_info
                    for business_model in business_models:
                        dic['business_model'] = str(business_model)
                if li_index == 5:
                    term_cooperations = li_info
                    for term_cooperation in term_cooperations:
                        dic['term_cooperation'] = str(term_cooperation)
                if li_index == 6:
                    area_requires = li_info
                    for area_require in area_requires:
                        dic['area_require'] = str(area_require)
            yield dic


if __name__ == '__main__':
    cmdline.execute(('scrapy crawl yingshang').split())
