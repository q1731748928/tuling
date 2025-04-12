
const axios = require("axios")


data = {
    "column": "szse_gem_latest",
    "pageNum": "2",
    "pageSize": "30",
    "sortName": "",
    "sortType": "",
    "clusterFlag": "true"
}


headers = {
    "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
}

axios.post("http://www.cninfo.com.cn/new/disclosure", data, {
    headers: headers,
}).then(function (res) {
    // 接受响应
    console.log(res.data);

}).catch(function (msg) {
    // 请求失败
    console.log(msg)
})
