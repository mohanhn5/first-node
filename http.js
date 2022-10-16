const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to my first page')
    }
    if(req.url==='/about'){
        res.end('This is my about page')
    }
    res.end(`
    <h1>Oops !!</h1>
    <p>This page doesnt exists</p>
    <a href='/'>Go back</a>
    `)
})
server.listen(5000)