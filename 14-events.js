const EventEmitter = require(`events`);

const customEmitter = new EventEmitter() //we could have use any name for the const

customEmitter.on(`response`,(name,id)=> {
  console.log(`data recieved of ${name} with id: ${id} `)
})
customEmitter.on(`response`,()=> {
  console.log(`data recieved`)
})

customEmitter.emit(`response`,`john`,34)