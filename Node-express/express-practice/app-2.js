const express =require('express');
const app=express();

app.get('/',(req,res)=>{
res.json([{name:"Ibad"},{Id:'F2023387034'}]);

})


app.listen(5000,()=>{

    console.log("server is listening ");
    
})