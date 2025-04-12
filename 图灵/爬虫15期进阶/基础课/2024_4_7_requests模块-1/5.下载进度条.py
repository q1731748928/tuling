import requests


def download_video(url, save_path):
    response = requests.get(url, stream=True)
    total_size = int(response.headers.get('content-length', 0))
    downloaded_size = 0

    with open(save_path, 'wb') as file:
        for chunk in response.iter_content(chunk_size=1024):
            if chunk:
                file.write(chunk)
                downloaded_size += len(chunk)
                percent = (downloaded_size / total_size) * 100
                print(f"下载进度: {percent:.2f}%")

    print("下载完成...")


# 调用下载函数
video_url = "http://v3-web.douyinvod.com/dbb2c985b18e9a2b6089ada19767525f/659692f3/video/tos/cn/tos-cn-ve-15c001-alinc2/oQblva95AUnIpA9DeieFkQmqAIu0IgBVD2iNTA/?a=6383&ch=5&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=1161&bt=1161&cs=0&ds=4&ft=LjhJEL998xIouEkmD0P5H4eaciDXtVzxF_QEePMkzijD1Inz&mime_type=video_mp4&qs=0&rc=NTYzOGVlZmZpaDo6M2loM0BpM3VseGQ6ZnM2bjMzNGkzM0BgYDQuXi5iNS8xXmBgMDNfYSMvbmZocjQwL2RgLS1kLWFzcw%3D%3D&btag=e00038000&dy_q=1704362620&feature_id=46a7bb47b4fd1280f3d3825bf2b29388&l=202401041803391CCB1AB5D5A9E107FA68"
path = "video.mp4"
download_video(video_url, path)
