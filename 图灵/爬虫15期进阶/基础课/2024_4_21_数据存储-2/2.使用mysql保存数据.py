
import pymysql
import requests


class TxWork:
    url = 'https://careers.tencent.com/tencentcareer/api/post/Query?' \
          'timestamp=1692878740516&countryId=&' \
          'cityId=&bgIds=&productId=&categoryId=' \
          '&parentCategoryId=&attrId=&' \
          'keyword=python&pageIndex={}&pageSize=10&language=zh-cn&area=cn'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                      'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
    }

    def __init__(self):
        self.db = pymysql.connect(host='localhost', user='root', password='12345678', db='py_spider')
        self.cursor = self.db.cursor()

    def __del__(self):
        print("数据库即将关闭...")
        self.cursor.close()
        self.db.close()

    def get_work_info(self):
        for page in range(1, 39):
            response = requests.get(self.url.format(page), headers=self.headers).json()
            work_list = response['Data']['Posts']
            yield work_list

    def crate_table(self):
        sql = """
                    create table if not exists tx_work(
                        id int primary key auto_increment,
                        work_name varchar(100) not null,
                        country_name varchar(50),
                        city_name varchar(50),
                        work_desc text
                    );
                """

        try:
            self.cursor.execute(sql)
            print("表创建成功...")
        except Exception as e:
            print("创建表失败:", e)

    def insert_work_info(self, *args):
        """
        :param args:
            id
            work_name
            country_name
            city_name
            work_desc
        :return:
        """
        sql = """
            insert into tx_work values (%s, %s, %s, %s, %s);
        """

        try:
            self.cursor.execute(sql, args)
            self.db.commit() # 事物提交
            print("数据插入成功:", args)
        except Exception as e:
            print("数据插入失败:", e)
            self.db.rollback() # 失败后数据回滚
    def main(self):
        self.crate_table()
        al_work_generator = self.get_work_info()
        work_id = 0
        for work_list in al_work_generator:
            for work_info in work_list:
                work_name = work_info['RecruitPostName']
                country_name = work_info['CountryName']
                city_name = work_info['LocationName']
                work_desc = work_info['Responsibility']
                self.insert_work_info(work_id, work_name, country_name, city_name, work_desc)



if __name__ == '__main__':
    tx_work = TxWork()
    tx_work.main()