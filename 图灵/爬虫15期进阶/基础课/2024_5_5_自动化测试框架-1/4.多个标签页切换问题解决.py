import time
from selenium import webdriver

browser = webdriver.Chrome()
browser.get('https://www.taobao.com')
time.sleep(3)

js_code = "window.open('https://sogou.com')"
browser.execute_script(js_code)
time.sleep(3)

js_code = "window.open('https://bing.com')"
browser.execute_script(js_code)
time.sleep(3)

print(browser.window_handles)

# 打印所有句柄对应的标签页名称
for handle in browser.window_handles:
    browser.switch_to.window(handle)
    print(f'句柄：{handle}, 页面标题: {browser.title}')
    if('搜狗' in browser.title) or ('sogou.com' in browser.current_url):
        print('已切换到搜狗页面:', handle)
        time.sleep(2)
        browser.close()
    elif ('必应' in browser.title) or ('bing.com' in browser.current_url):
        print('已切换到必应页面:', handle)
        time.sleep(2)
    else:
        print('已切换到淘宝页面:', handle)
        time.sleep(2)

print(browser.window_handles)
browser.quit()
