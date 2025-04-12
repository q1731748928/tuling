const JSEncrypt = require("../jsencrypt")
var CryptoJS = require("crypto-js")
var i = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeiLxP4ZavN8qhI+x+whAiFpGWpY9y1AHSQC86qEMBVnmqC8vdZAfxxuQWeQaeMWG07lXhXegTjZ5wn9pHnjg15wbjRGSTfwuZxSFW6sS3GYlrg40ckqAagzIjkE+5OLPsdjVYQyhLfKxj/79oOfjl/lV3rQnk/SSczHW0PEyUbQIDAQAB"
a = function() {
        r = new JSEncrypt();
        r.setPublicKey(i);
        var a = r.encrypt("18626871855");
        return a
}
console.log(a());