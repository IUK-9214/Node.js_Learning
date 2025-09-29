const fs=require('fs')
const http=require('http')

const server=http.createServer(
    (req,res)=>{
        // const text=fs.readFileSync('./content/result-file.txt','utf8')
        // res.end(text)
    
    const text= fs.createReadStream('./content/result-file.txt','utf8')
    text.on('open',()=>{
        text.pipe(res)
    })
    text.on('error',(err)=>{
        res.end(err);
    })
    }
);


server.listen(5000,()=>{
    console.log('port is listening 50000....');
    
})