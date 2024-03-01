const net = require('net')

const port  = 3000
const host = "127.0.0.1"

// net.createServer is used to create TCP/IPC server
const server = net.createServer()

// When client connects to this server connection event is emitted and it is consumed here.
server.on('connection',(socket)=>{
    console.log('New connection established to server')
})

// server is listening on port:3000 
server.listen(port,host,()=>{`listening to host:${host} on port:${port}  ${server.address()}`})