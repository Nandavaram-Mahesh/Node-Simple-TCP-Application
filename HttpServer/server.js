const http = require('node:http')

const port = 3099
// const hostname = "127.0.0.1"
const hostname = "192.168.31.216"


const server = http.createServer((req,res)=>{
    const data={message:"Hi there"}
    res.setHeader("Content-Type","application/json")
    res.setHeader("Connection","close")
    res.statusCode=200
    res.end(JSON.stringify(data))
})

server.listen(port,hostname,()=>{
    console.log(`server is running on ${hostname} , ${port}`)
})