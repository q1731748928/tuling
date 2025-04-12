import asyncio
import requests
from functools import partial # 偏函数
from bs4 import BeautifulSoup

url = 'https://movie.douban.com/top250?start={}&filter='
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
}

loop = asyncio.get_event_loop()


async def get_movie_info(page):
    response = await loop.run_in_executor(None, partial(requests.get, url.format(page * 25), headers=headers))
    soup = BeautifulSoup(response.text, 'lxml')
    div_list = soup.find_all('div', class_ = 'hd')
    for title in div_list:
        print(title.get_text())

if __name__ == '__main__':
    tasks = [loop.create_task(get_movie_info(page)) for page in range(10)]
    loop.run_until_complete(asyncio.wait(tasks))

