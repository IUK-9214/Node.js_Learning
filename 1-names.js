// const jhon=`jhon`;
// const peter =`peter`;
// const susan=`susan`;



// //exporting it  to the main-app.js

// module.exports={jhon,peter,susan}
const http=require('http');

const server=http.createServer((req,res)=>{
res.write(`<h1>are you getting me </h1>`)
res.end()
return
})

server.listen(5000,()=>{
    console.log("port listening 5000....")
})