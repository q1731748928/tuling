import time
from selenium import webdriver
from selenium.webdriver.chrome import service # 指定驱动路径的

# 自定义驱动文件地址
service = service.Service(executable_path='chromedriver')


# 1.创建浏览器对象
browser = webdriver.Chrome(service=service)

browser.get('https://www.jd.com')
time.sleep(2)
browser.get('https://www.taobao.com')
time.sleep(2)


# 回退
browser.back()
time.sleep(1)

# 前进
browser.forward()
time.sleep(3)

browser.quit()

"""
back让页面返回
forward让页面前进
"""