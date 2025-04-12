import time

from selenium.webdriver import ActionChains
from selenium.webdriver.chrome import service  # 指定驱动路径的
from selenium import webdriver
from selenium.webdriver.common.by import By

# 自定义驱动文件地址
service = service.Service(executable_path='chromedriver')

browser = webdriver.Chrome(service=service)

browser.get('http://www.runoob.com/try/try.php?filename=jqueryui-api-droppable')

iframe = browser.find_element(By.XPATH, '//iframe[@id="iframeResult"]')
browser.switch_to.frame(iframe)

source = browser.find_element(By.ID, 'draggable')
target = browser.find_element(By.ID, 'droppable')

# 创建动作链对象
actions = ActionChains(browser)
actions.drag_and_drop(source, target)
actions.perform() # 动作激活
time.sleep(3)

browser.quit()