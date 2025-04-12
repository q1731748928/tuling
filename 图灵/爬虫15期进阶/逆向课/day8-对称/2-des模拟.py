# -*- coding: utf-8 -*-
import base64

from Crypto.Cipher import DES
from Crypto.Util.Padding import pad

def des_encrypt(key, iv,plaintext):
    # 确保密钥长度为 8 字节（64 位）
    key = key[:8]  # 如果密钥超过 8 字节，只取前 8 字节
    key = key.ljust(8, b'\0')  # 如果密钥不足 8 字节，用空字节补足

    # 创建 DES 加密器对象，使用 CBC 模式
    cipher = DES.new(key, DES.MODE_CBC, iv)

    # 对明文进行填充
    padded_plaintext = pad(plaintext.encode('utf-8'), DES.block_size)

    # 加密明文
    ciphertext = cipher.encrypt(padded_plaintext)

    return ciphertext

# 测试
text = 'hello world'
des_key = '12345678'  # 密钥必须是 8 字节长
iv = des_key
encrypted_text = des_encrypt(des_key.encode(),iv.encode(), text )
print("加密后的结果:", base64.b64encode(encrypted_text).decode())
