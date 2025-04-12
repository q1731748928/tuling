# -*- coding: utf-8 -*-

import requests

url = 'https://www.zhipin.com/job_detail/c59e3a17447d62721XN72NW7EVVV.html?lid=4f36M76to34.search.1&securityId=p35MsfaUta4LW-k1_xFf_Z7qtp5N92hRxO0bPFmTrm_tNusGjRqKwKSv0-pmwqAUNaJT67olFeqUMoGnQyhN-MGULeUq290qcaZWuXkFvh-WeSxB_A%7E%7E&sessionId='
cookies = {
    # "Hm_lvt_194df3105ad7148dcf2b98a91b5e727a": "1692882876,1693209947,1693212776,1693224852",
    # "Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a": "1693224921",
    "__zp_stoken__": "395deZ3ZlYlo5IDNbYGMFMngoPXEpWBxBeD46fBAVN0hQdWIhNmIEMQh4Y3wMOTgGPGRKf3NIBjB%2FHU43c2AIPUcBACd7WVk7F0YpeFR2CQkcAw4QFjF5Ewp9HwtYDkFNfl14ACBOC0c2IT4%3D"
}

hedaers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
}
res = requests.get(url,headers=hedaers,cookies=cookies)
print(res.text)


'''
3 种形式

1、拿JS补环境解决
2、扣JS 强扣算法
3、RPC远程调用

'''

