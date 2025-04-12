# 使用函数完成
# def say(user_name, content):
#     print("(%s):%s" % (user_name, content))
#
#
# user_name1 = "安娜"
# user_name2 = "双双"
#
# say(user_name1, "今天吃了么？")
# say(user_name2, "吃了~")
#
# say(user_name1, "吃了啥？")
# say(user_name2, "半只牛~")
#
# say(user_name1, "为啥不给我吃？")
# say(user_name2, "我一个人刚刚好~~")
#
# say(user_name1, "友谊的小船说翻就翻！")
# say(user_name2, "我会游泳~~~")


# 使用类完成
class Person(object):
    def __init__(self, name):
        self.user_name = name

    def say(self, content):
        print("(%s):%s" % (self.user_name, content))
#
#
# p1 = Person("安娜")
# p2 = Person("双双")
#
# p1.say("今天吃了么？")
# p2.say("吃了~")
# p1.say("吃了啥？")
# p2.say("半只牛~")
# p1.say("为啥不给我吃？")
# p2.say("我一个人刚刚好~~")
# p1.say("友谊的小船说翻就翻！")
# p2.say("我会游泳~~~")

# 使用闭包完成
def person(name):
    def say(content):
        print(f'({name}): {content}')
    return say


p1 = person("安娜")
p2 = person("双双")

p1("今天吃了么？")
p2("吃了~")
p1("吃了啥？")
p2("半只牛~")
p1("为啥不给我吃？")
p2("我一个人刚刚好~~")
p1("友谊的小船说翻就翻！")
p2("我会游泳~~~")