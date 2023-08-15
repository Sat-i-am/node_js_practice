// now asynchronous , notice how execution is not done line by line
const {readFile,writeFile, read} = require(`fs`)
console.log(`start`)
readFile(`./content/first.txt`,`utf8`, (err, result) => { //in async we have to pass a callback function too
  if(err){
    console.log(err)
    return
  } else{
    const first = result
    console.log(result)
    readFile(`./content/second.txt`,`utf8`, (err, result) => {
      if(err){
        console.log(err)
        return
      } else{
        const second = result
        console.log(result)
        writeFile(`./content/async-result.txt`,`this is the result : ${first}, ${second}`, (err,result) => {
          if(err){
            console.log(err)
            return
          } else{
            console.log(result)
          }
        })
      }
    })
  }
  console.log(`done with the task`)
})

console.log(`starting a new one`)

// see how nested callbacks looks messy so we will use promises later on

 