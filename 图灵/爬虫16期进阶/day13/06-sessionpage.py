

from DrissionPage import SessionPage


page = SessionPage()


url = 'https://www.ccgp-anhui.gov.cn/portal/category'

data = {"pageNo":6,"pageSize":15,"categoryCode":"anhuiCategory102","_t":1721305079000}

page.post(url, json=data)
print(page.response.json())
# print(page.user_agent)




