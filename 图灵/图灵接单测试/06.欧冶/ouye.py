import execjs
from loguru import logger as log

import requests
from  lxml import etree

session = requests.session()

with open('ouye.js', 'r', encoding='utf-8') as f:
    js = f.read()
result = execjs.compile(js).call('get_tid')

headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://www.ouyeel.com",
    "Pragma": "no-cache",
    "Referer": "https://www.ouyeel.com/search-ng/queryResource/index",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "X-Tingyun-Id": result.get('X-Tingyun-Id'),
    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}

response = session.get('https://www.ouyeel.com/search-ng/queryResource/index', headers=headers)
log.info('瑞数6请求第一次: %d' % response.status_code)
tree = etree.HTML(response.content.decode())


arg1 = tree.xpath('//meta/@content')[-1]
arg2 =  tree.xpath('//script/text()')[0]


with open('rs6.js', 'r', encoding='utf-8') as f:
    js = f.read().replace('arg1_content', arg1).replace('"arg2_js"', arg2)

cookie = execjs.compile(js).call('get_ck')
log.info('拿到瑞数真实cookie值:', cookie.split('=')[1])
cookies = {
    cookie.split('=')[0]: cookie.split('=')[1]
}
log.info(cookies)

url = "https://www.ouyeel.com/search-ng/commoditySearch/queryCommodityResult?K5nOZLud=2lTjWAlqEWbKq1VXFGALXVcTzZa8dUUxRxkUjkkQgCd_ocRJyHoqEiT78W4_u23u9TYQK0JM6SrSU7fKAvqDByTR5mwh6p6A"
params = {
    "K5nOZLud": "tdIl4AlqElSjhhSIARZEYqaA2mfD2zACoNGckO_0Gfb.OXAnwXoiEJuVgI8sNhoUcgxcb4kaXUH5OXJC2M_Z8uMFLEoEsNJY"
}
data = {
    "criteriaJson": "{\"pageIndex\":0,\"pageSize\":50,\"industryComponent\":null,\"channel\":null,\"productType\":null,\"sort\":null,\"warehouseCode\":null,\"key_search\":null,\"is_central\":null,\"searchField\":null,\"companyCode\":null,\"inquiryCategory\":null,\"inquirySpec\":null,\"provider\":null,\"shopCode\":null,\"steelFactory\":null,\"resourceIds\":null,\"jsonParam\":{},\"excludeShowSoldOut\":null}"
}
response = session.post(url, headers=headers, cookies=cookies, data=data)
print(response.status_code)
