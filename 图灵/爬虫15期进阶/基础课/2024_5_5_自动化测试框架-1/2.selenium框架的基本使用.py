import time
from selenium import webdriver
from selenium.webdriver.common.by import By # 元素定位的类
# 创建浏览器对象，根据创建的对象调用浏览器相关的操作方法
browser = webdriver.Chrome()
# browser.get("https://www.bing.com")
# 页面截图
# browser.save_screenshot('必应首页.png')

# 页面元素定位
"""
find_element：用于查询指定的标签
By：用于指定查询方法：xpath方法、id查询、标签名称查询、css选择器查询等等
send_keys：一般用于输入框，在输入框中输入指定的关键字
click：一般用于按钮，可以点击

"""
browser.get('https://www.baidu.com')
# 定位元素并操作
# find_element方法用于查询出现的第一个标签
# 参数1：传递你要查询的方式 参数2：传递的规则
browser.find_element(By.ID, 'kw').send_keys('java')
time.sleep(1)
# 查询页面中的点击按钮并点击查询
browser.find_element(By.ID, 'su').click()
time.sleep(3)

# selenium查询响应信息
# 查看访问成功后的页面源码：渲染之后的源码
print(browser.page_source)

print("-" * 30)

# 查询cookie信息
print(browser.get_cookies())
# 查询目标地址的url
print(browser.current_url)

# 浏览器操作部分
# 在原有的标签页中访问新网址
browser.get('https://www.bing.com')
time.sleep(3)
browser.get('https://www.jd.com')
time.sleep(3)
# 如果代码执行完毕，可以使用close方法关闭标签页，如果标签页只有一个则关闭浏览器
# browser.close()
# 使用js代码开启新标签页
js_code = "window.open('https://www.sogou.com')"
browser.execute_script(js_code)
time.sleep(3)

# 标签页的切换问题：只有两个标签页的场景
print("标签页列表:", browser.window_handles)
browser.switch_to.window(browser.window_handles[0]) # 切换第一个标签页
time.sleep(1)
browser.switch_to.window(browser.window_handles[1]) # 切换第二个标签页
time.sleep(2)


browser.quit()