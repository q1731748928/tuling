# -*- coding: utf-8 -*-


# 采用web框架补环境 跑JS

from flask import Flask,Response

APP = Flask(__name__)

@APP.route('/api')
def index():
    # 处理逻辑的 简称视图文件
    return Response("hello ")

@APP.route('/xxx')
def indexs():
    # 处理逻辑的 简称视图文件
    return Response("world ")

@APP.route('/dy')
def index_dy():
    par = "device_platform=webapp&aid=6383&channel=channel_pc_web&aweme_id=7393929099015654696&cursor=20&count=20&item_type=0&insert_ids=&whale_cut_token=&cut_version=1&rcFT=&update_version_code=170400&pc_client_type=1&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=en-GB&browser_platform=Win32&browser_name=Chrome&browser_version=126.0.0.0&browser_online=true&engine_name=Blink&engine_version=126.0.0.0&os_name=Windows&os_version=10&cpu_core_num=20&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7165132921782519296&msToken=J7gdvcBMPbsQQ93b4C5uOTHP-ex2EyznujfL8Y-eZ7kFoFK4HVjtmlhgcdXN04H3jS1x27IWYMOf_gMVrstkhPPjyouyB9VQNlyyhnheuTHE1dNdDUYCuZo-6EKeMLE%3D&verifyFp=verify_lyllcqt4_s9d9gCtC_kRST_4dJQ_A2a3_O04mQQrrqwK2&fp=verify_lyllcqt4_s9d9gCtC_kRST_4dJQ_A2a3_O04mQQrrqwK2"



if __name__ == '__main__':
    APP.run()