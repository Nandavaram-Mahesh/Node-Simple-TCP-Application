const net = require('net')

// Here we are connecting to the server
const client = net.createConnection({host:"127.0.0.1",port:3000},()=>{
    console.log('Connected to server')
})

