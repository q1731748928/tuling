class Person:
    def run(self): # 可以根据self这个保存的地址找实例属性
        print('正在跑步:', self)


p = Person() # 实例化过程
print(id(p.__class__))
print(id(Person))

# 如果需要通过类对象的方式去运行类中的实例方法, 需要自己手动传递self参数
Person.run(p) # 使用类对象运行的实例方法 类对象保存了这个类中的所有方法 可以当前内存中搜索到这个方法
# 不能直接调用 为什么必须要传递实例对象 不可以的 实例对象中存储了实例属性
# 如果方法中需要使用实例属性怎么办?

# 如果通过实例对象的方式去运行实例方法
p.run()

p.__class__.run(p) # cpython运行的底层代码