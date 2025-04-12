# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import pymongo
from itemadapter import ItemAdapter


class NetEasePipeline:

    def open_spider(self, spider):
        self.mongo_client = pymongo.MongoClient()
        self.collection = self.mongo_client['py_spider']['job_info']

    def process_item(self, item, spider):
        if spider.name == 'job_info':
            self.collection.insert_one(item)
            print('保存成功:', item)
        return item

    def close_spider(self):
        self.mongo_client.close()