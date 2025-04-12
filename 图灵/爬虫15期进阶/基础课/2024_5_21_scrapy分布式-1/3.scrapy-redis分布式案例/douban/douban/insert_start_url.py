import redis

redis_client = redis.Redis()
redis_client.lpush('top250:start_urls', 'https://movie.douban.com/top250?start=0&filter=')
print('起始url插入成功...')
redis_client.close()