
const names = require('./2-names.js') // this is how we import data from other files
const sayhi = require('./4-sayHi.js')
console.log(names)

sayhi(names.satyam) 
sayhi(names.shubh)
sayhi(names.sun)
sayhi('brother')

const data = require(`./5-export-alternative.js`)
console.log(data)

