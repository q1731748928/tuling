import asyncio
import aiomysql


async def main():
    async with aiomysql.connect(host='localhost', port=3306, user='root', password='123456', db='py_spider') as db:
        async with db.cursor() as cursor:
            await cursor.execute('select * from mgtv;')
            result = await cursor.fetchall()
            print(result)
            print(cursor.description)  # 可以使用当前方法查询表中的字段信息


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
