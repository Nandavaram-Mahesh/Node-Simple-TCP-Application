const net = require('net')

const port  = 3000
const host = "127.0.0.1"
const clients =[]

// net.createServer is used to create TCP/IPC server
const server = net.createServer()


// When client connects to this server connection event is emitted and it is consumed here.
server.on('connection',(socket)=>{             /* Socket -  it's a Duplex Stream */
    console.log('New connection established to server')
    socket.on("data",(data)=>{
        // console.log(data.toString("utf-8"))
        clients.map((s)=>s.write(data))
        clients.push(socket)
    })
})

// server is listening on port:3000 
server.listen(port,host,()=>{`listening to host:${host} on port:${port}  ${server.address()}`})