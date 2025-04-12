# -*- coding: utf-8 -*-
"""
Created on 2024-05-29 08:28:24
---------
@summary:
---------
@author: hejie
"""

import time
import feapder
from feapder.utils.webdriver import WebDriver


class FeapderXhrRender(feapder.AirSpider):
    def start_requests(self):
        yield feapder.Request("https://spidertools.cn", render=True)

    def parse(self, request, response):
        browser: WebDriver = response.browser

        # 让程序休眠等待浏览器加载接口数据
        time.sleep(2)

        # 拦截代码：返回的是response xhr 响应对象
        xhr_response = browser.xhr_response('/ad')
        print("请求接口: ", xhr_response.request.url) # 请求链接
        print("请求头: ", xhr_response.request.headers) # 请求头信息：不完整的
        print("请求体: ", xhr_response.request.data)
        print("响应头: ", xhr_response.headers)
        print("返回地址: ", xhr_response.url)
        print("返回内容: ", xhr_response.content)

        # 打印接口信息
        # 如果接口返回的是文本数据则调用xhr_text方法
        # ad = browser.xhr_text('/tools/ad')
        # print(ad)


if __name__ == "__main__":
    FeapderXhrRender().start()