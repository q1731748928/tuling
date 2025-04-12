

from DrissionPage import ChromiumPage
from DrissionPage.common import By

page = ChromiumPage()
page.get('https://www.baidu.com/')
# 判断元素是否存在  元素是否加载
# aa = page.wait.eles_loaded('#su1', timeout=2)
# print(aa)

a_list = page.eles((By.XPATH, '//a'))
for a in a_list:
    title = a.text
    href = a.attr('href')
    print(title, href)



