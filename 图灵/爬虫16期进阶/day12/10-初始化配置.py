

from DrissionPage import ChromiumPage, ChromiumOptions


options = ChromiumOptions().set_browser_path('C:\Program Files\Google\Chrome\Application\chrome.exe')
# 最大化窗口
options.set_argument('--start-maximized')
# options.set_argument('--start-maximized')

# 设置初始窗口大小
options.set_argument('--window-size', '800,600')
# 不加载图片   静音
options.no_imgs(True).mute(True)

# 无头模式
# options.headless()
options.set_proxy('https://127.0.0.1:8888')





page = ChromiumPage(addr_or_opts=options)
page.set.headers({'user-agent':'ajkshfjksdhfgjkh', 'abc': 'asdklfhjkhsdf'})



page.get('https://www.baidu.com', timeout=0.1, retry=3)
# 设置窗口大小
page.set.window.max()
# page.set.window.mini()
# page.set.window.size(500, 800)

# 隐藏浏览器窗口   之支持window
# page.set.window.hide()
# 显示窗口
# page.set.window.show()









