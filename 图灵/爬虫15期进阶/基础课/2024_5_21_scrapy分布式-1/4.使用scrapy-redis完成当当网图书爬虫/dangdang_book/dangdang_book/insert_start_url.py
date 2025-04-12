import redis


redis_client = redis.Redis()
redis_client.lpush('dd_book:start_url', 'http://search.dangdang.com/?key=python&act=input&page_index=1')
redis_client.close()