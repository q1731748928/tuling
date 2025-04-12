# -*- coding: utf-8 -*-
import pymysql
from dbutils.pooled_db import PooledDB

pool = PooledDB(
    creator=pymysql,  # 使用链接数据库的模块
    maxconnections=6,  # 连接池允许的最大连接数，0和None表示无限制连接数
    mincached=2,  # 初始化时，链接池中至少创建的空闲的链接，0表示不创建
    maxcached=5,  # 链接池中最多闲置的链接，0和None不限制
    maxshared=3,  # 链接池中最多共享的链接数量，0和None表示全部共享。PS: 无用，因为pymysql和mysqldb的模块都不支持共享链接
    blocking=True,  # 连接池中如果没有可用链接后，是否阻塞等待。False，不等待直接报错；True，等待直到有可用链接，再返回。
    host='127.0.0.1',
    port=3306,
    user='root',
    password='12345678',
    database='py_spider',
    charset='utf8'
)

# 从数据库连接池中获取一个连接连接
conn = pool.connection()

# 获取游标
cursor = conn.cursor()

# 根据游标查询数据
sql = 'select * from tx_work;'

cursor.execute(sql)
print(cursor.fetchall())

# 关闭连接对象、游标、数据库连接池
cursor.close()
conn.close()
pool.close()

