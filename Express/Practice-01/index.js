import express from "express"
import router from "./router/people.js"

const app =express();



app.use('/ppl',router)


app.get("/",(req,res)=>{
    res.send("i m working")
    res.end()
})



app.listen(5000,()=>{
    console.log("Server is Listening me ....")
})