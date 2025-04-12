import requests
import re
import time


class DaiLi():
    def __init__(self):
        self.url = 'https://www.kuaidaili.com/free/inha/{}'
        self.test_url = 'http://httpbin.org/ip'
        self.headers = {
            'Host': 'www.kuaidaili.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
        }

    def get_data(self, page):
        response = requests.get(self.url.format(page), headers=self.headers)
        # print(response.text)
        return response.text

    def parse_data(self, response):
        ip_list = re.findall('{"ip": "(.*?)", "last_check_time": ".*?", "port": "(.*?)",', response)
        # print(ip_list)
        Dizhi = []
        for i in ip_list:
            dz = {
                'http': 'http://' + i[0] + ':' + i[1],
                'https': 'https://' + i[0] + ':' + i[1]
            }
            print(dz)
            try:
                response = requests.get(self.test_url, headers=self.headers, proxies=dz, timeout=2)
                if response.status_code == 200:
                    print(response.text)
                    Dizhi.append(dz)
            except:
                print('请求超时~~~')

        print(Dizhi)


    def main(self):
        for i in range(1, 5):
            time.sleep(1)
            response = self.get_data(i)
            self.parse_data(response)


if __name__ == '__main__':
    dl = DaiLi()
    dl.main()
