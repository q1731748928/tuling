

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC



dir = webdriver.Chrome()
dir.get('https://www.baidu.com/')
wait = WebDriverWait(dir, 10)
# presence_of_element_located判断元素是否加载
inpu = wait.until(EC.presence_of_element_located((By.ID, 'kw')))
# element_to_be_clickable   判断元素是否能进行点击
aa = wait.until(EC.element_to_be_clickable((By.ID, 'su1')))
print(inpu, aa)







