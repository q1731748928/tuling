use person
db.user_list.find()

document1 = {"name":"小黑", "age": 16}
document2 = {"name":"小白", "age": 16}
db.user_list.insertMany([document1, document2])

// 删除一条数据: 年龄为16岁
db.user_list.deleteOne({"age":16})

// 删除多条数据: 年龄为16岁
db.user_list.deleteMany({"age":16})


