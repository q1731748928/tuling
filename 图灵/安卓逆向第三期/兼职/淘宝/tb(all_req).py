import requests


headers = {
    "x-sgext": "JBJHR1szZEhgJbC%2BSMRXwUd2d3V0cGR%2FdXRwZHZxfmRkdnB1dXFzf35%2FfmR3cXAhc3Umd3MhdHN%2BcSNxZHZxfmRxZHd3ZHd3d3BkdGR2ZHVkdmR0ZHVkdmR3ZHN2ZH9kd2R3ZHdkd2R3ZHdkd2RkImR3ZHdkcCEhJXZ%2BZHd3d3d3ZHdkcn5zZHdkZHZkdmR0ZHdkPQYUd2R3ZHcYBiA0LwgWBgUGP38GDzAGehhzGHVhcHFhdWF3YSZyYXR3YXZ%2FYXdhdiVhf2F3YXZhdnd3dXV1YRI9KBhyGHRhcyRhcyJzYXdhdmF3YXdhdHdhdRhxGHZhdWFyYX5hJGEjYXZ2GHAYf35qdn91anNwandqd2p3andqdmp3anZqdn5yGCYYdWF2cWF2GCUYc35qdmp2cndqdhgkGHZqdnZxanZzandqJX8ic2okf2pyJmp3GCEYdWpwc3RqcnN2GHZ3GB8iNBUkKjUvNwoJCAYGBR0xBgwILCx3IxUPPwsvDgYGIgYoBg0yKSYvdncUBAYrAiAgEw41LCUrJCoEBgEwIAIGDAIGFCAoBgoQLDAFDgJzHwYYdnYYd2F3aX9xc39zfmF0c2F0YXZ0YXFwYXRwYX5hdn9hdnJxYXB%2BYXMYdnUYdnJqdnF1an5%2Bfhh2cBh2andqdnZqdXRqdnd0andqdGpydmp2dHVqdnYY",
    "x-sign": "azYBCM005xAAI7CAIDXUqfSx7NiKE7CDv8UqRdcdf6rnICCbnPcDSf3qQKqhmBFNapS3IgG7KWdLOZTHE8L01%2BE35hIgg7CDsDOwg7",
    "x-sid": "280c14e7f74607d1e94408a2194e10a2",
    "x-uid": "1945588948",
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": "aGgTLY06DyLEiViPMqUEnqm3G5nYPW1MaA7kzAqs%2FRdMWSWgMxVEkg2is2%2FOfqV14feUSDDkKrZsZcM26VIZ348i%2Bdj%2BssmrwhHSO%2FmVu7QsPnScg98ORNKRPM%2F0yBgKD9jUA3R%2Bco9YRo04Xkiz6vxNR2gaJT9rnFd4HOgogJ7BbaaJ7UdN5%2BPwYIli7T4uHli8%3D",
    "x-t": "1722650544",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "700170%40taobao_android_10.32.0",
    "x-umt": "ejkBgsdLPKTWnwKREboc7aFwehsTiZ5P",
    "x-utdid": "Zqxp9Bm6qUcDAGzsTLQuWS%2Fn",
    "x-appkey": "21646297",
    "x-devid": "AjFhO792bmCyGqgZ1Tb3wyePk8hXoWrBdaazKOpsiyTI",
}
url = "https://guide-acs.m.taobao.com/gw/mtop.taobao.rotterdam.shop.impression.commentlist/1.0/"
params = {
    "data": "{\"sellerId\":\"2202825144761\",\"pageSize\":\"10\",\"prefetchKey\":\"page_data_prefetch_commentlist_key\"}"
}
response = requests.get(url, headers=headers, params=params, verify=False)

print(response.text)
print(response)