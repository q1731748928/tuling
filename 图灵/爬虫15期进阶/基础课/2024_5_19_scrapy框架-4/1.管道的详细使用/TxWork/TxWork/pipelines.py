# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import json
import pymongo
from itemadapter import ItemAdapter
from scrapy.exceptions import DropItem


class TxWorkFilePipeline:
    def open_spider(self, spider):
        # 可以根据spider判断是哪个爬虫开启了
        if spider.name == 'tx_work_info':
            # 如果条件成立则开启文件对象
            self.file_obj = open('work_info.txt', 'a', encoding='utf-8')

    def process_item(self, item, spider):
        """
        在当前方法中可以判断item数据是否符合要求：
            1.不满足要求
                1.1.可以使用scrapy内置的异常将不符合要求的数据抛弃掉
                    raise DropItem

                1.2.也可以使用简单的return None丢弃数据
        """
        if spider.name == 'tx_work_info':
            self.file_obj.write(json.dumps(item, ensure_ascii=False, indent=4) + "\n")
        return item # 如果存在两个管道则需要通过return将第一个管道中的数据传递给下一个管道

    def close_spider(self, spider):
        if spider.name == 'tx_work_info':
            self.file_obj.close()

class TxWorkMongoPipeline:
    def open_spider(self, spider):
        # 可以根据spider判断是哪个爬虫开启了
        if spider.name == 'tx_work_info':
            self.mongo_client = pymongo.MongoClient()
            self.collection = self.mongo_client['py_spider']['tx_work_info']

    def process_item(self, item, spider):
        if spider.name == 'tx_work_info':
            self.collection.insert_one(item)
            print('数据保存成功:', item.get('title'))
            return item

    def close_spider(self, spider):
        if spider.name == 'tx_work_info':
            self.mongo_client.close()

