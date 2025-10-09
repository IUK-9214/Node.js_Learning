const express =require('express');
const app=express();
let {people}=require('./data-for-get');



app.use(express.static('./method-public'))
app.use(express.urlencoded({extended:false}))

app.get('/api/people',(req,res)=>{

    res.status(200).send({success:true,data:people});
})

app.post("/login",(req,res)=>{
console.log(req.body);

    res.send("Post")

})



app.listen(5000,()=>{

    console.log("I M listening....");
})