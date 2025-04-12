import hashlib

def sha1_test2():
    sha1 = hashlib.sha512()
    sha1.update('1'.encode('utf-8'))
    print(sha1.hexdigest())

if __name__ == '__main__':
    sha1_test2()