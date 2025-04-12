import time
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome import service  # 指定驱动路径的
from selenium import webdriver

# 自定义驱动文件地址
service = service.Service(executable_path='chromedriver')

class LoginEmail:
    def __init__(self):
        self.browser = webdriver.Chrome(service=service)

    def open_email(self, url):
        self.browser.get(url)
        time.sleep(1)

    def login(self, address, password):
        iframe = self.browser.find_element(By.XPATH, '//div[@id="loginDiv"]/iframe')

        # 找到子页面之后需要切入到这个子页面中
        self.browser.switch_to.frame(iframe)
        self.browser.find_element(By.XPATH, '//input[@name="email"]').send_keys(address)
        self.browser.find_element(By.XPATH, '/html/body/div[2]/div[2]/div[2]/form/div/div[3]/div[2]/input[2]').send_keys(password)
        self.browser.find_element(By.XPATH, '/html/body/div[2]/div[2]/div[2]/form/div/div[8]/a').click()
        time.sleep(3)

    def close_browser(self):
        self.browser.close()

if __name__ == '__main__':
    login_email = LoginEmail()
    login_email.open_email('https://mail.163.com/')
    login_email.login('18626871885@163.com', "Q2893962404t@")
