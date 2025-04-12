

const sm3 = require('sm-crypto').sm3;

const data = '1';
const hash = sm3(data);

console.log('SM3 Hash:', hash);


