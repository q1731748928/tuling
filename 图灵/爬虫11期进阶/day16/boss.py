from urllib import parse
import random
import urllib3,requests
urllib3.disable_warnings()

def get_seed_ts():
    url = f"https://www.zhipin.com/job_detail/"
    headers = {
        "user-agent": f"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/{random.randint(1, 999)}.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
    }
    response = requests.get(url, headers=headers )
    query_str = parse.urlparse(response.url).query
    query_dict = {i.split("=")[0]: i.split("=")[1] for i in query_str.split("&")}
    seed = parse.unquote(query_dict.get("seed"))
    ts = query_dict.get("ts")
    return seed,ts

def get_sig():
    seed,ts = get_seed_ts()
    data = {
        "group": "rpc-test",
        "action": "boos",
        'seed':seed,
        'ts': ts
    }
    res = requests.post(url="http://127.0.0.1:5620/business-demo/invoke", data=data, verify=False)
    if res.status_code == 200:
        return res.json().get('data')

def get_index():
    url = 'https://www.zhipin.com/job_detail/c59e3a17447d62721XN72NW7EVVV.html?lid=4f36M76to34.search.1&securityId=p35MsfaUta4LW-k1_xFf_Z7qtp5N92hRxO0bPFmTrm_tNusGjRqKwKSv0-pmwqAUNaJT67olFeqUMoGnQyhN-MGULeUq290qcaZWuXkFvh-WeSxB_A%7E%7E&sessionId='
    token = get_sig()
    print(token)
    headers = {
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
        "cookie": f"__zp_stoken__={token}"
    }
    res =requests.get(url,headers=headers)
    print(res.text)



get_index()


