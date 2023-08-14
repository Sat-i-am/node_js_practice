
const names = require('./names.js') // this is how we import data from other files
const sayhi = require('./sayHi.js')
console.log(names)

sayhi(names.satyam) 
sayhi(names.shubh)
sayhi(names.sun)
sayhi('brother')

const data = require(`./export-alternative.js`)
console.log(data)

