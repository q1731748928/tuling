const crypt = require('crypto-js')
const axios = require("axios")
_ts = new Date().getTime()

function get_md5(arg) {
    return crypt.MD5(arg).toString()
}

for (let i = 0; i <= 10; i++) {
    e = {
        "url": "https://mapi.yiche.com/web_app/api/v1/city/get_area_list",
        "data": {
            // "priceRange": -1,
            // "carLevel": -1,
            // "energyType": -1,
            // "manuType": -1,
            // "pageSize": 5,
            // "currentPage": i
        },
        "headers": {
            "x-platform": "pc"
        },
        "method": "GET",
        "withCredentials": "true",
        "async": "true",
        "isParam": "true",
        "dataType": "json",
        "defaultContentType": "true",
        "encryptType": "headers",
        "isEncrypt": "false",
        "isBrush": "false",
        "proxy": "false",
        "timeout": 5000
    }
    t = {
        "cid": "508",
        "ver": "v10.80.0",
        "timestamp": _ts,
        "gradeParam": {},
        "uid": "",
        "headerEncryptKeys": [
            {
                "name": "pc",
                "value": "19DDD1FBDFF065D3A4DA777D2D7A81EC",
                "cid": "508"
            },
            {
                "name": "phone",
                "value": "DB2560A6EBC65F37A0484295CD4EDD25",
                "cid": "601"
            },
            {
                "name": "h5",
                "value": "745DFB2027E8418384A1F2EF1B54C9F5",
                "cid": "601"
            },
            {
                "name": "business_applet",
                "value": "64A1071F6C3C3CC68DABBF5A90669C0A",
                "cid": "601"
            },
            {
                "name": "wechat",
                "value": "AF23B0A6EBC65F37A0484395CE4EDD2K",
                "cid": "601"
            },
            {
                "name": "tencent",
                "value": "1615A9BDB0374D16AE9EBB3BBEE5353C",
                "cid": "750"
            }
        ],
        "paramsKey": "f48aa2d0-31e0-42a6-a7a0-64ba148262f0"
    }

    function r(e, t) {
        return "19DDD1FBDFF065D3A4DA777D2D7A81EC"
    }

    function s(e, t) {
        var i = JSON.stringify(e.data)
            , o = r(e, t);
        var n = "cid=" + 508 + "&param=" + i + o + t.timestamp
        var s = get_md5(n)
        return s
    }

    headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "cid": "508",
        "content-type": "application/json;charset=UTF-8",
        "origin": "https://car.yiche.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://car.yiche.com/newcar/salesrank/?date=2024-01-01&page=61",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        "x-city-id": "3001",
        "x-ip-address": "117.147.9.165",
        "x-platform": "pc",
        "x-sign": s(e, t),
        "x-timestamp": _ts,
        "x-user-guid": "fe537a0ca15dce4cfd96a3b1384d8cd3"
    }
    JSON.stringify(e.data)
    params = {
        "cid": "508",
        "param": JSON.stringify(e.data)
    }
    axios.get('https://mapi.yiche.com/web_app/api/v1/city/get_area_list',
        {
            params: params,
            headers: headers
        }).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        // console.log(error);
    });

}

