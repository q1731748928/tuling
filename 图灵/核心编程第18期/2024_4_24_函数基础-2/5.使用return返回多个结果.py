def test_1(num_1, num_2):
    return num_1, num_2  # 如果存在多个值的情况则返回一个元组, 元组的元素是对应的结果


n1, n2 = test_1(1, 2)
print(n1, n2)


def test_2(num_1, num_2):
    return [num_1, num_2]


print(test_2(3, 1))
