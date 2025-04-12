from feapder.db.mysqldb import MysqlDB

db = MysqlDB(ip='localhost', user_name='root', user_pass='123456', db='py_spider')

create_table_sql = """
create table if not exists wp_shop_info(
    id int primary key auto_increment,
    title varchar(255) default null,
    price varchar(255) default null
);
"""

db.execute(create_table_sql)
