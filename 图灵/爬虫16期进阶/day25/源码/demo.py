import requests


headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://ec.chng.com.cn/channel/home/",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "S6J51OuUjLieO": "5KTj1AnWad5HGsEYB5DpXeeq4w1je1tONMHcq3gl9I9_1FPNofhC91fDWsFTj.xIUDZ5ecVrEtM9MlkztceSgcG",
    "S6J51OuUjLieP": "VQ.yprSOzo96s0kT3PF79MbSWhaxGJll5oMgWi1zks8tVbQ4LgTbU9mebWQp1PfcEklueWR1q_09KebN14N2xRAi.hYe_dxgHZampxBvEQ9qp7aiLUJUeHaSAozLBlRRVf996t0cMIUAk3qP1ZcXUR2ZS2m22i.CJIEVvK7DiL45gqpySBfg60STC11G680BgEt0OiIjpOMLrBFz84isCh.MLQVcHPWk7uRgD_4wwDa"
}
url = "https://ec.chng.com.cn/channel/home/"
params = {
    "SlJfApAfmEBp": "1744200191748"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)
response.encoding = 'utf-8'
print(response.text)
print(response)