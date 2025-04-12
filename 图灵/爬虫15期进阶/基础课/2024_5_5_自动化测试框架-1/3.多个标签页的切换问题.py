import time

from selenium import webdriver

browser = webdriver.Chrome()
browser.get('https://www.taobao.com')
time.sleep(1)

js_code = "window.open('https://www.sogou.com')"
browser.execute_script(js_code)
time.sleep(2)

js_code = "window.open('https://www.bing.com')"
browser.execute_script(js_code)
time.sleep(2)

# 切换到第一个标签页
browser.switch_to.window(browser.window_handles[0])
time.sleep(3)
browser.switch_to.window(browser.window_handles[1])
time.sleep(3)

# 关闭第二个标签页
browser.close()
time.sleep(1)

# 切换到第一个标签页
browser.switch_to.window(browser.window_handles[0])
browser.close()

time.sleep(5)


"""
根据以上代码逻辑：
    1.访问淘宝 标签页1
    2.访问搜狗 标签页2
    3.访问必应 标签页3
    4.切换到第一个标签页
    5.切换到第二个标签页
    6.关闭第二个标签页
    7.切换到第一个标签页
    8.关闭第一个标签页
"""
