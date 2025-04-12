var CryptoJS = require("crypto-js")
const JSEncrypt = require("./jsencrypt")

// console.log(JSEncrypt);

const axios = require("axios")

function sha(arg) {
    return CryptoJS.SHA512(arg).toString()
}

headers = {
    "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
}

axios.get('https://api.wei-liu.com/api/v1/Token/code',
    {
        headers: headers
    }).then(function (response) {
    pub = response.data.data.item1;
    pubCode = response.data.data.item2;
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(pub);
    var encrypted = encrypt.encrypt(pubCode + sha("12312312312"));
    console.log(encrypted)
}).catch(function (error) {
    // console.log(error)
});








