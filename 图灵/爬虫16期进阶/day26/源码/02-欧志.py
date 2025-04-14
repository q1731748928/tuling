







#
# import requests
# from lxml import etree
# import execjs
#
#
# url = 'https://www.ouyeel.com/steel/search?pageIndex=0&pageSize=50'
#
# headers = {
#     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
# }
#
#
# # 几次请求  2
# requests = requests.session()  # 携带响应的cookie
#
#
# def first_request():
#     response = requests.get(url, headers=headers)
#     print(response.text)
#     obj_html = etree.HTML(response.text)
#     content_data = obj_html.xpath('//meta[2]/@content')[0]
#     func_code = obj_html.xpath('//script[1]/text()')[0]
#     return content_data, func_code
#
#
# def two_request(content_data, func_code):
#     with open('01-欧志.js', encoding='utf-8')as f:
#         js_code = f.read().replace('!"sz_fun"', func_code)
#     open('test.js', 'w', encoding='utf-8').write(js_code)
#
#     js = execjs.compile(js_code)
#     cookie = js.call('RS_5')
#     print(cookie)
#     cookies = {
#         cookie['name']: cookie['value']
#     }
#     # # print(cookies)
#     res = requests.get(url, headers=headers, cookies=cookies)
#     print(res.status_code)
#     res.encoding = 'utf-8'
#     print(res.text)
#
# content_data, func_code = first_request()
# # print(content_data, func_code )
# two_request(content_data, func_code)



import subprocess
from functools import partial  # 这玩意能锁定一个函数的参数
# 锁定subprocess.Popen的encoding参数为"utf-8"
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import requests
import execjs
from lxml import etree
import json

class OuZhi:
    def __init__(self):
        self.url = 'https://www.ouyeel.com/search-ng/queryResource/index'
        self.headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

        self.js_code = open("01-欧志.js", "r", encoding="utf-8", errors="ignore").read()
        self.requests = requests.session()

    def get_cookie1(self):
        code = self.requests.get(url=self.url,headers=self.headers)
        html = etree.HTML(code.text)
        content = html.xpath("//meta[2]/@content")[0]
        ts = html.xpath("//script[1]/text()")[0]
        fun_code = "https://www.ouyeel.com" + html.xpath("//script[2]/@src")[0]
        open('1111.js', 'w', encoding='utf-8').write(self.js_code.replace("'ts_data'",ts))
        cookie = execjs.compile(self.js_code.replace("'ts_data'",ts)).call('get_cookie')
        return {
            # 'T0k1m0u5AfREO':code.cookies.get('T0k1m0u5AfREO'),
            cookie.split("=")[0]:cookie.split("=")[1]
        }

    def get_cookie2(self,cookie, i):
        # code = self.requests.get(url=self.url,headers=self.headers,cookies=cookie)
        # print("响应状态码:::::", code)

        # for i in range(10):
        data = {
            'criteriaJson': '{"pageIndex":' + str(i) + ',"pageSize":50,"industryComponent":null,"channel":null,"productType":null,"sort":null,"warehouseCode":null,"key_search":null,"is_central":null,"searchField":null,"companyCode":null,"inquiryCategory":null,"inquirySpec":null,"provider":null,"shopCode":null,"steelFactory":null,"resourceIds":null,"jsonParam":{},"excludeShowSoldOut":null}',
        }

        response = self.requests.post(
            'https://www.ouyeel.com/search-ng/commoditySearch/queryCommodityResult',
            cookies=cookie,
            headers=self.headers,
            data=data,
        )
        print(response)
        print(response.text)
        for item in json.loads(response.json()["resultList"]):
            lists = dict()
            lists["company"] = item['providerName']
            lists["title"] = item['manufactureName']
            lists["textureType"] = item['productName']
            if item.get('resourceObj',-1) != -1:
                lists["price"] = "￥" + str(item.get('resourceObj').get('publishPrice')) + "/吨"
            else:
                lists["price"] = "￥" + str(item.get('publishPrice')) + "/吨"

            if item.get('resourceObj',-1) != -1:
                if item.get('resourceObj').get('weight', -1) != -1:
                    lists["weight"] = str(item.get('resourceObj').get('weight')) + "吨/件"
            else:
                if item.get('weight', -1) != -1:
                    lists["weight"] = str(item.get('weight')) + "吨/件"
                else:
                    lists["weight"] = str(item.get('totalWeight')) + "吨/件"

            print(lists)



    def main(self):

        for i in range(1, 3):
            cookie = self.get_cookie1()
            self.get_cookie2(cookie, 1)



if __name__ == '__main__':
    ouzhi = OuZhi()
    ouzhi.main()


