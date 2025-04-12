"""
实例属性: 实例属性保存在创建的实例对象中
类属性: 类属性保存在类对象中

    实例对象可以有无数个, 并且实例对象之间是相互隔离的
    类属性在内存中只有一份
"""


class Tool:
    # 类属性
    tools_num = 0

    def __init__(self, name):
        self.name = name
        Tool.tools_num += 1 # 在实例对象中又创建了一个

    def print_info(self):
        print('工具的总数为:', self.tools_num)

tieqiao = Tool('铁锹')
chutou = Tool('锄头')
luosidao = Tool('螺丝刀')

luosidao.print_info()
print(Tool.tools_num)


"""
1.在类中创建的类属性可以被self访问
2.不能在初始化方法中使用self去访问, 本质是在实例对象中创建了一个属性, 属性名称与类属性名称一致
3.类对象可以直接操作类属性
"""