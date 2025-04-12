import random
import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pymongo


class WeiPin():
    def __init__(self):
        self.client = pymongo.MongoClient(host='127.0.0.1')
        self.cll = self.client['spiders16']['vip']
        options = webdriver.ChromeOptions()
        # 禁止图片
        prefs = {"profile.managed_default_content_settings.images": 2}
        options.add_experimental_option("prefs", prefs)
        # 隐藏"Chrome正在受到自动软件的控制"
        options.add_experimental_option('useAutomationExtension', False)  # 去掉开发者警告
        options.add_experimental_option('excludeSwitches', ['enable-automation'])

        self.browser = webdriver.Chrome(options=options)
        self.browser.maximize_window()
        self.url = 'https://category.vip.com/'

    def get_data(self):
        self.browser.get(self.url)
        wait = WebDriverWait(self.browser, 5)
        inp = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="J-search"]/div[1]/input')))
        but = wait.until(EC.element_to_be_clickable((By.XPATH, '//a[@class="c-search-button  J-search-button  J_fake_a"]')))

        inp.send_keys('电脑')
        time.sleep(random.randint(5000, 7000)/1000)
        but.click()
        # self.browser.find_element(By.XPATH, '//a[@class="c-search-button  J-search-button  J_fake_a"]').click()
        time.sleep(2)

    def parse_data(self):
        self.drop_down()
        print(self.browser.page_source)
        div_list = self.browser.find_elements(By.XPATH, '//section/div[@class="c-goods-item  J-goods-item c-goods-item--auto-width"]')
        print(div_list)
        for div in div_list:
            item = {}
            item['price'] = div.find_element(By.XPATH, './/div[@class="c-goods-item__sale-price J-goods-item__sale-price"]').text
            item['title'] = div.find_element(By.XPATH, './a/div[2]/div[2]').text
            try:
                item['dis'] = div.find_element(By.XPATH, './/div[@class="c-goods-item__market-price  J-goods-item__market-price"]').text
            except:
                item['dis'] = '空'
            print(item)
            self.save_Data(item)

        self.click_nex()



    def click_nex(self):
        try:
            butt = self.browser.find_element(By.XPATH, '//*[@id="J_nextPage_link"]')
            if butt:
                butt.click()
                self.parse_data()
            else:
                self.browser.close()
        except:
            self.browser.close()

    def save_Data(self, item):
        self.cll.insert_one(item)



    def drop_down(self):
        for i in range(1, 10):
            js = 'document.documentElement.scrollTop = {}'.format(i*1000)
            self.browser.execute_script(js)
            time.sleep(random.randint(300, 600) / 1000)



        # inp= self.browser.find_element(By.CLASS_NAME, 'c-search-input  J-search-input').send_keys('电脑')

        # self.browser.find_element(By.CLASS_NAME, 'c-search-button  J-search-button  J_fake_a')


    def main(self):
        self.get_data()
        self.parse_data()

if __name__ == '__main__':
    vip = WeiPin()
    vip.main()

