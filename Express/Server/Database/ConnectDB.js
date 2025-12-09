import mongoose from "mongoose";

 export const ConnectDb= async ()=>{

    try {
        
        await mongoose.connect("mongodb+srv://Ibadullahkhan:ibad2004@clusterofcurd.pxawyqq.mongodb.net/Users")
        console.log("i m data base hi hhhh");
        
    } catch (error) {
        console.log(error);
        
    }

}

