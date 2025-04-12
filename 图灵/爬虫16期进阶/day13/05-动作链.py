

from DrissionPage import ChromiumPage
from DrissionPage.common import By



page = ChromiumPage()
# page.get('https://www.runoob.com/try/try.php?filename=jqueryui-api-droppable')
#
# soure = page.ele((By.CLASS_NAME, 'ui-draggable'))
# tag = page.ele((By.CLASS_NAME, 'ui-droppable'))
# # hold 左击按钮  移动的位置
# page.actions.hold(soure).release(tag)


page.get('https://www.ynjzjgcx.com/dataPub/enterprise')
page.actions.hold(page.ele((By.CLASS_NAME, 'slide-verify-slider-mask-item')))

# 向右异动300像素
page.actions.right(300)

# 释放左键
page.actions.release()












