# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import pymysql

class WinshangdataPipeline:
    mysql = None
    cursor = None
    def open_spider(self, spider):
        self.mysql = pymysql.Connect(host='localhost', user='root', password='123456', port=3306, charset='utf8',
                                     database='yingshang')
        self.cursor = self.mysql.cursor()  # 创建游标对象

    def process_item(self, item, spider):
        # 创建表
        table = 'create table if not exists yingshang_info(' \
                'id int not null primary key auto_increment' \
                ',title varchar(250)' \
                ',type varchar(250)' \
                ',creation_time varchar(255)' \
                ',business_model varchar(255)' \
                ',term_cooperation varchar(255)' \
                ',area_require varchar(255)' \
                ');'

        sql = 'insert into yingshang_info(title,type,creation_time,business_model,term_cooperation,area_require) values("%s","%s","%s","%s","%s","%s")' % (
        item['title'],item['type'],item['creation_time'], item['business_model'], item['term_cooperation'], item['area_require'])

        try:
            # 创建表
            self.cursor.execute(table)
            # 插入数据
            self.cursor.execute(sql)
            self.mysql.commit()

        except Exception as e:
            print('===============插入数据失败===============', e)
            self.mysql.rollback()

        return item  # 传递给下一个即将被执行的管道类

    # 关闭MySQL连接
    def close_spider(self, spider):
        self.cursor.close()
        self.mysql.close()

