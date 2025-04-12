def user(name):
    def content(message):
        print(f'{name}: {message}')
    print(id(content))
    return content

"""
1.定义外层函数, 并且外层函数中存在一个形式参数
2.在外层函数的内部定义一个函数, 并且在内部函数中获取外部函数的形式参数
3.在外层函数返回内层函数的内存地址
"""

function_obj = user('安娜')
function_obj('今晚我加没人...')

"""
1.需要定义两个参数, 并且两个函数是包含关系
2.内部的函数可以访问外部函数的参数
3.外部函数最终会返回内部函数的地址
"""