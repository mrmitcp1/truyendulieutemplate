const http = require('http')
const fs = require('fs')
let server = http.createServer((req, res)=>{
    fs.readFile('./templates/index.html','utf-8',function (err,str) {
        if (err){
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end('404 Not Found')
        }
        let username='admin'
        str=str.replace('{username}',username)
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(str);
        return  res.end()
    })
})
server.listen('8080',function () {
    console.log('localhost:8080')
})