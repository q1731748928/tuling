import json
import redis
def push_form(db, request_obj):
    db.lpush('jc:start_form', request_obj)


if __name__ == '__main__':
    redis_client = redis.Redis()
    for page in range(1, 24):
        form_data = {
            'column': 'szse_latest',
            'pageNum': str(page),
            'pageSize': '30',
            'sortName': '',
            'sortType': '',
            'clusterFlag': 'true'
        }

        request_form = {
            'form_data': form_data
        }

        push_form(redis_client, json.dumps(request_form))

    redis_client.close()
