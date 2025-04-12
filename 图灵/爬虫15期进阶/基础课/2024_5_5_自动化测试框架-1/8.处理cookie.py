from selenium import webdriver

browser = webdriver.Chrome()
browser.get('https://www.baidu.com')

# cookie_list = browser.get_cookies() # 返回的类型为一个列表
# print(cookie_list)

# for temp in cookie_list:
#     print(temp)

# cookie结构处理
# cookie_dict = {x["name"]: x["value"] for x in cookie_list}
# print(cookie_dict)

# 删除cookie
# 删除所有cookie
# browser.delete_all_cookies()

# 删除指定cookie
# browser.delete_cookie("BIDUPSID")
# cookie_list = browser.get_cookies()
# cookie_dict = {x["name"]: x["value"] for x in cookie_list}
# print(cookie_dict)

# 添加指定cookie
browser.add_cookie({'name': 'username', 'value': '安娜'}) # username才是cookie的key
browser.add_cookie({'name': 'gender', 'value': '女'}) # username才是cookie的key
cookie_list = browser.get_cookies()
cookie_dict = {x["name"]: x["value"] for x in cookie_list}
print(cookie_dict)


