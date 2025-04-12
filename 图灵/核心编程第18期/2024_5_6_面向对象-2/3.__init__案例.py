class Hero:
    def __init__(self, name, hp, atk, armor): # 不需要手动调用
        # 接收__init__中的形式参数的值并赋值给self.name
        self.name = name
        self.hp = hp
        self.atk = atk
        self.armor = armor

    def move(self): # 在运行方法的过程中需要利用self查询这个类的实例属性
        print(f'{self.name}正在移动...')

    def attack(self):
        print(f'{self.name}正在攻击...')


mengqi = Hero("梦奇", 20, 800, 500)

mengqi.move()
mengqi.attack()
