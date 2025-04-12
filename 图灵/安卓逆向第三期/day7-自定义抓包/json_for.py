import json
json_str = ''
jss = json.loads(json_str)
for js in jss:
    title = js['title']
    thumb = js['thumb']
    print(title, thumb)

