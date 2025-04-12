#  pip install pyppeteer==1.0.2 -i https://pypi.tuna.tsinghua.edu.cn/simple

import asyncio
from pyppeteer import launch

async def main():
    # 创建浏览器对象
    # 默认不启动浏览器界面
    browser = await launch({'headless': False}) # 开启浏览器界面
    page = await browser.newPage()
    await page.goto('https://www.baidu.com')
    await page.screenshot({'path': './baidu.png'})
    await browser.close()


loop = asyncio.get_event_loop()
loop.run_until_complete(main())
