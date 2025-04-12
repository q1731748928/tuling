# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import pymongo
import os


class FmPipeline:
    def process_item(self, item, spider):
        # 获取数据的类型
        type_ = item.get('type_')

        if type_ == 'info':
            mongo_client = pymongo.MongoClient()
            collection = mongo_client['py_spider']['qingting_info']
            collection.insert_one(item)
            print('数据插入成功:', item.get('title'))
        elif type_ == 'image':
            # 创建图片的下载文件夹
            download_path = os.getcwd() + "/download/"
            if not os.path.exists(download_path):
                os.mkdir(download_path)

            # 图片保存
            image_name = item.get('image_name')
            image_content = item.get('image_content')

            if image_name:
                with open(download_path + image_name, 'wb') as f:
                    f.write(image_content)
                    print('图片保存成功:', image_name)

        else:
            print('数据不符合规定...')

