const express=require('express');
const app=express();

//req => middleware => res
//middle ware is a function which is run when sever hit the req the it start and run give res

const logger=(req,res,next)=>{
const method=req.method;
const url=req.url;
const date=new Date().getFullYear();
console.log("Here:",method,url,date)
next();
}
//here is the middle ware when i hit the request so it start the logger
//aslo there is the next which is for the another middle ware 




app.get('/',logger,(req,res)=>{
    res.status(200).send("home page ")
})

app.get('/about',logger,(req,res)=>{
    res.status(200).send("about page ");
})


app.listen(5000,()=>{
    console.log("I M Here For You My Love....");
    
})