import asyncio
import aiohttp
url = 'https://www.baidu.com'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
}

async def get_baidu():
    # 使用异步上下文管理器的方式创建请求对象
    async with aiohttp.ClientSession() as session:
        async with session.get(url, headers = headers) as response:
            response = await response.text()
            print(response)

# windows系统自行设置事件循环对象
asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

asyncio.run(get_baidu())

