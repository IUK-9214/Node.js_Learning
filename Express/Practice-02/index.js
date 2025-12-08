import express from "express"
import router from "./Router/people.js";
import ConnectDB from "./Database/ConnectDB.js";

const app =express();

ConnectDB()


app.use(express.json())
app.use("/api",router)

app.get("/",(req,res)=>{
res.json({
    message:"hello i m main"
})
})

app.listen(5000,()=>{

    console.log("i m listening buddy dontworry   ")
}) 