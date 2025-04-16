const crypto = require('crypto');

function hash(text, algorithm) {
    return crypto.createHash(algorithm).update(text).digest('hex');
}

function go(params) {
    function generateKey(ct, bts) {
        var chars = params.chars;
        var len = chars.length;
        for(var i = 0; i < len; i++) {
            for(var j = 0; j < len; j++) {
                var key = bts[0] + chars.substr(i, 1) + chars.substr(j, 1) + bts[1];
                if(hash(key, params.ha) == ct) {
                    return key;
                }
            }
        }
    }

    var result = generateKey(params.ct, params.bts);
    return params.tn + "=" + result + ";path=/";
}

// 调用示例
// console.log(go({'bts': ['1744034130.782|0|1Ah', '%2BKdCWYGycTeAOqBYe%2BgZiY%3D'], 'chars': 'OdzAXJmztgKmZBwqdC1glX', 'ct': 'f9c0b02db018074652b79f5e59dce2334703250a', 'ha': 'sha1', 'is': True, 'tn': '__jsl_clearance_s', 'vt': '3600', 'wt': '1500'}));