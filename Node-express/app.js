console.log("Express Tutorial");
const https=require('http');
const server=https.createServer((req,res)=>{
const url =req.url;

if (url=='/'){    
res.writeHead(200,{'content-type': 'text/html'});
    res.write('<h1> home page </h1>');
    res.end();
}
 else if (url=='/about'){    
res.writeHead(200,{'content-type': 'text/html'});
    res.write('<h1> About  page </h1>');
    res.end();
}
 else{    
res.writeHead(404,{'content-type': 'text/html'});
    res.write('<h1> Not Found DATA </h1>');
    res.end();
}



})

server.listen(5000,()=>{
    console.log("i m listening 5000........");
    
})