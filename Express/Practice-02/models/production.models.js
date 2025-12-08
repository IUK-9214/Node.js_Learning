import mongoose from "mongoose";
const production =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    Des:{
        type:String,
    },
},{    timestamps:true})

const Product=mongoose.model("product",production)

export default Product