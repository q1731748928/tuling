import asyncio
import aiohttp
from bs4 import BeautifulSoup

url = 'https://movie.douban.com/top250?start={}&filter='
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
}


async def get_movie_info(page):
    async with aiohttp.ClientSession() as session:
        async with session.get(url.format(page * 25), headers=headers) as response:
            soup = BeautifulSoup(await response.text(), 'lxml')
            div_list = soup.find_all('div', class_='hd')
            for div in div_list:
                print(div.get_text())

# 创建一个启动函数
async def main():
    tasks = [loop.create_task(get_movie_info(page)) for page in range(10)]
    await asyncio.wait(tasks)

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())