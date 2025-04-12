import execjs
from loguru import logger as log

import requests
from lxml import etree

session = requests.session()


headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
}

response = session.get('https://qikan.cqvip.com/Qikan/Journal/JournalGuid?from=index', headers=headers)
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
data = {
    "searchParamModel": "{\"ObjectType\":7,\"SearchKeyList\":[],\"SearchExpression\":null,\"BeginYear\":null,\"EndYear\":null,\"UpdateTimeType\":null,\"JournalRange\":null,\"DomainRange\":null,\"ClusterFilter\":\"ZY=2#经济管理\",\"ClusterLimit\":0,\"ClusterUseType\":\"Article\",\"UrlParam\":\"\",\"Sort\":\"1\",\"SortField\":null,\"UserID\":\"0\",\"PageNum\":1,\"PageSize\":20,\"SType\":null,\"StrIds\":null,\"IsRefOrBy\":0,\"ShowRules\":\"\",\"IsNoteHistory\":0,\"AdvShowTitle\":null,\"ObjectId\":null,\"ObjectSearchType\":0,\"ChineseEnglishExtend\":0,\"SynonymExtend\":0,\"ShowTotalCount\":0,\"AdvTabGuid\":\"\"}"
}
response = session.post("https://qikan.cqvip.com/Search/SearchList", headers=headers, cookies=cookies, data=data)
print(response.text)

log.info('瑞数6请求第二次: %s'% response.status_code)
print(response)
