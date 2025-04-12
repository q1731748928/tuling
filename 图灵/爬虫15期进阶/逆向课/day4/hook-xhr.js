
var need_get_arg = 'sign';
var isdebugger = true;  // 决定断点
let _log = console.log

!(function (){
    var _originalXHR = window.XMLHttpRequest;
    window.XMLHttpRequest = function () {
        var xhr = new _originalXHR();
        var _open = xhr.open;
        xhr.open = function (method, url) {
            _log('XHR request:', url);
            if (method == "GET") {
                var splitUrl = url.split('?');
                if (splitUrl.length > 1) {
                    var params = splitUrl[1].split('&');
                    params.forEach(function (param) {
                        var keyValue = param.split('=');
                        if (keyValue[0] == need_get_arg) {
                            _log('参数', need_get_arg, '找到，值为：', decodeURIComponent(keyValue[1]));
                            if (isdebugger) {
                                debugger;
                            }
                        }
                    });
                }
            }

            if (method == "POST") {
                var _send = xhr.send;
                xhr.send = function (data) {
                    if (data) {
                        if (data.includes(need_get_arg)) {
                            _log("data-->", data)
                            if (isdebugger) {
                                debugger;
                            }
                        }
                    }
                    _send.call(this, data);
                };
            }
            _open.call(this, method, url);
        };
        return xhr;
    };
}())

