import asyncio
from pyppeteer import launch

# 手动设置浏览器窗口大小
width, height = 1366, 768

async def main():
    browser = await launch(headless=False, args=['--disable-infobars', f'--window-size={width},{height}'])
    page = await browser.newPage()
    await page.setViewport({'width': width, 'height': height})
    await page.goto('https://www.baidu.com')

    await asyncio.sleep(10)
    await browser.close()

loop = asyncio.get_event_loop()
loop.run_until_complete(main())