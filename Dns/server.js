const dnsPromises = require('node:dns').promises;


(async()=>{
    const result  = await dnsPromises.lookup("google.com")
    console.log(result)
})()