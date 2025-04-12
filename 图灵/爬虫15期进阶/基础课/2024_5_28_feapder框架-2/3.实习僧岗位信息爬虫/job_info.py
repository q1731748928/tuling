# -*- coding: utf-8 -*-
"""
Created on 2024-05-29 17:31:39
---------
@summary:
---------
@author: hejie
"""
# import time

import feapder
from feapder import Request, Response
from feapder.utils.webdriver import WebDriver


class JobInfo(feapder.AirSpider):
    def start_requests(self):
        yield feapder.Request("https://q.yingjiesheng.com/jobs/search/Python?jobarea=220200", render=True)

    def parse(self, request, response):
        browser: WebDriver =response.browser

        # 让浏览器等待加载api数据
        # time.sleep(2)

        json_data = browser.xhr_json('open/noauth/job/search')
        for temp in json_data['resultbody']['searchData']['joblist']['items']:
            item = dict()
            item['jobname'] = temp['jobname']
            item['coname'] = temp['coname']
            item['jobarea'] = temp['jobarea']
            item['issuedate'] = temp['issuedate']
            item['jobtag'] = temp['jobtag']
            item['providesalary'] = temp['providesalary']
            print(item)
    def validate(self, request: Request, response: Response):
        browser: WebDriver = response.browser
        json_data = browser.xhr_json('open/noauth/job/search')
        if json_data['resultbody']['searchData']['joblist']['items']:
            return True
        raise Exception('数据异常...')


if __name__ == "__main__":
    JobInfo().start()