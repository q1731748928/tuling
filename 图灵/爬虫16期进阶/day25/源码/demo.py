import requests


headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://ec.chng.com.cn/channel/home/?SlJfApAfmEBp=1744635896105",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "S6J51OuUjLieO": "5M7C0MRdjfyjJx6fYdmE9ErKFdzOStj5pmXGEyoy9.MkguoutL5vL1QmQjp3R10vYc5VNLuqqHyUgosumVUuXda",
    "S6J51OuUjLieP": "vFDopojPhQGvuGbr9jiHvaRTM2E_1xl61BnW6kuaXpGFu.7jQI6jwWqyn1N457KW3jqpR5L.oBQVHhoD37mHf9JAP_sbok0QzZFydWFdFwjQSWi9AoBbwsgknQakVARVxKQQzm3b_i1T.t32dXgy4MacU1YAMmrgaXzmBDm22FOjLmO7Rk1vWznboHvT1rtwMdMJXa5OS8xlDXR4LUlYlQkxms3Dl2DZ7piWgiijyRaMs2QUB1IbN7pwQk8QDgrTCXAXBd7xj6mlyYtpJbcX_aHrmZop2teihxzFTZzMVhWW4vUKciKdd6T5GU_zrccVaUK_0ZWzMnfVqj6XCrEhUW18gziV0B77EACiU4d74t8bhnkhTJTCUY3_vR3AL8jkOVC2tMBBgobQwrX9LUpVjaE6_kPJToyzE7.sEWFVkQa"
}
url = "https://ec.chng.com.cn/channel/home/"
response = requests.get(url, headers=headers, cookies=cookies)
response.encoding='utf-8'
print(response.text)
print(response)