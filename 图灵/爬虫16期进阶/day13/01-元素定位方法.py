



from DrissionPage import ChromiumPage
from DrissionPage.common import By


page = ChromiumPage()
page.get('https://www.baidu.com/')
page.set.window.max()
page.ele((By.NAME, 'wd')).input('柏汌.....')
page.ele((By.ID, 'su')).click()





