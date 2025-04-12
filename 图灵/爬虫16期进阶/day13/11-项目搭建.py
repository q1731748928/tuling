

import requests
import threading
import time
import pymysql
from queue import Queue
from lxml import etree
from retrying import retry
from loguru import logger





class ChaXun():
    def __init__(self):
        self.db = pymysql.connect(host='127.0.0.1', user='root', password='root', db='spiders16')
        self.cursor = self.db.cursor()
        self.index_url = 'https://qq.ip138.com/train/'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
        }
        self.ip_url = 'https://dps.kdlapi.com/api/getdps/?secret_id=ouy6zuogcnb6t516855l&signature=obeii7n9z1em5vk9lsmgz4uob2&num=1&pt=1&format=text&sep=1'
        self.username = 'd2952905742'
        self.password = 'cixv0obv'
        self.ip_queue = Queue()
        self.province_url_queue = Queue()
        self.detail_url_queue = Queue()
        self.data_queue = Queue()

    def create_table(self):
        # 使用预处理语句创建表
        sql = '''
                    CREATE TABLE IF NOT EXISTS huoche(
                        id int primary key auto_increment not null,
                        train_number VARCHAR(255) NOT NULL, 
                        Train_type VARCHAR(255) NOT NULL,
                        starting_station VARCHAR(255) NOT NULL,
                        way_station VARCHAR(255) NOT NULL,
                        destination VARCHAR(255) NOT NULL
                        )
                    '''
        try:
            self.cursor.execute(sql)
            print("CREATE TABLE SUCCESS.")
        except Exception as ex:
            print(f"CREATE TABLE FAILED,CASE:{ex}")



    def get_data(self):
        # 发生请求
        pass

    def get_province_url(self):
        # 获取省份的url
        pass


    def detail_url_get(self):
        # 获取市区的url
        pass

    def parse_data(self):
        # 解析数据  解析火车票的数据
        pass

    def save_data(self):
        # 保存数据
        pass

    def main(self):
        # 主函数
        pass

if __name__ == '__main__':
    hc = ChaXun()
    hc.main()





