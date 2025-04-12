import asyncio
from pyppeteer import launch

# page为pyppeteer返回的页面对象
async def fetch_movies(page, url):
    await page.goto(url)
    await page.xpath('//div[@class="item"]')

    title_elements = await page.xpath('//div[@class="info"]//div[@class="hd"]/a/span[1]')

    # 提取电影标题文本
    title_list = []
    for element in title_elements:
        title = await page.evaluate('(element) => element.textContent', element)
        title_list.append(title.strip())


    # 获取下一页的数据
    next_page = await page.xpath('//span[@class="next"]/a')
    if next_page:
        next_page_url = await page.evaluate('(element) => element.href', next_page[0])
        title_list.extend(await fetch_movies(page, next_page_url))

    return title_list

async def main():
    browser = await launch()
    page = await browser.newPage()

    try:
        url = 'https://movie.douban.com/top250'
        titles = await fetch_movies(page, url)
        print(titles)
    finally:
        await browser.close()

loop = asyncio.get_event_loop()
loop.run_until_complete(main())