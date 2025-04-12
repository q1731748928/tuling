class Goods:
    def __init__(self, money):
        self.money = money

    @property
    def price(self):
        return self.money

    @price.setter
    def price(self, new_money):
        self.money = new_money

    @price.deleter
    def price(self):
        # 逻辑删除
        self.money = None


goods = Goods(100)
print(goods.price)  # property
goods.price = 300  # @price.setter
print(goods.price)

del goods.price  # @price.deleter
print(goods.price)
