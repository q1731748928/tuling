import time
import redis
import pymongo
import hashlib
import requests
from multiprocessing import Process, JoinableQueue as Queue


class MovieInfo:
    # 对于数据库连接对象不能在进程环境声明成实例属性
    mongo_client = pymongo.MongoClient()
    collection = mongo_client['py_spider']['mg_movie']
    redis_client = redis.Redis()

    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        }

        self.url = "https://pianku.api.mgtv.com/rider/list/pcweb/v3"

        self.param_queue = Queue()
        self.json_queue = Queue()
        self.content_queue = Queue()

    # 上传翻页信息
    def put_params(self):
        for page in range(1, 6):
            params_dict = {
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
            self.param_queue.put(params_dict)

    # 请求数据
    def get_movie_info(self):
        while True:
            params_info = self.param_queue.get()
            response = requests.get(self.url, headers=self.headers, params=params_info).json()
            self.json_queue.put(response)
            self.param_queue.task_done()

    #  数据结构调整
    def parse_info(self):
        response = self.json_queue.get()
        movie_list = response['data']['hitDocs']
        for movie in movie_list:
            item = dict()
            item['title'] = movie['title']
            item['subtitle'] = movie['subtitle']
            item['story'] = movie['story']
            self.content_queue.put(item)
        self.json_queue.task_done()

    # 去重方法
    @staticmethod
    def get_md5(dict_item):
        md5_hash = hashlib.md5(str(dict_item).encode('utf-8')).hexdigest()
        return md5_hash

    # 数据保存
    def save_movie_info(self):
        while True:
            item = self.content_queue.get()
            md5_hash = self.get_md5(item)
            result = self.redis_client.sadd("mg_movie:filter", md5_hash)
            if result:
                self.colleciton.insert_one(item)
                print("数据插入成功:", item)
            else:
                print("数据重复...")
            self.content_queue.task_done()

    #
    def close_spider(self):
        print("爬虫即将退出，准备关闭数据库连接...")
        self.mongo_client.close()
        self.redis_client.close()

    # 启动函数
    def main(self):
        process_list = list()
        p_put_params = Process(target=self.put_params)
        process_list.append(p_put_params)

        for _ in range(3):
            p_get_movie = Process(target=self.get_movie_info)
            process_list.append(p_get_movie)

        p_parse_info = Process(target=self.parse_info)
        process_list.append(p_parse_info)

        for process_obj in process_list:
            process_obj.daemon = True
            process_obj.start()

        time.sleep(2)

        # 如果队列中的任务没有完成则堵塞主进程
        for q in [self.param_queue, self.json_queue, self.content_queue]:
            q.join()
        print("主进程即将结束...")

        self.close_spider() # 主进程运行爬虫关闭代码


if __name__ == '__main__':
    movie_info = MovieInfo()
    movie_info.main()


"""
将以上案例修改为进程池,进程池无需使用队列
"""
