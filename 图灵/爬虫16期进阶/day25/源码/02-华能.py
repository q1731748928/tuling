





import requests
from lxml import etree
import execjs


url = 'https://ec.chng.com.cn/channel/home/#/'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
}


# 几次请求  2
requests = requests.session()  # 携带响应的cookie


def first_request():
    response = requests.get(url, headers=headers)
    print(response.text)
    obj_html = etree.HTML(response.text)
    content_data = obj_html.xpath('//meta[2]/@content')[0]
    func_code = obj_html.xpath('//script[1]/text()')[0]
    return content_data, func_code


def two_request(content_data, func_code):
    with open('01-华能.js', encoding='utf-8')as f:
        js_code = f.read().replace('!"sz_fun"', func_code)
    open('test.js', 'w', encoding='utf-8').write(js_code)
    js = execjs.compile(js_code)
    cookie = js.call('RS_5')
    print(cookie)
    cookies = {
        cookie['name']: cookie['value']
    }
    # # print(cookies)
    res = requests.get(url, headers=headers, cookies=cookies)
    print(res.status_code)
    res.encoding = 'utf-8'
    print(res.text)

content_data, func_code = first_request()
# print(content_data, func_code )
two_request(content_data, func_code)


