# -*- coding: utf-8 -*-
"""
Created on 2024-05-29 17:54:16
---------
@summary:
---------
@author: hejie
"""
import time
import feapder
from random import randint
from items import wp_shop_info_item
from selenium.webdriver.common.by import By
from feapder.utils.webdriver import WebDriver


class WpSpider(feapder.AirSpider):
    def start_requests(self):
        url = 'https://category.vip.com/suggest.php?keyword=%E6%88%92%E6%8C%87&ff=235%7C12%7C1%7C1&page={}'
        for page in range(1, 18):
            yield feapder.Request(url=url.format(page), render=True)

    def parse(self, request, response):
        browser: WebDriver = response.browser
        time.sleep(2)  # 让浏览器将数据全部加载出来
        # 让浏览器自动下滑
        self.drop_down(browser)

        div_list = browser.find_elements(
            By.XPATH,
            '//section[@id="J_searchCatList"]/div[@class="c-goods-item  J-goods-item c-goods-item--auto-width"]'
        )
        for div in div_list:
            item = wp_shop_info_item.WpShopInfoItem()
            price = div.find_element(By.XPATH,
                                     './/div[@class="c-goods-item__sale-price J-goods-item__sale-price"]').text

            title = div.find_element(By.XPATH, './/div[2]/div[2]').text

            item['title'] = title
            item['price'] = price

            yield item  # 将解析好的数据保存到MySQL中

    @staticmethod
    def drop_down(browser):
        for i in range(1, 12):
            js_code = f'document.documentElement.scrollTop = {i * 1000}'
            browser.execute_script(js_code)
            time.sleep(randint(1, 2))


if __name__ == "__main__":
    WpSpider().start()
