import os
import aiofile
import aiohttp
import asyncio

from aiohttp import TCPConnector


class HeroSkin:
    def __init__(self):
        self.json_url = 'https://pvp.qq.com/web201605/js/herolist.json'
        self.skin_url = 'https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/{}/{}-bigskin-{}.jpg'

        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        }

    async def get_image_content(self, session, e_name, c_name):
        # 不知道每个英雄的最大皮肤数量则自定义皮肤范围区间
        for skin_id in range(1, 31):
            async with session.get(self.skin_url.format(e_name, e_name, skin_id), headers = self.headers) as response:
                if response.status == 200:
                    content = await response.read()
                    async with aiofile.async_open('./images/' + c_name + "-" + str(skin_id) + ".jpg", 'wb') as f:
                        await f.write(content)
                        print("写入成功:", c_name)

                else:
                    break

    async def main(self):
        task_list = list()
        async with aiohttp.ClientSession(connector=TCPConnector(ssl=False)) as session:
            async with session.get(self.json_url, headers=self.headers) as response:
                result = await response.json(content_type=None) # json文件无法直接decode，将内容类型设置为None
                for item in result:
                    e_name = item['ename']
                    c_name = item['cname']
                    coro_obj = self.get_image_content(session, e_name, c_name)
                    task_list.append(asyncio.create_task(coro_obj))

                await asyncio.wait(task_list)

if __name__ == '__main__':
    if not os.path.exists("./images"):
        os.mkdir("./images")

    hero_skin = HeroSkin()
    asyncio.run(hero_skin.main())


