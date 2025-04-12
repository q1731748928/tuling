from jsonpath import jsonpath

info = {
    "store": {
        "book": [
            {"category": "reference",
             "author": "Nigel Rees",
             "title": "Sayings of the Century",
             "price": 8.95
             },
            {"category": "fiction",
             "author": "Evelyn Waugh",
             "title": "Sword of Honour",
             "price": 12.99
             },
            {"category": "fiction",
             "author": "Herman Melville",
             "title": "Moby Dick",
             "isbn": "0-553-21311-3",
             "price": 8.99
             },
            {"category": "fiction",
             "author": "J. R. R. Tolkien",
             "title": "The Lord of the Rings",
             "isbn": "0-395-19395-8",
             "price": 22.99
             }
        ],
        "bicycle": {
            "color": "red",
            "price": 19.95
        }
    }
}

# 1.提取第一本书的书名
res = jsonpath(info, '$.store.book[0].title')
print(res)
res = jsonpath(info, "$['store]['book][0]['title']") # 外层必须是双引号，节点名称必须是单引号
print(res)


# 2.提取2，3，4书的书名
res = jsonpath(info, '$.store.book[1,2,3].title')
print(res)
res = jsonpath(info, '$.store.book[1:].title')
print(res)
res = jsonpath(info, '$.store.book[1:4].title')
print(res)

# 3.提取1，3这两本书的书名
res = jsonpath(info, '$.store.book[0,2].title')
print(res)
res = jsonpath(info, '$.store.book[::2].title')
print(res)

# 4.提取最后一本书的书名
res = jsonpath(info, '$.store.book[(@.length-1)].title')
print(res)
res = jsonpath(info, '$.store.book[-1:].title')
print(res)


# 5.提取价格小于10的书籍名称
res = jsonpath(info, '$.store.book[?(@.price < 10)].title')
print(res)

# 6.提取价格小于或者等于20的所有商品的价格
res = jsonpath(info, '$..*[?(@.price <= 20)].price')
print(res)

# 7.获取所有书籍的作者
res = jsonpath(info, '$..author')
print(res)
res = jsonpath(info, '$.store.book[::].author')
print(res)
res = jsonpath(info, '$.store.book[*].author')
print(res)
res = jsonpath(info, '$.store.book.author') # 如果值不存在则返回false
print(res)
res = jsonpath(info, '$.store.book..author')
print(res)

# 8.获取商店中的所有商品
res = jsonpath(info, '$.store')
print(res)

# 9.获取所有商品的价格
res = jsonpath(info, '$..price')
print(res)
res = jsonpath(info, '$.store..price')
print(res)

# 10.获取带有isbn的书
res = jsonpath(info, '$..book[?(@.isbn)].title')
print(res)

# 11.获取不带有isbn的书
res = jsonpath(info, '$..book[?(!@.isbn)].title')
print(res)

# 12.获取价格在5 - 10之间的书籍
res = jsonpath(info, "$..book[?(@.price >= 5 && @.price <= 10)].price")
print(res)

# 13.获取价格不在5-10之间的书籍
res = jsonpath(info, "$..book[?(@.price < 5 || @.price > 10)].price")
print(res)

# 14.获取所有的值
res = jsonpath(info, "$.*")
print(res)