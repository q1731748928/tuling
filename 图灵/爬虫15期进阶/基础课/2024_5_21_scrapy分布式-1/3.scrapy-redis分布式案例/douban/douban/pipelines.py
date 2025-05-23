# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import base64
import os
import pymongo
from itemadapter import ItemAdapter


class DouBanPipeline:
    def process_item(self, item, spider):
        type_ = item.get('type_')
        if type_ == 'info':
            mongo_client = pymongo.MongoClient()
            collection = mongo_client['py_spider']['movie_info']
            collection.insert_one(item)
            print('数据插入成功:', item.get('title'))
        elif type_ == 'image':
            download_path = os.getcwd() + '/download/'
            if not os.path.exists(download_path):
                os.mkdir(download_path)
            # 图片保存
            image_name = item.get("image_name")
            image_content = item.get("image_content")

            image_content = base64.b64decode(image_content.encode())  # 还原成字节
            with open(download_path + image_name, "wb") as f:
                f.write(image_content)
                print("图片保存成功: ", image_name)
        else:
            print('数据类型不符合规定...')

        return item
