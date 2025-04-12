import requests

url = 'https://webapi.qingting.fm/api/mobile/rank/hotSaleWeekly'

headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36'
}

response = requests.get(url, headers=headers).json()
print(response)

for temp in response['rankinglist']:
    new_dict = dict()
    new_dict['title'] = temp['title']
    new_dict['detail_url'] = 'https://m.qingting.fm' + temp['urlScheme']
    # response = requests.get(new_dict['detail_url'], headers = headers).json()
    print(new_dict)
