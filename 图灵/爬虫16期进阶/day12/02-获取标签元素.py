


from selenium import webdriver
from selenium.webdriver.common.by import  By



drive = webdriver.Chrome()
drive.get('https://www.baidu.com')
a_list = drive.find_elements(By.XPATH, '//a/text()')
print(a_list)
# Selenium  获取文本  或者属性  需要通过自己的方法进行取值    xpath的text()获取数据会报错
for a in a_list:
    title = a.text
    href = a.get_attribute('href')
    print(title, href)







