# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import pymongo


class FmPipeline:
    """
    item参数：接受到的数据是spider文件yield返回的数据

    管道需要自己手动在setting中激活
    """
    def process_item(self, item, spider):
        mongo_client = pymongo.MongoClient()
        collection = mongo_client['py_spider']['scrapy_fm_info']
        collection.insert_one(item)
        print('数据插入成功:', item)
