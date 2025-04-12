

from DrissionPage import ChromiumPage
import pymongo
from DrissionPage.common import By



class DouDing():
    def __init__(self):
        self.url = 'https://kaoyan.docin.com/pdfreader/web/#/docin/documents?type=1&keyword=%E5%A4%8D%E8%AF%95%E4%BB%BF%E7%9C%9F%E6%A8%A1%E6%8B%9F'
        self.page = ChromiumPage()
        self.page.listen.start('api/web/document/list')
        self.cli = pymongo.MongoClient(host='127.0.0.1')
        self.cll = self.cli['spiders16']['douding']
        # self.page.run_js()

    def get_data(self):
        self.page.get(self.url)
        for i in self.page.listen.steps(count=20):
            self.parse_data(i.response.body)
            self.page.ele((By.CLASS_NAME, 'btn-next')).click()

    def parse_data(self, data):
        for i in data['Data']['DocumentInfos']:
            item = {}
            item['DocumentGuid'] = i['DocumentGuid']
            item['DocumentName'] = i['DocumentName']
            item['DocumentPrice'] = i['DocumentPrice']
            self.save_Data(item)


    def save_Data(self, item):
        print(item)
        self.cll.insert_one(item)

    def main(self):
        self.get_data()

if __name__ == '__main__':
    dd = DouDing()
    dd.main()









