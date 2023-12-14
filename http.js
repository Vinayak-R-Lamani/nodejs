const http  = require('http');
const { url } = require('inspector');

const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.end('welcome to home page')
    }
   else if(req.url == '/about'){
        res.end('here is our short history')
    }
    else{
    res.end(`
    <h1> Oops!</h1>
    <p> we can't seem to find the page you are looking </p>
    <a href ="/">back Hom</a>
    `    
    )}
})

server.listen(5000);