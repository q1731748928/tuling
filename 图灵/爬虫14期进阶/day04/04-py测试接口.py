
import requests


url = 'http://127.0.0.1:8080/user?aa=123'
url = 'http://127.0.0.1:8080/api'

data = {
    'aa': '123'
}

res = requests.post(url,data=data)
print(res.text)
