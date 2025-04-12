import random
import time

from selenium import webdriver



drive = webdriver.Chrome()
drive.get('https://36kr.com/')


for i in range(1, 10):
    time.sleep(random.randint(100, 300)/1000)
    # execute_script执行js代码
    drive.execute_script('window.scrollTo(0, {})'.format(i * 700))


time.sleep(5)


