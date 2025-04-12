import time # 进程的启动速度太慢，需要让主进程sleep等待子进程启动
import pymongo
import requests
import jsonpath
from multiprocessing import Process,JoinableQueue as Queue

url = "https://careers.tencent.com/tencentcareer/api/post/Query"
headers = {
    'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
}
mongo_client = pymongo.MongoClient()
collection = mongo_client['py_spider']['p_tx_work']

def get_work_info(page_num, queue):
    params = {
        "timestamp": "1714385041596",
        "countryId": "",
        "cityId": "",
        "bgIds": "",
        "productId": "",
        "categoryId": "",
        "parentCategoryId": "",
        "attrId": "",
        "keyword": "python",
        "pageIndex": page_num,
        "pageSize": "10",
        "language": "zh-cn",
        "area": "cn"
    }
    response = requests.get(url, headers=headers, params=params).json()
    for info in response['Data']['Posts']:
        work_info_dict = dict()
        work_info_dict['recruit_post_name'] = jsonpath.jsonpath(info, '$..RecruitPostName')[0]
        work_info_dict['country_name'] = jsonpath.jsonpath(info, '$..CountryName')[0]
        work_info_dict['location_name'] = jsonpath.jsonpath(info, '$..LocationName')[0]
        work_info_dict['category_name'] = jsonpath.jsonpath(info, '$..CategoryName')[0]
        work_info_dict['responsibility'] = jsonpath.jsonpath(info, '$..Responsibility')[0]
        work_info_dict['last_update_time'] = jsonpath.jsonpath(info, '$..LastUpdateTime')[0]
        queue.put(work_info_dict)

def save_work_info(queue):
    while True:
        dict_info = queue.get()
        collection.insert_one(dict_info)
        print("数据插入成功:", dict_info)
        # 直到队列计数器为0则释放主进程
        queue.task_done()

# 进程是必须要创建启动入口
if __name__ == '__main__':
    dict_info_queue = Queue()

    process_list = list()

    for page in range(1, 50):
        p_get_info = Process(target=get_work_info, args=(page, dict_info_queue))
        process_list.append(p_get_info)

    p_save_work = Process(target=save_work_info, args=(dict_info_queue, ))
    process_list.append(p_save_work)

    for process_obj in process_list:
        # 将子进程设置为守护进程
        process_obj.daemon = True
        process_obj.start()

    # 让主进程等待所有的子进程启动
    time.sleep(2)

    dict_info_queue.join()
    print("任务完成...")

"""
课后作业：
    将上述代码修改成进程池
"""