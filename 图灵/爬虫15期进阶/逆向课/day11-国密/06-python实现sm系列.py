# -*- coding: utf-8 -*-


from gmssl import sm2

# 16 进制的公钥和私钥
private_key = '00B9AB0B828FF68872F21A837FC303668428DEA11DCD1B24429D0C99E24EED83D5'
public_key = 'B9C9A6E04E9C91F7BA880429273747D7EF5DDEB0BB2FF6317EB00BEF331A83081A6994B8993F3F5D6EADDDB81872266C87C018FB4162F5AF347B483E24620207'
sm2_crypt = sm2.CryptSM2(public_key=public_key, private_key=private_key)

# 待加密数据和加密后数据为 bytes 类型
data = "this is the data to be encrypted".encode()
enc_data = sm2_crypt.encrypt(data)
dec_data = sm2_crypt.decrypt(enc_data)

print('enc_data: ', enc_data.hex())
print('dec_data: ', dec_data.decode())



