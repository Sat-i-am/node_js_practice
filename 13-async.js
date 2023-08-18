// now asynchronous , notice how execution is not done line by line
const {readFile,writeFile} = require(`fs`).promises
const { reject } = require("lodash")
const { resolve } = require("path")

// const util = require(`util`)
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async () => {
  try{
    const first = await readFile(`./content/first.txt`, 'utf8')
    const second = await readFile(`./content/second.txt`, `utf8`)
    await writeFile(
      `./content/result-mind-grenade.txt`,
      `this is awesome : ${first} ${second}`, { flag: `a`})
    console.log(first,second)
  } catch (error){ 
      console.log(error)
      
  }
  }
  start();

  //these are the alternatives of using async await
// const get_text = (path) => {
//   return new Promise((resolve,reject)=>{
//     readFile(path,`utf8`,(err,data)=>{
//       if(err)
//         reject(err)
//       else  
//         resolve(data)
//     })
//   })
// }

// // get_text(`./content/first.txt`)
// //   .then((result)=> console.log(result))
// //   .catch((err)=> console.log(err))
