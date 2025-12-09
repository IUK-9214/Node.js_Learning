import mongoose from "mongoose";


const Userdata=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    DateOfBirth:{
        type: Date,
    },
    address:{
        type:String
    },

},{timestamps:true})

const Usersdata=mongoose.model("Usersdata",Userdata)

export default Usersdata;