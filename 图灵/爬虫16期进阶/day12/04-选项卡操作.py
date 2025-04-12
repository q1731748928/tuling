import time

from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://www.baidu.com')
# 通过js代码打开一个窗口
driver.execute_script('window.open()')
# 查看有的窗口信息
print(driver.window_handles)
# 切换窗口
driver.switch_to.window(driver.window_handles[1])
driver.get('https://www.baidu.com')

time.sleep(3)
driver.switch_to.window(driver.window_handles[0])
driver.get('https://36kr.com/')




