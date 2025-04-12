import requests
from lxml import etree
from concurrent.futures import ThreadPoolExecutor, as_completed

url = 'https://movie.douban.com/top250?start={}&filter='

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
}


def get_movie_info(page):
    response = requests.get(url.format(page * 25), headers=headers).text
    tree = etree.HTML(response)
    result = tree.xpath("//div[@class='hd']/a/span[1]/text()")
    return result

if __name__ == '__main__':
    with ThreadPoolExecutor(max_workers=5) as pool:
        # for page in range(10):
        #     future = pool.submit(get_movie_info, page)
        #     print(future.result())
        futures = [pool.submit(get_movie_info, page) for page in range(10)]

         # 并发返回：as_completed会返回先完成的结果
        for future in as_completed(futures): # 生成器
            print(future.result())