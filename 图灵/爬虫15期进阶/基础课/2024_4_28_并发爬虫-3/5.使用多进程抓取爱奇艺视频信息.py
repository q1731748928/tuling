import pymongo
import requests
import threading
from queue import Queue

class AiQiYi:
    def __init__(self):
        self.mongo_client = pymongo.MongoClient(host='localhost', port=27017)
        self.collection = self.mongo_client['py_spider']['Thread_AiQiYi']
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
            'Referer': 'https://list.iqiyi.com/www/2/15-------------11-1-1-iqiyi--.html?s_source=PCW_SC'
        }
        self.api_url = 'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=2&data_type=1&mode=11&page_id={}&ret_num=48&session=85dd981b69cead4b60f6d980438a5664&three_category_id=15;must'

        # 创建队列对象
        self.url_queue = Queue()  # 请求地址队列
        self.json_queue = Queue()  # json数据队列
        self.content_dict_queue = Queue()  # 内容字典队列

    # 拼接请求地址
    def get_url(self):
        for page in range(1, 6):
            self.url_queue.put(self.api_url.format(page))  # 将请求地址上传到url队列

    # 发送请求并获取json数据
    def get_api_json(self):
        while True:
            url = self.url_queue.get()
            response = requests.get(url, headers=self.headers)
            self.json_queue.put(response.json())  # 将获取的json数据上传到json队列
            self.url_queue.task_done()  # 让url队列获取一条数据后队列内部计数器减1

    # 调整数据结构
    def parse_movie_info(self):
        while True:
            json_data = self.json_queue.get()
            category_movies = json_data['data']['list']
            for movie in category_movies:
                item = dict()
                item['title'] = movie['title']
                item['playUrl'] = movie['playUrl']
                item['description'] = movie['description']
                self.content_dict_queue.put(item)  # 将内容上传到内容字典队列

            self.json_queue.task_done()  # 循环上传字典数据完成后则json队列计数器减1

    # 数据保存
    def save_movie_info(self):
        while True:
            item = self.content_dict_queue.get()
            self.collection.insert_one(item)
            print('插入成功:', item)
            self.content_dict_queue.task_done()  # 获取一条内容让内容字典队列计数器减1

    # 启动函数
    def main(self):
        # 初始化线程对象列表
        thread_list = list()

        # 创建获取url地址的线程对象并加入到线程对象列表中
        t_url = threading.Thread(target=self.get_url)
        thread_list.append(t_url)

        # 创建发送请求的线程对象并加入到线程对象列表中
        for _ in range(3):
            t_get_json = threading.Thread(target=self.get_api_json)
            thread_list.append(t_get_json)

        # 创建数据提取的线程对象并加入到线程对象列表中
        t_parse_info = threading.Thread(target=self.parse_movie_info)
        thread_list.append(t_parse_info)

        # 创建保存数据的线程对象并加入到线程对象列表中
        t_save_info = threading.Thread(target=self.save_movie_info)
        thread_list.append(t_save_info)

        # 循环线程列表设置线程对象为守护线程并启动
        for thread_obj in thread_list:
            thread_obj.daemon = True
            thread_obj.start()
            # join会导致守护线程失效
            # thread_obj.join()

        # 判断所有队列中的计数器是否为零, 如果为零则退出程序, 否则让主线程堵塞
        for queue in [self.url_queue, self.json_queue, self.content_dict_queue]:
            queue.join()

        # 任务完成后释放数据库连接
        self.mongo_client.close()
        print('主线程结束...')


if __name__ == '__main__':
    aqy = AiQiYi()
    aqy.main()
