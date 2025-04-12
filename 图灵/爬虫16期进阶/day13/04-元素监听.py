

from DrissionPage import ChromiumPage
from DrissionPage.common import By


page = ChromiumPage()
page.get('https://www.ccgp-anhui.gov.cn/site/category?parentId=smNINUwLp%2F04p2g1rUM89Q%3D%3D&childrenCode=anhuiCategory102&utm=site.site-PC-4721.564-pc-websitegroup-nav-front.4.1fff03802d4e11ef96d08f4b994d45f1')
page.listen.start('/portal/category')

page.set.window.max()

# count 需要 捕获的次数    None   无限次
# 获取到监听的网址数据  返回的数据是迭代器
for pack in page.listen.steps(count=5):
    print('111', pack.response.body)
    page.ele((By.CLASS_NAME, 'btn-next')).click()






