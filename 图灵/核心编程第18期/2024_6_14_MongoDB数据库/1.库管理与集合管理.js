// 数据库切换
// use <数据库名称>
use admin


// 查看当前位于的数据库位置
db


// 在mongo中直接切换一个不存在的数据库并在一个不存在的集合中插入一条信息则mongo会直接创建
use book_info
// db.集合名称.insert({})
db.courses.insert({"name": "python爬虫", "price": 31.4});



// 删除集合
db.courses.drop()