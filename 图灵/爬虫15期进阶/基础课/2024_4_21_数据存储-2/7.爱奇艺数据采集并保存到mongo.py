import requests
import pymongo

class AiQiYi:
    def __init__(self):
        self.client_mongo = pymongo.MongoClient(host='localhost', port=27017)
        self.db = self.client_mongo['py_spider']['movie_list']
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
        }
        self.api_url = "https://pcw-api.iqiyi.com/search/recommend/list"

    def get_movie_info(self, params_attr):
        response = requests.get(self.api_url, headers = self.headers, params=params_attr).json()
        return response

    def parse_movie_info(self, response):
        category_movies = response['data']['list']
        for movie in category_movies:
            item = dict()
            item['title'] = movie['name']
            item['playUrl'] = movie['playUrl']
            item['description'] = movie['description']

            # 调用保存方法
            self.save_movie_info(item)

    def save_movie_info(self, item):
        self.db.insert_one(item)
        print('插入成功:', item)

    def main(self):
        for page in range(1, ):
            params = {
                "channel_id": "2",
                "data_type": "1",
                "mode": "11",
                "page_id": page,
                "ret_num": "48",
                "session": "7fdd98035b2b61057a74ae81ac2cfbf3",
                "three_category_id": "15;must"
            }

            info = self.get_movie_info(params)
            self.parse_movie_info(info)

        # 等待循环完成之后关闭数据库连接
        self.client_mongo.close()

    # 使用___del__可能会造成主程序无法退出
    # def __del__(self):
    #     print("数据库即将关闭...")
    #     self.client_mongo.close()


if __name__ == '__main__':
    aqy_movie = AiQiYi()
    aqy_movie.main()
    # aqy_movie.client_mongo.close()