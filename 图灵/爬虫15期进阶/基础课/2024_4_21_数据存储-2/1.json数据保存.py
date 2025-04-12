
import json
import requests

from lxml import etree

url = 'https://www.4399.com/flash/'
response = requests.get(url).content.decode('gbk')
tree = etree.HTML(response)
a_list = tree.xpath('//ul[@class="n-game cf"]/li/a')
game_list = list()
for a in a_list:
    item = dict()
    item['title'] = a.xpath('./b/text()')[0]
    item['href'] = a.xpath('./@href')[0]
    game_list.append(item)

with open('game_info.json', 'w', encoding='utf-8') as f:
    # f.write(game_list)
    f.write(json.dumps(game_list, indent=2, ensure_ascii=False))
