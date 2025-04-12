import time
from selenium.webdriver.chrome import service  # 指定驱动路径的
from selenium import webdriver

# 自定义驱动文件地址
service = service.Service(executable_path='chromedriver')

# 创建浏览器配置对象
options = webdriver.ChromeOptions()
# 将浏览器配置载入到配置对象中
options.add_argument('--disable-blink-features=AutomationControlled')

browser = webdriver.Chrome(service=service,options=options)

browser.get('https://bot.sannysoft.com/')
time.sleep(5)
browser.quit()

