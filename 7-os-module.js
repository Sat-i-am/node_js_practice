const os = require('os') // this imports os module

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the systems uptime in seconds

console.log(`the syster uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
}
console.log(currentOS)