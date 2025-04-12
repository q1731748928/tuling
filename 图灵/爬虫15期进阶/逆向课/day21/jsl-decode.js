
debugger;

function hash(_0x3c96d2) {
  function _0x23bd5c(_0x44698a, _0xb4083) {
    return (_0x44698a & 2147483647) + (_0xb4083 & 2147483647) ^ _0x44698a & 2147483648 ^ _0xb4083 & 2147483648;
  }

  function _0x35c5ad(_0x36e53c) {
    var _0x349fdb = "0123456789abcdef";
    var _0x290b62 = '';

    for (var _0x1630ab = 7; _0x1630ab >= 0; _0x1630ab--) {
      _0x290b62 += _0x349fdb["charAt"](_0x36e53c >> _0x1630ab * 4 & 15);
    }

    return _0x290b62;
  }

  function _0x103597(_0x1714e8) {
    var _0x1ae19a = (_0x1714e8["length"] + 8 >> 6) + 1,
        _0x1818c6 = new Array(_0x1ae19a * 16);

    for (var _0x5335b5 = 0; _0x5335b5 < _0x1ae19a * 16; _0x5335b5++) {
      _0x1818c6[_0x5335b5] = 0;
    }

    for (_0x5335b5 = 0; _0x5335b5 < _0x1714e8["length"]; _0x5335b5++) {
      _0x1818c6[_0x5335b5 >> 2] |= _0x1714e8["charCodeAt"](_0x5335b5) << 24 - (_0x5335b5 & 3) * 8;
    }

    _0x1818c6[_0x5335b5 >> 2] |= 128 << 24 - (_0x5335b5 & 3) * 8;
    _0x1818c6[_0x1ae19a * 16 - 1] = _0x1714e8["length"] * 8;
    return _0x1818c6;
  }

  function _0x4ddeca(_0x58b04a, _0x338c47) {
    return _0x58b04a << _0x338c47 | _0x58b04a >>> 32 - _0x338c47;
  }

  function _0x256f80(_0x157579, _0x604074, _0x1953a2, _0x16c0c3) {
    if (_0x157579 < 20) {
      return _0x604074 & _0x1953a2 | ~_0x604074 & _0x16c0c3;
    }

    if (_0x157579 < 40) {
      return _0x604074 ^ _0x1953a2 ^ _0x16c0c3;
    }

    if (_0x157579 < 60) {
      return _0x604074 & _0x1953a2 | _0x604074 & _0x16c0c3 | _0x1953a2 & _0x16c0c3;
    }

    return _0x604074 ^ _0x1953a2 ^ _0x16c0c3;
  }

  function _0x52e597(_0x2ac585) {
    return _0x2ac585 < 20 ? 1518500249 : _0x2ac585 < 40 ? 1859775393 : _0x2ac585 < 60 ? -1894007588 : -899497514;
  }

  var _0xf62bc3 = _0x103597(_0x3c96d2);

  var _0x18970b = new Array(80);

  var _0x24ba60 = 1732584193;

  var _0x3cfcda = -271733879;

  var _0x36cb2e = -1732584194;

  var _0x59ea2d = 271733878;

  var _0x4c6de5 = -1009589776;

  for (var _0x31ca1d = 0; _0x31ca1d < _0xf62bc3["length"]; _0x31ca1d += 16) {
    var _0x166938 = _0x24ba60;
    var _0x3d8899 = _0x3cfcda;
    var _0x286a27 = _0x36cb2e;
    var _0x1e0965 = _0x59ea2d;
    var _0x933df0 = _0x4c6de5;

    for (var _0x2d4b97 = 0; _0x2d4b97 < 80; _0x2d4b97++) {
      if (_0x2d4b97 < 16) {
        _0x18970b[_0x2d4b97] = _0xf62bc3[_0x31ca1d + _0x2d4b97];
      } else {
        _0x18970b[_0x2d4b97] = _0x4ddeca(_0x18970b[_0x2d4b97 - 3] ^ _0x18970b[_0x2d4b97 - 8] ^ _0x18970b[_0x2d4b97 - 14] ^ _0x18970b[_0x2d4b97 - 16], 1);
      }

      t = _0x23bd5c(_0x23bd5c(_0x4ddeca(_0x24ba60, 5), _0x256f80(_0x2d4b97, _0x3cfcda, _0x36cb2e, _0x59ea2d)), _0x23bd5c(_0x23bd5c(_0x4c6de5, _0x18970b[_0x2d4b97]), _0x52e597(_0x2d4b97)));
      _0x4c6de5 = _0x59ea2d;
      _0x59ea2d = _0x36cb2e;
      _0x36cb2e = _0x4ddeca(_0x3cfcda, 30);
      _0x3cfcda = _0x24ba60;
      _0x24ba60 = t;
    }

    _0x24ba60 = _0x23bd5c(_0x24ba60, _0x166938);
    _0x3cfcda = _0x23bd5c(_0x3cfcda, _0x3d8899);
    _0x36cb2e = _0x23bd5c(_0x36cb2e, _0x286a27);
    _0x59ea2d = _0x23bd5c(_0x59ea2d, _0x1e0965);
    _0x4c6de5 = _0x23bd5c(_0x4c6de5, _0x933df0);
  }

  return _0x35c5ad(_0x24ba60) + _0x35c5ad(_0x3cfcda) + _0x35c5ad(_0x36cb2e) + _0x35c5ad(_0x59ea2d) + _0x35c5ad(_0x4c6de5);
}

function go(_0x484706) {
  function _0x36f53d() {
    var _0x4819b0 = window["navigator"]["userAgent"],
        _0x4a0790 = ["Phantom"];

    for (var _0x30f426 = 0; _0x30f426 < _0x4a0790["length"]; _0x30f426++) {
      if (_0x4819b0["indexOf"](_0x4a0790[_0x30f426]) != -1) {
        return true;
      }
    }

    if (window["callPhantom"] || window["_phantom"] || window["Headless"] || window["navigator"]["webdriver"] || window["navigator"]["__driver_evaluate"] || window["navigator"]["__webdriver_evaluate"]) {
      return true;
    }
  }

  if (_0x36f53d()) {
    return;
  }

  var _0x4cd686 = new Date();

  function _0x3745c1(_0x12a697, _0xbb41a) {
    var _0x32ffc9 = _0x484706["chars"]["length"];

    for (var _0x2371bd = 0; _0x2371bd < _0x32ffc9; _0x2371bd++) {
      for (var _0x763a90 = 0; _0x763a90 < _0x32ffc9; _0x763a90++) {
        var _0x4614a4 = _0xbb41a[0] + _0x484706["chars"]["substr"](_0x2371bd, 1) + _0x484706["chars"]["substr"](_0x763a90, 1) + _0xbb41a[1];

        if (hash(_0x4614a4) == _0x12a697) {
          return [_0x4614a4, new Date() - _0x4cd686];
        }
      }
    }
  }

  var _0x4fdb21 = _0x3745c1(_0x484706['ct'], _0x484706["bts"]);  // 这里赋值层

  if (_0x4fdb21) {
    var _0x17a420;

    if (_0x484706['wt']) {
      _0x17a420 = parseInt(_0x484706['wt']) > _0x4fdb21[1] ? parseInt(_0x484706['wt']) - _0x4fdb21[1] : 500;
    } else {
      _0x17a420 = 1500;
    }

    setTimeout(function () {
      var _0x443f1d = _0x484706['tn'] + '=' + _0x4fdb21[0] + ";Max-age=" + _0x484706['vt'] + "; path = /";

      if (_0x484706['is']) {
        _0x443f1d = _0x443f1d + "; SameSite=None; Secure";
      }

      document["cookie"] = _0x443f1d;
      location["href"] = location["pathname"] + location["search"];
    }, _0x17a420);
  } else {
    alert("请求验证失败");
  }
}

go({
  "bts": ["1722864786.14|0|iCcB", "QOBxR%2FkXnP%2BRqWIGBWljI%3D"],
  "chars": "YMvWulfZAnVxvEEhCMCGvA",
  "ct": "8a3b87a93a6b8660a1bd80b97e1a017a44e731b3",
  "ha": "sha1",
  "is": true,
  "tn": "__jsl_clearance_s",
  "vt": "3600",
  "wt": "1500"
});