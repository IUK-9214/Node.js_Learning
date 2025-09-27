const fs=require('fs')
const http=require('http')

const server=http.createServer(
    (req,res)=>{
        const text=fs.readFileSync('./content/result-file.txt','utf8')
        res.end(text)
    }
);


server.listen(5000,()=>{
    console.log('port is listening 50000....');
    
})