# -*- coding: utf-8 -*-

import hashlib

params =  {
    "condition": "ty1tt2mw1",
    "refer": "homepage",
    "containerType": "0",
    "from": "search_result",
    "cityId": "110000",
    "page": "1"
}

so = "".join([f"{key}={params[key]}" for key in sorted(params.keys())])
print(so)

so1 = "d5e343d453aecca8b14b2dc687c381ca" + so
print(so1)

sha1  = hashlib.sha1()
sha1.update(so1.encode())
res = sha1.hexdigest()


