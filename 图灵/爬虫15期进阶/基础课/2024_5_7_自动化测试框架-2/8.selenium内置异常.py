from selenium.common.exceptions import NoSuchElementException

import time

from selenium.webdriver import ActionChains
from selenium.webdriver.chrome import service  # 指定驱动路径的
from selenium import webdriver
from selenium.webdriver.common.by import By

# 自定义驱动文件地址
service = service.Service(executable_path='chromedriver')
browser = webdriver.Chrome(service=service)
browser.get('https://www.baidu.com')
try:
    browser.find_element(By.ID, 'acb')
except NoSuchElementException: # 指定了运行速度会更快
    print("标签不存在...")
finally:
    browser.quit()
