const http = require(`http`)
//first using callback
// const server = http.createServer((req,res) =>{
//   console.log(`welcome`)
// })

// Now using Event Emitter API
const server = http.createServer()
//emits request event
//subscribe to it / listen for it / respond to it
server.on(`request`, (req,res) => { //so we are listening for request event
  res.end(`welcome`)
})

server.listenerCount(5000)
