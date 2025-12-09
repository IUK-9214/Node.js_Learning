import express from "express"
import usersRouter from "./Router/usersRouter.js"
import { ConnectDb } from "./Database/ConnectDB.js"

const app = express()

ConnectDb()
app.use(express.json()); 

app.use("/api",usersRouter)


app.get("/",(req,res)=>{
res.json({
    message:"i m there handsome"
})
})

app.listen(5000,()=>{

    console.log("i m listening sir..... are you there ?  ");
    
})