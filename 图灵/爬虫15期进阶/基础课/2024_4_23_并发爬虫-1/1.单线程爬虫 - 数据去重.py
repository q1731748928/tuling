import redis
import pymongo
import hashlib  # 将获取的数据进行hash，md5的格式数据

import requests


class MovieInfo:
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    }
    api_url = 'https://pianku.api.mgtv.com/rider/list/pcweb/v3'

    def __init__(self):
        self.mongo_client = pymongo.MongoClient(host='localhost', port=27017)
        self.collection = self.mongo_client['py_spider']['mg_movie_info']
        self.redis_client = redis.Redis()

    # 数据提取并调整数据结构
    def parse_movie_info(self, response):
        movie_list = response['data']['hitDocs']
        for movie in movie_list:
            item = dict()
            item['title'] = movie['title']
            item['subtitle'] = movie['subtitle']
            item['story'] = movie['story']

            # 当数据结构调整完毕后进行数据保存
            # self.get_md5(item)

            self.save_movie_info(item)

    # 完成数据去重
    @staticmethod
    def get_md5(value):
            md5_hash = hashlib.md5(str(value).encode('utf-8')).hexdigest()
            return md5_hash

    def save_movie_info(self, item):
        md5_hash = self.get_md5(item)
        # 在添加重复数据时返回的操作结果为0
        result = self.redis_client.sadd('movie.filter', md5_hash)
        if result:
            self.collection.insert_one(item)
            print("数据插入成功:", item)
        else:
            print("数据重复...")



    def main(self):
        for page in range(1,6):
            params = {
                "allowedRC": "1",
                "platform": "pcweb",
                "channelId": "2",
                "pn": page,
                "pc": "80",
                "hudong": "1",
                "_support": "10000000",
                "kind": "19",
                "area": "10",
                "year": "all",
                "chargeInfo": "a1",
                "sort": "c2",
                "feature": "all"
            }
            response = self.get_movie_info(params)
            self.parse_movie_info(response)

        # 释放数据库连接
        self.close_spider()

    def close_spider(self):
        print("数据库即将关闭...")
        self.redis_client.close()
        self.mongo_client.close()

    # 数据请求
    @classmethod
    def get_movie_info(cls, params_attr):
        response = requests.get(cls.api_url, headers=cls.headers, params=params_attr).json()
        return response


if __name__ == '__main__':
    movie_info = MovieInfo()
    movie_info.main()