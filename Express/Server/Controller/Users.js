import Usersdata from "../Model/userdata.js"

 
 
 export  const Users=(req,res)=>{

res.json({
    message:"i m the handsome  user hhahhahahahh"
})
 }


 export const CreateUsers= async (req,res)=>{
    try {
        const {name, fatherName}=req.body;
        if (!name||!fatherName){
            return res.status(400).json({message : "try agian you dumb ass",success:false})
        }

        const User=new Usersdata(req.body)
        await User.save()
        res.status(200).json({
            message:"successfully added ",success:true
        })
    } catch (error) {
        res.status(500).json({message:error,message, success:false
        })
        
    }
 }