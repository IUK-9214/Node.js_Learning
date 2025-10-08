const express=require('express');
const app=express();
const logger=require('./logger')
const authorize=require('./authorize')
const morgan=require('morgan')
//req => middleware => res
//middle ware is a function which is run when sever hit the req the it start and run give res
//here is the middle ware when i hit the request so it start the logger
//aslo there is the next which is for the another middle ware
//if we pass multi middleware so it would be in array form 
// app.use([authorize,logger])
//by useing the use funcion it is calling it when ever a request is made 
//also order matter i should use the teh use function before any request 



//third party morgan npm 
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.status(200).send("home page ")
})

app.get('/about',(req,res)=>{
    res.status(200).send("about page ");
})
app.get('/api/product',(req,res)=>{
    res.status(200).send("Products");
})
app.get('/api/items',[authorize,logger],(req,res)=>{
    console.log(req.user)
    res.status(200).send(" Items");
})


app.listen(5000,()=>{
    console.log("I M Here For You My Love....");
    
})