use person
// 插入老语法
db.user_list.insert({"name": "老李", "age": 33, "sex": true, "child": {"name": "小灰灰", "age": 3}});

// 添加一条数据
db.user_list.insertOne({"name": "小张", "age": 18, "sex": true})

// 添加多条数据
document1 = {"name":"小蓝", "age": 16}
document2 = {"name":"小广", "age": 16}
db.user_list.insertMany([document1, document2])



// 简单的查询操作
db.user_list.find()

