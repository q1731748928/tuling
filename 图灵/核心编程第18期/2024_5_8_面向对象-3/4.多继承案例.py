"""
通过代码的方式模拟一部手机
"""


class Camera():
    def take_photo(self):
        print('拍照功能...')


class PlayGame():
    def play_game(self):
        print('游戏功能...')


# 手机类继承了以上的两个功能类
class IPhone(Camera, PlayGame):
    def call(self):
        print('打电话...')

    def answer(self):
        print('接电话...')


iphone = IPhone()
iphone.call()
iphone.answer()
iphone.play_game()
iphone.take_photo()



