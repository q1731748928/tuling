import asyncio
import aiohttp

# 回调函数: 任务完成后打印返回值结果
def download_completed_callback(task_obj):
    print("下载的内容为:", task_obj.result())


async def baidu_spider():
    print("---百度蜘蛛---")
    url = "https://www.baidu.com"
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as r:
            return await r.text()


async def sogou_spider():
    print("---搜狗蜘蛛---")
    url = "https://www.sogou.com"
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as r:
            return await r.text()


async def jd_spider():
    print("---京东蜘蛛---")
    url = "https://www.jd.com"
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as r:
            return await r.text()


async def main():
    task_baidu = asyncio.create_task(baidu_spider())
    task_baidu.add_done_callback(download_completed_callback) # 传递的是函数引用

    task_sogou = asyncio.create_task(sogou_spider())
    task_sogou.add_done_callback(download_completed_callback)

    task_jd = asyncio.create_task(jd_spider())
    task_jd.add_done_callback(download_completed_callback)

    await asyncio.wait([task_baidu, task_sogou, task_jd])

asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

if __name__ == '__main__':
    asyncio.run(main())