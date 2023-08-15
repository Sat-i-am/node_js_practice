const http = require(`http`)

const server = http.createServer((req,res) =>{
  console.log(req)
  if(req.url === `/`) //i.e. home url
    res.end(`welcome to our home page`)
  if(req.url === `/about`) //means history url
    res.end(`this is our short history`)
  
  res.end(`
    <h1>oops!!<h1>
    <p>we can't seem to find what you are looking for<p>
    <a href="/">back home</a>`
    )
})
server.listen(5000)