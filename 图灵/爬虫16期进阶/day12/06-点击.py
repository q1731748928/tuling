


from selenium import webdriver
from selenium.webdriver.common.by import By
import time


drive = webdriver.Chrome()
drive.get('https://category.vip.com/suggest.php?keyword=%E7%94%B5%E8%84%91&ff=235%7C12%7C1%7C1&page=2')
drive.find_element(By.CLASS_NAME, 'cat-paging-next').click()
time.sleep(5)