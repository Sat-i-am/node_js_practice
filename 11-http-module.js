const http = require(`http`)

const server = http.createServer((req,res) =>{
  console.log(req)
  if(req.url === `/`) //i.e. home url
    res.end(`welcome to our home page`)
  else if(req.url === `/about`) //means history url
  { //  BLOCKING CODE !!!
    for(let i=0; i<20; i++){
      for(let j=0; j<1000; j++){
        console.log(`${i} ${j}`)
        
      }
    }
    res.end(`this is our short history`)
  }
    
  
  else{
      res.end(`
      <h1>oops!!<h1>
      <p>we can't seem to find what you are looking for<p>
      <a href="/">back home</a>`
      )
    }
})
server.listen(5000,() => {
  console.log(`server Listening on port 5000`)
})