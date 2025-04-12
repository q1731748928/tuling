# -*- coding: utf-8 -*-
"""
Created on 2024-05-27 16:20:42
---------
@summary:
---------
@author: hejie
"""

import feapder
from selenium.webdriver.common.by import By
from feapder.utils.webdriver import WebDriver


class RenderInfo(feapder.AirSpider):
    def start_requests(self):
        # 开启浏览器渲染使用render=True参数
        yield feapder.Request("https://www.baidu.com", render=True)

    def parse(self, request, response):
        browser: WebDriver = response.browser
        browser.find_element(By.ID, 'kw').send_keys('feapder')
        browser.find_element(By.ID, 'su').click()


if __name__ == "__main__":
    RenderInfo().start()