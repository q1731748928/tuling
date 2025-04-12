# coding: utf-8
import requests
import csv
def save_bilibili_csv(api_url):
    headers = {
       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Cookie': 'b_lsid=62935EDC_18EF4FB1E85; _uuid=10EB1DBCF-BDFE-CEA9-B415-410EDDB4F1103381876infoc; buvid_fp=1195fa199ab76d023a1a495391614ae8; buvid3=6FF4C321-0AAB-155B-5298-56AF75F17FBD83635infoc; b_nut=1713507083; buvid4=F3DB5EDD-3580-E840-FF8D-FA59EF28891F83635-024041906-0a3aY5bqm2TAtdUtRyB4zg%3D%3D; CURRENT_FNVAL=4048; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTM3NjYzNDMsImlhdCI6MTcxMzUwNzA4MywicGx0IjotMX0.KQV9Qa2maX88elvwSskQN19mlqiA2SJiZX9YpknAqy8; bili_ticket_expires=1713766283; sid=7zdh6l8u'
    }

    with open('bilibili_video_info.csv', 'w', newline='') as f:
        field_names = ['author','arcurl', 'tag']
        # 创建写入对象
        f_csv = csv.DictWriter(f, fieldnames=field_names)
        # 写入表头
        f_csv.writeheader()

        for page in range(1, 11):
            response = requests.get(api_url.format(page), headers=headers).json()
            for result in response['data']['result']:
                item = dict()
                item['author'] = result['author']
                item['tag'] = result['tag']
                item['arcurl'] = result['arcurl']
                print(item)
                f_csv.writerow(item)


url = 'https://api.bilibili.com/x/web-interface/wbi/search/type?category_id=&search_type=video&ad_resource=5654&__refresh__=true&_extra=&context=&page={}&page_size=42&from_source=&from_spmid=333.337&platform=pc&highlight=1&single_column=0&keyword=%E7%BE%8E%E5%A5%B3&qv_id=YsDbX5DF47BYKbzhDhEQZ6fBclXmNiWn&source_tag=3&gaia_vtoken=&dynamic_offset=0&web_location=1430654&w_rid=cf76a362150148f765124f2f557d5f61&wts=1713448167'
save_bilibili_csv(url)