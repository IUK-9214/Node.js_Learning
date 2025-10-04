console.log("Express Tutorial");
const https=require('http');
const server=https.createServer((req,res)=>{
const {readFileSync}=require('fs')

const homePage=readFileSync('./index.html')

    //req.method

const url =req.url;
//home page
if (url=='/'){    
res.writeHead(200,{'content-type': 'text/html'});
    res.write(homePage);
    res.end();
}
//about page 
 else if (url=='/about'){    
res.writeHead(200,{'content-type': 'text/html'});
    res.write('<h1> About  page </h1>');
    res.end();
}

//404 page not found 
 else{    
res.writeHead(404,{'content-type': 'text/html'});
    res.write('<h1> Not Found DATA </h1>');
    res.end();
}



})

server.listen(5000,()=>{
    console.log("i m listening 5000........");
    
})