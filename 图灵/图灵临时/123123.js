const CrypyoJs = require('crypto-js')

function main123(text, lastTime) 
//text 为 data ,  lastTime 为 lastFetchTim
//包装成一个函数
{
    var i = CrypyoJs.enc.Utf8.parse(lastTime + "000")
        , a = CrypyoJs.enc.Utf8.parse(lastTime + "000")
        , s = CrypyoJs.AES.decrypt(text.toString(), i, {
        iv: a
    }), c = s.toString(CrypyoJs.enc.Utf8).toString();
    return  JSON.parse(c)
}
//AES解密调用库的语法