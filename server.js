const net = require('net')

const server = net.createServer((socket)=>{
    socket.on('data',(data)=>{
        console.log(data)
    })
})

server.listen(3009,"127.0.0.1",()=>{console.log("opened Server on",server.address()) })