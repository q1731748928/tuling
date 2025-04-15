
import os
import zipfile

def unzip_files(root_dir):
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.zip'):
                zip_file_path = os.path.join(root, file)
                try:
                    with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
                        # 解压到当前文件所在目录
                        extract_dir = os.path.dirname(zip_file_path)
                        zip_ref.extractall(extract_dir)
                        print(f"成功解压 {zip_file_path} 到 {extract_dir}")
                except zipfile.BadZipFile:
                    print(f"无法解压 {zip_file_path}，可能文件损坏。")

# 指定要遍历的根目录
root_directory = '/Users/hejie/Downloads/爬虫js逆向2518期/'  # 当前目录
unzip_files(root_directory)
