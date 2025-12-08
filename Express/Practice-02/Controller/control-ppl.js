import Product from "../models/production.models.js"
0
 export const readpeople =(req, res)=>{
res.json({
    message:"hello i  m there "
})
 }
 export const createProduct = async (req, res)=>{

    try {
        const {name,price}=req.body
        if(!name||!price){
         return res.status(400).json({ message: "Data is incomplete" });
 
        }
        const newProduct=new Product(req.body)
        await newProduct.save();
        res.status(200).json({message:"product created ",success:true})
    } catch (error) {
        res.status(400).json({message:error.message,success:false})
    }

 }
