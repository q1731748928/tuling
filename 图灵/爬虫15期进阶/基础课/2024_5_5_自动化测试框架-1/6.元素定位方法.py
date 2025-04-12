from selenium import webdriver
from selenium.webdriver.common.by import By

# 获取单个节点
browser = webdriver.Chrome()

# 获取单个节点
# browser.get('https://news.baidu.com')
# input_button = browser.find_element(By.ID, 'ww') #单个节点
# print(input_button)

# 多个节点
browser.get('https://movie.douban.com/top250')
result = browser.find_elements(By.CSS_SELECTOR, '.item')
print(result, len(result))

print("-" * 30)

result = browser.find_elements(By.XPATH, '//div[@class="item"]')
print(result, len(result))

"""
id
xpath
css选择器
"""


