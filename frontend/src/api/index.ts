var socket = new WebSocket('ws://localhost:9000/ws')

let connect = (cb: any) => {
    console.log('connecting')

    socket.onopen = () => {
        console.log('successfully connected')
    }

    socket.onmessage = (msg: MessageEvent<any>) => {
        console.log('in the index.ts message: ', msg)
        cb(msg)
    }

    socket.onclose = (e) => {
        console.log('socket closed: ', e)
    }

    socket.onerror = (err) => {
        console.log('socket error: ', err)
    }
}

let sendMsg = (msg: string) => {
    console.log('in the index.ts sendMsg sending msg: ', msg)
    socket.send(msg)
}

export { connect, sendMsg }