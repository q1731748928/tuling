import json
import redis


def push_json(db, request_obj):
    db.lpush('job:start_json', request_obj)


if __name__ == '__main__':
    redis_client = redis.Redis()
    for page in range(1, 26):
        json_data = {
            "currentPage": page,
            "pageSize": 10,
            "keyword": "python"
        }

        request_data = {
            'json_data': json_data
        }
        push_json(redis_client, json.dumps(request_data))

    redis_client.close()

