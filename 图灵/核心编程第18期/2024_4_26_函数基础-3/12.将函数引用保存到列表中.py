def work():
    print(1, 2, 3)


func_list = [work for _ in range(10)] # 列表可以保存任意类型
print(func_list)

# 从列表中取出第一个函数引用并调用函数
func_list[0]()
