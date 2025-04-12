

# import time
# from selenium import webdriver
#
# drive = webdriver.Chrome()
#
# drive.get('http://qikan.cqvip.com/Qikan/Article/Detail?id=7109313810 ')
# time.sleep(6)



from DrissionPage import ChromiumPage

page = ChromiumPage()
page.get('http://qikan.cqvip.com/Qikan/Article/Detail?id=7109313810 ')
