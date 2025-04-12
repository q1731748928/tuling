from flask import Flask

# 创建Flask应用实例
app = Flask(__name__)

# 定义路由和视图函数
@app.route('/')
def index():
    return 'Hello, World! This is my Flask App.'

# 如果这个文件是主文件，则运行应用
if __name__ == '__main__':
    app.run(host='localhost', port=8081, debug=True)