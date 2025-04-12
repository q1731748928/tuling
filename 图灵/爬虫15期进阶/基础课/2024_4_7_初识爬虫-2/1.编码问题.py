str_code = 'abc'
print(type(str_code))

byte_code = str_code.encode('gbk')
print(type(byte_code))

byte_code = b'123'
str_code = byte_code.decode()
print(type(str_code))