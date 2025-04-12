
const sm4 = require('sm-crypto').sm4;

// 设置SM4密钥（128位，16字节）
const key = '0123456789ABCDEF0123456789ABCDEF';
// 设置SM4加解密模式（ecb、cbc、ctr等）
const mode = 'ecb';

// 加密数据
const plaintext = 'Hello, SM4!';
const ciphertext = sm4.encrypt(plaintext, key, { mode });
console.log('Encrypted:', ciphertext);

// 解密数据
const decryptedText = sm4.decrypt(ciphertext, key, { mode });
console.log('Decrypted:', decryptedText);

