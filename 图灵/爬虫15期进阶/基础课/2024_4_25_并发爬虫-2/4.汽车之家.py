import redis
import chardet  # 判断页面编码的，需要大家使用pip自行安装
import hashlib
import aiohttp
import asyncio
import aiomysql
from lxml import etree


class CarSpider:
    redis_client = redis.Redis()

    def __init__(self):
        self.url = 'https://www.che168.com/china/a0_0msdgscncgpi1ltocsp{}exf4x0/?pvareaid=102179#currengpostion'
        self.api_url = 'https://cacheapigo.che168.com/CarProduct/GetParam.ashx?specid={}'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        }

    def __del__(self):
        print("redis数据库即将关闭...")
        self.redis_client.close()

    # 获取汽车id
    async def get_car_id(self, page, session, pool):
        async with session.get(self.url.format(page), headers=self.headers) as response:
            content = await response.read()
            encoding = chardet.detect(content)['encoding']

            if encoding == 'GB2312' or encoding == 'ISO-8859-1':
                result = content.decode('gbk')
            else:
                result = content.decode(encoding)
                print("被反爬了...")

            tree = etree.HTML(result)
            id_list = tree.xpath('//ul[@class="viewlist_ul"]/li/@specid')
            if id_list:
                # print(id_list)
                # 如果列表中有值的情况下则调度获取汽车详情数据的任务
                tasks = [loop.create_task(self.get_car_info(spec_id, session, pool)) for spec_id in id_list]
                await asyncio.wait(tasks)

    # 获取汽车id后对api进行拼接并获取汽车详情配置数据
    async def get_car_info(self, spec_id, session, pool):
        async with session.get(self.api_url.format(spec_id), headers=self.headers) as response:
            result = await response.json()
            # 存在一些车型没有详细的硬件配置
            if result['result'].get('paramtypeitems'):
                item = dict()
                item['name'] = result['result']['paramtypeitems'][0]['paramitems'][0]['value']
                item['price'] = result['result']['paramtypeitems'][0]['paramitems'][1]['value']
                item['brand'] = result['result']['paramtypeitems'][0]['paramitems'][2]['value']
                item['altitude'] = result['result']['paramtypeitems'][1]['paramitems'][2]['value']
                item['breadth'] = result['result']['paramtypeitems'][1]['paramitems'][1]['value']
                item['length'] = result['result']['paramtypeitems'][1]['paramitems'][0]['value']
                await self.save_car_info(item, pool)
            else:
                print('数据不存在...')

    @staticmethod
    def get_md5(dict_item):
        md5 = hashlib.md5()
        md5.update(str(dict_item).encode('utf-8'))
        return md5.hexdigest()

    async def save_car_info(self, item, pool):
        md5_hash = self.get_md5(item)
        redis_result = self.redis_client.sadd('car:filter', md5_hash)
        if redis_result:
            async with pool.acquire() as conn:
                async with conn.cursor() as cursor:
                    sql = """
                     insert into car_info(
                          id, name, price, brand, altitude, breadth, length) values (
                          %s, %s, %s, %s, %s, %s, %s
                          );
                                        """
                    try:
                        await cursor.execute(sql, (0,
                                                   item['name'],
                                                   item['price'],
                                                   item['brand'],
                                                   item['altitude'],
                                                   item['breadth'],
                                                   item['length']
                                                   ))
                        await conn.commit()
                        print("数据插入成功:", item)
                    except Exception as e:
                        print('数据插入失败:', e)
                        await conn.rollback()
        else:
            print("数据重复...")

    # 启动函数
    async def main(self):
        # async with aiohttp.ClientSession() as session:
        #     tasks = [loop.create_task(self.get_car_id(page, session, None)) for page in range(1, 101)]
        #     await asyncio.wait(tasks)
        async with aiomysql.create_pool(user='root', password='123456', db='py_spider') as pool:
            async with pool.acquire() as conn:
                async with conn.cursor() as cursor:
                    create_table_sql = """
                                            create table car_info(
                                                id int primary key auto_increment,
                                                name varchar(100),
                                                price varchar(100),
                                                brand varchar(100),
                                                altitude varchar(100),
                                                breadth varchar(100),
                                                length varchar(100)
                                            );
                                        """
                    check_table_query = "show tables like 'car_info';"
                    result = await cursor.execute(check_table_query)
                    if not result:
                        await cursor.execute(create_table_sql)

            async with aiohttp.ClientSession() as session:
                tasks = [loop.create_task(self.get_car_id(page, session, pool)) for page in range(1, 11)]
                await asyncio.wait(tasks)


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    car_spider = CarSpider()
    loop.run_until_complete(car_spider.main())
