

# 不需要进行切换标签  可以直接去操作   iframe的标签内容
from DrissionPage import ChromiumPage
from DrissionPage.common import By

page = ChromiumPage()
page.get('https://www.douban.com/')
page.ele((By.NAME, 'phone')).input('1232345345')






