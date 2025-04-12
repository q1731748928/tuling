import time
import threading
import requests
from scrapy import signals # 爬虫信号

api_url = 'https://dps.kdlapi.com/api/getdps/?secret_id=oe8xm0dvinpeqwadgzar&signature=uzav5jpt6gfgujn4simiv92o6wumua6c&num=1&pt=1&format=json&sep=1'
foo = True

class Proxy:
    def __init__(self, ):
        self._proxy_list = requests.get(api_url).json().get('data').get('proxy_list')

    @property
    def proxy_list(self):
        return self._proxy_list

    @proxy_list.setter
    def proxy_list(self, list):
        self._proxy_list = list

pro = Proxy()
print(pro.proxy_list)


class ProxyExtend:
    def __init__(self, crawler):
        self.crawler = crawler
        crawler.signals.connect(self.start, signals.engine_started)
        crawler.signals.connect(self.close, signals.spider_closed)

    @classmethod
    def from_crawler(cls, crawler):
        return cls(crawler)

    # 爬虫启动创建线程并启动
    def start(self):
        t = threading.Thread(target=self.extract_proxy)
        t.start()

    def extract_proxy(self):
        while foo:
            pro.proxy_list = requests.get(api_url).json().get('data').get('proxy_list')
            #设置每15秒提取一次ip
            time.sleep(15)

    def close(self):
        global foo
        foo = False