import time
from random import randint
from pymongo import MongoClient
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome import service  # 指定驱动路径的

# 自定义驱动文件地址
service = service.Service(executable_path='chromedriver')


class WpShop:
    def __init__(self):
        self.mongo_client = MongoClient('localhost', 27017)
        self.collections = self.mongo_client['py_spider']['wp_shop']

        self.options = webdriver.ChromeOptions()
        prefs = {"profile.managed_default_content_settings.images": 2}
        self.options.add_experimental_option('prefs', prefs)
        self.browser = webdriver.Chrome(service=service, options=self.options)

    # 访问网站并搜索指定商品
    def search_shop(self):
        self.browser.get('https://www.vip.com/')
        wait = WebDriverWait(self.browser, 10)

        el_input = wait.until(EC.presence_of_element_located((
            By.XPATH, '//input[@class="c-search-input  J-search-input"]'
        )))
        el_input.send_keys('戒指')

        el_button = wait.until(EC.presence_of_element_located((
            By.XPATH, '//a[@class="c-search-button  J-search-button  J_fake_a"]'
        )))

        # 如果不休眠则点击搜索失效
        time.sleep(2)
        el_button.click()
        time.sleep(randint(1, 3))

    # 页面滚动
    def drop_down(self):
        for num in range(1, 10):
            js_code = f'window.scrollBy(0, {num * 1000})'
            self.browser.execute_script(js_code)
            time.sleep(randint(1, 2))

    # 数据提取
    def parse_info(self):
        self.drop_down()
        div_list = self.browser.find_elements(
            By.XPATH,
            '//section[@id="J_searchCatList"]/div[@class="c-goods-item  J-goods-item c-goods-item--auto-width"]'
        )
        for div in div_list:
            price = div.find_element(
                By.XPATH,
                './/div[@class="c-goods-item__sale-price J-goods-item__sale-price"]'
            ).text

            title = div.find_element(
                By.XPATH,
                './/div[2]/div[2]'
            ).text

            item = {
                'title': title,
                'price': price
            }
            self.save_info(item)
        # 翻页
        self.next_page()

    def save_info(self, item):
        self.collections.insert_one(item)
        print('保存成功:', item)

    def next_page(self):
        try:
            next_page = self.browser.find_element(By.XPATH, '//*[@id="J_nextPage_link"]')
            if next_page:
                next_page.click()
                self.parse_info()
        except Exception as e:
            print('最后一页:', e)
            self.browser.quit()

    def main(self):
        self.search_shop()
        wp_shop.parse_info()


if __name__ == '__main__':
    wp_shop = WpShop()
    wp_shop.main()
