import mongoose from "mongoose";

const ConnectDB= async ()=>{
    try {
     await mongoose.connect("mongodb+srv://Ibadullahkhan:Ibad2004@cluster01.se9g5wv.mongodb.net/store")
    console.log(" i m database connected");
    
} catch (error) {
    console.log(error)
}
}

export default ConnectDB