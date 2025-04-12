import time
from selenium import webdriver
from selenium.webdriver.common.by import By

browser = webdriver.Chrome()
browser.get('https://www.douban.com')

# 获取文本信息
result = browser.find_element(By.TAG_NAME, 'h1') # elements返回的是列表
print(result.text)

# 获取标签属性
result = browser.find_element(By.LINK_TEXT, '下载豆瓣 App')
print(result.get_attribute('href'))

