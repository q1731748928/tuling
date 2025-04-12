import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome import service # 指定驱动路径的
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC # 内置异常库

# 自定义驱动文件地址
service = service.Service(executable_path='chromedriver')


# 1.创建浏览器对象
browser = webdriver.Chrome(service=service)

# 2.创建驱动等待对象
wait_obj = WebDriverWait(browser, 10)

# 3.访问指定的url
browser.get('https://www.jd.com')

# 4.等待指定的标签数据：搜索框
# presence_of_element_located：参数必须是一个元组
search_input = wait_obj.until(EC.presence_of_element_located((By.ID, 'key')))
print(search_input)

# 5.使用返回的element对象完成输入操作
search_input.send_keys('鞋子')

# 6.等待指定的标签数据：搜索按钮
search_button = wait_obj.until(EC.presence_of_element_located((By.XPATH, "//div[@class='form']/button[@class='button']")))
search_button.click()

time.sleep(5)
browser.quit()

"""
等待对象：WebDriverWait
    需要传递浏览器对象和超时时间

使用presence_of_element_located判断标签是否加载完成
"""

