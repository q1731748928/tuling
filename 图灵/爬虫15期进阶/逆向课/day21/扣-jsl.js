const Cry = require("crypto-js")

function hashs(type, value) {
    if(type == 'md5') {
        return Cry.MD5(value).toString()
    }if(type == 'sha1') {
        return Cry.SHA1(value).toString()
    }if(type == 'sha256') {
        return Cry.SHA256(value).toString()
    }
}

_0x484706 = {
  "bts": ["1722864786.14|0|iCcB", "QOBxR%2FkXnP%2BRqWIGBWljI%3D"],
  "chars": "YMvWulfZAnVxvEEhCMCGvA",
  "ct": "8a3b87a93a6b8660a1bd80b97e1a017a44e731b3",
  "ha": "sha1",
  "is": true,
  "tn": "__jsl_clearance_s",
  "vt": "3600",
  "wt": "1500"
};
var _0x4cd686 = new Date();
function _0x3745c1(ags) {

    var _0x484706 = ags,_0x12a697 = _0x484706['ct'],_0xbb41a = _0x484706["bts"]

    var _0x32ffc9 = _0x484706["chars"]["length"];

    for (var _0x2371bd = 0; _0x2371bd < _0x32ffc9; _0x2371bd++) {
      for (var _0x763a90 = 0; _0x763a90 < _0x32ffc9; _0x763a90++) {
        var _0x4614a4 = _0xbb41a[0] + _0x484706["chars"]["substr"](_0x2371bd, 1) + _0x484706["chars"]["substr"](_0x763a90, 1) + _0xbb41a[1];

        if (hashs(_0x484706['ha'],_0x4614a4) == _0x12a697) {
          return [_0x4614a4, new Date() - _0x4cd686];
        }
      }
    }
  }

  function get_ck(arg) {
      _0x4fdb21 = _0x3745c1(arg);
      return _0x4fdb21

  }

// console.log(get_ck(_0x484706));

// console.log(get_ck(_0x484706));

// _0x4fdb21 = _0x3745c1(_0x484706['ct'], _0x484706["bts"]);  // 这里赋值层

// console.log(_0x4fdb21)


// console.log(hash("1")) // 标准的sha1 算法

