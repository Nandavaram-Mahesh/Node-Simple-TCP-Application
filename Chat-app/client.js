const net = require('net')
const readlinePromises = require('node:readline/promises');

// Reading the userInput from console
const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
}); 



// Here we are connecting to the server
const socket = net.createConnection({host:"127.0.0.1",port:3000},async()=>{
    console.log('Connected to server')
    const message = await rl.question("Enter a Message > ")
    
    socket.write(message)
    
})

socket.on('data',(data)=>{
    console.log(data.toString('utf-8'))
})

socket.on('end',()=>{
    console.log(`connection Ended`)
})