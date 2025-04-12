import requests

cookies = {
    'T0k1m0u5AfREO': '5fc5O.OIv.tQXg5tu.8Kfs7arD6EZjB.LVTrZM2DsIUhTDuELVvAtKidgUA1nQPY3L8qn8_RHehJA9F9O2kM5eA',
    'cookiesession1': '678A3E1A236ED955427E3D7D45567CB9',
    'gr_user_id': 'cdefb0f6-754e-4d35-a96b-01344167a416',
    'SHGTSESSIONID': 'e3f20fb1-71ff-4b7c-b500-ad1928f71dad',
    'ba9640afd66ac920_gr_session_id': 'c738d3ee-c145-41ce-a51f-0416a79b5779',
    'ba9640afd66ac920_gr_session_id_sent_vst': 'c738d3ee-c145-41ce-a51f-0416a79b5779',
    'staticVersion': '1721903855041',
    'T0k1m0u5AfREP': 'V6.2H1tsrAvYAXTEbjEjC.gTn51ub3TISt2hvVJE.zKZ6M95R8c4ysa6EMjOgJmiBB1eAKP92TVQTO2iUPbz6KA2weVliGmhRCe2AqRw.amnUQpy4T1lHXrv6ZhUaPyZYEdLPI3oVXgCCHR0AYLMqBUomxgZNuN_D6UriLPqopsvBzO9FdS3F4ghvllVLMgdquBIJG72h6WC5ptk_P_7bo9otl.wjVRblotqfFe5sKTGsbqxR8Pfxv87.X0KYYccju3fqXeOviVxaIIwgB165V7r.j74_G_nt5JL3NTvDx4OWVnLU7NrbmVUyXAuCjj.vhjACKga6plhWRWPa_Wbz.n3o8cHoh__WSRSdPX6vOq',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    # 'Cookie': 'T0k1m0u5AfREO=5fc5O.OIv.tQXg5tu.8Kfs7arD6EZjB.LVTrZM2DsIUhTDuELVvAtKidgUA1nQPY3L8qn8_RHehJA9F9O2kM5eA; cookiesession1=678A3E1A236ED955427E3D7D45567CB9; gr_user_id=cdefb0f6-754e-4d35-a96b-01344167a416; SHGTSESSIONID=e3f20fb1-71ff-4b7c-b500-ad1928f71dad; ba9640afd66ac920_gr_session_id=c738d3ee-c145-41ce-a51f-0416a79b5779; ba9640afd66ac920_gr_session_id_sent_vst=c738d3ee-c145-41ce-a51f-0416a79b5779; staticVersion=1721903855041; T0k1m0u5AfREP=V6.2H1tsrAvYAXTEbjEjC.gTn51ub3TISt2hvVJE.zKZ6M95R8c4ysa6EMjOgJmiBB1eAKP92TVQTO2iUPbz6KA2weVliGmhRCe2AqRw.amnUQpy4T1lHXrv6ZhUaPyZYEdLPI3oVXgCCHR0AYLMqBUomxgZNuN_D6UriLPqopsvBzO9FdS3F4ghvllVLMgdquBIJG72h6WC5ptk_P_7bo9otl.wjVRblotqfFe5sKTGsbqxR8Pfxv87.X0KYYccju3fqXeOviVxaIIwgB165V7r.j74_G_nt5JL3NTvDx4OWVnLU7NrbmVUyXAuCjj.vhjACKga6plhWRWPa_Wbz.n3o8cHoh__WSRSdPX6vOq',
    'Origin': 'https://www.ouyeel.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.ouyeel.com/search-ng/queryResource/index',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'X-Tingyun-Id': 'shNg2wpepqo;r=118586128',
    'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
}

params = {
    'K5nOZLud': 'Ity7QAlqEiCRhEtrjI0utzgX9dRbTpwtNyyHrAruNd708NTpolNTEciIYntNnhMidafgBIkzGXLQunhXY_FW6H7LpuXjUGp6',
}

data = {
    'criteriaJson': '{"pageIndex":0,"pageSize":50,"industryComponent":null,"channel":null,"productType":null,"sort":null,"warehouseCode":null,"key_search":null,"is_central":null,"searchField":null,"companyCode":null,"inquiryCategory":null,"inquirySpec":null,"provider":null,"shopCode":null,"steelFactory":null,"resourceIds":null,"jsonParam":{},"excludeShowSoldOut":null}',
}

response = requests.post(
    'https://www.ouyeel.com/search-ng/commoditySearch/queryCommodityResult',
    params=params,
    cookies=cookies,
    headers=headers,
    data=data,
).text
print(response)