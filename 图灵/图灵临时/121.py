import requests
url = 'https://www.chinaindex.net/iIndexMobileServer/teleplay/rank/waiting/fans?sign=46cf510e48f99667216bfa781d6bebab'
res = requests.get(url)
print(res.text)
