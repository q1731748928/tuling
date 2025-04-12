import requests
from lxml import etree
from urllib.parse import urljoin
s=requests.session()


def lt():
    headers={
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Host": "www.10010.com",
        "Pragma": "no-cache",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
    # url='http://iservice.10010.com/e5/query.html'
    url='http://www.10010.com/net5/074/'
    req=s.get(url=url,headers=headers)
    print(req.status_code,'第一次请求')

    # print(req.text)
    with open("./run/run.html", 'w', encoding="utf-8") as f:
        f.write(req.text)
    paseHtml = etree.HTML(req.text)
    # print(paseHtml)
    jscode = ';'.join(paseHtml.xpath('//script/text()'))
    jsurl = urljoin(url, paseHtml.xpath('//script/@src')[0])
    # paseHtml = etree.HTML(req.text)

    req = s.get(jsurl)
    req.encoding = "iso-8859-1"
    jstsdata = req.text

    with open("./run/run.js", 'w', encoding="utf-8") as f:
        f.write(jstsdata+";\n"+jscode)


    # cookie = ''
    # cookie=''
    # 运行到input处停止  把生成的dccf.js 和dccf.html里的内容粘贴到run.html 和jscode.js/run.js中  运行main.js,然后把生成的cookie输入 ,注意回车空格
    cookie = input("获取cooKie--》")

    yu = cookie.split(';')
    s.cookies.set(yu[0].split('=')[0], yu[0].split('=')[1])
    s.cookies.set(yu[1].split('=')[0], yu[1].split('=')[1])
    # print(s.cookies)
    req = s.get(url,headers= headers)
    req.encoding = "utf-8"
    print(req,'第二次请求')


def sz():
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Host": "sugh.szu.edu.cn",
        "Pragma": "no-cache",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
    url = 'https://sugh.szu.edu.cn/Html/News/Columns/4/2.html'
    req = s.get(url=url, headers=headers)
    print(req.status_code, '第一次请求')

    # print(req.text)
    with open("./run/run.html", 'w', encoding="utf-8") as f:
        f.write(req.text)
    paseHtml = etree.HTML(req.text)
    # print(paseHtml)
    jscode = ';'.join(paseHtml.xpath('//script/text()'))
    jsurl = urljoin(url, paseHtml.xpath('//script/@src')[0])
    # paseHtml = etree.HTML(req.text)

    req = s.get(jsurl)
    req.encoding = "iso-8859-1"
    jstsdata = req.text

    with open("./run/run.js", 'w', encoding="utf-8") as f:
        f.write(jstsdata + ";\n" + jscode)

    # cookie = ''
    # cookie=''
    # 运行到input处停止  把生成的dccf.js 和dccf.html里的内容粘贴到run.html 和jscode.js/run.js中  运行main.js,然后把生成的cookie输入 ,注意回车空格
    cookie = input("获取cooKie--》")

    yu = cookie.split(';')
    s.cookies.set(yu[0].split('=')[0], yu[0].split('=')[1])
    s.cookies.set(yu[1].split('=')[0], yu[1].split('=')[1])
    # print(s.cookies)
    req = s.get(url, headers={
        "Host": "sugh.szu.edu.cn",
        "Pragma": "no-cache",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    },
                # proxies = {'http': 'http://localhost:8888', 'https': 'http://localhost:8888'}
                )
    req.encoding = "utf-8"
    print(200, '第二次请求')

if __name__ == '__main__':
    # sz()
    lt()
