const net = require('net')

const socket = net.createConnection({host:"127.0.0.1",port:3009},()=>{
    socket.write("This is a simple data")
})
