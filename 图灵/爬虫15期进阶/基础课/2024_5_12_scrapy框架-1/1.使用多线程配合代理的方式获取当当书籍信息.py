import pymongo
import requests
import threading
from lxml import etree
from queue import Queue
from retrying import retry
from fake_useragent import UserAgent

class DangDangShop:
    mongo_client = pymongo.MongoClient()
    collection = mongo_client['py_spider']['dangdang_shop']

    def __init__(self):
        self.url = 'https://search.dangdang.com/?key=python&act=input&page_index=1'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        }

        # 代理池api
        self.ip_url = 'https://dps.kdlapi.com/api/getdps/?secret_id=oon8a1njpzn5h6afrzi9&num=1&signature=andy8bntbwdikgzuomc5kbiwqxmlgyqn&pt=1&sep=1'

        # 队列对象
        self.ip_queue = Queue()
        self.url_queue = Queue()
        self.response_queue = Queue()
        self.detail_queue = Queue()

    # 获取ip并上传到ip队列
    def get_ip(self):
        proxy_ip = requests.get(self.ip_url).text
        self.ip_queue.put(proxy_ip)

    # 访问页面首页并返回响应对象
    def get_goods_index(self):
        # self.headers['User-Agent'] = UserAgent().random
        response = requests.get(self.url, headers = self.headers)
        return response

    # 获取商品列表翻页数据
    def get_page_num(self, response):
        tree = etree.HTML(response.text)
        max_page = tree.xpath("//ul[@name='Fy']/li[last()-2]/a/text()")[0]
        if max_page:
            for page in range(1, int(max_page) + 1):
                url = 'https://search.dangdang.com/?key=python&act=input&page_index={}'.format(page)
                self.url_queue.put(url)
            else:
                self.url_queue.put(self.url)

    # 访问翻页地址
    @retry(stop_max_attempt_number=5)
    def get_goods_list(self):
        while True:
            if self.ip_queue.empty():
                self.get_ip()
            proxy_ip = self.ip_queue.get()
            url = self.url_queue.get()

            # 在出现异常之前调用task_done
            # self.ip_queue.task_done()
            self.url_queue.task_done()

            username = 'd2348901739'
            password = '4w0yvb3s'
            proxies = {
                "http": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": proxy_ip},
                "https": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": proxy_ip}
            }

            self.headers['User-Agent'] = UserAgent().random
            response = requests.get(url, headers = self.headers, proxies = proxies, timeout = 5)
            print('UA池信息:', self.headers)
            self.response_queue.put(response)

            # 代理重用
            if response.status_code == 200:
                print('当前代理ip已请求成功:', proxy_ip)
                self.ip_queue.put(proxy_ip)
            else:
                print('代理不可用...')

    # 数据解析
    def parse_info(self):
        while True:
            response = self.response_queue.get()
            tree = etree.HTML(response.text)

            li_list = tree.xpath("//ul[@class='bigimg']/li")
            for li in li_list:
                item = dict()
                goods_name = li.xpath("./a/@title")
                goods_price = li.xpath("p[@class='price']/span[1]/text()")

                item['goods_name'] = goods_name[0]
                item['goods_price'] = goods_price[0] if goods_price else '空'

                self.detail_queue.put(item)
            self.response_queue.task_done()

    # 数据保存
    def save_info(self):
        while True:
            detail = self.detail_queue.get()
            self.collection.insert_one(detail)
            print("数据保存成功:", detail)
            self.detail_queue.task_done()

    def close_spider(self):
        self.mongo_client.close()
        print('爬虫即将退出, 数据库链接已关闭...')

    # 启动函数
    def main(self):
        response = self.get_goods_index()
        self.get_page_num(response)

        # 线程列表
        thread_list = list()
        for _ in range(5):
            thread_obj = threading.Thread(target=self.get_goods_list)
            thread_list.append(thread_obj)

        for _ in range(5):
            thread_obj = threading.Thread(target=self.parse_info)
            thread_list.append(thread_obj)

        save_thread = threading.Thread(target=self.save_info)
        thread_list.append(save_thread)

        for temp in thread_list:
            temp.daemon = True
            temp.start()

        for queue in [self.url_queue, self.response_queue, self.detail_queue]:
            queue.join()

        # 关闭爬虫
        self.close_spider()


if __name__ == '__main__':
    dd_shop = DangDangShop()
    dd_shop.main()

