from selenium import webdriver
from selenium.webdriver.chrome import service # 指定驱动路径的

# 自定义驱动文件地址
service = service.Service(executable_path='chromedriver')


driver = webdriver.Chrome(service=service)
driver.get('https://www.baidu.com')
driver.maximize_window()

