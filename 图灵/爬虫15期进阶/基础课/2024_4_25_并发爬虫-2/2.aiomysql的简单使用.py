import asyncio
import aiomysql

async def main():
    db = await aiomysql.connect(host='localhost', port=3306, user='root', password='123456', db='py_spider')
    cursor = await db.cursor()

    await cursor.execute('select * from mgtv;')
    result = await cursor.fetchall()
    print(result)
    print(cursor.description) # 可以使用当前方法查询表中的字段信息

    # 关闭游标必须使用await关闭
    await cursor.close()
    db.close()

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())