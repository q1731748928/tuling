import requests
import json


headers = {
    "Accept": "application/json",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://fuwu.nhsa.gov.cn",
    "Pragma": "no-cache",
    "Referer": "https://fuwu.nhsa.gov.cn/nationalHallSt/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    # "X-Tingyun": "c=B|4Nl_NnGbjwY;x=3896aef9cf734f0c",
    "channel": "web",
    "contentType": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "x-tif-nonce": "M0mc5pgk",
    "x-tif-paasid": "undefined",
    # "x-tif-signature": "67991916da3259a78eac1925bbeb617eef5847841c51aa25064f63d2e7be0fdf",
    # "x-tif-timestamp": "1720489942"
}
cookies = {
    "https_waf_cookie": "23243b63-a331-49356273050e621ac8ea6fc9ba3eae4b0474",
    "yb_header_active": "-1",
    "amap_local": "330100"
}
url = "https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryFixedHospital"
data = {
    "data": {
        "data": {
            "encData": "3DFBCA4667B978F639BB23B95DCE4CC7C7FB98BAFA5E4CAB3ED986147AD1563BCCD20943B4DAE96380B41164D761DE9742C84A985FE3BABC31CB352556BB87C9C1495DB24A29AB6BC3A85AB7FCA00F33C56677481A67C67F739EE2C7D589054DC373615B5DDB33C24C5B31E61CB7643E8CCAA19EAE1FD36157CF9869E3A3753ED0B4E7BB97C60BF8E5275CAFCAFD1E13E384C10195003FD638576645B5EF45EA"
        },
        "appCode": "T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ",
        "version": "1.0.0",
        "encType": "SM4",
        "signType": "SM2",
        "timestamp": 1720489942,
        "signData": "HNbITXjAxv0L6/GM0iwxLuPlXDB476HczVLy/EBan8fZ914wKJyfY9O7RmMX7yf6D3hHoU2QwwLotthhGkfsqw=="
    }
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, data=data)

print(response.text)
print(response)