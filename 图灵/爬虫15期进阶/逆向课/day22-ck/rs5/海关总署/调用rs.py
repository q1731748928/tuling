# -*- coding: utf-8 -*-


from loguru import logger as log

import requests
from  lxml import etree
import subprocess
from functools import partial
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs


session = requests.session()


headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
}

response = session.get('http://www.customs.gov.cn/', headers=headers)
log.info('瑞数6请求第一次: %d' % response.status_code)
tree = etree.HTML(response.content.decode())


arg1 = tree.xpath('//meta/@content')[-1]
arg2 =  tree.xpath('//script/text()')[0]


with open('rs6-0809.js', 'r', encoding='utf-8') as f:
    js = f.read().replace('arg1_content', arg1).replace('"arg2_js"', arg2)

cookie = execjs.compile(js).call('get_ck')
log.info('拿到瑞数真实cookie值:',cookie.split('=')[1])
cookies = {
    cookie.split('=')[0]: cookie.split('=')[1]
}
log.info(cookies)

response = session.get('http://www.customs.gov.cn/', headers=headers, cookies=cookies)
print(response.status_code)

log.info('瑞数6请求第二次: %s'% response.status_code)
print(response)



