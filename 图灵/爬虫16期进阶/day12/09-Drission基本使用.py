

from DrissionPage import ChromiumPage, ChromiumOptions


# 匹配浏览器
co = ChromiumOptions().set_browser_path('C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe')





page = ChromiumPage(addr_or_opts=co)
page.get('https://www.baidu.com', timeout=0.1, retry=3)

print(page.html)
print(page.user_agent)
print(page.browser)
