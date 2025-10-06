
const https=require('http');
const server=https.createServer((req,res)=>{
const {readFileSync}=require('fs')

const homePage=readFileSync('./Nav-bar/index.html')
const homeStyles=readFileSync('./Nav-bar/styles.css')
const homelogo=readFileSync('./Nav-bar/logo.svg')
const homelogics=readFileSync('./Nav-bar/broswer-app.js')

    //req.method

const url =req.url;
//home page
if (url==='/'){    
res.writeHead(200,{'content-type': 'text/html'});
    res.write(homePage);
    res.end();
}
//styles of the nav bar
else if (url==='/styles.css'){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(homeStyles);
    res.end()
}
//broswer-app.js 
 else if (url==='/broswer-app.js'){    
res.writeHead(200,{'content-type': 'text/javascript'});
    res.write(homelogics);
    res.end();
}


else if (url==='/logo.svg'){
    res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homelogo);
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