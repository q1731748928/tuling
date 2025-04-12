# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import hashlib
import json

import pymongo
import redis
from itemadapter import ItemAdapter
from scrapy.exceptions import DropItem

# 针对数据进行去重
class TxWorkCheckPipeline:
    def open_spider(self, spider):
        if spider.name == 'tx_work_info':
            self.redis_client = redis.Redis()

    def process_item(self, item, spider):
        if spider.name == 'tx_work_info':
            item_str = json.dumps(item)
            md5_hash = hashlib.md5(item_str.encode()).hexdigest()
            if self.redis_client.get(f'tx_work_info_filter: {md5_hash}'):
                raise DropItem('数据重复...')
            else:
                self.redis_client.set(f'tx_work_info_filter: {md5_hash}', item_str)
            return item

    def close_spider(self, spider):
        if spider.name == 'tx_work_info':
            self.redis_client.close()


class TxWorkMongoPipeline:
    def open_spider(self, spider):
        if spider.name == 'tx_work_info':
            self.mongo_client = pymongo.MongoClient()
            self.collection = self.mongo_client['py_spider']['tx_work_info']

    def process_item(self, item, spider):
        if spider.name == 'tx_work_info':
            self.collection.insert_one(item)
            print('数据保存成功:', item)

    def close_spider(self, spider):
        if spider.name == 'tx_work_info':
            self.mongo_client.close()




