
# -*- coding: utf-8 -*-

from gmssl import sm4, func

# 创建SM4加密对象
sm4_crypt = sm4.CryptSM4()

key = b'0123456789ABCDEF0123456789ABCDEF'

# 设置密钥
sm4_crypt.set_key(key, sm4.SM4_ENCRYPT)

# 要加密的数据
data = b"Hello, SM4!"

# 加密数据
ciphertext = sm4_crypt.crypt_ecb(func.bytes_to_list(data))

# 将加密后的数据转换为字节串
encrypted_data = bytes(func.list_to_bytes(ciphertext))

# 解密数据（如果需要）
sm4_crypt.set_key(key, sm4.SM4_DECRYPT)
decrypted_data = sm4_crypt.crypt_ecb(ciphertext)
decrypted_data = bytes(func.list_to_bytes(decrypted_data))

print("原始数据:", data.decode("utf-8"))
print("加密后的数据:", encrypted_data.hex())
print("解密后的数据:", decrypted_data.decode("utf-8"))


