import time
from selenium.webdriver.chrome import service  # 指定驱动路径的
from selenium import webdriver

# 自定义驱动文件地址
service = service.Service(executable_path='chromedriver')


# 1.创建浏览器对象
browser = webdriver.Chrome(service=service)
browser.get('https://36kr.com/')

# 利用js操作网站滚动
# js_code = "window.scrollTo(0,2000)" # 绝对位置
# browser.execute_script(js_code)
# time.sleep(2)

for num in range(1,10):
    browser.execute_script(f'scrollBy(0, {num * 1000})') # 相对位置
    time.sleep(1)

browser.quit()