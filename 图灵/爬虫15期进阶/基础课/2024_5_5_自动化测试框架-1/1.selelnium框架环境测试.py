# 导入selenium框架中的浏览器驱动模块
import time

from selenium import webdriver

# 创建了一个浏览器对象
browser = webdriver.Chrome()

# 利用创建的浏览器对象打开一个网站
browser.get('https://www.baidu.com')
time.sleep(3) # 如果没有延迟等待则浏览器会直接关闭