const  express =require('express');
const router=express.Router();


router.post("/",(req,res)=>{
let name=req.body.name
if(name){
    res.status(200).send(`Welcome :  ${name} `)
}
else  {  res.status(404).send("please provide name :")}

})

module.exports=router;