import os
import requests
image_url = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi3%2F67303687%2FO1CN01UhU0rw1d6h0XuRL9S_%21%2167303687.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1718546205&t=190fb822e1a4a323dd28146c179ef83c'
response = requests.get(image_url).content

# 创建保存文件夹
download_path = 'images/'
if not os.path.exists(download_path):
    os.mkdir(download_path)

with open(download_path + '汉服.png', mode='wb') as f: # bytes
    f.write(response)