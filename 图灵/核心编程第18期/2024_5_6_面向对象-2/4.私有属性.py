class Cat:
    def __init__(self, name, age):
        self.name = name
        self.__age = age # 如果在一个实例属性名称之前添加了__init__ 则这个属性为私有属性

    def info(self):
        print(self.name, self.__age)

    # 判断用户输入的年龄是否合法
    def set_age(self, age): # 在一个类中存在私有属性则创建一个方法来设置私有属性
        if 1 <= age <= 31:
            self.__age = age
            print('年龄设置成功...')
        else:
            print('超出年龄范围...')

cat_1 = Cat("小白", 3)
cat_1.info()

# 将小猫的年龄进行修改, 私有属性无法在一个类的外部完成操作
cat_1.set_age(10)
cat_1.info()


"""
1.定义私有属性
    self.__属性名称
2.私有属性无法在一个类的外部使用
"""