import asyncio
import aiohttp
from bs4 import BeautifulSoup

url = 'https://movie.douban.com/top250?start={}&filter='
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
}


async def get_movie_info(page):
    async with aiohttp.ClientSession() as session:
        async with session.get(url.format(page * 25), headers=headers) as response:
            soup = BeautifulSoup(await response.text(), 'lxml')
            div_list = soup.find_all('div', class_='hd')
            for div in div_list:
                print(div.get_text())


async def main():
    tasks = [asyncio.create_task(get_movie_info(page)) for page in range(10)]
    await asyncio.wait(tasks)


asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

if __name__ == '__main__':
    asyncio.run(main())
