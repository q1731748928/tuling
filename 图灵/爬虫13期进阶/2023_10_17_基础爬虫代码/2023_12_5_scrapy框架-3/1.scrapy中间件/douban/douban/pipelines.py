# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import os

import pymongo
from itemadapter import ItemAdapter


class DoubanPipeline:
    def process_item(self, item, spider):
        type_ = item.get('type')

        if type_ == 'info':
            mongo_client = pymongo.MongoClient()
            collection = mongo_client['py_spider']['doubanTop250']
            collection.insert_one(item)
            print("数据插入成功:", item.get('title'))

        elif type_ == 'image':
            download_path = os.getcwd() + '/download/'
            if not os.path.exists(download_path):
                os.mkdir(download_path)

            image_name = item.get('image_name')
            image_content = item.get('image_content')
            with open(download_path + image_name, 'wb') as f:
                f.write(image_content)
                print("下载成功:", image_name)
        else:
            print("类型不符合规定...")
        # return item