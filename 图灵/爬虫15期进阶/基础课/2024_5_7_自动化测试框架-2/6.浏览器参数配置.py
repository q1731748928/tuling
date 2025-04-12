import time
from selenium.webdriver.chrome import service  # 指定驱动路径的
from selenium import webdriver

# 自定义驱动文件地址
service = service.Service(executable_path='chromedriver')

# 创建浏览器配置对象
options = webdriver.ChromeOptions()
# 将浏览器配置载入到配置对象中
options.add_argument('--disable-blink-features=AutomationControlled')

# 禁止图片加载
prefs = {"profile.managed_default_content_settings.images": 2}
options.add_experimental_option('prefs', prefs)

# 设置UA
user_agent = 'abc'
options.add_argument(f'user-agent={user_agent}')

# 去除开发者警告
options.add_experimental_option('useAutomationExtension', False)
options.add_experimental_option('excludeSwitches', ['enable-automation'])

# 设置代理
options.add_argument("--proxy-server=http://127.0.0.1:1087")

browser = webdriver.Chrome(service=service,options=options)
browser.get('https://www.taobao.com/')


time.sleep(10)
browser.quit()

