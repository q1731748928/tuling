class MyOpenFile:
    def __init__(self, file_path):
        self.file_obj = None
        self.file_path = file_path

    def __enter__(self):  # 当启动with语句会自动触发
        print('即将创建文件对象...')
        self.file_obj = open(self.file_path)
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):  # 当with之下的代码即将执行完毕则自动触发
        print('文件对象即将关闭...')
        self.file_obj.close()

    def my_read(self):
        print(self.file_obj.read())


with MyOpenFile('测试文件.txt') as f:
    f.my_read()


"""
__enter__ 开启上下文时会被触发
__exit__ 即将退出上下文时会被触发
"""