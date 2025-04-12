# 首位的x变量是for循环中每一次生成的值
int_list = [x for x in range(1, 101)]
print(int_list)

int_list = list()
for i in range(1, 101):
    int_list.append(i)
print(int_list)

# 下面的这种方式对起始位置有要求
int_list = [x for x in range(0, 21, 2)]
print(int_list)

# 在列表推导式语法中不包含else语法
int_list = [x for x in range(1, 21) if x % 2 ==0]
print(int_list)

# 集合推导式
int_set = {x for x in range(1,101)}
print(int_set)

# 元组没有推导式
obj = (x for x in range(1,101))
print(obj) # 生成器对象

# 字典推导式
int_dict = {x: x*x for x in range(1, 21)}
print(int_dict)

# 列表字典推导式
int_list_dict = [{x: x*x} for x in range(1,21)]
print(int_list_dict)

# 集合元组推导式
int_tuple_set = {(x,) for x in range(1, 21)}
print(int_tuple_set)

# 多维列表推导式
int_list = [[x, y] for x in range(1, 3) for y in range(3)]
print(int_list)

int_list = list()
for x in range(1,3):
    for y in range(3):
        int_list.append([x,y])
print(int_list)

int_list = [1, [2, 3], 4, [5, 6, 7], 8]
print(int_list[3])