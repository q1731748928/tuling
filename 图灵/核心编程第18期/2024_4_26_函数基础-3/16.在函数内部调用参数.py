def work(key):
    res = key(1, 2)
    print(res)

attr = lambda x, y: x + y

work(key=attr)