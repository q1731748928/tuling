const axios = require("axios")

params = {
    id: 1,
    page: 2
}
headers = {
    "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
}

axios.get('https://wzzdg.sun0769.com/political/index/politicsNewest',
    {
        params: params,
        headers: headers
    }).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    // console.log(error);
});



