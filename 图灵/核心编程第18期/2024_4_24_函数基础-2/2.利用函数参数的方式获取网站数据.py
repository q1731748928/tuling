import requests

from bs4 import BeautifulSoup

def get_html(url):
    response = requests.get(url).content.decode()
    print(response)

url_1 = "https://www.baidu.com"
url_2 = 'https://www.bing.com'

# get_html(url_1)
get_html(url_2)
