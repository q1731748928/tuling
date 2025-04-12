# -*- coding: utf-8 -*-


# encoding: utf-8
import asyncio
import websockets


async def echo(websocket):
    # 使用WebSocket在客户端和服务器之间建立全双工双向连接后，就可以在连接打开时调用send()方法。
    message = 'hello world'
    # 发送数据

    data =   "{app_id=98357f659cf8fb6001cff80f7c6b85f2&diploma_id=7&page=2&page_len=20&platform=desktop&ts=1721654477039&v=210&wenli=0}&key=146fd1e66513611ac7af69f21f1d7725"

    await websocket.send(data)
    return True


async def recv_msg(websocket):
    while 1:
        # 接收数据
        recv_text = await websocket.recv()
        print(recv_text)


async def main_logic(websocket, path):
    await echo(websocket)
    await recv_msg(websocket)

print("启动websocket服务")
start_server = websockets.serve(main_logic, '127.0.0.1', 8080)
loop = asyncio.get_event_loop()
loop.run_until_complete(start_server)
# 创建了一个连接对象之后，需要不断监听返回的数据，则调用 run_forever 方法，要保持长连接即可
loop.run_forever()
