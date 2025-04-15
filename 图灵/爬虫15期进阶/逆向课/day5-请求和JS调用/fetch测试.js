let fetch = require("node-fetch");

console.log(fetch)

const url = 'https://wzzdg.sun0769.com/political/index/politicsNewest'
async function get_test(url){
    const headers = {
        "User-Agent": "12321312",
    };
    const params = {
            id: 1,
            page: 2
        }
    const res = await fetch(url, {
        method: "GET",
        params:params,
        headers,
        credentials: "include"
})
    const data = await res.text();
    console.log(data)
}
get_test(url)




