// first synchronous , notice how execution is done line by line
const {readFileSync,writeFileSync} = require('fs');
console.log(`start`)

const first = readFileSync(`./content/first.txt`,`utf8`); //this utf8 is for encoding
console.log(first)
const second = readFileSync(`./content/second.txt`,`utf8`)
console.log(second)

writeFileSync(
  `./content/result-sync.text`,
  `this is the result : ${first} , ${second}`,
  {flag: `a`}
) 
console.log(`done with this task`)
console.log(`starting the next one`)



