from feapder.db.mysqldb import MysqlDB

db = MysqlDB(ip='localhost', port=3306, user_name='root', user_pass='123456', db='py_spider')

sql = """
    create table if not exists douban_feapder(
        id int primary key auto_increment,
        title varchar(255) not null,
        score varchar(255) not null,
        detail_url varchar(255) not null,
        detail_text text
    );
"""

db.execute(sql)

# 在当前脚本中完成一个简单的数据插入测试
# insert_sql = """
#     insert ignore into douban_feapder (id, title, score, detail_url, detail_text) values (
#         0, '测试数据', 10, 'https://www.baidu.com', '详情数据'
#     );
# """
#
# db.add(insert_sql)


"""
表创建完成之后需要使用指令创建items文件完成数据的自动入库
    feapder create -i <数据库表名>
"""