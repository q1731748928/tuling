import asyncio
from pyppeteer import launch

width, height = 1366, 768


async def main():
    browser = await launch(headless=False, args=['--disable-infobars', f'--window-size={width},{height}'])
    page = await browser.newPage()
    await page.setViewport({'width': width, 'height': height})
    await page.goto('https://bot.sannysoft.com/')
    await asyncio.sleep(5)


asyncio.get_event_loop().run_until_complete(main())

"""
在lanunch源码中注释以下参数即可：
    --enable-automation
"""