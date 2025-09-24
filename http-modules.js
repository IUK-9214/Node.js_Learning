const http=require('http')

const server=http.createServer((req,res)=>{
if (req.url==='/'){
    res.write("welcome to the Home page")
    res.end()
    return
}
if (req.url==='/about'
){
    res.write("This is Our history ");
    res.end()
    return
}

res.write(`
    
    <h1>Oops!</h1>
    <p>there is no such page  which you looking for thank you gentle man</p>
    <a href='/'>Back To Home Page</a>

    `)
    res.end()


// res.write("hello welcome to the hackthon projext");
// res.end()
})

server.listen(5000,()=>{
    console.log("serever is runing on port 5000.... ")
});